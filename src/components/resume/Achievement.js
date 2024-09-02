import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Achievements</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Completed Three Major Projects"
            subTitle="Matrical Technologies"
            result="2023"
            des="Successfully delivered Three significant projects: Study-X, Salon Management, and Payroll Management, with key contributions to Payroll Management and Salon Management."
          />
          <ResumeCard
            title="Design and CSS Responsiveness"
            subTitle="Matrical Technologies"
            result="2023"
            des="Led the design and CSS responsiveness for Payroll Management and Salon Management projects, ensuring a seamless user experience."
          />
          <ResumeCard
            title="Full Stack Development"
            subTitle="Matrical Technologies"
            result="2023"
            des="Handled the backend using Node.js and MongoDB for Payroll Management and Salon Management, demonstrating proficiency in full stack development."
          />
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="MERN Full Stack Developer"
            subTitle="Matrical Technologies - (2023 - Present)"
            result="Bengaluru, India"
            des="Worked on Three major projects: Study-X, Salon Management, and Payroll Management. Played a key role in the design and development of the Payroll Management and Salon Management systems, handling both front-end and back-end tasks."
          />
          <ResumeCard
            title="Sr. Business Associate"
            subTitle="Urbanrise Pvt Ltd - (2021 - 2022)"
            result="Hyderabad, India"
            des="Responsible for overseeing business operations, developing strategies to improve client engagement, and driving sales performance."
          />
          <ResumeCard
            title="Business Associate"
            subTitle="Aliens Space Station - (2019 - 2021)"
            result="Hyderabad, India"
            des="Focused on sales and marketing strategies to enhance client acquisition and retention, contributing to the growth of the company's customer base."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
