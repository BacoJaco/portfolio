"use client";

import userData from "@/config/userData";
import ProjectCard from "../ui/project-card";

const Projects = () => {
  const { projects } = userData;

  return (
    <div className="border-b border-border border-dashed">
      <div className="border-x border-border border-dashed p-4 max-w-screen-xl w-full mx-auto space-y-4 py-2 md:py-4">
        
        {/* Header matched to Experience section */}
        <div className="inline-flex items-center justify-center gap-1 font-normal tracking-tight text-xl">
          <h2 className="font-normal drop-shadow-xs text-xl md:text-3xl text-muted-foreground">
            PROJECTS
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 group/projects">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              liveLink={project.Livelink}
              imageSrc={project.imageSrc}
              gitHubLink={project.gitHubLink}
              date={project.date}
              working={project.working}
              liveLinkAvailable={project.liveLinkAvailable} // Add this
              gitHubLinkAvailable={project.gitHubLinkAvailable} // Add this
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Projects;