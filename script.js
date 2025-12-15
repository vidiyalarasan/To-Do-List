const products = [
  { id: 1, name: "Wireless Headphones", price: 2999, img: "images/headphones.jpg" },
  { id: 2, name: "Laptop", price: 54999, img: "images/laptop.jpg" },
  { id: 3, name: "Running Shoes", price: 3999, img: "images/shoes.jpg" },
  { id: 4, name: "Smart Watch", price: 4999, img: "images/watch.jpg" }
];

const list = document.getElementById("product-list");
const cartItems = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const totalEl = document.getElementById("total");

const cartSidebar = document.getElementById("cart-sidebar");
const cartOverlay = document.getElementById("cart-overlay");

let cart = [];

/* RENDER PRODUCTS */
function render(items) {
  list.innerHTML = "";
  items.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${p.img}">
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <button>Add to Cart</button>
    `;
    div.querySelector("button").onclick = () => addToCart(p);
    list.appendChild(div);
  });
}

function addToCart(product) {
  cart.push(product);
  updateCart();
}

function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach(p => {
    total += p.price;
    cartItems.innerHTML += `
      <div class="cart-item">
        <span>${p.name}</span>
        <span>₹${p.price}</span>
      </div>
    `;
  });
  cartCount.textContent = cart.length;
  totalEl.textContent = total;
}

/* CART OPEN/CLOSE */
document.getElementById("open-cart").onclick = () => {
  cartSidebar.classList.add("active");
  cartOverlay.classList.add("active");
};

cartOverlay.onclick = () => {
  cartSidebar.classList.remove("active");
  cartOverlay.classList.remove("active");
};

/* CHECKOUT */
document.getElementById("checkout-btn").onclick = () => {
  if (cart.length === 0) return alert("Cart empty");
  document.getElementById("checkout-modal").style.display = "flex";
};

document.getElementById("place-order").onclick = () => {
  document.getElementById("checkout-modal").style.display = "none";
  document.getElementById("success-modal").style.display = "flex";
};

/* SEARCH */
document.getElementById("search").addEventListener("input", e => {
  const val = e.target.value.toLowerCase();
  render(products.filter(p => p.name.toLowerCase().includes(val)));
});

/* DARK MODE */
const toggle = document.getElementById("theme-toggle");
toggle.onclick = () => {
  document.body.classList.toggle("dark");
  toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
};

render(products);
