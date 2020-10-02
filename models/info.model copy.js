//동기
//mongodb 연결
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Data', function(err){
  if(err) {
    console.error('momgodb connection error', err);
  }
  console.log('mongodb connected');
});

exports.getInfo = function(req, res, next){

    //  let info = [
    //     {
    //         memberNo: 1,
    //         name: '혜성',
    //         year: 2020,
    //         semester: '가을',
    //         room: '서초1',
    //         team: 4
    //     },
    //     {
    //         memberNo: 2,
    //         name: '지민',
    //         year: 2020,
    //         semester: '가을',
    //         room: '기흥1',
    //         team: 1
    //     }
    // ]

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
    const result = info.find(function(error, mem){
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

            //res.result = mem;

            res.send(mem);
          }
          
        }
        
    })

  
    //return info;
  
}