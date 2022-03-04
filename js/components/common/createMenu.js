import { getUsername } from "../../utils/storage.js";
import logoutButton from "./logoutButton.js";

export default function createMenu() {
    const { pathname } = document.location;

    const menuContainer = document.querySelector(".navigation");

    const username = getUsername();

    let authLink = `<a href="my-page.html" class="${pathname === "/my-page.html" || pathname === "/my-page/logged-in.html" ? "active" : ""}"><li>My page</li></a>`;

    if (username) {
        authLink = `<div class="dropdown ${pathname === "/my-page.html" || pathname === "/my-page/logged-in.html" ? "active" : ""}"><li><span>${username}'s page</span></li><div id="logout" class="dropdown-content">Log out</div><div>
        
        `;
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