// Data.js
const mongoose = require('mongoose');
const conn = mongoose.createConnection('mongodb://localhost:27017' + '/Data');
module.exports = conn;