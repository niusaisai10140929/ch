// 个人资料
$('.userL_vip').mouseover(function(){
    $(this).find('.img2').css('display','block');
})
$('.userL_vip').mouseout(function(){
    $(this).find('.img2').css('display','none');
})
// 切换按钮
$('.all').click(function(){
    $(this).css({'background':'#f1794a','color':'white'});
    $('.cheap_buy').css({'background':'#f2f2f2','color':'black'});
})
$('.cheap_buy').click(function(){
    $(this).css({'background':'#f1794a','color':'white'});
    $('.all').css({'background':'#f2f2f2','color':'black'});
})
// 轮播图
// 左按钮
//  $('.truns img').eq(0);
// $('.left_botton').click(function(){
//    $()

// })
// $('.right_botton').click(function(){
//     $(this).index ++;
// })
$('.truns .num_botton a').mouseenter(function(){
    var index = $(this).index();
    $('.truns img').eq(index).show().siblings().hide();
    $(this).css('background','red').siblings().css('background','grey');
})
// $('.left_botton').click(function(){
//     var index = $('.truns img').index();
//     $(this).show().siblings().hide();
//     $('.truns .num_botton a').css('background','red').siblings().css('background','grey');
   
// })
// $('.right_botton').click(function(){
//         var index = $('.truns .num_botton a').index();
//         $('.truns img').eq(index++).show().siblings().hide();
//         $('.truns .num_botton a').css('background','red').siblings().css('background','grey');
// })

