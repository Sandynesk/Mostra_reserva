// /src/modules/db.js
const mysql = require('mysql2/promise'); // Corrige a importação para usar Promises, isso é importante para o codigo nao quebrar aparentemente.

// Criação da conexão
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Conecta ao banco de dados
db.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  } else {
    console.log('Conectado ao MySQL');
  }
});

// Exporta a conexão
module.exports = db;
