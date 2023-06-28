let nav_list_mob = document.querySelector(".nav-main-list-mob")
let btn_menu = document.querySelector("#btn-open-close-menu")

btn_menu.addEventListener("click", (e) => {
  e.preventDefault();
  // смена темы
  nav_list_mob.classList.toggle("list-mob-show"); 
  btn_menu.classList.toggle("btn-open-menu");
  btn_menu.classList.toggle("btn-close-menu");
});
