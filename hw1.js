
function onClick() 
{
    const FormDaMostrare = document.getElementById('DivForm');
    FormDaMostrare.classList.remove('oscura');
    FormDaMostrare.classList.add('mostraBlock');
 
}


function ChangeImage() 
{
    const image = document.querySelector("#right_footer img")
    image.classList.add('pixel')
    image.src = 'https://cdn.iconscout.com/icon/premium/png-512-thumb/user-green-4510144-3746052.png?f=webp&w=512';
}

function ChangeImage2(){ 
    const image = document.querySelector("#right_footer img")
    image.classList.add('pixel')
    image.src = 'https://studium.unict.it/dokeos/2024/main/css/dokeos2_unict/images/action/online.png';

}

function onClickV2(){ 
    const Messaggio = document.querySelector("#DivMessaggio");
    Messaggio.classList.remove('oscura');
    Messaggio.classList.add('mostraBlock');

}



function onClickV3(){ 
    const Messaggio = document.querySelector("#DivMessaggio");
    Messaggio.classList.remove('mostraBlock');
    Messaggio.classList.add('oscura');

}

function onClickV4(){ 
    const SaveReg = document.getElementById('DivForm');
    SaveReg.classList.remove('mostraBlock');
    SaveReg.classList.add('oscura');
}

function MostraNumDownload1(){  
    const immagine = document.querySelector('#play_foto')
    var NumeroDownload = immagine.dataset.download;
    const DivDownload = document.querySelector('#download1');
    DivDownload.textContent = "Numero Download: " + NumeroDownload;
    DivDownload.style.display = "inline-block";
}

function NascondiNumDownload(){ 

    const DivDownload = document.querySelector('#download1');

    DivDownload.style.display = "none";
}


function MostraNumDownload2(){  
    const immagine = document.querySelector('#app_store_foto')
    var NumeroDownload = immagine.dataset.download;
    const DivDownload = document.querySelector('#download2');
    DivDownload.textContent = "Numero Download: " + NumeroDownload;
    DivDownload.style.display = "inline-block"; 
}

function NascondiNumDownload2(){  

    const DivDownload = document.querySelector('#download2');
    DivDownload.style.display = "none";
}


const RegisterButton = document.querySelector("#bottone-child");
RegisterButton.addEventListener("click", onClick);

const SaveRegButton = document.querySelector('#SalvaRegistrazione');
SaveRegButton.addEventListener("click", onClickV4);




const image = document.querySelector("#right_footer img")
image.addEventListener("mouseover", ChangeImage) 

const image2 = document.querySelector("#right_footer img")
image2.addEventListener("mouseout", ChangeImage2) 



const image3 = document.getElementById('informazioni');
image3.addEventListener("click",onClickV2);

const bottoneOK = document.querySelector('.bottone-child-messaggio');
bottoneOK.addEventListener("click", onClickV3);





const imagePlay = document.querySelector('#play_foto');
imagePlay.addEventListener("mouseover", MostraNumDownload1) 

const imagePlay2 = document.querySelector("#play_foto")
imagePlay.addEventListener("mouseout", NascondiNumDownload) 




const imageApp = document.querySelector("#app_store_foto")
imageApp.addEventListener("mouseover", MostraNumDownload2) 

const imageApp2 = document.querySelector("#app_store_foto")
imageApp.addEventListener("mouseout", NascondiNumDownload2)







const PhotoButton = document.getElementById('fotoImg')
PhotoButton.addEventListener("click", FotoHandler)
PhotoButton.addEventListener("mouseover", MessaggioFotoIN);
PhotoButton.addEventListener("mouseout", MessaggioFotoOUT);

let a = 0 ;
const RichiestaURL = "https://api.shutterstock.com/v2/images/search";






function MessaggioFotoIN(){
    MessaggioFIn = document.getElementById("MessaggioMeteo");
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
    MessaggioMIn.textContent = "Meteo a Catania"
    MessaggioMIn.classList.remove("oscura");
    
}
function MessaggioMeteoOUT(){
    MessaggioMOut = document.getElementById("MessaggioMeteo");
    MessaggioMOut.classList.add("oscura");
}


