let urlParams = new URLSearchParams(window.location.search);

let toDate = new Date(urlParams.get('toDate'));
let fromDate = new Date(urlParams.get('fromDate'));
let days = (toDate - fromDate)/(24*60*60*1000);
document.getElementById("name").innerHTML = "<strong class='heading'>Name:</strong>&nbsp;" + urlParams.get('name');
document.getElementById("adult").innerHTML = "<strong class='heading'>Number of Adults:</strong>&nbsp;" + urlParams.get('adult');
document.getElementById("from-date").innerHTML = "<strong class='heading'>Check-in Date:</strong>&nbsp;" + urlParams.get('fromDate');
document.getElementById("to-date").innerHTML =  "<strong class='heading'>Check-out Date:</strong>&nbsp;" + urlParams.get('toDate');
document.getElementById("tariff").innerHTML = "<strong class='heading'>Tariff Breakdown:</strong>&nbsp;Rs.1000 x " + urlParams.get('adult') + " Adults x " + days + " Nights";
document.getElementById("amount").innerHTML += "<strong class='heading'>Total Amount:</strong>&nbsp;" + urlParams.get('price');


if(!isLogin || isLogin ==='false'){
    document.getElementById('pay-now-button').disabled=true;
}
else if(isLogin==='true'){
    document.getElementById('pay-now-button').disabled=false;
}
document.getElementById('pay-now-button').addEventListener('click',function (e) {
        e.preventDefault();
        alert('Hi your booking is successfull!');
});