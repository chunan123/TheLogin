//  登录
{
    document.querySelector('#theLogin').onsubmit = function () { return false };
    document.querySelector('#login').addEventListener('click', async function () {
        var uname = document.querySelector('#username').value;
        var umima = document.querySelector('#password').value;
        if (uname !== '' && umima !== '') {
            const { data: res } = await axios.get('./theLogin.php', {
                params: {
                    username: uname,
                    password: umima
                }
            })
            // alert(res);
            let warning = document.querySelector('.warning');
            if (res == true) {
                warning.innerHTML = '';
                alert('登录成功');
                // window.location.href = "https://space.bilibili.com/385535465/favlist?fid=1235516565&ftype=create"
            } else {
                warning.innerHTML = '×账号或密码错误';
                warning.style.animation = 'move .7s';
                setTimeout(function () { warning.innerHTML = ''; warning.style.animation = ''; }, 3000);
            }
        } else {
            let btn = document.querySelector('#login');
            btn.disabled = false;
            // alert('请输入账号和密码');
            // btn.style.backgroundColor = '#424242';
        }

    });
}
// 注册 -------------------------------------- //
{
    document.querySelector('#Registered').onsubmit = function () { return false };
    document.querySelector('#registered').addEventListener('click', async function () {
        let uname = document.querySelector('#uname').value;
        let umima = document.querySelector('#upaw').value;
        // 确定密码
        var upaw = document.querySelector('#upaws').value;
        // 判断密码和确定密码是否一致
        if (umima == upaw) {
            if (uname !== '' && umima !== '' && upaw !== '') {
                const { data: res } = await axios.get('./Registered.php', {
                    params: {
                        uname: uname,
                        upaw: umima
                    }
                })
                // console.log(res);
                let warning = document.querySelector('.warnings');
                if (res == true) {
                    // console.log(res);
                    // warning.innerHTML = '';
                    // warning.style.color = "#129646";
                    document.querySelector('.warnings').innerHTML = '账号已存在';
                    warning.style.animation = 'move .7s';
                    setTimeout(function () { warning.innerHTML = ''; warning.style.animation = ''; }, 3000);
                } else {
                    alert('注册成功!');
                    document.querySelector('.warnings').innerHTML = '';
                }
            }
        } else {
            let warning = document.querySelector('.warnings');
            warning.innerHTML = '两次密码输入不一致';
            warning.style.animation = 'move .7s';
            setTimeout(function () { warning.innerHTML = ''; warning.style.animation = ''; }, 3000);
        }
    });
}
// 导航栏切换
{
    var theLogin = document.querySelector('#theLogin');
    var Registered = document.querySelector('#Registered');
    var butTheLogin = document.querySelector('#butTheLogin');
    var butRegistered = document.querySelector('#butRegistered')
    butTheLogin.addEventListener('click', function () {
        Registered.style.display = 'none';
        theLogin.style.display = 'block';
        butRegistered.style.backgroundColor = 'rgba(255, 255, 255, 0.142)';
        butTheLogin.style.backgroundColor = 'rgba(255, 255, 255, 0.881)';
    })
    butRegistered.addEventListener('click', function () {
        Registered.style.display = 'block';
        theLogin.style.display = 'none';
        butRegistered.style.backgroundColor = 'rgba(255, 255, 255, 0.881)';
        butTheLogin.style.backgroundColor = 'rgba(255, 255, 255, 0.142)';
    });
}
{
    // 动画调用
    var input = document.querySelector('.animation');
    var span = document.querySelector('.animation-span');
    animation(input, span);
    // 2
    var input2 = document.querySelector('.animation-2');
    var span2 = document.querySelector('.animation-span-2');
    animation(input2, span2);
    // 3
    var input3 = document.querySelector('.animation-3');
    var span3 = document.querySelector('.animation-span-3');
    animation(input3, span3);
    // 4
    var input4 = document.querySelector('.animation-4');
    var span4 = document.querySelector('.animation-span-4');
    animation(input4, span4);
    // 5
    var input5 = document.querySelector('.animation-5');
    var span5 = document.querySelector('.animation-span-5');
    animation(input5, span5);
    // 6
    var input6 = document.querySelector('.animation-6');
    var span6 = document.querySelector('.animation-span-6');
    animation(input6, span6);
}
// jq-ajax
// $('#login').click(() => {
//     var uname = $('#username').val();
//     var umima = $('#password').val();
//     $.ajax({
//         type: 'get',
//         url: '01php.php',
//         data: {
//             username: uname,
//             password: umima
//         },
//   display = '';      请求回来的结果
//         success: function(res) {
//             console.log(res);
//         }
//     })
// })