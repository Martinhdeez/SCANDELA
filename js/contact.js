/* =====================================================
   SCANDELA - Contact JavaScript
   Funcionalidades específicas de la página de contacto
   ===================================================== */

document.addEventListener('DOMContentLoaded', function () {
    initContactForm();
});

/* ----- Contact Form Handler ----- */
function initContactForm() {
    const form = document.getElementById('contactForm');

    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        // Basic validation
        if (!validateForm(data)) {
            return;
        }

        // Show success message (for static site, you would integrate with a service like Formspree)
        showFormMessage('Thank you for your message! We will respond soon.', 'success');

        // Reset form
        form.reset();
    });
}

/* ----- Form Validation ----- */
function validateForm(data) {
    // Check required fields
    if (!data.name || !data.name.trim()) {
        showFormMessage('Please enter your name.', 'error');
        return false;
    }

    if (!data.email || !data.email.trim()) {
        showFormMessage('Please enter your email.', 'error');
        return false;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        showFormMessage('Please enter a valid email.', 'error');
        return false;
    }

    if (!data.message || !data.message.trim()) {
        showFormMessage('Please write your message.', 'error');
        return false;
    }

    return true;
}

/* ----- Show Form Message ----- */
function showFormMessage(message, type) {
    // Remove existing message if any
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }

    // Create message element
    const messageEl = document.createElement('div');
    messageEl.className = `form-message form-message--${type}`;
    messageEl.textContent = message;
    messageEl.style.cssText = `
        padding: 1rem;
        margin-bottom: 1rem;
        font-size: 0.875rem;
        letter-spacing: 0.02em;
        ${type === 'success'
            ? 'background: #e8f5e9; color: #2e7d32; border: 1px solid #a5d6a7;'
            : 'background: #ffebee; color: #c62828; border: 1px solid #ef9a9a;'
        }
    `;

    // Insert message at the top of the form
    const form = document.getElementById('contactForm');
    form.insertBefore(messageEl, form.firstChild);

    // Auto-remove after 5 seconds
    setTimeout(() => {
        messageEl.style.opacity = '0';
        messageEl.style.transition = 'opacity 0.3s ease';
        setTimeout(() => messageEl.remove(), 300);
    }, 5000);
}
