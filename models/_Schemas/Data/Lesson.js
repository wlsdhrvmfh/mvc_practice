// Lesson.js

const mongoose = require('mongoose');
const {Schema} = mongoose;

const schema = new Schema({
    grade : String,                                 // 학년
    periodNo : Number,                              // 기수
    year: Number,                                   // 입학년도
    semester : String,                              // 학기

    semesterCode : String,                          // 학기 코드
    lessonNo : Number,                              // 수업 번호
    name : String,                                  // 수업명
    start : String,                                 // 시작일
    end : String,                                   // 종료일
    lecture:[
        {
            _id:false,
            name: String,                           // 강의명
            url: String                             // 강의 주소
        }
    ],
    teacher: String,                                // 강사
    state : Number,                                 // 상태 (open, close)
    userName: String,                               // 작성자 이름
    userId: String,                                 // 작성자 아이디
    lastUpdated : {type: Date, default: Date.now},  // 수정 시간
    createdTime : {type: Date, default: Date.now}   // 생성 시간
}, {collection: 'Lesson'});

module.exports = schema;
