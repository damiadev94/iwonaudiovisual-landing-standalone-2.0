function Arrow() {
  return <span className="arrow" aria-hidden="true">↗</span>;
}

export function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-image" aria-hidden="true" />
      <div className="hero-grain" aria-hidden="true" />
      <div className="hero-copy">
        <p className="eyebrow"><i /> Productora audiovisual · Buenos Aires</p>
        <h1>Tu canción.<br /><em>En pantalla.</em></h1>
        <p className="hero-text">Videoclips con identidad cinematográfica para artistas que están listos para dejar de esperar.</p>
        <div className="hero-actions">
          <a className="button button-yellow" href="#contacto">Quiero filmar <Arrow /></a>
          <a className="text-link" href="#trabajos">Ver trabajos <span>↓</span></a>
        </div>
      </div>
      <div className="hero-meta"><span>01 — 04</span><span>Scroll para descubrir</span><span>Buenos Aires / Arg.</span></div>
    </section>
  );
}
