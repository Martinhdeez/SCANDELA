# SCANDELA - Reusable Components System

## 📋 Overview

The website now uses a **React-style component system** for shared elements (Header & Footer). This means you only need to edit these elements **once** in `js/components.js`, and the changes will apply to **all pages** automatically.

## 🎯 How It Works

### Structure
```
js/
├── components.js    ← Edit header/footer HTML here
├── main.js         ← Shared functionality (mobile menu, scroll)
├── shop.js         ← Shop-specific features
└── contact.js      ← Contact form validation
```

### Component System

All pages use **placeholder elements** that JavaScript fills with content:

```html
<!-- Header Placeholder -->
<header class="header" id="header-placeholder"></header>

<!-- Your page content here -->

<!-- Footer Placeholder -->
<footer class="footer" id="footer-placeholder"></footer>

<!-- Scripts -->
<script src="js/components.js"></script>
<script src="js/main.js"></script>
<script>initComponents('home');</script>  <!-- 'home', 'shop', 'about', 'contact' -->
```

## ✏️ How to Edit Components

### Editing the Header

Open `js/components.js` and find the `renderHeader()` function:

```javascript
function renderHeader(activePage = '') {
    // Edit the HTML template string inside this function
    header.innerHTML = `
        <div class="header-container">
            <!-- Your header HTML here -->
        </div>
    `;
}
```

**Common edits:**
- Change navigation links
- Update logo text
- Modify dropdown menu items
- Add/remove navigation sections

### Editing the Footer

Find the `renderFooter()` function in the same file:

```javascript
function renderFooter() {
    footer.innerHTML = `
        <div class="footer-container">
            <!-- Your footer HTML here -->
        </div>
    `;
}
```

**Common edits:**
- Update Instagram handle
- Change email address
- Modify copyright year
- Add/remove footer columns

## 📝 Examples

### Example 1: Change Instagram Handle

**Before:**
```javascript
<li><a href="https://instagram.com/scandelahernandez">@scandelahernandez</a></li>
```

**After:**
```javascript
<li><a href="https://instagram.com/newhandle">@newhandle</a></li>
```

**Result:** All pages (index, shop, about, contact, products) update automatically!

### Example 2: Add a New Navigation Link

Edit `renderHeader()`:

```javascript
<li><a href="blog.html" class="nav-link ${isActive('blog')}">BLOG</a></li>
```

### Example 3: Update Copyright Year

Edit `renderFooter()`:

```javascript
<p>&copy; 2025 SCANDELA. All rights reserved.</p>
```

## 🔧 Adding New Pages

When creating a new page:

1. **Add HTML placeholders:**
```html
<header class="header" id="header-placeholder"></header>
<!-- Your content -->
<footer class="footer" id="footer-placeholder"></footer>
```

2. **Include scripts:**
```html
<script src="js/components.js"></script>
<script src="js/main.js"></script>
<script>initComponents('yourpage');</script>
```

3. **Active page highlighting** (optional):
   - Pass the page name to `initComponents('yourpage')`
   - The corresponding nav link will get the `active` class

## ⚙️ Technical Details

### `renderHeader(activePage)`
- **Parameter:** `activePage` - String matching current page ('home', 'shop', etc.)
- **Effect:** Adds `active` class to the corresponding navigation link
- **DOM Target:** Element with `id="header-placeholder"`

### `renderFooter()`
- **Parameters:** None
- **Effect:** Renders footer HTML with centered columns
- **DOM Target:** Element with `id="footer-placeholder"`

### `initComponents(activePage)`
- **Parameter:** `activePage` - Current page identifier  
- **Effect:** Calls both `renderHeader()` and `renderFooter()`
- **When:** Call after DOM is loaded (at end of `<body>`)

## 🚀 Benefits

✅ **Single source of truth** - Edit once, update everywhere
✅ **Consistency** - All pages use identical header/footer
✅ **Easy maintenance** - No need to update 6+ HTML files
✅ **Centered footer** - Footer columns properly centered with CSS Grid
✅ **Active states** - Automatic navigation highlighting per page

## 📁 Files Using Components

- ✅ `index.html` - Home page
- ✅ `shop.html` - Shop page
- ⏳ `about.html` - About page (updating)
- ⏳ `contact.html` - Contact page (updating)
- ⏳ `product-bag.html` - Product detail (updating)
- ⏳ `product-necklace.html` - Product detail (updating)

## 🐛 Troubleshooting

**Header/Footer not showing?**
- Check console for JavaScript errors
- Verify `id="header-placeholder"` and `id="footer-placeholder"` exist
- Ensure `components.js` loads before `initComponents()` call

**Active page not highlighting?**
- Check you're passing correct page name to `initComponents('pagename')`
- Verify page name matches those in  `renderHeader()` function

**Changes not appearing?**
- Hard refresh: `Ctrl + F5` (Windows) or `Cmd + Shift + R` (Mac)
- Clear browser cache
- Check you edited `js/components.js` (not individual HTML files)

## 💡 Best Practices

1. **Always edit components.js** - Never edit header/footer in HTML files
2. **Test on all pages** - After editing, check index, shop, and product pages
3. **Keep HTML valid** - Use proper quote escaping in template strings
4. **Maintain structure** - Don't remove essential classes (e.g., `footer-container`)
5. **Use template literals** - JavaScript backticks (`) allow multiline HTML

---

**Need help?** All component code is in `js/components.js` - it's well-commented and easy to understand!
