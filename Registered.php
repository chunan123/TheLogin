<?php
    // 注册
    $reUser = $_GET['uname'];
    $rePaw = $_GET['upaw'];
    $con = mysqli_connect('localhost', 'root', '', '2006');
    if ($con) {
        mysqli_query($con, 'set names utf8');
        // 验证账号是否存在
        $sql = "select * from nameinfo where username='$reUser'";
        $res = mysqli_query($con, $sql);
        if ($res->num_rows > 0) {
            echo true;
        } else {
            echo false;
            $sql2 = "INSERT INTO `nameinfo`(`id`,`username`,`password`) VALUES(NULL,'$reUser','$rePaw');";
            $res2 = mysqli_query($con, $sql2);
        }
    } else {
        echo '连接数据库失败';
    }
?>