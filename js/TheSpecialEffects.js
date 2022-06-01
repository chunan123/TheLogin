const width = document.getElementById('myCanvas').width = screen.availWidth;
const height = document.getElementById('myCanvas').height = screen.availHeight
const ctx = document.getElementById('myCanvas').getContext("2d");  // 创建canvas画布
const arr = Array(Math.ceil(width / 10)).fill(0);
const str = '01'.split('');
function rain() {
    ctx.fillStyle = "rgba(0,0,0,.1)"; // 设置填充颜色为 10% 透明度的黑色
    ctx.fillRect(0, 0, width, height); // 进行颜色填充，坐标位置为0，0
    ctx.fillStyle = "#0f0"; // 再来设置下一步的填充颜色
    arr.forEach(function (value, index) {
        ctx.fillText(str[Math.floor(Math.random() * str.length)], index * 10, value + 10);
        arr[index] = value >= height || value > 8888 * Math.random() ? 0 : value + 10;
    });
};
setInterval(rain, 56);