require('dotenv').config();

const nodemailer = require('nodemailer');


let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

$("#submit").bind('click',()=>{
    show_canvas();
    const name = $("input[name='name']").val();
    const email = $("input[name='email']").val();
    const subject = $("input[name='subject']").val();
    const message = $("input[name='message']").val();
    if (name!='' && email!='' && subject!=''&& message!=''){
        sendEmail(name,email,subject,message);
    }else{
        $("#alertbox > a").text("Please provide extra info.");
    }
});

function sendEmail(inquiryName,inquiryEmail,inquirySubject,inquiryMessage){
    let text = `Name: ${inquiryName}
    Email: ${inquiryEmail}
    inquiryMessage`;

    let mailOptions = {
        from: 'patrickxunuo@gmail.com',
        to: 'patrickxunuo@hotmail.com',
        subject: inquirySubject,
        text: text
    };
    transporter.sendMail(mailOptions, function(err,data){
        if(err){
            $("#alertbox > a").text("Error!");
            console.log('Error!');
        }else{
            $("#alertbox > a").text("Your message is sent.");
            console.log('sent!');
        }
    });
}