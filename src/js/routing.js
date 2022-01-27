import Router from "./lib/router.js";
import {renderRegisterPage} from "./views/register";
import {setCookie} from "./helpers/storage";
import {renderChoicePage} from "./views/choice";

let router = new Router();

router.addRoute("/", function () {
  renderRegisterPage();
  setCookie();
});

router.addRoute("/menu", function () {
  debugger
  renderChoicePage();
  renderHeaderMenu();
});

router.addRoute("/menu/:product", function () {
  // ...
});

export default router;