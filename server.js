require('dotenv').config();

const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

function sendEmail(){
    let mailOptions = {
        from: 'patrickxunuo@gmail.com',
        to: 'patrickxunuo@hotmail.com',
        subject: 'testing',
        text: 'it works'
    };
    transporter.sendMail(mailOptions, function(err,data){
        if(err){
            console.log('Error!');
        }else{
            console.log('sent!');
        }
    });
}


