const themeBtn = document.getElementById("btn");
const border = document.querySelector(".container .row .img-fluid")
const preLoader = document.querySelector(".preloader");
let borderColor = "white"
themeBtn.addEventListener("click", ()  => {
    const element = document.body
    element.classList.toggle("light-mode")
    if (borderColor == "white") {
        border.style.borderColor = "#0a2547"
        borderColor = "#0a2547"
    } else {
        border.style.borderColor = "white"
        borderColor = "white"
    }
}) 


window.addEventListener("load", () => {
    preLoader.style.display = "none"
})