const renderZambyuxPage = () => {
  const container = `<div class="body">
    <header class = "zambyux-head">
      <div>
        <img src="./image/2x/outline_arrow_back_white_18dp.png" alt="" />
      </div>
      <div>
        <img src="./image/icons/menu/2x/outline_menu_white_24dp.png" alt="" />
      </div>
    </header>
    <main>
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
      </section>
      <footer>
        <div class="suma-main">
          <div></div>
          <div class="suma">Ընդհանուր։ 2100դր</div>
        </div>

        <div class="button-main">
         
          <div class="button">
            <button type="submit">Հ ա ս տ ա տ ե լ</button>
          </div>
        </div>        
      </footer>
    </main>
  </div>`;

  document.querySelector(".container").innerHTML = container;
};

export { renderZambyuxPage };
