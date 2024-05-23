const convertBtn = document.getElementById("convert-btn");
const numberInput = document.getElementById("number");
const result = document.getElementById("result");

const romanNums = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

const submit = () => {
  const inputValue = parseInt(numberInput.value);
  switch (true) {
    case isNaN(inputValue):
      result.innerText = "Please enter a valid number";
      break;
    case inputValue < 1:
      result.innerText = "Please enter a number greater than or equal to 1";
      break;
    case inputValue >= 4000:
      result.innerText = "Please enter a number less than or equal to 3999";
      break;
    default:
      result.innerText = converts(inputValue);
      break;
  }
};

const converts = (number) => {
  let output = "";
  for (let key in romanNums) {
    while (number >= romanNums[key]) {
      output += key;
      number -= romanNums[key];
    }
  }
  return output;
};

convertBtn.addEventListener("click", submit);
