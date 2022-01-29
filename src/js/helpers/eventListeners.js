import { renderChoicePage } from "../views/choice";
import { renderProductPage } from "../views/product";
import { renderHeaderMenu } from "../views/header-menu";
import { renderProductMenuPage } from "../views/productMenu";
import { renderZambyuxPage } from "../views/zumbyux";
import { setCookie } from "./storage";
import router from "../routing";

export const registerEventListeners = () => {
  const table = document.querySelector("#select_table");
  const book = document.querySelector(".book");

  //renderChoicePage();
  //router.redirect("/menu");
  book.onclick = (e) => {
    e.preventDefault();

    const selectedValues = [].filter
      .call(table.options, (option) => option.selected)
      .map((option) => option.value);

    let sel = Number(selectedValues[0]);

    if (typeof sel === "number" && !isNaN(sel)) {
      router.redirect("/menu");
      document.body.style.backgroundImage = "url('../image/ej2.jpg')";
    } else {
      alert("please choose number of table");
    }
  }
};
export const choiceEventListeners = () => {
  document.querySelectorAll(".dishes_type").forEach(function (element) {
    element.addEventListener("click", function () {
      // console.log(this);
      // console.log(this.id);
      debugger;
      
      router.redirect(`/menu/${this.id}`);
    });
  });
};
export const productEventListeners = () => {
  document
    .querySelector("#product-items1")
    .addEventListener("click", renderProductMenuPage);
};
export const productMenuEventListeners = () => {
  document
    .querySelector("#confirm")
    .addEventListener("click", renderZambyuxPage);
};
