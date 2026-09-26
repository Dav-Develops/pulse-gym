import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';

function PulseGeometricEmblem() {
  const meshRef = useRef();
  const ringRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.8;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z -= delta * 0.4;
      ringRef.current.rotation.x += delta * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1.2}>
      <group>
        {/* Central Icosahedron Wireframe */}
        <mesh ref={meshRef}>
          <icosahedronGeometry args={[1.2, 1]} />
          <meshStandardMaterial
            color="#CCFF00"
            wireframe
            emissive="#CCFF00"
            emissiveIntensity={0.6}
            roughness={0.2}
          />
        </mesh>

        {/* Outer Torus Gyro Ring */}
        <mesh ref={ringRef}>
          <torusGeometry args={[1.8, 0.04, 16, 100]} />
          <meshStandardMaterial
            color="#00F0FF"
            emissive="#00F0FF"
            emissiveIntensity={0.8}
            roughness={0.1}
          />
        </mesh>
      </group>
    </Float>
  );
}

function TreeScene() {
  return (
    <div className="w-full h-44 relative flex items-center justify-center cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <pointLight position={[-5, -5, -5]} color="#00F0FF" intensity={1.5} />
        <pointLight position={[5, 5, 5]} color="#CCFF00" intensity={2} />
        <PulseGeometricEmblem />
      </Canvas>
    </div>
  );
}

export default TreeScene;
