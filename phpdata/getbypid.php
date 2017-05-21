<?php

header('Content-Type:application/json');

@$pid = $_REQUEST['pid'];
if(empty($pid))
{
  echo '[]';
  return;
}

require('init.php');

$sql = "SELECT pid,pname,pricenow,pricebefore,img,detail FROM tm_list WHERE pid=$pid";
$result = mysqli_query($conn,$sql);

$output = [];
$row = mysqli_fetch_assoc($result);
if(!$row){
  echo '[]';
 }
 else
 {
  $output[] = $row;
  echo json_encode($output);
 }


?>