import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Text } from "@react-three/drei";
import * as THREE from "three";

function GoldParticles({ count = 200 }) {
  const mesh = useRef<THREE.Points>(null);

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 2.5 + Math.random() * 1.5;
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
      sizes[i] = Math.random() * 2 + 0.5;
    }
    return { positions, sizes };
  }, [count]);

  useFrame((_, delta) => {
    if (mesh.current) {
      mesh.current.rotation.y += delta * 0.05;
      mesh.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.positions.length / 3}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={particles.sizes.length}
          array={particles.sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        color="#b8943e"
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
}

function WireframeGlobe() {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (mesh.current) {
      mesh.current.rotation.y += delta * 0.08;
    }
  });

  return (
    <mesh ref={mesh}>
      <sphereGeometry args={[2, 40, 40]} />
      <meshBasicMaterial
        color="#b8943e"
        wireframe
        transparent
        opacity={0.25}
      />
    </mesh>
  );
}

/** Equator text ring: "GLOBAL FREEDOM CAPITAL" repeated around the sphere */
function EquatorTextRing() {
  const groupRef = useRef<THREE.Group>(null);
  const radius = 2.15;
  const text = "GLOBAL FREEDOM CAPITAL  ·  GLOBAL FREEDOM CAPITAL  ·  GLOBAL FREEDOM CAPITAL  ·  ";
  const chars = text.split("");
  const anglePerChar = (Math.PI * 2) / chars.length;

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.08; // same speed as globe
    }
  });

  return (
    <group ref={groupRef}>
      {chars.map((char, i) => {
        const angle = i * anglePerChar;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        return (
          <Text
            key={i}
            position={[x, 0, z]}
            rotation={[0, -angle + Math.PI / 2, 0]}
            fontSize={0.13}
            color="#b8943e"
            anchorX="center"
            anchorY="middle"
            font={undefined}
            letterSpacing={0.05}
          >
            {char}
            <meshBasicMaterial color="#b8943e" transparent opacity={0.7} />
          </Text>
        );
      })}
    </group>
  );
}

function LuxuryRing({ radius = 3.2, speed = 0.03 }: { radius?: number; speed?: number }) {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (mesh.current) {
      mesh.current.rotation.z += delta * speed;
      mesh.current.rotation.x += delta * speed * 0.5;
    }
  });

  return (
    <mesh ref={mesh}>
      <torusGeometry args={[radius, 0.008, 16, 100]} />
      <meshBasicMaterial color="#b8943e" transparent opacity={0.35} />
    </mesh>
  );
}

function FloatingDiamond() {
  return (
    <Float speed={1.5} rotationIntensity={0.8} floatIntensity={1.2}>
      <mesh position={[3.5, 1.5, -1]} scale={0.3}>
        <octahedronGeometry args={[1, 0]} />
        <MeshDistortMaterial
          color="#b8943e"
          wireframe
          transparent
          opacity={0.35}
          distort={0.1}
          speed={2}
        />
      </mesh>
    </Float>
  );
}

function FloatingGem({ position }: { position: [number, number, number] }) {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={0.8}>
      <mesh position={position} scale={0.15}>
        <icosahedronGeometry args={[1, 0]} />
        <meshBasicMaterial color="#b8943e" wireframe transparent opacity={0.25} />
      </mesh>
    </Float>
  );
}

const GlobeScene = () => {
  return (
    <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.4} />
        <WireframeGlobe />
        <EquatorTextRing />
        <GoldParticles count={180} />
        <LuxuryRing radius={3.2} speed={0.03} />
        <LuxuryRing radius={3.6} speed={-0.02} />
        <FloatingDiamond />
        <FloatingGem position={[-3, -1.5, 0.5]} />
        <FloatingGem position={[2, -2, 1]} />
        <FloatingGem position={[-2.5, 2, -0.5]} />
      </Canvas>
    </div>
  );
};

export default GlobeScene;
