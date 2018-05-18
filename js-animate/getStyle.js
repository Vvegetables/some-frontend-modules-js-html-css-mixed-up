//currentStyle 针对IE浏览器
//getComputedStyle 针对firefox浏览器

// 大大的问题。getComputedStyle()和currentStyle得到的都是计算后的最终样式。
// 放在这里作为运动过程中获取变化的属性值是不恰当的。不知道大家深入考虑过没有。
// 或者说实际敲过没有。放在浏览器上运行一下就知道不可行了。
// 因为封装的运动函数获取的属性不确定，所以不能使用快捷位置获取初始样式，
// 那就需要手动输入，而不是用getComputedStyle()和currentStyle去获取，
// 可以把这个初始值作为参数传进去。
function getStyle(obj,attr){
  if(obj.currentStyle){
    return obj.currentStyle['attr']; //也可以 obj.currentStyle.attr
  }else{
    return getComputedStyle(obj,false)[attr];
  }
}
