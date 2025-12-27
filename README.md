# SCANDELA - Sitio Web de Accesorios de Moda

Sitio web estático minimalista para portafolio y tienda de accesorios de moda artesanales.

## 🚀 Vista Rápida

Abre `index.html` en tu navegador para ver el sitio localmente.

## 📁 Estructura del Proyecto

```
SCANDELA/
├── index.html          # Página principal
├── shop.html           # Tienda con productos
├── about.html          # Sobre mí / Historia
├── contact.html        # Página de contacto
├── css/
│   ├── base.css        # Estilos compartidos + variables
│   ├── index.css       # Estilos de la homepage
│   ├── shop.css        # Estilos de la tienda
│   ├── about.css       # Estilos de about
│   └── contact.css     # Estilos de contacto
├── js/
│   ├── main.js         # Funcionalidad compartida
│   ├── shop.js         # Filtros de productos
│   └── contact.js      # Validación del formulario
└── img/
    └── bolsoPortada.jpeg  # Imagen principal
```

## 🎨 Características de Diseño

- **Tipografía**: Helvetica Neue Bold
- **Estética**: Minimalista, blanco y negro
- **Layout**: Grid responsive
- **Efectos**: Hover overlays en productos
- **Navegación**: Header fijo + menú móvil

## 📸 Añadir Imágenes

### Imagen Hero (Portada)
Ya está configurada con `img/bolsoPortada.jpeg`

### Productos Destacados (index.html)
Líneas 98-122: Reemplaza los placeholders con tus imágenes

### Galería de Colección (index.html)
Líneas 151-178: Añade imágenes en los `collection-item`

### Tienda (shop.html)
Línea 94: El bolso ya tiene imagen
Línea 105: Añade imagen del collar

### Formato de Imagen
```html
<img src="img/tu-imagen.jpeg" alt="Descripción del producto">
```

## 🌐 Publicar en GitHub Pages

### Opción 1: Desde el Repositorio

1. **Subir archivos a GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/SCANDELA.git
   git push -u origin main
   ```

2. **Configurar GitHub Pages:**
   - Ve a Settings → Pages
   - En "Source" selecciona "main" branch
   - En "Folder" selecciona "/ (root)"
   - Click "Save"

3. **Tu sitio estará en:**
   `https://TU-USUARIO.github.io/SCANDELA/`

### Opción 2: Con Dominio Personalizado

1. En la carpeta raíz, crea `CNAME`:
   ```
   tudominio.com
   ```

2. En tu proveedor de dominio, configura los DNS:
   ```
   A Record: 185.199.108.153
   A Record: 185.199.109.153
   A Record: 185.199.110.153
   A Record: 185.199.111.153
   
   CNAME: TU-USUARIO.github.io
   ```

3. En GitHub Pages settings, añade tu dominio personalizado

## ✏️ Personalización

### Colores
Edita las variables en `css/base.css` (líneas 9-17):
```css
--color-black: #000000;
--color-white: #ffffff;
--color-gray-100: #f8f8f8;
```

### Tipografía
Modifica las fuentes en `css/base.css` (líneas 19-23)

### Productos
- **Añadir productos**: Duplica el HTML de producto en `shop.html`
- **Cambiar precios/nombres**: Edita el texto en los overlays

### Formulario de Contacto
Para que el formulario funcione, integra con:
- [Formspree](https://formspree.io) (recomendado)
- [EmailJS](https://www.emailjs.com/)
- [Netlify Forms](https://www.netlify.com/products/forms/)

Ejemplo con Formspree en `contact.html`:
```html
<form action="https://formspree.io/f/TU-ID" method="POST">
```

## 📱 Responsive

El sitio es completamente responsive:
- **Desktop**: Grid de 2-4 columnas
- **Tablet**: Grid de 2 columnas
- **Móvil**: Menú hamburguesa + grid de 1 columna

## 🔧 Mantenimiento

### Añadir Nueva Página
1. Crea `nueva-pagina.html`
2. Copia el header/footer de otra página
3. Crea `css/nueva-pagina.css` con estilos específicos
4. Añade link en navegación

### Optimizar Imágenes
Antes de subir, optimiza con:
- [TinyPNG](https://tinypng.com)
- [Squoosh](https://squoosh.app)
- Tamaño recomendado: 1200px ancho máximo

## 📄 Licencia

© 2024 SCANDELA. Todos los derechos reservados.
