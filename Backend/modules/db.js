const mysql = require('mysql2/promise');

let connection;

// Função para conectar ao banco de dados
async function connect() {
  if (!connection) {
    try {
      connection = await mysql.createConnection({
        host: 'junction.proxy.rlwy.net', // Usando o host público
        user: 'root',                     // Nome de usuário
        password: 'EQbxLtukiBxmdMQwOKQbvNSzgFSHQdkC', // Senha
        database: 'railway',              // Nome do banco de dados
        port: 56554,                      // Porta pública
      });
      console.log('Conectado ao MySQL');
    } catch (error) {
      console.error('Erro ao conectar ao MySQL:', error.message);
      throw new Error('Erro ao conectar ao banco de dados'); // Lança um erro para ser tratado onde for chamado
    }
  }
  return connection;
}

(async () => {
  try {
    await connect();
    console.log('Conexão com o banco de dados na nuvem bem-sucedida!');
  } catch (error) {
    console.error('Erro na conexão com o banco de dados:', error.message);
  }
})();

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
