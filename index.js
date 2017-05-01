'use strict';
require('dotenv').config();
const nodemailer = require('nodemailer');

let env = process.env;

let smtpConfig = {
    host: 'smtp.exmail.qq.com',
    port: 587,
    secure: false, // upgrade later with STARTTLS
    authMethod: 'login',
    auth: {
        user: env['EMAIL_USERNAME'],
        pass: env['EMAIL_PASSWORD']
    }
};

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport(smtpConfig);

// setup email data with unicode symbols
let mailOptions = {
    from: '"wwwaap" <no-reply@everthis.com>', // sender address
    to: 'wwwaap@gmail.com, evthis@gmail.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world ?', // plain text body
    html: '<b>Hello world ?</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
});