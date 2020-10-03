// Account.js
const mongoose = require('mongoose');
const conn = mongoose.createConnection(process.env.DB_CONNECTION_URI_MONGO + '/Data');
module.exports = conn;