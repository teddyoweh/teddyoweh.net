const Contact = require('../models/Contacts');

function contactcontroller(req, res) {
    console.log(req.body)
        // Views.findOne({ ip: req.body.userdata['ip'] }).then(user => {

    // })
    const newContact = new Contact({
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message,
        ip: req.body.userdata['ip'],
        userdata: req.body.userdata,
        pageviewed: req.body.pageviewed,
        browser: req.body.browser,
        operatingSystem: req.body.operatingSystem,




    });
    newContact.save()
        .then(contacts =>
            res.json({ state: true, message: "Message sent successfully" })

        );




}

module.exports = contactcontroller