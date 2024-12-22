'use strict'

const menuToggle = document.querySelector('.menu-toggle');
const bxMenu = document.querySelector('.bx-menu');
const bxX = document.querySelector('.bx-x');
const navBar = document.querySelector('.navbar');


bxMenu.addEventListener('click', (e) => {
    if (e.target.classList.contains('bx-menu')) {
        navBar.classList.add('show-navbar');
        bxMenu.classList.add('hide-bx');
        bxX.classList.add('show-bx');
    }
});


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
  document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form submission to check values first

    // Get the input values
    const email = document.getElementById("exampleInputEmail1").value;
    const password = document.getElementById("exampleInputPassword1").value;
    const termsChecked = document.getElementById("exampleCheck1").checked;

    // Error message div
    const errorMessage = document.getElementById("errorMessage");

    // Reset error message
    errorMessage.style.display = "none";

    // Validate input fields
    if (!email || !password || !termsChecked) {
        // Show error message if any input is missing or checkbox is not checked
        errorMessage.style.display = "block";
        return;
    }

    // Check email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Proceed if validation is successful
    alert("Form submitted successfully!");
});
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Empêche l'envoi du formulaire

    // Récupération des valeurs des champs
    const nom = document.getElementById('exampleInputNom').value.trim();
    const email = document.getElementById('exampleInputEmail1').value.trim();
    const password = document.getElementById('exampleInputPassword1').value.trim();
    const terms = document.getElementById('exampleCheck1').checked;

    // Réinitialisation des messages d'erreur
    document.getElementById('nomError').style.display = 'none';
    document.getElementById('emailError').style.display = 'none';
    document.getElementById('passwordError').style.display = 'none';
    document.getElementById('termsError').style.display = 'none';

    let isValid = true;

    // Validation du champ "Nom"
    if (nom === '') {
        document.getElementById('nomError').textContent = 'Veuillez entrer un nom valide.';
        document.getElementById('nomError').style.display = 'block';
        isValid = false;
    }

    // Validation du champ "Email"
    if (email === '' || !/^\S+@\S+\.\S+$/.test(email)) {
        document.getElementById('emailError').textContent = 'Veuillez entrer une adresse email valide.';
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }

    // Validation du champ "Password"
    if (password === '' || password.length < 6) {
        document.getElementById('passwordError').textContent = 'Le mot de passe doit comporter au moins 6 caractères.';
        document.getElementById('passwordError').style.display = 'block';
        isValid = false;
    }

    // Validation de l'acceptation des termes
    if (!terms) {
        document.getElementById('termsError').textContent = 'Vous devez accepter les termes.';
        document.getElementById('termsError').style.display = 'block';
        isValid = false;
    }

    // Si tous les champs sont valides, soumission du formulaire
    if (isValid) {
        alert('Formulaire soumis avec succès!');
        this.submit();
    }
});