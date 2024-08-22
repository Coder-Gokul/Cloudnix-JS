// Max Function
function max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

document.getElementById("maxForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const maxResult = max(num1, num2);
  document.getElementById("maxResult").innerText = `Max: ${maxResult}`;
});

// Function to check for Whitespace
function checkWhitespace(str) {
  return /\s/.test(str);
}

// Reverse Function
function reverse(str) {
  return str.split("").reverse().join("");
}

document
  .getElementById("reverseForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const str = document.getElementById("stringInput").value;
    const reversedString = reverse(str);

    if (checkWhitespace(str)) {
      document.getElementById(
        "reverseResult"
      ).innerText = `Please don't leave it empty!`;
    } else {
      document.getElementById(
        "reverseResult"
      ).innerText = `Reversed: ${reversedString}`;
    }
  });

// Find Largest Word Function
function findLongestWord(words) {
  let longestWord = "";
  words.forEach((word) => {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });
  return longestWord;
}

document
  .getElementById("largestWordForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const words = document
      .getElementById("wordInput")
      .value.split(",")
      .map((word) => word.trim());
    const largestWord = findLongestWord(words);
    if (checkWhitespace(wordInput.value)) {
      document.getElementById(
        "largestWordResult"
      ).innerText = `Please don't leave it empty!`;
    } else {
      document.getElementById(
        "largestWordResult"
      ).innerText = `Largest Word: ${largestWord}`;
    }
  });

// Cookies Function
function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

document
  .getElementById("cookiesForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    setCookie("userName", name, 7);
    setCookie("userPhone", phone, 7);
    if (checkWhitespace(name)) {
      document.getElementById(
        "CookiesResult"
      ).innerText = `Please don't leave it empty!`;
    } else if (checkWhitespace(phone)) {
      document.getElementById(
        "CookiesResult"
      ).innerText = `Please don't leave it empty!`;
    } else if (format.test(name)) {
      document.getElementById(
        "CookiesResult"
      ).innerText = `Please don't use Special Characters!`;
    } else if (format.test(phone)) {
      document.getElementById(
        "CookiesResult"
      ).innerText = `Please don't use Special Characters!`;
    } else {
      document.getElementById(
        "CookiesResult"
      ).innerText = `Data saved successfully!`;
    }
  });

// Load saved cookies on page load
window.onload = function () {
  const savedName = getCookie("userName");
  const savedPhone = getCookie("userPhone");
  if (savedName) document.getElementById("name").value = savedName;
  if (savedPhone) document.getElementById("phone").value = savedPhone;
};
