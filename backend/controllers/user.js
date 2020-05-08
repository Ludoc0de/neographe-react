const bcrypt = require('bcrypt')
const connection = require('../manager')

// exports.signup = async (req, res, next) => {
//     const user = req.body.user
//     const password = req.body.password
//     const passwordHash = await bcrypt.hash(password, 10)

//     const sql = `INSERT INTO admin (user, password) VALUES (?, ?)`

//     connection.query(sql, [user, passwordHash], (error, results, fields) => {
//         if (error) throw error;
//         res.status(205).send('signup successful')
//     });
// }

exports.login = async (req, res, next) => {
    const user = req.body.user
    const password = req.body.password
    const sql = `SELECT * FROM admin WHERE user = ?`

    connection.query(sql, [user], async (error, results) => {
        if (error) {
            console.error(error.message);
        } else if (results.length > 0) {
            const valid = await bcrypt.compare(password, results[0].password)
            if (valid) {
                res.status(205).send('Login sucessfull')
            } else {
                res.status(410).send('password does not exist')
            }
        } else {
            res.status(510).send("user/password does not exist")
        }
    });
}