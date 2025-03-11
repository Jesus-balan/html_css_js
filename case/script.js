var inputValue = document.getElementById('inputValue');
var result = document.getElementById('result'); 
var submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', function(event) {
    event.preventDefault(); 

    var mobileAmount = parseInt(inputValue.value);

    if (mobileAmount > 60000) {
        result.textContent = "Buy iPhone";
    } else if (mobileAmount > 30000) {
        result.textContent = "Buy Android mobile";
    } else if (mobileAmount > 10000) {
document.getElementById('phone').style.display='block';
    } else {
        result.textContent = "";
    }
});
 