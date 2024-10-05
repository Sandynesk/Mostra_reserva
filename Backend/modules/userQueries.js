// /src/modules/userQueries.js
const db = require('./db');

// Função para encontrar usuário
const findUser = (username, callback) => {
  console.log('Buscando usuário:', username); // Log do nome de usuário
  db.query('SELECT * FROM users WHERE username = ?', [username], (err, results) => {
    if (err) {
      console.error('Erro ao consultar usuário:', err);
      callback(err, null);
    } else {
      console.log('Resultado da consulta:', results); // Log dos resultados
      callback(null, results[0]); // Retorna o primeiro resultado encontrado
    }
  });
};

// Função para criar usuário
const createUser = (username, email, gender, hashedPassword, callback) => {
  console.log('Criando usuário:', { username, email, gender, hashedPassword }); // Log dos dados do usuário
  const query = 'INSERT INTO users (username, email, gender, password) VALUES (?, ?, ?, ?)';
  db.query(query, [username, email, gender, hashedPassword], (err) => {
    if (err) {
      console.error('Erro ao criar usuário:', err);
      callback(err);
    } else {
      console.log('Usuário criado com sucesso');
      callback(null);
    }
  });
};


// Exporta as funções
module.exports = { findUser, createUser };
