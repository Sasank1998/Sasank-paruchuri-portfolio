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
          <p className="text-sm text-designColor tracking-[4px]">
            2023 - Present
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Achievements</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          {/* HCLTech */}
          <ResumeCard
            title="Full Stack Developer (.NET & React)"
            subTitle="HCLTech"
            result="2025 - Present"
            des="Contributing to the development of scalable web applications using .NET and React. Involved in building APIs, enhancing UI performance, and ensuring clean, maintainable code across modules."
          />

          {/* Urbanrise Builders LLP */}
          <ResumeCard
            title="Operations & Coordination"
            subTitle="Urbanrise Builders LLP - Hyderabad"
            result="2021 - 2022"
            des="Supported internal project coordination, documentation, workflows, and communication between teams to ensure smooth execution of day-to-day operations."
          />

          {/* Aliens Developers Pvt Ltd */}
          <ResumeCard
            title="Operations & Project Support"
            subTitle="Aliens Developers Pvt Ltd - Hyderabad"
            result="2019 - 2021"
            des="Assisted in operational activities, project documentation, cross-team coordination, and administrative processes to support organizational functions."
          />
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            2019 - Present
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>

        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          {/* HCLTech */}
          <ResumeCard
            title="Full Stack Developer (.NET & React)"
            subTitle="HCLTech - (2025 - Present)"
            result="Hyderabad, India"
            des="Working on scalable web applications using .NET for backend development and React for frontend development. Responsible for API development, UI enhancements, performance optimization, and ensuring code quality across modules."
          />

          {/* Urbanrise */}
          <ResumeCard
            title="Full Stack Support & Coordination"
            subTitle="Urbanrise Pvt Ltd - (2021 - 2022)"
            result="Hyderabad, India"
            des="Provided technical and coordination support for internal applications. Assisted teams with frontend and backend issue tracking, basic UI fixes, documentation, and ensuring smooth communication between technical and operational teams."
          />

          {/* Aliens Developers */}
          <ResumeCard
            title="Full Stack Support & Operations"
            subTitle="Aliens Developers Pvt Ltd - (2019 - 2021)"
            result="Hyderabad, India"
            des="Supported application workflows, documentation, and technical coordination. Involved in assisting teams with basic frontend changes, data handling, and backend integration support to improve operational efficiency."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
