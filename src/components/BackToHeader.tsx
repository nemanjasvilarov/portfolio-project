import "./BackToHeader.css";

const BackToHeader = () => {
  return (
    <div className="portfolio-back-to-header-div">
      <div className="portfolio-back-to-header-img-container">
        <a href="#header" className="portfolio-back-to-header-a">
          <img
            src="img/ns-portfolio.png"
            alt="ns-portfolio-photo"
            className="portfolio-back-to-header-img"
          />
        </a>
      </div>
      <p className="portfolio-back-to-header-p">Back to top</p>
    </div>
  );
};

export default BackToHeader;
