//获取非行内样式
function getStyle(obj,attr){
    return obj.currentStyle ? obj.currentStyle(obj,attr) : obj.getCompusted(obj,1)[attr];
}
// 完美运动框架
function sport(attr,json,fn){
    // 停止上一次的计时器
    clearInterval(obj.timer);
    // 开启计时器
    obj.timer = setInterval(()=>{
        // 设置开关
        let falg = true;
        // 循环遍历
        for(let attr in json){
            // 设置当前值
            let cur = attr === 'opacity' ? parseInt(parseFloat(getStyle(obj,attr))* 100) : parseInt(getStyle(obj,attr));
            // 设置速度
            let speed = (json[attr] - cur) / 8;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            // 检查当前值是不是都满足，只要有一个不满足，发了个= false
            if(cur !== json[attr]){
                flag = false;
            }
            // 判断属性是不是透明度
            if(attr === 'opacity'){
                obj.style.opacity = (cur + speed) / 100;
                obj.style.filter = 'alpha(opacity = ' + (cur + speed) +')';
            }else{
                obj.style[attr] = (cur + speed) + 'px';
            }
           
        }
        // 停止运动
        if(flag){
            clearInterval(obj.timer);
            if(typeof  fn ==='function'){
                fn();
            }
        }
    },30)
}