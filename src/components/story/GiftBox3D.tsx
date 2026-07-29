import { Suspense, useEffect, useRef, useState, type PointerEvent, type RefObject } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

type Drag = { yaw: number; pitch: number };

const GOLD = "#d4af37";
const BLUSH = "#ffb3ce";
const BLUSH_DEEP = "#e5657e";
const BODY_PINK = "#ff9ec2";

function Ribbon() {
  return (
    <group>
      <mesh position={[0, 0, 0.86]}>
        <boxGeometry args={[0.32, 1.62, 0.02]} />
        <meshStandardMaterial color={BLUSH_DEEP} roughness={0.4} metalness={0.1} />
      </mesh>
      <mesh position={[0, 0, -0.86]}>
        <boxGeometry args={[0.32, 1.62, 0.02]} />
        <meshStandardMaterial color={BLUSH_DEEP} roughness={0.4} metalness={0.1} />
      </mesh>
      <mesh position={[0.86, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[0.32, 1.62, 0.02]} />
        <meshStandardMaterial color={BLUSH_DEEP} roughness={0.4} metalness={0.1} />
      </mesh>
      <mesh position={[-0.86, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[0.32, 1.62, 0.02]} />
        <meshStandardMaterial color={BLUSH_DEEP} roughness={0.4} metalness={0.1} />
      </mesh>
    </group>
  );
}

function Bow() {
  return (
    <group position={[0, 0.72, 0]}>
      <mesh position={[-0.28, 0.05, 0]} rotation={[Math.PI / 2, 0, -0.5]}>
        <torusGeometry args={[0.22, 0.09, 12, 24, Math.PI * 1.5]} />
        <meshStandardMaterial color={BLUSH} roughness={0.35} metalness={0.15} />
      </mesh>
      <mesh position={[0.28, 0.05, 0]} rotation={[Math.PI / 2, 0, 0.5]}>
        <torusGeometry args={[0.22, 0.09, 12, 24, Math.PI * 1.5]} />
        <meshStandardMaterial color={BLUSH} roughness={0.35} metalness={0.15} />
      </mesh>
      <mesh position={[0, 0.02, 0]}>
        <sphereGeometry args={[0.14, 20, 20]} />
        <meshStandardMaterial color={GOLD} roughness={0.25} metalness={0.5} />
      </mesh>
      <mesh position={[-0.09, -0.28, 0]} rotation={[0, 0, 0.15]}>
        <boxGeometry args={[0.1, 0.4, 0.02]} />
        <meshStandardMaterial color={BLUSH_DEEP} roughness={0.4} />
      </mesh>
      <mesh position={[0.09, -0.28, 0]} rotation={[0, 0, -0.15]}>
        <boxGeometry args={[0.1, 0.4, 0.02]} />
        <meshStandardMaterial color={BLUSH_DEEP} roughness={0.4} />
      </mesh>
    </group>
  );
}

function GiftBoxModel({
  opened,
  onOpen,
  drag,
}: {
  opened: boolean;
  onOpen: () => void;
  drag: RefObject<Drag>;
}) {
  const lidPivot = useRef<THREE.Group>(null);
  const group = useRef<THREE.Group>(null);
  const angle = useRef(0);
  const autoYaw = useRef(0);
  const [hovered, setHovered] = useState(false);

  useFrame((_, delta) => {
    const target = opened ? -2.2 : 0;
    angle.current = THREE.MathUtils.damp(angle.current, target, 4, delta);
    if (lidPivot.current) lidPivot.current.rotation.x = angle.current;

    if (!opened) autoYaw.current += delta * 0.25;
    if (group.current) {
      group.current.rotation.y = autoYaw.current + drag.current.yaw;
      group.current.rotation.x = drag.current.pitch;
    }
  });

  return (
    <group ref={group}>
      {/* Box body */}
      <mesh position={[0, -0.3, 0]}>
        <boxGeometry args={[1.7, 1.1, 1.7]} />
        <meshStandardMaterial color={BODY_PINK} roughness={0.35} metalness={0.1} />
      </mesh>
      <group position={[0, -0.3, 0]}>
        <Ribbon />
      </group>

      {/* Lid, hinged at the back edge */}
      <group ref={lidPivot} position={[0, 0.26, -0.85]}>
        <mesh
          position={[0, 0.06, 0.85]}
          onClick={() => !opened && onOpen()}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <boxGeometry args={[1.78, 0.32, 1.78]} />
          <meshStandardMaterial
            color={hovered && !opened ? "#ffd6e5" : "#ffc9dd"}
            roughness={0.3}
            metalness={0.15}
          />
        </mesh>
        {!opened && (
          <group position={[0, 0.24, 0.85]}>
            <Bow />
          </group>
        )}
      </group>
    </group>
  );
}

export function GiftBox3D({ opened, onOpen }: { opened: boolean; onOpen: () => void }) {
  const [mounted, setMounted] = useState(false);
  const drag = useRef<Drag>({ yaw: 0, pitch: 0 });
  const dragging = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => setMounted(true), []);

  const onPointerDown = (e: PointerEvent) => {
    dragging.current = { x: e.clientX, y: e.clientY };
  };
  const onPointerMove = (e: PointerEvent) => {
    if (!dragging.current) return;
    const dx = e.clientX - dragging.current.x;
    const dy = e.clientY - dragging.current.y;
    dragging.current = { x: e.clientX, y: e.clientY };
    drag.current.yaw += dx * 0.008;
    drag.current.pitch = THREE.MathUtils.clamp(drag.current.pitch - dy * 0.006, -0.5, 0.5);
  };
  const onPointerUp = () => {
    dragging.current = null;
  };

  if (!mounted) {
    return <div className="h-56 w-56 sm:h-72 sm:w-72 md:h-80 md:w-80" aria-hidden />;
  }

  return (
    <div
      className="h-56 w-56 cursor-grab touch-none active:cursor-grabbing sm:h-72 sm:w-72 md:h-80 md:w-80"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
    >
      <Canvas camera={{ position: [2.6, 2, 3.2], fov: 40 }} dpr={[1, 2]}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[3, 4, 2]} intensity={1.4} castShadow />
        <directionalLight position={[-3, 2, -2]} intensity={0.4} color="#ffd6e5" />
        <Suspense fallback={null}>
          <GiftBoxModel opened={opened} onOpen={onOpen} drag={drag} />
        </Suspense>
      </Canvas>
    </div>
  );
}
