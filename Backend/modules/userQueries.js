// /src/modules/userQueries.js
const db = require('./db');

const findUser = async (username) => {
    try {
      console.log('Buscando usuário:', username); // Log do nome de usuário
  
      // Usando uma Promise para manipular a query do banco de dados
      const [results] = await db.query('SELECT * FROM users WHERE username = ?', [username]);
  
      console.log('Resultado da consulta:', results); // Log dos resultados
  
      // Retorna o primeiro resultado ou null se não houver resultado
      return results.length > 0 ? results[0] : null;
    } catch (err) {
      console.error('Erro ao consultar usuário:', err);
      throw new Error('Erro ao consultar o banco de dados');
    }
  };
  

// Função para criar usuário
const createUser = (username, email, gender, hashedPassword) => {
    return new Promise((resolve, reject) => {
      const query = 'INSERT INTO users (username, email, gender, password) VALUES (?, ?, ?, ?)';
      db.query(query, [username, email, gender, hashedPassword], (err, result) => {
        if (err) {
          return reject(err);
        }
        db.query('SELECT * FROM users WHERE username = ?', [username], (err, results) => {
          if (err) {
            return reject(err);
          } else if (results.length > 0) {
            resolve(results[0]); // Retorna o usuário criado
          } else {
            reject(new Error('Usuário não encontrado após a criação'));
          }
        });
      });
    });
  };
  
  

// Exporta as funções
module.exports = { findUser, createUser };
