# ConsuWeb - Plataforma Educacional sobre Direitos do Consumidor

**Projeto Acadêmico** - **TCC**  
**Curso:** Técnico em Informática para Internet

### Descrição
O **ConsuWeb** é uma plataforma educacional desenvolvida para promover a conscientização sobre os direitos do consumidor. Utilizando tecnologias como React (Frontend), Node.js (Backend), MySQL (Banco de Dados) e Jest (Testes), a aplicação oferece funcionalidades como um fórum interativo, perguntas e respostas, além de consultas a leis de proteção ao consumidor, como o **Código de Defesa do Consumidor (CDC)**. O projeto visa proporcionar um espaço de aprendizado e suporte comunitário para consumidores.

### Desenvolvedores
- **Carlos Eduardo Guia**
- **Emanuel Marinho**
- **Pedro Henrique Pereira**

### Orientador
**Prof. Leandro Cruz**

---

## Sumário
1. [Introdução](#introdução)
2. [Requisitos](#requisitos)
    - [Requisitos Funcionais](#requisitos-funcionais)
    - [Requisitos Não Funcionais](#requisitos-não-funcionais)
3. [Diagramas](#diagramas)
    - [Diagrama de Caso de Uso](#diagrama-de-caso-de-uso)
    - [Diagrama de Sequência](#diagrama-de-sequência)
    - [Diagrama de Entidade-Relacionamento (ER)](#diagrama-de-entidade-relacionamento-er)
4. [Testes](#testes)
    - [Plano de Testes](#plano-de-testes)
    - [Casos de Teste](#casos-de-teste)

[Documentação do Google Docs](https://docs.google.com/document/d/1poOjWC3JMeCdLEtvofL_caSJJOGUxtXCrh3Qsdhiuh4/edit?pli=1&tab=t.0)

---

## Introdução

### 1.1 Motivação
O tema do projeto foi escolhido com o objetivo de abordar "Leis desconhecidas e o impacto que elas podem causar na sociedade". Muitos consumidores desconhecem seus direitos, o que pode resultar em injustiças nas relações comerciais. A aplicação foi criada para fornecer informações claras e acessíveis sobre as leis de proteção ao consumidor, promovendo justiça nas relações de consumo.

### 1.2 Objetivos

#### 1.2.1 Objetivo Geral
Desenvolver uma aplicação web que incentive os consumidores a conhecerem e exercerem seus direitos, de forma clara, objetiva e didática.

#### 1.2.2 Objetivos Específicos
- Disponibilizar um fórum onde os usuários possam compartilhar experiências e tirar dúvidas sobre relações com empresas.
- Fornecer informações simplificadas sobre leis de consumo.
- Estabelecer parcerias com empresas para promover feedbacks e cupons de desconto.

### 1.3 Linguagens Utilizadas

#### 1.3.1 React
React é uma biblioteca JavaScript para construção de interfaces de usuário, permitindo a criação de componentes reutilizáveis e eficientes para aplicações web.

#### 1.3.2 Jest
Jest é um framework de testes para aplicações JavaScript, utilizado para garantir a qualidade do código através de testes automatizados.

#### 1.3.3 Node.js
Node.js é uma plataforma de execução JavaScript do lado do servidor, usada para construir APIs e serviços web de alto desempenho.

#### 1.3.4 MySQL
MySQL é um sistema de gerenciamento de banco de dados relacional, utilizado para armazenar e manipular dados de usuários e interações na aplicação.

#### 1.3.5 Git
Git é um sistema de controle de versão utilizado para rastrear mudanças no código-fonte e facilitar a colaboração entre os desenvolvedores.

---

## Requisitos

### 2.1 Requisitos Funcionais

- **Cadastro de Usuários:**  
    Permitir o cadastro de novos usuários com e-mail e senha. Possibilitar login para usuários já cadastrados.
  
- **Fórum:**  
    Os usuários podem comentar, curtir e deletar postagens no fórum. Notificações por e-mail são enviadas quando há interações nas postagens.

- **Relacionamento com Parceiros:**  
    Receber feedback de empresas parceiras e fornecer cupons de desconto aos usuários.

- **Sistema de Feedback:**  
    Implementar um formulário para os usuários enviarem sugestões e comentários sobre o site.

### 2.2 Requisitos Não Funcionais

- **Usabilidade:**  
    Navegação intuitiva, visando uma experiência positiva para os usuários.

- **Segurança:**  
    Criptografia de dados sensíveis, garantindo a proteção das informações dos usuários.

- **Privacidade:**  
    A política de privacidade deve ser clara, assegurando o tratamento adequado dos dados pessoais dos usuários.

---

## Diagramas

### 3.1 Diagrama de Caso de Uso
Diagrama que descreve as funcionalidades e interações entre os usuários e o sistema.

### 3.2 Diagrama de Sequência
Diagrama que mostra como as informações fluem dentro da aplicação, como o processo de cadastro e login.

### 3.3 Diagrama de Entidade-Relacionamento (ER)
Diagrama que ilustra a estrutura de banco de dados, mostrando como as entidades se relacionam entre si.

---

## Testes

### 4.1 Plano de Testes
Testes foram planejados para verificar a funcionalidade e a robustez da aplicação. Testes automatizados foram implementados usando Jest.

### 4.2 Casos de Teste

#### Caso 1 - Realização do Login
**Descrição:**  
Testa o comportamento do sistema ao realizar tentativas de login com combinações de credenciais válidas e inválidas.

**Pré-condições:**  
O usuário deve estar na página de login. O sistema de autenticação deve estar funcional.

**Procedimento:**  
Inserir e-mails e senhas válidos e inválidos para verificar os resultados esperados.

---

Esse é apenas um ponto de partida, e você pode expandir cada seção conforme necessário, incluindo detalhes sobre a estrutura de testes, os diagramas específicos, e mais. O objetivo é fornecer um resumo completo e fácil de entender sobre o seu projeto.
