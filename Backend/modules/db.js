const mysql = require('mysql2/promise');

let connection;

// Função para conectar ao banco de dados
async function connect() {
  if (!connection) {
    try {
      connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
      });
      console.log('Conectado ao MySQL');
    } catch (error) {
      console.error('Erro ao conectar ao MySQL:', error.message);
      throw new Error('Erro ao conectar ao banco de dados'); // Lança um erro para ser tratado onde for chamado
    }
  }
  return connection;
}

// Função para executar consultas
async function query(sql, params) {
  const conn = await connect(); // Chamando connect aqui para garantir que a conexão é feita
  try {
    return await conn.query(sql, params);
  } catch (error) {
    console.error('Erro ao executar consulta:', error.message);
    throw new Error('Erro ao executar a consulta'); // Lança um erro para ser tratado onde for chamado
  }
}

// Exporta as funções
module.exports = {
  connect, // Exportando a função connect
  query,
};
