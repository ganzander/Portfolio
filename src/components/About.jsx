import React from "react";
const ABOUT = {
  text1: "I create dynamic, responsive websites and efficient backend systems.",
  text2:
    "👋 Hello! I'm Ganesh Kumar Mangla, an enthusiastic undergraduate pursuing a Bachelor of Technology in Computer Engineering with a focus on Full Stack Web Development (MERN) and Data Structures & Algorithms (DSA). With a keen interest in both front-end and back-end technologies, I've honed my skills in Next.js, React.js, Reduxjs, Node.js, HTML, CSS, JavaScript. On the backend, I'm proficient in server-side languages like Node.js and databases like MongoDB and MySQL. Additionally, my solid understanding of Data Structures & Algorithms equips me to tackle complex problems efficiently. Proficient in C++, I have experience in developing efficient and scalable applications, leveraging object-oriented programming principles to design robust software solutions. When I'm not coding, I enjoy exploring machine learning and artificial intelligence to incorporate into my web development projects, and I'm always excited to participate in hackathons to push my creative boundaries.",
};

export default function About() {
  return (
    <div className="container mx-auto pt-20" id="about">
      <h2 className="mt-20 text-center text-4xl font-semibold">About</h2>
      <h3 className="p-4 text-6xl uppercase lg:text-[6rem]">{ABOUT.text1}</h3>
      <p className="mr-24 pl-4 text-lg leading-loose">{ABOUT.text2}</p>
    </div>
  );
}
