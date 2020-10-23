// 顶部导航栏
$('#topR a').each(function(){
    $(this).mouseover(function(){
        $(this).css('color','red');
    })
    $(this).mouseout(function(){
        $(this).css('color','black');
    })
})
//顶部导航栏——二级菜单
$('.topRa').mouseover(function(){
    $('#phone_buy').css('display','block');  
})
$('.topRa').mouseleave(function(){
    $('#phone_buy').css('display','none');
})
// 导航栏
$('.lin').each(function(){
    $(this).mouseover(function(){
        $(this).css('background','#bc0600');
    })
    $(this).mouseout(function(){
        $(this).css('background','none');
    })
})
// 鼠标移入，二级菜单出现
$('#line').mouseover(function(){
    $('#seconded').css('display','block');
})
$('#line').mouseleave(function(){
    $('#seconded').css('display','none');
})




// 侧边栏中间的定位
$('#log_res').mouseover(function(){
    $('#log_res_nav').css('display','block');
})
$('#log_res').mouseout(function(){
    $('#log_res_nav').css('display','none');
})
$('#focus').mouseover(function(){
    $('#focus_info').css('display','block');
})
$('#focus').mouseout(function(){
    $('#focus_info').css('display','none');
})
$('#gust').mouseover(function(){
    $('#gust_info').css('display','block');
})
$('#gust').mouseout(function(){
    $('#gust_info').css('display','none');
})
// 侧边栏底部的定位
$('#active').mouseover(function(){
    $('#active_info').css('display','block');
})
$('#active').mouseout(function(){
    $('#active_info').css('display','none');
})
$('#question').mouseover(function(){
    $('#question_info').css('display','block');
})
$('#question').mouseout(function(){
    $('#question_info').css('display','none');
})
$('#back').mouseover(function(){
    $('#back_info').css('display','block');
})
$('#back').mouseout(function(){
    $('#back_info').css('display','none');
})


