const db = require('../config/db'); // Importa configuração do banco de dados

// Função para encontrar usuário
const findUser = (username, callback) => {
  db.query('SELECT * FROM users WHERE username = ?', [username], (err, results) => {
    if (err) return callback(err, null);
    return callback(null, results[0]);
  });
};

// Função para criar usuário
const createUser = (username, email, gender, hashedPassword, callback) => {
  const query = 'INSERT INTO users (username, email, gender, password) VALUES (?, ?, ?, ?)';
  db.query(query, [username, email, gender, hashedPassword], (err) => {
    if (err) return callback(err);
    callback(null);
  });
};

module.exports = { findUser, createUser };
