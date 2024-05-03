import "./About.css";
import { useInView } from "react-intersection-observer";

let abountContent: string;

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  abountContent = `My passion for programming started in high school. The first
          programming language that introduced me to programming was C. I knew
          that programming was my call and that is why I joined university.
          Since then, I have had an opportunity to code in many programming
          languages. I've worked in C, Assembly, C++, C#, PHP, Java, JavaScript, TypeScript
          and Python.`;

  return (
    <section className="portfolio-about-me-section" id="about">
      <div className="portfolio-about-me-section-div">
        <div
          style={{ height: "100%" }}
          className={`portfolio-about-me-div ${inView && "hidden"}`}
          ref={ref}
        >
          <h1 className="portfolio-about-me-section-h1">About me</h1>
          <h2 className="portfolio-about-me-section-h2">{abountContent}</h2>
        </div>
      </div>
    </section>
  );
};

export default About;
