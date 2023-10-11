const calculateBtn = document.querySelector("#Calculate");
const inputElement = document.querySelector("#number");
const displayElement = document.getElementById("display-answers");


calculateBtn.addEventListener("click", () => {
  
  const inputValue = parseInt(inputElement.value);

  
  if (!isNaN(inputValue) && inputValue >= 0) {
  
    const factorialResult = calculateFactorial(inputValue);

    
    displayElement.textContent = `The factorial of ${inputValue} is ${factorialResult}`;
  } else {
    
    displayElement.textContent = "Please enter a valid non-negative number.";
  }
});

function calculateFactorial(num) {
  let factorial = 1;
  if (num < 0) return;

  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
}



