var mailer = require("nodemailer");

function sendEmail(email, firstname, lastname) {
    var transporter = mailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'tedddyoweh@gmail.com',

        }
    });
    const Body = `<h1>Hello ${firstname} ${lastname}</h1>`
    var mailOptions = {
        from: '',
        to: email,
        subject: 'Tarleton Voice Out - Verify your email',
        text: Body,
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}
/*
// create reusable transporter object using SMTP transport
var transporter = mailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'youremail@gmail.com',
        pass: 'yourpassword'
    }
});

// setup e-mail data with unicode symbols
var mailOptions = {
    from: 'Fred Foo ✔ <foo@blurdybloop.com>', // sender address
    to: 'bar@blurdybloop.com, baz@blurdybloop.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world ✔', // plaintext body
    HTML: '<b>Hello world ✔</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});*/