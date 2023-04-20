function validateForm() {
  // Get the values of the input fields
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;
  var msg1 = document.getElementById("msg1")
 
  // Check if the name is not empty
  if (name == "") {
    msg1.innerHTML = "Name must be filled out"
    setTimeout(function(){
            msg1.innerHTML = ""
          },5000)
    return false;
  }
  //Check if the name contain any number
  if (/\d/.test(name)){
    msg1.innerHTML = "Name must be character"
    setTimeout(function(){
            msg1.innerHTML = ""
          },5000)
    return false
  }
  // Check if the email is valid
  var emailRegex =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailRegex.test(email)) {
    msg1.innerHTML = "Email must be a valid email address"
    setTimeout(function(){
            msg1.innerHTML = ""
          },5000)
    return false;
  }
  // Check if the Subject is not empty 
  if (subject == "") {
    msg1.innerHTML = "Subject must be filled out"
    setTimeout(function(){
            msg1.innerHTML = ""
          },5000)
    return false;
  }

  // Check if the Message is not empty 
  if (message == "") {
    msg1.innerHTML = "Message must be filled out"
    setTimeout(function(){
            msg1.innerHTML = ""
          },5000)
    return false;
  }
  // If all validations pass, return true to submit the form
  return true;
}