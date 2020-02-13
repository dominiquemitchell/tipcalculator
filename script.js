// Variable initilizations
const poorService = document.getElementById('poor');
const goodService = document.getElementById('good');
const greatService = document.getElementById('great');
const excellentService = document.getElementById('excellent');
let split = document.getElementById('split-it');
let splitTwo = document.getElementById('split-it-2');
let splitButton;
let poor = 0.05;
let good = 0.10;
let great = 0.15; 
let excellent = 0.20; 
let tip;
let buttonListener;

//Functions for each service rating button.
function poorCalculator() {
  let bill = document.getElementById('bill-amount').value;
  tip = Math.ceil(bill * poor);
  let showTip = document.getElementById('tip-amount').innerHTML = "$" + tip;
}

function goodCalculator() {
  let bill = document.getElementById('bill-amount').value;
  tip = Math.ceil(bill * good);
  let showTip = document.getElementById('tip-amount').innerHTML = "$" + tip;
}

function greatCalculator() {
  let bill = document.getElementById('bill-amount').value;
  tip = Math.ceil(bill * great);
  let showTip = document.getElementById('tip-amount').innerHTML = "$" + tip;
}

function excellentCalculator() {
  let bill = document.getElementById('bill-amount').value;
  tip = Math.ceil(bill * excellent);
  let showTip = document.getElementById('tip-amount').innerHTML = "$" + tip;
}

function terribleCalculator() {
  let showTip = document.getElementById('tip-amount').innerHTML = "No tip!";
}

//Function attached to the "Split the Check" button
function splitCheck(){
  let header = document.createElement('h2');
  let headerText = document.createTextNode('Each person pays:');
  header.appendChild(headerText);
  splitTwo.appendChild(header);
  let finalSplit = splitMath();
  let finalSplitParse = +finalSplit;
  var finalSection = document.createElement('p'); 
  finalSection.innerHTML = "$" + finalSplitParse;
  finalSection.setAttribute('id', 'final-amount-split');
  splitTwo.appendChild(finalSection); 
}

//Function within the splitCheck function
function splitMath(){
  let billSplit = +document.getElementById('bill-amount').value;
  let peopleAmount = parseInt(document.getElementById('people-number').value);
  let splitting = (billSplit + tip) / peopleAmount;
  let splittingFixed = splitting.toFixed(2);
  return splittingFixed;
}

// Function attached to the "need to split the check?" button.
function numberOfPeople(){
  let peopleHeader = document.createElement('h2');
  let peopleHeaderText = document.createTextNode('How many people?');
  let people = document.createElement('input');
  people.setAttribute('type', 'number');
  people.setAttribute('id', 'people-number');
  peopleHeader.appendChild(peopleHeaderText);
  split.appendChild(peopleHeader);
  splitButton = document.createElement('button');
  splitButton.setAttribute('id', 'split-btn');
  splitButton.innerHTML = 'Split the check!';
  splitButton.onclick = splitCheck; //runs the splitCheck function onclick
  split.appendChild(people);
  split.appendChild(splitButton);
}




