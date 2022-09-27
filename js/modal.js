const firstName = document.forms["reserve"]["first"];               
const last = document.forms["reserve"]["last"];    
const email = document.forms["reserve"]["email"];  
const birthdate =  document.forms["reserve"]["birthdate"];  
const quantity = document.forms["reserve"]["quantity"]; 
// Get DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalclose = document.querySelectorAll(".close");
const modalthanks = document.querySelector(".thanks");
const modalSubmit = document.querySelector(".btn-submit");
const thanksClose = document.querySelector(".closeThanks");

document.getElementById("logo").addEventListener("click", editNav);


/* ---------- Modal Events---------- */

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalclose.forEach((close) => close.addEventListener("click", closeModal));
document.getElementById("reserve").addEventListener("submit", launchThanks);
thanksClose.addEventListener("click", closeThanks);


function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// launch thanks modal
function launchThanks(event) {
    const valid =  validate();
    //console.log(valid);
    if (valid) { 
      event.preventDefault();
      modalbg.style.display = "none";
      modalthanks.style.display = "block";
      reserve.reset();
      for (i=0; i<formData.length; i++) {
        formData[i].setAttribute("data-error-visible", "false");
      } 
    } 
    else {
      event.preventDefault();
      return valid 
    }  
}

// close form modal
function closeModal() {
  modalbg.style.display = "none";
  modalthanks.style.display = "none";
}

// close thanks modal
function closeThanks() {
  modalthanks.style.display = "none";
}

/* ---------- Validate form ---------- */

//Evaluate condition and set message error and its visibility wrt index
const validateEntry = (condition, message, index) =>{
  if (condition) {
    formData[index].setAttribute("data-error", message);
    formData[index].setAttribute("data-error-visible", "true");
    return false;
  }
  formData[index].setAttribute("data-error-visible", "false"); //in case correction is done on this entry (wrt index) but not on another one
  formData[index].setAttribute("data-error", ""); //idem & to remove space of unvisible text
  return true;   
}

//check first name entry
const checkFirstName = () =>{
  condition = firstName.value === "" || firstName.value.length < 2;
  return validateEntry(condition, "Veuillez indiquer votre prénom", 0);   
}
//check last name entry
const checkLastName = () =>{
  condition = last.value === "" || last.value.length < 2;
  return validateEntry(condition, "Veuillez indiquer votre nom",1);
}
//check email entry
const checkEmail = () =>{
  condition = email.value === "" || email.value.indexOf("@", 0) < 0 || email.value.indexOf(".", 0) < 0; //Find the first occurrence of "@"/".", starting at position 0
  return validateEntry(condition, "Mettez une adresse email valide.",2);
}
//check Birthdate entry
const checkBirthdate = () =>{
  condition = !birthdate.value;
  return validateEntry(condition, "Mettez une date.",3);
}
//check Quantity entry
const checkQuantity = () =>{
  condition = !quantity.value;
  return validateEntry(condition, "Mettez un nombre valide.",4);
}
//check Location entry
const checkLocation = () =>{
  condition = !(location1.checked || location2.checked || location3.checked || location4.checked || location5.checked || location6.checked);
  return validateEntry(condition, "Choisissez un tournoi.",5);
}
//check Accept conditions entry
const checkAccept = () =>{
  condition = !checkbox1.checked;
  return validateEntry(condition, "Veuillez accepter les conditions.",6);
}

//Evaluate if all entries are valid
function validate()                                    
{     
  c1=checkFirstName(); c2=checkLastName(); c3=checkEmail(); c4=checkBirthdate(); c5=checkQuantity(); c6=checkLocation(); c7=checkAccept(); //run all functions
  isValid = c1 && c2 && c3 && c4 && c5 && c6 && c7;  //evaluate if all entries (conditions c1-c7) are valid (!:stop at first false)   
  return  isValid;
}