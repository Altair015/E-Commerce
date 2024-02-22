// Creating footer element
let footerContainer = document.createElement("footer");
footerContainer.setAttribute("class", "bg-dark py-2");
document.body.appendChild(footerContainer)

// Creating container for footer items
let footerItem = document.createElement("div");
footerItem.setAttribute("class", "d-sm-flex justify-content-evenly");
footerContainer.appendChild(footerItem)

let WomenContainer = document.createElement("div");
WomenContainer.setAttribute("class", "list-group");
footerItem.appendChild(WomenContainer)

let WomenItem = document.createElement("a");
WomenItem.setAttribute("class", "pt-3 list-group-item bg-dark text-white font-theme fs-5 border-0 text-center no-select");
if (window.location.href.includes("men")) {
    WomenItem.setAttribute("href", "../women/women.html");
}
else if (window.location.href.includes("pages")) {
    WomenItem.setAttribute("href", "women/women.html");
}
else {
    WomenItem.setAttribute("href", "pages/women/women.html");
}
WomenItem.innerText = "Women";
WomenContainer.appendChild(WomenItem)

let WomenItem1 = document.createElement("a");
WomenItem1.setAttribute("class", "list-group-item bg-dark text-white font-theme border-0 text-center no-select");
if (window.location.href.includes("men")) {
    WomenItem1.setAttribute("href", "../women/women_dress.html");
}
else if (window.location.href.includes("pages")) {
    WomenItem1.setAttribute("href", "women/women_dress.html");
}
else {
    WomenItem1.setAttribute("href", "pages/women/women_dress.html");
}
WomenItem1.innerText = "Dresses";
WomenContainer.appendChild(WomenItem1)

let WomenItem2 = document.createElement("a");
WomenItem2.setAttribute("class", "list-group-item bg-dark text-white font-theme border-0 text-center no-select");
if (window.location.href.includes("men")) {
    WomenItem2.setAttribute("href", "../women/women_pant.html");
}
else if (window.location.href.includes("pages")) {
    WomenItem2.setAttribute("href", "women/women_pant.html");
}
else {
    WomenItem2.setAttribute("href", "pages/women/women_pant.html");
}
WomenItem2.innerText = "Pants";
WomenContainer.appendChild(WomenItem2)

let WomenItem3 = document.createElement("a");
WomenItem3.setAttribute("class", "list-group-item bg-dark text-white font-theme border-0 text-center no-select");
if (window.location.href.includes("men")) {
    WomenItem3.setAttribute("href", "../women/women_skirt.html");
}
else if (window.location.href.includes("pages")) {
    WomenItem3.setAttribute("href", "women/women_skirt.html");
}
else {
    WomenItem3.setAttribute("href", "pages/women/women_skirt.html");
}
WomenItem3.innerText = "Skirts";
WomenContainer.appendChild(WomenItem3)

let MenContainer = document.createElement("div");
MenContainer.setAttribute("class", "list-group");
footerItem.appendChild(MenContainer)

let MenItem = document.createElement("a");
MenItem.setAttribute("class", "pt-3 list-group-item bg-dark text-white font-theme fs-5 border-0 text-center no-select");
if (window.location.href.includes("men")) {
    MenItem.setAttribute("href", "../men/men.html");
}
else if (window.location.href.includes("pages")) {
    MenItem.setAttribute("href", "men/men.html");
}
else {
    MenItem.setAttribute("href", "pages/men/men.html");
}
MenItem.innerText = "Men";
MenContainer.appendChild(MenItem)

let MenItem1 = document.createElement("a");
MenItem1.setAttribute("class", "list-group-item bg-dark text-white font-theme border-0 text-center no-select");
if (window.location.href.includes("men")) {
    MenItem1.setAttribute("href", "../men/men_shirt.html");
}
else if (window.location.href.includes("pages")) {
    MenItem1.setAttribute("href", "men/men_shirt.html");
}
else {
    MenItem1.setAttribute("href", "pages/men/men_shirt.html");
}
MenItem1.innerText = "Shirts";
MenContainer.appendChild(MenItem1)

