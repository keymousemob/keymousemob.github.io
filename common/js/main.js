//立即调用函数表达式
$(function () {
    let callback = () => {
        //设置页面字体大小
        document.documentElement.style.fontSize = window.innerWidth < 1440 ? window.innerWidth / 1440 + 'px' : '1px';
    }
    //监听加载完成
    window.onload = callback
    //监听窗口大小变化
    window.onresize = callback
    //事件禁用
    let cancel = event => event.preventDefault();
    //禁止图片拖拽
    $('img').on('dragstart', cancel);
    //禁止图片右键
    $('img').on('contextmenu', cancel);
})