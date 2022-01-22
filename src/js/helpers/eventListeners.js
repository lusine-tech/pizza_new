import {renderChoicePage} from "../views/choice";

export const registerEventListeners = () => {
  const table = document.querySelector("#select_table");
  const book = document.querySelector(".book");

  //renderChoicePage();
  //router.redirect("/menu");
  book.onclick = (e) => {
    e.preventDefault();

    const selectedValues = [].filter
      .call(table.options, (option) => option.selected)
      .map((option) => option.text);

    renderChoicePage();
    document.body.style.backgroundImage = "url('../image/ej2.jpg')";
  };
};
export const choiceEventListeners = () => {};
