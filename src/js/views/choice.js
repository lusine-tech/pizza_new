import { choiceEventListeners } from "../helpers/eventListeners";
import { headerMenuEventListeners} from "../helpers/eventListeners"
import { HOST } from "../helpers/constants";
import { State } from "../model";

const renderChoicePage = () => {
  const container = ` 
        <div class="dishes">          
          
        </div> `;

  document.querySelector(".container").innerHTML = container;
  fetch("http://localhost:8080/productType?url=get-all")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let x = data.reduce(function (preValue, elem) {
        return (preValue += `<div class="dishes_type" id = "${elem.id}">
      <div class="dishes_type_name">${elem.name}</div>
     </div>`);
      }, "");
      document.querySelector(".dishes").insertAdjacentHTML("beforeend", x);
      choiceEventListeners();
    });
};

export { renderChoicePage };
// <div class="dishes_type" id = "type_snacks">
//           <div class="dishes_type_name">Խորտիկներ</div>
//         </div>

//         <div class="dishes_type" id = "type_sweets">
//           <div class="dishes_type_name">Քաղցրավենիք</div>
//         </div>

//         <div class="dishes_type" id = "type_drinks">
//           <div class="dishes_type_name">Ըմպելիք</div>
//         </div>

//         <div class="dishes_type" id = "type_pizza">
//           <div class="dishes_type_name">Պիցցաներ</div>
//         </div>

//         <div class="dishes_type" id = "type_saladess">
//           <div class="dishes_type_name">Աղցաններ</div>
//         </div>
//<div class="dishes_type" id="type_hotDishes">
//<div class="dishes_type_name">Տաք ուտեստ</div>
//</div>;
