function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close");
const btnSubmit = document.querySelector(".btn-submit");
const form = document.getElementById('form');
const first = document.getElementById("first");
const last = document.getElementById("last");
const eMail = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const checkbox = document.getElementById("checkbox1");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
closeBtn.addEventListener("click", closeModal);

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// regex
function isEmail(eMail) {
  const regex = new RegExp("[a-zA-Z0-9\.]+@[a-zA-Z0-9\.\-]+\.[a-z]{2,5}");
	return regex.test(eMail);
}

// Function setErrorFor
function setErrorFor(input, message){
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  // add error message inside small
  small.innerText = message;

  // add error class
  formControl.className = "formData error";
}

// Function setSuccessFor
function setSuccessFor(input, message){
  const formControl = input.parentElement;
  const small = formControl.querySelector("small")

  // remove error message inside small
  small.innerText = message;
  // remove error class
  formControl.className = "formData";
}

// Function isValid
function isFirstValid(first){
  const firstNameValueTrim = first.value.trim();
  const firstNameValue = first.value.trim();
  let result = (firstNameValueTrim != "" || firstNameValue.length > 2);
    if (!result){ 
      // let errorMessage = document.querySelector(`.error[data-error="${name}"]`);
      setErrorFor(first, 'Veuillez renseigner votre prénom')
      return false
    } else {
      setSuccessFor(first, "")
    }
    return true
}

function isLastValid(last){
  const lastNameValueTrim = last.value.trim();
  const lastNameValue = last.value.trim();
  let result = (lastNameValueTrim != "" || lastNameValue.length > 2);
    if (!result){ 
      // let errorMessage = document.querySelector(`.error[data-error="${name}"]`);
      setErrorFor(last, 'Veuillez renseigner votre nom')
      return false
    } else {
      setSuccessFor(last, "")
    }
    return true
}

/**
 * Vérifier que l'email donné est valide et conforme au regex
 * 
 * @param  {HTMLElement} eMail 
 * @return {boolean} email valide ou non
 */
function isEmailValid(eMail){
  const eMailValueTrim = eMail.value.trim();
  let result = (eMailValueTrim != "");
    if (!result && !isEmail(eMailValueTrim)){ 
      // let errorMessage = document.querySelector(`.error[data-error="${name}"]`);
      setErrorFor(eMail, 'Veuillez renseigner un email valide')
      return false
    } else {
      setSuccessFor(eMail, "")
    }
    return true
}

function isBirthdateValid(birthdate){
  const birthdateValueTrim = birthdate.value.trim();
  let result = (birthdateValueTrim != "");
    if (!result){ 
      // let errorMessage = document.querySelector(`.error[data-error="${name}"]`);
      setErrorFor(birthdate, 'Veuillez renseigner votre date de naissance')
      return false
    } else {
      setSuccessFor(birthdate, "")
    }
    return true
}

function isQuantityValid(quantity){
  const quantityValueTrim = quantity.value.trim();
  let result = (quantityValueTrim != "");
    if (!result){ 
      // let errorMessage = document.querySelector(`.error[data-error="${name}"]`);
      setErrorFor(quantity, 'Veuillez renseigner un nombre')
      return false
    } else {
      setSuccessFor(quantity, "")
    }
  return true
}

/*function isLocationValid(value){
  return (value.trim() != "");
};*/

function isCheckboxValid(checkbox){
  let result = document.getElementById("checkbox1").checked;
  if (!result){
    setErrorFor(checkbox, "Veuillez accepter les conditions d'utilisation");
    return false
  } else {
    setSuccessFor(checkbox, "")
  }
  return true
}

function validate(){
  // return every CheckFunction
  return isFirstValid(first) && isLastValid(last) && isEmailValid(eMail) &&
  isBirthdateValid(birthdate) && isQuantityValid(quantity) && isCheckboxValid(checkbox);
}


/*String.prototype.capitalizeFirstLetter = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
}*/

