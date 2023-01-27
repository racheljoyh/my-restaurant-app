import { useNavigate } from "react-router-dom";
import HeroImage from "./images/hero-img1.jpg";
import HeaderImage from "./images/header-img.jpg";

function HomePage() {
  const navigate = useNavigate();

  function navigateToMenu() {
    navigate("/menu");
  }

  return (
    <>
      <div className="header-image-container">
        <img className="header-image" src={HeroImage} alt="Logo" />
      </div>
      <section className="section-hero">
        <div className="hero">
          <div className="hero-text-box">
            <h1 className="heading-primary hero-header">Red Star Thai</h1>
            <p className="hero-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <button
              onClick={navigateToMenu}
              className="btn btn--full margin-right-sm"
            >
              Order Now
            </button>
          </div>
          <div className="hero-img-box">
            <img className="hero-img" src={HeaderImage} alt="yummy thai food" />
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
