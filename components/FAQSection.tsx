"use client";

import { useState } from "react";

const faqs = [
  ["¿Cuánto cuesta filmar un videoclip?", "Cada proyecto se cotiza según la idea, locaciones y cantidad de horas. Te pasamos un presupuesto claro, sin vueltas."],
  ["¿En qué zonas trabajan?", "Trabajamos exclusivamente en CABA."],
  ["¿Qué incluye el servicio?", "Preproducción de la idea, rodaje con equipo profesional y edición con color cinematográfico. Hablamos de todo en una primera llamada sin costo."],
  ["¿Necesito tener una idea armada?", "No. Solo necesitamos escuchar tu canción y entender qué querés transmitir. Bajamos la idea a un plan de rodaje posible para tu presupuesto."],
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
