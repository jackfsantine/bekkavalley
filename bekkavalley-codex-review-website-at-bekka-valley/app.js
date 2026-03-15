const year = document.getElementById("year");
if (year) {
  year.textContent = String(new Date().getFullYear());
}

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");
if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => nav.classList.toggle("open"));
}

const productImage = "Shop images/IMG_8278.jpeg";

const products = [
  { id: "classic-hummus", name: "Classic Hummus", price: 5.99, category: "Hummus", image: productImage },
  { id: "garlic-hummus", name: "Garlic Hummus", price: 6.29, category: "Hummus", image: productImage },
  { id: "redpepper-hummus", name: "Roasted Red Pepper Hummus", price: 6.49, category: "Hummus", image: productImage },

  { id: "seasalt-pita", name: "Pita Chips Sea Salt", price: 4.49, category: "Pita Chips", image: productImage },
  { id: "everything-pita", name: "Pita Chips Everything", price: 4.99, category: "Pita Chips", image: productImage },
  { id: "chili-lime-pita", name: "Pita Chips Chili Lime", price: 5.29, category: "Pita Chips", image: productImage },

  { id: "lemon-dressing", name: "Garlic Lemon Dressing", price: 6.99, category: "Dressings", image: productImage },
  { id: "fattoush-dressing", name: "Fattoush Dressing", price: 6.99, category: "Dressings", image: productImage },
  { id: "zaatar-marinade", name: "Zaatar Herb Marinade", price: 7.49, category: "Dressings", image: productImage }
];

const cart = [];

function formatMoney(value) {
  return `$${value.toFixed(2)}`;
}

function updateCart() {
  const cartList = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  if (!cartList || !cartTotal) {
    return;
  }

  cartList.innerHTML = "";
  let total = 0;

  cart.forEach((product) => {
    total += product.price;
    const row = document.createElement("li");
    row.textContent = `${product.name} — ${formatMoney(product.price)}`;
    cartList.appendChild(row);
  });

  cartTotal.textContent = formatMoney(total);
}

function renderShopProducts() {
  const grid = document.getElementById("product-grid");
  if (!grid) {
    return;
  }

  const categoryOrder = ["Hummus", "Pita Chips", "Dressings"];

  categoryOrder.forEach((categoryName) => {
    const section = document.createElement("section");
    section.className = "shop-category-section";

    const title = document.createElement("h1");
    title.className = "shop-category-title";
    title.textContent = categoryName;
    section.appendChild(title);

    const categoryGrid = document.createElement("div");
    categoryGrid.className = "grid three shop-category-grid";

    products
      .filter((product) => product.category === categoryName)
      .forEach((product) => {
        const card = document.createElement("article");
        card.className = "card";
        card.innerHTML = `
          <img class="shop-product-image" src="${product.image}" alt="${product.name}" loading="lazy" />
          <p class="eyebrow">Bekka Valley</p>
          <h3>${product.name}</h3>
          <p><strong>${formatMoney(product.price)}</strong></p>
          <button class="btn btn-primary" data-product-id="${product.id}">Add to Cart</button>
        `;
        categoryGrid.appendChild(card);
      });

    section.appendChild(categoryGrid);
    grid.appendChild(section);
  });

  grid.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLButtonElement)) {
      return;
    }

    const selectedId = target.dataset.productId;
    const product = products.find((item) => item.id === selectedId);
    if (!product) {
      return;
    }

    cart.push(product);
    updateCart();
  });
}

renderShopProducts();

const checkoutButton = document.getElementById("checkout-btn");
if (checkoutButton) {
  checkoutButton.addEventListener("click", () => {
    window.alert("Next step: connect this button to Shopify checkout creation + redirect.");
  });
}
