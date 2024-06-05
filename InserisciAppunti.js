


function ChangeImage() //GESTISCE IL CAMBIO DI IMMAGINE DA OMINO BLU A OMINO VERDE (ONLINE)
{
    const image = document.querySelector("#right_footer img")
    image.classList.add('pixel')
    image.src = 'https://cdn.iconscout.com/icon/premium/png-512-thumb/user-green-4510144-3746052.png?f=webp&w=512';
}

function ChangeImage2(){ //GESTISCE IL CAMBIO DI IMMAGINE DA OMINO VERDE A OMINO BLU 
    const image = document.querySelector("#right_footer img")
    image.classList.add('pixel')
    image.src = 'https://studium.unict.it/dokeos/2024/main/css/dokeos2_unict/images/action/online.png';

}











//IMMAGINE DELL'OMINO
const image = document.querySelector("#right_footer img")
image.addEventListener("mouseover", ChangeImage) 

const image2 = document.querySelector("#right_footer img")
image2.addEventListener("mouseout", ChangeImage2) 




//PULSANTE DELL'IMMAGINE DEL GIORNO, EVENTI CHE LO ASCOLTANO
const PhotoButton = document.getElementById('fotoImg')
//console.log(PhotoButton);
PhotoButton.addEventListener("click", FotoHandler)
PhotoButton.addEventListener("mouseover", MessaggioFotoIN);
PhotoButton.addEventListener("mouseout", MessaggioFotoOUT);

let a = 0 ;
const RichiestaURL = "https://api.shutterstock.com/v2/images/search";






//FUNZIONI PER L'APPARIZIONE DEL MESSAGGIO "FOTO DEL GIORNO"
function MessaggioFotoIN(){
    MessaggioFIn = document.getElementById("MessaggioMeteo");
    //console.log(MessaggioFIn)
    MessaggioFIn.textContent = "Foto del giorno"
    MessaggioFIn.classList.remove("oscura");
    
}
function MessaggioFotoOUT(){
    MessaggioFOut = document.getElementById("MessaggioMeteo");
    MessaggioFOut.classList.add("oscura");
}

//PULSANTE DELL'IMMAGINE DEL METEO, EVENTI CHE LO ASCOLTANO

const imageMeteo = document.getElementById('meteoImg')
imageMeteo.addEventListener("click", MeteoHandler)
imageMeteo.addEventListener("mouseover", MessaggioMeteoIN);
imageMeteo.addEventListener("mouseout", MessaggioMeteoOUT);


function MessaggioMeteoIN(){
    MessaggioMIn = document.getElementById("MessaggioMeteo");
    //console.log(MessaggioMIn)
    MessaggioMIn.textContent = "Meteo a Catania"
    MessaggioMIn.classList.remove("oscura");
    
}
function MessaggioMeteoOUT(){
    MessaggioMOut = document.getElementById("MessaggioMeteo");
    MessaggioMOut.classList.add("oscura");
}


//GESTORE DEL CLICK SUL PULSANTE DEL METEO
let i = 0 ;
function MeteoHandler(){
    if( i == 0)
    {

    fetch('https://api.openweathermap.org/data/2.5/weather?q=Catania&appid=ad5fc53b509aea4606f27c5058acd844')
    .then(onResponse, onError)
    .then(onJson);

    MeteoDiv = document.querySelector("#meteo-div");
    MeteoDiv.classList.remove("oscura");
    i = i + 1;




    }
    else{

    MeteoDiv.classList.add("oscura");
    i = 0 ;
    MeteoDiv.innerHTML = "";
}



}
function onJson(json) {
    console.log(json)
    let temperaturaC = json.main.temp - 273.15
    console.log("Temperatura: " + temperaturaC.toFixed(2)+ " gradi celsius");
    let tempPercepita = (json.main.feels_like - 273.15).toFixed(2);
    console.log("Percepita: " + tempPercepita+ " celsius");
  
    const div = document.querySelector('#meteo-div')
  
  
    const label1 =  document.createElement('span')
    label1.classList.add("MeteoInfo")
    label1.textContent =  temperaturaC.toFixed(2)+ " C\u00B0"
    label1.style.fontSize = '40px';
    label1.style.fontWeight = 'bold';
  
  
    const label2 =  document.createElement('span')
    label2.classList.add("MeteoInfo")
    label2.textContent = "Percepita: " + tempPercepita+ " C\u00B0"

  
  
  
  
    const label3 =  document.createElement('span')
    label3.classList.add("MeteoInfo")
    label3.textContent = ", Umidit\u00E0: " + json.main.humidity + "% ,  "


    const label4 = document.createElement('span');
    label4.textContent = json.weather[0].description;
    label4.classList.add("MeteoInfo");


  
    div.appendChild(label1);
    div.appendChild(label2);
    div.appendChild(label3);
    div.appendChild(label4);

  }
  
  function onResponse(response) {
    return response.json();
  }
  
  function onError(error) {
    console.log('Error: ' + error);
  }

//GESTORE DEL CLICK SUL PULSANTE DELLA FRASE

//RISOLVERE PROBLEMA DELL'APPARIZIONE DEL DIV PRIMA DELLA FOTO  -- APPARIZIONE E SCOMPARSA DELLA FOTO DEL GIORNO

