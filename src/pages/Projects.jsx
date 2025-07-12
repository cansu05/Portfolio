import ProjectCard from "../components/project/ProjectCard";
import { projects } from "../data";

const Projects = () => {
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5 mt-10 mb-10">
      {projects.map((project) => {
        return (
          <div key={project.id}>
            <ProjectCard project={project} />
          </div>
        );
      })}
    </div>
  );
};
export default Projects;
