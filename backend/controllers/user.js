const bcrypt = require('bcrypt')
const connection = require('../manager')

exports.signup = async (req, res, next) => {
    const user = req.body.user
    const password = req.body.password
    const passwordHash = await bcrypt.hash(password, 10)

    const sql = `
        INSERT INTO admin (user, password) 
        VALUES ("`+ user + `",
                "`+ password + `")`

    connection.query(sql, (error, results, fields) => {
        if (error) throw error;
        res.send(JSON.stringify(results));
    });
}