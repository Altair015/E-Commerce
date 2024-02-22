let men = {
    'Shirts': 'men_shirt.html',
    'Pants': 'men_pant.html',
    'Hoodies': 'men_hoodie.html'
}
let women = {
    'Dresses': 'women_dress.html',
    'Pants': 'women_pant.html',
    'Skirts': 'women_skirt.html'
}

let link = {
    'Home': 'index.html',
    'Login': 'login.html',
    'Contact': 'contact.html'
}

let kid = { 'Kids': 'kid.html' }

let footElements = {
    women, men, kid, link
}

const temp = {
    men: {
        'Shirts': 'men_shirt.html',
        'Pants': 'men_pant.html',
        'Hoodies': 'men_hoodie.html'
    },
    women: {
        'Dresses': 'women_dress.html',
        'Pants': 'women_pant.html',
        'Skirts': 'women_skirt.html'
    },
    link: {
        'Home': 'index.html',
        'Login': 'login.html',
        'Contact': 'contact.html'
    },
    kid: { 'Kids': 'kid.html' }
}

temp.men.Shirts


console.log(Object.keys(kid))
console.log(Object.keys(kid))
console.log(Object.va(kid))


// for (let ite of Object.entries(men)) {
//     console.log(ite)
//     for (let item of ite) {
//         console.log(item)
//     }
// }
// console.log(Object.keys(women))
