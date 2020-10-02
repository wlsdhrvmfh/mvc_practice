// Student.js

const mongoose = require('mongoose');
const {Schema} = mongoose;

const schema = new Schema({                         //
    semester : String,                              // 학기
    periodNo : Number,                                  // 교실
    year  : Number,                                 // 조
    grade : String,
    local: String,
    room : String,
    openTime : String,
    team : Number,
    role : [],
    name  : String,   // 역할
    memberNo : Number,                           //
    state : Number,                                 //
    email : String,                                //
    semesterCode : String,                                //
    roomCode : String,                                //
    description : String,
    lastUpdated : {type: Date, default: Date.now},  // 수정 시간
    createdTime : {type: Date, default: Date.now}   // 생성 시간
}, {collection: 'Student'});                           // User

module.exports = schema;



