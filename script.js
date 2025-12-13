// Product data
const products = [
  {
    id: 1,
    title: "Wireless Headphones",
    description: "High-quality sound and long battery life.",
    price: 1999,
    image: "https://images.unsplash.com/photo-1518444027021-f4d45cde3d04"
  },
  {
    id: 2,
    title: "Smart Watch",
    description: "Track fitness, heart rate, and notifications.",
    price: 2999,
    image: "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f"
  },
  {
    id: 3,
    title: "Bluetooth Speaker",
    description: "Portable design, deep bass, and clear sound.",
    price: 1499,
    image: "https://images.unsplash.com/photo-1585386959984-a41552231693"
  },
  {
    id: 4,
    title: "Gaming Mouse",
    description: "Ergonomic design with RGB lighting.",
    price: 899,
    image: "https://images.unsplash.com/photo-1587202372775-98927af16b5b"
  }
];

const productList = document.getElementById("product-list");
const searchBox = document.getElementById("searchBox");
const cartCount = document.getElementById("cartCount");

let cart = 0;

// Display all products
function displayProducts(filteredProducts = products) {
  productList.innerHTML = "";
  filteredProducts.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
      <img src="${product.image}" alt="${product.title}">
      <div class="product-info">
        <h3>${product.title}</h3>
        <p>${product.description}</p>
        <div class="price">₹${product.price}</div>
        <button class="add-btn" onclick="addToCart()">Add to Cart</button>
      </div>
    `;
    productList.appendChild(card);
  });
}

// Add to cart
function addToCart() {
  cart++;
  cartCount.textContent = cart;
}

// Search feature
searchBox.addEventListener("input", e => {
  const searchValue = e.target.value.toLowerCase();
  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(searchValue)
  );
  displayProducts(filtered);
});

// Initialize
displayProducts();
