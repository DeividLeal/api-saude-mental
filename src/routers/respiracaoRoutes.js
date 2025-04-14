import express from 'express';
import { passoRespiracao } from '../controllers/respiracaoController.js';

const router = express.Router();

// Defina a rota para 'passoRespiracao'
router.get('/', passoRespiracao);

export default router;
