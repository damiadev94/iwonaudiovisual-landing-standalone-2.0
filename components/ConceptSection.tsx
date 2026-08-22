function Arrow() {
  return <span className="arrow" aria-hidden="true">↗</span>;
}

export function ConceptSection() {
  return (
    <section className="intro section-pad">
      <div className="section-label">01 / La idea</div>
      <div className="intro-grid">
        <h2>MÁS DE<br /><em>600 VIDEOS</em> <br /> FILMADOS</h2>
        <div>
          <p className="lead">Iwon hace videoclips para artistas que quieren que su música se vea a la altura.</p>
          <p className="muted">Escuchamos el tema, bajamos una idea posible y la llevamos a rodaje. Después editamos un video que tenga tu cara, tu sonido y tus referencias.</p>
          <a className="under-link" href="#contacto">Contanos qué tema querés filmar <Arrow /></a>
        </div>
      </div>
    </section>
  );
}
