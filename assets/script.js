

var h = [""];
var hours;
var userTasks;

$(document).ready(function() {
  function displayDay() {
      
      var today = moment().format('[Today is ]dddd, MMMM Do, YYYY');
      $('#currentDay').html(today);

  }

  displayDay()

  $('.saveBtn').on("click", function(event) {
    var hour = $(this).attr('id');
    var userTasks = $(this).siblings('.description').val();
    localStorage.setItem(hour, userTasks);
    
  });
  function colorCodeBlocks() {
    
    var currentHour = moment().hour();    
    $('.description').each(function () {
        var userTime = parseInt($(this).attr('id').split('h')[1]);
   
        if (userTime < currentHour){
          $(this).addClass('past');
        } else if (userTime === currentHour){
          $(this).addClass('present');
        } else {
          $(this).addClass('future');
        }
    });
  }   
 
  $("#h9.description").val(window.localStorage.getItem("n9"));
  $("#h10.description").val(window.localStorage.getItem("n10"));
  $("#h11.description").val(window.localStorage.getItem("n11"));
  $("#h12.description").val(window.localStorage.getItem("n12"));
  $("#h13.description").val(window.localStorage.getItem("n13"));
  $("#h14.description").val(window.localStorage.getItem("n14"));
  $("#h15.description").val(window.localStorage.getItem("n15"));
  $("#h16.description").val(window.localStorage.getItem("n16"));
  $("#h17.description").val(window.localStorage.getItem("n17"));

  colorCodeBlocks()
  
});