/*form.addEventListener('submit', function validate(e){

  const firstNameValue = first.value.trim();
  const lastNameValue = last.value.trim();
  const eMailValue = eMail.value.trim();
  const birthdateValue = birthdate.value.trim();
  const quantityValue = quantity.value.trim();
  const checkboxChecked = checkbox.checked;

  if(firstNameValue == "" || firstNameValue < 2){
    setErrorFor(first, "Veuillez renseigner votre prénom");
    e.preventDefault();
  } else {
      setSuccessFor(first, "");
  }
  if (lastNameValue == ""  || lastNameValue < 2) {
    setErrorFor(last, "Veuillez renseigner votre nom");
    e.preventDefault();
  } else {
      setSuccessFor(last, "");
  }
  if (eMailValue == "" || !isEmail(eMailValue)){
    setErrorFor(eMail, "Veuillez renseigner votre email");
    e.preventDefault();
  } else {
      setSuccessFor(eMail, "");
  }
  if(birthdateValue == ""){
    setErrorFor(birthdate, "Veuillez renseigner votre date de naissance");
    e.preventDefault();
  } else {
      setSuccessFor(birthdate, "");
  }
  if(quantityValue == ""){
    setErrorFor(quantity, "Veuillez renseigner le nombre");
    e.preventDefault();
  } else {
      setSuccessFor(quantity, "");
  }
  if(checkboxChecked == false){
    setErrorFor(checkbox, "Veuillez accepter les conditions d'utilisation");
    e.preventDefault();
  } else {
      setSuccessFor(checkbox, "");
  }
});*/


  /*if(firstNameValue == "" || firstNameValue < 2){
    setErrorFor(first, "Veuillez renseigner votre prénom");
    return false
  } else {
      setSuccessFor(first, "");
  }
  if (lastNameValue == ""  || lastNameValue < 2) {
      setErrorFor(last, "Veuillez renseigner votre nom");
      return false
  } else {
      setSuccessFor(last, "");
  }
  if (eMailValue == "" || !isEmail(eMailValue)){
      setErrorFor(eMail, "Veuillez renseigner votre email");
      return false
  } else {
      setSuccessFor(eMail, "");
  }
  if(birthdateValue == ""){
      setErrorFor(birthdate, "Veuillez renseigner votre date de naissance");
      return false
  } else {
      setSuccessFor(birthdate, "");
  }
  if(quantityValue == ""){
    setErrorFor(quantity, "Veuillez renseigner le nombre");
    return false
  } else {
      setSuccessFor(quantity, "");
  }
  if(!checkboxChecked){
    setErrorFor(checkbox, "Veuillez accepter les conditions d'utilisation");
    return false
  } else {
      setSuccessFor(checkbox, "");
  }
  return true*/


  //let eMailValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  //let formData = new FormData(document.getElementById("form"));
  //formData.get(value, name)
  //console.log(formData.get("first"));
  //let isFormValid = true;
  


// POUR CHAQUE name et value D'UNE entrée du formData
  /*for (let [name, value] of formData.entries()){
    // On log
    console.log(name, value);
    let errorMessage = document.querySelector(`.error[data-error="${name}"]`);
    errorMessage.style.display = "none";
    // SI la fonction isXValid est fausse ALORS
    if (!window[`is${name.capitalizeFirstLetter()}Valid`](value)){
      // On affiche le message d'erreur
      errorMessage.style.display = "inline";
      // On passe le validateur à false
      isFormValid = false
      // On renvoit false
      return isFormValid 
    }
  }*/

/*
  if(firstName.value.trim() != "" && firstName.value.length < 2){
    errorMessage.style.display = "inline"
    return false; 
  } if (lastName.value == "" || lastName.value.length < 2){
    firstName.focus();
    errorMessage.style.display = "inline"
    return false; 
  } if (eMail.value == "" || eMailValid == false){
    firstName.focus();
    errorMessage.style.display = "inline"
    return false; 
  } if (birthDate.value == ""){
    firstName.focus();
    errorMessage.style.display = "inline"
    return false; 
  }  if (tournament.value == ""){
    firstName.focus();
    errorMessage.style.display = "inline"
    return false; 
  } if (location.value == ""){
    firstName.focus();
    errorMessage.style.display = "inline"
    return false; 
  }  
  else {
    alert("Merci ! Votre réservation a été reçue")
    return true
  }*/
  