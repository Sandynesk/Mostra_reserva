const mysql = require('mysql2');

// Criação da conexão
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  } else {
    console.log('Conectado ao MySQL');
  }
});

// Função para encontrar usuário
const findUser = (username, callback) => {
  db.query('SELECT * FROM users WHERE username = ?', [username], (err, results) => {
    if (err) {
      console.error('Erro ao consultar usuário:', err);
      callback(err, null);
    } else {
      callback(null, results[0]); // Retorna o primeiro resultado encontrado
    }
  });
};


// Função para criar usuário
const createUser = (username, hashedPassword, callback) => {
  db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword], (err) => {
    if (err) {
      console.error('Erro ao criar usuário:', err);
      callback(err);
    } else {
      callback(null);
    }
  });
};

module.exports = { findUser, createUser };
