<!DOCTYPE html>

<?php 

   session_start();

   if(!isset($_SESSION["username"]) && !isset($_SESSION["password"])){
      header("location: login.php");
      exit;
   }

   

?>

<html>
   <head>
   

      <link rel="stylesheet" href="CercaLibriStyle.css">
      <link rel="stylesheet" href="hw1b.css">
      <script src ="CercaLibri.js" defer></script>
   </head>
   <body>
      <nav>
         <div id="navdiv">
            <div id="home_button">
               <a class="third_link" href="https://studium.unict.it/dokeos/2024/index.php">
               <img src="Home.png">&nbsp Home </a>
            </div>
            <div id= "meteo-div" class="oscura"></div>
            <div class="tasti">
               <div   class ="displayInBlock"  id = "meteo" > <img id = "meteoImg" src= "meteo.png"></div>
               <div   class ="displayInBlock" id = "meteo"> <img id = "fotoImg" src= "foto.png"></div>
            </div>
         </div>
         <div id = "MessaggioMeteo" class="oscura"> </div>
      </nav>
      <div  id = "quote" class= "oscura"> </div>
      <div id="bandarossa"></div>
      <div id="mainblock">
         <header>
            <img src="rsz_1header-photo.png">
         </header>
         <div id="bandagrigia"></div>
         <section id="main-section">
            
            
            

            <form method="post" name="modulo" id = "FormInserimento">
               
               <label>Inserisci materia del libro - ENG </label>

               <input id = "LabelTitolo" type='text' name='ISBN' placeholder="Inserisci materia trattata nel libro..">

               <label class="displayInBlock"><input id="bottoneInvio" type='submit' value="Invio"></label>



            </form>

            <div class = "DivElencoLibri">
            <div class="intestazione corsi" id = "intestazione_ricerca">LIBRI DISPONIBILI </div>
            <ul>
                  <a class="third_link" id = "0Link" target="_blank">
                     <li id = "0Title"> </li>
                  </a>
                  <a class="third_link" id = "1Link" target="_blank">
                     <li id = "1Title"> </li>
                  </a>
                  <a class="third_link" id = "2Link" target="_blank">
                     <li id = "2Title"></li>
                  </a>
                  <a class="third_link" id = "3Link" target="_blank">
                     <li id = "3Title"> </li>
                  </a>
                  <a class="third_link" id = "4Link" target="_blank">
                     <li id = "4Title"></li>
                  </a>
                  <a class="third_link" id = "5Link" target="_blank">
                     <li id = "5Title"></li>
                  </a>
                  <a class="third_link" id = "6Link" target="_blank">
                     <li id = "6Title"></li>
                  </a>
                  <a class="third_link" id = "7Link" target="_blank">
                     <li id = "7Title"></li>
                  </a>
                  <a class="third_link" id = "8Link" target="_blank">
                     <li id = "8Title"></li>
                  </a>
                  <a class="third_link" id = "9Link" target="_blank">
                     <li id = "9Title"></li>
                  </a>
                  <a class="third_link" id = "10Link" target="_blank">
                     <li id = "10Title"></li>
                  </a>
                  <a class="third_link" id = "11Link" target="_blank">
                     <li id = "11Title"></li>
                  </a>
                  
               </ul>




            </div>








            <a id="bottoneIndietro" href="UserHome.php"><div> Torna Indietro </div></a>



             <a id="No-dec" href="logout.php"><div id = "bottone-logout"> Logout</div></a>
            
         </section>





         <footer>
            <div class="footer-class">
               <div id="left_footer">
                  <strong>Amministratore:</strong>
                  <a class="second" href="https://studium.unict.it/dokeos/2024/index.php#:~:text=Studium.UniCT%20Amministratore">Studium.UniCT Amministratore</a>
               </div>
               <div id="right_footer"> 
               
               <span></span>
               
               <img src="omino.png">
               </div>
            </div>
         </footer>
      </div>
   </body>
</html>