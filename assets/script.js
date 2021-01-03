

var h = [""];
var hours;


//Display day and date in the header
function displayDay() {
    
    var today = moment().format('[Today is ]dddd, MMMM Do, YYYY');
    $('#currentDay').html(today);

}

displayDay()

$(document).ready(function() {

    // Colors of the blocks change as time progresses
  function colorCodeBlocks() {
    
    // Find current hour in a number form
    var currentHour = moment().hour();    
    // Loop through <textarea> ID's and parse/split them into a string
    $('.description').each(function () {
        var userTime = parseInt($(this).attr('id').split()[0]);
    // 
        if (userTime < currentHour){
          $(this).removeClass('future');
          $(this).removeClass('present');
          $(this).addClass('past');
        } else if (userTime === currentHour){
          $(this).removeClass('future');
          $(this).removeClass('past');
          $(this).addClass('present');
        } else {
          $(this).removeClass('past');
          $(this).removeClass('present');
          $(this).addClass('future');
        }

    });
  }
  colorCodeBlocks()
});







