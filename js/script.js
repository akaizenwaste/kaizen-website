// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
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


// Form submission handling with client-side validation
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.setAttribute('novalidate', true); // Disable default browser validation UI

    const requiredFields = contactForm.querySelectorAll('input[required], select[required], textarea[required]');

    requiredFields.forEach(field => {
        field.addEventListener('blur', function() {
            validateField(this);
        });
        field.addEventListener('input', function() {
            // Clear error as user types if field becomes valid
            if (this.validity.valid) {
                clearError(this);
            } else {
                // Optionally, re-validate on input to give instant feedback for some error types
                // validateField(this); 
            }
        });
    });

    contactForm.addEventListener('submit', function(event) {
        let isFormValid = true;
        requiredFields.forEach(field => {
            if (!validateField(field)) { // validateField now returns true/false
                isFormValid = false;
            }
        });

        if (!isFormValid) {
            event.preventDefault();
            // Find first invalid field and focus it for better UX
            const firstInvalidField = Array.from(requiredFields).find(f => !f.validity.valid);
            if (firstInvalidField) {
                firstInvalidField.focus();
            }
        } else {
            // If form is valid, proceed with submission logic
            event.preventDefault(); // Keep this to handle submission manually as before
            const formData = new FormData(this);
            const data = Object.fromEntries(formData.entries());
            console.log('Form submitted (valid):', data);
            alert('Thank you for your request! We will get back to you soon.');
            this.reset();
            requiredFields.forEach(clearError); // Clear any lingering error states after successful submission
        }
    });
}

function validateField(field) {
    let errorMessage = '';
    if (field.validity.valueMissing) {
        errorMessage = `${field.labels[0] ? field.labels[0].textContent.replace('*','').trim() : 'This field'} is required.`;
    } else if (field.type === 'email' && field.validity.typeMismatch) {
        errorMessage = 'Please enter a valid email address.';
    } else if (field.type === 'number' && field.validity.rangeUnderflow) {
        errorMessage = `Must be at least ${field.min}.`;
    }
    // Add more custom validation checks here if needed

    if (errorMessage) {
        showError(field, errorMessage);
        return false; // Invalid
    } else {
        clearError(field);
        return true; // Valid
    }
}

function showError(field, message) {
    clearError(field); // Remove any existing error message first
    field.classList.add('invalid');
    const errorSpan = document.createElement('span');
    errorSpan.className = 'error-message';
    errorSpan.textContent = message;
    // Insert after the field, or adjust as per your form structure
    field.parentNode.appendChild(errorSpan);
}

function clearError(field) {
    field.classList.remove('invalid');
    const errorSpan = field.parentNode.querySelector('.error-message');
    if (errorSpan) {
        errorSpan.remove();
    }
}
