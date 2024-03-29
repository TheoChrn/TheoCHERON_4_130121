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
  const btnValidate = document.querySelector(".btn-validate");
  const confirmedMessage = document.querySelector(".submitMessage")
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
  btnValidate.addEventListener("click", closeModal);

// close modal form
  function closeModal() {
    modalbg.style.display = "none";
    form.style.display="block";
    confirmedMessage.style.display="none";
  }

// Show div
  btnSubmit.addEventListener("click", validateConfirmed);
  function validateConfirmed(){
    if(validate() == true){
      form.style.display="none";
      confirmedMessage.style.display="flex";
    }
  }

// Block page refresh
  function handleForm(event){ 
    event.preventDefault(); 
  } 
  form.addEventListener('submit', handleForm);


// regex
  function isEmail(eMail) {
    const regex = new RegExp(/[a-zA-Z0-9\.]+@[a-zA-Z0-9\.\-]+\.[a-z]{2,5}/);
    return regex.test(eMail);
  }

  function isQuantity(quantity){
    const regex = new RegExp(/[0-9]{1,2}/);
    return regex.test(quantity);
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
  /**
   * Vérifier que l'email donné est valide et conforme au regex
   * 
   * @param  {HTMLElement} first 
   * @return {boolean} prénom valide ou non
   */
    function isFirstValid(first){
      const firstNameValueTrim = first.value.trim();
      const firstNameValue = first.value.trim();
      let result = (firstNameValueTrim != "" || firstNameValue.length > 2);
        if (!result){ 
          setErrorFor(first, 'Veuillez renseigner votre prénom')
          return false
        } else {
          setSuccessFor(first, "")
        }
        return true
    }

  /**
   * Vérifier que l'email donné est valide et conforme au regex
   * 
   * @param  {HTMLElement} last 
   * @return {boolean} nom valide ou non
   */
    function isLastValid(last){
      const lastNameValueTrim = last.value.trim();
      const lastNameValue = last.value.trim();
      let result = (lastNameValueTrim != "" || lastNameValue.length > 2);
        if (!result){ 
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
        if (!result || !isEmail(eMailValueTrim)){ 
          setErrorFor(eMail, 'Veuillez renseigner un email valide')
          return false
        } else {
          setSuccessFor(eMail, "")
        }
        return true
    }

  /**
   * Vérifier que l'email donné est valide et conforme au regex
   * 
   * @param  {HTMLElement} birthdate 
   * @return {boolean} date de naissance valide ou non
   */
    function isBirthdateValid(birthdate){
      const birthdateValueTrim = birthdate.value.trim();
      let result = (birthdateValueTrim != "");
        if (!result){ 
          setErrorFor(birthdate, 'Veuillez renseigner votre date de naissance')
          return false
        } else {
          setSuccessFor(birthdate, "")
        }
        return true
    }

  /**
   * Vérifier que l'email donné est valide et conforme au regex
   * 
   * @param  {HTMLElement} quantity 
   * @return {boolean} nombre valide ou non
   */
    function isQuantityValid(quantity){
      const quantityValueTrim = quantity.value.trim();
      let result = (quantityValueTrim != "");
        if (!result || !isQuantity(quantityValueTrim)){ 
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

  /**
   * Vérifier que l'email donné est valide et conforme au regex
   * 
   * @param  {HTMLElement} checkbox 
   * @return {boolean} la case est cochée ou non
   */
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

  // Retourner toutes les fonctions de validation
    function validate(){
      // return every CheckFunction
      return isFirstValid(first) && isLastValid(last) && isEmailValid(eMail) &&
      isBirthdateValid(birthdate) && isQuantityValid(quantity) && isCheckboxValid(checkbox);
    }