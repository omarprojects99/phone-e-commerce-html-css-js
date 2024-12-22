document.addEventListener("DOMContentLoaded", () => {

  fetch("data.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to load JSON data");
      }
      return response.json();
    })
    .then((data) => {
      displayProductCards(data.products);
    })
    .catch((error) => console.error(error));
});


function displayProductCards(products) {
  const productGrid = document.querySelector(".grid"); 

  products.forEach((product) => {
   
    const productCard = document.createElement("a");
    productCard.href = "Produitbdetail.html";
    productCard.className = "group";
    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]">
      <h3 class="mt-4 text-sm text-gray-700">${product.name}</h3>
      <p class="mt-1 text-sm text-gray-500">${product.category}</p>
      <p class="mt-1 text-lg font-medium text-gray-900">$${product.price}</p>
    `;
    
   
    productGrid.appendChild(productCard);
  });
  
}

