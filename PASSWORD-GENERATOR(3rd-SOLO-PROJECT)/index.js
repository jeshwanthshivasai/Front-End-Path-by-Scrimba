const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pwd1 = document.getElementById('pwd1');

let pwd2 = document.getElementById('pwd2');


function password1() {
    pwd1.textContent = "";
    for(let i=0; i<=15; i++) {
        let password1 = Math.floor(Math.random() * characters.length);
        pwd1.textContent += characters[password1];
    }
}

function password2() {
    pwd2.textContent = "";
    for(let i=0; i<=15; i++) {
        let password2 = Math.floor(Math.random() * characters.length);
        pwd2.textContent += characters[password2];
    }
}