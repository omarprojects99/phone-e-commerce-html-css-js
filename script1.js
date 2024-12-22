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
    