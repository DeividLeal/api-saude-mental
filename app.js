import express from 'express';
import autocuidadoRoutes from './src/routers/autocuidadoRoutes.js';
import apoioRoutes from './src/routers/apoioRoutes.js';
import frasesRoutes from './src/routers/frasesRoutes.js';
import respiracaoRoutes from './src/routers/respiracaoRoutes.js';
import criptografiaRoutes from './src/routers/criptografiaRoutes.js';


const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para lidar com JSON
app.use(express.json());

// Rotas
app.use('/autocuidado', autocuidadoRoutes);
app.use('/apoio-psicologico', apoioRoutes);
app.use('/frases-motivacionais', frasesRoutes);
app.use('/exercicio-respiracao', respiracaoRoutes);
app.use('/criptografar', criptografiaRoutes);

// Rota principal
app.get('/', (req, res) => {
  res.send('Bem-vindo à API de Apoio à Saúde Mental Comunitária 💙');
});

// Middleware para lidar com erros genéricos
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo deu errado! Tente novamente mais tarde.');
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
