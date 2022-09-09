
const menuBar = document.querySelector(".menu-bar");
const menu = document.querySelector(".hero-links");

//Formatting Menu bar 
menuBar.addEventListener("click", ()=>{
    menu.classList.toggle("active");
    menuBar.classList.toggle("active")
})

menu.addEventListener("click", ()=>{
    menu.classList.remove("active");
    menuBar.classList.remove("active")
})