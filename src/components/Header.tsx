import "./Header.css";
import { useInView } from "react-intersection-observer";
import BackToHeader from "./BackToHeader";

type HeaderContentType = {
  h1: string;
  h2: string;
};

const Header = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  const headerContent: HeaderContentType = {
    h1: "Hello there, I'm Nemanja Svilarov 🖖",
    h2: `Welcome to my corner of the internet. 
    I'm a Software Engineer who is passionate about Web Development. 
    Bulding something new always excites me. 
    I'm always looking for new technologies to add to my stack. `,
  };

  return (
    <>
      <section className="portfolio-header-section" id="header" ref={ref}>
        <div className="portfolio-header-div">
          {/* <div className="portfolio-header-div-bar">
            <h1 className="portfolio-header-div-bar-h1"></h1>
          </div> */}
          <div className="portfolio-header-content-div">
            <div className="portfolio-header-content-text-div">
              <h1 className="portfolio-header-h1">{headerContent.h1}</h1>
              <h2 className="portfolio-header-h2">{headerContent.h2}</h2>
            </div>
            <div className="portfolio-header-img-content">
              <div className="portfolio-header-img-div">
                <img
                  src="img/ns-portfolio.png"
                  alt="ns-portfolio-photo"
                  className="portfolio-header-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {!inView && <BackToHeader />}
    </>
  );
};

export default Header;
