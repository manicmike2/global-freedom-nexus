import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

/** Build a lathe-based fuselage profile for a realistic jet silhouette */
function JetBody() {
  const group = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.15;
    }
  });

  // Fuselage profile points for LatheGeometry (smooth cigar shape)
  const fuselageProfile = useMemo(() => {
    const pts: THREE.Vector2[] = [];
    const len = 3.2;
    const rad = 0.18;
    const segments = 32;
    for (let i = 0; i <= segments; i++) {
      const t = i / segments;
      const z = t * len - len / 2;
      let r: number;
      if (t < 0.12) {
        // nose taper
        r = rad * Math.sin((t / 0.12) * Math.PI * 0.5);
      } else if (t > 0.85) {
        // tail taper
        const tt = (t - 0.85) / 0.15;
        r = rad * (1 - tt * 0.7) * Math.cos(tt * 0.3);
      } else {
        r = rad;
      }
      pts.push(new THREE.Vector2(Math.max(r, 0.01), z));
    }
    return pts;
  }, []);

  // Wing airfoil cross-section via ExtrudeGeometry
  const wingShape = useMemo(() => {
    const shape = new THREE.Shape();
    // Airfoil-ish cross section
    shape.moveTo(0, 0);
    shape.bezierCurveTo(0.3, 0.04, 0.7, 0.03, 1, 0);
    shape.bezierCurveTo(0.7, -0.015, 0.3, -0.01, 0, 0);
    return shape;
  }, []);

  const wingExtrudeSettings = useMemo(() => ({
    depth: 0.01,
    bevelEnabled: false,
  }), []);

  // Tail fin shape
  const tailFinShape = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, 0);
    shape.lineTo(0.02, 0);
    shape.lineTo(0.015, 0.45);
    shape.bezierCurveTo(0.01, 0.48, 0.005, 0.48, 0, 0.45);
    shape.lineTo(0, 0);
    return shape;
  }, []);

  const tailExtrudeSettings = useMemo(() => ({
    depth: 0.28,
    bevelEnabled: true,
    bevelThickness: 0.005,
    bevelSize: 0.005,
    bevelSegments: 2,
  }), []);

  // Horizontal stabilizer
  const hStabShape = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, 0);
    shape.bezierCurveTo(0.15, 0.015, 0.35, 0.01, 0.5, 0);
    shape.bezierCurveTo(0.35, -0.008, 0.15, -0.005, 0, 0);
    return shape;
  }, []);

  const hStabExtrudeSettings = useMemo(() => ({
    depth: 0.005,
    bevelEnabled: false,
  }), []);

  const ivoryMat = useMemo(
    () => ({ color: "#eae2d4", metalness: 0.7, roughness: 0.25 }),
    []
  );
  const goldMat = useMemo(
    () => ({ color: "#c9a96e", metalness: 0.85, roughness: 0.15 }),
    []
  );
  const darkMat = useMemo(
    () => ({ color: "#3a3530", metalness: 0.9, roughness: 0.15 }),
    []
  );
  const windowMat = useMemo(
    () => ({ color: "#8ec8e8", metalness: 0.95, roughness: 0.05, emissive: "#2a6090", emissiveIntensity: 0.15 }),
    []
  );

  // Window positions along fuselage
  const windows = useMemo(() => {
    const w: number[] = [];
    for (let i = 0; i < 7; i++) {
      w.push(-0.5 + i * 0.18);
    }
    return w;
  }, []);

  return (
    <group ref={group} position={[0, 0, 0]} rotation={[0.05, 0, 0.02]}>
      {/* Fuselage — lathe */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <latheGeometry args={[fuselageProfile, 24]} />
        <meshStandardMaterial {...ivoryMat} />
      </mesh>

      {/* Gold pinstripe rings */}
      {[-0.3, 0.9].map((z, i) => (
        <mesh key={i} position={[0, 0, z]}>
          <torusGeometry args={[0.182, 0.004, 8, 24]} />
          <meshStandardMaterial {...goldMat} />
        </mesh>
      ))}

      {/* Cockpit windshield */}
      <mesh position={[0, 0.06, 1.25]} rotation={[0.35, 0, 0]} scale={[0.8, 0.5, 1]}>
        <sphereGeometry args={[0.12, 16, 8, 0, Math.PI * 2, 0, Math.PI * 0.4]} />
        <meshStandardMaterial {...windowMat} transparent opacity={0.7} />
      </mesh>

      {/* Passenger windows */}
      {windows.map((z, i) => (
        <group key={i}>
          <mesh position={[0.175, 0.04, z]} rotation={[0, 0, 0]}>
            <boxGeometry args={[0.01, 0.035, 0.06]} />
            <meshStandardMaterial {...windowMat} transparent opacity={0.6} />
          </mesh>
          <mesh position={[-0.175, 0.04, z]} rotation={[0, 0, 0]}>
            <boxGeometry args={[0.01, 0.035, 0.06]} />
            <meshStandardMaterial {...windowMat} transparent opacity={0.6} />
          </mesh>
        </group>
      ))}

      {/* Left wing */}
      <group position={[-0.05, -0.04, -0.05]} rotation={[0, 0, -0.06]} scale={[1.8, 1, 0.55]}>
        <mesh>
          <extrudeGeometry args={[wingShape, wingExtrudeSettings]} />
          <meshStandardMaterial {...ivoryMat} side={THREE.DoubleSide} />
        </mesh>
      </group>

      {/* Right wing */}
      <group position={[0.05, -0.04, -0.05]} rotation={[0, Math.PI, 0.06]} scale={[1.8, 1, 0.55]}>
        <mesh>
          <extrudeGeometry args={[wingShape, wingExtrudeSettings]} />
          <meshStandardMaterial {...ivoryMat} side={THREE.DoubleSide} />
        </mesh>
      </group>

      {/* Wing gold accent strips */}
      <mesh position={[0, -0.035, -0.15]} scale={[3.4, 0.005, 0.02]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial {...goldMat} />
      </mesh>

      {/* Vertical tail fin */}
      <group position={[-0.14, 0.0, -1.35]} rotation={[0.12, 0, 0]}>
        <mesh>
          <extrudeGeometry args={[tailFinShape, tailExtrudeSettings]} />
          <meshStandardMaterial {...ivoryMat} side={THREE.DoubleSide} />
        </mesh>
        {/* Gold tail stripe */}
        <mesh position={[0.01, 0.2, 0.14]} scale={[0.005, 0.22, 0.26]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial {...goldMat} />
        </mesh>
      </group>

      {/* Left horizontal stabilizer */}
      <group position={[-0.02, 0.0, -1.25]} rotation={[0, 0, -0.04]} scale={[0.9, 0.8, 0.45]}>
        <mesh>
          <extrudeGeometry args={[hStabShape, hStabExtrudeSettings]} />
          <meshStandardMaterial {...ivoryMat} side={THREE.DoubleSide} />
        </mesh>
      </group>

      {/* Right horizontal stabilizer */}
      <group position={[0.02, 0.0, -1.25]} rotation={[0, Math.PI, 0.04]} scale={[0.9, 0.8, 0.45]}>
        <mesh>
          <extrudeGeometry args={[hStabShape, hStabExtrudeSettings]} />
          <meshStandardMaterial {...ivoryMat} side={THREE.DoubleSide} />
        </mesh>
      </group>

      {/* Left engine nacelle */}
      <group position={[-0.55, -0.08, -0.1]}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.055, 0.07, 0.35, 16]} />
          <meshStandardMaterial {...darkMat} />
        </mesh>
        {/* Engine intake ring */}
        <mesh position={[0, 0, 0.18]}>
          <torusGeometry args={[0.058, 0.008, 8, 16]} />
          <meshStandardMaterial {...goldMat} />
        </mesh>
        {/* Exhaust glow */}
        <mesh position={[0, 0, -0.18]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.04, 0.05, 0.04, 12]} />
          <meshStandardMaterial color="#ff9944" emissive="#ff6600" emissiveIntensity={0.3} transparent opacity={0.5} />
        </mesh>
      </group>

      {/* Right engine nacelle */}
      <group position={[0.55, -0.08, -0.1]}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.055, 0.07, 0.35, 16]} />
          <meshStandardMaterial {...darkMat} />
        </mesh>
        <mesh position={[0, 0, 0.18]}>
          <torusGeometry args={[0.058, 0.008, 8, 16]} />
          <meshStandardMaterial {...goldMat} />
        </mesh>
        <mesh position={[0, 0, -0.18]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.04, 0.05, 0.04, 12]} />
          <meshStandardMaterial color="#ff9944" emissive="#ff6600" emissiveIntensity={0.3} transparent opacity={0.5} />
        </mesh>
      </group>

      {/* Landing gear (subtle, retracted look) */}
      <mesh position={[0, -0.19, 0.6]}>
        <sphereGeometry args={[0.025, 8, 8]} />
        <meshStandardMaterial {...darkMat} />
      </mesh>
      <mesh position={[-0.12, -0.19, -0.3]}>
        <sphereGeometry args={[0.02, 8, 8]} />
        <meshStandardMaterial {...darkMat} />
      </mesh>
      <mesh position={[0.12, -0.19, -0.3]}>
        <sphereGeometry args={[0.02, 8, 8]} />
        <meshStandardMaterial {...darkMat} />
      </mesh>
    </group>
  );
}

function TrailParticles({ count = 80 }) {
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 6;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 4;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    return pos;
  }, [count]);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.015} color="#c9a96e" transparent opacity={0.4} sizeAttenuation />
    </points>
  );
}

const LuxuryShowcase = () => {
  return (
    <div className="w-full h-full min-h-[400px]">
      <Canvas
        camera={{ position: [2.5, 1.2, 3], fov: 35 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={0.9} color="#ffd89b" />
        <directionalLight position={[-3, 2, -3]} intensity={0.35} color="#c9a96e" />
        <pointLight position={[0, 3, 0]} intensity={0.5} color="#fff5e0" />
        <spotLight position={[3, 4, 2]} angle={0.3} penumbra={0.8} intensity={0.4} color="#ffe8c0" />
        <Float speed={0.6} rotationIntensity={0.08} floatIntensity={0.2}>
          <JetBody />
        </Float>
        <TrailParticles />
      </Canvas>
    </div>
  );
};

export default LuxuryShowcase;
