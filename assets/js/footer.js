// Creating footer element
let footerContainer = document.createElement("footer");
footerContainer.setAttribute("class", "bg-dark py-2");
document.body.appendChild(footerContainer)

// Creating container for footer items
let footerItem = document.createElement("div");
footerItem.setAttribute("class", "d-sm-flex justify-content-evenly");
footerContainer.appendChild(footerItem)

let footElements = ['Women', 'Dresses', 'Pants', 'Skirts', 'Men', 'Shirts', 'Pants', 'Hoodies', 'Kids', 'Links', 'Home', 'Login', 'Contact']

let counter = 0;

let elementContainer;

for (let element of footElements) {
    if (counter % 4 == 0 || element == "Kids") {

        let ElementContainer = document.createElement("ul");
        ElementContainer.setAttribute("class", "list-group");
        footerItem.appendChild(ElementContainer)
        elementContainer = ElementContainer

        let ElementItem = document.createElement("li");
        ElementItem.setAttribute("class", "pt-3 list-group-item bg-dark text-white font-theme fs-5 border-0 text-center");
        ElementItem.innerText = element;
        ElementContainer.appendChild(ElementItem)

        if (element == "Kids") {
            counter--;
        }

    }
    else {
        let ElementItem = document.createElement("li");
        ElementItem.setAttribute("class", "list-group-item bg-dark text-white font-theme border-0 text-center");
        ElementItem.innerText = element;
        elementContainer.appendChild(ElementItem)
    }

    counter++;
}

let footerSeparator = document.createElement("hr");
footerSeparator.setAttribute("class", "border border-light p-0 my-2");
footerContainer.appendChild(footerSeparator);

let CopyRightContainer = document.createElement("ul");
CopyRightContainer.setAttribute("class", "list-group");
footerContainer.appendChild(CopyRightContainer)

let CopyRightItem = document.createElement("li");
CopyRightItem.setAttribute("class", "pt-2 list-group-item bg-dark text-white font-theme fs-5 border-0 text-center");
CopyRightItem.innerText = "Copyright © Shopperce 2024";
CopyRightContainer.appendChild(CopyRightItem)