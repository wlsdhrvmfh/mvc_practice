// User.js

const mongoose = require('mongoose');
const {Schema} = mongoose;

const schema = new Schema({                         //
    guid : String,                                  // guid
    email : String,                                 // 이메일
    name : String,                                  // 이름
    memberNo : Number,                              // 회원번호
    semesterCode: String,                           // 학기 코드
    roomCode: String,                               // 교실 코드
    grade : String,                                 // 학년
    periodNo : Number,                              // 기수
    year : Number,                                  // 입학년도
    semester : String,                              // 학기
    room : String,                                  // 교실
    team  : Number,                                 // 조
    local: String,
    country : String,
    area : String,
    role : [],                                      // 역할
    description : String,                           //
    lockReason : String,                            //
    state : Number,                                 //
    google : {},
    lastUpdated : {type: Date, default: Date.now},  // 수정 시간
    createdTime : {type: Date, default: Date.now}   // 생성 시간
}, {collection: 'User'});                           // User

module.exports = schema;


