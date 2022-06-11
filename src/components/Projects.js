import data from "../constants/constatnt";

const Projects = () => {
  let { projects } = data;
  return (
    <>
      <h4>Projects</h4>
      <div className="container project-container">
        <div className="flex wrap ">
          {projects.map((project) => {
            return (
              <article
                className="media-flex-48 card blog-card project-card flex-48 flex-col justify-between"
                key={project.title}
              >
                <div className="posted-on">
                  <span>{project.hostedOn}</span>
                </div>
                <div>
                  <div className="project-card__img-div ">
                    <img src={project.image} alt={project.title}></img>
                  </div>

                  <span className="project-card__title">{project.title}</span>
                  <div className="tech-stack-div">
                    <span>Tech Stack Used:-</span>
                    <ul className="flex  wrap">
                      {project.TechStack.map((tech) => {
                        return (
                          <li key={tech} className="tech">
                            {tech}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
                <div>
                  <hr />

                  <a href={project.url} target="_blank" rel="noreferrer">
                    Go To Project
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;
