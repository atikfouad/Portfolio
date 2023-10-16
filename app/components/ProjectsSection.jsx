"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import {motion, useInView} from "framer-motion";
const projectData = [
  {
    id: 1,
    title: "React Portfolio Project",
    description: "Project 1 description",
    image: "/portfoliopic.jpeg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "React Portfolio Project",
    description: "Project 1 description",
    image: "/portfoliopic.jpeg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "React Portfolio Project",
    description: "Project 1 description",
    image: "/portfoliopic.jpeg",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "React Portfolio Project",
    description: "Project 1 description",
    image: "/portfoliopic.jpeg",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
];
const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };
const ref = useRef(null);
const isInView = useInView(ref, {once: true})
  const filteredData = projectData.filter((project) => 
    project.tag.includes(tag)
  );

  const cardVariant = {
    initial: {y: 50, opacity: 0},
    animate: {y: 0, opacity: 1},

  };
  return (
    <section >
      <h2>My Project</h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
          <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}

        />
          <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredData.map((project, index) => (
          <motion.li
          key={index}
          variants={cardVariant}
          initial="initial"
          animate={isInView ? "animate": "initial"}
          transition={{duration: 0.3, delay: index*0.4}}
          >
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
