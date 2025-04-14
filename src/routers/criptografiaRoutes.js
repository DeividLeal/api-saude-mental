import express from 'express';
import { criptografarTexto } from '../controllers/criptografiaController.js';

const router = express.Router();

// Definindo a rota GET
router.get('/', criptografarTexto);

export default router;

