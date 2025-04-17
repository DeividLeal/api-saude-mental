import express from 'express';
import { fraseMotivacional } from '../controllers/frases.controller.js';

const router = express.Router();

// Defina a rota para buscar frases motivacionais
router.get('/', fraseMotivacional);

export default router;
