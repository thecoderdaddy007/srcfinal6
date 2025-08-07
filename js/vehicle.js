// Vehicle Branding Services Data and Functions
document.addEventListener('DOMContentLoaded', function() {
    loadVehicleServices();
    initSlideshow();
    initMobileNav();
});

// Vehicle Services Data (Admin Editable)
const vehicleServices = [
    {
        title: "Auto Rickshaw Branding",
        description: "Complete vinyl wrapping and branding for auto rickshaws. High-visibility advertising that moves through busy Indore streets, markets, and residential areas. Perfect for local business promotion and brand awareness campaigns.",
        price: "₹2,000 per month",
        features: [
            "Full body vinyl wrapping",
            "Weather-resistant materials",
            "Professional installation",
            "Route tracking available",
            "Maintenance included"
        ],
        image: "https://5.imimg.com/data5/SELLER/Default/2022/9/VX/YK/AC/159513425/auto-hood-branding-250x250.jpeg"
    },
    {
        title: "E-Rickshaw Advertising",
        description: "Eco-friendly mobile advertising on electric rickshaws. Ideal for covering specific routes, residential areas, and targeting local communities. Cost-effective solution for small and medium businesses.",
        price: "₹1,800 per month",
        features: [
            "Back panel branding",
            "Side panel advertisements",
            "Roof-top branding options",
            "LED strip lighting",
            "Route customization"
        ],
        image: ""
    },
    {
        title: "City Bus Internal Panels",
        description: "Inside bus advertising panels for captive audience engagement. Perfect for educational institutes, healthcare services, and consumer brands targeting daily commuters across Indore city routes.",
        price: "₹4,000 per month",
        features: [
            "Interior panel placements",
            "Seat back advertisements",
            "Overhead panel space",
            "Anti-vandal materials",
            "Multiple route coverage"
        ],
        image: "sakarpics\Auto Branding\Auto Sticker  (2).jpeg"
    },
    {
        title: "Mobile LED Van Campaigns",
        description: "High-impact mobile LED advertising vans for events, product launches, and political campaigns. Dynamic digital content display with audio capabilities for maximum attention and engagement.",
        price: "₹15,000 per day",
        features: [
            "Full HD LED display",
            "Audio system included",
            "Custom route planning",
            "Live content updates",
            "Professional operator"
        ],
        image: ""
    },
    {
        title: "Truck & Commercial Vehicle Branding",
        description: "Large format vehicle branding for trucks, tempos, and commercial vehicles. Excellent for logistics companies, courier services, and businesses requiring inter-city brand visibility.",
        price: "₹8,000 per month",
        features: [
            "Full truck body wrapping",
            "Reflective materials for night visibility",
            "Corporate branding design",
            "Interstate advertising coverage",
            "Durable 3M vinyl materials"
        ],
        image: ""
    },
    {
        title: "Two-Wheeler Fleet Branding",
        description: "Delivery boy branding for food delivery, e-commerce, and service companies. Cost-effective way to brand multiple vehicles for maximum market penetration and brand recall.",
        price: "₹500 per bike per month",
        features: [
            "Delivery box branding",
            "Side panel stickers",
            "Helmet branding",
            "T-shirt branding for riders",
            "Fleet management support"
        ],
        image: ""
    }
];

// Load and display vehicle services
function loadVehicleServices() {
    const container = document.getElementById('vehicle-services');
    if (!container) return;
    
    container.innerHTML = vehicleServices.map((service, index) => `
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

// Add CSS for service features
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