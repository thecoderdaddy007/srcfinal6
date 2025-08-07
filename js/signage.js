// Printing & Signage Services Data and Functions
document.addEventListener('DOMContentLoaded', function() {
    loadSignageServices();
    initSlideshow();
    initMobileNav();
});

// Signage Services Data (Admin Editable)
const signageServices = [
    {
        title: "Flex Banner Printing",
        description: "High-quality flex banner printing for outdoor and indoor advertising. UV-resistant, waterproof materials suitable for all weather conditions. Perfect for shop signage, event banners, and promotional displays.",
        price: "₹12 per sq. ft.",
        features: [
            "480 GSM flex material",
            "Weather-resistant printing",
            "Vibrant color output",
            "Custom size options",
            "Finishing with eyelets"
        ],
        image: ""
    },
    {
        title: "Glow Sign Boards",
        description: "Illuminated glow sign boards for 24/7 brand visibility. Energy-efficient LED lighting with acrylic panels for crystal-clear display. Ideal for shops, restaurants, and service establishments requiring night visibility.",
        price: "₹350 per sq. ft.",
        features: [
            "LED strip lighting",
            "Acrylic face panel",
            "MS powder-coated frame",
            "Energy efficient",
            "2-year warranty"
        ],
        image: ""
    },
    {
        title: "Acrylic Letter Cutting",
        description: "Precision-cut acrylic letters for premium brand displays. CNC cutting technology ensures perfect finishing. Available in various colors and thicknesses for indoor and outdoor applications.",
        price: "₹45 per letter",
        features: [
            "CNC precision cutting",
            "Multiple color options",
            "Various thickness available",
            "Smooth edge finishing",
            "Installation included"
        ],
        image: ""
    },
    {
        title: "LED Display Boards",
        description: "Dynamic LED display boards for real-time content updates. Perfect for stock prices, news updates, and promotional messages. Programmable displays with smartphone connectivity for easy content management.",
        price: "₹15,000 onwards",
        features: [
            "Full HD LED panels",
            "Smartphone app control",
            "Multiple content formats",
            "Outdoor weather protection",
            "Remote content updates"
        ],
        image: ""
    },
    {
        title: "Direction & Safety Signage",
        description: "Professional direction boards, safety signs, and regulatory signage. Compliant with government standards for offices, factories, and public spaces. Reflective materials for enhanced visibility.",
        price: "₹25 per sq. ft.",
        features: [
            "Government compliance",
            "Reflective materials",
            "Durable construction",
            "Multiple mounting options",
            "Custom messaging"
        ],
        image: ""
    },
    {
        title: "ACP Cladding & Panels",
        description: "Aluminum composite panel cladding for building facades and premium signage. Fire-resistant, weather-proof panels with professional installation. Perfect for corporate buildings and modern storefronts.",
        price: "₹85 per sq. ft.",
        features: [
            "Fire-resistant panels",
            "Weather-proof coating",
            "Professional installation",
            "Multiple color options",
            "10-year durability"
        ],
        image: ""
    }
];

// Load and display signage services
function loadSignageServices() {
    const container = document.getElementById('signage-services');
    if (!container) return;
    
    container.innerHTML = signageServices.map((service, index) => `
        <div class="service-item">
            <div class="service-image" style="background-image: url('${service.image}')"></div>
            <div class="service-details">
                <h3>${service.title}</h3>
                <p>${service.description}</p>
                <div class="service-features">
                    <h4>Key Features:</h4>
                    <ul>
                        ${service.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
                <div class="service-price">${service.price}</div>
                <div class="service-actions">
                    <a href="contact.html" class="btn btn-primary">Get Quote</a>
                    <a href="https://wa.me/91XXXXXXXXXX?text=Hi, I'm interested in ${service.title}" class="btn btn-outline" target="_blank">WhatsApp</a>
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

// Add styles specific to signage page
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