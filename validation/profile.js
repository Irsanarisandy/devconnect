const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = data => {
    let errors = {};

    data.handle = !isEmpty(data.handle) ? data.handle : '';
    data.status = !isEmpty(data.status) ? data.status : '';
    data.skills = !isEmpty(data.skills) ? data.skills : '';

    if (!Validator.isLength(data.handle, { min: 2, max: 40 })) {
        errors.handle = 'Handle must be between 2 and 40 characters!';
    }

    if (Validator.isEmpty(data.handle)) {
        errors.handle = 'Profile handle is required!';
    }

    if (Validator.isEmpty(data.status)) {
        errors.status = 'Status field is required!';
    }

    if (Validator.isEmpty(data.skills)) {
        errors.skills = 'Skills field is required!';
    }

    if (!isEmpty(data.website)) {
        if (!Validator.isURL(data.website)) {
            errors.website = 'Website URL is invalid!';
        }
    }

    if (!isEmpty(data.linkedIn)) {
        if (!Validator.isURL(data.linkedIn)) {
            errors.linkedIn = 'LinkedIn URL is invalid!';
        }
    }

    if (!isEmpty(data.facebook)) {
        if (!Validator.isURL(data.facebook)) {
            errors.facebook = 'Facebook URL is invalid!';
        }
    }

    if (!isEmpty(data.twitter)) {
        if (!Validator.isURL(data.twitter)) {
            errors.twitter = 'Twitter URL is invalid!';
        }
    }

    if (!isEmpty(data.youtube)) {
        if (!Validator.isURL(data.youtube)) {
            errors.youtube = 'Youtube URL is invalid!';
        }
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};
