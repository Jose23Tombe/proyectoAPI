// api.js
const API_URL = "https://fakestoreapi.com/products";

async function fetchProducts() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}
