import React from "react";
import ProjectCard from "../sub/ProjectCard";
import projects from "@/constants/projects";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
  {projects.map((project, index) => (
    <ProjectCard
      key={index}
      title={project.name}
      src={project.image}
      description={project.description}
      sourceCode={project.code}
      demo={project?.demo}
      tech={project.tech}
    />
  ))}
</div>

    </div>
  );
};

export default Projects;
