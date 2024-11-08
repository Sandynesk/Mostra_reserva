const mysql = require('mysql2');
const router = express.Router();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'cimatec',
    database: 'Post'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Conectado ao MySQL server');
});

module.exports = db;