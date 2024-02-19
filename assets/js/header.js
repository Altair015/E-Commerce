// Creating header element
let headerContainer = document.createElement("header");
headerContainer.setAttribute("class", "p-3 navbar bg-dark navbar-expand-sm navbar-dark");

// Creating container for header items
let headerItemsContainer = document.createElement("div");
headerItemsContainer.setAttribute("class", "container-fluid justify-content-between");

// Creating brand link
let brandLink = document.createElement("a");
brandLink.setAttribute("class", "navbar-brand icon-text fs-1");
brandLink.setAttribute("href", "../");
brandLink.innerText = "Shopperce";

// Creating toggler button
let togglerButton = document.createElement("button");
togglerButton.setAttribute("class", "navbar-toggler");
togglerButton.setAttribute("type", "button");
togglerButton.setAttribute("data-bs-toggle", "collapse");
togglerButton.setAttribute("data-bs-target", "#navbarNavAltMarkup");

// Creating toggler icon
let togglerIcon = document.createElement("span");
togglerIcon.setAttribute("class", "navbar-toggler-icon");

// Appending toggler icon to toggler button
togglerButton.appendChild(togglerIcon);

// Creating collapsible content container
let collapsibleContent = document.createElement("div");
collapsibleContent.setAttribute("class", "collapse navbar-collapse justify-content-sm-center gap-4");
collapsibleContent.setAttribute("id", "navbarNavAltMarkup");

// Creating search form container
let searchFormContainer = document.createElement("div");
searchFormContainer.setAttribute("class", "search-form flex-grow-1 my-2 justify-content-center");

// Creating search form
let searchForm = document.createElement("form");
searchForm.setAttribute("class", "d-flex search-form");
searchForm.setAttribute("role", "search");

// Creating search input
let searchInput = document.createElement("input");
searchInput.setAttribute("class", "form-control border-0 rounded-2 rounded-top-0 rounded-end-0");
searchInput.setAttribute("type", "search");
searchInput.setAttribute("placeholder", "Product name, Category name etc.");

// Creating search button
let searchButton = document.createElement("button");
searchButton.setAttribute("class", "btn btn-sm border-0 rounded-2 rounded-start-0 rounded-bottom-0 search-button");
searchButton.setAttribute("type", "button");
searchButton.innerText = "Search";

// Appending input and button to search form
searchForm.appendChild(searchInput);
searchForm.appendChild(searchButton);

// Appending search form to search form container
searchFormContainer.appendChild(searchForm);

// Creating login button
let loginButton = document.createElement("a");
loginButton.setAttribute("class", "text-decoration-none my-2 btn btn-sm border-0 search-button");
loginButton.setAttribute("href", "pages/login.html");
loginButton.innerText = "Login";

// Creating cart link
let cartLink = document.createElement("a");
cartLink.setAttribute("class", "my-1 pe-2 d-flex text-decoration-none");
cartLink.setAttribute("href", "pages/cart.html");

// Creating cart icon
let cartIcon = document.createElement("i");
cartIcon.setAttribute("class", "fa fa-2x fa-shopping-cart content-color navbar-item-color");

// Appending elements to respective containers
headerContainer.appendChild(headerItemsContainer);
headerItemsContainer.appendChild(brandLink);
headerItemsContainer.appendChild(togglerButton);
headerItemsContainer.appendChild(collapsibleContent);
collapsibleContent.appendChild(searchFormContainer);
collapsibleContent.appendChild(loginButton);
collapsibleContent.appendChild(cartLink);
cartLink.appendChild(cartIcon);

// Appending header to the document body
document.body.querySelector("main").prepend(headerContainer)