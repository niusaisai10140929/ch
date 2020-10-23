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
        location.href = '../../dist/pages/detail.min.html';
    })
 })
 $('.second').each(function(){
    $(this).click(function(){
        location.href = '../../dist/pages/detail.min.html';
    })
 })
 $('.imgs').each(function(){
    $(this).click(function(){
        location.href = '../../dist/pages/detail.min.html';
    })
 })
 $('.first').each(function(){
    $(this).click(function(){
        location.href = '../../dist/pages/detail.min.html';
    })
 })



    $('.icon_show').mouseenter(function(){
        $(this).find('.icon_imgs').css('display','none');
        $(this).find('.icon_redimg').css('display','block');
        $(this).find('p').css('color','red');
    })
    $('.icon_show').mouseleave(function(){
        $(this).find('.icon_imgs').css('display','block');
        $(this).find('.icon_redimg').css('display','none');
        $(this).find('p').css('color','black');
    })
