# Bitácora técnica — TecnoGestión JotaPe

**Fecha:** 11/10/2026  
**Proyecto:** https://tecnogestionjotape.com.ar/  
**Entorno de trabajo:** Linux Mint, Visual Studio Code, Git; rama `master` vinculada a `origin/master`.

## Objetivo de la sesión
Corregir la visualización responsive de la web en celulares y tablets y diagnosticar el peso excesivo de la carpeta de proyecto y sus archivos ZIP, sin comprometer el funcionamiento ni el historial.

## 1. Diseño responsive
- En teléfonos se detectó que los iconos de «Agendar reunión», «Consultar reparación» y «Ver servicios» quedaban fuera de los botones.
- Causa identificada: la regla de escritorio `.hero-btns a { width: calc((100% - 40px) / 3) }` seguía aplicándose pese al diseño móvil en columna.
- Corrección aplicada: a tamaños móviles, los tres enlaces deben ocupar el ancho disponible y contener texto e ícono alineados dentro del borde.
- En simulación de iPad Pro 13 (1032 × 1376) se detectó que el menú de escritorio se amontonaba y partía textos.
- Corrección: adelantar el cambio a navegación compacta con botón hamburguesa para tablets hasta aproximadamente 1200 px, conservando el menú normal en escritorio.
- Ajuste final solicitado: hamburguesa en el lado izquierdo del encabezado móvil, mediante regla CSS bajo `@media (max-width: 600px)` que establece `header { justify-content: flex-start; }` y `.menu-toggle { order: -1; margin-left: 0; margin-right: 12px; }`.
- **Validación:** el usuario confirmó que el diseño para iPad se veía perfecto y calificó positivamente el último ajuste. Hubo commit/push del CSS. No se documentó una matriz completa de pruebas en dispositivos reales.

## 2. Diagnóstico de almacenamiento
Comandos de solo lectura usados:
```bash
du -h --max-depth=1 . | sort -hr
git count-objects -vH
ps aux | grep '[g]it'
ls -lh --full-time .git/objects/a0/tmp_obj_JJVSfV .git/objects/cc/tmp_obj_CeUSiL
git status -sb
git fsck --full --no-reflogs
git rev-list --objects --all | git cat-file --batch-check='%(objectname) %(objecttype) %(objectsize) %(rest)' | awk '$2=="blob" {print $3, $4}' | sort -nr | head -15 | numfmt --field=1 --to=iec-i --suffix=B
```

**Medición inicial:**
- Proyecto completo: 372 MB (`du`).
- `.git`: 345 MB.
- `img`: 19 MB.
- `fondos`: 8,5 MB.
- `mundial-2026`: 68 KB (no era el causante del peso).
- `git count-objects -vH`: 532 objetos sueltos / 157,89 MiB y dos temporales considerados basura / 184,98 MiB.

**Diagnóstico:** dos `tmp_obj_` en `.git/objects` medían aproximadamente 101 MB y 85 MB y habían sido modificados el 11/10/2026, cerca de la operación commit/push. No había procesos Git de mantenimiento activos detectados; se hizo un control adicional de integridad antes de apartarlos.

## 3. Limpieza realizada
1. Los temporales `.git/objects/a0/tmp_obj_JJVSfV` y `.git/objects/cc/tmp_obj_CeUSiL` se movieron, sin borrarlos inicialmente, a `~/Respaldo-Git-TGJP/`.
2. Se repitieron `git fsck --full`, `git status -sb` y `git count-objects -vH`; Git pasó las comprobaciones y reportó `garbage: 0`.
3. Se ejecutó `git gc --no-prune` para compactar el almacén sin poda deliberada de objetos antiguos. Terminó sin errores: 512 objetos principales y 23 objetos cruft empaquetados.
4. Verificación posterior: `.git` 151 MB; 535 objetos dentro de dos paquetes; 0 objetos sueltos; basura 0; `master...origin/master` limpio.
5. Comprobación `git fsck --full && git status -sb`: completada, incluidos 535 objetos y 139 commits, sin errores.
6. Se eliminaron con `rm -i` los dos archivos temporales que estaban en `~/Respaldo-Git-TGJP/`, tras confirmar integridad. La carpeta quedó prácticamente vacía (4 KB).
7. Medición final: proyecto **179 MB** (antes 372 MB). Ahorro aproximado de **193 MB dentro del proyecto**. La eliminación de los dos temporales permitió recuperar aproximadamente 185 MB efectivos en disco; el resto fue reorganización y compresión de Git.

