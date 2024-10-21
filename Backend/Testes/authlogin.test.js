// Importações necessárias
const app = require('../server'); // Certifique-se de que o caminho para o seu servidor está correto
const db = require('../modules/db'); // Importa o módulo do banco de dados
const bcrypt = require('bcrypt'); // Importa o módulo bcrypt
const jwt = require('jsonwebtoken'); // Importa o módulo jsonwebtoken
const request = require('supertest'); // Para fazer requisições HTTP nos testes
const { findUser } = require('../modules/userQueries'); // Função findUser


//npx jest Backend/Testes/authlogin.test.js



// Mock das funções do banco de dados
jest.mock('../modules/db', () => ({
    query: jest.fn(),
}));

// Mock do bcrypt
jest.mock('bcrypt', () => ({
    compare: jest.fn(),
    hash: jest.fn(() => 'hashedPassword'), // Simula o hash da senha
}));

// Mock do jsonwebtoken
jest.mock('jsonwebtoken', () => ({
    sign: jest.fn(() => 'token'), // Simula o token gerado
}));

jest.mock('../modules/userQueries', () => ({
    findUser: jest.fn(),
}));





describe('POST /api/auth/login', () => {
    const username = 'testuser';
    const password = 'senhaSecreta';

    beforeEach(() => {
        jest.clearAllMocks(); // Limpa todos os mocks antes de cada teste
    });

    test('Deve retornar 401 se o usuário não for encontrado', async () => {
        // Simula que o usuário não existe
        findUser.mockResolvedValue(null); // Simula que o findUser retorna null
    
        const response = await request(app).post('/api/auth/login').send({
            username,
            password,
        });
    
        expect(response.status).toBe(401);
        expect(response.text).toBe('Usuário não encontrado');
    });


    test('Deve retornar um token se o usuário for encontrado e a senha estiver correta', async () => {
        const mockUser = { id: 1, username, password: await bcrypt.hash(password, 10) }; // Mock de usuário encontrado

        // Mock da query para simular que o usuário foi encontrado
        db.query.mockResolvedValue([[mockUser]]); // Simula que o usuário foi encontrado no banco de dados

        // Mock da comparação de senha para simular que a senha está correta
        bcrypt.compare.mockResolvedValue(true); // Simula que a senha coincide

        const response = await request(app).post('/api/auth/login').send({
            username,
            password, // Senha correta
        });

        expect(response.status).toBe(200); // Verifica se o status é 200
        expect(response.body).toHaveProperty('token'); // Verifica se o token está presente na resposta

        // Opcional: Verifica se o token gerado é válido
        const decodedToken = jwt.verify(response.body.token, process.env.JWT_SECRET);
        expect(decodedToken).toHaveProperty('id', mockUser.id); // Verifica se o ID no token é o mesmo do usuário
    });



    test('Deve retornar 401 se a senha estiver incorreta', async () => {
        const mockUser = { id: 1, username, password: 'hashedPassword' }; // Mock de usuário encontrado

        // Mock da query para simular que o usuário foi encontrado
        db.query.mockResolvedValue([[mockUser]]); // Simula que o usuário foi encontrado no banco de dados

        // Mock da comparação de senha para simular senha incorreta
        bcrypt.compare.mockResolvedValue(false); // Simula que a senha não coincide

        const response = await request(app).post('/api/auth/login').send({
            username,
            password: 'senhaErrada', // Senha incorreta
        });

        expect(response.status).toBe(401); // Verifica se o status é 401
        expect(response.text).toBe('Senha incorreta'); // Verifica se a mensagem de erro está correta
    });
    
    

    test('Deve retornar um token JWT ao fazer login com sucesso', async () => {
        // Mock da query para simular que o usuário foi encontrado
        const mockUser = { id: 1, username, password: 'hashedPassword' }; // Mock de usuário encontrado
        db.query.mockImplementation((query, params, callback) => {
            callback(null, [[mockUser]]);
        });

        // Mock da comparação de senha para simular senha correta
        bcrypt.compare.mockResolvedValue(true); // Simula que a senha está correta

        const response = await request(app).post('/api/auth/login').send({
            username,
            password,
        });

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('token'); // Verifica se o token está presente
    });

    test('Deve retornar 500 se ocorrer um erro no servidor', async () => {
        const dbError = new Error('Erro no banco de dados');

        // Mock da query que falha
        db.query.mockImplementation((query, params, callback) => {
            callback(dbError, null); // Simula um erro no banco de dados
        });

        const response = await request(app).post('/api/auth/login').send({
            username,
            password,
        });

        expect(response.status).toBe(500);
        expect(response.text).toBe('Erro no servidor');
    });
});
