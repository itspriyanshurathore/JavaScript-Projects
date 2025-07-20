const display = document.getElementById("display");
const buttons = document.querySelectorAll(".buttons button");

let currentInput = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "C") {
      currentInput = "";
      display.value = "";
    } else if (value === "=") {
      try {
        const result = calculate(currentInput);
        display.value = result;
        currentInput = result.toString(); // allow continued calculation
      } catch {
          currentInput = "";
        display.value = "Error";
      }
    } else {
      currentInput += value;
      display.value = currentInput;
    }
  });
});
//////////////////// Expression /////////////////////////////////
function calculate(expression) {
  const tokens = expression.match(/(\d+\.?\d*|\+|\-|\*|\/)/g);
  if (!tokens) throw new Error("Invalid expression");

  let numbers = [];
  let operators = [];

  // First pass: handle * and /
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];

    if (!isNaN(token)) {
      numbers.push(parseFloat(token));
    } else if (token === "*" || token === "/") {
      const prev = numbers.pop();
      const next = parseFloat(tokens[++i]);
      if (token === "*") {
        numbers.push(prev * next);
      } else {
        if (next === 0) throw new Error("Divide by 0");
        numbers.push(prev / next);
      }
    } else {
      operators.push(token);
    }
  }

  // Second pass: handle + and -
  let result = numbers[0];
  let numberIndex = 1;

  for (let op of operators) {
    const next = numbers[numberIndex++];
    if (op === "+") result += next;
    else if (op === "-") result -= next;
  }

  return result;
}
