import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiCsharp, SiDotnet, SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Full Stack Developer.", "UI Designer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">Sasank Paruchoori</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I create modern, high-performance web applications by blending the
          power of .NET on the backend with the elegance and flexibility of
          React on the frontend. I focus on building clean and secure APIs,
          scalable architectures, and smooth data flow that keeps applications
          reliable and fast. On the UI side, I bring ideas to life with
          intuitive layouts, purposeful animations, and seamless interactions
          that make the experience feel natural and engaging. Every screen is
          designed with clarity, responsiveness, and performance in mind,
          ensuring users feel confident and comfortable as they navigate.
          Whether I’m developing complex modules, optimizing load times, or
          crafting user-centric workflows, my goal is to deliver applications
          that are visually appealing, technically strong, and built for
          long-term growth. I strive to create digital experiences that are not
          just functional, but memorable and enjoyable.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="bannerIcon"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="bannerIcon"
            >
              <BsTwitterX />
            </a>
            <a
              href="https://www.linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="bannerIcon"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4"> 
            <span className="bannerIcon"> 
              <FaReact /> 
            </span>
            <span className="bannerIcon"> 
              <FaNodeJs />
            </span>

            <span className="bannerIcon">
              <SiCsharp />
            </span>
            <span className="bannerIcon">
              <SiDotnet />
            </span>
            <span className="bannerIcon">
              <SiMongodb />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
