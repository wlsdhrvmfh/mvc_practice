// Semester.js

const mongoose = require('mongoose');
const {Schema} = mongoose;

const schema = new Schema({
    code: String,                                   // 학기 코드
    grade : String,                                 // 학년
    periodNo : Number,                              // 기수
    year : Number,                                  // 입학년도
    semester : String,                              // 학기
    rooms : Number,                                 // 교실수
    teams  : Number,                                // 팀수
    students : Number,                              // 학생수
    talk : {                                        // 즉문즉설
        title: String,                              // 강연 주제
        url: String,                                // 생방송 주소
        date: String,                               // 강연일
        state: Number                               // 상태 (open=1,close=0)
    },
    donation : {                                    // 보시 계좌 정보
        bank: String,                               // 은행명
        account: String,                            // 계좌 번호
        holder: String                              // 예금주 이름
    },
    description : String,                           // 설명
    state : Number,                                 // 상태 (open=1,close=0)
    userName: String,                               // 작성자 이름
    userId: String,                                 // 작성자 아이디
    lastUpdated : {type: Date, default: Date.now},  // 수정 시간
    createdTime : {type: Date, default: Date.now}   // 생성 시간
}, {collection: 'Semester'});

module.exports = schema;

