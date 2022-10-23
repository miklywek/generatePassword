// Assignment Code
const generateBtn = document.querySelector("#generate");
let arr_num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr_lower = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let arr_upper = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
let arr_symb = ["!", "@", "#", "$", "%", "?", "-", "+", "=", "~"];
// let arr = " ";
const getPasswordConfig = function () {
  const config = {
    length: null,
    isNumbers: null,
    isLower: null,
    isUpper: null,
    isSpecial: null,
  };

  // let isQuestionOne = false;
  // while (true)
  while (true) {
    // while (!isQuestionOne)
    var promptLength = window.prompt(
      "Choose the length of the password,a length must be at least 8 characters and no more than 128 characters"
    );
    if (Number(promptLength) >= 8 && Number(promptLength) <= 128) {
      config.length = promptLength;
      break;
      // isQuestionOne = true;
    } else {
      if (promptLength === "") {
        window.alert("Chouse a length of password");
      } else if (promptLength <= 8) {
        window.alert("Password is too small");
      } else if (promptLength >= 128) {
        window.alert("Pasword is too long");
      }
    }
  }
  // let isQuestionTwo = false;
  // while (!isQuestionTwo)
  while (true) {
    let isNumbers = window.confirm(
      "Do you want your password to have numbers?"
    );
    let isUpper = window.confirm(
      "Do you want your password to have UpperCase?"
    );
    let isLower = window.confirm(
      "Do you want your password to have LowerCase?"
    );
    let isSpecial = window.confirm(
      "Do you want your password to have special characters?"
    );
    if (
      isNumbers === true ||
      isUpper === true ||
      isLower === true ||
      isSpecial === true
    ) {
      // isQuestionTwo = true;
      config.isLower = isLower;
      config.isUpper = isUpper;
      config.isNumbers = isNumbers;
      config.isSpecial = isSpecial;
      break;
    } else {
      window.alert("Ви не вели значення");
    }
  }
  return config;
};
// const compareRandom = function () {
//   return Math.random() - 0.5;
// };

const randomInteger = function (min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
};

function generatePassword(config) {
  let arr = [];
  if (config.isNumbers) {
    arr = arr.concat(arr_num);
  }
  if (config.isLower) {
    arr = arr.concat(arr_lower);
  }
  if (config.isUpper) {
    arr = arr.concat(arr_upper);
  }
  if (config.isSpecial) {
    arr = arr.concat(arr_symb);
  }

  // arr.sort(compareRandom);

  let password = "";

  for (let i = 0; i < config.length; i++) {
    password += arr[randomInteger(0, arr.length - 1)];
  }

  return password;
}

// Write password to the #password input

function writePassword() {
  const config = getPasswordConfig();
  var password = generatePassword(config);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
