let colorPickerEl = document.getElementById('color-picker')
let colorDropdownEl = document.getElementById('color-dropdown')
let colorSchemesEl = document.getElementById('color-schemes')
let getBtnEl = document.getElementById('get-btn')

//fetch the color modes on page load by attaching a even listener to the window and
//adding an event which loads immediately after the html is finished parsing
window.addEventListener('DOMContentLoaded', () => {
    fetch(`https://www.thecolorapi.com/scheme?hex=000000&mode=monochrome&count=1`)
    .then(res => res.json())
    .then(colors => {
        const colorSchemes = Object.keys(colors._links.schemes)
        // console.log(colorSchemes)
        for(const colorScheme of colorSchemes) {
            // console.log(colorScheme)
            colorDropdownEl.innerHTML += `
                <option value="${colorScheme}">${colorScheme}</option>
            `
        }
    })
})


getBtnEl.addEventListener('click', () => {
    const selectedColor = colorPickerEl.value.slice(1)
    const selectedScheme = colorDropdownEl.value

    fetch(`https://www.thecolorapi.com/scheme?hex=${selectedColor}&mode=${selectedScheme}&count=5`)
    .then(res => res.json())
    .then(data => {
        // console.log(data)
        colorSchemesEl.innerHTML = ""
        colorHexCodesEl.innerHTML = ""

        for (const color of data.colors) {
            colorSchemesEl.innerHTML += `
                <div class="color" style="background-color:${color.hex.value}"></div>
            `
            // console.log(color.hex.value)
            colorHexCodesEl.innerHTML += `
                <p class="hex">${color.hex.value}</p>
            `
        }
    })
})