const products = [
  { id: 1, name: "iPhone 14", price: 69999, image: "https://via.placeholder.com/300x200?text=iPhone" },
  { id: 2, name: "Samsung S23", price: 64999, image: "https://via.placeholder.com/300x200?text=Samsung" },
  { id: 3, name: "MacBook Air", price: 99999, image: "https://via.placeholder.com/300x200?text=MacBook" },
  { id: 4, name: "Headphones", price: 2999, image: "https://via.placeholder.com/300x200?text=Headphones" }
];

const productList = document.getElementById("product-list");
const cartCount = document.getElementById("cartCount");
const searchBox = document.getElementById("searchBox");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Render products
function renderProducts(items) {
  productList.innerHTML = "";
  items.forEach(p => {
    productList.innerHTML += `
      <div class="product-card">
        <img src="${p.image}">
        <div class="product-info">
          <h3>${p.name}</h3>
          <div class="price">₹${p.price}</div>
          <button onclick="addToCart(${p.id})">Add to Cart</button>
        </div>
      </div>
    `;
  });
}

// Cart
function addToCart(id) {
  cart.push(id);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
}

function updateCart() {
  cartCount.textContent = cart.length;
}

// Search
searchBox.addEventListener("input", () => {
  const value = searchBox.value.toLowerCase();
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(value)
  );
  renderProducts(filtered);
});

// Init
renderProducts(products);
updateCart();
