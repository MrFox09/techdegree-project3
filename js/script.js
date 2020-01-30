/*jshint esversion: 6 */


const jobRoleOptions = document.querySelector('#title');
const designOptions = document.querySelector('#design');
const colorOptions = document.querySelector('#color');
//*** Job-Role Section ***//

// set the focus to the first input field "Name" with jQuery
$( document ).ready( () => {
  $( "#name" ).focus();
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

const selectColorOptions = (design) =>   {
  for (let i=0; i< color.length; i++){



     if (design === 'Select Theme'){

       color[i].style.display = 'none';
       color[0].textContent ='Please select a design';


    }else if(design === 'js puns'){
        color[i].style.display = 'none';
        color[0].textContent ='Cornflower Blue (JS Puns shirt only)';
        color[0].style.display = '';
        color[1].style.display = '';
        color[2].style.display = '';



      }else if(design === 'heart js'){
        color[i].style.display = 'none';
        color[0].innerHTML = 'Tomato (I &#9829; JS shirt only)';
        color[3].style.display = '';
        color[4].style.display = '';
        color[5].style.display = '';


      }else {
        selectColorOptions('Select Theme');
      }


  }
};
//call the function for initial state
selectColorOptions('Select Theme');

// event Listener for the designOptions and call the selectColorOptions function
// to show the right T-shirt colors

designOptions.addEventListener('change', (event)=>{
    console.log(event.target.value);
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
//select the crated div to change the price text
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

      } else {

        registerActivities[i].disabled = false;

      }
    }
  }


});
