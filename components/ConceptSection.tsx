function Arrow() {
  return <span className="arrow" aria-hidden="true">↗</span>;
}

export function ConceptSection() {
  return (
    <section className="intro section-pad">
      <div className="section-label">01 / La idea</div>
      <div className="intro-grid">
        <h2>No hacemos videos.<br /><em>Hacemos momentos.</em></h2>
        <div>
          <p className="lead">Tu música ya tiene algo para decir. Nosotros hacemos que se vea.</p>
          <p className="muted">Iwon es una productora audiovisual para artistas independientes. Ya filmamos más de 600 videoclips profesionales con calidad de cine. Pensamos conceptos, filmamos con equipo de cine y editamos piezas que se sienten tan tuyas como tu canción.</p>
          <a className="under-link" href="#contacto">Contanos tu idea <Arrow /></a>
        </div>
      </div>
    </section>
  );
}
