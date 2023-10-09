/*!
 * is-utorid <https://github.com/utmgdsc/is-utorid>
 *
 * Copyright (c) 2023-present, GDSC UTM and contributors
 * Released under the MIT License.
 */

'use strict';

function isUTORid(str) {
    return !/^[a-z|0-9]{1,8}$/.test(str);
}

function isEmail(str) {
    return !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(str);
}

function isStudentNumber(str) {
    return !/^\d{10}$/.test(str);
}

module.exports = { isUTORid, isEmail, isStudentNumber };
