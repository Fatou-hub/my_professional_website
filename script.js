/**
 * PORTFOLIO BACKEND DEVELOPER - JAVASCRIPT
 * Handles interactions, animations, and dynamic behaviors
 */

// ============================================================================
// CONFIGURATION
// ============================================================================
const CONFIG = {
    // Scroll thresholds
    navScrollThreshold: 100,
    scrollTopThreshold: 400,
    
    // Animation delays (ms)
    animationDelay: 150,
    
    // Intersection Observer options
    observerOptions: {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    }
};

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Debounce function to limit rate of function calls
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Smooth scroll to element
 */
function smoothScrollTo(target) {
    const element = document.querySelector(target);
    if (element) {
        const offset = 80; // Account for fixed nav
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

// ============================================================================
// NAVIGATION
// ============================================================================

class Navigation {
    constructor() {
        this.nav = document.querySelector('.nav');
        this.menuToggle = document.querySelector('.menu-toggle');
        this.navMenu = document.querySelector('.nav-menu');
        this.navLinks = document.querySelectorAll('.nav-link');
        
        this.init();
    }
    
    init() {
        // Handle scroll for nav styling
        window.addEventListener('scroll', debounce(() => this.handleScroll(), 10));
        
        // Mobile menu toggle
        if (this.menuToggle) {
            this.menuToggle.addEventListener('click', () => this.toggleMenu());
        }
        
        // Close menu when clicking nav links
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                // Only prevent default if it's a hash link
                if (link.getAttribute('href').startsWith('#')) {
                    e.preventDefault();
                    const target = link.getAttribute('href');
                    smoothScrollTo(target);
                    this.closeMenu();
                }
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (this.navMenu.classList.contains('active') && 
                !this.nav.contains(e.target)) {
                this.closeMenu();
            }
        });
        
        // Initial check
        this.handleScroll();
    }
    
    handleScroll() {
        const scrolled = window.pageYOffset > CONFIG.navScrollThreshold;
        this.nav.classList.toggle('scrolled', scrolled);
    }
    
    toggleMenu() {
        this.navMenu.classList.toggle('active');
        this.menuToggle.classList.toggle('active');
        
        // Animate hamburger icon
        const spans = this.menuToggle.querySelectorAll('span');
        if (this.navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translateY(7px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translateY(-7px)';
        } else {
            spans[0].style.transform = '';
            spans[1].style.opacity = '';
            spans[2].style.transform = '';
        }
    }
    
    closeMenu() {
        this.navMenu.classList.remove('active');
        this.menuToggle.classList.remove('active');
        
        // Reset hamburger icon
        const spans = this.menuToggle.querySelectorAll('span');
        spans.forEach(span => {
            span.style.transform = '';
            span.style.opacity = '';
        });
    }
}

// ============================================================================
// SCROLL TO TOP BUTTON
// ============================================================================

class ScrollToTop {
    constructor() {
        this.button = document.getElementById('scrollTop');
        if (!this.button) return;
        
        this.init();
    }
    
    init() {
        // Show/hide button on scroll
        window.addEventListener('scroll', debounce(() => this.handleScroll(), 10));
        
        // Click handler
        this.button.addEventListener('click', () => this.scrollToTop());
        
        // Initial check
        this.handleScroll();
    }
    
    handleScroll() {
        const scrolled = window.pageYOffset > CONFIG.scrollTopThreshold;
        this.button.classList.toggle('visible', scrolled);
    }
    
    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

// ============================================================================
// SCROLL ANIMATIONS
// ============================================================================

class ScrollAnimations {
    constructor() {
        this.elements = document.querySelectorAll('.project-card, .stack-category, .about-content > *, .contact-wrapper');
        
        if ('IntersectionObserver' in window) {
            this.initObserver();
        } else {
            // Fallback: show all elements immediately
            this.elements.forEach(el => el.style.opacity = '1');
        }
    }
    
    initObserver() {
        // Create observer
        this.observer = new IntersectionObserver(
            (entries) => this.handleIntersection(entries),
            CONFIG.observerOptions
        );
        
        // Set initial state and observe elements
        this.elements.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
            
            this.observer.observe(element);
        });
    }
    
    handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Unobserve after animation
                this.observer.unobserve(entry.target);
            }
        });
    }
}

// ============================================================================
// PROJECT CARDS INTERACTION
// ============================================================================

