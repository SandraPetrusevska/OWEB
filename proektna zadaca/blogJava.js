var d=new Date();
function start(){
d.setFullYear(2021, 11, 01);
var m=d.getMonth();
var dd=d.getDate();
var g=d.getFullYear();
var data=dd+"."+m+"."+g;
var datum=document.getElementById("datum");
datum.innerHTML=data;
}
window.addEventListener("load",start,false);