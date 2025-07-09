class CanalDeApoio {
  constructor(nome, telefone, site, descricao) {
    this.nome = nome;
    this.telefone = telefone;
    this.site = site;
    this.descricao = descricao;
  }
}

export const canaisDeApoio = [
  new CanalDeApoio(
    "CVV - Centro de Valorização da Vida",
    "188",
    "https://www.cvv.org.br/",
    "Apoio emocional e prevenção do suicídio."
  ),
  new CanalDeApoio(
    "SUS - CAPS",
    "Atendimento psicológico gratuito pelo Sistema Único de Saúde (CAPS)",
    null,
    "Serviço público de saúde mental."
  ),
  new CanalDeApoio(
    "Vidas Preservadas",
    "0800 280 2828",
    "https://www.vidaspreservadas.com.br/",
    "Programa de apoio e prevenção ao suicídio."
  )
];

export function listarCanaisApoio() {
  return canaisDeApoio;
}