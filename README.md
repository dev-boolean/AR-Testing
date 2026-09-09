# Menú AR — prototipo

Prototipo estático para GitHub Pages.

## Estructura

- `index.html`: página del plato.
- `models/hamburguesa.glb`: reemplazar por un modelo 3D real.
- `qr/hamburguesa-qr.png`: QR de ejemplo.

## Publicar

1. Crea un repositorio público en GitHub.
2. Sube todos los archivos manteniendo las carpetas.
3. Ve a Settings → Pages.
4. Selecciona `Deploy from a branch`.
5. Selecciona `main` y `/ (root)`.
6. Guarda y espera a que GitHub Pages publique el sitio.

## Importante

El archivo GLB incluido es un marcador de posición vacío para que reemplaces con tu modelo 3D.
La experiencia AR depende del navegador y del dispositivo. Esta primera versión usa `<model-viewer>` y sirve para probar la visualización/colocación AR en dispositivos compatibles.

Después podemos agregar QR por plato, múltiples modelos y una interfaz de menú.
