import Router from "./lib/router.js";
import {renderRegisterPage} from "./views/register";
import {setCookie} from "./helpers/storage";
import {renderChoicePage} from "./views/choice";
import {renderProductPage} from "./views/product"
let router = new Router();

router.addRoute("/", function () {
  renderRegisterPage();

});

router.addRoute("/menu", function () {
  
  renderChoicePage();
  // renderHeaderMenu();
});

router.addRoute("/menu/:product", function () {
  // ...
  renderProductPage();
});

export default router;