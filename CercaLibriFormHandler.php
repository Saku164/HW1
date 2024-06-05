<?php 

$risposta = 0 ;


if(isset($_POST["ISBN"])){
    $curl = curl_init();

    curl_setopt($curl, CURLOPT_URL, 'https://openlibrary.org/subjects/'.$_POST["ISBN"].'.json');
    
    
    

    $risposta = curl_exec($curl);

        curl_close($curl);


        
}



?>

