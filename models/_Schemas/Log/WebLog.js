// WebLog.js

const mongoose = require('mongoose');
const {Schema} = mongoose;

const schema = new Schema({                         //
    service : String,                                //
    path : String,                                  //
    method : String,                                //
    type : String,                                  //
    req : Object,                                       //
    res : Object,                                       //
    state : String,                                 //
    message : String,                               //
    userName : String,                                  //
    userId : String,                                  //
    ip : String,                                  //
    userAgent: String,
    CreatedTime : {type: Date, default: Date.now}   // 생성 시간
}, {collection: 'WebLog'});                            // Log 정보

module.exports = schema;
