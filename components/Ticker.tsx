const items = ["IMAGEN QUE SUENA", "HISTORIAS QUE QUEDAN", "TU PRÓXIMO VIDEOCLIP"];

export function Ticker() {
  const content = [...items, ...items];
  return <div className="marquee" aria-hidden="true"><div>{content.map((item, i) => <span key={`${item}-${i}`}>{item} <b>✳</b> </span>)}</div></div>;
}
