"use client"

import { Canvas } from "@react-three/fiber";
import Blob from "@/components/Blob";
import { ScrollControls, Scroll } from "@react-three/drei";

export default function Home() {
  return (
    <div className="container">
      <Canvas camera={{ position: [0.0, 0.0, 8.0] }}>
        <ScrollControls pages={3} damping={0.1}>
          <Blob />
          <Scroll html>
            <h1>html in here (optional)</h1>
            <h1 style={{ position: "absolute", top: "100vh" }}>second page</h1>
            <h1 style={{ position: "absolute", top: "200vh" }}>third page</h1>
          </Scroll>
        </ScrollControls>
      </Canvas>
    </div>
  );
}
