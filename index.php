<!DOCTYPE html>
<?php

   session_start();
   
   if(isset($_SESSION["username"]) && isset($_SESSION["password"])){
       
       header("location: UserHome.php");
       exit;
   }
   
   ?>
<html>
   <head>
      <link rel="stylesheet" href="hw1.css">
      <script src ="hw1.js" defer></script>
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
            <div class="leftbar">
               <div class="intestazione"> ANNO ACCADEMICO</div>
               <div id="flex-menu">
                  <select class = "InputSelect">
                     <option>2023/2024</option>
                     <option>2022/2023</option>
                     <option>2021/2022</option>
                     <option>2020/2021</option>
                     <option>2019/2020</option>
                     <option>2018/2020</option>
                     <option>2017/2018</option>
                     <option>2016/2017</option>
                     <option>2015/2016</option>
                     <option>2014/2015</option>
                  </select>
               </div>
               <div class="intestazione"> ACCESSO UTENTI <img src="usa.png" class="spazio" id = "informazioni"></div>
               <form name = "FormLogin" action="Login.php" method="post">
                  
                  <p> NOME UTENTE</p>
                  <div id="flex-menu">
                     <input type = "text" class="InputSelect" name = "NomeUtenteLogin">
                  </div>
                  <p> PASSWORD</p>
                  <div id="flex-menu">
                     <input  type = "password" class ="InputSelect" name = "PSWLogin">
                  </div>
                  <div id="bottone">
                     <div id="bottone-child">REGISTRATI</div>
                     <input  id="bottoneEntra" type="submit" name="invioLogin" value="ENTRA" id = "LoginButton">
                  </div>
               </form>
               <br>
               <div class="intestazione"> IN EVIDENZA</div>
               <div class="link doppio">
                  <a class="primo" href="https://studium.unict.it/dokeos/2024/#:~:text=Collegamento%20Insegnamenti%20con%20Teams/" target="_blank">
                     <div id="prova">Collegamento insegnanti con teams</div>
                  </a>
               </div>
               <div class="link">
                  <a class="primo" href="https://studium.unict.it/dokeos/tutorial_docenti_17-18.pdf" target="_blank">
                     <div id="prova">Attivazione insegnamenti</div>
                  </a>
               </div>
               <div class="link">
                  <a class="primo" href="https://www.unict.it/">
                     <div id="prova" target="_blank">Portale UniCT</div>
                  </a>
               </div>
               <div class="link">
                  <a class="primo" href="https://studenti.smartedu.unict.it/" target="_blank">
                     <div id="prova">Portale Studenti</div>
                  </a>
               </div>
               <div class="link">
                  <a class="primo" href="https://docenti.smartedu.unict.it/docenti/" target="_blank">
                     <div id="prova">Portale Docenti</div>
                  </a>
               </div>
               <div class="link">
                  <a class="primo" href="https://studium.unict.it/dokeos/tutorial_studenti.pdf" target="_blank">
                     <div id="prova">Tutorial Studenti</div>
                  </a>
               </div>
               <div class="link">
                  <a class="primo" href="https://studium.unict.it/dokeos/tutorial_docenti.pdf" target="_blank">
                     <div id="prova">Tutorial Docenti</div>
                  </a>
               </div>
               <div class="link doppio">
                  <a class="primo " href="https://studium.unict.it/dokeos/Studium%20(export%20e%20import%20materiale%20didattico).pdf" target="_blank">
                     <div id="prova">Tutorial export e import materiale didattico</div>
                  </a>
               </div>
               <div class="link">
                  <a class="primo" href="https://studium.unict.it/dokeos/tutorial_prenotazioni.pdf" target="_blank">
                     <div id="prova">Tutorial prenotazioni</div>
                  </a>
               </div>
               <div id="messaggio">
                  <strong>LOGIN STUDENTI</strong>
                  <br> il login degli studenti deve avvenire con le credenziali (Codice Fiscale e password) del nuovo portale studenti Smart_edu. Se non è stata impostata una password, fare accesso al portale studenti con SPID o CIE e impostarla tramite le impostazioni.
               </div>
               <div class="intestazione"> APP MOBILE</div>
               <div class=" immagini_store-flex">
                  <a href="https://play.google.com/store/apps/details?id=unict.cea.studium&hl=it" target="_blank">
                     <div id = "play_foto" data-download ='10.000+'><img class="immagini_store" src="play-store-agg.png"></div>
                  </a>
                  <div id = "download1"></div>
                  <a href="https://apps.apple.com/it/app/studium-unict/id1510024640" target="_blank">
                     <div id = "app_store_foto" data-download ='15.000+'><img class="immagini_store seconda" src="app-store-agg.png " data-download ='15.000+'></div>
                  </a>
                  <div id = "download2"></div>
               </div>
            </div>
            <div id="courses" class="classeCorsi">
               <div id="DivMessaggio" class="oscura">
                  <div class="DivMessaggioPerButton-TOP">
                     <strong> STUDIUM DICE:</strong>
                     <p>Se sei un docente inserisci la tua matricola e la password CAS. </p>
                     <p>Se sei uno studente inserisci le credenziali del nuovo portale studenti. </p>
                     <p>Se sei un ospite inserisci nome utente e password che ti abbiamo inviato via e-mail. </p>
                  </div>
                  <div class="DivMessaggioPerButton-BOTTOM">
                     <div class="bottone-child-messaggio">OK</div>
                  </div>
               </div>
               <div id="DivForm" class="oscura">
                  <div class="DivMessaggioPerButton-TOP">
                     <div class="intestazione corsi">REGISTRAZIONE</div>

                     <form method="post" action="SignUp.php" name = "FormRegistrazione">
                        <p> Nome</p>
                        <input type="text" name="nome">
                        <p> Cognome</p>
                        <input type="text" name="cognome">
                        <p> Matricola (per gli iscritti precedenti)</p>
                        <input type="text" name="matricola">
                        <p> Codice Fiscale</p>
                        <input type="text" name="CF">
                        <p> Data di nascita</p>
                        <input type="text" name="DataNascita">
                        <p> Paese di nascita</p>
                        <input type="text" name="CittaNascita">
                        <p> Nome Utente</p>
                        <input type="text" name="NomeUtente">
                        <p> Password</p>
                        <input type="password" name="PSW">
                  </div>
                  <div class="DivMessaggioPerButton-BOTTOM">
                  <input type="submit" name="invio" value="Invia" class="bottone-child-messaggio" id = 'SalvaRegistrazione' id ='bottoneEntra'>
                  </div>
                  </form>
               </div>
               <div id="dipartimenti">
                  <div class="intestazione corsi">DIPARTIMENTI </div>
               </div>
               <ul>
                  <a class="third_link" href="https://studium.unict.it/dokeos/2024/index.php?category=C1B3459990904996866E84EC7B736307" target="_blank">
                     <li>AGRICOLTURA, ALIMENTAZIONE E AMBIENTE (Di3A) </li>
                  </a>
                  <a class="third_link" href="https://studium.unict.it/dokeos/2024/index.php?category=9A9045A6D0BE4C298411EB7C67794F03" target="_blank">
                     <li> CHIRURGIA GENERALE E SPECIALITÀ MEDICO-CHIRURGICHE</li>
                  </a>
                  <a class="third_link" href="https://studium.unict.it/dokeos/2024/index.php?category=4F51EF67BE594731B02B5C1038C6C075" target="_blank">
                     <li>ECONOMIA E IMPRESA</li>
                  </a>
                  <a class="third_link" href="https://studium.unict.it/dokeos/2024/index.php?category=28115AA5263D4592A31938067982ACB5" target="_blank">
                     <li> FISICA ED ASTRONOMIA "Ettore Majorana"</li>
                  </a>
                  <a class="third_link" href="https://studium.unict.it/dokeos/2024/index.php?category=CE6D2CE251F64B93874E195092687590" target="_blank">
                     <li> GIURISPRUDENZA</li>
                  </a>
                  <a class="third_link" href="https://studium.unict.it/dokeos/2024/index.php?category=255D6930AB5442608F10F34D0BD1AE9A" target="_blank">
                     <li> INGEGNERIA CIVILE E ARCHITETTURA (DICAR)</li>
                  </a>
                  <a class="third_link" href="https://studium.unict.it/dokeos/2024/index.php?category=0699F62B2389442DA3D3A47BF9595E05" target="_blank">
                     <li> INGEGNERIA ELETTRICA ELETTRONICA E INFORMATICA</li>
                  </a>
                  <a class="third_link" href="https://studium.unict.it/dokeos/2024/index.php?category=3BDF9A26F41D4423A85909554A3032D3" target="_blank">
                     <li> MATEMATICA E INFORMATICA</li>
                  </a>
                  <a class="third_link" href="https://studium.unict.it/dokeos/2024/index.php?category=97ADDE1E8320486B926EE2C5C132F0EE" target="_blank">
                     <li>MEDICINA CLINICA E SPERIMENTALE</li>
                  </a>
                  <a class="third_link" href="https://studium.unict.it/dokeos/2024/index.php?category=9EE1C216352E42F2A41D8E72E6F4374C" target="_blank">
                     <li>SCIENZE BIOLOGICHE, GEOLOGICHE E AMBIENTALI</li>
                  </a>
                  <a class="third_link" href="https://studium.unict.it/dokeos/2024/index.php?category=03C0FE029BB04D4293EEAEB92E55FD56" target="_blank">
                     <li> SCIENZE BIOMEDICHE E BIOTECNOLOGICHE</li>
                  </a>
                  <a class="third_link" href="https://studium.unict.it/dokeos/2024/index.php?category=8523A59405E644E5AE82368AC2B78F00" target="_blank">
                     <li> SCIENZE CHIMICHE</li>
                  </a>
                  <a class="third_link" href="https://studium.unict.it/dokeos/2024/index.php?category=5F7AA2F73B864A1ABEB27A47B93799DA" target="_blank">
                     <li>SCIENZE DEL FARMACO E DELLA SALUTE</li>
                  </a>
                  <a class="third_link" href="https://studium.unict.it/dokeos/2024/index.php?category=2EAD9A0059D9401B97FED205B1EB8950" target="_blank">
                     <li> SCIENZE DELLA FORMAZIONE</li>
                  </a>
                  <a class="third_link" href="https://studium.unict.it/dokeos/2024/index.php?category=8A62CA9C5C1B4567AC7B16BF211645A7" target="_blank">
                     <li>SCIENZE MEDICHE, CHIRURGICHE E TECNOLOGIE AVANZATE G.F. INGRASSIA</li>
                  </a>
                  <a class="third_link" href="https://studium.unict.it/dokeos/2024/index.php?category=D2E3807C139D4E6DBE1E159692C4CEC6" target="_blank">
                     <li> SCIENZE POLITICHE E SOCIALI</li>
                  </a>
                  <a class="third_link" href="https://studium.unict.it/dokeos/2024/index.php?category=24891B06F1EB4F31BE4640F633D1F53C" target="_blank">
                     <li> SCIENZE UMANISTICHE</li>
                  </a>
                  <a class="third_link" href="https://studium.unict.it/dokeos/2024/index.php?category=DF449B3AE35F4E3482C4AC2D458BBA19" target="_blank">
                     <li> STRUTTURA DIDATTICA SPECIALE DI ARCHITETTURA, SEDE DECENTRATA DI SIRACUSA</li>
                  </a>
               </ul>
            </div>
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