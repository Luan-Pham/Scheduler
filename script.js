//variable for current time via momentjs

var timeNow = moment().format('MMMM Do YYYY, h:mm:ss a');

$('#currentDay').text(timeNow)

//making each time-block a textbox
var eventInput