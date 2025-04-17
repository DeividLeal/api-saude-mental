import { exerciciosRespiracao } from '../model/respiracao.model.js';

export function passoRespiracao(req, res) {
  const exercicios = exerciciosRespiracao.listarExercicios();
  res.json({ exercicios });
}
