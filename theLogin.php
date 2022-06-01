<?php
    $user = $_GET['username'];
    $pad = $_GET['password'];
    $con = mysqli_connect('localhost', 'root', '', '2006');
    if ($con) {
        mysqli_query($con, 'set names utf8');
        // 实现登录效果
        $sql = "select * from nameinfo where username='$user' and password='$pad'";
        $res = mysqli_query($con, $sql);
        if ($res->num_rows > 0) {
            echo true;
        } else {
            echo false;
        }
    } else {
        echo '连接数据库失败';
    }
?>