require.config({      //require请求的路径
    baseUrl:'./',    //根路径

    paths:{           //文件的路径
        router:'lib/router.min',
        jquery:'lib/jquery-1.12.4.min',
        myroute:'src/myroute',
        text:'lib/text',
        css:'lib/css.min',
        lazyload:'lib/jquery-lazyload'
    }
})

require(['myroute'],function(){
    location.hash = '#/shouye';
})