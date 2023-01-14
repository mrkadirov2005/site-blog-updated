const navBar = document.querySelector(".nav-bar-item");
// console.log(navBar);
const pieButton = document.getElementById("pie");

pieButton.addEventListener("click", dropdown);

function dropdown(e) {
  //   alert("do not walk around");
  navBar.classList.toggle("nav-bar-active");
}

const header = document.getElementById("header");
const headerHeight = header.offsetHeight;

const fixHeader = () => {
  if (window.pageYOffset >= headerHeight) {
    header.classList.add("sticky-header");
  } else {
    header.classList.remove("sticky-header");
  }
  // document.body.style.backgroundColor = "white";
};

window.addEventListener("scroll", fixHeader);
