define(['router','jquery','lazyload'],function(Router,$){
    var router = new Router()
    
    .route("#/shouye",function(req,next){

        require(['src/shouye/shouye.js'],function(shouye){
            shouye.add();
        })
    })
    .route("#/shenghuo",function(req,next){
        require(['src/shenghuo/shenghuo.js'],function(shenghuo){
            shenghuo.sh();
            shenghuo.getData();
            shenghuo.ljz();
            shenghuo.ss();
        })
    })
    .route("#/caizhuang",function(req,next){
        require(['src/shenghuo/caizhuang/caizhuang.js'],function(caizhuang){
            caizhuang.getData();
            caizhuang.ljz();
        })
    })
    .route("#/nanren",function(req,next){
        require(['src/shenghuo/nanren/nanren.js'],function(nanren){
            nanren.getData();
            nanren.ljz();
        })
    })
    .route("#/mudidi",function(req,next){
        require(['src/mudidi/mudidi.js'],function(mudidi){
            mudidi.sh();
            mudidi.getData();
            mudidi.ljz();
        })
    })
    .route("#/hanguo",function(req,next){
        require(['src/mudidi/hanguo/hanguo.js'],function(hanguo){
            hanguo.getData();
            hanguo.ljz();
        })
    })
    .route("#/pinpai",function(req,next){
        require(['src/pinpai/pinpai.js'],function(pinpai){
            pinpai.sh();
            pinpai.getData();
            pinpai.ljz();
        })
    })
})