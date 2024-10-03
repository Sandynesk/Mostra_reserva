const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',       // Altere para o seu host
  user: 'root',            // Usuário do banco de dados
  password: 'Leitinho12345', // Senha do banco de dados
  database: 'Sandybank',      // Nome do banco de dados
});

db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar no banco de dados:', err);
    return;
  }
  console.log('Conectado ao banco de dados MySQL.');
});

module.exports = db;
