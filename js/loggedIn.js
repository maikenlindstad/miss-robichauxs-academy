// import displayMessage from "./components/common/displayMessage.js";
import { baseUrl } from "./settings/api.js";

const myPageUrl = baseUrl + "/my-pages?populate=*";

(async function () {
    const container = document.querySelector(".container");

    try {
        const response = await fetch(myPageUrl);
        const json = await response.json();

        container.innerHTML = "";

        json.data.forEach(function (mypage) {
            container.innerHTML += `<a class="card">
                                        <img src="http://localhost:1337${mypage.attributes.excerpt.data.attributes.url}">
                                        <h2>${mypage.attributes.Title}</h2>            
                                    </a>`;
        })

        console.log(json.data);
    } catch (error) {

    }
})();