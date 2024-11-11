const express = require('express');
const { db } = require('./postRoutes'); // Agora estamos importando a conexão `db` de postRoutes.js
const router = express.Router(); // Roteador para as rotas
const cors = require('cors');

router.use(cors())

// Definindo a rota para o POST
router.post('/ForumPostInput', (req, res) => {
    const { titulo, texto } = req.body;
    const sqlinsert = 'INSERT INTO posts (titulo, texto) VALUES (?, ?)';

    // Realizando a query no banco de dados usando a conexão `db`
    db.query(sqlinsert, [titulo, texto], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('Erro ao enviar o post do usuário');
        } else {
            res.status(201).send('Post enviado com sucesso');
        }
    });
});

// Exportando o roteador
module.exports = router;
