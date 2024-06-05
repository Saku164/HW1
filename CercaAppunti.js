


function ChangeImage() 
{
    const immagine = document.querySelector("#right_footer img")
    immagine.classList.add('pixel')
    immagine.src = 'https://cdn.iconscout.com/icon/premium/png-512-thumb/user-green-4510144-3746052.png?f=webp&w=512';
}

function ChangeImage2(){ 
    const immagine = document.querySelector("#right_footer img")
    immagine.classList.add('pixel')
    immagine.src = 'https://studium.unict.it/dokeos/2024/main/css/dokeos2_unict/images/action/online.png';

}












const immagine = document.querySelector("#right_footer img")
immagine.addEventListener("mouseover", ChangeImage) 

const image2 = document.querySelector("#right_footer img")
image2.addEventListener("mouseout", ChangeImage2) 




const PhotoButton = document.getElementById('fotoImg')
PhotoButton.addEventListener("click", FotoHandler)
PhotoButton.addEventListener("mouseover", MessaggioFotoIN);
PhotoButton.addEventListener("mouseout", MessaggioFotoOUT);

let a = 0 ;
const RichiestaURL = "https://api.shutterstock.com/v2/images/search";






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



function onResponseJsonImage(response){
    return response.json();
  }

function onJsonTokenImage(json) {

    token = json.Immagine;
  }

function FotoHandler(){
    
    if( a == 0)
    {
        ImageRequest = "https://api.shutterstock.com/v2/images/search?&query=motivational quotes&image_type=photo"

        fetch('GetCredentials.php').then(onResponseJsonImage).then(onJsonTokenImage).then(() => { 
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
    
    a = 0 ;
    QuoteDiv.innerHTML = "";
    }
  } 
function OnJsonFrase(json){
    console.log(json);
    const divFrase = document.getElementById("quote"); 

    let OggettoData = new Date; 
    let giorno = OggettoData.getDate(); 
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
function mappaGiornoInRange(giorno) { 
    return (giorno - 1) % 20;
  }




////// ------------ ------------ ------------ ------------ ------------ FORMS ------------ ------------ /////





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

////// ------------ ------------ ------------ ------------ ------------ Ricerca APPUNTI ------------ ------------ /////




function Ricerca_Appunti(event) {

  const formDati = document.querySelector("#FormRicerca");


  if (formDati.Titolo.value.length == 0) {
      alert("Inserisci il titolo");
      event.preventDefault();
      exit;
  }


  if (formDati) {

      fetch("CercaAppuntiDB.php", {
          method: 'post',
          body: new FormData(formDati)
      }).then(onResponseRicerca).then(OnJsonRicerca);

      event.preventDefault();

  } else {
      alert("Non Va Bene");
  }

}

const form_dati = document.querySelector("#FormRicerca");
form_dati.addEventListener("submit", Ricerca_Appunti);


function onResponseRicerca(response) {
  return response.json();
}

function OnJsonRicerca(json) {

  console.log(json);

  const DivAppunti = document.getElementById("AppuntoTrovato");

  DivAppunti.innerHTML = "";

  if (json == -1) {
      const TitoloP = document.createElement("p");
      TitoloP.textContent = "Non ci sono appunti con il titolo inserito";
      TitoloP.classList.add("TitoloPar");
      DivAppunti.appendChild(TitoloP);
      return;
  } else {

      const TitoloP = document.createElement("p");
      TitoloP.textContent = json[1];
      TitoloP.classList.add("TitoloPar");

      const ContentP = document.createElement("p");
      ContentP.textContent = json[2];
      ContentP.classList.add("ContentPar");

      DivAppunti.appendChild(TitoloP);
      DivAppunti.appendChild(ContentP);

  }


}


