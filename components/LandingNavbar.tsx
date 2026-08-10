"use client";

import { useState } from "react";

const navLinks = [
  { label: "Trabajos", href: "#trabajos" },
  { label: "Proceso", href: "#proceso" },
  { label: "Contacto", href: "#contacto" },
];

export function LandingNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav" aria-label="Navegación principal">
      <a className="brand" href="#inicio">IWON<span>®</span></a>
      <div className="nav-links">
        {navLinks.map(({ label, href }) => <a key={label} href={href}>{label}</a>)}
      </div>
      <a className="nav-cta" href="#contacto">Hablemos <span className="arrow">↗</span></a>
      <button className="mobile-menu" aria-label={isOpen ? "Cerrar menú" : "Abrir menú"} aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "×" : "☰"}
      </button>
      {isOpen && <div className="mobile-nav">{navLinks.map(({ label, href }) => <a key={label} href={href} onClick={() => setIsOpen(false)}>{label}</a>)}<a href="#contacto" onClick={() => setIsOpen(false)}>Hablemos ↗</a></div>}
    </nav>
  );
}
