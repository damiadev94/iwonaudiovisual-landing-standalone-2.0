function Arrow() {
  return <span className="arrow" aria-hidden="true">↗</span>;
}

export function PricingSection() {
  return (
    <section id="contacto" className="contact section-pad">
      <div className="section-label">04 / Hablemos de tu video</div>
      <div className="contact-grid">
        <div>
          <h2>¿Tenés un tema<br /><em>para filmar?</em></h2>
          <p className="lead">Mandanos el tema o contanos la idea. Te orientamos y te pasamos un presupuesto claro.</p>
          <a
            className="button button-yellow"
            href="https://wa.link/uetaz7"
            target="_blank"
            rel="noreferrer"
          >
            Escribinos por WhatsApp <Arrow />
          </a>
          <p className="muted">Sin formulario eterno ni compromiso. Nos contás qué querés hacer y vemos cómo llevarlo a video.</p>
        </div>
      </div>
    </section>
  );
}
