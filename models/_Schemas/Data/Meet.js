// Meet.js

const mongoose = require('mongoose');
const {Schema} = mongoose;

const schema = new Schema({
    code : String,                                 //
    semesterCode : String,                              //
    roomCode : String,                                  //
    team : Number,                              //
    url : String,                          //
    state : {type: Number, default: 1},                                 // 상태 (open, close)
    userName: String,                               // 작성자 이름
    userId: String,                                 // 작성자 아이디
    lastUpdated : {type: Date, default: Date.now},  // 수정 시간
    createdTime : {type: Date, default: Date.now}   // 생성 시간
}, {collection: 'Meet'});

module.exports = schema;
