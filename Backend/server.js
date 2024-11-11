// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const { verifyToken } = require('./middleware/auth'); // Importa o middleware
const db = require('./modules/db'); // Importa a conexão com o banco de dados
const pserverRoutes = require('./routes/pserverRoutes')

const app = express();
app.use(express.json());
app.use(cors());

// Tente conectar ao banco de dados
(async () => {
  try {
    await db.connect(); // Chama a função de conexão
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error.message);
  }
})();

// Rotas
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/pserver', pserverRoutes);

// Exemplo de rota protegida usando o middleware
app.get('/protected', verifyToken, (req, res) => {
  res.send('Acesso permitido');
});

// Exporta o app
module.exports = app;

// Inicia o servidor se este arquivo for executado diretamente
if (require.main === module) {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}

app.get('/api/pserver/FormPostInput', (req, res) => {
  res.send('A rota existe!!!')
})
