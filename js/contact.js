// Contact Form and Page Functions
document.addEventListener('DOMContentLoaded', function() {
    initMobileNav();
    initContactForm();
});

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

// Contact form handling
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Validate required fields
        if (!data.fullName || !data.phone || !data.service || !data.message) {
            showNotification('Please fill all required fields', 'error');
            return;
        }
        
        // Show loading state
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            // Reset form
            form.reset();
            
            // Reset button
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            
            // Show success message
            showNotification('Thank you! We will contact you within 2 hours.', 'success');
            
            // Optional: Send to WhatsApp for immediate response
            sendToWhatsApp(data);
            
        }, 2000);
    });
}

// Send inquiry to WhatsApp
function sendToWhatsApp(data) {
    const message = `New Inquiry from Website:
    
Name: ${data.fullName}
Phone: ${data.phone}
Email: ${data.email || 'Not provided'}
Service: ${data.service}
Budget: ${data.budget || 'Not specified'}
Details: ${data.message}`;
    
    const whatsappUrl = `https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(message)}`;
    
    // Show option to continue to WhatsApp
    const continueToWhatsApp = confirm('Would you like to continue the conversation on WhatsApp for faster response?');
    if (continueToWhatsApp) {
        window.open(whatsappUrl, '_blank');
    }
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notif => notif.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add styles
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '15px 20px',
        borderRadius: '6px',
        color: 'white',
        fontWeight: '500',
        zIndex: '10000',
        transform: 'translateX(400px)',
        transition: 'transform 0.3s ease',
        maxWidth: '300px',
        wordWrap: 'break-word'
    });
    
    // Set background color based on type
    const colors = {
        success: '#10b981',
        error: '#ef4444',
        info: '#3b82f6'
    };
    notification.style.backgroundColor = colors[type] || colors.info;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}

// Form validation helpers
function validatePhone(phone) {
    const phoneRegex = /^[6-9]\d{9}$/;
    return phoneRegex.test(phone.replace(/\D/g, '').slice(-10));
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Real-time form validation
document.addEventListener('DOMContentLoaded', function() {
    const phoneInput = document.getElementById('phone');
    const emailInput = document.getElementById('email');
    
    if (phoneInput) {
        phoneInput.addEventListener('blur', function() {
            const phone = this.value.trim();
            if (phone && !validatePhone(phone)) {
                this.style.borderColor = '#ef4444';
                showNotification('Please enter a valid 10-digit phone number', 'error');
            } else {
                this.style.borderColor = '#10b981';
            }
        });
    }
    
    if (emailInput) {
        emailInput.addEventListener('blur', function() {
            const email = this.value.trim();
            if (email && !validateEmail(email)) {
                this.style.borderColor = '#ef4444';
                showNotification('Please enter a valid email address', 'error');
            } else if (email) {
                this.style.borderColor = '#10b981';
            }
        });
    }
});

// Add contact page specific styles
const style = document.createElement('style');
style.textContent = `
    .contact-layout {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
        align-items: start;
    }
    
    .contact-form-section h2 {
        color: #1e40af;
        margin-bottom: 1rem;
    }
    
    .contact-form-section p {
        color: #666;
        margin-bottom: 2rem;
    }
    
    .contact-details {
        background: white;
        border-radius: 12px;
        padding: 2rem;
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
        margin-bottom: 2rem;
    }
    
    .contact-details h3 {
        color: #1e40af;
        margin-bottom: 1.5rem;
    }
    
    .contact-item {
        display: flex;
        align-items: flex-start;
        margin-bottom: 1.5rem;
        padding-bottom: 1.5rem;
        border-bottom: 1px solid #f3f4f6;
    }
    
    .contact-item:last-child {
        border-bottom: none;
        margin-bottom: 0;
        padding-bottom: 0;
    }
    
    .contact-icon {
        font-size: 1.5rem;
        margin-right: 1rem;
        flex-shrink: 0;
    }
    
    .contact-text h4 {
        color: #1e40af;
        margin: 0 0 0.5rem 0;
        font-size: 1rem;
    }
    
    .contact-text p {
        margin: 0;
        color: #666;
        line-height: 1.5;
    }
    
    .contact-text a {
        color: #1e40af;
        text-decoration: none;
    }
    
    .contact-text a:hover {
        text-decoration: underline;
    }
    
    .quick-contact {
        background: white;
        border-radius: 12px;
        padding: 2rem;
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
        margin-bottom: 2rem;
    }
    
    .quick-contact h4 {
        color: #1e40af;
        margin-bottom: 1rem;
    }
    
    .quick-buttons {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    
    .quick-buttons .btn {
        justify-content: center;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    
    @media (max-width: 768px) {
        .contact-layout {
            grid-template-columns: 1fr;
            gap: 2rem;
        }
        
        .quick-buttons {
            flex-direction: column;
        }
    }
`;
document.head.appendChild(style);