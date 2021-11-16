var d3=new Date();
function start(){
d3.setFullYear(2021, 5, 11);
var m3=d3.getMonth();
var dd3=d3.getDate();
var g3=d3.getFullYear();
var data3=dd3+"."+m3+"."+g3;
var datum3=document.getElementById("datum3");
datum3.innerHTML=data3;
}
window.addEventListener("load",start,false);