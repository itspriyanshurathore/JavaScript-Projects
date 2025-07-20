const bills = document.querySelector('#bill')
const tips = document.querySelector('#tip')
const buttons = document.querySelector('#calculate')
const displayValue = document.querySelector('#result')

buttons.addEventListener('click', function () {

    const billValue = parseFloat(bills.value);     
    const tipPercent = parseFloat(tips.value);     

  
    if (isNaN(billValue) || isNaN(tipPercent)) {
        displayValue.textContent = "Please enter valid numbers.";
        return;
    }

    const tipAmount = (billValue * tipPercent) / 100; 
    const totalAmount = billValue + tipAmount;

    displayValue.textContent = ` Total Amount : ${totalAmount.toFixed(2)}`
})

