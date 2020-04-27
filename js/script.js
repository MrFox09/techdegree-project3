/*jshint esversion: 6 */


const jobRoleOptions = document.querySelector('#title');
const designOptions = document.querySelector('#design');
const colorOptions = document.querySelector('#color');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#mail');
const creditCardNumberInput = document.querySelector('#cc-num');
const zipInput = document.querySelector('#zip');
const cvvInput = document.querySelector('#cvv');

//*** Job-Role Section ***//

// set the focus to the first input field "Name" with jQuery
$(document).ready(() => {
  $("#name").focus();
});


//add Event Listener to the Job Role section and if "other" is chosen then a text input field show up

//initialy hide the additional text input field for other selection in Job Role menu
$('#other-titles').hide();

jobRoleOptions.addEventListener('change', () => {

  if (document.querySelector('option[value="other"]').selected === true) {
    $('#other-titles').show();

  } else {
    $('#other-titles').hide();

  }
});


//*** T-Shirt Info section ***//

//function
//to show the right T-shirt colors depending on which design is chosen
const colorDiv = document.querySelector('#colors-js-puns');

const selectColorOptions = (design) => {
  for (let i = 0; i < color.length; i++) {



    if (design === 'Select Theme') {
      colorDiv.style.display = 'none';

      color[i].hidden = true;
      color[0].selected = true;
      color[0].textContent = 'Please select a design';


    } else if (design === 'js puns') {
      colorDiv.style.display = '';
      color[i].hidden = true;
      color[0].selected = true;
      color[0].textContent = 'Cornflower Blue (JS Puns shirt only)';
      color[0].hidden = false;
      color[1].hidden = false;
      color[2].hidden = false;



    } else if (design === 'heart js') {
      colorDiv.style.display = '';
      color[i].hidden = true;
      color[0].selected = true;
      color[0].innerHTML = 'Tomato (I &#9829; JS shirt only)';
      color[3].hidden = false;
      color[4].hidden = false;
      color[5].hidden = false;


    } else {
      selectColorOptions('Select Theme');
    }


  }
};
//call the function for initial state
selectColorOptions('Select Theme');

// event Listener for the designOptions and call the selectColorOptions function
// to show the right T-shirt colors

designOptions.addEventListener('change', (event) => {

  selectColorOptions(event.target.value);



});

//*** Register for Activities Section***//

// select every Activity option
const registerActivities = document.querySelectorAll('.activities input');
const activityFieldset = document.querySelector('.activities');

// sum the total costs and create a div to show the total costs

let totalCost = 0;
const costDiv = document.createElement('div');
costDiv.textContent = 'Total $ ' + totalCost;
costDiv.className = 'costDiv';
activityFieldset.appendChild(costDiv);

//select the created div to change the price text
const lastCostDiv = document.querySelector('.costDiv');

//event Listener for Activity checkboxes

activityFieldset.addEventListener('change', (event) => {

  const clicked = event.target;
  const clickedTypeDate = clicked.getAttribute('data-day-and-time');
  const clickedTypeCost = clicked.getAttribute('data-cost');


  // when the box is checked the cost adds to totalCost if not then it will be substracted
  if (clicked.checked) {

    totalCost = totalCost + parseInt(clickedTypeCost, 10);
    lastCostDiv.textContent = 'Total $ ' + totalCost;
    document.querySelector('#error-checkbox').style.display = 'none';

  } else if (clicked.checked !== true) {

    totalCost = totalCost - parseInt(clickedTypeCost, 10);
    lastCostDiv.textContent = 'Total $ ' + totalCost;

  }


  //loop through the wohle activity options
  for (let i = 0; i < registerActivities.length; i++) {
    //get the date and time
    const checkboxType = registerActivities[i].getAttribute('data-day-and-time');

    // if the same date and time matches and the clicked option is not the loops current iteration
    if (clickedTypeDate === checkboxType && clicked !== registerActivities[i]) {
      //and the option is clicked disable the "other" button(s)
      if (clicked.checked) {
        registerActivities[i].disabled = true;
        registerActivities[i].parentElement.style.color = "red";

      } else {

        registerActivities[i].disabled = false;
        registerActivities[i].parentElement.style.color = '#a3a3a3';

      }
    }
  }


});


//*** Payment Info section***//

//store the different options and div in variables
const paymentOptions = document.querySelector('#payment');
const creditCardDiv = document.querySelector('#credit-card');
const paypalDiv = document.querySelector('#paypal');
const bitcoinDiv = document.querySelector('#bitcoin');

// inital hide select Method Option, paypalDiv,bitcoinDiv and select the credit card option
const selectMethodOption = document.querySelector('option[value="select method"]');
const creditCardOption = document.querySelector('option[value="credit card"]');
selectMethodOption.style.display = 'none';
creditCardOption.selected = true;
paypalDiv.style.display = 'none';
bitcoinDiv.style.display = 'none';

// Event Listener for payment section

paymentOptions.addEventListener('change', (event) => {

  const clicked = event.target.value;

  if (clicked === 'credit card') {
    creditCardDiv.style.display = '';
    bitcoinDiv.style.display = 'none';
    paypalDiv.style.display = 'none';


  } else if (clicked === 'paypal') {
    creditCardDiv.style.display = 'none';
    bitcoinDiv.style.display = 'none';
    paypalDiv.style.display = '';


  } else if (clicked === 'bitcoin') {
    creditCardDiv.style.display = 'none';
    paypalDiv.style.display = 'none';
    bitcoinDiv.style.display = '';


  }






});

