// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const { verifyToken } = require('./middleware/auth'); // Importa o middleware


const app = express();
app.use(express.json());
app.use(cors());

// Rotas
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);

// Exemplo de rota protegida usando o middleware
app.get('/protected', verifyToken, (req, res) => {
  res.send('Acesso permitido');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
