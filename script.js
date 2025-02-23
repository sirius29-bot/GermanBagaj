// Product list with multiple images per product, now including video links
const products = [
    { 
        id: 1, 
        name: "Тог гаргагч/ Stromerzeuger", 
        price: "1.5 сая", 
        images: ["images/m0.jpg",
            "images/m1.jpg",
            "images/m2.jpg",
            "https://bilder.universal.at/i/empiriecom/426fb78714b0565b367d1c08f803f424.jpg?$format_dv_mob_075$", 
            ],  
        details: "Güde фирмийн 4 тактын, 1.2кВт, 12кг ухаалаг бензин мотор) 1.5 саяд зарна, хайрцагтайгаа задлаагүй шинэ, 4.2л бензиний танктай 5.7 цаг ажилладаг, тос бензинийг тусад нь хийдэг, смарт инвертертэй тул нотебүүк, утас, таблет холбоход тохиромжтой, аялал зусланд авч явахад хялбар",
        video: "https://www.youtube.com/watch?v=_i5Fa7Ciqeo" // Example video link
    },
    { 
        id: 2, 
        name: "Бензин хөрөө/ Kettensäge", 
        price: "850k", 
        images: ["https://www.lidl.de/assets/gcp975970108c754e8ab435b9d79677f147.jpeg",
            "https://www.lidl.de/assets/gcp951aba276dd74e9690ca3c0d2cba6c90.jpeg",
            "https://www.lidl.de/assets/gcpa16db941019140588bd8d411be78a7f3.jpeg",
            "images/pa0.jpg", 
            "images/pa1.jpg"], 
        details: "Шинэ 45см иртэй 2-такт бензин хөдөлгүүртэй, 2 кВт (2,72 морины хүчтэй), чичиргээний эсрэг төхөөрөмжтэй, Aвтомат гинжний тосолгооны системтэй, 11500 эрг/мин.",
        video: "https://www.youtube.com/watch?v=NnpbpeOSLWU" // Example video link
    },
    { 
        id: 3, 
        name: "Машины хөргөгч ENGEL/ Autokühlbox", 
        price: "2.9сая", 
        images: ["https://www.g-trotter.net/pics/equipment/6/2.jpg",
            "https://www.g-trotter.net/pics/equipment/6/3.jpg",
            "https://www.g-trotter.net/pics/equipment/6/1.jpg", 
            "https://reimo.ru/wp-content/uploads/store/713705-0.jpg?v=1739695253", 
            "images/generator-2.jpg"], 
        details: "Хайрцагтайгаа цоо шинэ, насан туршийн баталгаат Engel аяны хөргөгч (Honda Sawafuji swing/дүүжин япон мотортой, бага цахилгаан хэрэглээтэй, дуугүй шахам, 12/24V болон 240V-оор ажилладаг, доргилтонд тэсвэртэй, -18°C хүртэл хөлдөөдөг, 1.5л-ийн 12 шил буюу 40л багтаамжтай, 32W, 47dB, гадна хэмжээ У63 x Ө47 x Ө39см, 22кг, машинд бэхэлгээтэй)",
        video: "https://www.youtube.com/watch?v=pNr3qKLvQqQ" // No video for this product
    },
    { 
        id: 4, 
        name: "Плазма зүсэгч/ Plasmaschneider", 
        price: "1.3 сая", 
        images: ["https://www.ihp-direkt.de/images/product_images/info_images/3036_0__2186_02_500px.jpg",
                "https://i.ebayimg.com/thumbs/images/g/0rUAAOSwLRVjkwN4/s-l500.jpg",
                "images/p1.jpg",
                "images/p2.jpg",                
                "https://i.ebayimg.com/images/g/q2kAAOSwAZdjkwN4/s-l500.webp",
                "https://i.ebayimg.com/images/g/rpgAAOSwxl9jkwN4/s-l500.webp",
                "https://i.ebayimg.com/images/g/s6YAAOSwgDhjkwN4/s-l500.webp",
                "https://i.ebayimg.com/images/g/dA0AAOSwKx1jkwN4/s-l500.webp",
                "https://i.ebayimg.com/images/g/BWsAAOSwQVpjkwN4/s-l500.webp",

                ],
        details: "Mauk фирмийн зөөврийн плазма зүсэгч 1.3 саяд зарна, 15-40А, ган 12мм, төмөр 10мм, зэвэрдэггүй ган 8мм, хөнгөн цагаан 8мм, зэс 4мм хүртэл зүснэ, жин 7кг, 4-4.5 Bar, 230V/50Hz",
        video: "https://www.youtube.com/watch?v=kZzhIyeu260"
    },
    { 
        id: 5, 
        name: "Герман багаж 215ш/ Brüdermannesmann", 
        price: "850k", 
        images: ["https://m.media-amazon.com/images/I/81VS5k7EalL._AC_SL1500_.jpg",
                 "https://m.media-amazon.com/images/I/819O2H+s44L._AC_SL1500_.jpg", 
                 "https://m.media-amazon.com/images/I/710SEuUzuiL._AC_SL1500_.jpg",
                 "https://m.media-amazon.com/images/I/813b7mLjxwL._AC_SL1500_.jpg",
                 "https://m.media-amazon.com/images/I/81zIcUb+K4L._AC_SL1500_.jpg",
               ], 
        details: "Герман чанарын 8-22 түлхүүр том дунд жижиг торцов, согтуу толгой г.х мэт",
        video: "https://www.youtube.com/watch?v=sO9kU3-HAEA"
    },
    { 
        id: 6, 
        name: "Усны хийлдэг боард/ Supboard", 
        price: "2.7 сая", 
        images: ["https://www.eduscho.at/newmedia/art_img/MAIN-CENSHARE/50e80fa8c6dd5c8a/.jpg",
                 "https://startfitness.co.uk/cdn/shop/products/mistral-flamenco-sup-inflatable-paddleboard-combo-10-5ft-8717901017649-28557888258256.jpg?v=1681788363&width=600",
                "https://startfitness.co.uk/cdn/shop/products/mistral-flamenco-sup-inflatable-paddleboard-combo-10-5ft-8717901017649-28557888291024.jpg?v=1681789943&width=600",
                 "https://startfitness.co.uk/cdn/shop/products/mistral-flamenco-sup-inflatable-paddleboard-combo-10-5ft-8717901017649-28557888291024.jpg?v=1681789943&width=600",
                 "https://startfitness.co.uk/cdn/shop/products/mistral-flamenco-sup-inflatable-paddleboard-combo-10-5ft-8717901017649-28557888323792.jpg?v=1681788637&width=600",
                 "https://startfitness.co.uk/cdn/shop/products/mistral-flamenco-sup-inflatable-paddleboard-combo-10-5ft-8717901017649-28557888422096.jpg?v=1681785823&width=600",
                "https://startfitness.co.uk/cdn/shop/products/mistral-flamenco-sup-inflatable-paddleboard-combo-10-5ft-8717901017649-29488136519888.jpg?v=1681786441&width=600",
                "https://startfitness.co.uk/cdn/shop/products/mistral-flamenco-sup-inflatable-paddleboard-combo-10-5ft-8717901017649-28557888454864.jpg?v=1681786030&width=600",
               ],
        details: "SUP BOARD Эвхдэг насостой, цүнхтэй. 7,5 кг жинтэй 320см 79см өргөн 180кг даацтай",
        video: "https://www.youtube.com/watch?v=9Nl8m5xVAQA"
    },
    { 
        id: 7, 
        name: "Цахилгаан хөрөө BOSCH", 
        price: "600k", 
        images: ["https://www.agrieuro.de/share/media/images/products/insertions-h-big/24966/elektro-kettensge-bosch-universal-chain-40-1800-w-elektro-kettensge-bosch-universal-chain-40-elektrosge--24966_0_1598364666_IMG_5f451bfa40aff.jpg", 
            "https://www.agrieuro.de/share/media/images/products/insertions-h-big/24966/elektro-kettensge-bosch-universal-chain-40-1800-w-elektro-kettensge-bosch-universal-chain-40-elektrosge--24966_0_1598364666_IMG_5f451bfa25172.jpg",
            "https://www.agrieuro.de/share/media/images/products/insertions-h-big/24966/elektro-kettensge-bosch-universal-chain-40-1800-w-elektro-kettensge-bosch-universal-chain-40-elektrosge--24966_0_1598364666_IMG_5f451bfa08201.jpg",
            "https://www.agrieuro.de/share/media/images/products/insertions-h-big/24966/elektro-kettensge-bosch-universal-chain-40-1800-w-elektro-kettensge-bosch-universal-chain-40-elektrosge--24966_0_1598520315_IMG_5f477bfbab090.jpg",
            "https://www.agrieuro.de/share/media/images/products/insertions-h-big/24966/elektro-kettensge-bosch-universal-chain-40-1800-w-elektro-kettensge-bosch-universal-chain-40-elektrosge--24966_0_1598364666_IMG_5f451bfa25172.jpg",
            "https://www.agrieuro.de/share/media/images/products/insertions-h-big/24966/elektro-kettensge-bosch-universal-chain-40-1800-w-elektro-kettensge-bosch-universal-chain-40-elektrosge--24966_0_1598520315_IMG_5f477bfbe3f35.jpg",
            "https://www.agrieuro.de/share/media/images/products/insertions-h-big/24966/elektro-kettensge-bosch-universal-chain-40-1800-w-elektro-kettensge-bosch-universal-chain-40-elektrosge--24966_0_1598364666_IMG_5f451bfa43919.jpg",
        ], 
        details: "35см 1800 ватт",
        video: "https://www.youtube.com/watch?v=LY1qoaUXE_E"
    },
    { 
        id: 8, 
        name: "Дугуй тайлагч импакт/ Schlagschrauber", 
        price: "360k", 
        images: ["https://m.media-amazon.com/images/I/613LqIRDMeL._AC_SX569_.jpg",
            "https://m.media-amazon.com/images/I/61LxP4YGWKL._AC_SX569_.jpg",
            "https://m.media-amazon.com/images/I/61z7TW3uFGL._AC_SL1200_.jpg",
        ], 
        details: "4ш торцов 400nm 20v 4ah",
        video: "https://www.youtube.com/watch?v=i6N-mkOv1-w"
    },
    { 
        id: 9, 
        name: "Өрөм ирлэгч", 
        price: "300k", 
        images: ["https://www.lidl.de/assets/gcpb5bdb46dae864676baf6e7288b84210d.jpeg",
            "https://www.lidl.de/assets/gcpfbe796a3bc9e4de882cde6e55e965456.jpeg", 
            "https://www.lidl.de/assets/gcp7d504193017c451a92d7d85fd126f4f1.jpeg",], 
        details: "3-13 мм-ийн өрөм ирлэгч, 2 запас иртэй 95ватт, 1350 эрг/мин",
        video: "https://www.youtube.com/watch?v=RuQGQ0sRwrA"
    },
    { 
        id: 10, 
        name: "SUP Board", 
        price: "299.99", 
        images: ["images/sup-board-1.jpg", "images/sup-board-2.jpg", "images/sup-board-3.jpg"], 
        details: "Inflatable stand-up paddleboard, 10ft, includes pump and paddle.",
        video: null
    },
    { 
        id: 10, 
        name: "SUP Board", 
        price: "299.99", 
        images: ["images/sup-board-1.jpg", "images/sup-board-2.jpg", "images/sup-board-3.jpg"], 
        details: "Inflatable stand-up paddleboard, 10ft, includes pump and paddle.",
        video: null
    },
];

