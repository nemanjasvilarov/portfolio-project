import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons/faAddressCard";
import "./Menu.css";
import { useState } from "react";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";

const Menu = () => {
  const [clicked, setClicked] = useState<boolean>(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <nav
        className={`portfolio-nav-bar ${
          clicked ? "appear-menu" : "close-menu"
        }`}
      >
        <ul className="portfolio-nav-bar-ul">
          <li className="portfolio-nav-bar-li">
            <a className="portfolio-nav-bar-a" href="#about">
              <FontAwesomeIcon icon={faPerson} className="menu-icon" />
              <span className="portfolio-nav-bar-span">About me</span>
            </a>
          </li>
          <li>
            <a className="portfolio-nav-bar-a" href="#skills">
              <FontAwesomeIcon icon={faCode} className="menu-icon" />
              <span className="portfolio-nav-bar-span">Skills</span>
            </a>
          </li>
          <li>
            <a className="portfolio-nav-bar-a" href="#projects">
              <FontAwesomeIcon icon={faLaptopCode} className="menu-icon" />
              <span className="portfolio-nav-bar-span">My projects</span>
            </a>
          </li>
          <li>
            <a className="portfolio-nav-bar-a" href="#contact">
              <FontAwesomeIcon icon={faAddressCard} className="menu-icon" />
              <span className="portfolio-nav-bar-span">Contact me</span>
            </a>
          </li>
        </ul>
      </nav>
      {clicked ? (
        <FontAwesomeIcon
          icon={faChevronRight}
          onClick={handleClick}
          className="icon"
        />
      ) : (
        <FontAwesomeIcon
          icon={faChevronLeft}
          onClick={handleClick}
          className="icon"
        />
      )}
    </>
  );
};

export default Menu;
