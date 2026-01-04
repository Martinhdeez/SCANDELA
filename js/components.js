/* =====================================================
   Reusable Components (Header & Footer)
   Similar to React components for easy maintenance
   ===================================================== */

/**
 * Render Header Component
 * @param {string} activePage - The current active page (e.g., 'home', 'shop', 'about', 'contact')
 */
function renderHeader(activePage = '') {
    const header = document.getElementById('header-placeholder');
    if (!header) return;

    const isActive = (page) => page === activePage ? 'active' : '';

    header.innerHTML = `
        <div class="header-container">
            <nav class="nav-left">
                <ul class="nav-menu">
                    <li><a href="index.html" class="nav-link ${isActive('home')}">HOME</a></li>
                    <li><a href="collection.html" class="nav-link ${isActive('collections')}">COLLECTIONS</a></li>
                    <li class="nav-dropdown">
                        <a href="shop.html" class="nav-link ${isActive('shop')}">SHOP</a>
                        <ul class="dropdown-menu">
                            <li><a href="shop.html#bolsos">Bags</a></li>
                            <li><a href="shop.html#collares">Necklaces</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
            
            <div class="logo">
                <a href="index.html">SCANDELA</a>
            </div>
            
            <nav class="nav-right">
                <ul class="nav-menu">
                    <li><a href="about.html" class="nav-link ${isActive('about')}">ABOUT</a></li>
                </ul>
            </nav>
            
            <!-- Mobile menu button -->
            <button class="mobile-menu-btn" aria-label="Open menu" aria-expanded="false">
                <span class="hamburger"></span>
            </button>
        </div>
        
        <!-- Mobile Navigation -->
        <nav class="mobile-nav" aria-hidden="true">
            <ul class="mobile-menu">
                <li><a href="index.html" class="mobile-link ${isActive('home')}">HOME</a></li>
                <li><a href="collection.html" class="mobile-link ${isActive('collections')}">COLLECTIONS</a></li>
                <li><a href="shop.html" class="mobile-link ${isActive('shop')}">SHOP</a></li>
                <li><a href="shop.html#bolsos" class="mobile-link sub">Bags</a></li>
                <li><a href="shop.html#collares" class="mobile-link sub">Necklaces</a></li>
                <li><a href="about.html" class="mobile-link ${isActive('about')}">ABOUT</a></li>
            </ul>
        </nav>
    `;
}

/**
 * Render Footer Component
 */
function renderFooter() {
    const footer = document.getElementById('footer-placeholder');
    if (!footer) return;

    footer.innerHTML = `
        <div class="footer-container">
            <div class="footer-column">
                <h3 class="footer-title">Follow Us</h3>
                <ul class="footer-social">
                    <li><a href="https://instagram.com/scandelahernandez" target="_blank" rel="noopener noreferrer" aria-label="Instagram">@scandelahernandez</a></li>
                </ul>
            </div>
            
            <div class="footer-column">
                <h3 class="footer-title">Contact</h3>
                <ul class="footer-contact">
                    <li><a href="mailto:scandelahernandezzz@gmail.com">scandelahernandezzz@gmail.com</a></li>
                </ul>
            </div>
        </div>
        
        <div class="footer-bottom">
            <p>&copy; 2026 SCANDELA. All rights reserved.</p>
        </div>
    `;
}

/**
 * Initialize components on page load
 * Call this function with the active page name
 * @param {string} activePage - The current active page
 */
function initComponents(activePage = '') {
    renderHeader(activePage);
    renderFooter();
}

// Export for use in main.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { renderHeader, renderFooter, initComponents };
}
