import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function JetBody() {
  const group = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <group ref={group} position={[0, 0, 0]} rotation={[0.1, 0, 0.05]}>
      {/* Fuselage */}
      <mesh position={[0, 0, 0]}>
        <capsuleGeometry args={[0.15, 1.8, 8, 16]} />
        <meshStandardMaterial color="#e8dcc8" metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Nose cone */}
      <mesh position={[0, 0, 1.2]} rotation={[Math.PI / 2, 0, 0]}>
        <coneGeometry args={[0.15, 0.5, 16]} />
        <meshStandardMaterial color="#e8dcc8" metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Wings */}
      <mesh position={[0, -0.02, -0.1]} rotation={[0, 0, 0]} scale={[3, 0.03, 0.6]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#c9a96e" metalness={0.6} roughness={0.3} />
      </mesh>
      {/* Tail vertical */}
      <mesh position={[0, 0.25, -0.9]} rotation={[0, 0, 0]} scale={[0.03, 0.5, 0.4]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#c9a96e" metalness={0.6} roughness={0.3} />
      </mesh>
      {/* Tail horizontal */}
      <mesh position={[0, 0.02, -0.9]} rotation={[0, 0, 0]} scale={[0.8, 0.03, 0.3]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#c9a96e" metalness={0.6} roughness={0.3} />
      </mesh>
      {/* Engine 1 */}
      <mesh position={[0.5, -0.1, -0.2]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.06, 0.08, 0.3, 12]} />
        <meshStandardMaterial color="#a08555" metalness={0.9} roughness={0.1} />
      </mesh>
      {/* Engine 2 */}
      <mesh position={[-0.5, -0.1, -0.2]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.06, 0.08, 0.3, 12]} />
        <meshStandardMaterial color="#a08555" metalness={0.9} roughness={0.1} />
      </mesh>
    </group>
  );
}

function YachtHull() {
  const group = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.12;
      group.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
    }
  });

  return (
    <group ref={group} position={[0, -0.3, 0]} rotation={[0.15, 0, 0]}>
      {/* Hull */}
      <mesh position={[0, 0, 0]} scale={[0.4, 0.2, 1.2]}>
        <capsuleGeometry args={[0.5, 1, 8, 16]} />
        <meshStandardMaterial color="#e8dcc8" metalness={0.7} roughness={0.3} />
      </mesh>
      {/* Deck */}
      <mesh position={[0, 0.12, -0.1]} scale={[0.35, 0.02, 0.9]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#f0e6d2" metalness={0.5} roughness={0.4} />
      </mesh>
      {/* Cabin */}
      <mesh position={[0, 0.22, -0.15]} scale={[0.2, 0.08, 0.35]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#c9a96e" metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Upper deck */}
      <mesh position={[0, 0.3, -0.2]} scale={[0.15, 0.02, 0.25]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#e8dcc8" metalness={0.6} roughness={0.3} />
      </mesh>
      {/* Mast */}
      <mesh position={[0, 0.5, -0.2]}>
        <cylinderGeometry args={[0.008, 0.008, 0.5, 8]} />
        <meshStandardMaterial color="#c9a96e" metalness={0.9} roughness={0.1} />
      </mesh>
    </group>
  );
}

function WaterPlane() {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (mesh.current) {
      const material = mesh.current.material as THREE.MeshStandardMaterial;
      material.opacity = 0.08 + Math.sin(state.clock.elapsedTime * 0.3) * 0.02;
    }
  });

  return (
    <mesh ref={mesh} position={[0, -0.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[10, 10, 20, 20]} />
      <meshStandardMaterial
        color="#1a3a5c"
        transparent
        opacity={0.08}
        wireframe
      />
    </mesh>
  );
}

function TrailParticles({ count = 60 }) {
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

interface LuxuryShowcaseProps {
  model: "jet" | "yacht";
}

const LuxuryShowcase = ({ model }: LuxuryShowcaseProps) => {
  return (
    <div className="w-full h-full min-h-[400px]">
      <Canvas
        camera={{ position: [2.5, 1.5, 3], fov: 40 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} color="#ffd89b" />
        <directionalLight position={[-3, 2, -3]} intensity={0.3} color="#c9a96e" />
        <pointLight position={[0, 3, 0]} intensity={0.5} color="#fff5e0" />
        <Float speed={0.8} rotationIntensity={0.1} floatIntensity={0.3}>
          {model === "jet" ? <JetBody /> : <YachtHull />}
        </Float>
        <TrailParticles />
        {model === "yacht" && <WaterPlane />}
      </Canvas>
    </div>
  );
};

export default LuxuryShowcase;
