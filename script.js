// Smooth scrolling functions
function scrollToServices() {
    document.getElementById('services').scrollIntoView({
        behavior: 'smooth'
    });
}

function scrollToClasses() {
    document.getElementById('classes').scrollIntoView({
        behavior: 'smooth'
    });
}

function scrollToConsulting() {
    document.getElementById('consulting').scrollIntoView({
        behavior: 'smooth'
    });
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Interactive button handlers
function handleMoreInfo(type) {
    if (type === 'academy') {
        alert('More information about Zapfinance Academy will be displayed here.');
    } else if (type === 'consulting') {
        alert('More information about Zapfinance Consulting will be displayed here.');
    }
}

function handleClassClick(classType) {
    switch(classType) {
        case 'cfp-review':
            alert('Redirecting to CFP Review class details...');
            break;
        case 'bcfp-online':
            alert('Redirecting to BCFP Online class details...');
            break;
        case 'financial-hacks':
            alert('Redirecting to Financial Hacks class details...');
            break;
        default:
            alert('Class details will be displayed here.');
    }
}

function handleWhoWeAre() {
    alert('Redirecting to Who We Are page...');
}

function handleViewAllArticles() {
    alert('Redirecting to all articles page...');
}

function handleConsultingClick(type) {
    switch(type) {
        case 'content':
            alert('More information about Content Creation Management...');
            break;
        case 'group':
            alert('More information about Group Financial Coaching...');
            break;
        case 'one-on-one':
            alert('More information about 1-On-1 Financial Consultation...');
            break;
        default:
            alert('Consulting service details will be displayed here.');
    }
}

// Form submission handlers
function handleFormSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = {
        help: formData.get('help'),
        name: formData.get('name'),
        phone: formData.get('phone')
    };
    
    alert(`Thank you ${data.name}! We will contact you at ${data.phone} regarding: ${data.help}`);
    event.target.reset();
}

function handleContactSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = {
        name: formData.get('name'),
        phone: formData.get('phone'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message')
    };
    
    alert(`Thank you ${data.name}! Your message about "${data.subject}" has been sent. We will contact you at ${data.email} or ${data.phone}.`);
    event.target.reset();
}

// Social media link handlers
function openInstagram(event) {
    event.preventDefault();
    window.open('https://www.instagram.com/zapfinance/', '_blank');
}

function openTwitter(event) {
    event.preventDefault();
    window.open('https://twitter.com/zapfinance', '_blank');
}

function openFacebook(event) {
    event.preventDefault();
    window.open('https://www.facebook.com/zapfinanceconsulting', '_blank');
}

function openTikTok(event) {
    event.preventDefault();
    window.open('https://www.tiktok.com/@zapfinanceofficial', '_blank');
}

function openShopee(event) {
    event.preventDefault();
    window.open('https://shopee.co.id/zapfincorner', '_blank');
}

// WhatsApp contact handler
function openWhatsApp() {
    window.open('https://wa.me/6281189922280', '_blank');
}

// Add active navigation highlighting
document.addEventListener('DOMContentLoaded', function() {
    // Highlight current page in navigation
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'home.html')) {
            link.classList.add('active');
        }
    });
    
    // Add hover effects to interactive elements
    const hoverElements = document.querySelectorAll('.hover-btn, .hover-card');
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Email link handler
document.addEventListener('DOMContentLoaded', function() {
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    emailLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Let the default mailto behavior work
            console.log('Opening email client...');
        });
    });
});