function changeBtnText(id) {
    var elem = document.getElementById(id).innerHTML;
    if (elem== "Show More Information") 
        document.getElementById(id).innerHTML="Hide Information";
    else 
        document.getElementById(id).innerHTML= "Show More Information";
}

function showText(id) {
    var visibility = document.getElementById(id).style.display;
    if (visibility=="block"){
        document.getElementById(id).style.display="none"; 
    }else{
        document.getElementById(id).style.display="block";
    }
}

