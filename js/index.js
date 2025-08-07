// Homepage JavaScript for Sakar Advertisement
document.addEventListener('DOMContentLoaded', function() {
    // Initialize slideshow
    initSlideshow();
    
    // Initialize mobile navigation
    initMobileNav();
    
    // Load products preview
    loadProductsPreview();
    
    // Initialize scroll animations
    initScrollAnimations();
});

// Slideshow functionality
function initSlideshow() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    
    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }
    
    // Change slide every 5 seconds
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
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }
}

// Products preview data and loading
const featuredProducts = [
    {
        title: "No Parking Boards",
        price: "₹30 per piece",
        description: "Durable ACP boards for parking restrictions",
        image: "https://images.pexels.com/photos/3782235/pexels-photo-3782235.jpeg"
    },
    {
        title: "Roll-Up Banners",
        price: "₹500 onwards",
        description: "Portable standees for indoor campaigns",
        image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg"
    },
    {
        title: "Promo Tables",
        price: "₹1200 onwards",
        description: "Branded tables for exhibitions and events",
        image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg"
    },
    {
        title: "LED Signage",
        price: "₹5000 onwards",
        description: "Bright LED displays for maximum visibility",
        image: "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg"
    }
];

function loadProductsPreview() {
    const container = document.getElementById('products-preview');
    if (!container) return;
    
    container.innerHTML = featuredProducts.map(product => `
        <div class="product-card">
            <div class="product-image" style="background-image: url('${product.image}')"></div>
            <h3>${product.title}</h3>
            <p>${product.description}</p>
            <div class="product-price">${product.price}</div>
        </div>
    `).join('');
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for scroll animations
    const animatedElements = document.querySelectorAll('.service-card, .product-card, .stat-card, .portfolio-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
    }
});