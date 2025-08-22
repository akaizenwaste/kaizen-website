// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Initialize carousel functionality
function initializeCarousel() {
    const carousel = document.getElementById('valueCarousel');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (!carousel || !prevBtn || !nextBtn) return;
    
    const cardWidth = 350 + 32; // card width + gap
    let currentPosition = 0;
    const maxScroll = carousel.scrollWidth - carousel.clientWidth;
    
    prevBtn.addEventListener('click', () => {
        currentPosition = Math.max(0, currentPosition - cardWidth);
        carousel.scrollTo({
            left: currentPosition,
            behavior: 'smooth'
        });
    });
    
    nextBtn.addEventListener('click', () => {
        currentPosition = Math.min(maxScroll, currentPosition + cardWidth);
        carousel.scrollTo({
            left: currentPosition,
            behavior: 'smooth'
        });
    });
    
    // Update button states based on scroll position
    carousel.addEventListener('scroll', () => {
        const scrollLeft = carousel.scrollLeft;
        prevBtn.style.opacity = scrollLeft <= 0 ? '0.5' : '1';
        nextBtn.style.opacity = scrollLeft >= maxScroll ? '0.5' : '1';
    });
    
    // Initialize button states
    prevBtn.style.opacity = '0.5';
    nextBtn.style.opacity = maxScroll > 0 ? '1' : '0.5';
}

// Handle video playback (placeholder for future video implementation)
function handleVideoPlayback() {
    const videoBackground = document.querySelector('.hero-video-background video');
    if (videoBackground) {
        videoBackground.muted = true;
        videoBackground.autoplay = true;
        videoBackground.loop = true;
        videoBackground.playsInline = true;
    }
}

// Animate elements on scroll
function animateOnScroll() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements that should animate in
    document.querySelectorAll('.carousel-card, .expertise-column, .mission-statement-box').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeCarousel();
    handleVideoPlayback();
    animateOnScroll();
});

// "For You" Navigation Dropdown ARIA and Keyboard Support
const navDropdownLink = document.getElementById('for-you-nav-link');
if (navDropdownLink) {
    const dropdownContent = navDropdownLink.nextElementSibling;

    navDropdownLink.addEventListener('mouseenter', () => {
        navDropdownLink.setAttribute('aria-expanded', 'true');
    });
    navDropdownLink.addEventListener('mouseleave', () => {
        // Only set to false if focus is not within the dropdown content
        setTimeout(() => { // Timeout to allow focus to shift
            if (!dropdownContent.contains(document.activeElement)) {
                 navDropdownLink.setAttribute('aria-expanded', 'false');
            }
        }, 100);
    });
    navDropdownLink.addEventListener('focus', () => {
        navDropdownLink.setAttribute('aria-expanded', 'true');
    });
    navDropdownLink.addEventListener('blur', (event) => {
        // Check if the new focused element is part of the dropdown
        if (!event.relatedTarget || !dropdownContent.contains(event.relatedTarget)) {
            navDropdownLink.setAttribute('aria-expanded', 'false');
        }
    });
    
    // Close dropdown if Escape key is pressed
    dropdownContent.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            navDropdownLink.setAttribute('aria-expanded', 'false');
            navDropdownLink.focus(); // Return focus to the main link
        }
    });
    
    // Ensure dropdown closes when focus moves out of it
    const dropdownLinks = dropdownContent.querySelectorAll('.dropdown-link');
    dropdownLinks.forEach(link => {
        link.addEventListener('blur', (event) => {
            // Check if focus is still within the dropdown content or its trigger
            if (!dropdownContent.contains(event.relatedTarget) && event.relatedTarget !== navDropdownLink) {
                navDropdownLink.setAttribute('aria-expanded', 'false');
            }
        });
    });
}

// Units Counter with API
const counterElement = document.getElementById('unitsCounter');
let unitsCount = 4000;

// Initial count fetch
fetch('https://api.kaizen-waste.com/counter')
    .then(response => response.json())
    .then(data => {
        unitsCount = data.count;
        counterElement.textContent = unitsCount.toLocaleString();
    })
    .catch(error => console.error('Error fetching count:', error));

// Update count every 5 seconds
setInterval(() => {
    fetch('https://api.kaizen-waste.com/counter/increment', { method: 'POST' })
        .then(response => response.json())
        .then(data => {
            unitsCount = data.count;
            counterElement.textContent = unitsCount.toLocaleString();
        })
        .catch(error => console.error('Error updating count:', error));
}, 5000);

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add animation on scroll for About section
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

document.querySelectorAll('.stat-item, .value-card').forEach(el => {
    observer.observe(el);
});

// Value card dropdown toggle
const valuesGrid = document.querySelector('.values-grid');

function toggleValueCard(cardElement) {
    const isActive = cardElement.classList.contains('active');
    
    // Close all other active cards
    valuesGrid.querySelectorAll('.value-card.active').forEach(activeCard => {
        if (activeCard !== cardElement) {
            activeCard.classList.remove('active');
            activeCard.querySelector('.value-dropdown').classList.remove('active');
            activeCard.querySelector('.value-toggle-icon').classList.remove('rotated');
            activeCard.querySelector('.value-title-container').setAttribute('aria-expanded', 'false');
        }
    });

    // Toggle current card
    cardElement.classList.toggle('active', !isActive);
    const dropdown = cardElement.querySelector('.value-dropdown');
    const titleContainer = cardElement.querySelector('.value-title-container');
    const icon = cardElement.querySelector('.value-toggle-icon');

    if (dropdown) dropdown.classList.toggle('active', !isActive);
    if (icon) icon.classList.toggle('rotated', !isActive);
    if (titleContainer) titleContainer.setAttribute('aria-expanded', !isActive);
}

if (valuesGrid) {
    valuesGrid.addEventListener('click', function(event) {
        const clickedTitleContainer = event.target.closest('.value-title-container');
        if (clickedTitleContainer) {
            const cardToToggle = clickedTitleContainer.closest('.value-card');
            if (cardToToggle) {
                toggleValueCard(cardToToggle);
            }
        }
    });

    valuesGrid.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            const focusedTitleContainer = event.target.closest('.value-title-container');
            if (focusedTitleContainer && focusedTitleContainer.matches('[role="button"]')) {
                event.preventDefault(); // Prevent page scroll on space
                const cardToToggle = focusedTitleContainer.closest('.value-card');
                if (cardToToggle) {
                    toggleValueCard(cardToToggle);
                }
            }
        }
    });
}
