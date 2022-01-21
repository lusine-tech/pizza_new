const renderChoicePage = () => {
    const container = ` <div class="dishes">
          <div class="dishes_type">
            <a href="">Տաք ուտեստ</a>
          </div>

          <div class="dishes_type">
            <a href="">Խորտիկներ</a>
          </div>

          <div class="dishes_type">
            <a href="">Քաղցրավենիք</a>
          </div>

          <div class="dishes_type">
            <a href="">Ըմպելիք</a>
          </div>

          <div class="dishes_type">
            <a href="">Պիցցաներ</a>
          </div>

          <div class="dishes_type">
            <a href="">Աղցաններ</a>
          </div>
        </div> `;
  
    document.querySelector(".container").innerHTML = container;
  };
  
  export { renderChoicePage };