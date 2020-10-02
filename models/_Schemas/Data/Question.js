// Question.js

const mongoose = require('mongoose');
const {Schema} = mongoose;

const schema = new Schema({
    grade : String,                                 // 학년
    periodNo : Number,                              // 기수
    semester : String,                              // 학기
    semesterCode : String,                          // 학기 코드
    mentor: String,                                  // 담당 법사
    mentoUid: String,                                // 담당 법사 유저 아이디
    studentUid : String,                             // 학생 유저 아이디
    type: String,                                   // 질문 유형(Q:질문, A:답변)
    name: String,                                   // 작성자 이름
    post: String,                                   // 내용
    like: String,                                   // 좋아요 타입
    state : Number,                                 // 상태 (open, close)
    lastUpdated : {type: Date, default: Date.now},  // 수정 시간
    createdTime : {type: Date, default: Date.now}   // 생성 시간
}, {collection: 'Question'});

module.exports = schema;
