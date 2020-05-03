const bcrypt = require('bcrypt')
const connection = require('../manager')


exports.signup = async (req, res, next) => {
    const password = req.body.password
    console.log(test)
    // configurer signup pour creer utilisateur !
}
// exports.signup = async (req, res, next) => {
//     const sql = `
//         INSERT INTO admin (user, password) 
//         VALUES ("`+ req.body.firstName + `",
//                 "`+ req.body.lastName + `",
//                 "`+ req.body.mail + `",
//                 "`+ req.body.subject + `",
//                 "`+ req.body.textArea + `")`

//     connection.query(sql, (error, results, fields) => {
//         if (error) throw error;
//         res.send(JSON.stringify(results));
//     });
// }

exports.login = (req, res, next) => {

}