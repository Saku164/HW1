<!DOCTYPE html>

<html>
<head></head>
<body></body>


</html>

<?php
    
    session_start();
    if(isset($_POST["nome"]) && isset($_POST["cognome"]) && isset($_POST["CF"]) && isset($_POST["DataNascita"]) && isset($_POST["CittaNascita"]) && isset($_POST["NomeUtente"]) && isset($_POST["PSW"])){
        
        
        $conn = mysqli_connect("localhost","root", "", "WebStudium");

        
        $NomeUtente = mysqli_real_escape_string($conn,$_POST["NomeUtente"]);
        $Password = mysqli_real_escape_string($conn,$_POST["PSW"]);
        $Nome = mysqli_real_escape_string($conn,$_POST["nome"]);
        $Cognome = mysqli_real_escape_string($conn,$_POST["cognome"]);
        $DataNascita = mysqli_real_escape_string($conn,$_POST["DataNascita"]);
        $CF = mysqli_real_escape_string($conn,$_POST["CF"]);
        $CittaNascita = mysqli_real_escape_string($conn,$_POST["CittaNascita"]);
        $Matricola = mysqli_real_escape_string($conn,$_POST["matricola"]);


        $queryRicerca = "SELECT * FROM STUDENTI WHERE NomeUtente = '$NomeUtente' OR PSW = '$Password'"; 
        $risultato_ricerca = mysqli_query($conn,$queryRicerca);

        if(mysqli_num_rows($risultato_ricerca) > 0){
            
            header("location: index.php");
            return;
        }
        else{
        
        $_SESSION["username"] = $NomeUtente;
        $_SESSION["password"] = $Password;
       
        $queryInserimento = "INSERT INTO STUDENTI(Nome, Cognome, CodiceFiscale, DataNascita, NomeUtente, PSW, Matricola) VALUES (\"$Nome\" ,\"$Cognome\", \"$CF\", \"$DataNascita\", \"$NomeUtente\",\"$Password\",\"$Matricola\")";
       
 
        $res = mysqli_query($conn, $queryInserimento);

       
        if($res == true){
    
            mysqli_close($conn);

            header("location: UserHome.php");
        } else {
            mysqli_close($conn);

            echo 0;
        }
    }
}
?>