import { useTheme } from "../../ContextApi";
import "./ProjectSection.css";

export default function ProjectSection() {
  const { data } = useTheme();

  return (
    <div className="project-container">
      <h2>
        Recent <span>Projects</span>{" "}
      </h2>
      {/* main */}
      <section>
        {data &&
          data.projects.map(({id,image,title,tags,body}) => {
            return (
              <main className="project-main-content" key={id}>
                {/* left */}
                <div className="project-main-content-left">
                  <img src={image} alt="bulb" />
                </div>

                {/* right */}
                <div className="project-main-content-right">
                  <h3>
                    {title}
                    <span>
                      {tags.map((tag, id) => {
                        return (
                          <span key={id} className="inner-text">
                            {tag}
                          </span>
                        );
                      })}
                    </span>
                  </h3>

                  <p>{body}</p>
                </div>
              </main>
            );
          })}
      </section>
    </div>
  );
}
