// Mock do módulo de banco de dados
jest.mock('../../modules/db', () => ({
  query: jest.fn(), // Mock da função 'query'
}));

//npx jest "Backend/Testes/testModules/userQueries.test.js"

const db = require('../../modules/db'); // Módulo de banco de dados
const { createUser } = require('../../modules/userQueries'); // Função createUser
const { findUser } = require('../../modules/userQueries'); // Função findUser

describe('findUser', () => {

  // Caso de sucesso: Usuário encontrado
  it('deve retornar o usuário se encontrado no banco de dados', async () => {
    const mockUser = { id: 1, username: 'testuser', email: 'test@example.com', password: 'hashedPassword' };
    
    // Mock da query para simular que o usuário foi encontrado
    db.query.mockResolvedValue([[mockUser]]); // Simulando retorno do banco de dados

    const result = await findUser('testuser');
    
    expect(result).toEqual(mockUser); // Verifica se o usuário retornado é o esperado
    expect(db.query).toHaveBeenCalledWith('SELECT * FROM users WHERE username = ?', ['testuser']);
  });

  // Caso em que o usuário não é encontrado
  it('deve retornar null se o usuário não for encontrado no banco de dados', async () => {
    // Mock da query para simular que nenhum usuário foi encontrado
    db.query.mockResolvedValue([[]]); // Simula uma resposta vazia

    const result = await findUser('unknownuser');
    
    expect(result).toBeNull(); // Verifica se o retorno é null
    expect(db.query).toHaveBeenCalledWith('SELECT * FROM users WHERE username = ?', ['unknownuser']);
  });

  // Caso de falha: Erro no banco de dados
  it('deve lançar um erro se ocorrer um problema na consulta ao banco de dados', async () => {
    const dbError = new Error('Erro no banco de dados');
    
    // Mock da query para simular um erro no banco de dados
    db.query.mockRejectedValue(dbError);

    await expect(findUser('testuser')).rejects.toThrow('Erro ao consultar o banco de dados');
    expect(db.query).toHaveBeenCalledWith('SELECT * FROM users WHERE username = ?', ['testuser']);
  });
});

describe('createUser', () => {

  // Caso de sucesso
  it('deve criar um usuário com sucesso', async () => {
    const mockUser = { id: 1, username: 'testuser', email: 'test@example.com', gender: 'male', password: 'hashedPassword' };
    
    // Mock da primeira query (inserção do usuário)
    db.query.mockImplementationOnce((query, params, callback) => {
      callback(null, { insertId: 1 }); // Simula que a query de inserção funcionou
    });
    
    // Mock da segunda query (seleção do usuário criado)
    db.query.mockImplementationOnce((query, params, callback) => {
      callback(null, [mockUser]); // Simula que o usuário foi encontrado
    });
    
    const result = await createUser('testuser', 'test@example.com', 'male', 'hashedPassword');
    
    expect(result).toEqual(mockUser); // Verifica se o usuário retornado é o esperado
  });

  // Caso de falha na inserção do usuário
  it('deve falhar ao criar um usuário se ocorrer um erro no banco de dados', async () => {
    const dbError = new Error('Erro no banco de dados');

    // Mock da query que falha (inserção do usuário)
    db.query.mockImplementationOnce((query, params, callback) => {
      callback(dbError, null); // Simula um erro no banco de dados
    });

    await expect(createUser('testuser', 'test@example.com', 'male', 'hashedPassword')).rejects.toThrow('Erro no banco de dados');
  });

});
