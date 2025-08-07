// Field Activation & BTL Services Data and Functions
document.addEventListener('DOMContentLoaded', function() {
    loadActivationServices();
    initSlideshow();
    initMobileNav();
});

// Field Activation Services Data (Admin Editable)
const activationServices = [
    {
        title: "Brand Walkers Campaign",
        description: "Professional brand ambassadors walking in targeted areas with promotional materials. Ideal for product launches, brand awareness, and direct customer engagement in busy markets, colleges, and residential areas.",
        price: "₹300 per walker per day",
        features: [
            "Trained brand ambassadors",
            "Branded t-shirts and caps",
            "Promotional material distribution",
            "Route planning and tracking",
            "Daily activity reports"
        ],
        image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg"
    },
    {
        title: "Exhibition & Promo Stalls",
        description: "Complete exhibition stall setup for trade shows, festivals, and corporate events. Includes branded canopy, tables, display materials, and trained staff for maximum brand engagement and lead generation.",
        price: "₹5,000 per day",
        features: [
            "Complete stall setup",
            "Branded canopy and table",
            "Display stands and materials",
            "Trained promotional staff",
            "Lead collection system"
        ],
        image: "https://images.pexels.com/photos/1010973/pexels-photo-1010973.jpeg"
    },
    {
        title: "Leaflet & Flyer Distribution",
        description: "Targeted distribution of promotional leaflets, flyers, and brochures in specific areas. Perfect for local business promotion, event announcements, and product information dissemination with verified coverage reports.",
        price: "₹1 per leaflet",
        features: [
            "Targeted area coverage",
            "Door-to-door distribution",
            "Verified delivery reports",
            "Professional distributors",
            "GPS tracking available"
        ],
        image: "https://images.pexels.com/photos/3779448/pexels-photo-3779448.jpeg"
    },
    {
        title: "Product Sampling Campaigns",
        description: "Direct product sampling and demonstration campaigns in malls, markets, and events. Trained personnel conduct product trials, collect feedback, and generate immediate sales leads with professional presentation.",
        price: "₹400 per promoter per day",
        features: [
            "Trained product demonstrators",
            "Professional presentation setup",
            "Feedback collection system",
            "Sales lead generation",
            "Brand compliance monitoring"
        ],
        image: "https://images.pexels.com/photos/1486974/pexels-photo-1486974.jpeg"
    },
    {
        title: "Roadshow & Mobile Campaigns",
        description: "Mobile marketing campaigns with branded vehicles, sound systems, and promotional activities. Perfect for political campaigns, product launches, and brand announcements covering multiple locations in a single day.",
        price: "₹8,000 per day",
        features: [
            "Branded vehicle with sound system",
            "Route planning and execution",
            "Promotional team included",
            "Live announcements and music",
            "Multi-location coverage"
        ],
        image: "sakarpics\LOOKWALKER ACTIVITY\IN_Colored-Canvas-Tote-Bags_Overview.webp"
    },
    {
        title: "Event Activation Services",
        description: "Complete event activation management including venue branding, crowd management, registration desks, and promotional activities. Comprehensive solution for corporate events, product launches, and brand activations.",
        price: "₹15,000 per event",
        features: [
            "Complete venue branding",
            "Registration desk setup",
            "Crowd management team",
            "Photo booth and activities",
            "Event coordination support"
        ],
        image: "sakarpics\LOOKWALKER ACTIVITY\look-walker-activity-1000x1000 (1).webp"
    }
];

// Load and display activation services
function loadActivationServices() {
    const container = document.getElementById('activation-services');
    if (!container) return;
    
    container.innerHTML = activationServices.map((service, index) => `
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

// Add styles specific to activation page
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