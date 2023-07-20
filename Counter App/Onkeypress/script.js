let inputBox = document.getElementById("input-box");
let display = document.getElementById("display");



inputBox.addEventListener('keypress', function(event){
    display.innerText ="you have Pressed" + event.key
});