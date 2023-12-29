let popup = document.getElementsByClassName("popup")[0];
let shadow = document.getElementsByClassName("shadow")[0];
let annuler = document.getElementsByClassName("annuler")[0];
let rej = document.getElementsByClassName("rej")[0];
let inscript = document.getElementsByClassName("inscrip")[0];
let dsi=document.getElementsByClassName("DSI")[0];
let ia=document.getElementsByClassName("AI")[0];
let cg=document.getElementsByClassName("CG")[0];
dsi.addEventListener('click',filiere1)
rej.addEventListener('click',afficher)
ia.addEventListener('click',filiere2)
cg.addEventListener('click',filiere3)

function afficher(){
    popup.style.display = 'block';
    shadow.style.display='block';
  


}
annuler.addEventListener('click',fermer)
function fermer(){
    popup.style.display='none';
    shadow.style.display='none';
   
}
inscript.addEventListener('click',inscrip)


function inscrip(){
    window.open('https://massar.men.gov.ma/Account', '_blank');
}

function filiere1() {
    window.location.href = 'DSI.html';
}


function inscrip(){
    window.open('https://massar.men.gov.ma/Account', '_blank');
}
function filiere2() {
    window.location.href = 'IA.html';
}
function filiere3() {
    window.location.href = 'CG.html';
}

