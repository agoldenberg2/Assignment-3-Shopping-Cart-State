import "./Hero.css";

function Hero({ title, subtitle, callToAction }) {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <button>{callToAction}</button>
      </div>
    </section>
  );
}

export default Hero;