$('.mark').mouseover(function(){
    $('.float_layer').show();
    $('.big_pic').show();
})
$('.mark').mouseout(function(){
    $('.float_layer').hide();
    $('.big_pic').hide();
})
$('.mark').mousemove(function(evt){
   var left = evt.pageX - $('.small_pic').offset().left - ($('.float-layer').width() / 2);
   var top = evt.pageY - $('.small_pic').offset().top - ($('.float_layer').height() / 2);
   if(left <= 0){
       left = 0;
   }else if(left >= $('.mark').width() - $('.float_layer').width()){
      left = $('.mark').width() - $('.float_layer').width();
   }
   if(top <= 0){
       top = 0;
   }else if(top >= $('.mark').height() - $('.float_layer').height()){
       top = $('.mark').height() - $('.float_layer').height();
   }
   $('.float_layer').css({
       'left' : left,
       'top' : top
   })
   //放大比例
   var movex = left / ($('.mark').width() - $('.float_layer').width());
   var movey = top / ($('.mark').height() - $('.float_layer').height());
   
   $('.big_pic img').css({
       left: -movex * ($('.big_pic img').width() - $('.big_pic').width()) + 'px',
       top : -movey * ($('.big_pic img').height() - $('.big_pic').height()) + 'px'
   })
})


