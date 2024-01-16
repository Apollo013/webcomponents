import { Counter } from "./components/counter/Counter.js";
import { Searchbar } from "./components/search-bar/SearchBar.js";
import { StyledTable } from "./components/styled-table/StyledTable.js";

/**
 * @type {Searchbar}
 */
customElements.define("search-bar", Searchbar);

const searchProducts = document.getElementById("search-products");

if (searchProducts) {
    searchProducts.addEventListener("search-input", ({ detail: ev }) => {
        console.log(ev);
    });
}

/**
 * @type {StyledTable}
 */
customElements.define("styled-table", StyledTable);
const styledTableData = [
    ["8190", "John", "Germany"],
    ["8191", "Mary", "Austria"],
];

const usersTable = document.getElementById("users-table");
usersTable.data = styledTableData;

/**
 * @type {Counter}
 */
customElements.define("counter-component", Counter);
