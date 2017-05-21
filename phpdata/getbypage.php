<?php

header('Content-Type:application/json');

$start = $_REQUEST['start'];
$count = 8;

require('init.php');

$sql = "SELECT pid,pname,pricenow,pricebefore,img FROM tm_list LIMIT $start,$count";
$result = mysqli_query($conn,$sql);

$output = [];
while(true)
{
  $row = mysqli_fetch_assoc($result);
  if(!$row){
  break;
 }
  $output[] = $row;
}

echo json_encode($output);

?>