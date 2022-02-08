import Router from "./lib/router.js";
import {renderRegisterPage} from "./views/register";
import {setCookie} from "./helpers/storage";
import {renderChoicePage} from "./views/choice";
import {renderProductPage} from "./views/product";
import {renderHeaderMenu} from "./views/header-menu";
import {renderProductMenuPage} from "./views/productMenu";
import { renderZambyuxPage } from "./views/zumbyux.js";
let router = new Router();

router.addRoute("/", function () {
  renderRegisterPage();

});


router.addRoute("/menu", function () {
  
  renderChoicePage();
   renderHeaderMenu();
});

router.addRoute("/menu/:product", function (event) {
  // ...
  
  console.log(event.params);
  renderProductPage(event.params.product);
});


router.addRoute("/menu/:product/:item",function (event){
  console.log(event.params);
  renderProductMenuPage(event.params);
})

router.addRoute("/basket", function (){
  console.log("and");
  renderZambyuxPage();
})

export default router;