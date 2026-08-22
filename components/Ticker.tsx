const items = ["IDEA + RODAJE + EDICIÓN", "PRESUPUESTO CLARO", "ENTREGA EN HASTA 14 DÍAS"];

export function Ticker() {
  const content = [...items, ...items];
  return <div className="marquee" aria-hidden="true"><div>{content.map((item, i) => <span key={`${item}-${i}`}>{item} <b>✳</b> </span>)}</div></div>;
}
