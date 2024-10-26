let navContainer = document.createElement("nav");
navContainer.setAttribute("class", "nav nav-bg font-theme justify-content-center");
document.querySelector("header").after(navContainer);

let navItem = document.createElement("li");
navItem.setAttribute("class", "nav-item");
navContainer.appendChild(navItem);

let navLink = document.createElement("a");
navLink.setAttribute("class", "nav-link text-black");
navLink.setAttribute("href", "index.html");
if (window.location.href.includes("men")) {
    navLink.setAttribute("href", "../../index.html");
}
else if (window.location.href.includes("pages")) {
    navLink.setAttribute("href", "../index.html");
}
else {
    navLink.setAttribute("href", "index.html");
}
navLink.innerText = "Home";
navItem.appendChild(navLink);

let navItem1 = document.createElement("li");
navItem1.setAttribute("class", "nav-item");
navContainer.appendChild(navItem1);

let navLink1 = document.createElement("a");
navLink1.setAttribute("class", "nav-link text-black");
if (window.location.href.includes("men")) {
    navLink1.setAttribute("href", "../../pages/product.html");
}
else if (window.location.href.includes("pages")) {
    navLink1.setAttribute("href", "../pages/product.html");
}
else {
    navLink1.setAttribute("href", "pages/product.html");
}
navLink1.innerText = "All Products";
navItem1.appendChild(navLink1);

let navItem2 = document.createElement("li");
navItem2.setAttribute("class", "nav-item dropdown");
navContainer.appendChild(navItem2);

let navLink2 = document.createElement("a");
navLink2.setAttribute("class", "nav-link text-black dropdown-toggle");
navLink2.innerText = "Women";
navItem2.appendChild(navLink2);

let navDrop = document.createElement("ul");
navDrop.setAttribute("class", "dropdown-menu");
navItem2.appendChild(navDrop);

let navDropItem = document.createElement("li");
navDrop.appendChild(navDropItem);

let navDropLink = document.createElement("a");
navDropLink.setAttribute("class", "dropdown-item");
if (window.location.href.includes("men")) {
    navDropLink.setAttribute("href", "../women/women.html");
}
else if (window.location.href.includes("pages")) {
    navDropLink.setAttribute("href", "women/women.html");
}
else {
    navDropLink.setAttribute("href", "pages/women/women.html");
}
navDropLink.innerText = "All";
navDropItem.appendChild(navDropLink);

let navDropItem1 = document.createElement("li");
navDrop.appendChild(navDropItem1);

let navDropLink1 = document.createElement("a");
navDropLink1.setAttribute("class", "dropdown-item");
if (window.location.href.includes("men")) {
    navDropLink1.setAttribute("href", "../women/women_dress.html");
}
else if (window.location.href.includes("pages")) {
    navDropLink1.setAttribute("href", "women/women_dress.html");
}
else {
    navDropLink1.setAttribute("href", "pages/women/women_dress.html");
}
navDropLink1.innerText = "Dresses";
navDropItem1.appendChild(navDropLink1);

let navDropItem2 = document.createElement("li");
navDrop.appendChild(navDropItem2);

let navDropLink2 = document.createElement("a");
navDropLink2.setAttribute("class", "dropdown-item");
if (window.location.href.includes("men")) {
    navDropLink2.setAttribute("href", "../women/women_pant.html");
}
else if (window.location.href.includes("pages")) {
    navDropLink2.setAttribute("href", "women/women_pant.html");
}
else {
    navDropLink2.setAttribute("href", "pages/women/women_pant.html");
}
navDropLink2.innerText = "Pants";
navDropItem2.appendChild(navDropLink2);

let navDropItem3 = document.createElement("li");
navDrop.appendChild(navDropItem3);

let navDropLink3 = document.createElement("a");
navDropLink3.setAttribute("class", "dropdown-item");
if (window.location.href.includes("men")) {
    navDropLink3.setAttribute("href", "../women/women_skirt.html");
}
else if (window.location.href.includes("pages")) {
    navDropLink3.setAttribute("href", "women/women_skirt.html");
}
else {
    navDropLink3.setAttribute("href", "pages/women/women_skirt.html");
}
navDropLink3.innerText = "Skirts";
navDropItem3.appendChild(navDropLink3);

let navItem3 = document.createElement("li");
navItem3.setAttribute("class", "nav-item dropdown");
navContainer.appendChild(navItem3);

