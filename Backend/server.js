require('dotenv').config(); // Carrega variáveis de ambiente
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes'); // Importa rotas de autenticação

const app = express();
app.use(express.json());
app.use(cors());

// Rotas
app.use('/auth', authRoutes); // Usar rotas de autenticação

app.get('/', (req, res) => {
  res.send('Servidor está funcionando!');
});

// Inicialização do servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
