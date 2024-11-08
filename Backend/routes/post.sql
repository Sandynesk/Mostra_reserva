-- Criação do banco de dados 
CREATE DATABASE Post;
USE Post;

-- Criação da tabela 

CREATE TABLE posts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(255) NOT NULL UNIQUE,
  texto VARCHAR(255) NOT NULL
);

