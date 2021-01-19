

var score=0;
document.getElementById("calculate").addEventListener("click",()=>{
   
    document.getElementById("score").innerHTML=score

});


if(document.getElementById("ans11").checked){
    if(document.getElementById("ans11").value=="4"){
        score+=1;
    };
}