// 封装动画
function animation(inp, span) {
    // 获得光标
    inp.addEventListener('focus', function () {
        span.style.top = '-11' + 'px';
        span.style.left = '16' + 'px';
        span.style.transform = 'scale(.8,.8)';
        span.style.color = '#1a73e8';
        inp.style.border = 'none';
        span.style.backgroundColor = 'rgb(255, 255, 255)';
        span.style.borderRadius = '5px';
    });
    // 失去光标
    inp.addEventListener('blur', function () {
        if (inp.value == '') {
            span.style.top = '8' + 'px';
            span.style.left = '22' + 'px';
            span.style.transform = 'scale(1,1)';
            span.style.color = '';
            inp.style.border = '1px Solid #838790';
            span.style.backgroundColor = 'rgba(0, 0, 0, 0)';
            span.style.borderRadius = '5px';
        } if (inp.value !== '') {
            span.style.top = '-11' + 'px';
            span.style.left = '16' + 'px';
            span.style.transform = 'scale(.8,.8)';
            span.style.color = '#838790';
            inp.style.border = '1px Solid #838790';
            inp.style.border = '1px Solid #838790';
            span.style.backgroundColor = 'rgb(255, 255, 255)';
            span.style.borderRadius = '5px';
        }
    });
};