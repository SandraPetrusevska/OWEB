function oceni(){
    var rezultat=document.getElementById("rezultat");
    var ocenka=document.getElementById("ocenka");
    var broj=parseInt(ocenka.value);
    if(broj==1){
        rezultat.innerHTML="Лошо!";
    }
    if(broj==2){
        rezultat.innerHTML="Може и подобро!";
    }
    if(broj==3){
        rezultat.innerHTML="Добро!";
    }
    if(broj==4){
        rezultat.innerHTML="Супер!";
    }
    if(broj==5){
        rezultat.innerHTML="Одлично!";
    }
    }
function start(){
    var potvrda=document.getElementById("potvrda");
    potvrda.addEventListener("click",oceni,false);
}
window.addEventListener("load",start,false);