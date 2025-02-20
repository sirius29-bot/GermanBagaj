// Product list with details (replace image paths with your local filenames)
const products = [
    { id: 1, name: "Jerry Can Fuel", price: 29.99, image: "images/jerry-can-fuel.jpg", details: "High-quality fuel can, 20L capacity, durable steel construction." },
    { id: 2, name: "Gasoline Saw", price: 149.99, image: "images/gasoline-saw.jpg", details: "Powerful 52cc engine, 18-inch blade, perfect for heavy-duty cutting." },
    { id: 3, name: "Generator", price: 399.99, image: "images/generator.jpg", details: "Portable 3000W generator, ideal for home backup or outdoor use." },
    { id: 4, name: "Car Refrigerator", price: 89.99, image: "images/car-refrigerator.jpg", details: "12V compact fridge, 15L capacity, keeps food and drinks cool on the go." },
    { id: 5, name: "Drill Sharpener", price: 19.99, image: "images/drill-sharpener.jpg", details: "Easy-to-use sharpener for drill bits, fits 3-12mm sizes." },
    { id: 6, name: "Electro Saw", price: 179.99, image: "images/electro-saw.jpg", details: "Cordless electric saw, 20V battery, lightweight and efficient." },
    { id: 7, name: "Plasma Slicer", price: 249.99, image: "images/plasma-slicer.jpg", details: "50A plasma cutter, cuts up to 12mm steel, precise and fast." },
    { id: 8, name: "Impact Driller", price: 99.99, image: "images/impact-driller.jpg", details: "800W impact drill, variable speed, suitable for masonry and wood." },
    { id: 9, name: "Tool Box 215", price: 59.99, image: "images/tool-box-215.jpg", details: "215-piece tool set, includes wrenches, screwdrivers, and more." },
    { id: 10, name: "SUP Board", price: 299.99, image: "images/sup-board.jpg", details: "Inflatable stand-up paddleboard, 10ft, includes pump and paddle." }
];

// Your phone number (replace with your actual number)
const shopPhoneNumber = "+97612345678"; // Example Mongolian number

// Render products
function renderProducts() {
    const productGrid = document.getElementById("product-grid");
    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
        `;
        productCard.onclick = () => showProductDetails(product.id);
        productGrid.appendChild(productCard);
    });
}

// Show product details in modal
function showProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    const modal = document.getElementById("product-modal");
    const detailsDiv = document.getElementById("product-details");
    detailsDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>Price: $${product.price.toFixed(2)}</p>
        <p>${product.details}</p>
        <p>Contact us: <a href="tel:${shopPhoneNumber}">${shopPhoneNumber}</a></p>
    `;
    modal.style.display = "block";
}

// Close modal
document.querySelector(".close").onclick = function() {
    document.getElementById("product-modal").style.display = "none";
};

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById("product-modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

// Initialize page
document.addEventListener("DOMContentLoaded", () => {
    renderProducts();
});