function onResponseJsonImage(response){
    return response.json();
  }

function onJsonTokenImage(json) {
    // Supponiamo che il token sia contenuto in una proprietà chiamata 'Meteo' nel JSON

    token = json.Immagine;
  }






function FotoHandler(){
    
    if( a == 0)
    {
        ImageRequest = "https://api.shutterstock.com/v2/images/search?&query=motivational quotes&image_type=photo"

        fetch('GetCredentials.php').then(onResponseJsonImage).then(onJsonTokenImage).then(() => { //dopo che token è stato aggiornato e dunque la richiesta asincrona è stata risolta allora continuo
            //quando tutte le richieste vengono risolte allora posso procedere a prendere il token che verrà utilizzato dopo.
            fetch(ImageRequest,{
                headers: {
                    'Authorization': "" + token,
                    'Content-Type': 'application/json',
                    }
             }).then(onResponseFrase,onErrorF).then(OnJsonFrase)});
        

    QuoteDiv = document.getElementById('quote');  
   
    QuoteDiv.classList.remove("oscura");
    a = a + 1;


    }
    else{
    //inserisci parte in cui si nasconde il div realtivo al meteo
    QuoteDiv.classList.add("oscura");
    a = 0 ;
    QuoteDiv.innerHTML = "";
    }
  } 
function OnJsonFrase(json){
    console.log(json);
    const divFrase = document.getElementById("quote"); //questo è il div dove inseriremo la foto

    let OggettoData = new Date; //definiamo un nuovo oggetto Date
    let giorno = OggettoData.getDate(); //chiamiamo il metodo di Date getDate.
    let altezza = json.data[mappaGiornoInRange(giorno)].assets.huge_thumb.height;
    let URL = json.data[mappaGiornoInRange(giorno)].assets.huge_thumb.url;
    let larghezza = json.data[mappaGiornoInRange(giorno)].assets.huge_thumb.width;

    divFrase.style.height = (altezza-20) + "px";
    divFrase.style.width = larghezza + "px";
    divFrase.style.overflowY = "hidden";
    divFrase.style.boxShadow = "6px  4px 4px black";

    const imageFrase = document.createElement('img');
    imageFrase.style.height = (altezza) + "px";
    imageFrase.style.width = larghezza + "px";
    imageFrase.src = URL;
    
    imageFrase.style.borderRadius = "3%";

    divFrase.appendChild(imageFrase);



  }
function onResponseFrase(response) {
    console.log('Risposta ricevuta');
    return response.json();
  }
function onErrorF(error) {
    console.log('Error: ' + error);
  }
function mappaGiornoInRange(giorno) { // questa funzione mi mappa il giorno in un range di 20
    return (giorno - 1) % 20;
  }




////// ------------ ------------ ------------ ------------ ------------ FORMS ------------ ------------ /////

//Vogliamo validare che i dati inseriti dall'utente nel form siano corretti



function MostraUtenti(){
    
    fetch("http://localhost/hw1/ContaUtenti.php").then(onResponseUtenti).then(onJsonUtenti);

}

function onResponseUtenti(response){
    return response.json();
}

function onJsonUtenti(json){
    const SpanUtenti = document.querySelector("span");
    //console.log(json);

    SpanUtenti.textContent = json[0];
}

MostraUtenti();

////// ------------ ------------ ------------ ------------ ------------ INSERIMENTO APPUNTI ------------ ------------ /////



//Dobbiamo gestire l'invio dei dati dal form
function Invia_Appunti(event){

    const formDati = document.querySelector("#FormInserimento");
    

    if(formDati.Titolo.value.length == 0){
        alert("Inserisci il titolo");
        event.preventDefault();
        exit;
    }

    if(formDati.Testo.value.length == 0){
        alert("Inserisci il testo degli appunti");
        event.preventDefault();
        exit;
    }

        

    if(formDati){
            
        fetch("InserisciAppuntiDB.php", {method: 'post', body: new FormData(formDati)}).then(onClickV2)
        
        event.preventDefault();
        //alert("Caricamento avvenuto con successo"); //IMPLEMENTARE EVENTUALE AVVISO CON JS

        }
    else{
            alert("Caricamento non avveunto..riprova"); //IMPLEMENTARE EVENTUALE AVVISO CON JS
        }
        
}

const form_dati = document.querySelector("#FormInserimento");
form_dati.addEventListener("submit", Invia_Appunti);




function onClickV2(){ //MOSTRA IL MESSAGGIO DA PARTE DI STUDIUM
  const Messaggio = document.querySelector("#DivMessaggio");
  Messaggio.classList.remove('oscura');
  Messaggio.classList.add('mostraBlock');
  document.body.classList.add("ModaleAperta")

}


function onClickV3(){ //NASCONDE IL MESSAGGIO DA PARTE DI STUDIUM
  const Messaggio = document.querySelector("#DivMessaggio");
  Messaggio.classList.remove('mostraBlock');
  Messaggio.classList.add('oscura');
  document.getElementById("LabelTitolo").value = "";
  document.getElementById("LabelTesto").value = "";
  document.body.classList.remove("ModaleAperta")

}


const bottoneSuccesso = document.querySelector("#BottoneSuccesso");
bottoneSuccesso.addEventListener("click", onClickV3);



