const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");
const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const logo = document.getElementById("logo");

// console.log(tabs, panels);

tabs.forEach((tab) => tab.addEventListener("click", onTabClick));

btn.addEventListener("click", navToggle);

function onTabClick(e) {
  tabs.forEach((tab) => {
    tab.children[0].classList.remove("border-softRed", "border-b-4");
  });

  panels.forEach((panel) => panel.classList.add("hidden"));

  //   console.log(e.target.children[0]);

  if (e.target.children.length === 0) {
    e.target.classList.add("border-softRed", "border-b-4");
  } else {
    e.target.children[0].classList.add("border-softRed", "border-b-4");
  }

  const classString = e.target.getAttribute("data-target");
  //   console.log(classString);

  document
    .getElementById("panels")
    .getElementsByClassName(classString)[0]
    .classList.remove("hidden");
}

function navToggle() {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");

  if (menu.classList.contains("flex")) {
    logo.setAttribute("src", "./images/logo-bookmark-footer.svg");
  } else {
    logo.setAttribute("src", "./images/logo-bookmark.svg");
  }
}
