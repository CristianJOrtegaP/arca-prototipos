# ARCA.OS - Integración con Figma

> Cómo usar los Design Tokens de ARCA.OS en Figma

---

## 📦 Contenido

| Archivo | Descripción |
|---------|-------------|
| **[arca-design-tokens.json](arca-design-tokens.json)** | Design Tokens completos en formato JSON |
| **[GUIA_FIGMA.md](GUIA_FIGMA.md)** | Guía detallada paso a paso |

---

## 🚀 Quick Start

### Opción 1: Figma Tokens Plugin (Recomendado)

1. **Instalar Plugin**
   - En Figma: Plugins → Browse plugins in Community
   - Busca "Figma Tokens" (by Jan Six)
   - Click "Install"

2. **Importar Tokens**
   - Abre tu archivo de Figma
   - Plugins → Figma Tokens
   - Click en "Settings" (⚙️)
   - "Load from file"
   - Selecciona `arca-design-tokens.json`

3. **Aplicar Tokens**
   - Los tokens estarán disponibles automáticamente
   - Color: `color.institutional.arca-red`
   - Typography: `typography.fontSize.base`
   - Spacing: `spacing.l`

---

### Opción 2: Tokens Studio (Avanzado)

1. **Instalar Plugin**
   - Figma → Plugins → "Tokens Studio for Figma"
   - Click "Install"

2. **Importar**
   - Plugins → Tokens Studio
   - Settings → Load tokens
   - Arrastra `arca-design-tokens.json`

3. **Sincronizar con GitHub** (Opcional)
   - Configura sync con este repositorio
   - Los cambios se sincronizan automáticamente

---

### Opción 3: Manual (Sin Plugin)

Si no quieres usar plugins, puedes crear los estilos manualmente:

**Ver:** [GUIA_FIGMA.md](GUIA_FIGMA.md) → Sección "Creación Manual de Estilos"

---

## 🎨 Design Tokens Incluidos

### Colores (80+ tokens)

**Institucionales:**
- `arca-red` (#C32B40) - Color principal
- `arca-red-dark` (#9A2233) - Hover
- `arca-red-light` (#FDE7EA) - Fondos
- `arca-brown`, `arca-gray-dark`, `arca-gray-light`

**Cultura Arca:**
- `turquoise` (#0AA4B4) - Info
- `lime` (#7FBC03) - Success
- `orange` (#FF9016) - Warning
- `purple` (#843276)
- `red-intense` (#FF1826) - Error

**Neutrales (11 niveles):**
- `neutral-0` a `neutral-10`
- Del blanco puro (#FFFFFF) al negro (#0F172A)

**Semánticos:**
- `primary`, `success`, `warning`, `error`, `info`
- Versiones `light` para fondos

---

### Tipografía (40+ tokens)

**Font Family:**
- `primary`: Segoe UI, Roboto, San Francisco, Arial, sans-serif

**Font Sizes:**
- `2xs` (10px) a `display` (56px)
- Sistema escalable basado en 16px base

**Font Weights:**
- `light` (300) a `extrabold` (800)

**Line Heights:**
- `xs` (1.1) a `l` (1.7)

**Letter Spacing:**
- `tight` (-0.5px) a `wider` (1px)

---

### Espaciado (8+ tokens)

Sistema de escala 8px:
- `xs` (4px)
- `s` (8px)
- `base` (16px)
- `l` (24px)
- `xl` (32px)
- `2xl` (48px)
- `3xl` (64px)

---

### Border Radius (11+ tokens)

- `none` (0px) a `pill` (9999px)
- `rounded` (12px) - Para botones y cards
- `circle` (50%) - Para avatares

---

### Shadows (6+ tokens)

- `s`, `m`, `l`, `xl` - Sombras generales
- `button-primary`, `button-primary-hover` - Sombras específicas

---

### Componentes (Spacing específico)

**Button:**
- Padding Y/X para normal, small, large

**Input:**
- Padding Y/X

**Badge:**
- Padding Y/X

---

### Animaciones

**Durations:**
- `fast` (150ms)
- `base` (300ms)
- `slow` (500ms)

**Easings:**
- `linear`, `ease`, `ease-in-out`, `spring`

---

## 📚 Guías Completas

### Para Usuarios Nuevos de Figma

👉 **[GUIA_FIGMA.md](GUIA_FIGMA.md)** - Guía completa paso a paso

**Incluye:**
- Instalación de Figma Desktop
- Setup del proyecto ARCA.OS
- Importación de tokens
- Creación de componentes
- Auto Layout
- Component variants
- Biblioteca de componentes

---

### Para Diseñadores Avanzados

**Contenido avanzado:**
- Sincronización con GitHub
- Versionamiento de tokens
- Temas múltiples (light/dark)
- Exportación a código

---

## 🔄 Mantener Tokens Actualizados

Si el theme CSS (`arca-continental-theme.css`) cambia:

1. Actualiza `arca-design-tokens.json` manualmente
2. O ejecuta script de conversión (por crear)
3. Re-importa en Figma Tokens
4. Los componentes se actualizan automáticamente

---

## 🆘 Troubleshooting

### Problema: Plugin no Importa el JSON

**Solución:**
1. Verifica que el JSON es válido (usa JSONLint.com)
2. Asegúrate de usar la última versión del plugin
3. Intenta con otro plugin (Tokens Studio)

---

### Problema: Colores No Se Aplican

**Solución:**
1. Re-importa el JSON
2. Click en "Apply to page" en el plugin
3. Verifica que los estilos se crearon: Local styles → Colors

---

### Problema: Valores No Coinciden con CSS

**Solución:**
- El JSON está sincronizado con `arca-continental-theme.css`
- Si hay diferencias, reporta el issue

---

## 🎯 Próximos Pasos

Después de importar los tokens:

1. **Crear componentes básicos:**
   - Buttons (Primary, Secondary, etc.)
   - Badges (Success, Warning, etc.)
   - Inputs
   - Cards

2. **Crear layouts:**
   - Header
   - Sidebar
   - MainLayout

3. **Crear screens:**
   - Login
   - Dashboard
   - Usuarios

4. **Documentar en Figma:**
   - Crear página "Design System"
   - Documentar uso de cada componente
   - Agregar ejemplos

---

## 📖 Recursos

**Figma:**
- [Figma Design System Guide](https://www.figma.com/best-practices/guide-to-design-systems/)
- [Using Components](https://help.figma.com/hc/en-us/articles/360038662654)
- [Auto Layout](https://help.figma.com/hc/en-us/articles/360040451373)

**Plugins:**
- [Figma Tokens Documentation](https://docs.tokens.studio/)
- [Design Tokens Studio](https://docs.tokens.studio/)

**Design Tokens:**
- [Design Tokens W3C Spec](https://design-tokens.github.io/community-group/format/)

---

## 💬 Soporte

**Tech Lead:** Cristian Ortega - Tech Lead OutSystems | DPA
**Equipo:** Digital Process Automation (DPA)

---

**© 2026 Digital Process Automation (DPA) - Arca Continental**
