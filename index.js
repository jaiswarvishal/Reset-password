// Code-Descriptions
//step 1: Created a JavaScript function--> verifyPassword() 
//step 2: it gets the values of two password input fields from the HTML document with the getElementById() method and assigns them to the pw and cpw variables.
//step 3: if the pw field is empty --> show the error "fill the password"
//stpe 4: checks length of the password at least 8 characters long and no more than 15 characters long. If not, show the error message.
//step 5: checks if the password contains at least one number, uppercase letter, lowercase letter, and special character (such as !, @, #, etc.) using regular expressions. If any of these conditions are not met, it sets an appropriate error message
//step 6: checks if the cpw field is empty and also checks pw=cpw, if not-->show the error message
//step 7: If all the above conditions are satisfied, displays a success message using the alert() function



function verifyPassword() {  
  let pw = document.getElementById("craetePassword").value;
  let cpw = document.getElementById("confirmPassword").value; 

  //check empty password field  
  if(pw == "") {  
     document.getElementById("message1").innerHTML = "**Fill the password please!";  
     return false;  
  } 

   //minimum password length validation
  if(pw.length < 8) {
     document.getElementById("message1").innerHTML = "**Password length must be atleast 8 characters";
     return false;
  }

//maximum length of password validation
   if(pw.length > 15) {
     document.getElementById("message1").innerHTML = "**Password length must not exceed 15 characters";
     return false;
  }

  //Atleast one Number in password 
   if(pw.search(/[0-9]/) == -1) {
     document.getElementById("message1").innerHTML = "**Atleast One number in password";
     return false;
  }

  //One Uppercase character
   if(pw.search(/[A-Z]/) == -1) {
     document.getElementById("message1").innerHTML = "**Atleast One Uppercase alphabate charater";
     return false;
  }

  //One Lowercase character
   if(pw.search(/[a-z]/) == -1) {
     document.getElementById("message1").innerHTML = "**Atleast One Lowercase alphabate charater";
     return false;
  }

  //  
  //One Special character  " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
   if(pw.search(/[ !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/) == -1) {
     document.getElementById("message1").innerHTML = "**Atleast One Special charater";
     return false;
  }
  else{
    document.getElementById("message1").innerHTML ="";
  }
  
   //check empty confirm password field
     if(cpw == "") {
      document.getElementById("message2").innerHTML = "**Enter the confirm password please!";
      return false;
    } 
  
       if(pw != cpw) {
      document.getElementById("message2").innerHTML = "**Passwords are not same";
      return false;
    }

  else {
     alert ("Your new password successfully created");
      // document.write("New password successfully created");
  }
}