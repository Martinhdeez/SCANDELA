#!/bin/bash
# Script to update all HTML pages to use component system

echo "Updating HTML pages to use component system..."

# Update about.html
sed -i '/<header class="header">/,/<\/header>/c\    <!-- Header Placeholder -->\n    <header class="header" id="header-placeholder"></header>' /home/mrtx/Documents/candela/SCANDELA/about.html
sed -i '/<footer class="footer">/,/<\/footer>/c\    <!-- Footer Placeholder -->\n    <footer class="footer" id="footer-placeholder"></footer>' /home/mrtx/Documents/candela/SCANDELA/about.html
sed -i 's|<script src="js/main.js"></script>|<script src="js/components.js"></script>\n    <script src="js/main.js"></script>\n    <script>initComponents('"'"'about'"'"');</script>|' /home/mrtx/Documents/candela/SCANDELA/about.html

# Update contact.html
sed -i '/<header class="header">/,/<\/header>/c\    <!-- Header Placeholder -->\n    <header class="header" id="header-placeholder"></header>' /home/mrtx/Documents/candela/SCANDELA/contact.html
sed -i '/<footer class="footer">/,/<\/footer>/c\    <!-- Footer Placeholder -->\n    <footer class="footer" id="footer-placeholder"></footer>' /home/mrtx/Documents/candela/SCANDELA/contact.html
sed -i 's|<script src="js/main.js"></script>|<script src="js/components.js"></script>\n    <script src="js/main.js"></script>|' /home/mrtx/Documents/candela/SCANDELA/contact.html
sed -i 's|<script src="js/contact.js"></script>|<script src="js/contact.js"></script>\n    <script>initComponents('"'"'contact'"'"');</script>|' /home/mrtx/Documents/candela/SCANDELA/contact.html

# Update product pages
for file in product-bag.html product-necklace.html; do
    sed -i '/<header class="header">/,/<\/header>/c\    <!-- Header Placeholder -->\n    <header class="header" id="header-placeholder"></header>' /home/mrtx/Documents/candela/SCANDELA/$file
    sed -i '/<footer class="footer">/,/<\/footer>/c\    <!-- Footer Placeholder -->\n    <footer class="footer" id="footer-placeholder"></footer>' /home/mrtx/Documents/candela/SCANDELA/$file
    sed -i 's|<script src="js/main.js"></script>|<script src="js/components.js"></script>\n    <script src="js/main.js"></script>\n    <script>initComponents();</script>|' /home/mrtx/Documents/candela/SCANDELA/$file
done

echo "Done! All pages updated to use component system."
