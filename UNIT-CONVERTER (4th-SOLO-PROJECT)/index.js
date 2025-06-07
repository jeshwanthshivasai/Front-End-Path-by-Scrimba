/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

// function inputNumber(num) {
//     inputNum.value = num;
// }

// inputNum.value = 20;



function convertNum() {
    
    let inputNum = document.getElementById("number");
    
    const inputVal = parseFloat(inputNum.value);

let clength = document.getElementById("l-conversion");
let clp1 = (inputVal * 3.281).toFixed(2)
let clp2 = (inputVal / 3.281).toFixed(2)
let cvolume = document.getElementById("v-conversion");
let cvp1 = (inputVal * 0.264).toFixed(2)
let cvp2 = (inputVal / 0.264).toFixed(2)
let cmass = document.getElementById("m-conversion");
let cmp1 = (inputVal * 2.204).toFixed(2)
let cmp2 = (inputVal / 2.204).toFixed(2)
    
    clength.textContent = `${inputVal} meters = ${clp1} feet | ${inputVal} feet = ${clp2} meters`;
    cvolume.textContent = `${inputVal} liters = ${cvp1} gallons | ${inputVal} gallons = ${cvp2} liters`;
    cmass.textContent = `${inputVal} kilos = ${cmp1} pounds | ${inputVal} pounds = ${cmp2} kilos`;
}