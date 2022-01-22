const renderChoicePage = () => {
    const container = ` <div class="dishes">
          <div class="dishes_type">
            <div class="dishes_type_name">Տաք ուտեստ</div>
          </div>

          <div class="dishes_type">
            <div class="dishes_type_name">Խորտիկներ</div>
          </div>

          <div class="dishes_type">
            <div class="dishes_type_name">Քաղցրավենիք</div>
          </div>

          <div class="dishes_type">
            <div class="dishes_type_name">Ըմպելիք</div>
          </div>

          <div class="dishes_type">
            <div class="dishes_type_name">Պիցցաներ</div>
          </div>

          <div class="dishes_type">
            <div class="dishes_type_name">Աղցաններ</div>
          </div>
        </div> `;
  
    document.querySelector(".container").innerHTML = container;
    choiceEventListeners()
  };
  
  export { renderChoicePage };