const connection = require('../manager')

exports.createForm = (req, res, next) => {

    const sql = "INSERT INTO form (firstname, lastname, mail, subject, textarea) VALUES ('" + req.body.firstName + "','" + req.body.lastName + "','" + req.body.mail + "','" + req.body.subject + "','" + req.body.textArea + "')"

    connection.query(sql, (error, results, fields) => {
        if (error) throw error;
        res.send(JSON.stringify(results));
    });
}

exports.getAllForm = (req, res, next) => {
    connection.query('SELECT * FROM form', (error, results, fields) => {
        if (error) throw error;
        res.send(JSON.stringify(results));
    });
}