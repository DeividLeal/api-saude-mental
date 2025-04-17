import express from 'express';
import { passoRespiracao } from '../controllers/respiracao.controller.js';

const router = express.Router();

// Defina a rota para 'passoRespiracao'
router.get('/', passoRespiracao);

export default router;
