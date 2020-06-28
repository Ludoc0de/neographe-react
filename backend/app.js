const express = require('express')
const bodyParser = require('body-parser')

const formRoutes = require('./routes/form')
const userRoutes = require('./routes/user')

const app = express()

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://test.neographe.org/api/form');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());

app.use('/api/form', formRoutes)
//update url before put in host
app.use('/api/auth', userRoutes)

module.exports = app