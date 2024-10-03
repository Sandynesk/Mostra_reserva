const request = require('supertest');
const app = require('../server'); // Assumindo que seu arquivo principal se chama `server.js`

describe('Testando as rotas de autenticação', () => {
  
  it('GET / - Verifica se o servidor está rodando', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe('Servidor está funcionando!');
  });

  it('POST /cadastro - Cadastrar um novo usuário', async () => {
    const res = await request(app)
      .post('/cadastro')
      .send({
        username: 'testuser',
        email: 'testuser@example.com',
        gender: 'male',
        password: 'password123'
      });

    expect(res.statusCode).toEqual(201);
    expect(res.text).toBe('Usuário criado com sucesso');
  });

  it('POST /login - Fazer login com um usuário existente', async () => {
    const res = await request(app)
      .post('/login')
      .send({
        username: 'testuser',
        password: 'password123'
      });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('token'); // Verifica se o token JWT foi retornado
  });

  it('GET /protected - Acessar uma rota protegida com um token válido', async () => {
    // Primeiro faça o login para obter o token
    const loginRes = await request(app)
      .post('/login')
      .send({
        username: 'testuser',
        password: 'password123'
      });

    const token = loginRes.body.token;

    // Agora, acessar a rota protegida com o token JWT
    const res = await request(app)
      .get('/protected')
      .set('Authorization', `Bearer ${token}`);

    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe('Acesso permitido');
  });

  it('GET /protected - Acessar rota protegida sem token', async () => {
    const res = await request(app).get('/protected');
    expect(res.statusCode).toEqual(401); // Acesso negado sem token
    expect(res.text).toBe('Acesso negado');
  });

});
