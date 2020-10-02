//비동기 버전

//views 연결
const views = require("../views/index");

//mongodb 연결
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Data', function(err){
  if(err) {
    console.error('momgodb connection error', err);
  }
  console.log('mongodb connected');
});

exports.getInfo = async function(req, res){

    var member = mongoose.Schema({

        memberNo: Number,
        name: String,
        year: Number,
        semester: String,
        room: String,
        team: Number
    
    });

    //정의된 스키마를 객체처럼 사용할 수 있도록 model() 함수로 컴파일
    const info = mongoose.model('info', member);


    //데이터 전체 가져오기
    await info.find(function(error, mem){
        if(error){
          console.log(error);
          return res.status(500).send({error: 'database failure'});
        }else{
          if(mem.length == 0){
            console.log('no data');
            
            res.send('no data');

          }else{
            console.log('---Read all---');
            console.log(mem);

            res.result = mem;

            //res.send(mem); //작동함
            //views.sendJson(res); //작동함
            
          }
          
        }
        
    })
    views.sendJson(res); //작동함
    //return next(req, res);
  
}