
<?php

        session_start();

        if(isset($_SESSION["username"]) && isset($_SESSION["password"])){
            
            header("location: UserHome.php");
            exit;
        }



if(isset($_POST["NomeUtenteLogin"]) && isset($_POST["PSWLogin"])){ 

            
            $conn = mysqli_connect("localhost","root", "", "WebStudium");


            $NomeUtente = mysqli_real_escape_string($conn,$_POST["NomeUtenteLogin"]);
            $Password = mysqli_real_escape_string($conn,$_POST["PSWLogin"]);

            $_SESSION["username"] = $NomeUtente;
            $_SESSION["password"] = $Password;

            
            $query = "SELECT * from STUDENTI where NomeUtente = '".$NomeUtente."'  AND PSW = '".$Password."'";

            $res = mysqli_query($conn, $query);

            if(mysqli_num_rows($res) > 0){
                mysqli_close(($conn));

                header("location: UserHome.php");
                
            }
            

            else{
                mysqli_close(($conn));

                header("location: index.php");
            }

            


       }


    ?>
