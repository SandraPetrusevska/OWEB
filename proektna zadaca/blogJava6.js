var d6=new Date();
function start6(){
d6.setFullYear(2020, 7, 31);
var m6=d6.getMonth();
var dd6=d6.getDate();
var g6=d6.getFullYear();
var data6=dd6+"."+m6+"."+g6;
var datum6=document.getElementById("datum6");
datum6.innerHTML=data6;
}
window.addEventListener("load",start6,false);