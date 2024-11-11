// routes/posts.js
module.exports = function (db) {
    const express = require('express');
    const router = express.Router();
  
    // Rota para criar um novo post 
    router.post('/', (req, res) => {
      const { user, content } = req.body;
  
      const query = 'INSERT INTO posts (user, content) VALUES (?, ?)';
      db.query(query, [user, content, JSON.stringify(tags)], (err, result) => {
        if (err) {
          return res.status(500).json({ message: 'Erro ao criar post', error: err });
        }
        res.status(201).json({ id: result.insertId, user, content, tags });
      });
    });
  
    // Rota para listar todos os posts
    router.get('/', (req, res) => {
      const query = 'SELECT * FROM posts ORDER BY createdAt DESC';
      db.query(query, (err, results) => {
        if (err) {
          return res.status(500).json({ message: 'Erro ao listar posts', error: err });
        }
        res.status(200).json(results);
      });
    });
  
    return router;
  };