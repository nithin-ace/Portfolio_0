'use client';

import { useRef, useState, useMemo, Suspense, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Float, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'framer-motion';

const initialSkills = [
  { name: "SQL", pos: [2, 1, 0], subSkills: "JOINs, CTEs, Window Functions, ETL" },
  { name: "Python", pos: [-2, 1.5, 1], subSkills: "Pandas, NumPy, Matplotlib, Scikit-learn" },
  { name: "Excel", pos: [0, -2, 0.5], subSkills: "VLOOKUP, Pivot Tables, Macros, Power Query" },
  { name: "Power BI", pos: [2.5, -1, -1], subSkills: "DAX, Data Modeling, Dashboard Design" },
  { name: "Pandas", pos: [-2.5, -0.5, -0.5], subSkills: "DataFrames, Series, Aggregation, Handling NaNs" },
  { name: "Statistics", pos: [0, 2, -1], subSkills: "Hypothesis Testing, Regression, Probability" },
];

function SkillNode({ name, pos, subSkills, onSelect, onMove }: { name: string, pos: any, subSkills: string, onSelect: (s: string, n: string) => void, onMove: (n: string, p: THREE.Vector3) => void }) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);
  const offset = useMemo(() => Math.random() * Math.PI * 2, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    // Holographic Drift (sine wave)
    const yOffset = Math.sin(time + offset) * 0.1;
    meshRef.current.position.y = pos[1] + yOffset;
    
    meshRef.current.rotation.y += 0.01;
    meshRef.current.rotation.z += 0.005;
    
    // Update global position for connections
    onMove(name, meshRef.current.position);
  });

  return (
    <group>
      <mesh
        ref={meshRef}
        position={pos}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
        onClick={(e) => {
          e.stopPropagation();
          onSelect(subSkills, name);
        }}
      >
        <boxGeometry args={[0.25, 0.25, 0.25]} />
        <meshStandardMaterial 
          color={hovered ? "#fff" : "#666"} 
          emissive={"#fff"} 
          emissiveIntensity={hovered ? 2 : 0.5}
          transparent
          opacity={1}
        />
      </mesh>
      <Text
        position={[pos[0], pos[1] - 0.6, pos[2]]}
        fontSize={0.2}
        color="white"
        anchorX="center"
        fillOpacity={0.7}
      >
        {name}
      </Text>
    </group>
  );
}

function Connections({ skillPositions }: { skillPositions: React.MutableRefObject<Record<string, THREE.Vector3>> }) {
  const lineRef = useRef<THREE.LineSegments>(null!);
  
  useFrame(() => {
    const points: THREE.Vector3[] = [];
    const keys = Object.keys(skillPositions.current);
    keys.forEach((k1, i) => {
      keys.slice(i + 1).forEach((k2) => {
        points.push(skillPositions.current[k1]);
        points.push(skillPositions.current[k2]);
      });
    });
    
    if (lineRef.current) {
      lineRef.current.geometry.setFromPoints(points);
    }
  });

  return (
    <lineSegments ref={lineRef}>
      <bufferGeometry />
      <lineBasicMaterial color="#ffffff" opacity={0.05} transparent />
    </lineSegments>
  );
}

export default function SkillCanvas() {
  const [selected, setSelected] = useState<{ name: string, sub: string } | null>(null);
  const skillPositions = useRef<Record<string, THREE.Vector3>>({});
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMove = (name: string, pos: THREE.Vector3) => {
    skillPositions.current[name] = pos.clone();
  };

  const cameraZ = isMobile ? 12 : 8;
  const fov = isMobile ? 45 : 40;

  return (
    <div style={{ width: '100%', height: isMobile ? '450px' : '600px', position: 'relative', overflow: 'hidden' }}>
      <Canvas key={`${cameraZ}`} camera={{ position: [0, 0, cameraZ], fov: fov }}>
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#fff" />
        <Suspense fallback={null}>
          {initialSkills.map((skill, i) => (
            <SkillNode 
              key={i} 
              {...skill} 
              onSelect={(sub, name) => setSelected({ name, sub })} 
              onMove={handleMove}
            />
          ))}
          <Connections skillPositions={skillPositions} />
          <OrbitControls 
            enableZoom={true} 
            minDistance={4} 
            maxDistance={15} 
            enablePan={false} 
            dampingFactor={0.05}
            enableDamping={true}
          />
        </Suspense>
      </Canvas>

      {/* Detailed Skill HUD */}
      <AnimatePresence>
        {selected && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: isMobile ? 0 : 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.9, x: isMobile ? 0 : 20 }}
            className="glass"
            style={{
              position: 'absolute',
              bottom: isMobile ? '1rem' : '2rem',
              right: isMobile ? '1rem' : '2rem',
              left: isMobile ? '1rem' : 'auto',
              width: isMobile ? 'auto' : '320px',
              padding: isMobile ? '1.2rem' : '2rem',
              color: '#fff',
              zIndex: 100,
              border: '1px solid #fff',
              backgroundColor: '#000'
            }}
          >
            <div style={{ fontSize: '0.6rem', opacity: 0.5, marginBottom: '0.5rem', letterSpacing: '0.2em' }}>NODE_ID: {selected.name}</div>
            <div style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem', borderBottom: '1px solid #333', paddingBottom: '0.5rem' }}>Sub-Skill Inventory</div>
            <div style={{ fontSize: '0.8rem', lineHeight: 1.6, fontFamily: 'monospace', color: '#ccc' }}>
              {selected.sub.split(', ').map((s, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: '#fff' }}>▸</span> {s}
                </div>
              ))}
            </div>
            <button 
              onClick={() => setSelected(null)}
              style={{ 
                marginTop: '1.5rem', 
                width: '100%', 
                padding: '0.5rem', 
                background: '#fff', 
                color: '#000', 
                border: 'none', 
                fontWeight: 700, 
                fontSize: '0.7rem',
                cursor: 'none'
              }}
            >
              CLOSE_MODULE
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
