// ./routes/user.js -t3:16 -e3:16 -d3:16
const CryptoJS = require("crypto-js");

const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const validateRegisterInput = require('../validation/register');
const validateLoginInput = require('../validation/login');
const MailVerify = require("../verifyemail")
var mailer = require("nodemailer");

const contactcontoller = require('../controllers/contact.controller');

router.post('/addcontact', (req, res) => { contactcontoller(req, res) })


// router.get('/me', passport.authenticate('jwt', { session: false }), (req, res) => {
//     return res.json({
//         id: req.user.id,
//         firstname: req.user.firstname,
//         lastname: req.user.lastname,
//         email: req.user.email,
//         avatar: req.user.avatar,
//         role: req.user.role,
//         isverified: req.user.isverified,

//     });
// });

module.exports = router;