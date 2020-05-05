const bcrypt = require('bcrypt')
const connection = require('../manager')

exports.signup = async (req, res, next) => {
    console.log('dans le signup')
}
// exports.signup = async (req, res, next) => {
//     const password = bcrypt.hash(req.body.password, 10)

//     const sql = `
//         INSERT INTO admin (user, password) 
//         VALUES ("`+ req.body.user + `",
//                 "`+ password + `")`

//     connection.query(sql, (error, results, fields) => {
//         if (error) throw error;
//         res.send(JSON.stringify(results));
//     });

// }


exports.login = (req, res, next) => {
    console.log('dans le login')
    let user = req.body.user
    console.log(user)
    let sql = `SELECT * FROM admin WHERE user = "` + user + `"`
    console.log(sql)
    connection.query(sql, (error, results) => {
        if (results.length > 0 ) {
            console.log('bon')
        } else {
            console.log('faux')
            throw error
            res.send(JSON.stringify(results));
        }
    });
}