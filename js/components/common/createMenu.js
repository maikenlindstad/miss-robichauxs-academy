import { getUsername } from "../../utils/storage.js";
import logoutButton from "./logutButton.js";

export default function createMenu() {
    const { pathname } = document.location;

    const menuContainer = document.querySelector(".navigation");

    const username = getUsername();

    let authLink = `<a href="my-page.html" class="${pathname === "/my-page.html" || pathname === "/my-page/logged-in.html" ? "active" : ""}"><li>My page</li></a>`;

    if (username) {
        authLink = `<a href="my-page.html" class="${pathname === "/my-page.html" || pathname === "/my-page/logged-in.html" ? "active" : ""}"><li>${username}'s page</li></a>
        <a href="" id="logout"><li>Log out</li></a>`;
    }

    menuContainer.innerHTML = `<ul>
    <a href="" class="disabled ${pathname === "/" ? "active" : ""}" ><li>Studies</li></a>
    <a href="" class="disabled ${pathname === "/" ? "active" : ""}"><li>News</li></a>
    <a href="" class="disabled ${pathname === "/" ? "active" : ""}"><li>About</li></a>
    <a href="" class="disabled ${pathname === "/" ? "active" : ""}"><li>Enrollment</li></a>
    ${authLink}
</ul>`;

    logoutButton();
}