export class Searchbar extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        const placeholder = this.dataset.placeholder || "Search";

        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./components/search-bar/SearchBar.css" type="text/css" />
        <ion-icon name="search-outline" aria-hidden="true"></ion-icon>
        <input class="input" type="search" placeholder="${placeholder}" />
        `;

        const input = this.shadowRoot.querySelector(".input");
        input.addEventListener("input", (ev) => {
            this.dispatchEvent(
                new CustomEvent("search-input", {
                    detail: ev,
                })
            );
        });
    }
}
