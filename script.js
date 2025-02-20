// Product list with multiple images per product (replace with your local filenames)
const products = [
    { 
        id: 1, 
        name: "Герман бензин канистр 2ш хошуутай", 
        price: "450k", 
        images: ["images/jerry-can-fuel-1.jpg", "images/jerry-can-fuel-2.jpg", "images/jerry-can-fuel-3.jpg"], 
        details: "20л зэв огт байхгүй шинэ" 
    },
    { 
        id: 2, 
        name: "Герман бензин хөрөө", 
        price: "990k", 
        images: ["images/gasoline-saw-1.jpg", "images/gasoline-saw-2.jpg"], 
        details: "Powerful 52cc engine, 18-inch blade, perfect for heavy-duty cutting." 
    },
    { 
        id: 3, 
        name: "Generator", 
        price: 399.99, 
        images: ["images/generator-1.jpg", "images/generator-2.jpg"], 
        details: "Portable 3000W generator, ideal for home backup or outdoor use." 
    },
    { 
        id: 4, 
        name: "Car Refrigerator", 
        price: 89.99, 
        images: ["images/car-refrigerator-1.jpg"], 
        details: "12V compact fridge, 15L capacity, keeps food and drinks cool on the go." 
    },
    { 
        id: 5, 
        name: "Drill Sharpener", 
        price: 19.99, 
        images: ["images/drill-sharpener-1.jpg", "images/drill-sharpener-2.jpg"], 
        details: "Easy-to-use sharpener for drill bits, fits 3-12mm sizes." 
    },
    { 
        id: 6, 
        name: "Electro Saw", 
        price: 179.99, 
        images: ["images/electro-saw-1.jpg"], 
        details: "Cordless electric saw, 20V battery, lightweight and efficient." 
    },
    { 
        id: 7, 
        name: "Plasma Slicer", 
        price: 249.99, 
        images: ["images/plasma-slicer-1.jpg", "images/plasma-slicer-2.jpg"], 
        details: "50A plasma cutter, cuts up to 12mm steel, precise and fast." 
    },
    { 
        id: 8, 
        name: "Impact Driller", 
        price: 99.99, 
        images: ["images/impact-driller-1.jpg"], 
        details: "800W impact drill, variable speed, suitable for masonry and wood." 
    },
    { 
        id: 9, 
        name: "Tool Box 215", 
        price: 59.99, 
        images: ["images/tool-box-215-1.jpg", "images/tool-box-215-2.jpg"], 
        details: "215-piece tool set, includes wrenches, screwdrivers, and more." 
    },
    { 
        id: 10, 
        name: "SUP Board", 
        price: 299.99, 
        images: ["images/sup-board-1.jpg", "images/sup-board-2.jpg", "images/sup-board-3.jpg"], 
        details: "Inflatable stand-up paddleboard, 10ft, includes pump and paddle." 
    }
];

// Your phone number (replace with your actual number)
const shopPhoneNumber = "9415-4083"; // Example Mongolian number

// Render products (using first image as preview)
function renderProducts() {
    const productGrid = document.getElementById("product-grid");
    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.innerHTML = `
            <img src="${product.images[0]}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
        `;
        productCard.onclick = () => showProductDetails(product.id);
        productGrid.appendChild(productCard);
    });
}

// Show product details in modal with carousel
let currentImageIndex = 0;
let currentProduct = null;

function showProductDetails(productId) {
    currentProduct = products.find(p => p.id === productId);
    currentImageIndex = 0;
    const modal = document.getElementById("product-modal");
    const carouselImage = document.getElementById("carousel-image");
    const nameEl = document.getElementById("product-name");
    const priceEl = document.getElementById("product-price");
    const descEl = document.getElementById("product-description");
    const contactEl = document.getElementById("product-contact");

    // Set initial content
    carouselImage.src = currentProduct.images[currentImageIndex];
    nameEl.textContent = currentProduct.name;
    priceEl.textContent = `Price: $${currentProduct.price.toFixed(2)}`;
    descEl.textContent = currentProduct.details;
    contactEl.innerHTML = `Contact us: <a href="tel:${shopPhoneNumber}">${shopPhoneNumber}</a>`;

    // Show/hide buttons based on number of images
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    prevBtn.style.display = currentProduct.images.length > 1 ? "block" : "none";
    nextBtn.style.display = currentProduct.images.length > 1 ? "block" : "none";
    updateButtonState();

    modal.style.display = "block";
}

// Swipe functionality
document.getElementById("prev-btn").onclick = function() {
    if (currentImageIndex > 0) {
        currentImageIndex--;
        document.getElementById("carousel-image").src = currentProduct.images[currentImageIndex];
        updateButtonState();
    }
};

document.getElementById("next-btn").onclick = function() {
    if (currentImageIndex < currentProduct.images.length - 1) {
        currentImageIndex++;
        document.getElementById("carousel-image").src = currentProduct.images[currentImageIndex];
        updateButtonState();
    }
};

// Update button visibility/state
function updateButtonState() {
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    prevBtn.disabled = currentImageIndex === 0;
    nextBtn.disabled = currentImageIndex === currentProduct.images.length - 1;
    prevBtn.style.opacity = currentImageIndex === 0 ? "0.5" : "1";
    nextBtn.style.opacity = currentImageIndex === currentProduct.images.length - 1 ? "0.5" : "1";
}

// Close modal
document.querySelector(".close").onclick = function() {
    document.getElementById("product-modal").style.display = "none";
};

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
