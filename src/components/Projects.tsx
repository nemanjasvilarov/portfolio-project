import { faHtml5 } from "@fortawesome/free-brands-svg-icons/faHtml5";
import "./Projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons/faCss3Alt";
import { faJs } from "@fortawesome/free-brands-svg-icons/faJs";
import { faNode } from "@fortawesome/free-brands-svg-icons/faNode";
import { faDatabase } from "@fortawesome/free-solid-svg-icons/faDatabase";
import { faReact } from "@fortawesome/free-brands-svg-icons/faReact";
import { useInView } from "react-intersection-observer";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { faLink } from "@fortawesome/free-solid-svg-icons/faLink";
import { useState } from "react";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons/faCircleXmark";

const Projects = () => {
  const { ref: refOne, inView: inViewOne } = useInView({
    threshold: 0.1,
  });
  const { ref: refTwo, inView: inViewTwo } = useInView({
    threshold: 0.1,
  });
  const { ref: refThree, inView: inViewThree } = useInView({
    threshold: 0.1,
  });
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  const [clicked, setClicked] = useState<boolean>(false);
  const [imgSrc, setImgSrc] = useState<string>("");

  return (
    <section className="portfolio-my-projects-section" id="projects">
      {clicked && (
        <div className="portfolio-my-projects-expand-picture">
          <FontAwesomeIcon
            icon={faCircleXmark}
            className="portfolio-my-projects-expand-picture-icon"
            onClick={() => setClicked(false)}
          />
          <img
            src={imgSrc}
            className="portfolio-my-projects-expand-picture-img"
          />
        </div>
      )}
      <h1
        className={`portfolio-my-projects-h1 ${inView && "appear"}`}
        ref={ref}
      >
        Projects
      </h1>
      <div className="portfolio-projects">
        <div
          className={`portfolio-project-div ${inViewOne && "appear"}`}
          ref={refOne}
        >
          <h1 className="portfolio-project-h1">
            Photographer portfolio website
          </h1>
          <div className="portfolio-project-content">
            <div className="portfolio-project-img-div">
              <div className="portfolio-project-img-div-options">
                <FontAwesomeIcon
                  icon={faPlus}
                  className="portfolio-project-img--option-icon"
                  onClick={() => {
                    setClicked(true);
                    setImgSrc("img/photographer-portfolio-website.png");
                  }}
                />
                <a href="https://nemanjasvilarov.github.io/photographer-website/">
                  <FontAwesomeIcon
                    icon={faLink}
                    className="portfolio-project-img--option-icon"
                  />
                </a>
              </div>
              <img
                src="img/photographer-portfolio-website.png"
                alt=""
                className="portfolio-project-img"
              />
            </div>
            <div className="portfolio-project-content-div">
              <p className="portfolio-project-content-p main">
                This is a static portfolio website of a photographer.
              </p>
              <p className="portfolio-project-content-p">Used technologies:</p>
              <ul className="technologies-list">
                <li>
                  <FontAwesomeIcon icon={faHtml5} className="technologies" />
                  HTML
                </li>
                <li>
                  <FontAwesomeIcon icon={faCss3Alt} className="technologies" />
                  CSS
                </li>
                <li>
                  <FontAwesomeIcon icon={faJs} className="technologies" />
                  JavaScript
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className={`portfolio-project-div ${inViewTwo && "appear"}`}
          ref={refTwo}
        >
          <h1 className="portfolio-project-h1">Movie scores</h1>
          <div className="portfolio-project-content">
            <div className="portfolio-project-content-div">
              <p className="portfolio-project-content-p main">
                Movie scores is a web application where users can search for
                movies. Visitors can then rate those movies from 1 to 5. Movies
                that were rated can be viewed and sorted by visitors score and
                IMDB score.
              </p>
              <p className="portfolio-project-content-p">Used technologies:</p>
              <ul className="technologies-list">
                <li>
                  <FontAwesomeIcon icon={faHtml5} className="technologies" />{" "}
                  HTML
                </li>
                <li>
                  <FontAwesomeIcon icon={faCss3Alt} className="technologies" />
                  CSS
                </li>
                <li>
                  <FontAwesomeIcon icon={faJs} className="technologies" />
                  JavaScript
                </li>
                <li>
                  <FontAwesomeIcon icon={faNode} className="technologies" />{" "}
                  Node.js
                </li>
                <li>
                  <FontAwesomeIcon icon={faDatabase} className="technologies" />
                  MongoDB
                </li>
                <li> EJS</li>
              </ul>
            </div>
            <div className="portfolio-project-img-div">
              <div className="portfolio-project-img-div-options">
                <FontAwesomeIcon
                  icon={faPlus}
                  className="portfolio-project-img--option-icon"
                  onClick={() => {
                    setClicked(true);
                    setImgSrc("img/movie-scores-webapp.png");
                  }}
                />
                <a href="https://movie-score-webapp.onrender.com/">
                  <FontAwesomeIcon
                    icon={faLink}
                    className="portfolio-project-img--option-icon"
                  />
                </a>
              </div>
              <img
                src="img/movie-scores-webapp.png"
                alt=""
                className="portfolio-project-img"
              />
            </div>
          </div>
        </div>
        <div
          className={`portfolio-project-div ${inViewThree && "appear"}`}
          ref={refThree}
        >
          <h1 className="portfolio-project-h1">Emelord</h1>
          <div className="portfolio-project-content">
            <div className="portfolio-project-img-div">
              <div className="portfolio-project-img-div-options">
                <FontAwesomeIcon
                  icon={faPlus}
                  className="portfolio-project-img--option-icon"
                  onClick={() => {
                    setClicked(true);
                    setImgSrc("img/emelord.png");
                  }}
                />
                <a href="https://emelord.onrender.com/login">
                  <FontAwesomeIcon
                    icon={faLink}
                    className="portfolio-project-img--option-icon"
                  />
                </a>
              </div>
              <img
                src="img/emelord.png"
                alt=""
                className="portfolio-project-img"
              />
            </div>
            <div className="portfolio-project-content-div">
              <p className="portfolio-project-content-p main">
                Emelord is a web application where users can share their photos.
                To be able to use all the application features, visitors need to
                register or log in if they already have an account. Users can
                then post, comment and like photos that are posted in the app.
              </p>
              <p className="portfolio-project-content-p">Used technologies:</p>
              <ul className="technologies-list">
                <li>
                  <FontAwesomeIcon icon={faHtml5} className="technologies" />
                  HTML
                </li>
                <li>
                  <FontAwesomeIcon icon={faCss3Alt} className="technologies" />
                  CSS
                </li>
                <li>
                  <FontAwesomeIcon icon={faJs} className="technologies" />
                  JavaScript
                </li>
                <li>
                  <FontAwesomeIcon icon={faNode} className="technologies" />
                  Node.js
                </li>
                <li>
                  <FontAwesomeIcon icon={faDatabase} className="technologies" />
                  MongoDB
                </li>
                <li>
                  <FontAwesomeIcon icon={faReact} className="technologies" />
                  React
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
