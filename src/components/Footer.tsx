import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer-section" id="footer">
      <div className="footer-section-div">
        <a
          className="footer-a"
          href="https://www.linkedin.com/in/nemanja-svilarov-3b32a6209/"
        >
          <FontAwesomeIcon icon={faLinkedin} className="footer-section-icon" />
        </a>
        <a className="footer-a" href="https://github.com/nemanjasvilarov">
          <FontAwesomeIcon icon={faGithub} className="footer-section-icon" />
        </a>
        <p className="footer-section-text">
          Copyright © {new Date().getFullYear()} Nemanja Svilarov
        </p>
      </div>
    </section>
  );
};

export default Footer;
