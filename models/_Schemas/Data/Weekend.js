// Weekend.js

const mongoose = require('mongoose');
const {Schema} = mongoose;

const schema = new Schema({
    no : Number,                                    // 주말활동 번호
    grade : String,                                 // 학년
    periodNo : Number,                              // 기수
    semester : String,                              // 학기

    semesterCode : String,                          // 학기 코드
    type : {type: String, default: 'all'},                                  // 활동 단위 (all, room, team)
    title : String,                                  // 활동명
    start : String,                                 // 시작일
    end : String,                                   // 종료일
    location  : String,                             // 장소
    post : String,                                  // 내용
    review : String,                                // 후기
    images : [],                                    // 첨부 이미지 경로 배열
    state : Number,                                 // 상태 (open, close)
    userName: String,                               // 작성자 이름
    userId: String,                                 // 작성자 아이디
    lastUpdated : {type: Date, default: Date.now},  // 수정 시간
    createdTime : {type: Date, default: Date.now}   // 생성 시간
}, {collection: 'Weekend'});

module.exports = schema;
