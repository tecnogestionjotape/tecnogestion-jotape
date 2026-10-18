# TecnoGestión JotaPe — revisión local (17/10/2026)

## Alcance
Copia de trabajo creada a partir de `TecnoGestionJotaPe(3).zip`. No publicada. No se modificó el repositorio Git original.

## WhatsApp
- En `index.html` se detectaron **3** enlaces (encabezado, tarjeta de contacto, pie de página).
- Todos apuntan al **5493492664153**; se respetan los textos precargados diferentes.
- Se agregó `data-whatsapp-link` a esas tres etiquetas; los `href` originales de `wa.me` permanecen en HTML como respaldo.
- Al final de `script.js` se añade una adaptación: escritorio -> `https://web.whatsapp.com/send?phone=...&text=...`; móvil/tablet -> enlace `wa.me` original.
- No se agregaron bibliotecas ni reglas visuales.

## Mundial 2026
- Se quitó del paquete `mundial-2026/`, que incluía `index.html`, `fixture.js`, `grupos.json`, `logo.png` y `style.css`.
- `index.html` y `sitemap.xml` principales no tenían enlaces a esa carpeta.
- Se eliminaron las tres cadenas `btnWorldcup` sin uso de `script.js` (ES/EN/PT).
- Se quitaron de `styles.css` solo `.btn-fixture` y `.btn-fixture:hover`, sin referencias en el HTML principal.
- La bitácora anterior conserva referencias históricas al proyecto Mundial por documentación, no por uso operativo.

## Pendientes antes de publicar
1. Guardar una copia o rama de respaldo en el repositorio local.
2. Comparar los archivos originales y modificados (`index.html`, `script.js`, `styles.css`).
3. Probar navegación real: Chrome Linux Mint (los tres enlaces abren `web.whatsapp.com`), Android/iPhone (abren `wa.me`), y verificar el mensaje precargado. La pantalla de WhatsApp puede requerir sesión iniciada.
4. Confirmar enlaces y traducciones del sitio, luego publicar mediante commit/push.
5. Revisar la web publicada desde escritorio y celular.

**Importante:** las comprobaciones automatizadas no sustituyen las pruebas manuales de WhatsApp en los dispositivos.
