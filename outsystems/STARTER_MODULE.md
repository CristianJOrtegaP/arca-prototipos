# ARCA.OS - Guía Starter Module

> Cómo crear un módulo OutSystems starter con componentes reusables ARCA.OS

---

## 📋 Tabla de Contenidos

1. [Introducción](#introducción)
2. [Arquitectura del Módulo](#arquitectura-del-módulo)
3. [Paso 1: Crear el Módulo Base](#paso-1-crear-el-módulo-base)
4. [Paso 2: Configurar Theme](#paso-2-configurar-theme)
5. [Paso 3: Crear Layout Principal](#paso-3-crear-layout-principal)
6. [Paso 4: Crear Bloques Reusables](#paso-4-crear-bloques-reusables)
7. [Paso 5: Crear Screens de Ejemplo](#paso-5-crear-screens-de-ejemplo)
8. [Paso 6: Publicar y Testear](#paso-6-publicar-y-testear)
9. [Próximos Pasos](#próximos-pasos)

---

## Introducción

Esta guía te ayudará a crear un **módulo starter** llamado **`ArcaOS_ComponentsLib`** que contendrá:

- ✅ Theme CSS ARCA.OS
- ✅ Layout principal con Header y Sidebar
- ✅ Bloques reusables (Buttons, Cards, Badges, etc.)
- ✅ Screens de ejemplo

Este módulo podrá ser **referenciado por otros módulos** de tu aplicación.

---

## Arquitectura del Módulo

```
ArcaOS_ComponentsLib (Reactive Web App)
├── Themes
│   └── ArcaOSTheme
│       └── arca-os-theme.css
├── Layouts
│   └── MainLayout (Header + Content + Sidebar)
├── Blocks
│   ├── UI/
│   │   ├── LogoBlock
│   │   ├── HeaderBlock
│   │   ├── SidebarBlock
│   │   ├── MetricCardBlock
│   │   ├── BadgeBlock
│   │   └── ButtonGroupBlock
│   └── Utility/
│       ├── LoadingSpinnerBlock
│       └── EmptyStateBlock
└── Screens
    ├── Dashboard
    ├── Components_Showcase (para testing)
    └── StyleGuide
```

---

## Paso 1: Crear el Módulo Base

### 1.1 Crear Nueva Aplicación

1. Abre **Service Studio**
2. Click en **New Application**
3. Selecciona **Reactive Web App**
4. **Name**: `ArcaOS_ComponentsLib`
5. **Description**: `ARCA.OS Design System - Biblioteca de Componentes Reusables`
6. **Upload Icon**: (opcional) Usa el logo de Arca
7. Click en **Create App**

### 1.2 Configurar Módulo Principal

1. Service Studio creará un módulo por defecto
2. Renombra el módulo a: `ArcaOS_ComponentsLib`
3. En **Module Properties**:
   - **Name**: `ArcaOS_ComponentsLib`
   - **Description**: `Biblioteca de componentes y theme ARCA.OS`
   - **Is User Provider**: `No`

### 1.3 Agregar Dependencias

1. Abre **Manage Dependencies** (Ctrl+Q)
2. Busca y agrega:
   - **OutSystemsUI** o **OutSystemsUIWeb**
     - Select all Layouts, Patterns, Themes
   - **System** (si no está)
     - User entities, Session variables

---

## Paso 2: Configurar Theme

### 2.1 Subir ARCA.OS Theme CSS

Sigue la guía completa en **[OUTSYSTEMS_SETUP.md](OUTSYSTEMS_SETUP.md)** para instalar el theme.

**Resumen rápido:**

1. En Service Studio → **Interface Tab** → **Themes**
2. Right-click → **Add Theme**
3. **Name**: `ArcaOSTheme`
4. Upload `arca-os-theme.css`
5. Set como **Default Theme** en Module Properties

### 2.2 Verificar Instalación

Crea una Screen de prueba:
1. **New Screen** → **Empty**
2. Agrega un **Button** con `Style Classes: btn btn-primary`
3. Publica (F5)
4. Abre la screen y verifica que el botón sea rojo Arca

---

## Paso 3: Crear Layout Principal

### 3.1 Crear MainLayout

1. En **Interface Tab** → **UI Flows** → **MainFlow**
2. Right-click → **Add Layout Web Block**
3. **Name**: `MainLayout`

### 3.2 Estructura del MainLayout

**Widget Tree:**

```
MainLayout
├── Container (class: "app-container")
│   ├── SidebarBlock (crear después)
│   └── Container (class: "main-content-wrapper")
│       ├── HeaderBlock (crear después)
│       └── Placeholder (MainContent)
```

**CSS para MainLayout** (agregar en Extended Properties → style):

```css
.app-container {
    display: flex;
    min-height: 100vh;
    background: var(--color-neutral-1);
}

.main-content-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
}
```

### 3.3 Configurar Placeholder

El **Placeholder** es donde se renderizará el contenido de cada Screen.

1. Drag & Drop **Placeholder** widget
2. **Name**: `MainContent`
3. **Style Classes**: `padding-xl`

---

## Paso 4: Crear Bloques Reusables

Vamos a crear los bloques más importantes del Design System.

### 4.1 LogoBlock

**Propósito:** Logo ARCA.OS reutilizable.

1. **New Block** → **Name**: `LogoBlock`
2. **Estructura:**

```
Container (logo)
├── Text
│   ├── Style Classes: "logo-text"
│   └── Text: "ARCA"
├── Container
│   └── Style Classes: "logo-dot"
└── Text
    ├── Style Classes: "logo-text"
    └── Text: "OS"
```

3. **CSS** (agregar a `arca-os-theme.css` si no existe):

```css
.logo {
    display: flex;
    align-items: center;
    gap: 6px;
}

.logo-text {
    font-size: 24px;
    font-weight: 800;
    color: var(--color-neutral-9);
    letter-spacing: 1px;
}

.logo-dot {
    width: 8px;
    height: 8px;
    background: var(--arca-red);
    border-radius: 50%;
}
```

---

### 4.2 HeaderBlock

**Propósito:** Header con logo, título, notificaciones y usuario.

**Opción Recomendada: Usar Template HTML**

1. **New Block** → **Name**: `HeaderBlock`
2. Drag & Drop **Expression** widget
3. **Escape Content**: `No`
4. Copia el contenido de `templates/header-component.html`
5. Pega en el Expression **Value**

Para personalización con datos dinámicos, ver **[templates/README.md](templates/README.md)**

---

### 4.3 SidebarBlock

**Propósito:** Sidebar de navegación.

1. **New Block** → **Name**: `SidebarBlock`
2. Drag & Drop **Expression** widget
3. **Escape Content**: `No`
4. Copia el contenido de `templates/sidebar-navigation.html`
5. Pega en el Expression **Value**

---

### 4.4 MetricCardBlock

**Propósito:** Card de métrica para dashboards.

1. **New Block** → **Name**: `MetricCardBlock`
2. **Input Parameters**:
   - `IconSVG` (Text)
   - `MetricLabel` (Text)
   - `MetricValue` (Text)
   - `TrendText` (Text)
   - `TrendIsPositive` (Boolean)
   - `IconBackgroundColor` (Text) - default: `"var(--arca-red-light)"`
   - `IconColor` (Text) - default: `"var(--arca-red)"`

3. **Estructura:**

```
Container (metric-card)
├── Expression (metric-icon)
│   ├── Escape Content: No
│   ├── Value: "<div class='metric-icon' style='background: " + IconBackgroundColor + "; color: " + IconColor + ";'>" + IconSVG + "</div>"
└── Container (metric-content)
    ├── Text (metric-label) → {MetricLabel}
    ├── Text (metric-value) → {MetricValue}
    └── Text (metric-trend)
        ├── Style Classes: "metric-trend " + If(TrendIsPositive, "positive", "negative")
        └── Text: {TrendText}
```

---

### 4.5 BadgeBlock

**Propósito:** Badge de estado reutilizable.

1. **New Block** → **Name**: `BadgeBlock`
2. **Input Parameters**:
   - `BadgeText` (Text)
   - `BadgeType` (Text) - values: "primary", "success", "warning", "danger", "info", "light"

3. **Estructura:**

```
Text
├── Style Classes: "badge badge-" + BadgeType
└── Text: {BadgeText}
```

**Uso:**

```
BadgeBlock
├─ BadgeText: "ACTIVO"
└─ BadgeType: "success"
```

---

## Paso 5: Crear Screens de Ejemplo

### 5.1 Dashboard Screen

1. **New Screen** → **Empty** → **Name**: `Dashboard`
2. **Layout**: Selecciona `MainLayout`
3. Agrega contenido de ejemplo con MetricCards, tablas, etc.

### 5.2 ComponentsShowcase Screen

**Propósito:** Screen para testear todos los componentes.

1. **New Screen** → **Empty** → **Name**: `ComponentsShowcase`
2. **Layout**: `MainLayout`
3. Agrega secciones mostrando Buttons, Badges, Cards, Forms

---

## Paso 6: Publicar y Testear

### 6.1 Publicar Módulo

1. Click en **1-Click Publish** (F5)
2. Espera a que termine la publicación
3. Si hay errores, corrígelos y vuelve a publicar

### 6.2 Testear Screens

1. Abre la aplicación en el navegador
2. Verifica:
   - ✅ Colores correctos
   - ✅ Botones funcionan
   - ✅ Badges se ven bien
   - ✅ Header y Sidebar están presentes
   - ✅ Responsive funciona (resize navegador)

---

## Paso 7: Hacer Público el Módulo

### 7.1 Marcar Bloques como Public

1. Selecciona cada Block
2. En **Properties** → **Public**: `Yes`
3. Repite para todos los Bloques que quieras compartir

### 7.2 Marcar Theme como Public

1. Selecciona **ArcaOSTheme**
2. En **Properties** → **Public**: `Yes`

### 7.3 Publicar Cambios

1. **1-Click Publish** (F5)

### 7.4 Usar en Otros Módulos

**En cualquier otro módulo:**

1. **Manage Dependencies** (Ctrl+Q)
2. Busca `ArcaOS_ComponentsLib`
3. Agrega Theme y Blocks necesarios
4. Usa los componentes en tus Screens

---

## Próximos Pasos

### Mejoras Recomendadas

1. **Agregar más componentes:**
   - Dropdown menus
   - Modals/Popups
   - Tooltips
   - Breadcrumbs
   - Pagination

2. **Crear Data Actions:**
   - `GetOrderBadgeClass(status)` → retorna clase CSS según estado
   - `FormatCurrency(value)` → formatea valores monetarios

3. **Optimizar para Mobile:**
   - Sidebar colapsable con toggle
   - Header responsivo
   - Touch-friendly buttons

---

## 📚 Recursos Relacionados

- **[OUTSYSTEMS_SETUP.md](OUTSYSTEMS_SETUP.md)** - Instalación del theme
- **[COMPONENTS_GUIDE.md](COMPONENTS_GUIDE.md)** - Mapeo de componentes
- **[templates/](templates/)** - Templates HTML listos para usar

---

**¡Felicidades!** Has creado tu **ARCA.OS Components Library** 🎉

---

**© 2026 Digital Process Automation (DPA) - Arca Continental**