class ProjectCards {
    constructor() {
        this.cards = document.querySelectorAll('.project-card');
        this.init();
    }
    
    init() {
        this.cards.forEach(card => {
            // Add hover effect for images
            const images = card.querySelectorAll('img');
            
            card.addEventListener('mouseenter', () => {
                images.forEach((img, index) => {
                    img.style.transition = 'transform 0.4s ease';
                    img.style.transform = `scale(${1.05 - (index * 0.01)})`;
                });
            });
            
            card.addEventListener('mouseleave', () => {
                images.forEach(img => {
                    img.style.transform = 'scale(1)';
                });
            });
        });
    }
}

// ============================================================================
// HERO STATS COUNTER ANIMATION
// ============================================================================

class StatsCounter {
    constructor() {
        this.stats = document.querySelectorAll('.stat-number');
        this.hasAnimated = false;
        
        if ('IntersectionObserver' in window) {
            this.initObserver();
        }
    }
    
    initObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.hasAnimated) {
                    this.animateStats();
                    this.hasAnimated = true;
                    observer.disconnect();
                }
            });
        }, { threshold: 0.5 });
        
        const heroStats = document.querySelector('.hero-stats');
        if (heroStats) {
            observer.observe(heroStats);
        }
    }
    
    animateStats() {
        this.stats.forEach(stat => {
            const text = stat.textContent;
            const hasPercent = text.includes('%');
            const hasPlus = text.includes('+');
            const hasDash = text.includes('-');
            
            let finalValue;
            let suffix = '';
            
            if (hasPercent) {
                finalValue = parseInt(text);
                suffix = '%';
            } else if (hasPlus) {
                finalValue = parseInt(text);
                suffix = '+';
            } else if (hasDash) {
                // For "1-3" format, just display as is
                return;
            } else {
                finalValue = parseInt(text);
            }
            
            if (isNaN(finalValue)) return;
            
            // Animate counter
            this.animateValue(stat, 0, finalValue, 1500, suffix);
        });
    }
    
    animateValue(element, start, end, duration, suffix = '') {
        const range = end - start;
        const increment = range / (duration / 16);
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            
            if (current >= end) {
                element.textContent = end + suffix;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current) + suffix;
            }
        }, 16);
    }
}

// ============================================================================
// PARALLAX EFFECTS
// ============================================================================

class ParallaxEffects {
    constructor() {
        this.orbs = document.querySelectorAll('.gradient-orb');
        this.init();
    }
    
    init() {
        if (window.innerWidth <= 768) return; // Disable on mobile
        
        window.addEventListener('scroll', debounce(() => this.handleScroll(), 10));
    }
    
    handleScroll() {
        const scrolled = window.pageYOffset;
        
        this.orbs.forEach((orb, index) => {
            const speed = (index + 1) * 0.3;
            const yPos = -(scrolled * speed);
            orb.style.transform = `translateY(${yPos}px)`;
        });
    }
}

// ============================================================================
// IMAGE LAZY LOADING (Enhanced)
// ============================================================================

class LazyLoadImages {
    constructor() {
        this.images = document.querySelectorAll('img[loading="lazy"]');
        this.init();
    }
    
    init() {
        if ('loading' in HTMLImageElement.prototype) {
            // Native lazy loading supported
            return;
        }
        
        // Fallback for browsers without native lazy loading
        if ('IntersectionObserver' in window) {
            this.initObserver();
        } else {
            // Load all images immediately as fallback
            this.images.forEach(img => {
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                }
            });
        }
    }
    
    initObserver() {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                    }
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        this.images.forEach(img => imageObserver.observe(img));
    }
}

// ============================================================================
// PERFORMANCE OPTIMIZATION
// ============================================================================

class PerformanceOptimizer {
    constructor() {
        this.init();
    }
    
    init() {
        // Defer non-critical CSS (if any)
        this.deferCSS();
        
        // Preload important resources
        this.preloadResources();
        
        // Add loading complete class
        window.addEventListener('load', () => {
            document.body.classList.add('loaded');
        });
    }
    
    deferCSS() {
        // Example: Load non-critical CSS asynchronously
        // const link = document.createElement('link');
        // link.rel = 'stylesheet';
        // link.href = 'non-critical.css';
        // document.head.appendChild(link);
    }
    
