import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2000 - 2019</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="B-Tech Mechanical Engineering"
            subTitle="Sree Venkateswara College of Engineering (2015 - 2019)"
            result="61%"
            des="Completed a comprehensive program focused on Mechanical Engineering principles, preparing for roles in various engineering sectors."
          />
          <ResumeCard
            title="Intermediate Education"
            subTitle="Sri Chaitanya Jr College (2013 - 2015)"
            result="85.4%"
            des="Focused on Mathematics, Physics, and Chemistry, providing a strong foundation for engineering studies and problem-solving skills."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Ratnam High School (2013)"
            result="8.2/10"
            des="Gained a solid grounding in various subjects, with a particular emphasis on science and mathematics, laying the groundwork for future academic pursuits."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="MERN Full Stack Developer"
            subTitle="Matrical Technologies (2023 - Present)"
            result="Bengaluru"
            des="Developing and maintaining web applications using the MERN stack, with a focus on creating responsive and dynamic user interfaces, as well as robust backend systems."
          />
          <ResumeCard
            title="Sr. Business Associate"
            subTitle="Urbanrise Pvt Ltd (2021 - 2022)"
            result="Hyderabad"
            des="Managed key business operations and contributed to strategic planning, ensuring the growth and success of the organization."
          />
          <ResumeCard
            title="Business Associate"
            subTitle="Aliens Space Station (2019 - 2021)"
            result="Hyderabad"
            des="Supported various business functions and worked on enhancing operational efficiency, contributing to the company’s overall performance."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
