// UserLog.js

const mongoose = require('mongoose');
const {Schema} = mongoose;

const schema = new Schema({                         //
    type: String,
    userId: String,
    guid : String,                             //
    email : String,                             //
    name : String,                             //
    google: {},
    LogTime : {type: Date, default: Date.now}       // 로그 시간
}, {collection: 'UserLog'});                     // 서비스 로그 정보

module.exports = schema;