import React, { useState } from "react";
import { HiArrowRight } from "react-icons/hi";

const Card = ({ title, des, icon, detailedDes }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDetails = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full px-12 py-10 rounded-lg shadow-shadowOne bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-1000">
      <div className="overflow-hidden">
        <div
          className={`flex flex-col gap-10 transform transition-transform duration-500 ${
            isOpen
              ? "translate-y-0"
              : "translate-y-16 group-hover:translate-y-0"
          }`}
        >
          <div className="w-10 h-8 flex flex-col justify-between">
            {icon ? (
              <span className="text-5xl text-designColor">{icon}</span>
            ) : (
              <>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
              </>
            )}
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-xl md:text-2xl font-titleFont font-bold text-gray-300">
              {title}
            </h2>
            <p className="text-base text-gray-400">{des}</p>
            {isOpen && (
              <p className="text-base text-gray-300 mt-4">{detailedDes}</p>
            )}
            <button
              className="text-2xl text-designColor mt-4 flex items-center cursor-pointer"
              onClick={toggleDetails}
            >
              <HiArrowRight
                className={` border23 transform transition-transform duration-300 ${
                  isOpen ? "rotate-90" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
