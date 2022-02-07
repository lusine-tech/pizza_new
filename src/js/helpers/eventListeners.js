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
      setCookie("table", sel);
      router.redirect("/menu");
      document.body.style.backgroundImage = "url('../image/ej2.jpg')";
    } else {
      alert("please choose number of table");
    }
  };
};
export const choiceEventListeners = () => {
  document.querySelectorAll(".dishes_type").forEach(function (element) {
    element.addEventListener("click", function () {
      // console.log(this);
      // console.log(this.id);

      router.redirect(`/menu/${this.id}`);
    });
  });
};
export const productEventListeners = (productType) => {
  document.querySelectorAll(".product-items").forEach(function (element) {
    //console.log("element=",element)
    element.addEventListener("click", function () {
      //console.log(this)
      router.redirect(`/menu/${productType}/${this.id}`);
    });
  });
};
export const productMenuEventListeners = () => {
  document.querySelector(".confirm").addEventListener("click", function () {
    const prodObj = {
      productId: "",
      quantity: 2,
    };
  });
  //   .querySelector("#confirm")
  //   .addEventListener("click", renderZambyuxPage);

  // router.redirect("/basket")

  /*const prodObj = {
   productId: "fsdfsdfdsf",
   quantity: 2,
 };
 State.basket.push(prodObj);*/
};
