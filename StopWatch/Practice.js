window.onload = function() { 
var seconds = 0; 
var tens  = 0 ; 
var appendSeconds = document.getElementById("seconds") ; 
var appendTens = document.getElementById("tens"); 
var buttonStart= document.getElementById('button-start'); 
var buttonStop = document.getElementById('button-stop'); 
var buttonReset = document.getElementById('button-Reset'); 
var Interval ; 



buttonStart.onclick = function() 
 { 
        clearInterval(Interval); 
        Interval=setInterval(startTimer , 10 ) ; 
 }


 buttonStop.onclick = function()  { 
    clearInterval(Interval); 
 }


 buttonReset.onclick = function () { 
    clearInterval(Interval) ;
    seconds= "00" ; 
    tens = "00";  
    appendTens.innerHTML="0" +tens; 
    appendSeconds,innerHTML= seconds ; 

 }



 function startTimer() { 
    tens ++ ; 
    if(tens<=9){
        appendTens.innerHTML="0" + tens ; 
    }

    if(tens>9){
        appendTens.innerHTML=tens; 
    }

    if(tens>99) { 
        console.log("Hello world"); 
        seconds++ ; 
        appendTens="0"+  seconds ; 
        tens = 0 ; 
        appendTens=seconds; 
    }


 }

















}