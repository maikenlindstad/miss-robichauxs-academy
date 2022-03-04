import displayMessage from "./components/common/displayMessage.js";
import { saveToken, saveUser } from "./utils/storage.js";
import { baseUrl } from "./settings/api.js";
import createMenu from "./components/common/createMenu.js";

createMenu();

const form = document.querySelector("#loginForm");
const username = document.querySelector("#username");
const usernameError = document.querySelector("#usernameError");
const password = document.querySelector("#password");
const passwordError = document.querySelector("#passwordError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const message = document.querySelector(".message-container");

const myPageUrl = baseUrl + "/my-pages/";

(async function () {
    const container = document.querySelector(".container");

    try {
        const response = await fetch(myPageUrl);
        const json = await response.json();

        console.log(json.data);
    } catch (error) {
        console.log(error);
        displayMessage("error", error, ".container");
    }
})();


form.addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();

    message.innerHTML = "";

    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();



    if (usernameValue.length === 0 || passwordValue.length === 0) {
        return displayMessage("warning", "Incorrect login values.", ".message-container");
    }

    doLogin(usernameValue, passwordValue);


    // if (checkLength(username.value, 0) === true) {
    //     usernameError.style.display = "none";
    // } else {
    //     usernameError.style.display = "block";
    // }

    // if (checkLength(password.value, 5) === true) {
    //     passwordError.style.display = "none";
    // } else {
    //     passwordError.style.display = "block";
    // }

    // if (validateEmail(email.value) === true) {
    //     emailError.style.display = "none";
    // } else {
    //     emailError.style.display = "block";
    // }


    // console.log(username.value);
    // console.log(password.value);
}

async function doLogin(username, password) {
    const url = "http://localhost:1337/api/auth/local";

    const data = JSON.stringify({ identifier: username, password: password });

    const options = {
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json"
        }
    };

    try {
        const response = await fetch(url, options);
        const json = await response.json();

        console.log(json);

        message.innerHTML = "";

        if (json.user) {

            saveToken(json.jwt);
            saveUser(json.user);

            location.href = "my-page/logged-in.html";
        }

        if (json.error) {
            displayMessage("warning", "Invalid login details", ".message-container")
        }

    } catch (error) {
        console.log(error);
    }
}


function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
};

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}