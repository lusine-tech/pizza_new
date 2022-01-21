import { renderRegisterPage } from "./js/views/register";
import { renderChoicePage } from "./js/views/choice";
import { renderProductPage } from "./js/views/product";
import { renderProductMenuPage } from "./js/views/productMenu";
import { renderZambyuxPage } from "./js/views/zumbyux";
import router from "./js/routing";

renderRegisterPage();
let book = document.querySelector(".book");
book.addEventListener("click", renderChoicePage);
//renderChoicePage();
//router.redirect("/menu");
