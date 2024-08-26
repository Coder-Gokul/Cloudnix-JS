//-----------------------------------Max Function----------------------------------------

document.getElementById("maxForm").addEventListener("submit", function (event) {
  event.preventDefault();

  // Get the input values and convert them to float
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);

  // Find the maximum value
  const maxResult = max(num1, num2);

  //max() function
  function max(num1, num2) {
    if (num1 > num2) {
      return num1;
    } else {
      return num2;
    }
  }

  // Display the result
  document.getElementById("maxResult").innerText = `Max: ${maxResult}`;
});

// --------------------------------Reverse Function-----------------------------------------

document
  .getElementById("reverseForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const reverseResult = document.getElementById("reverseResult");
    const reverseError = document.getElementById("reverseError");

    reverseResult.innerHTML = "";
    reverseError.innerHTML = "";

    const str = document.getElementById("stringInput").value;
    const reversedString = reverse(str);

    //reverse() function
    function reverse(str) {
      return str.split("").reverse().join("");
    }

    //validation
    if (str.trim() === "") {
      reverseError.innerText = `Please don't leave it empty!`;
    } else {
      reverseResult.innerText = `Reversed: ${reversedString}`;
    }
  });

//-------------------------Find Largest Word Function---------------------------------

document
  .getElementById("largestWordForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const largestWordResult = document.getElementById("largestWordResult");
    largestWordResult.innerHTML = "";
    const largestWordError = document.getElementById("largestWordError");
    largestWordError.innerHTML = "";

    var number = /^\d+$/;
    const validName = /^[a-z,A-Z\s]*$/;
    const words = document
      .getElementById("wordInput")
      .value.split(",")
      .map((word) => word.trim());
    const largestWord = FindLongestWord(words);

    //FindLongestWord() function
    function FindLongestWord(words) {
      let longestWord = "";

      words.forEach((word) => {
        if (word.length > longestWord.length) {
          longestWord = word;
        }
      });
      return longestWord;
    }

    if (largestWord.trim() === "") {
      largestWordError.innerText = `Please don't leave it empty!`;
    } else if (!validName.test(words)) {
      largestWordError.innerText = `Enter words, no symbols or numbers!`;
    } else {
      largestWordResult.innerText = `Largest Word: ${largestWord}`;
    }
  });

//-----------------------------Cookies Function---------------------------------------

// Function to load details from cookies

function loadDetails() {
  const cookies = document.cookie.split(";");

  cookies.forEach((cookie) => {
    const [name, value] = cookie.trim().split("=");

    if (name === "name") {
      document.querySelector(".logo").innerText = decodeURIComponent(value);
    } else if (name === "phone") {
      document.querySelector(".number").innerHTML = `${decodeURIComponent(
        value
      )}`;
    }
  });
}

// Function to save details in cookies

function saveDetails(event) {
  event.preventDefault(); // Prevent the form from submitting the default way

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const errorElement = document.getElementById("cookiesError");
  const resultElement = document.getElementById("cookiesResult");

  const validName = /^[a-zA-Z\s]*$/;
  const validPhone = /^[0-9\s]*$/;

  errorElement.innerText = "";
  resultElement.innerText = "";

  if (name.trim() === "") {
    errorElement.innerText = "Please Enter Your Name!";
  } else if (!validName.test(name)) {
    errorElement.innerText = "Invalid Name!";
  } else if (phone.trim() === "") {
    errorElement.innerText = "Please Enter Your Phone Number!";
  } else if (!validPhone.test(phone)) {
    errorElement.innerText = "Invalid Phone Number!";
  } else {
    // Cookies with an expiry date of 7 days
    const expiryDate = new Date();
    expiryDate.setTime(expiryDate.getTime() + 7 * 24 * 60 * 60 * 1000); // 7 days
    const expires = `expires=${expiryDate.toUTCString()}`;

    document.cookie = `name=${encodeURIComponent(name)}; ${expires}; path=/`;
    document.cookie = `phone=${encodeURIComponent(phone)}; ${expires}; path=/`;

    errorElement.innerText = "";
    document.getElementById("cookiesResult").innerText =
      "Data Saved Successfully!";
  }
}

document.getElementById("cookiesForm").addEventListener("submit", saveDetails);
loadDetails();
