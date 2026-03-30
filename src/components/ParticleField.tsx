import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function FloatingParticles({ count = 80 }) {
  const mesh = useRef<THREE.Points>(null);

  const { positions, speeds } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const spd = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
      spd[i] = 0.005 + Math.random() * 0.01;
    }
    return { positions: pos, speeds: spd };
  }, [count]);

  useFrame(() => {
    if (mesh.current) {
      const posArray = mesh.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < count; i++) {
        posArray[i * 3 + 1] += speeds[i];
        if (posArray[i * 3 + 1] > 5) {
          posArray[i * 3 + 1] = -5;
        }
      }
      mesh.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#c9a96e" transparent opacity={0.3} sizeAttenuation />
    </points>
  );
}

const ParticleField = () => {
  return (
    <div className="absolute inset-0 pointer-events-none opacity-60" style={{ zIndex: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[1, 1]}
        gl={{ alpha: true }}
        style={{ background: "transparent" }}
      >
        <FloatingParticles count={60} />
      </Canvas>
    </div>
  );
};

export default ParticleField;
