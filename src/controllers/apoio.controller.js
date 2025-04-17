import { listarCanaisApoio } from '../model/apoio.model.js';

export function listarApoioPsicologico(req, res) {
  const canais = listarCanaisApoio();
  res.json({ canais });
}
