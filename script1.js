'use strict'

const menuToggle = document.querySelector('.menu-toggle');
const bxMenu = document.querySelector('.bx-menu');
const bxX = document.querySelector('.bx-x');
const navBar = document.querySelector('.navbar');

// --- open menu ---
bxMenu.addEventListener('click', (e) => {
    if (e.target.classList.contains('bx-menu')) {
        navBar.classList.add('show-navbar');
        bxMenu.classList.add('hide-bx');
        bxX.classList.add('show-bx');
    }
});

// --- close menu ---
bxX.addEventListener('click', (e) => {
    if (e.target.classList.contains('bx-x')) {
        navBar.classList.remove('show-navbar');
        bxMenu.classList.remove('hide-bx');
        bxX.classList.remove('show-bx');
    }
});

const productGrid = document.getElementById("productGrid");

function renderProducts(products) {
    productGrid.innerHTML = ""; // Clear existing products
    products.forEach(product => {
        const card = document.createElement("div");
        card.className = "col-md-4";
        card.innerHTML = `
            <div class="card">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">Category: ${product.category}</p>
                    <p class="card-text">Price: $${product.price}</p>
                </div>
            </div>
        `;
        productGrid.appendChild(card);
    });
}

// Handle color circle filter
document.querySelectorAll(".color-circle").forEach(circle => {
    circle.addEventListener("click", () => {
        const color = circle.getAttribute("data-color");
        alert(`Filter by color: ${color}`);
    });
});

// Toggle Filter Visibility
document.querySelectorAll(".form-check-input").forEach(checkbox => {
    checkbox.addEventListener("change", (e) => {
        const category = e.target.value;
        if (e.target.checked) {
            alert(`${category} filter selected`);
        }
    });
});

// Fetch products from data.json
fetch("data.json")
    .then(response => response.json())
    .then(data => {
        const products = data.products;
        renderProducts(products);
    })
    .catch(error => console.error("Error loading JSON data:", error));

// Assuming your JSON data is available in a file or directly in the script.
// You can fetch it from a separate JSON file or use it as is.

// Example JSON data (replace this with the actual data or use a fetch call to get the JSON file)
const data = {
    "products": [
      {
        "name": "Galaxy S23",
        "category": "Galaxy Z",
        "price": 999,
        "image": "https://www.notebookcheck.biz/fileadmin/Notebooks/News/_nc3/galaxy23ultra.jpeg"
      },
      {
        "name": "Galaxy S23",
        "category": "Galaxy Note",
        "price": 999,
        "image": "https://www.notebookcheck.biz/fileadmin/Notebooks/News/_nc3/galaxy23ultra.jpeg"
      },
      {
        "name": "Galaxy S23",
        "category": "Galaxy S",
        "price": 999,
        "image": "https://www.notebookcheck.biz/fileadmin/Notebooks/News/_nc3/galaxy23ultra.jpeg"
      },
      {
        "name": "Galaxy S23",
        "category": "Galaxy A",
        "price": 999,
        "image": "https://www.notebookcheck.biz/fileadmin/Notebooks/News/_nc3/galaxy23ultra.jpeg"
      }
    ]
  };
  
  // Function to render the products dynamically
  function renderProducts() {
    const productList = document.getElementById('product-list');
    
    data.products.forEach(product => {
      // Create a new product card
      const productCard = document.createElement('div');
      productCard.classList.add('col-md-4', 'mb-4');
      
      productCard.innerHTML = `
        <div class="card">
          <img src="${product.image}" class="card-img-top" alt="${product.name}">
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">Category: ${product.category}</p>
            <p class="card-text">Price: $${product.price}</p>
            <a href="#" class="btn btn-primary">Add to Cart</a>
          </div>
        </div>
      `;
      
      // Append the product card to the product list container
      productList.appendChild(productCard);
    });
  }
  
  // Call the render function to display the products
  renderProducts();
  