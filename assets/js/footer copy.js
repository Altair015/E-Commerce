// Creating footer element
let footerContainer = document.createElement("footer");
footerContainer.setAttribute("class", "bg-dark py-2");
document.body.appendChild(footerContainer)

// Creating container for footer items
let footerItem = document.createElement("div");
footerItem.setAttribute("class", "d-sm-flex justify-content-evenly");
footerContainer.appendChild(footerItem)


function checkSorES(param) {
    if (param.endsWith("s")) {
        return param.toLocaleLowerCase().slice(0, length - 1);
    }
    else if (param.endsWith("es")) {
        return param.toLocaleLowerCase().slice(0, length - 2);
    }
    else {
        return param.toLocaleLowerCase();
    }
}

let footElements = ['Women', 'Dresses', 'Pants', 'Skirts', 'Men', 'Shirts', 'Pants', 'Hoodies', 'Kids', 'Links', 'Home', 'Login', 'Contact']

let counter = 0;

let elementContainer;

for (let element of footElements) {
    if (counter % 4 == 0 || element == "Kids") {

        let ElementContainer = document.createElement("div");
        ElementContainer.setAttribute("class", "list-group");
        footerItem.appendChild(ElementContainer)
        elementContainer = ElementContainer

        let ElementItem = document.createElement("a");
        ElementItem.setAttribute("class", "pt-3 list-group-item bg-dark text-white font-theme fs-5 border-0 text-center no-select");
        ElementItem.innerText = element;
        ElementContainer.appendChild(ElementItem)

        if (element == "Kids") {
            counter--;
        }

    }
    else {
        let ElementItem = document.createElement("a");
        // ElementItem.setAttribute("href", "")
        ElementItem.setAttribute("class", "list-group-item bg-dark text-white font-theme border-0 text-center no-select");
        ElementItem.innerText = element;
        elementContainer.appendChild(ElementItem)
    }

    counter++;
}

let footerSeparator = document.createElement("hr");
footerSeparator.setAttribute("class", "border border-light p-0 my-2");
footerContainer.appendChild(footerSeparator);

let CopyRightItem = document.createElement("p");
CopyRightItem.setAttribute("class", "m-0 list-group-item bg-dark text-white font-theme fs-5 border-0 text-center no-select");
CopyRightItem.innerText = "Copyright © Shopperce 2024";
footerContainer.appendChild(CopyRightItem)