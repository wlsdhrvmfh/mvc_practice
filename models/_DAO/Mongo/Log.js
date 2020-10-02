// Log.js
const mongoose = require('mongoose');
const conn = mongoose.createConnection(process.env.LOG_DB_CONNECTION_URI_MONGO + '/Log');
module.exports = conn;
