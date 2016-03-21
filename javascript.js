window.addEventListener("load",init);
function init() { //alert("loaded");
    document.getElementById("Submit").addEventListener("click", showName);
    document.getElementById("Password").addEventListener("keyup", passwordChecker);
    document.getElementById("FirstName").addEventListener("keyup", focus);
    
    for (var i = 0; i < document.getElementsByClassName("fields").length; i++)
    {
        document.getElementsByClassName("fields")[i].addEventListener("focus", focusFunction1);
        document.getElementsByClassName("fields")[i].addEventListener("blur", blurFunction1);
       

    }


}
function showName()
{
    var firstName=document.getElementById("FirstName");
    var lastName=document.getElementById("LastName");
    
    if(firstName && lastName) {
        firstName = firstName.value;
        lastName = lastName.value;
        if (firstName && lastName) {
            var fullName = firstName + "  " + lastName;
            document.getElementsByTagName("span")[5].innerHTML = fullName;
        }

        else if(!(firstName)) {
            document.getElementById("FirstName").style.background = "red";
            document.getElementById("firstnameerror").innerHTML = "empty field";
        }
        else if(!(lastName)) {
            document.getElementById("LastName").style.background = "red";
            document.getElementById("lastnameerror").innerHTML = "empty field";
        }

        
    }
   



}
function passwordChecker() {
   var password= document.getElementById("Password");


    if(password)
    {
        password=password.value;
        if(password.length<=3)
        {

            document.getElementsByTagName("span")[3].innerHTML='<img src=\"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRjDbHCr2e8kTdGTucHbeIEu_WoA2O8bvxAG6Sv_KBn7YdMc1kaG0-E0A\"  alt="Weak" style="width:50px;height:50px;"> Weak</img>';

            
           

        }
        else if(password.length>3&&password.length<8)
        {

            document.getElementsByTagName("span")[3].innerHTML='<img src=\" https://pixabay.com/static/uploads/photo/2013/07/18/10/56/smiley-163510_960_720.jpg  \"  alt="Medium" style="width:50px;height:50px;">Medium</img>';

        }
        else if(password.length>8)
        {
          
            document.getElementsByTagName("span")[3].innerHTML='<img src=\"http://images.clipartpanda.com/green-smiley-face-clip-art-emotions-happy-green-face-md.png\"  alt="Strong" style="width:50px;height:px;">Strong</img>';
            

        }
    }

    
    else
    {
        alert("enter password...");
    }

}



function focus() {
    var firstName = document.getElementById("FirstName").value;
    
        if (firstName.length < 5 && firstName.length>0) {
            
            document.getElementById("firstnameerror").innerHTML = "First Name Can't Be Less than 5";

           
        }  
            
  else
            document.getElementById("firstnameerror").innerHTML = "";



}

function focusFunction1() {
    // Focus = Changes the background color of input to yellow
    
    document.getElementById(this.id).style.background = "yellow";

}

function blurFunction1() {
    // No focus = Changes the background color of input to red
    document.getElementById(this.id).style.background = "white";
}
