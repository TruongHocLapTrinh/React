import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import img1 from "../assets/pizza1.jpg";
import img2 from "../assets/pizza2.jpg";
import img3 from "../assets/pizza3.jpg";
import img4 from "../assets/pizza4.jpg";
import img5 from "../assets/pizza5.jpg";

function HeroSection() {
  return (
    <div className="hero-section">
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={img1} class="d-block w-100" alt="Pizza 1" />
            <div class="carousel-caption d-none d-md-block">
              <h1>Neapolitan Pizza</h1>
              <p>
                If you are looking for a traditional Italian pizza, the
                Neapolian is the best option!
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={img2} class="d-block w-100" alt="Pizza 2" />
            <div class="carousel-caption d-none d-md-block">
              <h1>Neapolitan Pizza</h1>
              <p>
                If you are looking for a traditional Italian pizza, the
                Neapolian is the best option!
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={img3} class="d-block w-100" alt="Pizza 3" />
            <div class="carousel-caption d-none d-md-block">
              <h1>Neapolitan Pizza</h1>
              <p>
                If you are looking for a traditional Italian pizza, the
                Neapolian is the best option!
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={img4} class="d-block w-100" alt="Pizza 4" />
            <div class="carousel-caption d-none d-md-block">
              <h1>Neapolitan Pizza</h1>
              <p>
                If you are looking for a traditional Italian pizza, the
                Neapolian is the best option!
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={img5} class="d-block w-100" alt="Pizza 5" />
            <div class="carousel-caption d-none d-md-block">
              <h1>Neapolitan Pizza</h1>
              <p>
                If you are looking for a traditional Italian pizza, the
                Neapolian is the best option!
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
