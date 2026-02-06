import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";

function RobotModel() {
  const { scene } = useGLTF("/models/robot.glb");
  const robotRef = useRef();
  const { mouse } = useThree();
  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    if (!robotRef.current) return;

    // 🔄 Always slow rotation
    robotRef.current.rotation.y += 0.01;

    if (hovered) {
      // 🎯 React only when hovered
      const targetX = mouse.y * 0.4;
      const targetZ = -mouse.x * 0.4;

      robotRef.current.rotation.x = THREE.MathUtils.lerp(
        robotRef.current.rotation.x,
        targetX,
        0.1
      );

      robotRef.current.rotation.z = THREE.MathUtils.lerp(
        robotRef.current.rotation.z,
        targetZ,
        0.1
      );
    } else {
      // 🧘 Smooth reset when not hovered
      robotRef.current.rotation.x = THREE.MathUtils.lerp(
        robotRef.current.rotation.x,
        0,
        0.08
      );

      robotRef.current.rotation.z = THREE.MathUtils.lerp(
        robotRef.current.rotation.z,
        0,
        0.08
      );
    }
  });

  return (
    <primitive
      ref={robotRef}
      object={scene}
      scale={1.8}
      position={[0, -1.3, 0]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    />
  );
}

export default function RobotAbout() {
  return (
    <div className="robot-card">
      <Canvas camera={{ position: [0, 1, 4], fov: 50 }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[3, 5, 5]} intensity={2.5} />
        <RobotModel />
      </Canvas>
    </div>
  );
}
