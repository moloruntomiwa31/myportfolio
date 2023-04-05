const themeBtn = document.getElementById("btn");

themeBtn.addEventListener("click", ()  => {
    const element = document.body
    element.classList.toggle("light-mode")
}) 