var express = require('express');
var fs = require('fs');
var app = express();
app.use(express.static('./'));


//跨域
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
next();
});



app.get('/',function(){
    fs.readFile(__dirname + '/index.html')
})


//首页
app.get('/shouye',function(req,res){
    fs.readFile(__dirname + '/src/shouye/shouye.json',function(err,data){ 
        if(err){
            console.log(err);
        }else{
            var json = JSON.parse(data);
            res.json(json);
        }
    })
})



//护肤
app.get('/hufu',function(req,res){
    fs.readFile(__dirname + '/src/shenghuo/hufu/hufu.json',function(err,data){
        if(err){
            console.log(err);
        }else{
            var json = JSON.parse(data);
            res.json(json);
        }
    })
})
//彩妆
app.get('/caizhuang',function(req,res){
    fs.readFile(__dirname + '/src/shenghuo/caizhuang/caizhuang.json',function(err,data){
        if(err){
            console.log(err);
        }else{
            var json = JSON.parse(data);
            res.json(json);
        }
    })
})

//男人
app.get('/nanren',function(req,res){
    fs.readFile(__dirname + '/src/shenghuo/nanren/nanren.json',function(err,data){
        if(err){
            console.log(err);
        }else{
            var json = JSON.parse(data);
            res.json(json);
        }
    })
})

//目的地
app.get('/mudidi',function(req,res){
    fs.readFile(__dirname + '/src/mudidi/mudidi.json',function(err,data){
        if(err){
            console.log(err);
        }else{
            var json = JSON.parse(data);
            res.json(json);
        }
    })
})
//韩国
app.get('/hanguo',function(req,res){
    fs.readFile(__dirname + '/src/mudidi/hanguo/hanguo.json',function(err,data){
        if(err){
            console.log(err);
        }else{
            var json = JSON.parse(data);
            res.json(json);
        }
    })
})
//品牌
app.get('/pinpai',function(req,res){
    fs.readFile(__dirname + '/src/pinpai/pinpai.json',function(err,data){
        if(err){
            console.log(err);
        }else{
            var json = JSON.parse(data);
            res.json(json);
        }
    })
})




app.listen(3030,function(){
    console.log('去吧')
})