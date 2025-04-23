export class ExerciciosRespiracao {
  constructor() {
    this.exercicios = [
      {
        nome: "Respiração 4-7-8",
        descricao: "Inspire por 4 segundos, segure por 7 e expire por 8."
      },
      {
        nome: "Respiração diafragmática",
        descricao: "Respire profundamente pelo nariz, enchendo o abdômen, e solte lentamente pela boca."
      }
    ];
  }

  listarExercicios() {
    return [...this.exercicios]; // Retorne uma cópia para evitar mutações acidentais
  }
}

export const exerciciosRespiracao = new ExerciciosRespiracao();