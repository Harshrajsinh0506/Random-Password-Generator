const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let a = document.getElementById("pass1")
let b = document.getElementById("pass2")
let password1 ="a"
let password2 ="a"


function passGen(){
    let inplength = document.getElementById("inp").value
    let sugg1 = ""
    let sugg2 = ""
    for(let i=0; i< inplength; i++){
        password1 = characters[Math.floor(Math.random()*characters.length)]
        sugg1+=password1
        password2 = characters[Math.floor(Math.random()*characters.length)]
        sugg2+=password2
    }
    a.textContent = sugg1
    b.textContent = sugg2
}