function onResponseJsonMeteo(response){
    return response.json();
}

function onJsonTokenMeteo(json) {

    token = json.Meteo;
}



let i = 0;
var token = 0;
function MeteoHandler(){

    
    if( i == 0)
    {

        fetch('GetCredentials.php').then(onResponseJsonMeteo).then(onJsonTokenMeteo).then(() => { 
            fetch("https://api.openweathermap.org/data/2.5/weather?q=Catania&appid=" + token)
                .then(onResponse, onError)
                .then(onJson);

        MeteoDiv = document.querySelector("#meteo-div");
        MeteoDiv.classList.remove("oscura");
        i = i + 1;
        });
    

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
    QuoteDiv.classList.add("oscura");
    a = 0 ;
    QuoteDiv.innerHTML = "";
    }
}  

  function OnJsonFrase(json){

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

function mappaGiornoInRange(giorno) { // questa funzione mi mappa il giorno in un range di 20
    return (giorno - 1) % 20; //siccome la API ritorna 20 immagini allora mappo ogni giorno del mese in 20 valori.
    }




////// ------------ ------------ ------------ ------------ ------------ FORMS ------------ ------------ /////



function VerificaDati(event){

    
    if (
        FormDati.nome.value.length == 0 ||
        FormDati.cognome.value.length == 0 ||
        FormDati.CF.value.length == 0 ||
        FormDati.DataNascita.value.length == 0 ||
        FormDati.CittaNascita.value.length == 0 ||
        FormDati.NomeUtente.value.length == 0 ||
        FormDati.PSW.value.length == 0
    ) {
        alert("Riempire tutti i campi");
        event.preventDefault();
        return;
    }

    if (FormDati.PSW.value.length < 12) {
        alert("Inserisci password più sicura...almeno 12 caratteri");
        event.preventDefault();
        return;
    }

    if (!ContieneNumero(FormDati.PSW.value)) {
        alert("Inserisci almeno un numero nella password");
        event.preventDefault();
        return;
    }

    if (!InserimentoDataNascita(FormDati.DataNascita.value)) {
        alert("Data di nascita non corretta");
        event.preventDefault();
        return;
    }
}


function ContieneNumero(stringa){
    return /\d/.test(stringa); /*Il metodo test() delle espressioni regolari JavaScript è di fondamentale importanza in molti àmbiti, a cominciare dalla validazione dei form. Questo metodo serve a testare (da qui il nome) se il pattern di un'espressione regolare combacia con la stringa passata come argomento. */
}

function InserimentoDataNascita(stringa){
    return /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/.test(stringa); /* 0[1-9] -> 01 to 09, [12][0-9] -> 10 to 19 e 20 to 29, 3[01] -> 30-31, , stessa cosa con mesi e anni  */
}


function Login(event){

    if (
        FormDatiLogin.NomeUtenteLogin.value.length == 0 ||
        FormDatiLogin.PSWLogin.value.length == 0
    ) {
        alert("Riempire tutti i campi");
        event.preventDefault();
        return;
    }

    if (FormDatiLogin.PSWLogin.value.length < 12) {
        alert("Password errata..riprova");
        event.preventDefault();
        return;
    }
    if (!ContieneNumero(FormDatiLogin.PSWLogin.value)) {
        alert("Password errata..riprova");
        event.preventDefault();
        return;
    }

}



const FormDatiLogin = document.forms['FormLogin'];
FormDatiLogin.addEventListener('submit', Login);


const FormDati = document.forms['FormRegistrazione'];
FormDati.addEventListener('submit', VerificaDati);





function MostraUtenti(){
    
    fetch("http://localhost/hw1/ContaUtenti.php").then(onResponseUtenti).then(onJsonUtenti);

}

function onResponseUtenti(response){
    return response.json();
}


function onJsonUtenti(json){
    const SpanUtenti = document.querySelector("span");

    SpanUtenti.textContent = json[0];
}

MostraUtenti();
