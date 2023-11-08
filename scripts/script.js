(function () {
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

      const fsImage = document.createElement("div");
      const img = document.createElement("img");
      img.src = pizza.imgSrc;
      img.alt = `pizza${index}`;
      fsImage.classList.add("card__image_fs");
      fsImage.classList.add(`n${index}`);

      card.classList.add("products__cards_item");

      logo.src = pizza.imgSrc;
      logo.alt = `pizza${index}`;
      logo.classList.add("card_logo");
      logo.classList.add(`n${index}`);

      title.textContent = pizza.title;
      title.classList.add("card_title");

      desc.textContent = pizza.description;
      desc.classList.add("card_description");

      button.textContent = "В корзину";

      card.appendChild(logo);
      card.appendChild(title);
      card.appendChild(desc);
      card.appendChild(button);

      fsImage.appendChild(img);
      card.appendChild(fsImage);
      return card;
    });
    productList.append(...list);
  }

  document.addEventListener("DOMContentLoaded", () => {
    createProductList();
    const productList = document.querySelector(".products__cards");

    const choosePizzaBtn = document.querySelector(".hero__text button");
    choosePizzaBtn.addEventListener("click", () => {
      productList.scrollIntoView({ behavior: "smooth", block: "end" });
    });

    productList.addEventListener("click", (e) => {
      if (e.target instanceof HTMLElement) {
        if (e.target.classList.contains("card_logo")) {
          const index = e.target.classList[1];
          const fs = document.querySelector(`.card__image_fs.${index}`);
          if (fs) {
            fs.classList.add("active");
            document.body.style.overflow = "hidden";
          }
          return;
        }
        if (
          e.target.classList[0] === "card__image_fs" &&
          e.target.classList[2] === "active"
        ) {
          e.target.classList.remove("active");
          document.body.style.overflow = "visible";
          return;
        }
      }
    });

    const form = document.forms.order;
    if (form instanceof HTMLFormElement) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const elements = form.elements;
        let data = {
          name: elements.name.value,
          address: elements.address.value,
          phone: elements.phone.value,
        };
        const submitBtn = document.querySelector('button[type="submit"]');
        fetch("url", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .catch((e) => {})
          .finally((res) => {
            const modal = document.querySelector(".footer__modal_success");
            modal.classList.add("active");
            setTimeout(() => {
              modal.classList.remove("active");
            }, 1000);
          });
      });
    }
  });
})();
