// UserTempUsed.js

const mongoose = require('mongoose');
const {Schema} = mongoose;

const schema = new Schema({
    code: String,                           //
    name: String,                           //
    email: String,
    createdTime : {type: Date, default: Date.now}   // 생성 시간
}, {collection: 'UserTempUsed'});

module.exports = schema;
