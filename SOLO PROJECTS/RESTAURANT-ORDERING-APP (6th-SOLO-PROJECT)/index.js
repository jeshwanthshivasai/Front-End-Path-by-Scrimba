import menuArray from "./data.js";
// console.log('hello')

const menuItems = (menuArray) => {
    return menuArray.map((menu) => {
        return `
            <section id="card">
                <div id="item">
                    <span id="emoji">${menu.emoji}</span>
                    <div id="info">
                        <h2 id="name">${menu.name}</h2>
                        <p id="ingredients">${menu.ingredients.join(', ')}</p>
                        <h3 id="price">$${menu.price}</h3>
                    </div>
                </div>
                <button id="add-btn" type="button">+</button>
            </section>
            <hr id="line">
        `
    }).join('')
} 

document.getElementById('menu-container').innerHTML = menuItems(menuArray)
// console.log(menuItems(menuArray));
// <i id="add-btn" class="fa-solid fa-circle-plus fa-2xl"></i>
