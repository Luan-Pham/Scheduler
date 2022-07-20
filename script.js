//variable for current time via momentjs

var timeNow = moment().format("MMMM Do YYYY, h:mm:ss a");
// var nineAM = $('#9AM')
var nineAM = document.getElementById("9AM");
var tenAM = document.getElementById("10AM");
var elevenAM = document.getElementById("11AM");
var noon = document.getElementById("12");
var onePM = document.getElementById("1PM");
var twoPM = document.getElementById("2PM");
var threePM = document.getElementById("3PM");
var fourPM = document.getElementById("4PM");
var fivePM = document.getElementById("5PM");

$("#currentDay").text(timeNow);

//changing each time-block depending on current time
function calcTime9() {
  if (moment().isAfter("9")) {
    nineAM.classList.add("past");
  }
  if (moment().isSame("9")) {
    nineAM.classList.add("present");
  }
  if (moment().isBefore("9")) {
    nineAM.classList.add("future");
  }
}
function calcTime10() {
  if (moment().isAfter("10")) {
    tenAM.classList.add("past");
  }
  if (moment().isSame("10")) {
    tenAM.classList.add("present");
  }
  if (moment().isBefore("10")) {
    tenAM.classList.add("future");
  }
}
function calcTime11() {
  if (moment().isAfter("11")) {
    elevenAM.classList.add("past");
  }
  if (moment().isSame("11")) {
    elevenAM.classList.add("present");
  }
  if (moment().isBefore("11")) {
    elevenAM.classList.add("future");
  }
}
function calcTime12() {
  if (moment().isAfter("12")) {
    noon.classList.add("past");
  }
  if (moment().isSame("12")) {
    noon.classList.add("present");
  }
  if (moment().isBefore("12")) {
    noon.classList.add("future");
  }
}
function calcTime1() {
  if (moment().isAfter("13")) {
    onePM.classList.add("past");
  }
  if (moment().isSame("13")) {
    onePM.classList.add("present");
  }
  if (moment().isBefore("13")) {
    onePM.classList.add("future");
  }
}
function calcTime2() {
  if (moment().isAfter("14")) {
    twoPM.classList.add("past");
  }
  if (moment().isSame("14")) {
    twoPM.classList.add("present");
  }
  if (moment().isBefore("14")) {
    twoPM.classList.add("future");
  }
}
function calcTime3() {
  if (moment().isAfter("15")) {
    threePM.classList.add("past");
  }
  if (moment().isSame("15")) {
    threePM.classList.add("present");
  }
  if (moment().isBefore("15")) {
    threePM.classList.add("future");
  }
}
function calcTime4() {
  if (moment().isAfter("16")) {
    fourPM.classList.add("past");
  }
  if (moment().isSame("16")) {
    fourPM.classList.add("present");
  }
  if (moment().isBefore("16")) {
    fourPM.classList.add("future");
  }
}
function calcTime5() {
  if (moment().isAfter("17")) {
    fivePM.classList.add("past");
  }
  if (moment().isSame("17")) {
    fivePM.classList.add("present");
  }
  if (moment().isBefore("17")) {
    fivePM.classList.add("future");
  }
}

var eventInput = $("#scheduledEvent");

//function for button to save each event
function eventSave(eventInput) {
  localStorage.setItem(eventInput, "");
}

//function to displayed local storage

function displayEvents() {
  $(this).append(localStorage.getItem(eventInput));
}
//click event to invoke save function
$(":button").click(eventSave);

// calcTimeAll();
calcTime9();
calcTime10();
calcTime11();
calcTime12();
calcTime1();
calcTime2();
calcTime3();
calcTime4();
calcTime5();
