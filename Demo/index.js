document.getElementById("add").addEventListener("click",()=>{
    const x=document.getElementById("first").value;
    const y=document.getElementById("second").value;
    const ans=Number (x)+ Number(y);
    document.getElementById("ans").innerHTML=ans

});
document.getElementById("sub").addEventListener("click",()=>{
    const x=document.getElementById("first").value;
    const y=document.getElementById("second").value;
    const ans=Number (x)- Number(y);
    document.getElementById("ans").innerHTML=ans

});
