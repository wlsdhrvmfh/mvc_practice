// SharePractice.js

const mongoose = require('mongoose');
const {Schema} = mongoose;

const schema = new Schema({
    shareId : String,                               // 나누기 아이디
    semesterCode : String,                          // 학기 코드
    roomCode: String,                               // 교실 코드
    team: Number,                                   // 조번호
    studentUid : String,                            // 학생 유저 아이디
    name: String,                                   // 작성자 이름
    post: String,                                   // 내용
    state : {type: Number, default: 1},            // 상태 (1=open, 0=close)
    lastUpdated : {type: Date, default: Date.now},  // 수정 시간
    createdTime : {type: Date, default: Date.now}   // 생성 시간
}, {collection: 'SharePractice'});

module.exports = schema;
