import React from 'react';
import { FaLinkedinIn } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa"; // For Naukri (since no official icon)
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] flex906 h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="Contact"
      />
      <div>
        <div className="flex flex-col gap-4">
          <h3 className="text-3xl font-bold text-white">Sasank Paruchuri</h3>
          <p className="text-lg font-normal text-gray-400">
            Full Stack Developer (.NET & React)
          </p>
          <p className="text-base text-gray-400 tracking-wide">
            Full Stack Developer skilled in building scalable web applications using .NET for backend development and React for frontend UI.
          </p>
          <p className="text-base text-gray-400 flex items-center gap-2">
            Phone: <span className="text-lightText">+91 7095811767</span>
          </p>
          <p className="text-base text-gray-400 flex items-center gap-2">
            Email: <span className="text-lightText">shashankforce19@gmail.com</span>
          </p>
        </div>

        <div className="flex flex-col gap-4 mt-4">
          <h2 className="text-base uppercase font-titleFont mb-4">Find me on</h2>
          <div className="flex gap-4">
            
            {/* Naukri */}
            <a 
              href="https://www.naukri.com/mnjuser/homepage"
              target="_blank"
              rel="noopener noreferrer"
              className="bannerIcon"
            >
              <FaGlobe />
            </a>

            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/sasank-paruchuri-528787257"
              target="_blank"
              rel="noopener noreferrer"
              className="bannerIcon"
            >
              <FaLinkedinIn />
            </a>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft;
