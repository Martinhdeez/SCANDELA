/* =====================================================
   SCANDELA - Shop JavaScript
   Funcionalidades específicas de la página de tienda
   ===================================================== */

document.addEventListener('DOMContentLoaded', function () {
    initProductFilter();
    initProductHover();
});

/* ----- Product Filter ----- */
function initProductFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');

    if (!filterButtons.length || !productCards.length) return;

    filterButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            const filter = this.dataset.filter;

            // Update active button
            filterButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            // Filter products
            productCards.forEach(card => {
                const category = card.dataset.category;

                if (filter === 'all' || category === filter) {
                    card.classList.remove('hidden');
                    card.style.display = '';
                } else {
                    card.classList.add('hidden');
                    // Use setTimeout to allow transition before hiding
                    setTimeout(() => {
                        if (card.classList.contains('hidden')) {
                            card.style.display = 'none';
                        }
                    }, 300);
                }
            });
        });
    });

    // Check URL hash for category filter on page load
    const hash = window.location.hash.substring(1);
    if (hash) {
        const targetBtn = document.querySelector(`.filter-btn[data-filter="${hash}"]`);
        if (targetBtn) {
            targetBtn.click();
        }
    }
}

/* ----- Product Hover Effect Enhancement ----- */
function initProductHover() {
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        const image = card.querySelector('.product-image');

        if (!image) return;

        // Add subtle scale effect on hover
        card.addEventListener('mouseenter', function () {
            const placeholder = this.querySelector('.image-placeholder');
            if (placeholder) {
                placeholder.style.transform = 'scale(1.02)';
                placeholder.style.transition = 'transform 0.5s ease';
            }
        });

        card.addEventListener('mouseleave', function () {
            const placeholder = this.querySelector('.image-placeholder');
            if (placeholder) {
                placeholder.style.transform = 'scale(1)';
            }
        });
    });
}
