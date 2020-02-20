function execute() {
    var errormessage = "";
    
    if(document.getElementById("hname").value == "") {
        errormessage += "Please enter your year of birth \n";
        document.getElementById("hname").style.borderColor = "red";
      }
    if(document.getElementById("iname").value == "") {
        errormessage += "Please enter your month of birth \n";
        document.getElementById("iname").style.borderColor = "red";
      }
    if(document.getElementById("jname").value == "") {
        errormessage += "Please enter your day of birth \n";
        document.getElementById("jname").style.borderColor = "red";
      }
    if (errormessage != "") {
        alert(errormessage)
        return false;
      }
      
      var year = document.getElementById("hname").value;
      var month = document.getElementById("iname").value;
      var day = document.getElementById("jname").value;
      var d = new Date()
      d .setDate(parseInt(day))
      d .setMonth(parseInt(month)) 
      d .setFullYear(parseInt(year))
    
      var akan = d .getDay(0)
    
      var akan1 = ["Kwasi", "Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
      var akan2 = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]
    
      if (male. checked ==true){
        var name = ((akan1[akan]) .toString())
        alert(name)
      } else if (female. checked ==true) {
        var name = ((akan2[akan]) .toString())
        alert(name)
      } else {
        alert("Input Correct information")
      }
 }
