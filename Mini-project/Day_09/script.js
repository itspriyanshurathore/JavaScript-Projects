const height = document.getElementById('height');
const weight = document.getElementById('weight');
const calculateBmi = document.getElementById('calculateBtn');
const displayResult = document.getElementById('result');

calculateBmi.addEventListener('click', function (e) {
    e.preventDefault();

    const heightInCm = parseFloat(height.value);
    const weightInKg = parseFloat(weight.value);

    // Input validation
    if (isNaN(heightInCm) || heightInCm <= 0) {
        displayResult.innerHTML = `<span style="color:red;">⚠️ Please enter a valid height</span>`;
        return;
    }

    if (isNaN(weightInKg) || weightInKg <= 0) {
        displayResult.innerHTML = `<span style="color:red;">⚠️ Please enter a valid weight</span>`;
        return;
    }

    // BMI Calculation
    const calBMI = (weightInKg / ((heightInCm * heightInCm) / 10000)).toFixed(2);

    let message = `Your BMI is ${calBMI}. `;

    if (calBMI < 18.5) {
        message += "You are underweight.";
        displayResult.style.color = 'orange';

    } else if (calBMI >= 18.5 && calBMI < 25) {

        message += "You have a normal weight.";
        displayResult.style.color = 'green';
        
    } else if (calBMI >= 25 && calBMI < 30) {

        message += "You are overweight.";
        displayResult.style.color = 'orange';
    } else {
        message += "You are obese.";
        displayResult.style.color = 'red';
    }

    displayResult.textContent = message;
});
