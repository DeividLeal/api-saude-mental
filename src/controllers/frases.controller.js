import { FrasesMotivacionais } from '../model/frases.model.js';

export function fraseMotivacional(req, res) {
  const frasesObj = new FrasesMotivacionais();
  const frases = frasesObj.obterFrases();
  const frase = frases[Math.floor(Math.random() * frases.length)];
  res.json({ frase });
}
