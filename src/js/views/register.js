const renderRegisterPage = () => {
    const container = `  <div class="select">
    <form action="#" name="filter">
      <select name="table-number" id="select_table">
        <option value="#" readonly>
          Սեղանի համարը
          <div class="triangle"></div>
        </option>
        <option value="1">սեղան 1</option>
        <option value="2">սեղան 2</option>
        <option value="3">սեղան 3</option>
        <option value="4">սեղան 4</option>
        <option value="5">սեղան 5</option>
        <option value="4">սեղան 6</option>
        <option value="5">սեղան 7</option>
      </select>
      <input type="submit" class="book" value="Ամրագրել" />
    </form>
  </div>`;
  
    document.querySelector(".container").innerHTML = container;
  };
  
  export { renderRegisterPage };