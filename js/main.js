const themeBtn = document.getElementById("btn");
const preLoader = document.querySelector(".preloader");
const content = document.getElementById("content");
themeBtn.addEventListener("click", () => {
  const element = document.body;
  element.classList.toggle("light-mode");
});

window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};

const connectForm = document.getElementById("connectForm");
connectForm.addEventListener("submit", function (e) {
  e.preventDefault();
  connectForm.reset();
  alert("Form submitted successfully!");
});
