import express from 'express';
import { listarApoioPsicologico } from '../controllers/apoio.controller.js';

const router = express.Router();

// Rota para listar apoio psicológico
router.get('/', listarApoioPsicologico);

export default router;
