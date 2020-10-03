//비동기 버전

//views 연결
const views = require("../views/index");

//set mongodb DAO
const dbAccount = require('./_DAO/Mongo/Account');

exports.getInfo = async function(req, res){

    //정의된 스키마를 객체처럼 사용할 수 있도록 model() 함수로 컴파일
    const model = dbAccount.model('info', require('./_Schemas/info'));


    //데이터 전체 가져오기
    await model.find(function(error, mem){
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