var d5=new Date();
d5.setFullYear(2020, 9, 1);
function start(){
var m5=d5.getMonth();
var dd5=d5.getDate();
var g5=d5.getFullYear();
var data5=dd5+"."+m5+"."+g5;
var datum5=document.getElementById("datum5");
datum5.innerHTML=data5;
}
window.addEventListener("load",start,false);