const themeBtn = document.getElementById("btn");
const preLoader = document.querySelector(".preloader");
const content = document.getElementById("content");
themeBtn.addEventListener("click", () => {
  const element = document.body;
  element.classList.toggle("light-mode");
});

