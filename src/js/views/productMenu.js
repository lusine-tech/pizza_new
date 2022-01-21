const renderProductMenuPage = () => {
    const container = `  <div class="select">
    <form action="#" name="filter">
      <select name="table-number" id="select_table">
        <option value="#" readonly>
          Սեղանի համարը
          <div class="triangle"></div>
        </option>
        <option id = "table-1" value="1">սեղան 1</option>
        <option id = "table-2" value="2">սեղան 2</option>
        <option id = "table-3" value="3">սեղան 3</option>
        <option id = "table-4" value="4">սեղան 4</option>
        <option id = "table-5" value="5">սեղան 5</option>
        <option id = "table-6" value="6">սեղան 6</option>
        <option id = "table-7" value="7">սեղան 7</option>
      </select>
      <input type="submit" class="book" value="Ամրագրել" />
    </form>
  </div>`;
  
    document.querySelector(".container").innerHTML = container;
  };
  
  export { renderProductMenuPage };