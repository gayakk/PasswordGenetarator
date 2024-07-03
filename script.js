const passwordBox= document.querySelector("#password");

let length=13;

const upperCase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase="abcdefghijklmnopqrstuvwxyz";
const number="0123456789";
const symbol="@#$%^&*()_}{[]></-=";

const allChar=upperCase+lowerCase+number+symbol;
const inp=document.querySelector("#password");

function createPassword(){
    let password="";
    password+=upperCase[Math.floor(Math.random()*upperCase.length)];
    password+=lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password+=number[Math.floor(Math.random()*number.length)];
    password+=symbol[Math.floor(Math.random()*symbol.length)];

    while(length>password.length){
        password+=allChar[Math.floor(Math.random() * allChar.length)];
    }
    inp.value=password;
}
const but=document.querySelector("#gen");
but.addEventListener("click", createPassword);
function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
    alert("Password Copied successfully");
}