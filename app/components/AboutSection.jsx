"use client";

import Image from "next/image";
import React, { useState, useTransition } from "react";
import TabButton from "./TabButton";




const Tab_Data = [
  {
    title: 'Skills',
    id: 'skills',
    content: (
      <ul className="list-disc pl-2">
        <li>javascript</li>
        <li>Node.js</li>
        <li>Reactjs</li>
        <li>Redux</li>
        <li>Nextjs</li>
        <li>Express.js</li>
        <li>Tailwindcss</li>
        <li>React native</li>
        <li>Python</li>
      </ul>
    )
  },
  {
    title: 'Education',
    id: 'education',
    content: (
      <ul className="list-disc pl-2">
        <li>Bachelors of Science, Computer Science, NMAMIT, India</li>
        <li>Masters of Science, Software Engineering, University of Limerick, Ireland</li>
       
      </ul>
    )
  },
  {
    title: 'Experience',
    id: 'experience',
    content: (
      <ul className="list-disc pl-2">
        <li>Oracle, Disaster Recovery Admin, Automation, Python, React 2017-2019</li>
        <li>Trackplan FM, Developer, React, React native, Redux, PWAs 2019-2020</li>
        <li>Lean Business Services, Senior Developer, React, React native, Nodejs, socket io, Microfrontends, 2020-2022</li>
        <li>Autobia, Senior Developer, Mobile Lead, React, React native, Nodejs 2022-Present</li>
        <li> Could be you ??</li>
      
      </ul>
    )
  }
]








export const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const handleTabchange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center px-4 py-8 lg:gap-16 sm:py-16 xl:px-16">
        <Image src="/Aboutme.jpeg" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text=4xl font-bold text-white mb-4">About me</h2>
          <p className="text-base md:text-lg ">Dummy text about me</p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabchange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>

            <TabButton
              selectTab={() => handleTabchange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>


            <TabButton
              selectTab={() => handleTabchange("experience")}
              active={tab === "experience"}
            >
              Experience
            </TabButton>

          </div>
          <div className="mt-8 ">{Tab_Data.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
};
