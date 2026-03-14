const year = document.getElementById("year");
if (year) {
  year.textContent = String(new Date().getFullYear());
}

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");
if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => nav.classList.toggle("open"));
}

const products = [
  { id: "classic-hummus", name: "Classic Hummus", price: 5.99 },
  { id: "garlic-hummus", name: "Garlic Hummus", price: 6.29 },
  { id: "redpepper-hummus", name: "Roasted Red Pepper Hummus", price: 6.49 },
  { id: "seasalt-pita", name: "Pita Chips Sea Salt", price: 4.49 },
  { id: "everything-pita", name: "Pita Chips Everything", price: 4.99 },
  { id: "lemon-dressing", name: "Lemon Herb Dressing", price: 6.99 }
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

  products.forEach((product) => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <p class="eyebrow">Bekka Valley</p>
      <h3>${product.name}</h3>
      <p><strong>${formatMoney(product.price)}</strong></p>
      <button class="btn btn-primary" data-product-id="${product.id}">Add to Cart</button>
    `;
    grid.appendChild(card);
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
