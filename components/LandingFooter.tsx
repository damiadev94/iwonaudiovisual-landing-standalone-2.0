const footerLinks = [
  { label: "Instagram", href: "https://instagram.com/iwonaudiovisual" },
  { label: "YouTube", href: "https://youtube.com/@iwonaudiovisual" },
  { label: "Contacto", href: "#contacto" },
];

export function LandingFooter() {
  return (
    <footer className="footer">
      <a className="brand" href="#inicio">IWON<span>®</span></a>
      <p>Productora audiovisual para artistas independientes<br />CABA · Conurbano · Buenos Aires</p>
      <div>{footerLinks.map(({ label, href }) => <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>{label} ↗</a>)}</div>
      <small>© 2026 Iwon Audiovisual</small>
    </footer>
  );
}
