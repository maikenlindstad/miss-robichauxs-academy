export default function displayMessage(messageType, message, targetElement) {
    const element = document.querySelector(targetElement);

    // element.innerHTML = `<div class="message ${messageType}">${message}</div>`;
    // ^ Commented out for now to not get displayed before API is deployed.
}