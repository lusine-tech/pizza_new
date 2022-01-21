import { renderRegisterPage } from "./js/views/register";
import { renderChoicePage } from "./js/views/choice";
import { renderProductPage } from "./js/views/product";
import { renderProductMenuPage } from "./js/views/productMenu";
import { renderZambyuxPage } from "./js/views/zumbyux";
import router from "./js/routing";

renderRegisterPage();
const table = document.querySelector("#select_table");
const book = document.querySelector(".book");


//renderChoicePage();
//router.redirect("/menu");
book.onclick = (e) => {

  e.preventDefault();
  
  const selectedValues = [].filter
    .call(table.options, (option) => option.selected)
    .map((option) => option.text);
   
  renderChoicePage();
   document.body.style.backgroundImage = "url('../image/ej2.jpg')";

  //alert(selectedValues);
};
