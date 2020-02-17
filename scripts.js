var Century, Year, Month, Day, error_message, weekDay, male, female
//inputData
function inputData(){
    var Century = document.getElementById("century"). value;
    var Year = document.getElementById("year"). value;
    var Month = document.getElementById("month"). value;
    var Day = document.getElementById("day"). value;
    var Buttons = document.getElementsByClassName("button");
    var error_message = document.getElementById("error_message");
    var text;

    error_message.style.padding = "10px";

    if(Century <==0 || Century>20){
        text = "Please Enter Valid Century i.e 18,19 or 20";
        error_message.innerHTML = text;
        return false;
    }
    if(Year.length != 2){
        text = "Please Enter Valid Year i.e 98,99 or 08";
        error_message.innerHTML = text;
        return false;
    }
    if(isNan(Month)){
        text = "Please Enter Correct Month Value";
        error_message.innerHTML = text;
        return false;
    }
    if(isNan(Day)){
        text = "Please Enter Day Using Number";
        error_message.innerHTML = text;
        return false;
    }
    return false;
}
//calculation of the data
function calculateDay(){
    inputData();
       weekDay = (((Century/4)-2*Century-1)+((5*Year/4))+((26*(Month +1)/10))+Day) % 7;
       console.log(weekDay);
       return (Math.floor(weekDay));
       if (weekDay < 0) {
           weekDay = weekDay * -1;
          }
       else if (weekDay > 0){
       return weekDay;
          }
function confirmDay(){
   weekday = calculateDay();
      checkGender();
   console.log("Day confirmation function works")
        }
    }
//arrays
let weekDays = [ "sunday", "monday", "tuesday", "wednesday","thursday", "friday","saturday"];
let maleNames = ["Kwasi","Kwadwo", "Kwabena", "Kwaku", "Yaw","Kofi","Kwame"];
let femaleNames = ["Akosua","Adwoa", "Abenaa","Akua", "Yaa", "Afua","Ama"];

 //for the male and female buttons
 function checkGender(){
    var gen = document.getElementsByName("gend");
    if(gen[0].checked == true){
        var Gender = "male";
    }
    else if(gen[1].checked == true){
        var Gender = "female";
    }
        else {
         console.log("pass");

    }
 }
  switch(Gender){
      case Gender = "male":
          switch(weekday){
              case(0):
              document.getElementById("result").innerHTML = "You were born on a SUNDAY." + " " + "Your Akan name is " + maleNames[0];
              break;
              case(1):
              document.getElementById("result").innerHTML = "You were born on a MONDAY." + " " + "Your Akan name is " + maleNames[1];
              break;
              case(2):
              document.getElementById("result").innerHTML = "You were born on a TUESDAY." + " " + "Your Akan name is " + maleNames[2];
              break;
              case(3 || -3):
              document.getElementById("result").innerHTML = "You were born on a WEDNESDAY." + " " + "Your Akan name is " + maleNames[3];
              break;
              case(4 || -4):
              document.getElementById("result").innerHTML = "You were born on a THURSDAY." + " " + "Your Akan name is " + maleNames[4];
              break;
              case(5 || -5):
              document.getElementById("result").innerHTML = "You were born on a FRIDAY." + " " + "Your Akan name is " + maleNames[5];
              break;
              case(6 || -6):
              document.getElementById("result").innerHTML = "You were born on a SATURDAY." + " " + "Your Akan name is " + maleNames[6];
              break;
              default:
                  console.log("pass");
             
      }
      break;
      case Gender = "female":
        switch(weekday){
            case(0 || -0):
            document.getElementById("result").innerHTML = "You were born on a SUNDAY." + " " + "Your Akan name is " + femaleNames[0];
            break;
            case(1 || -1):
            document.getElementById("result").innerHTML = "You were born on a MONDAY." + " " + "Your Akan name is " + femaleNames[1];
            break;
            case(2 || -2):
            document.getElementById("result").innerHTML = "You were born on a TUESDAY." + " " + "Your Akan name is " + femaleNames[2];
            break;
            case(3 || -3):
            document.getElementById("result").innerHTML = "You were born on a WEDNESDAY." + " " + "Your Akan name is " + femaleNames[3];
            break;
            case(4 || -4):
            document.getElementById("result").innerHTML = "You were born on a THURSDAY." + " " + "Your Akan name is " + femaleNames[4];
            break;
            case(5 || -5):
            document.getElementById("result").innerHTML = "You were born on a FRIDAY." + " " + "Your Akan name is " + femaleNames[5];
            break;
            case(6 || -6):
            document.getElementById("result").innerHTML = "You were born on a SATURDAY." + " " + "Your Akan name is " + femaleNames[6];
            break;
            default:
                console.log("pass"); 
  }
  }