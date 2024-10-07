-- Criação do banco de dados 
CREATE DATABASE Sandybank;

-- Seleciona o banco de dados 
USE Sandybank;

-- Criação da tabela 

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  gender VARCHAR(50) NOT NULL  
);

-- Inserção de um registro

INSERT INTO users (username, password, email, gender) VALUES ('user1', 'password1', 'user1@example.com', 'Male');


-- Seleção de todos os registros da tabela --
SELECT * FROM users;
SELECT * FROM users WHERE username = 'user1';

ALTER TABLE users ADD COLUMN email VARCHAR(255) NOT NULL;
ALTER TABLE users ADD COLUMN gender VARCHAR(50) NOT NULL;