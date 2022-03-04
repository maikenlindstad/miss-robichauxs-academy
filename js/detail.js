import displayMessage from "./components/common/displayMessage.js";
import { baseUrl } from "./settings/api.js";

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

if (!id) {
    document.location.href = "logged-in.html";
}

const myPagesUrl = baseUrl + "/my-pages/" + id + "?populate=*";

(async function () {
    try {
        const response = await fetch(myPagesUrl);
        const details = await response.json();

        document.title = details.data.attributes.Title;


        const container = document.querySelector(".detail-container");

        container.innerHTML = `
                                <h2>${details.data.attributes.Title}</h2>  
                                <img src="http://localhost:1337${details.data.attributes.excerpt.data.attributes.url}">
                                <p>${details.data.attributes.description}</p>
                            `;

        console.log(details.data);
    } catch (error) {
        console.log(error);
        displayMessage("error", error, ".detail-container");
    }

})();