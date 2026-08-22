const steps = [
  ["01", "Hablamos", "Nos pasás el tema, las referencias y lo que tenés en mente."],
  ["02", "Armamos el plan", "Te proponemos una idea que funcione con tu presupuesto, locaciones y tiempos."],
  ["03", "Rodamos", "Vamos a set con dirección, equipo y un plan claro para aprovechar el día."],
  ["04", "Entregamos", "Editamos y entregamos tu videoclip en hasta 14 días."],
];

function Arrow() { return <span className="arrow" aria-hidden="true">↗</span>; }

export function BenefitsSection() {
  return (
    <section id="proceso" className="process section-pad">
      <div className="section-label">03 / Cómo trabajamos</div>
      <div className="process-header">
        <h2>Del tema al<br /><em>video terminado.</em></h2>
        <p className="muted">Ordenamos la idea, el presupuesto y el rodaje para que llegues a filmar sin quilombos.</p>
      </div>
      <div className="process-list">
        {steps.map(([num, title, text]) => <div className="process-item" key={num}><span>{num}</span><h3>{title}</h3><p>{text}</p><Arrow /></div>)}
      </div>
    </section>
  );
}
