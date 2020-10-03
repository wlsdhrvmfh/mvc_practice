//모듈
require('dotenv').config(); //환경설정
const express = require('express');
const routes = require('./routes');
const app = express();

//미들웨어
app.use(express.json());

// view 엔진 설정
// app.engine('.html', require('ejs').__express);
// app.set('views', __dirname + '/public');
// app.set('view engine', 'html');

//뷰엔진
app.set('view engine', 'ejs');
app.set('views', './views');

//라우트
try{
    app.use(routes);
}
catch(e){
    console.log(e);
}
finally{
    console.log('End app.use');
}

//서버
app.listen(process.env.SERVER_PORT, (req, res) => {
    console.log("port " + process.env.SERVER_PORT + " 서버 실행중...");
})