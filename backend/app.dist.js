const express = require('express')
const bodyParser = require('body-parser')

const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: ''
})

const app = express()

//let forms = require("./db")

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    next();
});

app.use(bodyParser.json());

app.post('/api/form', (req, res, next) => {

    const formData = req.body
    connection.query("INSERT INTO form SET ?", formData, (error, results, fields) => {
        if (error) throw error;
        res.send(JSON.stringify(results));
    });
});


app.get('/get-form', (req, res, next) => {
    connection.query('SELECT * FROM form', (error, results, fields) => {
        if (error) throw error;
        res.send(JSON.stringify(results));
    });
});


module.exports = app