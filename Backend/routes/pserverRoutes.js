const express = require('express');
const router = express.Router();
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./postRoutes');

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/ForumPostInput', (req, res) => {
    const {titulo, texto, tag} = req.body;
    const sqlinsert =  'INSERT INTO posts (titulo, texto, tag) VALUES (?, ?, ?)';
    db.query(sqlinsert, [titulo, texto, tag], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('Erro ao enviar o post do usuário');
        } else {
            res.status(201).send('Post enviado com sucesso');
        }
    });
});

const port = 5000;
app.listen(port, () =>{
    console.log(`Servidor rodando na porta ${port}`);
});


module.exports = router;