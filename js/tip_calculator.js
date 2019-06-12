//click to call function
$('#calculate').on('click', function() {

    console.log('worked');
    var billCost = $('#billcost').val();
    var peopleNum = $('#peoplenumber').val();
    var tipPercentage = $('#percentagetip').val();
  
    //Calculate tip
    var total = (billCost * tipPercentage) / peopleNum;
    //round to two decimal places
    total = Math.round(total * 100) / 100;
    //next line allows us to always have two digits after decimal point
    total = total.toFixed(2);
    //Display the tip
    $('#output').html('<br>' + '<strong>' + '$' + total + '</strong>');
  
});
  