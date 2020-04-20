const express = require('express')
const bodyParser = require('body-parser');

const app = express()

let forms = require("./db")

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    next();
});

app.use(bodyParser.json());

app.post('/api/form', (req, res, next)=> {
    console.log(req.body);
    res.status(201).json({
        data : forms
    });
})

// app.use('/api/form', (req, res, next) => {
//         console.log("test")
//         try {
//             res.status(201).json({
//                 data: forms
//             });
//         } catch (err) {
//             res.status(400).json({
//                 message: "Some error occured",
//                 err
//             });
//         }
// });

module.exports = app