<?php 

if(isset($_POST["Titolo"]) && isset($_POST["Username"])){

    $conn = mysqli_connect("localhost","root", "", "WebStudium");

    $Titolo = mysqli_real_escape_string($conn,$_POST["Titolo"]);
    $NomeUtente = mysqli_real_escape_string($conn,$_POST["Username"]);


    $queryRicerca = "SELECT * FROM APPUNTI WHERE utente = '$NomeUtente' AND titolo = '$Titolo'";

    $res = mysqli_query($conn, $queryRicerca);

    if(mysqli_num_rows($res) == 0){
        $risultato_finale =  -1;
    }
    else{
        $risultato_finale = mysqli_fetch_row($res);

    }

    echo json_encode($risultato_finale);





}






?>