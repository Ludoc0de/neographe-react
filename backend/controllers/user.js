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
