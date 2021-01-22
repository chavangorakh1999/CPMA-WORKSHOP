document.getElementById("vibration").addEventListener("click",vibration);
document.getElementById("vibrationPattern").addEventListener("click",vibrationPattern);

function vibration(){
    alert("Hi");
    var time=3000;
    navigator.vibrate(time);
}

function vibrationPattern(){
    alert("Hi");
    var pattern=[3000,3000,2000,1000,1000];
    navigator.vibrate(pattern);
}