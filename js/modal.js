function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

document.getElementById("logo").addEventListener("click", editNav);

// Get DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalclose = document.querySelectorAll(".close");
const modalthanks = document.querySelector(".thanks");
const modalSubmit = document.querySelector(".btn-submit");
const thanksClose = document.querySelector(".closeThanks");


/* ---------- Modal Events---------- */

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalclose.forEach((close) => close.addEventListener("click", closeModal));
document.getElementById("reserve").addEventListener("submit", launchThanks);
thanksClose.addEventListener("click", closeThanks);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// launch thanks modal
function launchThanks(event) {
    
    const valid =  validate();
    console.log(valid);
    if (valid == true) { 
      event.preventDefault();
      modalbg.style.display = "none";
      modalthanks.style.display = "block"; 
    } 
    else {
      event.preventDefault();
      return validate() 
    }
       
    
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
  modalthanks.style.display = "none";
}

// close thanks form
function closeThanks() {
  modalthanks.style.display = "none";
  document.getElementById('reserve').submit();
}

/* ---------- Validate form ---------- */


function validate()                                    
{ 
    var name = document.forms["reserve"]["first"];               
    var last = document.forms["reserve"]["last"];    
    var email = document.forms["reserve"]["email"];  
    var birthdate =  document.forms["reserve"]["birthdate"];  
    var quantity = document.forms["reserve"]["quantity"]; 
    
    for (i=0; i<7; i++) {
      formData[i].setAttribute("data-error-visible", "false");
    }
    

    if (name.value == "" || name.value.length < 2)                                  
    { 
        formData[0].setAttribute("data-error", "Veuillez indiquer votre prénom");
        formData[0].setAttribute("data-error-visible", "true"); 
        return false; 
    }
    if (last.value == "" || name.value.length < 2)                                  
    { 
        formData[1].setAttribute("data-error", "Mettez votre nom.");
        formData[1].setAttribute("data-error-visible", "true"); 
        return false; 
    }            
    if (email.value == "" || email.value.indexOf("@", 0) < 0 || email.value.indexOf(".", 0) < 0)                                   
    { 
        formData[2].setAttribute("data-error", "Mettez une adresse email valide.");
        formData[2].setAttribute("data-error-visible", "true"); 
        return false; 
    }    
    if ( !birthdate.value )                 
    { 
        formData[3].setAttribute("data-error", "Mettez une date.");
        formData[3].setAttribute("data-error-visible", "true"); 
        birthdate.focus();
        return false; 
    } 
    if ( !quantity.value)                 
    { 
        formData[4].setAttribute("data-error", "Mettez un nombre valide.");
        formData[4].setAttribute("data-error-visible", "true"); 
        return false; 
    } 
    if ( !(location1.checked || location2.checked || location3.checked || location4.checked || location5.checked || location6.checked) )                 
    { 
        formData[5].setAttribute("data-error", "Choisissez un tournoi.");
        formData[5].setAttribute("data-error-visible", "true"); 
        return false; 
    }  
    if ( !checkbox1.checked )                 
    { 
        formData[6].setAttribute("data-error", "Veuillez accepter les conditions.");
        formData[6].setAttribute("data-error-visible", "true"); 
        return false; 
    }
    
    return true; 
}