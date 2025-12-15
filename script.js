const products = [
  { name: "Headphones", price: 2999, img: "images/headphones.jpg" },
  { name: "Laptop", price: 54999, img: "images/laptop.jpg" },
  { name: "Running Shoes", price: 3999, img: "images/shoes.jpg" },
  { name: "Smart Watch", price: 4999, img: "images/watch.jpg" },
  { name: "Bluetooth Speaker", price: 2599, img: "images/speaker.jpg" },
  { name: "Backpack", price: 2199, img: "images/backpack.jpg" },
  { name: "Power Bank", price: 1899, img: "images/powerbank.jpg" },
  { name: "Keyboard", price: 1799, img: "images/keyboard.jpg" }
];


const productList = document.getElementById("productList");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const totalAmount = document.getElementById("totalAmount");

const cartSidebar = document.getElementById("cartSidebar");
const cartOverlay = document.getElementById("cartOverlay");
const checkoutModal = document.getElementById("checkoutModal");
const successModal = document.getElementById("successModal");

let cart = [];

function renderProducts(list) {
  productList.innerHTML = "";
  list.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <h4>${p.name}</h4>
      <p>₹${p.price}</p>
      <button>Add to Cart</button>
    `;
    div.querySelector("button").onclick = () => addToCart(p);
    productList.appendChild(div);
  });
}

function addToCart(p) {
  cart.push(p);
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
  totalAmount.textContent = total.toLocaleString("en-IN");
}

document.getElementById("openCart").onclick = () => {
  cartSidebar.classList.add("active");
  cartOverlay.classList.add("active");
};

cartOverlay.onclick = () => {
  cartSidebar.classList.remove("active");
  cartOverlay.classList.remove("active");
};

document.getElementById("checkoutBtn").onclick = () => {
  if (!cart.length) return;
  checkoutModal.style.display = "flex";
};

document.getElementById("closeCheckout").onclick = () => {
  checkoutModal.style.display = "none";
};

document.getElementById("placeOrderBtn").onclick = () => {
  checkoutModal.style.display = "none";
  successModal.style.display = "flex";
  cart = [];
  updateCart();
};

document.getElementById("search").oninput = e => {
  const v = e.target.value.toLowerCase();
  renderProducts(products.filter(p =>
    p.name.toLowerCase().includes(v)
  ));
};

document.getElementById("themeToggle").onclick = () => {
  document.body.classList.toggle("dark");
};

renderProducts(products);
