const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");
if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}

const products = [
  { id: "hummus-classic", name: "Classic Hummus", price: 5.99 },
  { id: "hummus-rp", name: "Roasted Pepper Hummus", price: 6.49 },
  { id: "chips-seasalt", name: "Pita Chips Sea Salt", price: 4.49 },
  { id: "dressing-lemon", name: "Lemon Herb Dressing", price: 6.99 },
  { id: "bundle-party", name: "Party Dip Bundle", price: 18.99 },
  { id: "bundle-weekly", name: "Weekly Snack Pack", price: 24.99 }
];

const cart = [];

function renderShopProducts() {
  const grid = document.getElementById("product-grid");
  if (!grid) {
    return;
  }

  products.forEach((product) => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <h2>${product.name}</h2>
      <p><strong>$${product.price.toFixed(2)}</strong></p>
      <button class="btn btn-primary" data-add="${product.id}">Add to cart</button>
    `;
    grid.appendChild(card);
  });

  grid.addEventListener("click", (event) => {
    const button = event.target;
    if (!(button instanceof HTMLButtonElement)) {
      return;
    }
    const id = button.dataset.add;
    const product = products.find((p) => p.id === id);
    if (!product) {
      return;
    }
    cart.push(product);
    updateCart();
  });
}

function updateCart() {
  const cartList = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  if (!cartList || !cartTotal) {
    return;
  }

  cartList.innerHTML = "";
  let total = 0;
  cart.forEach((item) => {
    total += item.price;
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartList.appendChild(li);
  });
  cartTotal.textContent = `$${total.toFixed(2)}`;
}

renderShopProducts();

const checkoutButton = document.getElementById("checkout-btn");
if (checkoutButton) {
  checkoutButton.addEventListener("click", () => {
    window.alert("Connect this button to your Shopify checkout URL or Storefront API flow.");
  });
}
