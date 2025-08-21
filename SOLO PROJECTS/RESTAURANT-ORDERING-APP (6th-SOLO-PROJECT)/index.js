import menuArray from "./data.js";
//cart is for storing the added items from menu to cart which is initialised to an empty 'array'
let cart = []
//total is for the sum of the total price for the items inside the cart which is initialised to 'zero'
// let total = 0

//retrieve all the main components in HTML in JS
// const addBtnEl = document.querySelectorAll('.add-btn')
const menuContainerEl = document.getElementById('menu-container')
const cartContainerEl = document.getElementById('cart-container')
const detailsModalEl = document.getElementById('details-modal')
const confirmationEl = document.getElementById('confirmation')

//renders menu items
const menuItems = (menuArray) => {
    return menuArray.map((menu) => {
        const {emoji, name, ingredients, price, id} = menu
        // console.log(menu)
        return `
            <section id="card">
                <div id="item">
                    <span id="emoji">${emoji}</span>
                    <div id="info">
                        <h2 id="name">${name}</h2>
                        <p id="ingredients">${ingredients.join(', ')}</p>
                        <h3 id="price">$${price}</h3>
                    </div>
                </div>
                <button class="add-btn" type="button" data-id="${id}">+</button>
            </section>
            <hr id="line">
        `
    }).join('')
} 

menuContainerEl.innerHTML = menuItems(menuArray)
// console.log(menuItems(menuArray));

//renders cart items only
const cartItems = (cart) => {
    return cart.map((item) => {
        const {name, price, id} = item
        return `
            <div class="cart-item">
                <p>${name}</p>
                <p class="remove-btn" data-id=${id}>remove</p>
                <p>${price}</p>
            </div>
        `
    }).join('')
}

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('add-btn')) {
        const item = menuArray.find((menuItem) => menuItem.id === Number(e.target.dataset.id))
        cart.push(item)
        displayCart()
    }
    if(e.target.classList.contains('remove-btn')) {
        cart = cart.filter(item => item.id !== Number(e.target.dataset.id))
        displayCart()
    }
    if(e.target.id === 'complete-order') {
        detailsModalEl.innerHTML = formModal()
        detailsModalEl.style.display = 'block'
    }
})


//renders cart items with parent container using the cart array on the top
const displayCart = () => {
    if (cart.length === 0) {
        cartContainerEl.innerHTML = ''
        return
    }

    cartContainerEl.innerHTML = `
        <h2>Your Order</h2>
        ${cartItems(cart)}
        <hr>
        <div class='cart-total'>
            <p>Total: ${cart.reduce((sum, item) => sum + item.price, 0)}</p>
        </div>
        <button id="complete-order">Complete Order</button>
    `    
}

//renders pop-up form modal
const formModal = () => {
    return `
        <h2>Enter Card Details</h2>
        <form id="payment-form">
            <input placeholder="Enter your name" type="text" required/>
            <input placeholder="Enter Card Number" type="number" required/>
            <input placeholder="Enter CVV" type="number" required/>
            <button id="payment-btn" type="submit">Pay</button>
        </form>
    `
}

document.addEventListener('submit', (e) => {
    if(e.target.id === 'payment-form') {
        e.preventDefault()
        const name = e.target.querySelector('input[type="text"]').value
        detailsModalEl.style.display = 'none'
        cart = []
        displayCart()
        confirmationEl.innerHTML = confirmationMsg(name)
    }
})

//renders confirmation message
const confirmationMsg = (name) => {
    return `
        <h2>Thanks, ${name}! Your order is on its way!</h2>
    `
}