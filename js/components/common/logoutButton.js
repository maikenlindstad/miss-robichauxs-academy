import { clearStorage } from "../../utils/storage.js";


export default function logoutButton() {
    const button = document.querySelector("#logout");

    if (button) {
        button.onclick = function () {
            const doLogout = confirm("Are you sure you want to log out?");

            if (doLogout) {
                clearStorage();
                location.href = "../my-page.html";
                // window.location.replace('https://miss-robichauxs-academy.netlify.app/index.html')
            }
        }
    }
}