const express = require('express');
const mysql = require('mysql2');
const router = express.Router();

// Criando a conexão com o MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'cimatec',
    database: 'Post'
});

// Conectando ao MySQL
db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar no MySQL:', err);
        return;
    }
    console.log('Conectado ao MySQL server');
});

// Exportando tanto o `router` quanto o `db` (conexão com o banco)
module.exports = { router, db };
