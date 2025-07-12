import PropTypes from "prop-types";

const ProjectCard = ({ project }) => {
  const { title, img, text, url, github } = project;
  return (
    <div className="flex flex-col bg-stone-300 p-3   h-auto  md:min-h-[650px] lg:h-[730px]">
      <div>
        <img
          src={img}
          alt={title}
          className="w-full h-auto object-cover rounded"
        />
      </div>

      <div className="flex flex-col justify-between flex-grow mt-3 px-2">
        <div>
          <h4 className="text-lg font-black min-h-[4rem]">{title}</h4>
          <p className="text-gray-500 text-base font-medium tracking-wider">
            {text}
          </p>
        </div>

        <div className="mt-4 flex gap-3">
          {url && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-800 text-white text-sm font-medium rounded hover:bg-gray-500 transition-colors"
            >
              Live Site
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-800 text-white text-sm font-medium rounded hover:bg-gray-500 transition-colors"
            >
              GitHub Repo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    img: PropTypes.string,
    url: PropTypes.string,
    github: PropTypes.string,
    text: PropTypes.string,
  }).isRequired,
};

export default ProjectCard;
