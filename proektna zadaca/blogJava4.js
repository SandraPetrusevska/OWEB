var d4=new Date();
function start(){
d4.setFullYear(2020, 11, 19 );
var m4=d4.getMonth();
var dd4=d4.getDate();
var g4=d4.getFullYear();
var data4=dd4+"."+m4+"."+g4;
var datum4=document.getElementById("datum4");
datum4.innerHTML=data4;
}
window.addEventListener("load",start,false);