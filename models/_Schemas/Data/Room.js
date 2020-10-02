// Room.js

const mongoose = require('mongoose');
const {Schema} = mongoose;

const schema = new Schema({
    grade : String,                                 // 학년
    periodNo : Number,                              // 기수
    year : Number,                                  // 입학년도
    semester : String,                              // 학기

    semesterCode : String,                          // 학기 코드
    code: String,                                   // 교실 코드
    local : String,                                 // 지역
    name : String,                                  // 교실명
    team  : Number,                                 // 팀수
    manager : String,                               // 담당 꼭지
    mentor : String,                                // 담당 법사
    meet : String,                                  // 화상 나누기 주소
    donation : {                                    // 보시 계좌 정보
        bank: String,                               // 은행명
        account: String,                            // 계좌 번호
        holder: String                              // 예금주 이름
    },
    state : Number,                                 // 상태 (open, close)
    userName: String,                               // 작성자 이름
    userId: String,                                 // 작성자 아이디
    lastUpdated : {type: Date, default: Date.now},  // 수정 시간
    createdTime : {type: Date, default: Date.now}   // 생성 시간
}, {collection: 'Room'});


module.exports = schema;
