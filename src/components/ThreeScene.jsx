import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// A floating code-themed cube
const CodeCube = () => {
  const groupRef = useRef();
  const materialRef = useRef();
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x += 0.005;
      groupRef.current.rotation.y += 0.005;
      
      // Pulsing effect on material
      if (materialRef.current) {
        materialRef.current.emissiveIntensity = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.3;
      }
    }
  });
  
  return (
    <group ref={groupRef}>
      {/* Main cube */}
      <mesh>
        <boxGeometry args={[1.8, 1.8, 1.8]} />
        <meshStandardMaterial
          color="#8b5cf6"
          metalness={0.5}
          roughness={0.2}
          transparent
          opacity={0.8}
        />
      </mesh>
      
      {/* Code pattern overlays - using thin boxes instead of Text3D */}
      {/* Front face code pattern */}
      <group position={[0, 0, 0.91]}>
        {/* < symbol */}
        <mesh position={[-0.4, 0, 0.01]}>
          <boxGeometry args={[0.1, 0.5, 0.01]} />
          <meshStandardMaterial 
            ref={materialRef}
            color="#8b5cf6" 
            emissive="#4c1d95"
            emissiveIntensity={1}
          />
        </mesh>
        <mesh position={[-0.2, 0, 0.01]} rotation={[0, 0, Math.PI / 4]}>
          <boxGeometry args={[0.1, 0.5, 0.01]} />
          <meshStandardMaterial 
            color="#8b5cf6" 
            emissive="#4c1d95"
            emissiveIntensity={1}
          />
        </mesh>
        
        {/* > symbol */}
        <mesh position={[0.4, 0, 0.01]}>
          <boxGeometry args={[0.1, 0.5, 0.01]} />
          <meshStandardMaterial 
            color="#8b5cf6" 
            emissive="#4c1d95"
            emissiveIntensity={1}
          />
        </mesh>
        <mesh position={[0.2, 0, 0.01]} rotation={[0, 0, -Math.PI / 4]}>
          <boxGeometry args={[0.1, 0.5, 0.01]} />
          <meshStandardMaterial 
            color="#8b5cf6" 
            emissive="#4c1d95"
            emissiveIntensity={1}
          />
        </mesh>
      </group>
      
      {/* Back face - { } */}
      <group position={[0, 0, -0.91]}>
        {/* { symbol */}
        <mesh position={[-0.3, 0.2, 0.01]}>
          <boxGeometry args={[0.1, 0.3, 0.01]} />
          <meshStandardMaterial 
            color="#8b5cf6" 
            emissive="#4c1d95"
            emissiveIntensity={1}
          />
        </mesh>
        <mesh position={[-0.45, 0.3, 0.01]}>
          <boxGeometry args={[0.4, 0.1, 0.01]} />
          <meshStandardMaterial 
            color="#8b5cf6" 
            emissive="#4c1d95"
            emissiveIntensity={1}
          />
        </mesh>
        <mesh position={[-0.45, -0.3, 0.01]}>
          <boxGeometry args={[0.4, 0.1, 0.01]} />
          <meshStandardMaterial 
            color="#8b5cf6" 
            emissive="#4c1d95"
            emissiveIntensity={1}
          />
        </mesh>
        <mesh position={[-0.3, -0.2, 0.01]}>
          <boxGeometry args={[0.1, 0.3, 0.01]} />
          <meshStandardMaterial 
            color="#8b5cf6" 
            emissive="#4c1d95"
            emissiveIntensity={1}
          />
        </mesh>
        
        {/* } symbol */}
        <mesh position={[0.3, 0.2, 0.01]}>
          <boxGeometry args={[0.1, 0.3, 0.01]} />
          <meshStandardMaterial 
            color="#8b5cf6" 
            emissive="#4c1d95"
            emissiveIntensity={1}
          />
        </mesh>
        <mesh position={[0.45, 0.3, 0.01]}>
          <boxGeometry args={[0.4, 0.1, 0.01]} />
          <meshStandardMaterial 
            color="#8b5cf6" 
            emissive="#4c1d95"
            emissiveIntensity={1}
          />
        </mesh>
        <mesh position={[0.45, -0.3, 0.01]}>
          <boxGeometry args={[0.4, 0.1, 0.01]} />
          <meshStandardMaterial 
            color="#8b5cf6" 
            emissive="#4c1d95"
            emissiveIntensity={1}
          />
        </mesh>
        <mesh position={[0.3, -0.2, 0.01]}>
          <boxGeometry args={[0.1, 0.3, 0.01]} />
          <meshStandardMaterial 
            color="#8b5cf6" 
            emissive="#4c1d95"
            emissiveIntensity={1}
          />
        </mesh>
      </group>
      
      {/* Right face - code lines */}
      <group position={[0.91, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
        {[0.5, 0.2, -0.1, -0.4].map((y, i) => (
          <mesh key={i} position={[0, y, 0.01]}>
            <boxGeometry args={[i % 2 === 0 ? 1 : 0.6, 0.08, 0.01]} />
            <meshStandardMaterial 
              color="#8b5cf6" 
              emissive="#4c1d95"
              emissiveIntensity={1}
            />
          </mesh>
        ))}
      </group>
      
      {/* Left face - binary */}
      <group position={[-0.91, 0, 0]} rotation={[0, -Math.PI / 2, 0]}>
        {[-0.5, -0.3, -0.1, 0.1, 0.3, 0.5].map((y, i) => (
          <group key={i} position={[0, y, 0]}>
            {[0, 1].map((digit, j) => (
              <mesh key={`${i}-${j}`} position={[j * 0.25 - 0.12, 0, 0.01]}>
                <boxGeometry args={[0.1, 0.1, 0.01]} />
                <meshStandardMaterial 
                  color="#8b5cf6"
                  emissive="#4c1d95"
                  emissiveIntensity={1}
                  opacity={(i + j) % 2 === 0 ? 1 : 0.4}
                  transparent
                />
              </mesh>
            ))}
          </group>
        ))}
      </group>
      
      {/* Top face - circuit pattern */}
      <group position={[0, 0.91, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh position={[0, 0, 0.01]}>
          <ringGeometry args={[0.3, 0.4, 32]} />
          <meshStandardMaterial 
            color="#8b5cf6" 
            emissive="#4c1d95"
            emissiveIntensity={1}
          />
        </mesh>
        {[0, 1, 2, 3].map((i) => {
          const angle = (i * Math.PI) / 2;
          return (
            <mesh 
              key={i} 
              position={[
                Math.cos(angle) * 0.5, 
                Math.sin(angle) * 0.5, 
                0.01
              ]}
            >
              <boxGeometry args={[0.1, 0.1, 0.01]} />
              <meshStandardMaterial 
                color="#8b5cf6" 
                emissive="#4c1d95"
                emissiveIntensity={1}
              />
            </mesh>
          );
        })}
        {[0, 1, 2, 3].map((i) => {
          const angle = (i * Math.PI) / 2;
          return (
            <mesh 
              key={i + 4} 
              position={[0, 0, 0.01]}
              rotation={[0, 0, angle]}
            >
              <boxGeometry args={[1, 0.05, 0.01]} />
              <meshStandardMaterial 
                color="#8b5cf6" 
                emissive="#4c1d95"
                emissiveIntensity={1}
              />
            </mesh>
          );
        })}
      </group>
      
      {/* Bottom face - simplified pattern */}
      <group position={[0, -0.91, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        {[-0.5, 0, 0.5].map((x, i) => (
          <mesh key={i} position={[x, 0, 0.01]}>
            <boxGeometry args={[0.1, 1, 0.01]} />
            <meshStandardMaterial 
              color="#8b5cf6" 
              emissive="#4c1d95"
              emissiveIntensity={1}
            />
          </mesh>
        ))}
        {[-0.5, 0, 0.5].map((y, i) => (
          <mesh key={i + 3} position={[0, y, 0.01]}>
            <boxGeometry args={[1, 0.1, 0.01]} />
            <meshStandardMaterial 
              color="#8b5cf6" 
              emissive="#4c1d95"
              emissiveIntensity={1}
            />
          </mesh>
        ))}
      </group>
    </group>
  );
};

const ThreeScene = () => {
  // Choose one of the components to use
  const DisplayComponent = CodeCube; // Currently selected option
  // const DisplayComponent = TechAtom;
  
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <spotLight 
        position={[0, 5, 5]} 
        angle={0.3} 
        penumbra={1} 
        intensity={2} 
        castShadow 
      />
      
      <DisplayComponent />
      
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
      <Stars 
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
    </Canvas>
  );
};

export default ThreeScene;