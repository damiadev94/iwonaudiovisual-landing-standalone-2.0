"use client";

import { FormEvent, useState } from "react";

function Arrow() { return <span className="arrow" aria-hidden="true">↗</span>; }

export function PricingSection() {
  const [sent, setSent] = useState(false);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSent(true); };

  return (
    <section id="contacto" className="contact section-pad">
      <div className="section-label">04 / Hagamos algo</div>
      <div className="contact-grid">
        <div>
          <h2>¿Tenés una<br /><em>canción?</em></h2>
          <p className="lead">Mandanos un mensaje y coordinamos una charla de 15 minutos.</p>
          <p className="muted">Sin compromiso. Sin formulario eterno. Solo queremos escuchar qué estás haciendo.</p>
          <a className="whatsapp" href="https://wa.me/5491100000000?text=Hola%20Iwon%2C%20quiero%20hablar%20sobre%20un%20videoclip" target="_blank" rel="noreferrer">Escribinos por WhatsApp <Arrow /></a>
        </div>
        <form className="lead-form" onSubmit={handleSubmit}>
          <label>Tu nombre<input required placeholder="¿Cómo te llamás?" /></label>
          <label>Tu Instagram<input required placeholder="@tuusuario" /></label>
          <label>Contanos sobre tu canción<textarea required placeholder="¿Qué tenés en mente?" rows={3} /></label>
          <button className="button button-yellow" type="submit">{sent ? "Mensaje enviado ✓" : "Quiero hablar con Iwon"} <Arrow /></button>
          <small>Te respondemos dentro de las próximas 24 hs.</small>
        </form>
      </div>
    </section>
  );
}
