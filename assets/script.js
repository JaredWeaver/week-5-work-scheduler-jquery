

var presentTime;
var futureTime;
var pastTime;

function displayDay() {
    
    var today = moment().format('[Today is ]dddd, MMMM Do, YYYY');
    $('#currentDay').html(today);
    console.log(today);
    
}

displayDay()
