# ARCA.OS - Prototipos Interactivos

> Design System y layout global para aplicaciones Business-to-Employee (B2E) Low-Code de Arca Continental

**Versión:** 1.0
**Fecha:** Febrero 2026
**Autor:** Cristian Ortega, Tech Lead OutSystems
**Organización:** DPA - Digital Process Automation | Arca Continental

---

## 📋 Descripción del Proyecto

ARCA.OS es un **Design System y layout global** para aplicaciones **Business-to-Employee (B2E)** desarrolladas en plataformas **Low-Code** (OutSystems). Este ecosistema de prototipos interactivos está diseñado para establecer patrones de diseño reutilizables en aplicaciones internas de Arca Continental. Los prototipos están construidos en HTML/CSS puro, siguiendo el Design System oficial de Arca Continental y las mejores prácticas de OutSystems UI Framework.

El caso de uso principal es el sistema de **Órdenes de Recuperación**, pero los componentes y patrones son aplicables a cualquier aplicación B2E de la organización.

### Objetivos

- ✅ Establecer un **Design System reutilizable** para todas las aplicaciones B2E de Arca Continental
- ✅ Validar flujos de usuario antes de la implementación en plataformas Low-Code
- ✅ Crear patrones de diseño consistentes basados en el Playbook UX/UI de Arca
- ✅ Acelerar el desarrollo de aplicaciones mediante componentes pre-diseñados
- ✅ Facilitar la comunicación entre equipos de diseño, desarrollo y negocio
- ✅ Reducir iteraciones y costos de desarrollo mediante prototipado rápido

### Alcance de Aplicaciones

Este Design System está diseñado para aplicaciones **Business-to-Employee (B2E)** tales como:
- 📦 Sistemas de gestión operativa (Órdenes de Recuperación, Inventarios, Logística)
- 👥 Portales de recursos humanos y administración de personal
- 📊 Dashboards y reportes gerenciales
- ⚙️ Herramientas de configuración y administración
- 🔧 Aplicaciones de soporte y mantenimiento

---

## 🎨 Enfoque de Diseño

### Design System Approach

El proyecto utiliza un enfoque de **Design System** basado en:

1. **Design Tokens**: Variables CSS centralizadas para colores, tipografía, espaciado y sombras
2. **Atomic Design**: Componentes reutilizables que escalan desde átomos hasta organismos
3. **Mobile-First**: Diseño responsive que prioriza la experiencia móvil
4. **Accesibilidad**: Contraste WCAG AA, navegación por teclado, semántica HTML

### Identidad Visual Arca Continental

