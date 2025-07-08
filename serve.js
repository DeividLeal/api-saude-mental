// Importa o framework Express
import express from 'express';
import cors from 'cors';

// Importa as rotas de diferentes funcionalidades
import autocuidadoRoutes from './src/routers/autocuidado.routes.js';
import apoioRoutes from './src/routers/apoio.routes.js';
import frasesRoutes from './src/routers/frases.routes.js';
import respiracaoRoutes from './src/routers/respiracao.routes.js';


// Cria uma instância do aplicativo Express
const app = express();

// Define a porta do servidor (padrão 3000 ou definida no ambiente)
const PORT = process.env.PORT || 3000;

// <<< MUDANÇA 2: Use o cors ANTES das suas rotas.
// Isso vai permitir que seu frontend (rodando em outra porta) acesse a API.
import cors from 'cors';
app.use(cors());

// Middleware para interpretar requisições com JSON
app.use(express.json());

// Define as rotas para cada funcionalidade
app.use('/apoio-psicologico', apoioRoutes);         // Rotas para apoio psicológico
app.use('/autocuidado', autocuidadoRoutes);           // Rotas relacionadas ao autocuidado
app.use('/frases-motivacionais', frasesRoutes);       // Rotas para frases motivacionais
app.use('/exercicio-respiracao', respiracaoRoutes);   // Rotas para exercícios de respiração


// Rota principal (raiz) para exibir uma mensagem de boas-vindas
app.get('/', (_req, res) => {
  res.send('Bem-vindo à API de Apoio à Saúde Mental Comunitária 💙');
});

// Middleware para tratar rotas não encontradas
app.use((_req, res) => {
  res.status(404).send('Rota não encontrada!');
});

// Middleware para tratar erros internos do servidor
app.use((err, _req, res, _next) => {
  console.error(err.stack);
  res.status(500).send('Algo deu errado! Tente novamente mais tarde.');
});

// Inicia o servidor na porta definida
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});