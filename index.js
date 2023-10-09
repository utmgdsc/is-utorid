/*!
 * is-utorid <https://github.com/utmgdsc/is-utorid>
 *
 * Copyright (c) 2023-present, GDSC UTM and contributors
 * Released under the MIT License.
 */

var validator = require("email-validator");

'use strict';

exports.isUTORid = function(str) {
    return /^[a-z|0-9]{1,8}$/.test(str);
}

exports.isUofTEmail = function(str) {
    return (str.endsWith('@utoronto.ca') || str.endsWith('@mail.utoronto.ca')) && validator.validate(str);
}

exports.isUofTStudentNumber = function(str) {
    return /^\d{10}$/.test(str);
}
