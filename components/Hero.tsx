"use client";

import { useEffect, useState } from "react";

const mobileImages = [
  "/images/FUGITIVOS.jpg",
  "/images/LA-NOCHE-Y-EL-HUMO.jpg",
  "/images/DIME-QUE-HACER.jpg",
  "/images/RITUAL-GROOVE.jpg",
  "/images/CONEXA.jpg",
  "/images/one-plane.jpg",
];

function Arrow() {
  return <span className="arrow" aria-hidden="true">↗</span>;
}

export function Hero() {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setImageIndex((current) => (current + 1) % mobileImages.length);
    }, 4000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section id="inicio" className="hero">
      <div className="hero-media" aria-hidden="true">
        <video className="hero-video" autoPlay muted loop playsInline preload="metadata">
          <source src="/videos/soy-un-cabron.mp4" type="video/mp4" />
        </video>
        <div className="hero-media-overlay" />
        <div className="hero-mobile-slides">
          {mobileImages.map((image, index) => (
            <img
              key={image}
              className={`hero-mobile-slide ${index === imageIndex ? "is-active" : ""}`}
              src={image}
              alt=""
            />
          ))}
        </div>
      </div>
      <div className="hero-grain" aria-hidden="true" />
      <div className="hero-copy">
        <p className="eyebrow"><i /> Videoclips para urbana, trap y artistas independientes</p>
        <h1>FILMAMOS <br /><em>TU VIDEOCLIP</em> <br />CON <em>CÁMARA DE CINE</em> EN 6K</h1>
        <p className="hero-text">Armamos videoclips con tus referencias, una idea clara y un plan que cierre con tu presupuesto.</p>
        <div className="hero-actions">
          <a className="button button-yellow" href="#contacto">Quiero hacer mi video <Arrow /></a>
          <a className="text-link" href="#trabajos">Ver trabajos <span>↓</span></a>
        </div>
      </div>
      <div className="hero-meta"><span>01 — 04</span><span>Scroll para descubrir</span><span>Buenos Aires / Arg.</span></div>
    </section>
  );
}
