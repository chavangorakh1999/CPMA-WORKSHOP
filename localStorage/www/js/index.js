document.getElementById("b1").addEventListener("click",f1);
document.getElementById("b2").addEventListener("click",f2);
var l=localStorage;
function f1(){
l.setItem("name","Gorakh");
l.setItem("address","Kharadi");

}
function f2(){
alert(l.getItem("name"));
alert(l.getItem("address"));
}