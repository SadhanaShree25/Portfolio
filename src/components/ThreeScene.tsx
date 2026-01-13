import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingShapeProps {
  position: [number, number, number];
  color: string;
  scale?: number;
  speed?: number;
  distort?: number;
}

const FloatingShape = ({ position, color, scale = 1, speed = 1, distort = 0.3 }: FloatingShapeProps) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 * speed;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={distort}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
};

const FloatingTorus = ({ position, color, scale = 1 }: FloatingShapeProps) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <torusGeometry args={[1, 0.3, 16, 32]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.3}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
    </Float>
  );
};

const FloatingOctahedron = ({ position, color, scale = 1 }: FloatingShapeProps) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.4;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={0.4} floatIntensity={1.2}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.4}
          metalness={0.8}
          roughness={0.2}
          wireframe
        />
      </mesh>
    </Float>
  );
};

const Scene3D = () => {
  const shapes = useMemo(() => [
    { position: [-4, 2, -2] as [number, number, number], color: "#a855f7", scale: 0.8, type: 'icosahedron' },
    { position: [4, -1, -3] as [number, number, number], color: "#3b82f6", scale: 0.6, type: 'torus' },
    { position: [-3, -2, -4] as [number, number, number], color: "#14b8a6", scale: 0.5, type: 'octahedron' },
    { position: [3, 2.5, -2] as [number, number, number], color: "#ec4899", scale: 0.7, type: 'icosahedron' },
    { position: [0, -3, -5] as [number, number, number], color: "#a855f7", scale: 0.4, type: 'torus' },
    { position: [-5, 0, -3] as [number, number, number], color: "#3b82f6", scale: 0.5, type: 'octahedron' },
    { position: [5, 1, -4] as [number, number, number], color: "#14b8a6", scale: 0.6, type: 'icosahedron' },
  ], []);

  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#a855f7" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3b82f6" />
      <pointLight position={[0, 10, -10]} intensity={0.5} color="#ec4899" />
      
      {shapes.map((shape, i) => {
        if (shape.type === 'torus') {
          return <FloatingTorus key={i} {...shape} />;
        } else if (shape.type === 'octahedron') {
          return <FloatingOctahedron key={i} {...shape} />;
        }
        return <FloatingShape key={i} {...shape} />;
      })}
    </>
  );
};

const ThreeScene = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene3D />
      </Canvas>
    </div>
  );
};

export default ThreeScene;
