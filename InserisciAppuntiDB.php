<!DOCTYPE html>

<?php 

if( isset($_POST["Titolo"])   &&   isset($_POST["Testo"])){

    $conn = mysqli_connect("localhost","root", "", "WebStudium");

    $Titolo = mysqli_real_escape_string($conn,$_POST["Titolo"]);
    $Testo = mysqli_real_escape_string($conn,$_POST["Testo"]);
    $User = mysqli_real_escape_string($conn,$_POST["Username"]);

    $queryInserimento = "INSERT INTO APPUNTI(titolo,contenuto,utente) VALUES (\"$Titolo\" ,\"$Testo\", \"$User\")";

    $res = mysqli_query($conn, $queryInserimento);
    if($res == true){
        echo 1;
        header("location: UserHome.php");
        exit;
    }
    else{
        echo 0;
        header("location: InserisciAppunti.php");
        exit;
    }

}


?>




<html>

    <head>

    </head>

    <body>

    </body>

</html>