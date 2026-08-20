function Arrow() {
  return <span className="arrow" aria-hidden="true">↗</span>;
}

export function PricingSection() {
  return (
    <section id="contacto" className="contact section-pad">
      <div className="section-label">04 / Filmemos</div>
      <div className="contact-grid">
        <div>
          <h2>¿Tenés una<br /><em>canción?</em></h2>
          <p className="lead">Mandanos un mensaje y arreglamos todo.</p>
          <a
            className="button button-yellow"
            href="https://wa.me/5491100000000?text=Hola%2C%20quiero%20saber%20m%C3%A1s..."
            target="_blank"
            rel="noreferrer"
          >
            Escribinos por WhatsApp <Arrow />
          </a>
          <p className="muted">Sin compromiso. Sin formulario eterno. Solo queremos escuchar qué estás haciendo.</p>
        </div>
      </div>
    </section>
  );
}
