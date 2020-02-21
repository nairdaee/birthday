//this is the main function
function execute() {
    var errormessage = "";

//these are the control flows of that determine when an error message is to pop up   
      if(document.getElementById("birthyear").value == "") {
        errormessage += "Please enter your year of birth \n";
        document.getElementById("birthyear").style.borderColor = "red";
       }
      if(document.getElementById("birthmonth").value == "") {
        errormessage += "Please enter your month of birth \n";
        document.getElementById("birthmonth").style.borderColor = "red";
       }
      if(document.getElementById("birthday").value == "") {
        errormessage += "Please enter your day of birth \n";
        document.getElementById("birthday").style.borderColor = "red";
       }
      if (errormessage != "") {
        alert(errormessage)
        return false;
       }

//These are defined variables for the input data which will actually determine the day  
    var year = document.getElementById("birthyear").value;
    var month = document.getElementById("birthmonth").value;
    var day = document.getElementById("birthday").value;
    var d = new Date()
      d .setDate(parseInt(day)) //this object allows us to set the day of the month and so on
      d .setMonth(parseInt(month)) 
      d .setFullYear(parseInt(year))
 
 
//if else for the variables above
    if(year <=0){
        alert("Enter valid year i.e 2001,1998....");
        return false;
      }
    if(month >12){
        alert("Enter valid month i.e 1 to 12");
        return false;
      }
    if(day >31){
        alert("Enter valid birth day i.e 1 to 31");
        return false;
      }

    var birthday = d .getDay(0)
   
//these are the arrays for the actual Akan names
    var maleOnes = ["Kwasi", "Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
    var femaleOnes = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]
    
    
//these are the conditions for the male and female radio buttons
      if (male. checked ==true){
        var name = ((maleOnes[birthday]) .toString())
        alert(name)
      } else if (female. checked ==true) {
        var name = ((femaleOnes[birthday]) .toString())
        alert(name)
      } else {
        alert("Please input valid information")
      }
 
//attempt to remove 405 error
     document.getElementById("burron").addEventListener("click" ,function(event){
     event.preventDefault()
     })
}
