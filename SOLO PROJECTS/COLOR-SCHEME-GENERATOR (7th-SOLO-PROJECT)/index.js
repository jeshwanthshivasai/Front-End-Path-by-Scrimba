let colors
let colorDropdown = document.getElementById('color-dropdown')
let colorSchemes = document.getElementById('color-schemes')
let colorHexCodes = document.getElementById('color-hex-codes')

const getColorSchemes = () => {
    fetch('https://www.thecolorapi.com/scheme?hex=0047AB')
    .then(res => res.json())
    .then(colors => {
        console.log(colors)
        console.log(colors._links.schemes)



    })
}

document.getElementById(get-btn).addEventListener('submit', getColorSchemes)


    colors = Object.keys(colors._links.schemes)
colorDropdown.innerHTML
    return colors.map(color => `
        <option>${color}</option>
        `)