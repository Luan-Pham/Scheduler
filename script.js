//variable for current time via momentjs

var timeNow = moment().format("MMMM Do YYYY, h:mm:ss a");

$("#currentDay").text(timeNow);

$(".saveBtn").click(function (event) {
  var clickedValue = $(this).siblings(".textarea").val();
  var key = $(this).siblings(".time-block").attr("id");
  console.log(key);
  console.log(clickedValue);
  localStorage.setItem(key, clickedValue);
});

function displayEvents() {
  $(".textarea").each(function () {
    var currentID = $(this).attr("id");
    var lastEvent = localStorage.getItem(currentID);
    console.log(currentID);
    $(this).val(lastEvent);
  });
}

function setupTime() {
  $(".textarea").each(function () {
    var currentTime = $(this).attr("id");
    console.log(currentTime);
    if (currentTime < moment().hour()) {
      $(this).addClass("past");
    }
    if (currentTime == moment().hour()) {
      $(this).addClass("present");
    }
    if (currentTime > moment().hour()) {
      $(this).addClass("future");
    }
  });
}

setupTime();
displayEvents();
