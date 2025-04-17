import { Autocuidado } from '../model/autocuidado.model.js';

export function obterPraticasAutocuidado(req, res) {
  const autocuidado = new Autocuidado(); // instanciando a classe
  const praticas = autocuidado.listarPraticas(); // chamando método da instância
  res.json({ praticas });
}
