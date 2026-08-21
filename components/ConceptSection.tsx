function Arrow() {
  return <span className="arrow" aria-hidden="true">↗</span>;
}

export function ConceptSection() {
  return (
    <section className="intro section-pad">
      <div className="section-label">01 / La idea</div>
      <div className="intro-grid">
        <h2>MÁS DE<br /><em>600 VIDEOCLIPS</em> <br /> FILMADOS</h2>
        <div>
          <p className="lead">Iwon es una productora audiovisual para artistas independientes.</p>
          <p className="muted">Ya filmamos más de 600 videoclips profesionales con calidad de cine. Pensamos conceptos, filmamos con equipo de cine y editamos piezas que se sienten tan tuyas como tu canción.</p>
          <a className="under-link" href="#contacto">Contanos tu idea <Arrow /></a>
        </div>
      </div>
    </section>
  );
}
