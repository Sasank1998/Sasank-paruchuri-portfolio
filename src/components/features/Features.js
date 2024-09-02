import React from 'react';
import { FaServer, FaMobile, FaGlobe } from "react-icons/fa";
import { SiJavascript, SiReact, SiMongodb } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

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
          des="Building robust, scalable web applications using the MERN stack: MongoDB, Express.js, React.js, and Node.js."
          icon={<SiJavascript />}
          detailedDes="Full Stack Development involves creating both the frontend and backend of a web application. I use the MERN stack to build dynamic and responsive applications. This includes designing databases, developing APIs, and ensuring a smooth user experience across different devices and platforms."
        />
        <Card
          title="Frontend Development"
          des="Crafting responsive and dynamic user interfaces with React.js, ensuring a seamless user experience."
          icon={<SiReact />}
          detailedDes="Frontend Development focuses on the user interface and user experience. Using React.js, I create interactive and visually appealing interfaces that adapt to various screen sizes. This includes implementing state management, optimizing performance, and integrating with backend services."
        />
        <Card
          title="Backend Development"
          des="Developing server-side logic and APIs with Node.js and Express.js, providing efficient and secure data handling."
          icon={<FaServer />}
          detailedDes="Backend Development involves building the server-side logic of applications. With Node.js and Express.js, I create robust and scalable APIs that handle data processing, authentication, and integration with databases. This ensures that the application performs efficiently and securely."
        />
        <Card
          title="Database Management"
          des="Designing and managing databases with MongoDB, optimizing for performance and scalability."
          icon={<SiMongodb />}
          detailedDes="Database Management involves designing and maintaining databases to ensure data integrity and performance. Using MongoDB, I structure data efficiently, create indexes for faster queries, and implement data validation rules. This supports the application's scalability and reliability."
        />
        <Card
          title="Mobile Development"
          des="Creating mobile-friendly web applications, ensuring optimal performance across all devices."
          icon={<FaMobile />}
          detailedDes="Mobile Development focuses on creating web applications that are optimized for mobile devices. This includes responsive design techniques, touch-friendly interfaces, and performance optimization to ensure a smooth user experience on smartphones and tablets."
        />
        <Card
          title="Web Hosting & Deployment"
          des="Deploying applications to the web, utilizing modern tools and platforms to ensure reliability and uptime."
          icon={<FaGlobe />}
          detailedDes="Web Hosting & Deployment involves taking a web application from development to production. I use modern deployment tools and platforms to ensure the application is accessible on the web, with proper configurations for security, performance, and scalability."
        />
      </div>
    </section>
  );
}

export default Features;
