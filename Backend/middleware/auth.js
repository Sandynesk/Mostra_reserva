// /src/middleware/auth.js
const jwt = require('jsonwebtoken');

// Middleware para validar a entrada do usuário
const validateUserInput = (req, res, next) => {
    const { username, email, gender, password } = req.body;

    // Verifica se todos os campos obrigatórios estão presentes
    if (!username || !email || !gender || !password) {
        return res.status(400).send('Todos os campos são obrigatórios');
    }

    // Verifica o formato do e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).send('E-mail inválido');
    }

    // Validação da senha (pelo comprimento)
    if (password.length < 6) {
        return res.status(400).send('A senha deve ter pelo menos 6 caracteres');
    }

    // Se tudo estiver ok, chama o próximo middleware ou rota
    next();
};

// Middleware para verificar o token JWT
const verifyToken = (req, res, next) => {
    // Obtém o token do cabeçalho da requisição
    const token = req.header('Authorization');
    
    // Verifica se o token está presente
    if (!token) return res.status(401).send('Acesso negado');

    try {
        // Verifica se o token é válido
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        
        // Adiciona os dados do usuário ao objeto req
        req.user = verified;
        
        // Passa para o próximo middleware ou rota
        next();
    } catch (err) {
        res.status(400).send('Token inválido');
    }
};

module.exports = { validateUserInput, verifyToken };
