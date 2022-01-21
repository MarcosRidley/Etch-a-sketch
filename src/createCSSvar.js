export function createCSSvar(quantosFRs) {
  let numeroFRs = "";

  for (let i = 0; i < quantosFRs; i++) {
    numeroFRs += " 1fr";
  }
  return numeroFRs;
}
