<?php 


$conn = mysqli_connect("localhost","root", "", "WebStudium");

$QueryConta = "SELECT COUNT(*) from STUDENTI";

$resQuery = mysqli_query($conn,$QueryConta);

$numero_utenti = mysqli_fetch_row($resQuery);

echo json_encode($numero_utenti);

?>