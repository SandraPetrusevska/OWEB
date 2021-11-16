var d2=new Date();
d2.setFullYear(2021, 8, 8);
function start(){
var m2=d2.getMonth();
var dd2=d2.getDate();
var g2=d2.getFullYear();
var data2=dd2+"."+m2+"."+g2;
var datum2=document.getElementById("datum2");
datum2.innerHTML=data2;
}
window.addEventListener("load",start,false);