const request = require('supertest');
const app = require('../server');
const db = require('../modules/db'); // Supondo que você tenha um módulo para gerenciar a conexão com o banco de dados



// Limpar e popular o banco de dados antes de executar os testes
beforeAll(async () => {
  await db.query("INSERT INTO users (username, password) VALUES ('testuser', 'testpassword')");
});

afterAll(async () => {
  await db.query("DELETE FROM users"); // Limpa a tabela após os testes
  db.end(); // Fecha a conexão com o banco de dados
});

describe('POST /api/auth/login', () => {
  it('should return a token for valid login', async () => {
    const response = await request(app)
      .post('/api/auth/login')
      .send({
        username: 'testuser',
        password: 'testpassword'
      });
    
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('token');
  });

  it('should return 401 for invalid login', async () => {
    const response = await request(app)
      .post('/api/auth/login')
      .send({
        username: 'nonexistentuser', // Um usuário que não existe
        password: 'wrongpassword'
      });
    
    expect(response.status).toBe(401);
  });
});

describe('POST /api/auth/cadastro', () => {
    it('should create a new user', async () => {
      const response = await request(app)
        .post('/api/auth/cadastro')
        .send({
          username: 'newuser',
          email: 'newuser@example.com',
          gender: 'Female',
          password: 'newpassword'
        });
      
      expect(response.status).toBe(201);
      expect(response.text).toBe('Usuário criado com sucesso');
    });
  
    it('should return 400 for existing user', async () => {
      await request(app)
        .post('/api/auth/cadastro')
        .send({
          username: 'newuser',
          email: 'newuser@example.com',
          gender: 'Female',
          password: 'newpassword'
        }); // Criar primeiro usuário
  
      const response = await request(app)
        .post('/api/auth/cadastro')
        .send({
          username: 'newuser',
          email: 'newuser@example.com',
          gender: 'Female',
          password: 'newpassword'
        });
      
      expect(response.status).toBe(400);
      expect(response.text).toBe('Usuário já existe');
    });
  });
  
module.exports = app;
