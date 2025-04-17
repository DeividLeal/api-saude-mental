import express from 'express';
import { obterPraticasAutocuidado } from '../controllers/autocuidado.controller.js';

const router = express.Router();

// Rota para listar práticas de autocuidado
router.get('/', obterPraticasAutocuidado);

export default router;

