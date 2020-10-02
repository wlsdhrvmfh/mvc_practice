// Apply.js

const mongoose = require('mongoose');
const {Schema} = mongoose;

const schema = new Schema({
    weekendId: String,                              // 주말활동 아이디
    room : String,                                  // 교실명
    roomCode : String,                              // 교실 코드
    memberNo : Number,                              // 회원번호
    userId : String,                                // 유저 아이디
    name : String,                                  // 이름
    createdTime : {type: Date, default: Date.now}   // 생성 시간
}, {collection: 'Apply'});

module.exports = schema;