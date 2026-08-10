const items = [
  {
    id: 1,
    title: "Sombra",
    artist: "Kairo",
    href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Noches",
    artist: "Luna",
    href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Ritmo",
    artist: "Mora",
    href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Ciudad",
    artist: "Dante",
    href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Vibración",
    artist: "Nico",
    href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "Destino",
    artist: "Juli",
    href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    title: "Bajo la lluvia",
    artist: "Ari",
    href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    title: "Doble filo",
    artist: "Rama",
    href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&q=80",
  },
];

export function PortfolioSection() {
  return (
    <section id="portfolio" style={{ padding: "100px 40px", background: "#111111" }}>
      <div style={{ fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#D4A843", marginBottom: "16px", display: "flex", alignItems: "center", gap: "10px" }}>— Portfolio</div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "24px", marginBottom: "60px" }}>
        <div style={{ fontFamily: "var(--font-condensed)", fontWeight: 900, fontSize: "clamp(42px, 7vw, 80px)", textTransform: "uppercase", lineHeight: 0.9, letterSpacing: "-0.01em" }}>
          Más de <em style={{ fontStyle: "normal", color: "#D4A843" }}>450 videoclips</em>
          <br />
          filmados.
        </div>
        <p style={{ fontSize: "14px", color: "#888", maxWidth: "320px", lineHeight: 1.7 }}>
          Cada videoclip filmado con equipamiento de cine profesional. Este es nuestro trabajo.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4" style={{ gap: "1px", background: "#2A2A2A" }}>
        {items.map((item) => (
          <a key={item.id} href={item.href} target="_blank" rel="noopener noreferrer" className="group" style={{ position: "relative", display: "block", aspectRatio: "16/9", overflow: "hidden", background: "#161616" }}>
            <img src={item.image} alt={`${item.title} — ${item.artist}`} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.35s ease" }} className="group-hover:scale-105" />
            <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "rgba(8,8,8,0.75)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8px", padding: "12px", opacity: 0, transition: "opacity 0.3s ease" }} className="group-hover:opacity-100">
              <div style={{ width: "36px", height: "36px", background: "#D4A843", clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "4px", flexShrink: 0 }}>
                <svg width="12" height="14" viewBox="0 0 12 14" fill="none" style={{ marginLeft: "2px" }}>
                  <path d="M0 0L12 7L0 14V0Z" fill="#000" />
                </svg>
              </div>
              <p style={{ fontFamily: "var(--font-condensed)", fontWeight: 800, fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.04em", color: "#F2EDE4", textAlign: "center", lineHeight: 1.2, margin: 0 }}>{item.title}</p>
              <p style={{ fontSize: "11px", color: "#D4A843", textAlign: "center", letterSpacing: "0.08em", margin: 0 }}>{item.artist}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
