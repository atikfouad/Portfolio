"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import {motion, useInView} from "framer-motion";
const projectData = [
  {
    id: 1,
    title: "Tackplan FM",
    description: "Developed Web and Progressive Web Applications utilizing Reactjs for facility management",
    image: "/Trackplan.jpeg",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "/",
    previewUrl: "https://www.trackplanfm.com/",
  },
  {
    id: 2,
    title: "Sehaty",
    description: "Developed a job marketplace for government hospitals during the peak of the pandemic, effectively helping to reduce healthcare worker shortage",
    image: "/Sehaty.jpeg",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "/",
    previewUrl: "https://www.moh.gov.sa/en/eServices/Sehhaty/Pages/default.aspx",
  },
  {
    id: 3,
    title: "Anat",
    description: "Developed a secure chat service between patients and doctors using React/React native and socket io",
    image: "/Anat.jpeg",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "https://play.google.com/store/apps/details?id=com.lean.practitioner&hl=en&gl=US",
  },
  {
    id: 4,
    title: "Autobia Sales app",
    description: "Lead development of a cross platform mobile application for B2B car parts sales using React Native",
    image: "/Autobia.jpeg",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "https://play.google.com/store/apps/details?id=com.autobia.autobia&pli=1",
  },
  {
    id: 5,
    title: "Autobia Web app",
    description: "Developed a web application for B2B car parts sales to cater to large basket sizes using React",
    image: "/webatuobia.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://store.autobia.com/",
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
