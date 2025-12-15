const products = [
  {
    id: 1,
    name: "Laptop",
    price: 900,
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
  },
  {
    id: 2,
    name: "Headphones",
    price: 150,
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
  },
  {
    id: 3,
    name: "Smart Watch",
    price: 250,
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
  },
  {
    id: 4,
    name: "Shoes",
    price: 120,
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
  }
];


const list = document.getElementById("product-list");
const cartCount = document.getElementById("cart-count");
const cartItems = document.getElementById("cart-items");
const totalEl = document.getElementById("total");

const cartSidebar = document.getElementById("cart-sidebar");
const cartOverlay = document.getElementById("cart-overlay");
const openCart = document.getElementById("open-cart");

const checkoutModal = document.getElementById("checkout-modal");
const successModal = document.getElementById("success-modal");

let cart = [];

/* RENDER PRODUCTS */
function renderProducts(items) {
  list.innerHTML = "";
  items.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${p.img}">
      <h3>${p.name}</h3>
      <p>$${p.price}</p>
      <button>Add to Cart</button>
    `;
    div.querySelector("button").onclick = () => addToCart(p);
    list.appendChild(div);
  });
}

/* CART */
function addToCart(product) {
  cart.push(product);
  updateCart();
}

function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <span>${item.name}</span>
      <span>$${item.price}</span>
    `;
    cartItems.appendChild(div);
  });

  cartCount.textContent = cart.length;
  totalEl.textContent = total;
}

/* OPEN / CLOSE CART */
openCart.onclick = () => {
  cartSidebar.classList.add("active");
  cartOverlay.classList.add("active");
};

cartOverlay.onclick = () => {
  cartSidebar.classList.remove("active");
  cartOverlay.classList.remove("active");
};

/* CHECKOUT */
document.getElementById("checkout-btn").onclick = () => {
  if (cart.length === 0) return alert("Cart is empty!");
  checkoutModal.style.display = "flex";
};

document.getElementById("place-order").onclick = () => {
  checkoutModal.style.display = "none";
  successModal.style.display = "flex";
};

renderProducts(products);