let MenItem2 = document.createElement("a");
MenItem2.setAttribute("class", "list-group-item bg-dark text-white font-theme border-0 text-center no-select");
if (window.location.href.includes("men")) {
    MenItem2.setAttribute("href", "../men/men_pant.html");
}
else if (window.location.href.includes("pages")) {
    MenItem2.setAttribute("href", "men/men_pant.html");
}
else {
    MenItem2.setAttribute("href", "pages/men/men_pant.html");
}
MenItem2.innerText = "Pants";
MenContainer.appendChild(MenItem2)

let MenItem3 = document.createElement("a");
MenItem3.setAttribute("class", "list-group-item bg-dark text-white font-theme border-0 text-center no-select");
if (window.location.href.includes("men")) {
    MenItem3.setAttribute("href", "../men/men_hoodie.html");
}
else if (window.location.href.includes("pages")) {
    MenItem3.setAttribute("href", "men/men_hoodie.html");
}
else {
    MenItem3.setAttribute("href", "pages/men/men_hoodie.html");
}
MenItem3.innerText = "Hoodies";
MenContainer.appendChild(MenItem3)

let KidContainer = document.createElement("div");
KidContainer.setAttribute("class", "list-group");
footerItem.appendChild(KidContainer)

let KidItem = document.createElement("a");
KidItem.setAttribute("class", "pt-3 list-group-item bg-dark text-white font-theme fs-5 border-0 text-center no-select");
if (window.location.href.includes("men")) {
    KidItem.setAttribute("href", "../../pages/kid.html");
}
else if (window.location.href.includes("pages")) {
    KidItem.setAttribute("href", "../pages/kid.html");
}
else {
    KidItem.setAttribute("href", "pages/kid.html");
}
KidItem.innerText = "Kids";
KidContainer.appendChild(KidItem)

let LinkContainer = document.createElement("div");
LinkContainer.setAttribute("class", "list-group");
footerItem.appendChild(LinkContainer)

let LinkItem = document.createElement("a");
LinkItem.setAttribute("class", "pt-3 list-group-item bg-dark text-white font-theme fs-5 border-0 text-center no-select");
LinkItem.innerText = "Links";
LinkContainer.appendChild(LinkItem)

let HomeItem = document.createElement("a");
HomeItem.setAttribute("class", "list-group-item bg-dark text-white font-theme border-0 text-center no-select");
if (window.location.href.includes("men")) {
    HomeItem.setAttribute("href", "../../index.html");
}
else if (window.location.href.includes("pages")) {
    HomeItem.setAttribute("href", "../index.html");
}
else {
    HomeItem.setAttribute("href", "../index.html");
}
HomeItem.innerText = "Home";
LinkContainer.appendChild(HomeItem)

let LoginItem = document.createElement("a");
LoginItem.setAttribute("class", "list-group-item bg-dark text-white font-theme border-0 text-center no-select");
if (window.location.href.includes("men")) {
    LoginItem.setAttribute("href", "../../pages/login.html");
}
else if (window.location.href.includes("pages")) {
    LoginItem.setAttribute("href", "../pages/login.html");
}
else {
    LoginItem.setAttribute("href", "pages/login.html");
}
LoginItem.innerText = "Login";
LinkContainer.appendChild(LoginItem)

let ContactItem = document.createElement("a");
ContactItem.setAttribute("class", "list-group-item bg-dark text-white font-theme border-0 text-center no-select");
if (window.location.href.includes("men")) {
    ContactItem.setAttribute("href", "../../pages/contact.html");
}
else if (window.location.href.includes("pages")) {
    ContactItem.setAttribute("href", "../pages/contact.html");
}
else {
    ContactItem.setAttribute("href", "pages/contact.html");
}
ContactItem.innerText = "Contact";
LinkContainer.appendChild(ContactItem)

let footerSeparator = document.createElement("hr");
footerSeparator.setAttribute("class", "border border-light p-0 my-2");
footerContainer.appendChild(footerSeparator);

let CopyRightItem = document.createElement("p");
CopyRightItem.setAttribute("class", "m-0 list-group-item bg-dark text-white font-theme fs-5 border-0 text-center no-select");
CopyRightItem.innerText = "Copyright © Shopperce 2024";
footerContainer.appendChild(CopyRightItem)