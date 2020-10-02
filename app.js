//모듈
const express = require('express');
const routes = require('./routes');
const PORT = process.env.PORT || 8000;
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
app.listen(PORT, () => {
    console.log("port " + PORT + " 서버 실행중...");
})