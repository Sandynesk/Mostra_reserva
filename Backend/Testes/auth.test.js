const request = require('supertest');
const app = require('../server'); // Certifique-se que esse arquivo exporta o app corretamente
const db = require('../modules/db'); // Importa o módulo de banco de dados

//npx jest "Backend/Testes/auth.test.js"

// Mock das funções do banco de dados
jest.mock('../modules/db', () => ({
    findUser: jest.fn(),
    createUser: jest.fn(),
}));

jest.mock('bcrypt', () => ({
    hash: jest.fn(() => 'hashedPassword'), // Simula o hash da senha
}));

describe('POST /cadastro', () => {
    beforeEach(() => {
        db.findUser.mockClear(); // Limpa o mock do banco de dados
        db.createUser.mockClear();
    });

    afterEach(() => {
        jest.clearAllMocks(); // Limpa todos os mocks após cada teste
    });

    it('Deve retornar 400 se o usuário já existir', async () => {
        db.findUser.mockResolvedValue({ username: 'user4' });

        const res = await request(app)
            .post('/api/auth/cadastro')
            .send({
                username: 'user4',
                email: 'sandynesk@gmail.com',
                gender: 'masculino',
                password: 'password123',
            });

        expect(res.statusCode).toBe(400);
        expect(res.text).toBe('Usuário já existe');
    });

    it('Deve retornar 201 ao criar um usuário novo', async () => {
        db.findUser.mockResolvedValue(null); // Simula que o usuário não existe
        db.createUser.mockResolvedValue(true); // Simula sucesso na criação do usuário

        const res = await request(app)
            .post('/api/auth/cadastro')
            .send({
                username: 'newUser',
                email: 'newuser@gmail.com',
                gender: 'feminino',
                password: 'password123',
            });

        expect(res.statusCode).toBe(201);
        expect(res.text).toBe('Usuário criado com sucesso');
    });

    it('Deve retornar 500 se ocorrer um erro no servidor', async () => {
        db.findUser.mockResolvedValue(null);
        db.createUser.mockRejectedValue(new Error('Erro no servidor')); // Simula erro ao criar usuário

        const res = await request(app)
            .post('/api/auth/cadastro')
            .send({
                username: 'newUser',
                email: 'newuser@gmail.com',
                gender: 'feminino',
                password: 'password123',
            });

        expect(res.statusCode).toBe(500);
        expect(res.text).toBe('Erro no servidor');
    });
});

module.exports = app;
