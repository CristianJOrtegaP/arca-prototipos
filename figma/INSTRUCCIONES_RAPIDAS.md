# 🚀 Crear tu Archivo Figma con ARCA.OS Design System

> Guía rápida para generar todos los componentes automáticamente

---

## ✅ Paso 1: Abrir Figma Desktop

⚠️ **IMPORTANTE:** El plugin solo funciona en **Figma Desktop** (no en navegador)

1. Abre la aplicación **Figma** en tu computadora
2. Si no la tienes: [Descargar Figma Desktop](https://www.figma.com/downloads/)

---

## ✅ Paso 2: Importar el Plugin

1. En Figma Desktop, ve al menú superior:

   **Plugins** → **Development** → **Import plugin from manifest...**

2. Se abrirá un explorador de archivos

3. Navega a:
   ```
   /Users/cristianjortegap/Developer/UX Arca/prototipos/figma/figma-plugin/
   ```

4. Selecciona el archivo **`manifest.json`**

5. Click **"Open"**

✅ El plugin ahora está instalado

---

## ✅ Paso 3: Crear Nuevo Archivo

1. En Figma Desktop:

   **File** → **New Design File**

2. Nombra el archivo:
   ```
   ARCA.OS Design System
   ```

---

## ✅ Paso 4: Ejecutar el Plugin

1. Con el archivo abierto, ve al menú:

   **Plugins** → **Development** → **ARCA.OS Design System Generator**

2. El plugin se ejecutará automáticamente

3. Verás estos mensajes:
   - 🚀 "Generando Design System ARCA.OS..."
   - ⏳ Espera 5-10 segundos
   - ✅ "Design System generado exitosamente!"

---

## ✅ Paso 5: Ver el Resultado

Deberías ver una página llamada **"🎨 Components"** con:

### Logo
```
ARCA • OS
```

### Buttons (4 variantes)
- Primary (rojo sólido)
- Secondary (outline rojo)
- Success (verde)
- Danger (rojo intenso)

### Badges (5 variantes)
- Primary, Success, Warning, Danger, Info

### Input
- Input con placeholder

### Card
- Card con header y body

---

## ✅ Paso 6: Ver desde VS Code

Ahora puedes ver el archivo desde VS Code con Figma for VS Code:

1. En VS Code, presiona: **`Cmd + Shift + P`** (Mac) o **`Ctrl + Shift + P`** (Windows)

2. Escribe: **`Figma: Open Recent File`**

3. Selecciona: **"ARCA.OS Design System"**

4. Se abrirá en un panel de VS Code

---

## 🎨 ¿Qué hace el plugin automáticamente?

### Estilos de Color (80+)
- ✅ Color/Institutional/arca-red (#C32B40)
- ✅ Color/Institutional/arca-brown (#5D4037)
- ✅ Color/Culture/turquoise (#0AA4B4)
- ✅ Color/Culture/lime (#7FBC03)
- ✅ Color/Neutral/0 a Neutral/10
- ✅ Color/Semantic/primary, success, warning, error, info

### Estilos de Texto (20+)
- ✅ Typography/Heading/display (56px, Bold)
- ✅ Typography/Heading/5xl, 4xl, 3xl, 2xl, xl, l
- ✅ Typography/Body/base, s, xs

### Componentes
- ✅ Logo/ARCA.OS
- ✅ Button/Primary, Secondary, Success, Danger
- ✅ Badge/Primary, Success, Warning, Danger, Info
- ✅ Input/Default
- ✅ Card/Default

---

## 🔧 Editar Componentes

Todos los componentes son **editables**:

1. **Doble click** en cualquier componente para editarlo
2. Cambiar textos, colores, tamaños
3. Crear **variantes** adicionales (small, large, etc.)
4. Crear **instancias** para usarlos en tus diseños

---

## 🎨 Crear Más Componentes

Después de tener el base, puedes crear manualmente:

### Layouts
- Header (con Logo, búsqueda, notificaciones)
- Sidebar (con navegación)
- MainLayout (Header + Sidebar + Content)

### Forms
- InputGroup (Input + Label + Error)
- Textarea
- Select
- Checkbox
- Radio

### Advanced
- Table
- Modal
- Tabs
- Accordion

---

## 📚 Usar Design Tokens

Los **estilos de color y texto** están disponibles globalmente:

### Para aplicar un color:
1. Selecciona un elemento
2. En el panel derecho: **Fill** → Click en el círculo de color
3. Tab **"Local Styles"**
4. Selecciona: `Color/Institutional/arca-red` (por ejemplo)

### Para aplicar tipografía:
1. Selecciona texto
2. En el panel derecho: **Text** → Click en "..."
3. Selecciona: `Typography/Heading/2xl` (por ejemplo)

---

## 🐛 Problemas Comunes

### "Plugin not found" o no aparece en el menú

**Solución:**
- Asegúrate de estar usando **Figma Desktop** (no navegador)
- Re-importa el plugin: Plugins → Development → Import plugin

### "Cannot find font 'Inter'"

**Solución:**
- Descarga e instala Inter: [Google Fonts - Inter](https://fonts.google.com/specimen/Inter)
- Reinicia Figma Desktop

### El plugin no hace nada

**Solución:**
- Verifica que el archivo `code.js` existe en la carpeta `figma-plugin/`
- Re-importa el manifest.json

---

## 📞 Siguiente Paso

Después de generar el Design System en Figma:

1. **Crear screens de ejemplo:**
   - Dashboard con métricas
   - Login
   - User Management

2. **Exportar componentes:**
   - Figma → Code (CSS, React, etc.)
   - Usar con los prototipos HTML

3. **Sincronizar con OutSystems:**
   - Los componentes Figma corresponden a las guías OutSystems
   - ButtonBlock.md ↔ Button/Primary en Figma

---

## 🎯 Resumen: 4 Pasos para tu Design System en Figma

```
1. Abrir Figma Desktop
   ↓
2. Plugins → Development → Import plugin → Seleccionar manifest.json
   ↓
3. File → New Design File → Nombrar "ARCA.OS Design System"
   ↓
4. Plugins → Development → ARCA.OS Design System Generator
   ↓
✅ ¡Listo! Componentes generados automáticamente
```

---

**© 2026 Digital Process Automation (DPA) - Arca Continental**
