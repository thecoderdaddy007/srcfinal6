// Hoardings and Billboard Services Data and Functions
document.addEventListener('DOMContentLoaded', function() {
    loadHoardingServices();
    initSlideshow();
    initMobileNav();
});

// Hoarding Services Data (Admin Editable)
const hoardingServices = [
    {
        title: "Premium Static Hoardings",
        description: "Large format static hoardings at high-traffic locations across Indore. Perfect for brand awareness campaigns, product launches, and corporate advertising. Prime locations ensure maximum visibility and impact.",
        price: "₹25,000 per month",
        features: [
            "20x10 feet standard size",
            "Premium traffic locations",
            "Weather-resistant flex material",
            "Professional mounting",
            "Illumination options available"
        ],
        image: "sakarpics\Acrylic-Signage-Maker-\acrylic-3d-board-1.jpeg"
    },
    {
        title: "City Entry Point Billboards",
        description: "Strategic billboard placements at Indore city entry points for maximum impact on incoming traffic. Ideal for welcoming campaigns, political messaging, and brand announcements targeting interstate visitors.",
        price: "₹40,000 per month",
        features: [
            "30x15 feet billboard size",
            "Strategic entry point locations",
            "High-quality vinyl printing",
            "Steel frame structure",
            "Night illumination included"
        ],
        image: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg"
    },
    {
        title: "Festival & Event Banners",
        description: "Temporary banner installations for festivals, political campaigns, and special events. Quick setup and removal with high-impact messaging for time-sensitive campaigns and seasonal promotions.",
        price: "₹5,000 per week",
        features: [
            "Quick installation service",
            "Multiple size options",
            "Event-specific messaging",
            "Temporary mounting solutions",
            "Post-event removal included"
        ],
        image: "https://images.pexels.com/photos/1666083/pexels-photo-1666083.jpeg"
    },
    {
        title: "Pole & Pillar Advertising",
        description: "Utilize utility poles, bridge pillars, and traffic signal posts for cost-effective advertising. Perfect for local business promotion and community-level messaging with strategic placement.",
        price: "₹2,000 per month",
        features: [
            "Multiple pole locations",
            "Weather-resistant materials",
            "Government permission handling",
            "Regular maintenance checks",
            "Size customization available"
        ],
        image: "sakarpics\Newspepar insertion\images.jpg"
    },
    {
        title: "Bus Stop Shelter Ads",
        description: "Captive audience advertising at bus stops and public transport shelters. Excellent for targeting daily commuters and passengers with extended viewing time and repeated exposure.",
        price: "₹8,000 per month",
        features: [
            "Multiple shelter locations",
            "Backlit display options",
            "Protected from weather",
            "High dwell time exposure",
            "Professional installation"
        ],
        image: "https://images.pexels.com/photos/1486974/pexels-photo-1486974.jpeg"
    },
    {
        title: "Digital LED Billboards",
        description: "Dynamic digital advertising with video and animation capabilities. Perfect for multiple brand campaigns, real-time content updates, and high-impact visual messaging that captures attention.",
        price: "₹1,000 per day",
        features: [
            "Full HD LED display",
            "10-second ad slots",
            "Multiple brand rotation",
            "Remote content updates",
            "Prime location visibility"
        ],
        image: "sakarpics\Acrylic-Signage-Maker-\WhatsApp Image 2025-07-22 at 2.36.00 PM.jpeg"
    }
];

// Load and display hoarding services
function loadHoardingServices() {
    const container = document.getElementById('hoarding-services');
    if (!container) return;
    
    container.innerHTML = hoardingServices.map((service, index) => `
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

// Add styles specific to hoardings page
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