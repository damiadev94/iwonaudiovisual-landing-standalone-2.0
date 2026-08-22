"use client";

import { useState } from "react";

const faqs = [
  ["¿Cuánto cuesta filmar un videoclip?", "Cada proyecto se cotiza según la idea, locaciones y cantidad de horas. Te pasamos un presupuesto claro, sin vueltas."],
  ["¿En qué zonas trabajan?", "Filmamos exclusivamente en CABA."],
  ["¿Qué incluye el servicio?", "Incluye desarrollo de idea, preproducción, rodaje, edición y color. Antes de filmar dejamos claro qué se hace, cuánto sale y cuándo se entrega."],
  ["¿Necesito tener una idea armada?", "No. Con el tema, algunas referencias o una idea suelta alcanza. Nosotros te ayudamos a bajarla a un rodaje posible."],
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="faq section-pad">
      <div className="section-label">Preguntas frecuentes</div>
      <div className="faq-list">
        {faqs.map(([question, answer], i) => <div className="faq-row" key={question}>
          <button onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}><span>{question}</span><b>{open === i ? "−" : "+"}</b></button>
          <div className={`faq-answer ${open === i ? "is-open" : ""}`}><p>{answer}</p></div>
        </div>)}
      </div>
    </section>
  );
}