//*** Form Validation***//

//validation expressions

const emailRegex = /^[^@]+@[^@.]+\.[a-z]+$/i;
const creditCardNumberRegex = /^\d{13,16}$/;
const zipRegex = /^\d{5}$/;
const cvvRegex = /^\d{3}$/;


//check if the name field contains a text or number
const isNameValid = (input) => {

  return /^[\w\s]+$/i.test(input);

};

// check if the eMail is valid
const isEmailValid = (input) => {
  return emailRegex.test(input);
};

// checks how many boxes are checked and returns the value
const isCheckboxChecked = () => {

  let checkedCounter = 0;
  for (var i = 0; i < registerActivities.length; i++) {

    if (registerActivities[i].checked === true) {

      checkedCounter = +1;
    }
  }
  if (checkedCounter === 0) {
    return false;
  } else {
    return true;
  }

};

// check if the credit card section is valid

const isCreditCardValid = (input) => {

  if (creditCardOption.selected === true) {
    document.querySelector('#error-creditcard').textContent = "13-16 Numbers only";
    return creditCardNumberRegex.test(input);

  }
};

const isZipValid = (input) => {

  if (creditCardOption.selected === true) {
    return zipRegex.test(input);
  }
};

const isCvvValid = (input) => {

  if (creditCardOption.selected === true) {
    return cvvRegex.test(input);
  }
};


// eventListener for the submit button,show the error message when its fail

document.querySelector('button[type="submit"]').addEventListener('click', (event) => {
  // call the validation functions and if anyone is false it don't sumbit the form
  if (isNameValid(nameInput.value) === false) {
    event.preventDefault();
    showOrHideErrorMessage(true, nameInput.previousElementSibling);

  }
  if (isEmailValid(emailInput.value) === false) {
    event.preventDefault();
    showOrHideErrorMessage(true, emailInput.previousElementSibling);

  }
  if (isCheckboxChecked() === false) {
    event.preventDefault();
    showOrHideErrorMessage(true, document.querySelector('#error-checkbox'));

  }
  if (creditCardOption.selected === true &&creditCardNumberInput.value === '' || isCreditCardValid(creditCardNumberInput.value) === false) {
    event.preventDefault();
    document.querySelector('#error-creditcard').textContent = "Cant't be blank, it should have 13-16 Numbers";
    showOrHideErrorMessage(true, creditCardNumberInput.previousElementSibling);

  }
  if (creditCardOption.selected === true &&isZipValid(zipInput.value) === false) {
    event.preventDefault();
    showOrHideErrorMessage(true, zipInput.previousElementSibling);

  }
  if (creditCardOption.selected === true && isCvvValid(cvvInput.value) === false) {
    event.preventDefault();
    showOrHideErrorMessage(true, cvvInput.previousElementSibling);
  }
});

//*** Error Messages***//

// function to create Messages

const errorMessage = (message, parent, addDivTo, IdName) => {
  const newDiv = document.createElement('div');
  newDiv.setAttribute('ID', IdName);
  newDiv.className = 'error';
  newDiv.textContent = message;
  parent.insertBefore(newDiv, addDivTo);
  newDiv.style.display = 'none';

};

//error Message for the Name Field
errorMessage("Can't be blank // only numbers and figures", document.querySelector('fieldset'), nameInput, 'error-name');

//error Message for the Email Field
errorMessage('Please enter a valid Email', document.querySelector('fieldset'), emailInput, 'error-email');

//error Message for the registerActivities
errorMessage('Select at least one activity', activityFieldset, document.querySelector('fieldset[class="activities"] label'), 'error-checkbox');

//error Message for the CreditCard Number Field and the Zip Code Field the CVV Field
errorMessage('13-16 Numbers only', document.querySelector('div[class="col-6 col"]'), creditCardNumberInput, 'error-creditcard');


errorMessage('5 Numbers only', document.querySelector('div[class="col-3 col"]'), zipInput, 'error-zip');


errorMessage('3 Numbers only', document.querySelector('div[logic="jscvv"]'), cvvInput, 'error-cvv');

// show element when show is true, hide when false
const showOrHideErrorMessage = (show, element) => {
  if (show) {
    element.style.display = '';
  } else {
    element.style.display = 'none';
  }
};

//function to create a Event listener and calls the validation function(s)
const createListener = (validator) => {
  return e => {
    const text = e.target.value;
    const valid = validator(text);
    const showTip = text !== "" && !valid;
    const message = e.target.previousElementSibling;
    showOrHideErrorMessage(showTip, message);
  };
};
// Event Listeners they call the createListener function with the valid method as a parameter, when an input occurs

nameInput.addEventListener("input", createListener(isNameValid));

emailInput.addEventListener("input", createListener(isEmailValid));

creditCardNumberInput.addEventListener("input", createListener(isCreditCardValid));

zipInput.addEventListener("input", createListener(isZipValid));

cvvInput.addEventListener("input", createListener(isCvvValid));
