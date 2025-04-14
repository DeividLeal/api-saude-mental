import express from 'express';
import { listarPraticasAutocuidado } from '../controllers/autocuidadoController.js';

const router = express.Router();

// Rota para listar práticas de autocuidado
router.get('/', listarPraticasAutocuidado);

export default router;

