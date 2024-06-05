<!DOCTYPE html>
<?php 
   session_start();
   
   if(!isset($_SESSION["username"]) && !isset($_SESSION["username"])){
      header("location: login.php");
      exit;
   }
   
   ?>
<html>
   <head>
      <link rel="stylesheet" href="hw1b.css">
      <script src ="hw1.1.js" defer></script>
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
            <section id = "main-section-user">
               <div id = "SelezioneAzioneHome">
                  <a id="bottoneSelezione" href="InserisciAppunti.php">
                     <div  class="displayInBlock">Inserisci appunti</div>
                  </a>
                  <a id="bottoneSelezione" href="CercaLibri.php">
                     <div  class="displayInBlock">Cerca libri</div>
                  </a>
                  <a id="bottoneSelezione" href="CercaAppunti.php">
                     <div  class="displayInBlock">Cerca appunti</div>
                  </a>
               </div>
            </section>
            <a id="No-dec" href="logout.php">
               <div id = "bottone-logout"> Logout</div>
            </a>
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