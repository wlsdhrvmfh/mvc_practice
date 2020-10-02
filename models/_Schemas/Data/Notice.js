// Notice.js

const mongoose = require('mongoose');
const {Schema} = mongoose;

const schema = new Schema({
    type: String,                                   // 공지 타입 (''=일반)
    userId: String,                                 // 유저 아이디
    name: String,                                   // 작성자 이름
    title: String,                                  // 제목
    post: String,                                   // 내용
    state : Number,                                 // 상태 (open, close)
    lastUpdated : {type: Date, default: Date.now},  // 수정 시간
    createdTime : {type: Date, default: Date.now}   // 생성 시간
}, {collection: 'Notice'});

module.exports = schema;