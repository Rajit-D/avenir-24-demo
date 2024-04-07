"use client";

import { Canvas } from "@react-three/fiber";
import Blob from "@/components/Blob/Blob.js";
import { ScrollControls, Scroll } from "@react-three/drei";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import image from "@/public/assets/logo.png";
import Image from "next/image";
import { SparklesCore } from "@/components/ui/sparkles";

export default function Home() {
  const words = `Enter the realms of multiverse`;
  return (
    <div className="h-screen w-screen">
      <Canvas camera={{ position: [0.0, 0.0, 8.0] }}>
        <ScrollControls pages={3} damping={0.1}>
          <Blob />
          <Scroll html style={{ width: "100%" }}>
            <div className="h-screen w-screen bg-opacity-20 z-2 backdrop-brightness-100 backdrop-blur-[1.7px] flex justify-center items-center">
              <div className="w-full absolute inset-0 h-screen">
                <SparklesCore
                  id="tsparticlesfullpage"
                  background="transparent"
                  minSize={0.6}
                  maxSize={1.4}
                  particleDensity={70}
                  className="w-full h-full"
                  particleColor="#FFFFFF"
                />
              </div>
              <div className="text-center">
                <div className="flex justify-center items-center">
                  <h1 className="md:text-[7em] text-[3em] font-star-wars text-[#cdcbca]">
                    A
                  </h1>
                  <Image
                    src={image}
                    alt="Avenir Logo"
                    className="md:w-[100px] md:h-[120px] h-[50px] w-[45px]"
                  />
                  <h1 className="md:text-[7em] text-[3em] ml-2 font-star-wars text-[#cdcbca]">
                    ENIR&apos;24
                  </h1>
                </div>
                <TextGenerateEffect words={words} />
              </div>
              <h1 style={{ position: "absolute", top: "100vh" }}>
                second page
              </h1>
              <h1 style={{ position: "absolute", top: "200vh" }}>third page</h1>
            </div>
          </Scroll>
        </ScrollControls>
      </Canvas>
    </div>
  );
}
