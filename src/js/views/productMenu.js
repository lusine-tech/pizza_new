import {
  productMenuEventListeners
} from "../helpers/eventListeners";
import {
  HOST
} from "../helpers/constants";
import { headerMenuEventListeners } from "../helpers/eventListeners";

const renderProductMenuPage = (params) => {

  fetch(`${HOST}/product?url=get-by-id&product_id=1`).then(function (response) {

    return response.json()
  }).then(function (data) {
    console.log(data);
    data = data[0];
    

    let container = `   <div class="hetnamas">
    <div class="main-block">
      <header>
        <div><i class="fas fa-arrow-left"></i></div>
      
      </header>
      <main>
        <div class="main-header">${data.name}</div>
        <div class="main-colums">
          <div class="colums-1">
            <div class="peperoni">
              <img src="./image/pizzaImg/pizza2.png" alt="" />
            </div>
            <div class="cloum-1-price"><label>Գին՝</label> <label id="gin">${data.price} ${data.currency}</label> </div>
          </div>
          <div class="colums-2">
            <div class="row-1">Բաղադրություն</div>`;
            let ingredientStr = data.ingredients.map(function (ingredient) {
                  return `<div class="row-2"> ${ingredient.name} ․․․</div>`;
            });
          container += ingredientStr.join("");
          container += `
            <div class="row-3"> <label for="quantity">Քանակ՝ Կտոր:</label>
              <input type="number" id="quantity" name="quantity" min="1" max="30">
              </div>
          </div>
        </div>
        <footer>
          <div></div>
          <input type="button" class="confirmbtn" id = "confirm" value="Ավելացնել զամբյուղ" />
            </div>
        </footer>
      </main>
    </div>
  </div>`;

    document.querySelector(".container").innerHTML = container;
    productMenuEventListeners(data)
  });
};

export {
  renderProductMenuPage
};

