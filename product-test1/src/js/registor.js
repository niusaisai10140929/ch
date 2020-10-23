let arr=[false,false,false,false,false];
// 前端验证
// 用户名
$('#number').blur(function(){
   let re = /^1(2|3|4|5|7|8|9)\d{9}$/;
   if(re.test($this.val())){
       arr[0] = true;
       $('span').appendChild('符合规则');
   }else{
    arr[0] = false;
    span.appendChild('不符合规则，请重新输入');
   }
})
// 密码
$('#upwd').blur(function(){
    let re =/^\w{6,12}$/;
    if(re.test($this.val())){
        arr[1] = true;
        $('span').appendChild('符合规则');  
    }else{
        arr[1] = false;
        $('span').appendChild('不符合规则，请重新输入');
    }
})
// 确认密码
$('#sure').blur(function(){
    if($('#upwd').val() === $('#sure').val()){
        arr[2] = true;
        $('span').appendChild('符合规则'); 
    }else{
        arr[2] = false;
        $('span').appendChild('不符合规则，请重新输入')
    }
})
// 提交事件
$('#sub').click(function(){
    if(arr.indexOf(false) === -1){
        //后端验证
        let uname = $('#uname').val();
        let upwd = $('#upwd').val();
        //获取cookie
        let cookie_str = $.cookie('users') ? $.cookie('users') : '';
        //转为对象
        let cookie_obj = convertStrToObj(cookie_str);
        //判断对象中是否存在当前的用户
        if(uname in cookie_obj){
            alert('用户名已存在！');
            return;
        }else{
            cookie_obj[uname] = upwd;
        }
        //加入cookie
        $.cookie('users',JSON.stringify(cookie_obj),{expires : 2,path : '/'});
    }else{
        alert('信息不完整！');
    }
})
$('#go').on('click',()=>{
    location.href = 'login.html';
})