let navLink3 = document.createElement("a");
navLink3.setAttribute("class", "nav-link text-black dropdown-toggle");
navLink3.innerText = "Men";
navItem3.appendChild(navLink3);

let navDrop1 = document.createElement("ul");
navDrop1.setAttribute("class", "dropdown-menu");
navItem3.appendChild(navDrop1);

let navDropItem4 = document.createElement("li");
navDrop1.appendChild(navDropItem4);

let navDropLink4 = document.createElement("a");
navDropLink4.setAttribute("class", "dropdown-item");
if (window.location.href.includes("men")) {
    navDropLink4.setAttribute("href", "../men/men.html");
}
else if (window.location.href.includes("pages")) {
    navDropLink4.setAttribute("href", "men/men.html");
}
else {
    navDropLink4.setAttribute("href", "pages/men/men.html");
}
navDropLink4.innerText = "All";
navDropItem4.appendChild(navDropLink4);

let navDropItem5 = document.createElement("li");
navDrop1.appendChild(navDropItem5);

let navDropLink5 = document.createElement("a");
navDropLink5.setAttribute("class", "dropdown-item");
if (window.location.href.includes("men")) {
    navDropLink5.setAttribute("href", "../men/men_shirt.html");
}
else if (window.location.href.includes("pages")) {
    navDropLink5.setAttribute("href", "men/men_shirt.html");
}
else {
    navDropLink5.setAttribute("href", "pages/men/men_shirt.html");
}
navDropLink5.innerText = "Shirts";
navDropItem5.appendChild(navDropLink5);

let navDropItem6 = document.createElement("li");
navDrop1.appendChild(navDropItem6);

let navDropLink6 = document.createElement("a");
navDropLink6.setAttribute("class", "dropdown-item");
if (window.location.href.includes("men")) {
    navDropLink6.setAttribute("href", "../men/men_pant.html");
}
else if (window.location.href.includes("pages")) {
    navDropLink6.setAttribute("href", "men/men_pant.html");
}
else {
    navDropLink6.setAttribute("href", "pages/men/men_pant.html");
}
navDropLink6.innerText = "Pants";
navDropItem6.appendChild(navDropLink6);

let navDropItem7 = document.createElement("li");
navDrop1.appendChild(navDropItem7);

let navDropLink7 = document.createElement("a");
navDropLink7.setAttribute("class", "dropdown-item");
if (window.location.href.includes("men")) {
    navDropLink7.setAttribute("href", "../men/men_hoodie.html");
}
else if (window.location.href.includes("pages")) {
    navDropLink7.setAttribute("href", "men/men_hoodie.html");
}
else {
    navDropLink7.setAttribute("href", "pages/men/men_hoodie.html");
}
navDropLink7.innerText = "Hoodies";
navDropItem7.appendChild(navDropLink7);

let navItem4 = document.createElement("li");
navItem4.setAttribute("class", "nav-item");
navContainer.appendChild(navItem4);

let navLink4 = document.createElement("a");
navLink4.setAttribute("class", "nav-link text-black");
if (window.location.href.includes("men")) {
    navLink4.setAttribute("href", "../../pages/kid.html");
}
else if (window.location.href.includes("pages")) {
    navLink4.setAttribute("href", "../pages/kid.html");
}
else {
    navLink4.setAttribute("href", "pages/kid.html");
}
navLink4.innerText = "Kids";
navItem4.appendChild(navLink4);

let navItem5 = document.createElement("li");
navItem5.setAttribute("class", "nav-item");
navContainer.appendChild(navItem5);

let navLink5 = document.createElement("a");
navLink5.setAttribute("class", "nav-link text-black");
if (window.location.href.includes("men")) {
    navLink5.setAttribute("href", "../../pages/contact.html");
}
else if (window.location.href.includes("pages")) {
    navLink5.setAttribute("href", "../pages/contact.html");
}
else {
    navLink5.setAttribute("href", "pages/contact.html");
}
navLink5.innerText = "Contact Us";
navItem5.appendChild(navLink5);

function resToggle() {
    if (window.screen.width <= 768) {
        navLink3.setAttribute("data-bs-toggle", "dropdown");
        navLink2.setAttribute("data-bs-toggle", "dropdown");
    }
    else {
        navLink3.removeAttribute("data-bs-toggle", "dropdown");
        navLink2.removeAttribute("data-bs-toggle", "dropdown");
    }
}
window.addEventListener("resize", resToggle);