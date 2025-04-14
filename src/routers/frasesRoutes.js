import express from 'express';
import { fraseMotivacional } from '../controllers/frasesController.js';

const router = express.Router();

// Defina a rota para buscar frases motivacionais
router.get('/', fraseMotivacional);

export default router;
