import React from "react";
import { SparklesCore } from "../ui/sparkles";
import { useState, useEffect } from "react";
import Image from "next/image";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import image from "@/public/assets/logo.png";
import Clock from "../Clock/Clock";

const Home = () => {
  const words = `Enter the realms of multiverse`;
  const [timerDays, setTimerDays] = useState<number>();
  const [timerHours, setTimerHours] = useState<number>();
  const [timerMinutes, setTimerMinutes] = useState<number>();
  const [timerSeconds, setTimerSeconds] = useState<number>();
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
      // const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        // Stop Timer
        setCompleted(true);
        setDays(days * -1);
        clearInterval(interval);
      } else {
        // Update Timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        // setTimerSeconds(seconds);
      }
    });
  };
  useEffect(() => {
    startTimer();
  }, []);
  return (
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
      {!completed ? (
        <Clock timerDays={timerDays} />
      ) : (
        <p className="clock text-purple-600 lg:text-[40px] lg:pl-4 text-[25px] text-center">
          {days}
        </p>
      )}
      <h1 style={{ position: "absolute", top: "100vh" }}>second page</h1>
      <h1 style={{ position: "absolute", top: "200vh" }}>third page</h1>
    </div>
  );
};

export default Home;
