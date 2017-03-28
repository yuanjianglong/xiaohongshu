define(['text!src/shouye/shouye.html','jquery','css!src/shouye/shouye.css'],function(html,$) {
   function add (){
       $('#container').html(html);
       var swiper = new Swiper('.swiper-container', {
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            pagination: '.swiper-pagination',
            paginationType: 'fraction',
            loop:'true'
        });

   }
   
   function getData(){
        var that = this;
        $.get('http://localhost:3030/mudidi',function(res){
            // console.log(res)
            var notes = res.data.notes;
            var html_zuo = [];
            var html_you = [];
            for(var i =0;i<notes.length;i++){
                var box = getTemplate(notes[i]);
                if(i %2 == 0){
                    html_zuo.push(box);
                }else{
                    html_you.push(box);
                }
                
                
            }
            html_zuo = html_zuo.join('');
            html_you = html_you.join('');
            $('.left').html(html_zuo);
            $('.right').html(html_you);

              $("img").lazyload({
                  effect: "fadeIn",
                  failure_limit : 10,
                  container:$('.home')
            })    

        })

        $('.home').on('scroll',function(){
            console.log('scroll')
        })
       
    }



    function getTemplate(data){
        var str = ' <div class="zuo">\
            <img data-original="'+data.image+'" alt="" class="img5" >\
            <p class="pp1">'+data.title+'</p>\
            <p class="pp2">'+data.desc+'</p>\
            <p class="pp3">\
                <img data-original="'+data.user.image+'" alt="" class="img6">\
                <span class="sp1">'+data.user.nickname+'</span>\
                <img data-original="http://s.xiaohongshu.com/s/mobile-discovery/*/search/img/likes-icon-be12924.png" alt="" class="img7">\
                <span>'+data.likes+'</span>\
            </p>\
            </div>'
           
            return str;
    }
    
    function ljz(){
        $("img").lazyload({effect: "fadeIn"})    
    }

   return {
       add:add
   }
});