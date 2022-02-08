import {
  renderChoicePage
} from "../views/choice";
import {
  renderProductPage
} from "../views/product";
import {
  renderHeaderMenu
} from "../views/header-menu";
import {
  renderProductMenuPage
} from "../views/productMenu";
import {
  renderZambyuxPage
} from "../views/zumbyux";
import {
  setCookie
} from "./storage";
import router from "../routing";
import {
  State
} from "../model";
import {
  deleteCookie
} from "./storage";


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
export const productMenuEventListeners = (data) => {
  console.log(data, "productMenuEventListeners");
  document.querySelector("#confirm").addEventListener("click", function () {
    console.log(document.getElementById("quantity"));
    console.log(document.getElementById("quantity").value);
    const prodObj = {
      ...data,
      quantity: document.getElementById('quantity').value
    };

    State.basket.push(prodObj);
    console.log("prodObj.quantity", prodObj.quantity);
    router.redirect(`/basket`)
  });

};

export const headerMenuEventListeners = () => {
  console.log("headerMenuEventListeners")
if (document.querySelector(".menu-table")) {
  document.querySelector(".menu-table").addEventListener("click", function () {
      router.redirect(`/`);
  });
}
debugger
console.log(document.querySelector(".menu-basket"));
if (document.querySelector(".menu-basket")) {
 console.log("if")
  document.querySelector(".menu-basket").addEventListener("click", function () {
    debugger
    router.redirect(`/basket`);
  });
}

if (document.querySelector(".menu-cancel")) {
  document.querySelector(".menu-cancel").addEventListener("click", function () {
    deleteCookie("table");
    router.redirect(`/`);
  });
}

 
}

export const confirmOrder = () => {
  document.querySelector(".confirmOrder").addEventListener("click", function () {
     router.redirect(`/`);
  });
}