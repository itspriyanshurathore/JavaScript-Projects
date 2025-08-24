// Step 1: Initialize Feather icons for any elements that need icons
//   - Use feather.replace() to replace placeholders with actual icons
feather.replace();
// Step 2: Initialize the application by selecting necessary DOM elements
//   - Select elements for amount input, currency dropdowns, convert button, result display, base currency, get rates button, exchange rates display, mode toggles, and mode sections

const amountInput = document.getElementById("amount");
const fromCurrency = document.getElementById("from-currency");
const toCurrency = document.getElementById("to-currency");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");
const baseCurrency = document.getElementById("base-currency");
const getRatesBtn = document.getElementById("get-rates-btn");
const exchangeRates = document.getElementById("exchange-rates");
const convertMode = document.getElementById("convert-mode");
const exchangeMode = document.getElementById("exchange-mode");
const toggleBtns = document.querySelectorAll(".toggle-btn");

// Step 3: Define the API key for accessing the ExchangeRate-API
//   - Set the apiKey variable to your ExchangeRate-API key
const apiKey = "03c82f9a5935ba9399ed5596";

// Step 4: Set up event listeners for toggling between conversion and exchange modes
toggleBtns.forEach((btn) => {
  //   - Step 4a: Add click event listeners to toggle buttons to switch between modes
  //   - Step 4b: Update the UI to reflect the selected mode (conversion or exchange)
  btn.addEventListener("click", () => {
    toggleBtns.forEach((btn) => btn.classList.remove("active"));
    btn.classList.add("active");
    const mode = btn.getAttribute("data-mode");
    if (mode === "convert") {
      convertMode.style.display = "flex";
      exchangeMode.style.display = "none";
    } else {
      convertMode.style.display = "none";
      exchangeMode.style.display = "flex";
    }
  });
});

// Step 5: Implement the currency conversion functionality
convertBtn.addEventListener("click", () => {
  //   - Step 5a: Add a click event listener to the convert button
  //   - Step 5b: Get the amount, from-currency, and to-currency values from the user
  const amount = amountInput.value;
  const from = fromCurrency.value;
  const to = toCurrency.value;

  //   - Step 5c: Fetch the conversion rate from the API using the selected currencies
  fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/pair/${from}/${to}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      //   - Step 5d: Calculate the converted amount and update the result display with the converted value and currency symbol
      const rate = data.conversion_rate;
      const convertedAmount = (amount * rate).toFixed(2);
      result.innerHTML = `<span class="currency-icon"></span>${convertedAmount} ${to}`;
    })
    .catch((error) => {
      console.log(error);
      //   - Step 5e: Handle any errors that occur during the API request and provide feedback to the user
    });
});

// Step 6: Implement the exchange rates retrieval functionality
//   - Step 6a: Add a click event listener to the get rates button
getRatesBtn.addEventListener("click", () => {
  //   - Step 6b: Get the base currency from the user
  const base = baseCurrency.value;
  //   - Step 6c: Fetch the exchange rates from the API based on the selected base currency
  fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${base}`)
    .then((response) => {
      return response.json();
      //   - Step 6d: Display the fetched exchange rates in a list format within the exchange rates section
    })
    .then((data) => {
      let ratesHtml = "<h3>Exchange Rates</h3><ul>";
      for (const [currency, rate] of Object.entries(data.conversion_rates)) {
        if (currency !== base) {
          ratesHtml += `<li><span class="currency-icon">${currency}</span>${currency}: ${rate.toFixed(
            4
          )}</li>`;
        }
      }
      ratesHtml += "</ul>";
      exchangeRates.innerHTML = ratesHtml;
    })
    .catch((error) => {
      //   - Step 6e: Handle any errors that occur during the API request and provide feedback to the user
      exchangeRates.textContent = `${error} An error occurred. Please try again.`;
    });
});

