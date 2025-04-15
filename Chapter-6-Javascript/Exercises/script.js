function Calculate () {
    const Petrol_price = document.getElementById('Petrol_price').value;
    const Petrol_liters= document.getElementById('Petrol_liters').value;

    // Checking if the petrol price or liters are not entered yet
    if (!Petrol_price || !Petrol_liters) { 
        document.getElementById('Total_price').innerText = Petrol_price * Petrol_liters;
        return;
    }

    // Calculating the total cost of petrol
    const totalCost = Petrol_price * Petrol_liters;
    // Displaying the petrol cost rounded to two decimal places
    document.getElementById('Total_price').innerText = totalCost.toFixed(2);









































}