export class Autocuidado {
  constructor() {
    this.praticasAutocuidado = [
      "Tirar um tempo para você",
      "Praticar atividade física",
      "Dormir bem",
      "Alimentar-se de forma saudável",
      "Estabelecer limites saudáveis"
    ];
  }

  listarPraticas() {
    return this.praticasAutocuidado;
  }
}

export default Autocuidado;