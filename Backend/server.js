require('dotenv').config(); // Carregar variáveis de ambiente

const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const { findUser, createUser } = require('./modules/db');

const app = express();
app.use(express.json());
app.use(cors());

// Rotas
app.get('/', (req, res) => {
  res.send('Servidor está funcionando!');
});

app.get('/login', (req, res) => {
  res.send('O login está funcionando!');
});

app.get('/cadastro', (req, res) => {
  res.send('O Cadastro está funcionando!');
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    findUser(username, async (err, user) => {
      if (err) {
        return res.status(500).send('Erro no servidor');
      }
      if (!user) {
        return res.status(401).send('Usuário não encontrado');
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).send('Senha incorreta');
      }
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.json({ token });
    });
  } catch (err) {
    res.status(500).send('Erro no servidor');
  }
});

app.post('/cadastro', async (req, res) => {
  const { username, email, gender, password } = req.body;

  try {
    // Verifica se o usuário já existe
    findUser(username, async (err, user) => {
      if (err) {
        return res.status(500).send('Erro no servidor');
      }
      if (user) {
        return res.status(400).send('Usuário já existe');
      }

      // Cria o hash da senha
      const hashedPassword = await bcrypt.hash(password, 10);

      // Cria o usuário
      createUser(username, email, gender, hashedPassword, (err) => {
        if (err) {
          return res.status(500).send('Erro ao criar usuário');
        }
        res.status(201).send('Usuário criado com sucesso');
      });
    });
  } catch (err) {
    res.status(500).send('Erro no servidor');
  }
});


// Middleware de verificação de token
const verifyToken = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).send('Acesso negado');

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send('Token inválido');
  }
};

// Rota protegida
app.get('/protected', verifyToken, (req, res) => {
  res.send('Acesso permitido');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});


