import {choiceEventListeners} from "../helpers/eventListeners";

const renderChoicePage = () => {
    const container = ` <div class="dishes">
          <div class="dishes_type" id = "type_hotDishes">
            <div class="dishes_type_name">Տաք ուտեստ</div>
          </div>

          <div class="dishes_type" id = "type_snacks">
            <div class="dishes_type_name">Խորտիկներ</div>
          </div>

          <div class="dishes_type" id = "type_sweets">
            <div class="dishes_type_name">Քաղցրավենիք</div>
          </div>

          <div class="dishes_type" id = "type_drinks">
            <div class="dishes_type_name">Ըմպելիք</div>
          </div>

          <div class="dishes_type" id = "type_pizza">
            <div class="dishes_type_name">Պիցցաներ</div>
          </div>

          <div class="dishes_type" id = "type_saladess">
            <div class="dishes_type_name">Աղցաններ</div>
          </div>
        </div> `;
  
    document.querySelector(".container").innerHTML = container;
    choiceEventListeners();
  };
  
  export { renderChoicePage };