- **Color Principal**: Rojo Carmesí (#C32B40) - identidad institucional de Arca
- **Tipografía**: Segoe UI / San Francisco - moderna y legible
- **Paleta Extendida**: Colores de cultura Arca (turquesa, lime, orange, purple)
- **Border Radius**: Bordes suavemente redondeados (8-12px) para modernidad
- **Sombras**: Sombras suaves y sutiles para profundidad sin estridencia

---

## 🏗️ Estructura del Proyecto

```
prototipos/
│
├── index.html                      # Índice de prototipos
├── documentacion.html              # Documentación del proyecto
├── arca-continental-theme.css      # Design System (Design Tokens + Componentes)
├── OutSystemsUI.css                # Framework base de OutSystems UI
│
├── assets/
│   ├── Arca_continental_logo.png
│   └── Arca_continental_logo_simple.png
│
├── Pencil/                         # Archivos fuente de Pencil Project
│
├── outsystems/                     # 🆕 Kit de Integración OutSystems
│   ├── arca-os-theme.css           # Theme CSS optimizado
│   ├── OUTSYSTEMS_SETUP.md         # Guía de instalación
│   ├── COMPONENTS_GUIDE.md         # Mapeo HTML → OutSystems
│   ├── STARTER_MODULE.md           # Guía módulo starter
│   └── templates/                  # Templates HTML
│       ├── sidebar-navigation.html
│       ├── header-component.html
│       ├── metric-card.html
│       └── README.md
│
└── Prototipos Implementados:
    ├── login.html                  # Pantalla de autenticación
    ├── layout.html                 # Dashboard principal
    ├── usuarios.html               # Gestión de usuarios
    ├── roles.html                  # Configuración de permisos
    ├── recordatorios.html          # Configuración de notificaciones
    ├── catalogos.html              # Administración de catálogos
    └── datos.html                  # Gestión de datos maestros
```

---

## 🛠️ Stack Tecnológico

### Core Technologies

- **HTML5**: Estructura semántica y accesible
- **CSS3**: Estilos modernos con Custom Properties (variables CSS)
- **Vanilla JavaScript**: Interactividad sin dependencias externas

### Design System Foundation

- **OutSystems UI Framework**: Base de componentes y utilidades CSS
- **Arca Continental Theme**: Capa de personalización con Design Tokens
- **CSS Custom Properties**: Variables reactivas para theming

### Filosofía: Zero Dependencies

Los prototipos están construidos **sin frameworks JavaScript** (React, Vue, Angular) para:
- ✅ Máxima compatibilidad con OutSystems
- ✅ Carga instantánea y rendimiento óptimo
- ✅ Simplicidad en la transferencia a OutSystems Reactive
- ✅ Facilidad de mantenimiento y edición

---

## 📄 Páginas Implementadas

### 1. Login (`login.html`)
**Estado:** ✅ Completo
**Responsive:** Sí

Pantalla de autenticación con diseño dual-panel:
- Panel izquierdo con branding y animaciones de fondo (pulse waves)
- Panel derecho con formulario de acceso
- Validación de email y contraseña
- Estados de error y loading
- Animación de éxito post-login

**Características:**
- Validación en tiempo real
- Feedback visual de errores
- Animaciones fluidas
- Responsive con ajuste automático en mobile

---

### 2. Dashboard (`layout.html`)
**Estado:** ✅ Completo
**Responsive:** Sí

Panel principal con sidebar de navegación y tabla de órdenes:
- Sidebar colapsable con menú de navegación
- Métricas principales (cards de estadísticas)
- Tabla de órdenes con filtros y acciones
- Estados de prioridad visual (badges)

**Componentes:**
- Sidebar Navigation
- Metric Cards
- Data Table
- Filter Bar
- Status Badges

---

### 3. Usuarios (`usuarios.html`)
**Estado:** ✅ Completo
**Responsive:** Sí

Administración de usuarios del sistema:
- Sincronización con Active Directory
- Búsqueda y filtros por rol
- Tabla con información de usuarios
- Acciones CRUD (Crear, Leer, Actualizar, Eliminar)

**Funcionalidades:**
- Búsqueda en tiempo real
- Filtros multi-criterio
- Paginación de resultados
- Modales de edición

---

### 4. Roles (`roles.html`)
**Estado:** ✅ Completo
**Responsive:** Sí

Configuración de permisos y asignaciones:
- Asignación de roles por usuario
- Filtros por centro, ruta, territorio
- Tabla de configuración de permisos
- Gestión de accesos granular

**Características:**
- Filtros dinámicos
- Vista de permisos jerárquica
- Asignación masiva
- Historial de cambios

---

### 5. Recordatorios (`recordatorios.html`)
**Estado:** ✅ Completo
**Responsive:** Sí

Configuración de notificaciones automáticas:
- Recordatorios por días de espera
- Configuración por rol
- Plantillas de mensajes
- Activación/desactivación de alertas

**Componentes:**
- Toggle Switches
- Input Numérico (días)
- Cards de Configuración
- Preview de Notificaciones

---

### 6. Catálogos (`catalogos.html`)
**Estado:** ✅ Completo
**Responsive:** Sí

Gestión de catálogos del sistema:
- Hallazgos
- Estatus de órdenes
- Centros de distribución
- Rutas y territorios
- Regiones

**Funcionalidades:**
- CRUD completo por catálogo
- Validación de duplicados
- Importación/exportación
- Ordenamiento y búsqueda

---

### 7. Datos Maestros (`datos.html`)
**Estado:** ✅ Completo
**Responsive:** Sí

Gestión de información maestra del sistema:
- Configuración de entidades
- Relaciones entre datos
- Validaciones de integridad
- Auditoría de cambios

---

## 🎯 Design System - arca-continental-theme.css

### Arquitectura del Theme

El archivo `arca-continental-theme.css` está estructurado en capas:

#### 1. Design Tokens (Variables CSS)

```css
:root {
  /* Colores institucionales */
  --arca-red: #C32B40;
  --arca-red-dark: #9A2233;
  --arca-red-light: #FDE7EA;

  /* Paleta neutral */
  --color-neutral-1: #F8FAFC;
  --color-neutral-9: #1E293B;

  /* Tipografía */
  --font-family-base: "Segoe UI", Roboto, "San Francisco", Arial, sans-serif;

  /* Espaciado */
  --space-xs: 4px;
  --space-s: 8px;
  --space-base: 16px;
  --space-l: 24px;
  --space-xl: 32px;

  /* Border Radius */
  --border-radius-base: 8px;
  --border-radius-rounded: 12px;

  /* Sombras */
  --shadow-s: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-m: 0 4px 6px rgba(0, 0, 0, 0.07);
  --shadow-l: 0 8px 16px rgba(0, 0, 0, 0.08);
}
```

#### 2. Componentes Base

- **Botones**: Primario, secundario, terciario, estados (hover, active, disabled)
- **Forms**: Inputs, selects, textareas, validación
- **Cards**: Contenedores con sombras y bordes
- **Tables**: Tablas de datos con sorting y hover
- **Badges**: Etiquetas de estado con colores semánticos
- **Modales**: Overlays con animaciones
- **Sidebar**: Navegación colapsable

#### 3. Utilidades CSS

Clases de utilidad siguiendo la nomenclatura de OutSystems:

- **Spacing**: `margin-{direction}-{size}`, `padding-{direction}-{size}`
- **Typography**: `font-size-{size}`, `font-{weight}`, `text-{color}`
- **Layout**: `display-flex`, `align-items-center`, `justify-content-between`
- **Colors**: `background-{color}`, `text-{color}`, `border-{color}`

---

## 🚀 Instalación y Uso

### Requisitos

- Navegador moderno (Chrome, Firefox, Safari, Edge)
- No requiere servidor (funciona con file://)

### Pasos

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/CristianJOrtegaP/arca-prototipos.git
   cd arca-prototipos
   ```

2. **Abrir el índice:**
   ```bash
   open index.html
   # o simplemente hacer doble clic en index.html
   ```

3. **Navegar los prototipos:**
   - El `index.html` muestra todos los prototipos disponibles
   - Hacer clic en cualquier card para abrir el prototipo

### Edición

Para personalizar los prototipos:

1. **Modificar Design Tokens:**
   - Editar `arca-continental-theme.css`
   - Ajustar variables en el bloque `:root { }`

2. **Editar componentes:**
   - Abrir el archivo HTML del prototipo
   - Modificar estructura o estilos inline

3. **Ver cambios:**
   - Guardar el archivo
   - Refrescar el navegador (F5 o Cmd+R)

---

## 📐 Patrones de Diseño Implementados

### 1. Layout Patterns

- **Sidebar + Main Content**: Navegación lateral colapsable
- **Dual Panel**: Login screen con branding y formulario
- **Card Grid**: Índice de prototipos
- **Data Table**: Gestión de listas con acciones

### 2. Component Patterns

- **Form Validation**: Feedback visual en tiempo real
- **Loading States**: Spinners y skeleton screens
- **Empty States**: Mensajes cuando no hay datos
- **Error States**: Mensajes de error contextuales
- **Success States**: Confirmaciones visuales

### 3. Interaction Patterns

- **Hover Effects**: Feedback visual en botones y cards
- **Focus States**: Indicadores de foco para accesibilidad
- **Transitions**: Animaciones suaves (0.3s ease)
- **Micro-interactions**: Pulse waves, button clicks

---

## 🎨 Guía de Estilo Visual

### Colores

| Uso | Color | Hex | Cuándo usar |
|-----|-------|-----|-------------|
| Primario | Rojo Arca | `#C32B40` | Acciones principales, CTAs |
| Secundario | Turquesa | `#0AA4B4` | Información, enlaces |
| Éxito | Lime | `#7FBC03` | Confirmaciones positivas |
| Advertencia | Orange | `#FF9016` | Alertas no críticas |
| Error | Rojo Intenso | `#FF1826` | Errores críticos |
| Neutral | Gris | `#64748B` | Texto secundario, borders |

### Tipografía

- **Headings**: 24px-32px, font-weight: 700-800
- **Body**: 14px-16px, font-weight: 400-500
- **Small**: 12px, font-weight: 400
- **Labels**: 12px, font-weight: 600

### Espaciado

Sistema de escala 8px:
- **xs**: 4px
- **s**: 8px
- **base**: 16px
- **l**: 24px
- **xl**: 32px
- **2xl**: 48px

---

## 🔄 Migración a OutSystems

### 🎯 ARCA.OS OutSystems Starter Kit

Hemos creado un **kit completo de integración** para OutSystems ubicado en la carpeta [`outsystems/`](outsystems/):

#### 📦 Contenido del Kit

| Archivo/Carpeta | Descripción |
|-----------------|-------------|
| **[arca-os-theme.css](outsystems/arca-os-theme.css)** | Theme CSS optimizado con Design Tokens |
| **[OUTSYSTEMS_SETUP.md](outsystems/OUTSYSTEMS_SETUP.md)** | Guía paso a paso de instalación del theme |
| **[COMPONENTS_GUIDE.md](outsystems/COMPONENTS_GUIDE.md)** | Mapeo completo HTML → OutSystems Widgets |
| **[STARTER_MODULE.md](outsystems/STARTER_MODULE.md)** | Crear módulo starter con bloques reusables |
| **[templates/](outsystems/templates/)** | Templates HTML listos para Expression widgets |

#### 🚀 Quick Start

**Paso 1: Instalar el Theme**
```bash
# 1. Abre Service Studio
# 2. Crea un nuevo Theme: "ArcaOSTheme"
# 3. Upload outsystems/arca-os-theme.css
# 4. Set como Default Theme
```

**Paso 2: Usar Componentes**
```
# En tus screens, agrega clases CSS:
Button → Style Classes: "btn btn-primary"
Text → Style Classes: "badge badge-success"
Container → Style Classes: "card"
```

**Paso 3: Construir con Templates**
```
# Usa templates HTML para componentes complejos:
# - outsystems/templates/sidebar-navigation.html
# - outsystems/templates/header-component.html
# - outsystems/templates/metric-card.html
```

#### 📚 Documentación Completa

Para implementar ARCA.OS en OutSystems, consulta:

1. **[OUTSYSTEMS_SETUP.md](outsystems/OUTSYSTEMS_SETUP.md)** - Empieza aquí
2. **[COMPONENTS_GUIDE.md](outsystems/COMPONENTS_GUIDE.md)** - Cómo construir cada componente
3. **[STARTER_MODULE.md](outsystems/STARTER_MODULE.md)** - Crear biblioteca reusable
4. **[templates/README.md](outsystems/templates/README.md)** - Usar templates HTML

### Estrategia de Transferencia

Los prototipos están diseñados para facilitar la migración a OutSystems Reactive:

1. **Design Tokens → OutSystems Theme**
   - Copiar variables CSS al Theme Editor
   - Mapear tokens a OutSystems CSS variables

2. **HTML → OutSystems Widgets**
   - Traducir estructura HTML a Blocks y Screens
   - Mantener clases CSS idénticas

3. **JavaScript → Client Actions**
   - Convertir event listeners a Client Actions
   - Replicar lógica de validación en Aggregate Validations

### Compatibilidad

- ✅ Clases CSS compatibles con OutSystems UI
- ✅ Variables CSS (Custom Properties) soportadas
- ✅ Estructura semántica traducible a Widgets
- ✅ Lógica de negocio separada de presentación
- ✅ Templates HTML listos para Expression widgets

---

## 📚 Recursos y Referencias

### Documentación

- [OutSystems UI Framework](https://outsystemsui.outsystems.com/)
- [Arca Continental Playbook UX/UI](internal)
- [Design System Guidelines](internal)

### Herramientas Utilizadas

- **Pencil Project**: Wireframing inicial
- **VS Code**: Editor de código
- **Chrome DevTools**: Testing y debugging
- **Git**: Control de versiones

---

## 👥 Equipo y Créditos

**Tech Lead & UX Developer**
Cristian Ortega
Tech Lead OutSystems | DPA

**Organización**
Digital Process Automation (DPA)
Arca Continental

**Stakeholders**
- Equipo DPA
- Equipo de Negocio Arca Continental
- Usuarios finales (Operadores de Recuperación)

---

## 📝 Changelog

### v1.0 - Febrero 2026
- ✅ Implementación de 7 prototipos completos
- ✅ Design System basado en Arca Continental Playbook
- ✅ Responsive design en todos los prototipos
- ✅ Integración con OutSystems UI Framework
- ✅ Documentación completa del proyecto

---

## 📄 Licencia

© 2026 Digital Process Automation (DPA) - Arca Continental
Todos los derechos reservados.

Este proyecto es propiedad de Arca Continental y está destinado exclusivamente para uso interno en proyectos de Digital Process Automation.

---

## 📞 Contacto

Para consultas sobre los prototipos o el Design System:

**Cristian Ortega**
Tech Lead OutSystems
Digital Process Automation (DPA)

---

**Powered by DPA | Built with ❤️ for Arca Continental**
