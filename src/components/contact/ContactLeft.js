import React from 'react';
import { FaFacebookF,  FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";
import { BsTwitterX } from "react-icons/bs";


const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] flex906 h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="Contact"
      />
      <div >
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Sasank Paruchuri</h3>
        <p className="text-lg font-normal text-gray-400">
          MERN Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          Experienced MERN Stack Developer with a proven track record in designing and implementing robust web applications. Skilled in both front-end and back-end technologies.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 7095811767</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">sasank.p23@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me on</h2>
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
      </div>
    </div>
  );
}

export default ContactLeft;
