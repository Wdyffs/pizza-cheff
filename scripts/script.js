(function() {
  const pizza_data = [
    {
      imgSrc: "assets/images/pizzas/pizza1.png",
      title: "Мясная Делюкс",
      description:
        "Пепперони, лук, бекон, томатная паста, колбаски, перец, грибы, соус чили, ананасы",
    },
    {
      imgSrc: "assets/images/pizzas/pizza2.png",
      title: "Морская Премиум",
      description: "Перец, сыр, креветки, кальмары, мидии, лосось",
    },
    {
      imgSrc: "assets/images/pizzas/pizza3.png",
      title: "Бекон и Сосиски",
      description: "Бекон, сыр, сосиски, ананас, томатная паста",
    },
    {
      imgSrc: "assets/images/pizzas/pizza4.png",
      title: "Куриная Делюкс",
      description:
        "Курица, ананас, сыр Пепперони, соус для пиццы, томатная паста",
    },
    {
      imgSrc: "assets/images/pizzas/pizza5.png",
      title: "Барбекю Премиум",
      description:
        "Свинина BBQ, соус Барбкею, сыр, курица, соус для пиццы, соус чили",
    },
    {
      imgSrc: "assets/images/pizzas/pizza6.png",
      title: "Пепперони Дабл",
      description: "Пепперони, сыр, колбаса 2 видов: обжаренная и вареная",
    },
    {
      imgSrc: "assets/images/pizzas/pizza7.png",
      title: "Куриное трио",
      description:
        "Жареная курица, Тушеная курица, Куриные наггетсы, перец, сыр, грибы, соус для пиццы",
    },
    {
      imgSrc: "assets/images/pizzas/pizza8.png",
      title: "Сырная",
      description: "Сыр Джюгас, Сыр с плесенью, Сыр Моцарелла, Сыр секретный",
    },
  ];
  
  function createProductList() {
    const productList = document.querySelector(".products__cards");
  
    const list = pizza_data.map((pizza, index) => {
      const card = document.createElement("li");
      const logo = document.createElement("img");
      const title = document.createElement("p");
      const desc = document.createElement("p");
      const button = document.createElement("button");
  
      card.classList.add("products__cards_item");
  
      logo.src = pizza.imgSrc;
      logo.alt = `pizza${index}`;
      logo.classList.add("card_logo");
  
      title.textContent = pizza.title;
      title.classList.add("card_title");
  
      desc.textContent = pizza.description;
      desc.classList.add("card_description");
  
      button.textContent = "В корзину";
  
      card.appendChild(logo);
      card.appendChild(title);
      card.appendChild(desc);
      card.appendChild(button);
  
      return card;
    });
    productList.append(...list);
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    createProductList();
  });
  
})();


