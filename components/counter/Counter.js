export class Counter extends HTMLElement {
    css = `
        :host {
            display: block;
            max-width: 150px;
            background-color: white;
            border-radius: 4px;
            padding: 16px;
            border: 1px solid #dddddd;
            user-select: none;
        }

        .value {
            padding: 24px 0;
            text-align: center;
            font-family: sans-serif;
            font-size: 48px;
        }

        .buttons {
            display: flex;
            gap: 16px;
        }

        .button {
            flex-grow: 1;
            font-size: 24px;
            padding: 16px 0;
            background: #dddddd;
            color: #333333;
            cursor: pointer;
            outline: none;
            border: none;
            border-radius: 4px;
        }

        .button:active {
            background: #cccccc;
        }
    `;

    constructor() {
        super();
        this.value = 0;
        this.attachShadow({ mode: "open" });
        this.render();
    }

    template = () => {
        return `
            <div class="value">${this.value}</div>
            <div class="buttons">
                <button type="button" class="button button--increment">+</button>
                <button type="button" class="button button--decrement">-</button>
            </div>
        `;
    };

    render() {
        this.shadowRoot.innerHTML = `
            <style>${this.css}</style>
            ${this.template()}
        `;

        const incrementButton = this.shadowRoot.querySelector(".button--increment");
        const decrementButton = this.shadowRoot.querySelector(".button--decrement");

        incrementButton.addEventListener("click", () => {
            this.value++;
            this.render();
        });

        decrementButton.addEventListener("click", () => {
            this.value--;
            this.render();
        });
    }
}
