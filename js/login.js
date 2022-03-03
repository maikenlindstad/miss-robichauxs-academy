// import displayMessage from "./components/common/displayMessage.js";
import { baseUrl } from "./settings/api.js";

const myPageUrl = baseUrl + "my-pages/";

(async function () {
    const container = document.querySelector(".container");

    try {
        const response = await fetch(myPageUrl);
        const json = await response.json();

        console.log(json.data);
    } catch (error) {

    }
})();









const form = document.querySelector("#loginForm");
const username = document.querySelector("#username");
const usernameError = document.querySelector("#usernameError");
const password = document.querySelector("#password");
const passwordError = document.querySelector("#passwordError");
const message = document.querySelector(".message-container");

form.addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();

    // const usernameValue = username.value.trim();
    // const passwordValue = password.value.trim();

    // if (usernameValue.length === 0 || passwordValue.length === 0) {
    //     displayMessage("warning", "We can't seem to find these values in our register. Please try again.", ".message-container");
    // }

    // OR 

    if (checkLength(username.value, 0) === true) {
        usernameError.style.display = "none";
    } else {
        usernameError.style.display = "block";
    }

    if (checkLength(password.value, 5) === true) {
        passwordError.style.display = "none";
    } else {
        passwordError.style.display = "block";
    }

    console.log(username.value);
    console.log(password.value);
}


function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
};