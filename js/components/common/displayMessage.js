export default function displayMessage(messageType, message, targetElement) {
    let message = "Could not get information";
    const element = document.querySelector(targetElement);

    element.innerHTML = `<div class="message ${messageType}">${message}</div>`;
}