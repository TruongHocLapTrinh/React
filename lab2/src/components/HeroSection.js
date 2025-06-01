import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import img from '../assets/pizza1.jpg';

function HeroSection() {
  return (
    <div className="position-relative">
      <div
        className="hero-section"
        style={{
          height: "500px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <img
          src={img}
          alt="Neapolitan Pizza"
          className="w-100 h-100 position-absolute"
          style={{ objectFit: "cover", top: 0, left: 0 }}
        />
        <div
          className="overlay position-absolute w-100 h-100"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            top: 0,
            left: 0,
          }}
        ></div>
        <div className="container position-absolute top-50 start-50 translate-middle text-center text-white">
          <h1 className="display-4 fw-bold">Neapolitan Pizza</h1>
          <p className="lead">
            If you are looking for a traditional Italian pizza the Neapolitan is
            the best choice.
          </p>
        </div>
      </div>
      <div className="position-absolute start-0 top-50 translate-middle-y">
        <button className="btn btn-link text-white ms-3">
          <span className="fs-1">‹</span>
        </button>
      </div>
      <div className="position-absolute end-0 top-50 translate-middle-y">
        <button className="btn btn-link text-white me-3">
          <span className="fs-1">›</span>
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
