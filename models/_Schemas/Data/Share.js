// Share.js

const mongoose = require('mongoose');
const {Schema} = mongoose;

const schema = new Schema({
    semesterCode : String,                          // 학기 코드
    type:String,                                    // 나누기 타입
    post: String,                                   // 수행 연습 타이틀 내용
    start:String,                                   // 시작일
    end:String,                                     // 종료일
    userName: String,                               // 작성자 이름
    userId : String,                                // 작성자 아이디
    state : {type: Number, default: 0},            // 상태 (1=open, 0=close)
    lastUpdated : {type: Date, default: Date.now},  // 수정 시간
    createdTime : {type: Date, default: Date.now}   // 생성 시간
}, {collection: 'Share'});

module.exports = schema;
