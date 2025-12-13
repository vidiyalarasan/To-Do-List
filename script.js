// Select the button element
const btn = document.getElementById("changeColorBtn");

// Define some colors to choose from
const colors = ["#f5f7fa", "#ffebcd", "#b2f2bb", "#ffd6a5", "#caffbf", "#9bf6ff", "#a0c4ff", "#bdb2ff"];

// Add a click event listener
btn.addEventListener("click", () => {
  // Pick a random color
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  // Change background color
  document.body.style.backgroundColor = randomColor;
});
