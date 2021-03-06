import { State } from "../model";
import { confirmOrder } from "../helpers/eventListeners";
import { headerMenuEventListeners } from "../helpers/eventListeners";

const renderZambyuxPage = () => {
  console.log(State.basket);

  const container = `<div class="body">
   
    <main class="basket_block">
      
      
      <footer>
        <div class="suma-main">
          <div></div>
          <div class="suma">Ընդհանուր։ </div>
        </div>

        <div class="button-main">
         
          <div class="button">
            <button type="submit" class="confirmOrder">Հ ա ս տ ա տ ե լ</button>
          </div>
        </div>        
      </footer>
    </main>
  </div>`;
  let idUniq = 0;
  let orders = State.basket.reduce((acc, elem) => {
    acc += `<section id = "${elem.id}">
        <div class="img">
          <img src="./image/pizzaImg/pizza2.png" alt="" />
        </div>
        <div>${elem.name}</div>
        <div>Գին։ ${elem.price} ${elem.currency} </div>
        <div>   ${elem.quantity} </div>
        <div>Արժեք։ ${elem.price * elem.quantity} ${elem.currency}</div>
        <div class = "cancelOrder">
          <img 
            src="./image/icons/close/1x/outline_close_white_18dp.png"
            alt=""
          />
        </div>
        
      </section>`;
    return acc;
  }, "");
  //document.querySelector(".suma")

  document.querySelector(".container").innerHTML = container;
  document
    .querySelector(".basket_block")
    .insertAdjacentHTML("afterbegin", orders);

  document.querySelectorAll(".cancelOrder").forEach(function (elem) {
    elem.addEventListener("click", function () {
      console.log(this);
      console.log(this.closest("section"));
      console.log(this.closest("section").id);
      let closeId = this.closest("section").id;
      let removedElem = State.basket.find(function (elem) {
        return elem.id === +closeId;
      });
      let filterBasket = State.basket.filter(function (elem) {
        return elem.id !== +closeId;
      });
      debugger;
      let sections = document.querySelectorAll(".basket_block section");
      for (let i = 0; i < sections.length; i++) {
        document.querySelector(".basket_block").removeChild(sections[i]);
      }
      State.basket = filterBasket;
      
      console.log(filterBasket);
      let newOrders = State.basket.reduce((acc, elem) => {
        acc += `<section id = "${elem.id}">
            <div class="img">
              <img src="./image/pizzaImg/pizza2.png" alt="" />
            </div>
            <div>${elem.name}</div>
            <div>Գին։ ${elem.price} ${elem.currency} </div>
            <div>   ${elem.quantity} </div>
            <div>Արժեք։ ${elem.price * elem.quantity} ${elem.currency}</div>
            <div class = "cancelOrder">
              <img 
                src="./image/icons/close/1x/outline_close_white_18dp.png"
                alt=""
              />
            </div>
            
          </section>`;
        return acc;
      }, "");
      document.querySelector('.basket_block').insertAdjacentHTML("afterbegin", newOrders);
    });
  });
};

export { renderZambyuxPage };

/*<section>
        <div class="img">
          <img src="./image/pizzaImg/pizza2.png" alt="" />
        </div>
        <div>Պեպերոնի</div>
        <div>Գին։ 350դր</div>
        <div>Քանակ։ -- [ 2 ] +</div>
        <div>Արժեք։ 700դր</div>
        <div>
          <img
            src="./image/icons/close/1x/outline_close_white_18dp.png"
            alt=""
          />
        </div>
      </section>
      <section>
        <div class="img">
          <img src="./image/pizzaImg/pizza2.png" alt="" />
        </div>
        <div>Պեպերոնի</div>
        <div>Գին։ 350դր</div>
        <div>Քանակ։ -- [ 2 ] +</div>
        <div>Արժեք։ 700դր</div>
        <div>
          <img
            src="./image/icons/close/1x/outline_close_white_18dp.png"
            alt=""
          />
        </div>
      </section>*/
