document.getElementById("container").addEventListener('submit', function(event){
    event.preventDefault(); // Prevent the form from submitting
    
    var select = parseInt(document.getElementById('priceRange').value); // Parse value to integer
    
    if (select >= 30000) {
        document.getElementById('results').style.display = 'block'; // Show results section
        document.getElementById('para').style.display = 'block'; // Show para section
        document.getElementById('ninja').style.display = 'none'; // Hide ninja section if it was previously shown
    }
    else if (select >= 20000) {
        document.getElementById('ninja').style.display = 'block'; // Show ninja section
        document.getElementById('para').style.display = 'block'; // Show para section
        document.getElementById('results').style.display = 'none'; // Hide results section if it was previously shown
    }
    else {
        alert('Selected value: ' + select); // Show alert with selected value
        document.getElementById('results').style.display = 'none'; // Hide results section
        document.getElementById('ninja').style.display = 'none'; // Hide ninja section
        document.getElementById('para').style.display = 'none'; // Hide para section
    }
});
