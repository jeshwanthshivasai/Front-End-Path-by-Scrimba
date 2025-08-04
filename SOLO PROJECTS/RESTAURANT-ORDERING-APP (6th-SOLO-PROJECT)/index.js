import menuArray from "./data.js";
// console.log('hello')

const menuItems = (menuArray) => {
    return menuArray.map((menu) => {
        return `
            <section class="card">
                <span class="emoji">${menu.emoji}</span>
                <div class="info">
                    <h2>${menu.name}</h2>
                    <p>${menu.ingredients}</p>
                    <h3>${menu.price}</h3>
                </div>
                <i class="fa-solid fa-circle-plus fa-2xl"></i>
            </section> 
        `
    }).join('')
} 

document.getElementById('menu-container').innerHTML = menuItems(menuArray)
// console.log(menuItems(menuArray));
