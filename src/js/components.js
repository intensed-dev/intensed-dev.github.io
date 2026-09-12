export function loadExternalLinkElement() {
    const elements = document.getElementsByClassName("external");

    for (let index = 0; index < elements.length; index++) {
        const element = elements[index];
        element.innerHTML += ' <i class="fa-solid fa-up-right-from-square component-external-icon"></i>';
        // arrow-up-right
        // up-right-from-square
        // square-arrow-up-right
        // share-from-square
        // square-up-right
        // share
    }
}

export function showAlertModal(title, content) {
    const modal = ``;
}