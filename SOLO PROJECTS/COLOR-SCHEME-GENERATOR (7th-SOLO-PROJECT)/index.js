let colorScheme
let colorPickerEl = document.getElementById('color-picker')
let colorDropdown = document.getElementById('color-dropdown')
let colorSchemes = document.getElementById('color-schemes')
let colorHexCodes = document.getElementById('color-hex-codes')
let getBtn = document.getElementById('get-btn')

window.addEventListener('DOMContentLoaded', getColorSchemes)

//to take input from colorpicker and generate hex code in console
let colorPicker = colorPickerEl.addEventListener('change', () => {
    const selectedColor = colorPickerEl.value
})

//fetches color schemes from the color api
const getColorSchemes = () => {
    fetch('https://www.thecolorapi.com/scheme?hex=0047AB')
    .then(res => res.json())
    .then(colors => {
        //fetching color schemes and storing the keys of the object
        colorScheme = Object.keys(colors._links.schemes)
        getColorScheme(colorScheme)
        
    })
}

const getColorScheme = (colorScheme) => {
    colorScheme.map(color => {
        colorDropdown.innerHTML += `
            <option value="${color}">${color}</option>
        `
    })
}

getBtn.addEventListener('click', getColorSchemes)