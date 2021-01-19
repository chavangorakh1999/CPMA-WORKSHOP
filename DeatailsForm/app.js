function getDetails(){

    var city=document.getElementById("city").value;
    
    var name= document.getElementById("name").value;
    
    //Getting values of checkBox
    var ele = document.getElementsByName('gender'); 
     var gender="";         
    for(i = 0; i < ele.length; i++) { 
        if(ele[i].checked) 
        
                gender += "Gender: "+ele[i].value; 
    } 
    // alert(gender);

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

    document.getElementById("intro").innerHTML= "Name : "+name+"| "+gender+"| Hobbies:"+hobbie+"| City:"+city;

} 