import { registerEventListeners } from "../helpers/eventListeners";
import {headerMenuEventListeners} from "../helpers/eventListeners"

const renderRegisterPage = () => {
  const container = `  <div class="select">
    
      <select name="tableNumber" id="select_table">
        <option hidden>Սեղանի համարը</option>
       
      </select>
      <button class="book"> Ամրագրել<button />
    
  </div>`;

  document.querySelector(".container").innerHTML = container;
  registerEventListeners();

  fetch("http://localhost:8080/table?url=get-all")
    .then(function (response) {
      console.log(response);
      return response.json();
      
    })
    .then(function (data) {
      console.log(data[0]);
      let x = data.reduce(function (preValue, elem) {
        return (preValue += `<option id = "table-1" value="${elem.id}">${elem.number}</option>`);
      }, "");
      //console.log(x);
      document
        .getElementById("select_table")
        .insertAdjacentHTML("beforeend", x);
    });
};

export { renderRegisterPage };
// <option id = "table-1" value="1">սեղան 1</option>
// <option id = "table-2" value="2">սեղան 2</option>
// <option id = "table-3" value="3">սեղան 3</option>
// <option id = "table-4" value="4">սեղան 4</option>
// <option id = "table-5" value="5">սեղան 5</option>
// <option id = "table-6" value="6">սեղան 6</option>
// <option id = "table-7" value="7">սեղան 7</option>
