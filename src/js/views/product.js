
import {productEventListeners} from "../helpers/eventListeners";
import { headerMenuEventListeners } from "../helpers/eventListeners";
import { HOST } from "../helpers/constants";


const renderProductPage = (productType) => {
  let container = `

    <div class="pizza">  
    </div>`;
  fetch("http://localhost:8080/product?url=get-all-by-product-type&product_type_id=1").then(
    function (response) {
      return response.json();
    }
  ).then(function(data){
      console.log(data);
      let x= data.reduce(function(prevVlaue,elem){
          return prevVlaue += `<div class="product-items" id = "product_items1">
          <div class= "product1">
              <img class= "img-pizza" src="./image/pizzaImg/pizza1.png" alt="">
          </div>
          <div class= "product2">
              <div class="line">
              <p>Cheese Pizza</p>
              <p> 1pcs: ${elem.currency} ${elem.price}</p>
          </div>
          </div>
          <div class= "product3">
              <h3>Ingredients</h3>
              <ul>
                  <li>chesse</li>
                  <li>totmato</li>
                  <li>pepper</li>
              </ul>
          </div>
        </div>
        `
      },"");
      document.querySelector(".container").innerHTML = container;
      document.querySelector(".pizza").insertAdjacentHTML("beforeend",x);
      productEventListeners(productType);
  }) 
  
};

export { renderProductPage };
// `
// <div class="product-items" id = "product_items1">
//   <div class= "product1">
//       <img class= "img-pizza" src="./image/pizzaImg/pizza1.png" alt="">
//   </div>
//   <div class= "product2">
//       <div class="line">
//       <p>Cheese Pizza</p>
//       <p> 1pcs: ֏350</p>
//   </div>
//   </div>
//   <div class= "product3">
//       <h3>Ingredients</h3>
//       <ul>
//           <li>chesse</li>
//           <li>totmato</li>
//           <li>pepper</li>
//       </ul>
//   </div>
// </div>
// <div class="product-items" id = "product_items2">
//   <div class= "product1">
//       <img class= "img-pizza" src="./image/pizzaImg/pizza2.png" alt="">
//   </div>
//   <div class= "product2">
//       <div class="line">
//           <p>Cheese Pizza</p>
//           <p> 1pcs: ֏350</p>
//       </div>
//   </div>
//   <div class= "product3" >
//       <h3>Ingredients</h3>
//       <ul>
//           <li>chesse</li>
//           <li>totmato</li>
//           <li>pepper</li>
//       </ul>
//   </div>
// </div>
// <div class="product-items" id = "product_items3">
//   <div class= "product1">
//       <img class= "img-pizza" src="./image/pizzaImg/pizza3.png" alt="">
//   </div>
//   <div class= "product2">
//       <div class="line">
//           <p>Cheese Pizza</p>
//           <p> 1pcs: ֏350</p>
//       </div>
//   </div>
//   <div class= "product3">
//       <h3>Ingredients</h3>
//       <ul>
//           <li>chesse</li>
//           <li>totmato</li>
//           <li>pepper</li>
//       </ul>
//   </div>
// </div>`
