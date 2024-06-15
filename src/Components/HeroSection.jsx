import Redes from "./Redes";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <Redes />
      <div className="hero-section-content">
        <h1 className="hero-section-title">Get your first Electric Bike</h1>
        <p className="hero-section-text">
          Our product is the most innovative Bike kit and first product that
          exist.
        </p>
        <button type="button" className="hero-section-button">
          Buy Now
        </button>
      </div>
    </section>
  );
}