**Estado final comprobado:** repositorio íntegro, rama local limpia, objetos en paquetes y sin basura detectada. El comando `git status -sb` muestra sincronía respecto a las referencias remotas locales; no sustituye una comprobación remota en línea.

## 4. Inspección del ZIP compartido
Archivo recibido `TecnoGestionJotaPe(2).zip`: ~177,4 MiB comprimidos, 97 entradas. Contiene `.git`, incluidos dos paquetes grandes de unos 131,7 MiB y 18,8 MiB sin comprimir. Esto explica que el ZIP continúe pesado después de limpiar.

Se preparó por separado `TecnoGestionJotaPe-sin-git.zip`, que conserva los archivos del sitio del ZIP recibido y excluye completamente `.git`.

Hay varios archivos PNG de tamaño relevante en `img/` y `fondos/`, y existen nombres de imágenes duplicados entre ambas carpetas; **no eliminar ni recomprimir estos recursos sin verificar referencias HTML/CSS/JS y calidad visual**.

## 5. Procedimiento recomendado para futuras entregas
Desde la raíz del repositorio, si se desea compartir la versión confirmada en Git:
```bash
git archive --format=zip --output=../TecnoGestionJotaPe-para-compartir.zip HEAD
```
Esto empaqueta el contenido **rastreado y confirmado en el último commit** sin agregar la carpeta `.git`. **Atención:** deja fuera archivos sin seguimiento y cambios sin confirmar.

Si se necesita incluir el estado local de todos los archivos (incluyendo cambios sin confirmar), excepto Git:
```bash
zip -r ../TecnoGestionJotaPe-para-compartir.zip . -x '.git/*' './.git/*'
```
Al usar el destino `../`, el nuevo ZIP queda fuera del proyecto. Este método puede incluir archivos temporales o secretos no rastreados: revisar antes de compartir.

Para trabajos focalizados, compartir solamente los archivos involucrados (`index.html`, `styles.css`, `script.js`, imágenes específicas) y captura del error.

### Prevención del crecimiento
- **Nunca borrar `.git` del proyecto de trabajo.** Excluirlo únicamente del ZIP para compartir.
- Mantener `.gitignore` para archivos transitorios, backups, caches, ZIP generados, editores y credenciales. `.gitignore` no excluye archivos previamente rastreados.
- No hacer commits de ZIP, videos grandes, versiones binarias temporales, ni archivos generados que no sean requeridos para publicar.
- Antes de agregar imágenes nuevas, revisar resolución, formato (WebP/AVIF cuando corresponda), peso y referencias de código.
- Revisar con `du -h --max-depth=1 . | sort -hr` y `git count-objects -vH`; evitar `git prune`, `git filter-repo` o reescrituras de historial sin necesidad y respaldo.
- `git gc` no debe ejecutarse después de cada commit; es una tarea de mantenimiento ocasional y Git suele administrarla automáticamente.

## 6. Próximos pasos
1. Conservar el CSS responsive validado y comprobar el menú en iPad horizontal, vertical y celulares reales cuando resulte conveniente.
2. Incorporar una política de `.gitignore` y empaquetado liviano (revisar su contenido antes de modificarlo).
3. Auditar imágenes duplicadas `img/` y `fondos/`; optimizarlas solo después de identificar cuáles se usan.
4. No intervenir los ~151 MB de objetos empaquetados de Git: reescribir historial para reducirlos tiene riesgo innecesario.
5. Para retomar: compartir esta bitácora y los archivos puntuales o ZIP sin `.git`.

---
**Precaución permanente:** priorizar cambios pequeños, con respaldo, revisión y un comando por vez. No eliminar archivos del sitio ni del historial sin confirmar uso y seguridad.
