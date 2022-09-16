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