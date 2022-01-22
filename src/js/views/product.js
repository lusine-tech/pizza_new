import {productEventListeners} from "../helpers/eventListeners";

const renderProductPage = () => {
    const container = `
<div class="container" >
    <div class="pizza">
    <div class="product-items" id = "product-items1">
        <div class= "product1"> 
            <img class= "img-pizza" src="./image/pizzaImg/pizza1.png" alt="">
        </div>
        <div class= "product2">
            <div class="line">
            <p>Cheese Pizza</p> 
            <p> 1pcs: ֏350</p>
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
    <div class="product-items">
        <div class= "product1"> 
            <img class= "img-pizza" src="./image/pizzaImg/pizza2.png" alt="">
        </div>
        <div class= "product2">
            <div class="line">
                <p>Cheese Pizza</p> 
                <p> 1pcs: ֏350</p>
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
    <div class="product-items">
        <div class= "product1"> 
            <img class= "img-pizza" src="./image/pizzaImg/pizza3.png" alt="">
        </div>
        <div class= "product2">
            <div class="line">
                <p>Cheese Pizza</p> 
                <p> 1pcs: ֏350</p>
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
</div>
</div>`;
  
    document.querySelector(".container").innerHTML = container;
    productEventListeners();
  };
  
  export { renderProductPage };