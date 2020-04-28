const connection = require('../manager')
const transporter = require('../managerMail')
const nodemailer = require('nodemailer')

exports.createForm = (req, res, next) => {
    // send form to mail
    const output = `
        <h3>Contact Details</h3> 
        <p>Firstname: `+ req.body.firstName + `</p>
        <p>Lastname: `+ req.body.lastName +`</p>
        <ul>
            <li>Mail: `+req.body.mail+`</li>
            <li>Subject: `+req.body.subject+`</li>
        </ul>
        <p>"`+req.body.textArea +`"</p>
    `;

    let info = transporter.sendMail({
        from: '"Form from Neographe" <contact@neographe.org>', // sender address
        to: "contact@neographe.org", // list of receivers
        subject: "New Form", // Subject line
        text: "Hello world?", // plain text body
        html: output // html body
    });
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    
    // send to db
    const sql = `
        INSERT INTO form (firstname, lastname, mail, subject, textarea) 
        VALUES ("`+req.body.firstName+`",
                "`+req.body.lastName+`",
                "`+req.body.mail+`",
                "`+req.body.subject+`",
                "`+req.body.textArea+`")`

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