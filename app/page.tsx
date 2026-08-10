"use client";

import { useState } from "react";

const projects = [
  { title: "Nadie como vos", artist: "Lauti R", type: "Performance · CABA", image: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=1200&q=85" },
  { title: "Bajo cero", artist: "Mila K", type: "Narrativo · Lanús", image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=85" },
  { title: "Otra noche", artist: "Rama", type: "Urbano · Palermo", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=85" },
  { title: "Sin señal", artist: "Juli R", type: "Conceptual · San Martín", image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=85" },
];

const faqs = [
  ["¿Cuánto cuesta filmar un videoclip?", "Cada proyecto se cotiza según la idea, locaciones y cantidad de horas. Tenemos opciones accesibles para artistas independientes y te pasamos un presupuesto claro, sin vueltas."],
  ["¿Trabajan en CABA y Conurbano?", "Sí. Filmamos en Capital y en todo el Conurbano. También podemos ayudarte a encontrar una locación que esté a la altura de tu canción."],
  ["¿Qué incluye el servicio?", "Preproducción de la idea, rodaje con equipo profesional y edición con color cinematográfico. Hablamos de todo en una primera llamada sin costo."],
  ["¿Necesito tener una idea armada?", "No. Solo necesitamos escuchar tu canción y entender qué querés transmitir. Bajamos la idea a un plan de rodaje posible para tu presupuesto."],
];

function Arrow() { return <span className="arrow">↗</span>; }

export default function Page() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [sent, setSent] = useState(false);

  return (
    <main className="site-shell">
      <nav className="nav"><a className="brand" href="#inicio">IWON<span>®</span></a><div className="nav-links"><a href="#trabajos">Trabajos</a><a href="#proceso">Proceso</a><a href="#contacto">Contacto</a></div><a className="nav-cta" href="#contacto">Hablemos <Arrow /></a><button className="mobile-menu" aria-label="Abrir menú">☰</button></nav>

      <section id="inicio" className="hero">
        <div className="hero-image" />
        <div className="hero-grain" />
        <div className="hero-copy">
          <p className="eyebrow"><i /> Productora audiovisual · Buenos Aires</p>
          <h1>Tu canción.<br /><em>En pantalla.</em></h1>
          <p className="hero-text">Videoclips con identidad cinematográfica para artistas que están listos para dejar de esperar.</p>
          <div className="hero-actions"><a className="button button-yellow" href="#contacto">Quiero filmar <Arrow /></a><a className="text-link" href="#trabajos">Ver trabajos <span>↓</span></a></div>
        </div>
        <div className="hero-meta"><span>01 — 04</span><span>Scroll para descubrir</span><span>Buenos Aires / Arg.</span></div>
      </section>

      <div className="marquee"><div>IMAGEN QUE SUENA <b>✳</b> HISTORIAS QUE QUEDAN <b>✳</b> TU PRÓXIMO VIDEOCLIP <b>✳</b> IMAGEN QUE SUENA <b>✳</b> HISTORIAS QUE QUEDAN <b>✳</b></div></div>

      <section className="intro section-pad"><div className="section-label">01 / La idea</div><div className="intro-grid"><h2>No hacemos videos.<br /><em>Hacemos momentos.</em></h2><div><p className="lead">Tu música ya tiene algo para decir. Nosotros hacemos que se vea.</p><p className="muted">Iwon es una productora audiovisual para artistas independientes. Pensamos conceptos, filmamos con equipo de cine y editamos piezas que se sienten tan tuyas como tu canción.</p><a className="under-link" href="#contacto">Contanos tu idea <Arrow /></a></div></div></section>

      <section id="trabajos" className="work-section section-pad"><div className="section-top"><div className="section-label">02 / Selección de trabajos</div><p className="muted">Una canción, una atmósfera,<br />una forma de verla.</p></div><div className="work-grid">{projects.map((project, i) => <a className={`project project-${i + 1}`} href="#contacto" key={project.title}><img src={project.image} alt={`${project.title} — ${project.artist}`} /><div className="project-overlay"><span>{project.type}</span><h3>{project.title}</h3><p>{project.artist} <Arrow /></p></div></a>)}</div></section>

      <section id="proceso" className="process section-pad"><div className="section-label">03 / Cómo trabajamos</div><div className="process-header"><h2>De la primera<br /><em>idea al estreno.</em></h2><p className="muted">Un proceso simple, cercano y pensado para que la producción no se coma tu energía.</p></div><div className="process-list">{[["01", "Charlamos", "Nos contás tu canción, tus referencias y qué querés hacer sentir."], ["02", "Damos forma", "Armamos una propuesta visual realista, con locaciones y plan de rodaje."], ["03", "Filmamos", "Un día de rodaje con dirección clara, equipo profesional y buena onda."], ["04", "Estrenás", "Recibís tu videoclip listo para YouTube, redes y para que lo vea todo el mundo."]].map(([num, title, text]) => <div className="process-item" key={num}><span>{num}</span><h3>{title}</h3><p>{text}</p><Arrow /></div>)}</div></section>

      <section className="offer section-pad"><div className="offer-card"><div><div className="section-label">Para artistas independientes</div><h2>Calidad de cine.<br /><em>Precio posible.</em></h2></div><div className="offer-copy"><p>No creemos que una buena imagen tenga que ser un lujo. Buscamos la mejor versión de tu idea dentro de lo que podés invertir hoy.</p><a className="button button-outline" href="#contacto">Pedí tu presupuesto <Arrow /></a></div></div></section>

      <section id="contacto" className="contact section-pad"><div className="section-label">04 / Hagamos algo</div><div className="contact-grid"><div><h2>¿Tenés una<br /><em>canción?</em></h2><p className="lead">Mandanos un mensaje y coordinamos una charla de 15 minutos.</p><p className="muted">Sin compromiso. Sin formulario eterno. Solo queremos escuchar qué estás haciendo.</p><a className="whatsapp" href="https://wa.me/5491100000000?text=Hola%20Iwon%2C%20quiero%20hablar%20sobre%20un%20videoclip" target="_blank" rel="noreferrer">Escribinos por WhatsApp <Arrow /></a></div><form className="lead-form" onSubmit={(e) => { e.preventDefault(); setSent(true); }}><label>Tu nombre<input required placeholder="¿Cómo te llamás?" /></label><label>Tu Instagram<input required placeholder="@tuusuario" /></label><label>Contanos sobre tu canción<textarea required placeholder="¿Qué tenés en mente?" rows={3} /></label><button className="button button-yellow" type="submit">{sent ? "Mensaje enviado ✓" : "Quiero hablar con Iwon"} <Arrow /></button><small>Te respondemos dentro de las próximas 24 hs.</small></form></div></section>

      <section className="faq section-pad"><div className="section-label">Preguntas frecuentes</div><div className="faq-list">{faqs.map(([q, a], i) => <div className="faq-row" key={q}><button onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i}><span>{q}</span><b>{openFaq === i ? "−" : "+"}</b></button><div className={`faq-answer ${openFaq === i ? "is-open" : ""}`}><p>{a}</p></div></div>)}</div></section>

      <footer className="footer"><a className="brand" href="#inicio">IWON<span>®</span></a><p>Productora audiovisual para artistas independientes<br />CABA · Conurbano · Buenos Aires</p><div><a href="https://instagram.com/iwonaudiovisual" target="_blank" rel="noreferrer">Instagram ↗</a><a href="#contacto">Contacto ↗</a></div><small>© 2026 Iwon Audiovisual</small></footer>
    </main>
  );
}
