import { HeaderTemplate } from "./js/header.js";
import { FooterTemplate } from "./js/footer.js";
import { loadExternalLinkElement } from "./js/components.js"

const HeaderElement = document.getElementById("header");
const FooterElement = document.getElementById("footer");

function load() {
    HeaderElement.innerHTML = HeaderTemplate;
    FooterElement.innerHTML = FooterTemplate;

    loadExternalLinkElement();
}

load();