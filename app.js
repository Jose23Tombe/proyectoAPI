// app.js
document.addEventListener("DOMContentLoaded", async () => {
    const products = await fetchProducts();
    renderProducts(products);
  });
  