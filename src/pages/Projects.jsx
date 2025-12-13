import ProjectCard from "../components/project/ProjectCard";
import { projects } from "../data";

const Projects = () => {
  return (
    <section className="my-20 lg:mt-20 mt-32 max-w-7xl align-element">
      <h1 className="text-3xl font-black mb-8 ">Projelerim</h1>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5 ">
        {projects.map((project) => {
          return (
            <div key={project.id}>
              <ProjectCard project={project} />
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Projects;
