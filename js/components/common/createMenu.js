import { getUsername } from "../../utils/storage.js";
import logoutButton from "./logoutButton.js";

export default function createMenu() {
  const { pathname } = document.location;
  const menuContainer = document.querySelector(".navigation-menu");
  const username = getUsername();
  let authLink = `
    <a href="my-page.html" class="${pathname === "/my-page.html" || pathname === "/my-page/logged-in.html" ? "active" : ""}">My page</a>`;

  if (username) {
    authLink = `
      <div class="dropdown">
        <span><a class="${pathname === "/my-page.html" || pathname === "/my-page/logged-in.html" ? "active" : ""}"href="my-page/logged-in.html">${username}'s page</a></span>
        <div id="logout" class="dropdown-content">
          <i class="fa-solid fa-arrow-right-from-bracket"></i> Log out
        </div>
      </div>`;
  }

  menuContainer.innerHTML = `
    <label class="label-for-menu" for="hamburger-menu"><i class="fa-solid fa-bars"></i></label>
    <input type="checkbox" id="hamburger-menu">
    <ul>
      <li>
        <div class="title">
          <a href="/">Miss Robichaux's Academy</a>
        </div>
      </li>
      <li><a href="" class="disabled ${pathname === "studies.html" ? "active" : ""}">Studies</a></li>
      <li><a href="" class="disabled ${pathname === "news.html" ? "active" : ""}">News</a></li>
      <li><a href="" class="disabled ${pathname === "about.html" ? "active" : ""}">About</a></li>
      <li><a href="" class="disabled ${pathname === "enrollment.html" ? "active" : ""}">Enrollment</a></li>
      <li>${authLink}</li>
    </ul>`;

  logoutButton();
}