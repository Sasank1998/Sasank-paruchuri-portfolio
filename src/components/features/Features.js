import React from "react";
import { SiReact, SiDotnet, SiCsharp, SiMongodb } from "react-icons/si";
import { FaMobile, FaGlobe } from "react-icons/fa";
// import { SiDotnet } from "react-icons/si";
import Title from "../layouts/Title";
import Card from "./Card";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Full Stack Development"
          des="Building scalable and modern web applications using React for the frontend and .NET for powerful, secure backend development."
          icon={<SiDotnet />}
          detailedDes="Full Stack Development involves building both the frontend and backend of a web application. I use React to create fast, interactive user interfaces and .NET to build secure, scalable APIs and backend services. This includes handling database integration, implementing business logic, and ensuring smooth, responsive user experiences across all devices."
        />
        <Card
          title="Frontend Development"
          des="Crafting modern, responsive, and high-performance user interfaces with React."
          icon={<SiReact />}
          detailedDes="Frontend Development focuses on building smooth, interactive, and visually engaging user interfaces. Using React, I create component-based architectures, manage state efficiently, optimize performance, and ensure responsiveness across all devices while integrating seamlessly with backend APIs."
        />

        <Card
          title="Backend Development"
          des="Building secure, scalable backend services and APIs using .NET Core and C#."
          icon={<SiCsharp/>}
          detailedDes="Backend Development involves creating robust server-side logic, REST APIs, and business layers. With .NET Core and C#, I build secure, high-performance backend systems, implement authentication, handle data processing, and ensure smooth communication between the frontend and database."
        />

        <Card
          title="Database Management"
          des="Designing and managing databases using SQL and MongoDB for performance and scalability."
          icon={<SiMongodb />}
          detailedDes="Database Management includes structuring data, writing optimized queries, and ensuring reliability. I work with MongoDB and SQL databases to design schemas, create indexes, improve query performance, and maintain data integrity for scalable applications."
        />

        <Card
          title="Mobile-Friendly Development"
          des="Creating responsive web applications optimized for all screen sizes and devices."
          icon={<FaMobile />}
          detailedDes="Mobile-Friendly Development focuses on designing interfaces that adapt seamlessly to smartphones, tablets, and desktops. I implement responsive layouts, touch-friendly interactions, and performance optimizations to ensure smooth user experience across all devices."
        />

        <Card
          title="Web Hosting & Deployment"
          des="Deploying React and .NET applications using modern CI/CD pipelines and cloud platforms."
          icon={<FaGlobe />}
          detailedDes="Web Hosting & Deployment involves publishing applications to secure and reliable environments. I deploy .NET APIs and React frontends using platforms like Azure, Vercel, and Netlify, ensuring proper configurations for performance, security, logging, and scalability."
        />
      </div>
    </section>
  );
};

export default Features;
