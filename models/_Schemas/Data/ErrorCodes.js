// ErrorCodes.js

const mongoose = require('mongoose');
const {Schema} = mongoose;

const schema = new Schema({                         //
    Name : String,                                  //
    Code : Number,                           //
    Service : String,                               //
    Category : String,                               //
    Description : String,
    LastUpdated : {type: Date, default: Date.now},  // 수정 시간
    CreatedTime : {type: Date, default: Date.now}   // 생성 시간
}, {collection: 'ErrorCodes'});

module.exports = schema;