// Your phone number
const shopPhoneNumber = "9415-4083";

// Preload images function
function preloadImages(imageArray) {
    imageArray.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Render products
function renderProducts() {
    const productGrid = document.getElementById("product-grid");
    if (!productGrid) {
        console.error("Error: #product-grid element not found in HTML");
        return;
    }
    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.innerHTML = `
            <img src="${product.images[0]}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Үнэ: ${product.price}</p>
        `;
        productCard.onclick = () => showProductDetails(product.id);
        productGrid.appendChild(productCard);
    });
}

// Show product details in modal with carousel and video link
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

    if (!modal || !carouselImage || !nameEl || !priceEl || !descEl || !contactEl) {
        console.error("Error: One or more modal elements not found in HTML");
        return;
    }

    // Preload all images for this product
    preloadImages(currentProduct.images);

    // Set initial content
    carouselImage.src = currentProduct.images[currentImageIndex];
    nameEl.textContent = currentProduct.name;
    priceEl.textContent = `Үнэ: ${currentProduct.price}`;
    descEl.textContent = currentProduct.details;
    contactEl.innerHTML = `Холбогдох Дугаар: <a href="tel:${shopPhoneNumber}">${shopPhoneNumber}</a>`;
    
    // Add video link if available
    if (currentProduct.video) {
        contactEl.innerHTML += `<br><a href="${currentProduct.video}" target="_blank" class="video-link">Бичлэг Үзэх</a>`;
    }

    // Show/hide buttons based on number of images
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    if (!prevBtn || !nextBtn) {
        console.error("Error: Carousel buttons not found in HTML");
        return;
    }
    prevBtn.style.display = currentProduct.images.length > 1 ? "block" : "none";
    nextBtn.style.display = currentProduct.images.length > 1 ? "block" : "none";
    updateButtonState();

    // Show modal and disable body scroll
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
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

// Close modal and restore body scroll
document.querySelector(".close").onclick = function() {
    document.getElementById("product-modal").style.display = "none";
    document.body.style.overflow = "";
};

window.onclick = function(event) {
    const modal = document.getElementById("product-modal");
    if (event.target === modal) {
        modal.style.display = "none";
        document.body.style.overflow = "";
    }
};

// Initialize page
document.addEventListener("DOMContentLoaded", () => {
    renderProducts();
});