    preloadResources() {
        // Preload hero image
        const heroImage = document.querySelector('.profile-pic');
        if (heroImage && heroImage.src) {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = heroImage.src;
            document.head.appendChild(link);
        }
    }
}

// ============================================================================
// CONTACT FORM VALIDATION (if needed)
// ============================================================================

class ContactForm {
    constructor() {
        this.form = document.querySelector('.contact-form');
        if (!this.form) return;
        
        this.init();
    }
    
    init() {
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }
    
    handleSubmit(e) {
        e.preventDefault();
        
        // Add your form validation and submission logic here
        const formData = new FormData(this.form);
        
        // Example: Simple validation
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        if (!name || !email || !message) {
            this.showError('Tous les champs sont obligatoires');
            return;
        }
        
        if (!this.validateEmail(email)) {
            this.showError('Email invalide');
            return;
        }
        
        // Submit form (implement your own logic)
        this.showSuccess('Message envoyé avec succès !');
        this.form.reset();
    }
    
    validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
    
    showError(message) {
        // Implement error display
        console.error(message);
    }
    
    showSuccess(message) {
        // Implement success display
        console.log(message);
    }
}

// ============================================================================
// ACCESSIBILITY ENHANCEMENTS
// ============================================================================

class AccessibilityEnhancements {
    constructor() {
        this.init();
    }
    
    init() {
        // Add keyboard navigation support
        this.addKeyboardNav();
        
        // Skip to content link
        this.addSkipLink();
        
        // Focus management
        this.manageFocus();
    }
    
    addKeyboardNav() {
        // Allow Escape key to close mobile menu
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                const nav = new Navigation();
                nav.closeMenu();
            }
        });
    }
    
    addSkipLink() {
        // Add skip to main content link for screen readers
        const skipLink = document.createElement('a');
        skipLink.href = '#hero';
        skipLink.className = 'sr-only';
        skipLink.textContent = 'Aller au contenu principal';
        document.body.insertBefore(skipLink, document.body.firstChild);
    }
    
    manageFocus() {
        // Trap focus in mobile menu when open
        const nav = document.querySelector('.nav');
        const focusableElements = 'a[href], button:not([disabled])';
        
        nav.addEventListener('keydown', (e) => {
            const menu = document.querySelector('.nav-menu');
            if (!menu.classList.contains('active')) return;
            
            if (e.key === 'Tab') {
                const focusable = Array.from(nav.querySelectorAll(focusableElements));
                const firstFocusable = focusable[0];
                const lastFocusable = focusable[focusable.length - 1];
                
                if (e.shiftKey) {
                    if (document.activeElement === firstFocusable) {
                        lastFocusable.focus();
                        e.preventDefault();
                    }
                } else {
                    if (document.activeElement === lastFocusable) {
                        firstFocusable.focus();
                        e.preventDefault();
                    }
                }
            }
        });
    }
}

// ============================================================================
// CONSOLE EASTER EGG
// ============================================================================

function consoleEasterEgg() {
    const styles = [
        'color: #0066FF',
        'font-size: 16px',
        'font-weight: bold',
        'padding: 10px'
    ].join(';');
    
    console.log('%c👋 Hello, developer!', styles);
    console.log('%cLooking for a backend dev who writes clean code?', 'color: #00D9FF; font-size: 14px;');
    console.log('%cLet\'s talk: votre.email@example.com', 'color: #00FF94; font-size: 12px;');
}

// ============================================================================
// INITIALIZATION
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all components
    new Navigation();
    new ScrollToTop();
    new ScrollAnimations();
    new ProjectCards();
    new StatsCounter();
    new ParallaxEffects();
    new LazyLoadImages();
    new PerformanceOptimizer();
    new ContactForm();
    new AccessibilityEnhancements();
    
    // Easter egg
    consoleEasterEgg();
    
    // Log initialization
    console.log('✅ Portfolio initialized successfully');
});

// ============================================================================
// SERVICE WORKER (Optional - for PWA)
// ============================================================================

// Uncomment to enable service worker
/*
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => console.log('SW registered:', registration))
            .catch(error => console.log('SW registration failed:', error));
    });
}
*/

// ============================================================================
// EXPORT FOR TESTING (if needed)
// ============================================================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        Navigation,
        ScrollToTop,
        ScrollAnimations,
        ProjectCards,
        StatsCounter,
        smoothScrollTo,
        debounce
    };
}
