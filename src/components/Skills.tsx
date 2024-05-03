import "./Skills.css";
import { useInView } from "react-intersection-observer";

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });
  return (
    <section className="portfolio-skills-section" id="skills">
      <div className={`portfolio-skills-div ${inView && "hidden"}`} ref={ref}>
        <h1 className="portfolio-skills-h1">Skills</h1>
        <h2 className="portfolio-skills-h2">Technologies that I know</h2>
        <ul className="portfolio-skills-ul-1">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Git</li>
          <li>SQL</li>
          <li>MongoDB</li>
          <li>OOP</li>
          <li>Java</li>
          <li>C#</li>
          <li>.NET</li>
        </ul>
        <h2 className="portfolio-skills-h2">
          Technologies that I'm familiar with
        </h2>
        <ul className="portfolio-skills-ul-2">
          <li>GraphQL</li>
          <li>Next.js</li>
          <li>TypeScript</li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
