<?php
    $hide = $_GET["hide"];
    
    $conn = mysqli_connect("127.0.0.1","root","","eimichs",3306);
    mysqli_query($conn,"SET NAMES UTF8");

    //新闻展示
    if($hide==0){
        $page = $_GET['page'];#获取当前页数，默认为1吧
        if ($page == null) {
            $page = 1;
        }
        $pagesize = 4;#每次展示4条消息
        $sql = "SELECT COUNT(*) FROM amx_news_title";
        $rs =  mysqli_query($conn,$sql);
        $datanum = mysqli_fetch_row($rs)[0];
        
        $pagenum=ceil($datanum/$pagesize);#一共可以分好多页
        $starnum=($page-1)*$pagesize;#每页的起始位置，方便数据库查找
        $conent=[];
        $sql1 = "SELECT * FROM amx_news_title  ORDER BY id DESC LIMIT $starnum,$pagesize";
        $rs1 = mysqli_query($conn,$sql1);

        while($row = mysqli_fetch_row($rs1)){
            $rows = array('id'=>$row[0],'title'=>$row[1],'introduce' =>$row[2],'cid'=>$row[3],'year'=>$row[4],'month'=>$row[5]);
            array_push($conent,$rows);
        }
        $arr = array('content'=>$conent,'pagenum'=>$pagenum);
        echo(json_encode($arr)); 
    }else if($hide==1){#具体某一条新闻消息
        $id = $_GET["id"];

        $sql1 = "SELECT title FROM amx_news_title WHERE cid = '$id'";
        $rs1 = mysqli_query($conn,$sql1);
        $title = mysqli_fetch_row($rs1)[0];

        $arr=[];
        $sql = "SELECT content,imgsrc FROM amx_news_content WHERE cid = $id";
        $rs = mysqli_query($conn,$sql);
        $main=[];
        while($row = mysqli_fetch_row($rs)){
            $rows = array('content'=>$row[0],'imgsrc'=>$row[1]);
            array_push($main,$rows);
        }
        $arr = array('title'=>$title,'content'=>$main);

        echo(json_encode($arr)); 
    }else if($hide==2){#团队人员简介
        $ids = $_GET["id"];
        if($ids==-1){
            $sql1 = "SELECT id,name FROM amx_team ORDER BY id DESC LIMIT 0,4";
            $rs1 = mysqli_query($conn,$sql1);
            $teams=[];
            while($row = mysqli_fetch_row($rs1)){
                $rows = array('id'=>$row[0],'name'=>$row[1]);
                array_push($teams,$rows);
            }
            echo(json_encode($teams)); 
        }else{
            $sql1 = "SELECT * FROM amx_team WHERE id='$ids'";
            $rs1 = mysqli_query($conn,$sql1);
            $teams=[];
            while($row = mysqli_fetch_row($rs1)){
                $rows = array('id'=>$row[0],'name'=>$row[1],'title'=>$row[2],'img'=>$row[3],'con1'=>$row[4],'con2'=>$row[5],'conimg'=>$row[6]);
                array_push($teams,$rows);
            }
            echo(json_encode($teams)); 
        }
    }else if($hide==3){#产品介绍
        $ids = $_GET["id"];
        if($ids==-1){
            $sql1 = "SELECT id,title1 FROM amx_product ORDER BY id DESC LIMIT 0,4";
            $rs1 = mysqli_query($conn,$sql1);
            $styles=[];
            while($row = mysqli_fetch_row($rs1)){
                $rows = array('id'=>$row[0],'name'=>$row[1]);
                array_push($styles,$rows);
            }
            echo(json_encode($styles)); 
        }else{
            $sql1 = "SELECT * FROM amx_product WHERE id='$ids'";
            $rs1 = mysqli_query($conn,$sql1);
            $styles=[];
            while($row = mysqli_fetch_row($rs1)){
                $rows = array('id'=>$row[0],'title'=>$row[1],'content'=>$row[2],'src'=>$row[3],'zw'=>$row[4],'yw'=>$row[5]);
                array_push($styles,$rows);
            }
            echo(json_encode($styles)); 
        }
    }


    
?>