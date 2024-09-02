import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF,  FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiFigma, SiMongodb, SiExpress   } from "react-icons/si";
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
          <span className="text-designColor capitalize">Sasank Paruchuri</span>
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
          I leverage the power of the MERN stack to craft seamless and intuitive
          web applications. My approach integrates animation as an essential
          dimension to enhance user experience, guiding users through each
          interaction with clarity and ease. Each motion element is purposefully
          designed not just to add flair, but to create a more engaging and
          user-friendly experience. With a focus on both frontend and backend
          development, I ensure that every application is not only visually
          appealing but also robust and scalable.
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
            <SiMongodb />
            </span>
            <span className="bannerIcon">
            <SiExpress />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
