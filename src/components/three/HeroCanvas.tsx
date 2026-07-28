"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

const SHARD_COUNT = 42;

type ShardDatum = {
  target: THREE.Vector3;
  scatter: THREE.Vector3;
  spin: THREE.Vector3;
  wireframe: boolean;
  size: number;
};

function useShardData(): ShardDatum[] {
  return useMemo(() => {
    return new Array(SHARD_COUNT).fill(0).map(() => {
      // punto sobre una esfera (posición final, formando el objeto)
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 1.7;
      const target = new THREE.Vector3(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta),
        r * Math.cos(phi)
      );
      // posición inicial: disperso lejos, en la misma dirección
      const scatter = target.clone().normalize().multiplyScalar(5 + Math.random() * 7);
      scatter.x += (Math.random() - 0.5) * 4;
      scatter.y += (Math.random() - 0.5) * 4;

      const spin = new THREE.Vector3(
        (Math.random() - 0.5) * 1.2,
        (Math.random() - 0.5) * 1.2,
        (Math.random() - 0.5) * 1.2
      );

      return {
        target,
        scatter,
        spin,
        wireframe: Math.random() > 0.55,
        size: 0.07 + Math.random() * 0.06,
      };
    });
  }, []);
}

function Shards({ progress }: { progress: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const shardData = useShardData();
  const eased = useRef(0);

  useFrame((_, delta) => {
    // suaviza el valor de progreso para que no salte
    eased.current += (progress - eased.current) * Math.min(1, delta * 4);
    const p = eased.current;

    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.12;
      groupRef.current.rotation.x += delta * 0.02;

      groupRef.current.children.forEach((child, i) => {
        const d = shardData[i];
        if (!d) return;
        child.position.lerpVectors(d.scatter, d.target, p);
        child.rotation.x += delta * d.spin.x * (1 - p * 0.7);
        child.rotation.y += delta * d.spin.y * (1 - p * 0.7);
        child.rotation.z += delta * d.spin.z * (1 - p * 0.7);
      });
    }
  });

  return (
    <group ref={groupRef}>
      {shardData.map((d, i) => (
        <mesh key={i} position={d.scatter.toArray()}>
          <tetrahedronGeometry args={[d.size]} />
          <meshStandardMaterial
            color={d.wireframe ? "#2563eb" : "#1a1a1a"}
            wireframe={d.wireframe}
            roughness={0.35}
            metalness={0.25}
          />
        </mesh>
      ))}
    </group>
  );
}

function CoreShape({ progress }: { progress: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += delta * 0.06;
    meshRef.current.rotation.y += delta * 0.09;
    const scale = 0.25 + progress * 1.05;
    meshRef.current.scale.setScalar(scale);
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.4, 0]} />
      <meshStandardMaterial color="#1a1a1a" wireframe transparent opacity={0.45} />
    </mesh>
  );
}

function DustField() {
  // partículas de fondo, siempre en movimiento lento (independiente del scroll)
  const groupRef = useRef<THREE.Group>(null);
  const dust = useMemo(
    () =>
      new Array(60).fill(0).map(() => ({
        pos: new THREE.Vector3(
          (Math.random() - 0.5) * 14,
          (Math.random() - 0.5) * 9,
          (Math.random() - 0.5) * 8 - 2
        ),
        speed: 0.05 + Math.random() * 0.1,
      })),
    []
  );

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.015;
    groupRef.current.children.forEach((child, i) => {
      child.position.y += Math.sin(state.clock.elapsedTime * dust[i].speed + i) * 0.0008;
    });
  });

  return (
    <group ref={groupRef}>
      {dust.map((d, i) => (
        <mesh key={i} position={d.pos.toArray()}>
          <sphereGeometry args={[0.015, 6, 6]} />
          <meshBasicMaterial color="#6b6b6b" transparent opacity={0.4} />
        </mesh>
      ))}
    </group>
  );
}

function ParallaxRig({ children }: { children: React.ReactNode }) {
  // sigue al mouse en toda la ventana y le da profundidad a la escena
  const groupRef = useRef<THREE.Group>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    const targetY = mouse.current.x * 0.35;
    const targetX = -mouse.current.y * 0.2;
    const targetPosX = mouse.current.x * 0.3;
    const targetPosY = -mouse.current.y * 0.2;

    const lerpAmt = Math.min(1, delta * 2.5);
    groupRef.current.rotation.y += (targetY - groupRef.current.rotation.y) * lerpAmt;
    groupRef.current.rotation.x += (targetX - groupRef.current.rotation.x) * lerpAmt;
    groupRef.current.position.x += (targetPosX - groupRef.current.position.x) * lerpAmt;
    groupRef.current.position.y += (targetPosY - groupRef.current.position.y) * lerpAmt;
  });

  return <group ref={groupRef}>{children}</group>;
}

export default function HeroCanvas({ progress }: { progress: number }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 6.2], fov: 48 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.7} />
      <pointLight position={[4, 4, 5]} intensity={1.1} />
      <pointLight position={[-4, -2, -3]} intensity={0.3} color="#2563eb" />
      <ParallaxRig>
        <DustField />
        <CoreShape progress={progress} />
        <Shards progress={progress} />
      </ParallaxRig>
    </Canvas>
  );
}
