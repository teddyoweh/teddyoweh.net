const Views = require('../models/Views');

function viewscontroller(req, res) {
    console.log(req.body)
        // Views.findOne({ ip: req.body.userdata['ip'] }).then(user => {

    // })
    const newViews = new Views({
        ip: req.body.userdata['ip'],
        userdata: req.body.userdata,
        pageviewed: req.body.pageviewed,
        browser: req.body.browser,
        operatingSystem: req.body.operatingSystem,



    });
    newViews.save().then(views => res.json(views));

}

module.exports = viewscontroller