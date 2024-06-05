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
      <link rel="stylesheet" href="InserisciAppuntiStyle.css">
      <link rel="stylesheet" href="hw1b.css">
      <script src ="InserisciAppunti.js" defer></script>
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
               <label>Titolo</label>
               <input id = "LabelTitolo" type='text' name='Titolo'>
               <label>Testo </label>
               <textarea id = "LabelTesto" type='text' name='Testo' rows="30" cols="70" placeholder="Inserisci il testo..."></textarea>
               <input type="hidden" name= "Username" value= "<?php  echo $_SESSION["username"]?>">
               <input type="hidden" name = "Password" value= "<?php  echo $_SESSION["password"]?>">
               <label><input id="bottoneInvio" type='submit' value="Invio"></label>
            </form>
            <div id="DivMessaggio" class="oscura" >
               <div class="DivMessaggioPerButton-TOP">
                  <h1> STUDIUM DICE:</h1>
                  <p id = "SuccessoP">Caricamento avvenuto con successo</p>
               </div>
               <div class="DivMessaggioPerButton-BOTTOM" id="BottoneSuccesso">
                  <div class="bottone-child-messaggio">OK</div>
               </div>
            </div>
            <a id="bottoneIndietro" href="UserHome.php">
               <div> Torna Indietro </div>
            </a>
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