# ARCA.OS Design System Generator - Figma Plugin

> Plugin de Figma que genera automáticamente todos los componentes del Design System ARCA.OS

---

## 🎯 ¿Qué hace este plugin?

Este plugin crea automáticamente en Figma:

✅ **Estilos de Color** (80+ colores)
- Institucionales (arca-red, arca-brown, etc.)
- Cultura Arca (turquoise, lime, orange, purple)
- Neutrales (0-10)
- Semánticos (primary, success, warning, error, info)

✅ **Estilos de Texto** (20+ estilos)
- Headings (display, 5xl, 4xl, 3xl, 2xl, xl, l)
- Body (base, s, xs)

✅ **Componentes**
- Logo ARCA.OS (ARCA • OS)
- Buttons (Primary, Secondary, Success, Danger)
- Badges (Primary, Success, Warning, Danger, Info)
- Input (Default)
- Card (con Header y Body)

---

## 📦 Instalación del Plugin

### Paso 1: Compilar TypeScript a JavaScript

```bash
cd figma-plugin

# Instalar TypeScript si no lo tienes
npm install -g typescript

# Compilar
tsc code.ts --target es6 --lib es6
```

Esto generará `code.js` que Figma necesita.

---

### Paso 2: Importar Plugin en Figma Desktop

1. Abre **Figma Desktop** (no funciona en navegador)
2. Click en **Plugins** (menú superior) → **Development** → **Import plugin from manifest**
3. Navega a la carpeta `figma-plugin/`
4. Selecciona `manifest.json`
5. Click **Open**

El plugin ahora está instalado en modo desarrollo.

---

## 🚀 Cómo Usar el Plugin

### Paso 1: Crear un Nuevo Archivo en Figma

1. Abre Figma Desktop
2. File → New Design File
3. Nombra el archivo: **"ARCA.OS Design System"**

---

### Paso 2: Ejecutar el Plugin

1. Con el archivo abierto, ve a **Plugins** → **Development** → **ARCA.OS Design System Generator**
2. El plugin se ejecutará automáticamente
3. Verás un mensaje: "🚀 Generando Design System ARCA.OS..."
4. Espera 5-10 segundos
5. Mensaje final: "✅ Design System generado exitosamente!"

---

## 📋 Resultado

Después de ejecutar el plugin verás:

### Página: 🎨 Components

```
ARCA.OS Design System
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Logo
┌─────────────┐
│ ARCA • OS   │
└─────────────┘

Buttons
┌─────────┐ ┌───────────┐ ┌─────────┐ ┌─────────┐
│ Primary │ │ Secondary │ │ Success │ │ Danger  │
└─────────┘ └───────────┘ └─────────┘ └─────────┘

Badges
[PRIMARY] [SUCCESS] [WARNING] [DANGER] [INFO]

Inputs
┌────────────────────────┐
│ Placeholder text       │
└────────────────────────┘

Cards
┌──────────────────┐
│ Card Title       │
├──────────────────┤
│ Card content...  │
│                  │
└──────────────────┘
```

---

## 🎨 Ver el Archivo en VS Code

### Opción 1: Desde Figma for VS Code Extension

1. En VS Code, presiona `Cmd + Shift + P`
2. Escribe: `Figma: Open Recent File`
3. Selecciona "ARCA.OS Design System"
4. Se abrirá en VS Code

### Opción 2: Desde URL

1. En Figma Desktop, click en **Share** (arriba derecha)
2. Click en **Copy Link**
3. En VS Code: `Cmd + Shift + P` → `Figma: Open File from URL`
4. Pega la URL

---

## 🛠️ Personalización del Plugin

### Agregar Más Componentes

Edita `code.ts` y agrega nuevas funciones:

```typescript
function createNewComponent(): ComponentNode {
  const component = figma.createComponent();
  component.name = "MyComponent/Variant";
  // ... configuración ...
  return component;
}

// En generateDesignSystem():
const myComp = createNewComponent();
someSection.appendChild(myComp);
```

### Cambiar Colores

Edita el objeto `tokens` al inicio de `code.ts`:

```typescript
const tokens = {
  color: {
    institutional: {
      "arca-red": "#TU_COLOR_AQUI"
    }
  }
};
```

---

## 🐛 Troubleshooting

### Error: "Cannot find font 'Inter'"

**Solución:**
1. En Figma Desktop, ve a **Text** → **Font**
2. Busca "Inter" y asegúrate de que esté instalado
3. Si no está, descárgalo de [Google Fonts](https://fonts.google.com/specimen/Inter)

### Error: "Plugin failed to run"

**Solución:**
1. Verifica que compilaste `code.ts` a `code.js`
2. Revisa que `manifest.json` esté en la misma carpeta que `code.js`
3. Reimporta el plugin (Plugins → Development → Import plugin)

### Plugin no aparece en el menú

**Solución:**
- Los plugins en desarrollo solo aparecen en **Figma Desktop**, NO en el navegador
- Asegúrate de estar usando la app de escritorio

---

## 📚 Próximos Pasos

Después de generar el Design System:

1. **Crear variantes de componentes**
   - Buttons: Normal, Small, Large
   - Inputs: Default, Error, Focused
   - Cards: Con footer, sin header, etc.

2. **Agregar más componentes**
   - Table
   - Modal
   - Navigation (Header, Sidebar)
   - Forms

3. **Crear screens de ejemplo**
   - Dashboard
   - Login
   - User Management

---

## 💡 Tips

- **Auto Layout:** Todos los componentes usan Auto Layout para facilitar edición
- **Components:** Todos son componentes (no frames), puedes crear instancias
- **Styles:** Los estilos de color y texto están disponibles globalmente
- **Naming:** Los nombres siguen el patrón Category/Name para organización

---

## 🔗 Recursos

- [Figma Plugin API](https://www.figma.com/plugin-docs/api/api-overview/)
- [Design Tokens W3C](https://design-tokens.github.io/community-group/format/)
- [ARCA.OS Theme CSS](../arca-os-theme.css)
- [Design Tokens JSON](../arca-design-tokens.json)

---

**© 2026 Digital Process Automation (DPA) - Arca Continental**
