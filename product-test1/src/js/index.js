// 移入ul，边框变成红色
$('.three').each(function(){
    $(this).mouseover(function(){
        // $(this).css('border','1px solid red');
        $(this).css({'border':'1px solid red'});
    })
    $(this).mouseout(function(){
        $(this).css({'border':'1px solid white'});
    })

})
 // 点击ul,跳转到详情页  
 $('.three').each(function(){
    $(this).click(function(){
        
        location.href = 'pages/detail.html';
    })
 })

//  $('.t_prev').click(function(){
//      let index = $('.first li').index();
//      $('.truns img').eq(index).prev().hide().css('left','-290px');
//      $('.truns img').eq(index).next().show().css('left','-290px');
//  })
 $('.second').each(function(){
    $(this).click(function(){
        location.href = 'pages/detail.html';
    })
 })
 $('.imgs').each(function(){
    $(this).click(function(){
        location.href = 'pages/detail.html';
    })
 })
 $('.first').each(function(){
    $(this).click(function(){
        location.href = 'pages/detail.html';
    })
 })

//  倒计时
window.onload = function(){
    setInterval(function(){
        var laterdate = new Date('10,22,2020 22:00:00');
        var now = new Date();
        var seconds = Math.floor((laterdate - now) / 1000);
        var day = Math.floor(seconds / 60 / 60 / 24)
        var hours = Math.floor((seconds - day * 24 * 60 * 60) / 60 / 60)
        var minutes = Math.floor((seconds - day * 24 * 60 * 60 - hours * 60 * 60) / 60);
        var sec = seconds % 60;
        if (minutes <= 9) minutes = '0' + minutes;
        if (sec <= 9) sec = '0' + sec;
        if(hours <= 9) hours = '0' + hours;
        $('.hours').html(hours)
        $('.minutes').html(minutes)
        $('.sec').html(sec)
    },1000)
}


