import { renderRegisterPage } from "./js/views/register";
// import { renderChoicePage } from "./js/views/choice";
// import { renderProductPage } from "./js/views/product";
// import { renderProductMenuPage } from "./js/views/productMenu";
// import { renderZambyuxPage } from "./js/views/zumbyux";
 import router from "./js/routing";

import { getCookie } from "./js/helpers/storage";



//router.redirect("/");
let hash = window.location.hash;
console.log(getCookie("table"));
if(getCookie("table")!==undefined){
    let hashString = hash.indexOf("#")>=0 && hash.split("#")[1] !== "/" ? hash.split("#")[1] : "/menu";

    router.redirect(hashString);
}else{
    router.redirect("/")
}





  

