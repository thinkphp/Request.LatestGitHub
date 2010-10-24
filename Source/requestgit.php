<?php

 /* start time */
 $oldtime = microtime(true);

/* username GitHub */
if($_GET['user'] && isset($_GET['user'])) {
  $user = $_GET['user'];
} else {
  $user = 'thinkphp';
}

/* get number of badges */
if($_GET['amount'] && isset($_GET['amount'])) {
  $amount = $_GET['amount'];
} else {
  $amount = 3;
}

 /* set up endpoint API YQL */
 $endpoint = "http://query.yahooapis.com/v1/public/yql?q="; 

 /* configure YQL statement */
 $yqlgit = "select * from html where url=\"http://github.com/". $user ."\" and xpath=\"//div[@class='first']/ul[@class='repositories']/li[@class='public']\" limit $amount";

 /* assemble the URL */
 $url = $endpoint  . urlencode($yqlgit) . '&diagnostics=false&format=xml';

 /* Get the data from service */
 $data = get($url);

 /* echo the data */
 echo$data;

 /* use cURL for retrieve the content of url api yql*/
 function get($url) {
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    $data = curl_exec($ch);
    $data = preg_replace('/<\?.*?>/','',$data);
    $data = preg_replace('/<\!--.*-->/','',$data);
    $data = preg_replace('/.*?<results>/','',$data);
    $data = preg_replace('/<\/results>.*/','',$data);
    $data = preg_replace('/ href="/',' href="http://github.com',$data);
    $data = preg_replace('/ src="/',' src="http://github.com',$data);
    curl_close($ch);
    if(empty($data)) {
       return 'Server timeout. Please try again!'; 
    } else {
       return $data;
    }   
 }

?>