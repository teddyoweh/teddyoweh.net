// ./validation/register.js -t3:16 -e3:16 -d3:16

const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data) {
    let errors = {};
    data.firstname = !isEmpty(data.firstname) ? data.firstname : '';
    data.lastname = !isEmpty(data.lastname) ? data.lastname : '';



    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';



    if (!Validator.isLength(data.firstname, { min: 2, max: 30 })) {
        errors.firstname = 'Name must be between 2 to 30 chars';
    }
    if (!Validator.isLength(data.lastname, { min: 2, max: 30 })) {
        errors.lastname = 'Last Name must be between 2 to 30 chars';
    }

    if (Validator.isEmpty(data.firstname)) {
        errors.firstname = 'FirstName field is required';
    } //username


    if (Validator.isEmpty(data.lastname)) {
        errors.lastname = 'LastName field is required';
    }

    if (!Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid';
    }

    if (Validator.isEmpty(data.email)) {
        errors.email = 'Email is required';
    }
    // make sure email endswith @go.tarleton.edu or @tarleton.edu

    if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.password = 'Password must have 6 chars';
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = 'Password is required';
    }


    return {
        errors,
        isValid: isEmpty(errors)
    }
}