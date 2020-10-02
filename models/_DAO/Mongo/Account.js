// Account.js
const mongoose = require('mongoose');
const conn = mongoose.createConnection('mongodb://localhost:27017' + '/Account');
module.exports = conn;