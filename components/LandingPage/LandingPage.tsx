"use client";

import { Canvas } from "@react-three/fiber";
import Blob from "@/components/Blob/Blob";
import { ScrollControls, Scroll } from "@react-three/drei";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import image from "@/public/assets/logo.png";
import metaGirl from "@/public/assets/meta-girl.png";
import Image from "next/image";
import { SparklesCore } from "@/components/ui/sparkles";
import { useState, useEffect } from "react";
import Clock from "@/components/Clock/Clock";
import { motion } from "framer-motion";
import Sponsors from "../Sponsors/Sponsors";
import Statistics from "../Statistics/Statistics";

export default function LandingPage() {
  const words = `Enter the realms of multiverse`;
  const [timerDays, setTimerDays] = useState<number>();
  const [completed, setCompleted] = useState<boolean>(false);
  const [days, setDays] = useState<number>(1);

  let interval: string | number | NodeJS.Timeout;

  const startTimer = () => {
    const countDownDate = new Date("May 6,2024 ").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));

      if (distance < 0) {
        setCompleted(true);
        setDays(days * -1);
        clearInterval(interval);
      } else {
        setTimerDays(days);
      }
    });
  };
  useEffect(() => {
    startTimer();
  });
  return (
    <div className="h-screen w-screen">
      <Canvas camera={{ position: [0.0, 0.0, 8.0] }}>
        <ScrollControls pages={4} damping={0.1}>
          <Blob />
          <Scroll html style={{ width: "100%" }}>
            <div className="bg-opacity-20 h-full z-2 backdrop-brightness-100 backdrop-blur-[1.7px] flex justify-center items-center flex-col">
              <div className="h-screen w-screen flex justify-center items-center">
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
                <div className="flex justify-center items-center flex-col mt-[100px]">
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
                  <div className="flex justify-center items-center flex-col">
                    {!completed ? (
                      <Clock timerDays={timerDays} />
                    ) : (
                      <p className="clock text-purple-600 lg:text-[40px] lg:pl-4 text-[25px] text-center">
                        {days}
                      </p>
                    )}
                    <p className="text-red-500 text-center relative top-[55px] font-strike-light md:tracking-[7px] md:left-[7px] left-[3.5px]">
                      until showtime
                    </p>
                  </div>
                </div>
              </div>
              <div className="h-screen w-screen flex justify-center items-center">
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
                <div className="flex">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.5,
                      ease: [0, 0.71, 0.2, 1.01],
                    }}
                  >
                    <div className="flex justify-center items-center md:flex-row flex-col-reverse">
                      <div className="flex justify-center md:items-start items-center flex-col md:w-1/2 p-[30px] md:ml-[50px]">
                        <p className="font-strike text-red-400 md:text-[30px] text-[20px] md:pb-7">
                          About the theme
                        </p>
                        <p className="font-strike-light text-white md:text-left text-center md:text-[16px] text-[10px]">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Autem modi hic, vitae quod eaque, numquam sit
                          beatae temporibus repudiandae cupiditate animi,
                          dolores accusamus blanditiis facere fuga fugit
                          repellat. Assumenda laborum, obcaecati excepturi,
                          aperiam perferendis ullam veniam corrupti dolorum
                          ratione dicta esse facere repellendus non. Et dolorem
                          alias fugit laudantium saepe excepturi sapiente.
                          Provident sint beatae impedit odit quam architecto
                          enim dicta sed adipisci fuga totam eligendi nisi earum
                          quisquam delectus voluptates dignissimos fugiat
                          suscipit maiores veniam nam, soluta reiciendis aperiam
                          iusto! Ipsam perferendis incidunt voluptatibus maxime,
                          fugiat provident, veritatis totam, numquam cupiditate
                          explicabo natus quos. Beatae nemo temporibus ad rem.
                        </p>
                      </div>
                      <div className="md:w-1/2">
                        <motion.div
                          initial={{ opacity: 0, scale: 0.5 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 2.0,
                            delay: 1.0,
                            ease: [0, 0.71, 0.2, 1.01],
                          }}
                        >
                          <Image
                            src={metaGirl}
                            alt=""
                            height={500}
                            width={500}
                            className="md:relative md:left-[160px] md:bottom-[60px] md:h-[500px] h-[270px] md:w-[350px] w-[210px]"
                          />
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
              <div className="h-screen w-screen flex justify-center items-center">
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
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  // animate={{ opacity: 1, scale: 1 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                >
                  <div className="flex items-center justify-center md:flex-row-reverse flex-col">
                    <div className="flex justify-center md:items-start items-center flex-col md:w-1/2 p-[30px] md:ml-[50px]">
                      <p className="font-strike text-red-400 md:text-[30px] text-[20px] md:pb-7 text-right">
                        About Avenir
                      </p>
                      <p className="font-strike-light text-white md:text-[16px] md:text-left text-center text-[10px]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Autem modi hic, vitae quod eaque, numquam sit beatae
                        temporibus repudiandae cupiditate animi, dolores
                        accusamus blanditiis facere fuga fugit repellat.
                        Assumenda laborum, obcaecati excepturi, aperiam
                        perferendis ullam veniam corrupti dolorum ratione dicta
                        esse facere repellendus non. Et dolorem alias fugit
                        laudantium saepe excepturi sapiente. Provident sint
                        beatae impedit odit quam architecto enim dicta sed
                        adipisci fuga totam eligendi nisi earum quisquam
                        delectus voluptates dignissimos fugiat suscipit maiores
                        veniam nam, soluta reiciendis aperiam iusto! Ipsam
                        perferendis incidunt voluptatibus maxime, fugiat
                        provident, veritatis totam, numquam cupiditate explicabo
                        natus quos. Beatae nemo temporibus ad rem.
                      </p>
                    </div>
                    <div className=" w-1/2"></div>
                  </div>
                </motion.div>
              </div>
              <div className="h-screen w-screen flex justify-center items-center">
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
                <div className="flex justify-center items-center flex-col">
                  <div className="flex justify-center items-center flex-col mb-5">
                    <p className="font-strike md:text-[30px] text-[20px] text-center text-red-400 text-wrap">
                      Our Statistics over the years
                    </p>
                    <Statistics />
                  </div>
                  <Sponsors />
                </div>
              </div>
            </div>
          </Scroll>
        </ScrollControls>
      </Canvas>
    </div>
  );
}
