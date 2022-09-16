const price_per_room = 1000;

function updatePrice() {
    var adults = document.getElementById('adults');
    var fromDate=document.getElementById('fromdate');
    var toDate=document.getElementById('toDate');
    var finalPrice=document.getElementById('price');

    var toDateValue = new Date(toDate.value);
    var fromDateValue = new Date(fromDate.value);

    toDateValue.min=fromDateValue;

    var noOfDaysStay = (toDateValue - fromDateValue)/(24*60*60*1000);
    if(adults.value && fromDate.value && toDate.value){
        finalPrice.value = "Rs. "+parseInt(adults.value*noOfDaysStay*price_per_room);
    }
    else{
        finalPrice.value = "Rs. 0";
    }
}