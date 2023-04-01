"use strict";
const nodemailer = require("nodemailer");
// email, firstname, lastname, code
function emailbody(firstname, code) {
    const body = `
    

<html>

<head>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">

     
</head>
<div>

    <p style="font-family: poppins;
    width: 100%;
    padding: 10;"> <label style="font-size: 18px;"for="">Hello, ${firstname}</label><br><br>
    e're excited to have you on board as a new user of VoiceOut! In order to get started, we just need to verify your email address. To do so, please click on the following link <a href="${domain}/verify/${code}">Verify Email</a> Once you've verified your email, you'll be
        able to start using VoiceOut to connect with other users and share your thoughts on the issues that matter to you. We hope you enjoy using VoiceOut!<br><br>The VoiceOut Team.
    </p>
 
   
    <a href="${domain}/verify/${code}" style="text-decoration: none;
    color: white;
    font-weight: 500;
    font-family: poppins;" >
    <button style="
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 5px;
    background: #4b2683;
    cursor: pointer;
    transition: 0.3s;
">Verify Email
    </button>
    </a>
    <div>

        <img style="margin-top: 2%;" src="https://teddyoweh.net/sga.png"></div>

</div>

</html>


    `
    return body


}
const domain = "http://localhost:53469"

function MailVerify(who, firstname, code) {

    let transporter = nodemailer.createTransport({
        host: "smtp.titan.email",
        port: 465,
        secure: true,
        auth: {
            user: "teddy@teddyoweh.net",
            pass: "hideidkidk",
        },
    });

    let info = transporter.sendMail({
        from: '"The VoiceOut Team" <teddy@teddyoweh.net>',
        to: who,
        subject: "Tarleton Voice Out - Verify Email",

        html: emailbody(firstname, code),
    });

    console.log("Message sent: %s", info.messageId);
}


module.exports = MailVerify