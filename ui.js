// ui.js
function renderProducts(products) {
    const container = document.getElementById("products-container");
    container.innerHTML = "";
  
    products.forEach(product => {
      const card = document.createElement("div");
      card.className = "col-md-4";
  
      card.innerHTML = `
        <div class="card h-100 shadow-sm">
          <img src="${product.image}" class="card-img-top p-4" style="height: 300px; object-fit: contain;" />
          <div class="card-body">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-text">${product.description.substring(0, 100)}...</p>
            <p class="text-primary fw-bold">$${product.price}</p>
          </div>
        </div>
      `;
  
      container.appendChild(card);
    });
  }
  