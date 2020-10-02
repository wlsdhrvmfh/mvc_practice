// UserTemp.js

const mongoose = require('mongoose');
const {Schema} = mongoose;

const schema = new Schema({
    entranceCode: String,                           // 입학 코드
    semesterCode: String,                           // 학기 코드
    roomCode: String,                               // 교실 코드
    grade : String,                                 // 학년
    periodNo : Number,                              // 기수
    year : Number,                                  // 입학년도
    semester : String,                              // 학기
    room : String,                                  // 교실
    team  : Number,                                 // 조
    name : String,                                  // 이름
    memberNo: Number,                               //  정토회 회원번호
    role : String,                                  // 역할
}, {collection: 'UserTemp'});

module.exports = schema;