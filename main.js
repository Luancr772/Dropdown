// menu active
document.getElementById("btn_open").addEventListener("click", open_close_menu);
// khai bao bien
var menu_side = document.getElementById("menu_side");
var btn_open = document.getElementById("btn_open");
var body = document.getElementById("body");

// function
function open_close_menu() {
  body.classList.toggle("body_active");
  menu_side.classList.toggle("menu_side_active");
}
// reponsive
if (window.innerWidth < 760) {
  body.classList.add("body_active");
  menu_side.classList.add("menu_side_active");
}

window.addEventListener("resize", function () {
  if (window.innerWidth > 760) {
    body.classList.remove("body_active");
    menu_side.classList.remove("menu_side_active");
  }
  if (window.innerWidth < 760) {
    body.classList.add("body_active");
    menu_side.classList.add("menu_side_active");
  }
});
// jquery dropdown menu

const dropDown = document.querySelector(".optionn1");

dropDown.addEventListener("click", function (e) {
  const dropdownList = e.target.nextElementSibling;

  if (dropdownList) {
    dropdownList.classList.toggle("show");
  }
});
