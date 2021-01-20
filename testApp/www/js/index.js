var local=localStorage;

function getDetails(){

    var city=document.getElementById("city").value;
    local.setItem("city",city);
    var name= document.getElementById("name").value;
    local.setItem("name",name);
    //Getting values of checkBox
    var ele = document.getElementsByName('gender'); 
     var gender="";         
    for(i = 0; i < ele.length; i++) { 
        if(ele[i].checked) 
        
                gender += "Gender: "+ele[i].value; 
    } 
    local.setItem("gender",gender);

    var hobbie="";
    var readingCheckbox = document.getElementById('reading');
    if (readingCheckbox.checked) 
    {
        hobbie =readingCheckbox.value;
    }
    var swimmingCheckbox = document.getElementById('swimming');
    if (swimmingCheckbox.checked) 
    {
        hobbie += " , "+swimmingCheckbox.value;
    }
    var yogaCheckbox = document.getElementById('yoga');
    if (yogaCheckbox.checked) 
    {
        hobbie += " , "+yogaCheckbox.value;
    }
    local.setItem("hobbie",hobbie);
    document.getElementById("intro").innerHTML= "Name : "+local.getItem("name")+"| "+local.getItem("gender")+"| Hobbies:"+local.getItem("hobbie")+"| City:"+local.getItem("city");

} 

