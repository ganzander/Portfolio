import React from "react";
import Card from "./Card";

export default function Projects() {
  const PROJECTS = [
    {
      title: "Mystery Message",
      subtitle: "An anonymous message website built with Next.js and MongoDB.",
      image: "/Mystery-Message.png",
    },
    {
      title: "Epic Captions",
      subtitle: "A subtitle generator website built with Next.js and AWS.",
      image: "/Epic-Captions.png",
    },
    {
      title: "Savor Haven",
      subtitle: "A restaurant management website built with MERN stack.",
      image: "/Savor-Haven.png",
    },
  ];

  return (
    <div id="projects">
      <h2 className="mt-20 text-center text-4xl font-semibold">Projects</h2>
      <div className="flex flex-wrap justify-center py-8">
        {PROJECTS.map((project, index) => (
          <div key={index}>
            <Card
              image={project.image}
              title={project.title}
              subtitle={project.subtitle}
              link={project.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
