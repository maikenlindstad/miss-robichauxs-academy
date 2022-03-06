import displayMessage from "./components/common/displayMessage.js";
import { saveToken, saveUser } from "./utils/storage.js";
import { baseUrl } from "./settings/api.js";
import createMenu from "./components/common/createMenu.js";

createMenu();

const form = document.querySelector("#loginForm");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const message = document.querySelector(".message-container");

const myPageUrl = baseUrl + "/my-pages/";

(async function () {
  try {
    const response = await fetch(myPageUrl);
    const json = await response.json();

    console.log(json.data);
  } catch (error) {
    console.log(error);
    displayMessage("error", "We apologize. An error has occurred. Please come back later.", ".container");
  }
})();


form.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();

  message.innerHTML = "";

  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();

  if (usernameValue.length === 0 || passwordValue.length === 0) {
    return displayMessage("warning", "Enter login details.", ".message-container");
  }

  doLogin(usernameValue, passwordValue);

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
