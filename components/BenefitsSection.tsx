const steps = [
  ["01", "Charlamos", "Nos contás tu canción, tus referencias y qué querés hacer sentir."],
  ["02", "Damos forma", "Armamos una propuesta visual realista, con locaciones y plan de rodaje."],
  ["03", "Filmamos", "Un día de rodaje con dirección clara, equipo profesional y buena onda."],
  ["04", "Estrenás", "Recibís tu videoclip listo para YouTube, redes y para que lo vea todo el mundo."],
];

function Arrow() { return <span className="arrow" aria-hidden="true">↗</span>; }

export function BenefitsSection() {
  return (
    <section id="proceso" className="process section-pad">
      <div className="section-label">03 / Cómo trabajamos</div>
      <div className="process-header">
        <h2>De la primera<br /><em>idea al estreno.</em></h2>
        <p className="muted">Un proceso simple, cercano y pensado para que la producción no se coma tu energía.</p>
      </div>
      <div className="process-list">
        {steps.map(([num, title, text]) => <div className="process-item" key={num}><span>{num}</span><h3>{title}</h3><p>{text}</p><Arrow /></div>)}
      </div>
    </section>
  );
}
