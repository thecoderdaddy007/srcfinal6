// Marketing Products Data and Functions
document.addEventListener('DOMContentLoaded', function() {
    loadProductsCatalog();
    initSlideshow();
    initMobileNav();
});

// Products Catalog Data (Admin Editable)
const productsCatalog = [
    {
        title: "No Parking ACP Boards",
        description: "Durable aluminum composite panel boards for parking restrictions and traffic management. Weather-resistant, anti-fade printing with professional mounting solutions for residential and commercial areas.",
        price: "₹30 per piece",
        specifications: [
            "3mm ACP material",
            "12x8 inch standard size",
            "Weather-resistant printing",
            "Mounting hardware included",
            "Custom sizes available"
        ],
        image: "https://images.pexels.com/photos/3782235/pexels-photo-3782235.jpeg"
    },
    {
        title: "Roll-Up Display Banners",
        description: "Portable roll-up banners perfect for exhibitions, presentations, and indoor promotions. Easy setup and takedown with professional banner stand. High-resolution printing on premium flex material.",
        price: "₹500 onwards",
        specifications: [
            "80x200cm standard size",
            "Retractable aluminum stand",
            "High-resolution printing",
            "Carrying case included",
            "Setup in under 2 minutes"
        ],
        image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg"
    },
    {
        title: "Promotional Tables",
        description: "Branded folding tables for exhibitions, events, and promotional activities. Lightweight yet sturdy construction with custom printing on table cover. Easy transport and setup for any location.",
        price: "₹1,200 onwards",
        specifications: [
            "6x2 feet table size",
            "Aluminum folding frame",
            "Custom printed table cover",
            "Lightweight and portable",
            "Storage bag included"
        ],
        image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg"
    },
    {
        title: "Staff Uniforms & T-Shirts",
        description: "Branded staff uniforms, t-shirts, and promotional apparel for corporate events and brand campaigns. High-quality fabric with professional printing and embroidery options available.",
        price: "₹150 per piece",
        specifications: [
            "100% cotton fabric",
            "Screen printing or embroidery",
            "Multiple color options",
            "Size range: S to 3XL",
            "Bulk order discounts"
        ],
        image: ""
    },
    {
        title: "Branded Canopy Tents",
        description: "Heavy-duty canopy tents with custom branding for outdoor events, exhibitions, and promotional activities. Weather-resistant material with professional printing and easy setup mechanism.",
        price: "₹3,500 onwards",
        specifications: [
            "10x10 feet standard size",
            "Water-resistant canopy",
            "Steel frame construction",
            "Custom brand printing",
            "Setup accessories included"
        ],
        image: "https://images.pexels.com/photos/3779448/pexels-photo-3779448.jpeg"
    },
    {
        title: "Flex Posters & Standees",
        description: "Large format flex printing for posters, standees, and display materials. UV-resistant, waterproof printing suitable for both indoor and outdoor use with various mounting options.",
        price: "₹12 per sq. ft.",
        specifications: [
            "440 GSM flex material",
            "UV-resistant printing",
            "Custom size options",
            "Mounting solutions available",
            "Bulk printing discounts"
        ],
        image: "https://images.pexels.com/photos/1486974/pexels-photo-1486974.jpeg"
    },
    {
        title: "LED Name Boards",
        description: "Energy-efficient LED name boards for shops, offices, and commercial establishments. Bright, clear display with long-life LED strips and professional installation service.",
        price: "₹5,000 onwards",
        specifications: [
            "High-brightness LEDs",
            "Acrylic front panel",
            "MS powder-coated frame",
            "2-year warranty",
            "Professional installation"
        ],
        image: "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg"
    },
    {
        title: "Corporate Gift Items",
        description: "Customized corporate gifts including pens, diaries, keychains, and branded accessories. Perfect for corporate events, client meetings, and promotional giveaways with professional packaging.",
        price: "₹25 onwards",
        specifications: [
            "Multiple gift options",
            "Custom logo printing",
            "Premium packaging",
            "Bulk order pricing",
            "Quick delivery options"
        ],
        image: ""
    }
];

// Load and display products catalog
function loadProductsCatalog() {
    const container = document.getElementById('products-catalog');
    if (!container) return;
    
    container.innerHTML = productsCatalog.map((product, index) => `
        <div class="service-item">
            <div class="service-image" style="background-image: url('${product.image}')"></div>
            <div class="service-details">
                <h3>${product.title}</h3>
                <p>${product.description}</p>
                <div class="service-features">
                    <h4>Specifications:</h4>
                    <ul>
                        ${product.specifications.map(spec => `<li>${spec}</li>`).join('')}
                    </ul>
                </div>
                <div class="service-price">${product.price}</div>
                <div class="service-actions">
                    <a href="contact.html" class="btn btn-primary">Order Now</a>
                    <a href="https://wa.me/91XXXXXXXXXX?text=Hi, I want to order ${product.title}" class="btn btn-outline" target="_blank">WhatsApp</a>
                </div>
            </div>
        </div>
    `).join('');
}

// Slideshow functionality
function initSlideshow() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    
    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }
    
    setInterval(nextSlide, 5000);
}

// Mobile navigation
function initMobileNav() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
        
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }
}

// Add styles specific to products page
const style = document.createElement('style');
style.textContent = `
    .service-features {
        margin: 1.5rem 0;
    }
    
    .service-features h4 {
        color: #1e40af;
        margin-bottom: 0.5rem;
        font-size: 1rem;
    }
    
    .service-features ul {
        list-style: none;
        padding: 0;
    }
    
    .service-features li {
        padding: 0.3rem 0;
        padding-left: 1.5rem;
        position: relative;
    }
    
    .service-features li:before {
        content: "✓";
        color: #059669;
        font-weight: bold;
        position: absolute;
        left: 0;
    }
    
    .service-actions {
        margin-top: 1.5rem;
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
    }
    
    @media (max-width: 768px) {
        .service-actions {
            flex-direction: column;
        }
        
        .service-actions .btn {
            text-align: center;
        }
    }
`;
document.head.appendChild(style);