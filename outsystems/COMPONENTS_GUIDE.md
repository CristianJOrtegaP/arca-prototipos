# ARCA.OS - Guía de Componentes OutSystems

> Mapeo completo de componentes HTML a widgets OutSystems con ejemplos prácticos

---

## 📋 Tabla de Contenidos

1. [Introducción](#introducción)
2. [Buttons (Botones)](#buttons-botones)
3. [Form Inputs (Entradas de Formulario)](#form-inputs-entradas-de-formulario)
4. [Badges (Insignias)](#badges-insignias)
5. [Cards (Tarjetas)](#cards-tarjetas)
6. [Logo ARCA.OS](#logo-arcaos)
7. [Header Component](#header-component)
8. [Sidebar Navigation](#sidebar-navigation)
9. [Tables (Tablas)](#tables-tablas)
10. [Metric Cards](#metric-cards)
11. [Status Badges](#status-badges)
12. [Loading States](#loading-states)

---

## Introducción

Esta guía te muestra cómo construir cada componente del Design System ARCA.OS usando widgets nativos de OutSystems.

### Convenciones

- 🎨 **HTML**: Código del prototipo original
- 🔧 **OutSystems**: Estructura de widgets en Service Studio
- 📝 **Style Classes**: Clases CSS a usar
- 💡 **Tips**: Mejores prácticas y consejos

---

## Buttons (Botones)

### Botón Primario

#### 🎨 HTML Original

```html
<button class="btn btn-primary">
    GUARDAR CAMBIOS
</button>
```

#### 🔧 OutSystems Widgets

**Estructura en Service Studio:**

```
Button
├─ Properties
│  ├─ Style Classes: "btn btn-primary"
│  ├─ Text: "GUARDAR CAMBIOS"
│  └─ Method: Submit
```

**Paso a paso:**

1. Drag & Drop un **Button** widget
2. En **Properties**:
   - **Style Classes**: `btn btn-primary`
   - **Text**: `GUARDAR CAMBIOS`
   - **Method**: `Submit` (si es para forms)
3. En **Events**, agrega tu Client Action en `OnClick`

#### 📝 Variantes de Botones

| Tipo       | Style Classes        | Cuándo Usar                  |
| ---------- | -------------------- | ---------------------------- |
| Principal  | `btn btn-primary`    | Acción principal (Guardar)   |
| Secundario | `btn btn-secondary`  | Acción secundaria (Cancelar) |
| Éxito      | `btn btn-success`    | Confirmaciones positivas     |
| Advertencia| `btn btn-warning`    | Acciones con precaución      |
| Peligro    | `btn btn-danger`     | Eliminaciones                |

#### 💡 Tips

- Usa `btn btn-primary` solo para **una acción principal por pantalla**
- Para botones secundarios, usa `btn btn-secondary`
- Agrega `btn-small` o `btn-large` para tamaños alternativos

**Ejemplo de botones combinados:**

```
Container (display-flex, justify-content-end, gap entre elementos)
├─ Button: "Cancelar" (btn btn-secondary)
└─ Button: "Guardar" (btn btn-primary)
```

---

## Form Inputs (Entradas de Formulario)

### Input Text con Label

#### 🎨 HTML Original

```html
<div class="form-group">
    <label class="form-label">Nombre Completo</label>
    <input type="text" class="form-control" placeholder="Juan Pérez">
</div>
```

#### 🔧 OutSystems Widgets

**Estructura en Service Studio:**

```
Container (form-group)
├─ Label
│  ├─ Style Classes: "form-label"
│  └─ Text: "Nombre Completo"
└─ Input
   ├─ Style Classes: "form-control"
   ├─ Variable: {NombreCompleto}
   └─ Prompt: "Juan Pérez"
```

**Paso a paso:**

1. Drag & Drop un **Container**
2. **Style Classes**: `form-group margin-bottom-m`
3. Dentro del Container:
   - Drag & Drop un **Text** (o **Label**)
     - **Style Classes**: `form-label`
     - **Text**: `"Nombre Completo"`
   - Drag & Drop un **Input**
     - **Style Classes**: `form-control`
     - **Variable**: Crea/selecciona una variable local
     - **Prompt**: `"Juan Pérez"`

#### 📝 Estados de Input

| Estado      | Style Classes adicionales     | Cuándo Usar             |
| ----------- | ----------------------------- | ----------------------- |
| Normal      | `form-control`                | Estado por defecto      |
| Error       | `form-control error`          | Validación fallida      |
| Deshabilitado| `form-control` + Enabled=False| Input no editable       |

#### 💡 Tips - Validación de Inputs

Para agregar validación visual:

1. Crea una **Variable Local** booleana: `HasError`
2. Usa un **If** widget alrededor del Input:
   - **Condition**: `HasError`
   - **True Branch**: Input con `Style Classes: "form-control error"`
   - **False Branch**: Input con `Style Classes: "form-control"`
3. Debajo del Input, agrega un **Text** para el mensaje de error:
   - **Style Classes**: `error-message text-error font-size-xs`
   - **Text**: `"Este campo es requerido"`
   - **Visible**: `HasError`

---

## Badges (Insignias)

### Badge de Estado

#### 🎨 HTML Original

```html
<span class="badge badge-success">ACTIVO</span>
<span class="badge badge-warning">PENDIENTE</span>
<span class="badge badge-danger">INACTIVO</span>
```

#### 🔧 OutSystems Widgets

**Estructura en Service Studio:**

```
Text
├─ Style Classes: "badge badge-success"
├─ Text: "ACTIVO"
└─ Escape Content: No
```

**Paso a paso:**

1. Drag & Drop un **Text** widget (NO uses Expression)
2. **Style Classes**: `badge badge-success` (o la variante necesaria)
3. **Text**: `"ACTIVO"`
4. **Escape Content**: `No`

#### 📝 Variantes de Badges

| Tipo       | Style Classes      | Color          | Uso                  |
| ---------- | ------------------ | -------------- | -------------------- |
| Principal  | `badge-primary`    | Rojo Arca      | Default              |
| Éxito      | `badge-success`    | Verde Lima     | Estados positivos    |
| Advertencia| `badge-warning`    | Naranja        | Alertas moderadas    |
| Error      | `badge-danger`     | Rojo Intenso   | Estados negativos    |
| Info       | `badge-info`       | Turquesa       | Información          |
| Light      | `badge-light`      | Gris Claro     | Neutral              |

#### 💡 Tips - Badges Dinámicos

Para badges con estado dinámico basado en datos:

**Escenario:** Mostrar badge según status de una orden.

1. Crea un **Switch** (basado en `Order.Status`)
2. Para cada Case, agrega un **Text** con la clase correspondiente:
   - **Case "Active"**: `badge badge-success` + Text: `"ACTIVO"`
   - **Case "Pending"**: `badge badge-warning` + Text: `"PENDIENTE"`
   - **Case "Inactive"**: `badge badge-danger` + Text: `"INACTIVO"`

**Alternativa con Expression:**

```
Expression: "<span class='badge badge-" + Order.StatusClass + "'>" + Order.StatusText + "</span>"
Escape Content: No
```

---

## Cards (Tarjetas)

### Card Básica

#### 🎨 HTML Original

```html
<div class="card">
    <h3>Título de la Card</h3>
    <p>Contenido de la card con descripción.</p>
    <button class="btn btn-primary">Ver Más</button>
</div>
```

#### 🔧 OutSystems Widgets

**Estructura en Service Studio:**

```
Container (card)
├─ Text (Heading)
│  ├─ Style Classes: "font-size-l font-bold margin-bottom-s"
│  └─ Text: "Título de la Card"
├─ Text (Body)
│  ├─ Style Classes: "text-neutral-7 margin-bottom-m"
│  └─ Text: "Contenido de la card con descripción."
└─ Button
   ├─ Style Classes: "btn btn-primary"
   └─ Text: "Ver Más"
```

**Paso a paso:**

1. Drag & Drop un **Container**
2. **Style Classes**: `card`
3. Dentro del Container, agrega:
   - **Text** (Título)
     - **Style Classes**: `font-size-l font-bold margin-bottom-s`
     - **Text**: `"Título de la Card"`
   - **Text** (Descripción)
     - **Style Classes**: `text-neutral-7 margin-bottom-m`
     - **Text**: `"Contenido de la card..."`
   - **Button**
     - **Style Classes**: `btn btn-primary`
     - **Text**: `"Ver Más"`

#### 💡 Tips - Cards con Hover Effect

Las cards ya incluyen hover effect (elevación). Para deshabilitar:

```
Style Classes: card shadow-none
```

Para cards clickeable completo:

1. Envuelve el Container en un **Link**
2. **Style Classes**: `card`
3. **Destination**: Screen de destino
4. El hover effect se aplicará a toda la card

---

## Logo ARCA.OS

### Logo Component

#### 🎨 HTML Original

```html
<div class="logo">
    <span class="logo-text">ARCA</span>
    <span class="logo-dot"></span>
    <span class="logo-text">OS</span>
</div>
```

#### 🔧 OutSystems Widgets

**Estructura en Service Studio:**

```
Container (logo)
├─ Text
│  ├─ Style Classes: "logo-text"
│  └─ Text: "ARCA"
├─ Container (logo-dot)
│  └─ Style Classes: "logo-dot"
└─ Text
   ├─ Style Classes: "logo-text"
   └─ Text: "OS"
```

**CSS Adicional (agregar al Theme):**

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

**Paso a paso:**

1. Drag & Drop un **Container**
2. **Style Classes**: `logo`
3. Dentro, agrega:
   - **Text**: `"ARCA"` con `Style Classes: logo-text`
   - **Container**: vacío con `Style Classes: logo-dot`
   - **Text**: `"OS"` con `Style Classes: logo-text`

#### 💡 Tips

Convierte esto en un **Block reutilizable** llamado `LogoBlock`:

1. Crea un nuevo Block: `LogoBlock`
2. Construye el logo como se describe arriba
3. Usa el Block en tus screens: `LogoBlock`

---

## Header Component

### Header con Logo y Navegación

#### 🎨 HTML Original

```html
<header class="header">
    <div class="logo">...</div>
    <nav>
        <a href="#">Dashboard</a>
        <a href="#">Usuarios</a>
        <a href="#">Configuración</a>
    </nav>
    <button class="btn btn-secondary">Cerrar Sesión</button>
</header>
```

#### 🔧 OutSystems Widgets

**Estructura en Service Studio:**

```
Container (header)
└─ Container (display-flex, justify-content-between, align-items-center)
   ├─ LogoBlock (Block reutilizable)
   ├─ Container (Navigation)
   │  └─ Links (a Dashboard, Usuarios, Configuración)
   └─ Button ("Cerrar Sesión", btn btn-secondary)
```

**CSS Adicional:**

```css
.header {
    background: var(--color-neutral-0);
    border-bottom: 1px solid var(--color-neutral-3);
    padding: 16px 24px;
}
```

**Paso a paso:**

1. Crea un **Block**: `HeaderBlock`
2. Drag & Drop un **Container**
   - **Style Classes**: `header`
3. Dentro, agrega un **Container**
   - **Style Classes**: `display-flex justify-content-between align-items-center`
4. Dentro del contenedor flex, agrega:
   - **LogoBlock**
   - **Container** (Navigation)
     - Agrega **Links** a tus screens
     - **Style Classes** (en cada link): `text-neutral-7 font-semi-bold`
   - **Button** ("Cerrar Sesión")
     - **Style Classes**: `btn btn-secondary`

#### 💡 Tips

- Usa este Header Block en un **Layout** (Layout Web Block)
- Aplica el Layout a todas tus screens para consistencia

---

## Sidebar Navigation

### Sidebar con Menú Colapsable

#### 🎨 HTML Original

```html
<aside class="sidebar">
    <div class="sidebar-header">
        <h2>Menú</h2>
    </div>
    <nav class="sidebar-menu">
        <a href="#" class="menu-item active">
            <svg>...</svg>
            Dashboard
        </a>
        <a href="#" class="menu-item">
            <svg>...</svg>
            Usuarios
        </a>
    </nav>
</aside>
```

#### 🔧 OutSystems Widgets

**Estructura en Service Studio:**

```
Container (sidebar)
├─ Container (sidebar-header)
│  └─ Text: "Menú"
└─ Container (sidebar-menu)
   ├─ Link (menu-item active)
   │  ├─ Icon (SVG or Icon Font)
   │  └─ Text: "Dashboard"
   └─ Link (menu-item)
      ├─ Icon
      └─ Text: "Usuarios"
```

**CSS Adicional:**

```css
.sidebar {
    width: 240px;
    height: 100vh;
    background: var(--color-neutral-0);
    border-right: 1px solid var(--color-neutral-3);
    padding: var(--space-l);
}

.menu-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 16px;
    border-radius: var(--border-radius-base);
    color: var(--color-neutral-7);
    text-decoration: none;
    transition: var(--transition-base);
}

.menu-item:hover {
    background: var(--color-neutral-2);
    color: var(--color-neutral-9);
}

.menu-item.active {
    background: var(--arca-red-light);
    color: var(--arca-red);
    font-weight: var(--font-bold);
}
```

**Paso a paso:**

1. Crea un **Block**: `SidebarBlock`
2. Drag & Drop un **Container**
   - **Style Classes**: `sidebar`
3. Agregar Header del Sidebar
4. Agregar Links con íconos
5. Usar clase `active` para resaltar página actual

#### 💡 Tips - Active State Dinámico

Para que el menú resalte la página actual automáticamente:

```
Link Properties:
Style Classes: If(GetPageName() = "Dashboard", "menu-item active", "menu-item")
```

---

## Tables (Tablas)

### Tabla de Datos

#### 🎨 HTML Original

```html
<table>
    <thead>
        <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Estado</th>
            <th>Acciones</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>001</td>
            <td>Juan Pérez</td>
            <td><span class="badge badge-success">Activo</span></td>
            <td><button class="btn btn-secondary btn-small">Ver</button></td>
        </tr>
    </tbody>
</table>
```

#### 🔧 OutSystems Widgets

**Estructura en Service Studio:**

```
Table Records
├─ Source: GetUsers (Aggregate)
├─ Line Separator: Solid
├─ Style Classes: ""
└─ Columns:
   ├─ ID: {User.Id}
   ├─ Nombre: {User.Name}
   ├─ Estado: Badge (conditional)
   └─ Acciones: Button (Ver Detalle)
```

**Paso a paso:**

1. Crea un **Aggregate**: `GetUsers`
2. Drag & Drop **Table Records**
3. **Source**: Selecciona el Aggregate `GetUsers`
4. **Line Separator**: `Solid`
5. Configura las columnas:
   - **ID**: Drag `User.Id`
   - **Nombre**: Drag `User.Name`
   - **Estado**: Agrega un **If** con badges según estado
   - **Acciones**: Drag & Drop un **Button**
     - **Style Classes**: `btn btn-secondary btn-small`
     - **Text**: `"Ver"`

#### 📝 Ejemplo de Columna Estado (Condicional)

Dentro de la columna "Estado", agrega un **Switch** basado en `User.Status`:

- **Case "Active"**:
  ```
  Text: "ACTIVO"
  Style Classes: badge badge-success
  ```
- **Case "Inactive"**:
  ```
  Text: "INACTIVO"
  Style Classes: badge badge-danger
  ```

#### 💡 Tips - Tablas Responsivas

OutSystems Tables se vuelven automáticamente responsivas. Para más control:

1. Usa **List** widget en lugar de Table para mobile
2. En **Phones**, oculta la Table y muestra la List
3. En **Tablets/Desktop**, oculta la List y muestra la Table

**Ejemplo:**

```
If (IsPhone())
└─ List (Cards verticales)
Else
└─ Table Records
```

---

## Metric Cards

### Card de Métrica (Dashboard)

#### 🎨 HTML Original

```html
<div class="metric-card">
    <div class="metric-value">1,245</div>
    <div class="metric-label">Órdenes Activas</div>
    <div class="metric-trend positive">+12.5%</div>
</div>
```

#### 🔧 OutSystems Widgets

**Estructura en Service Studio:**

```
Container (card)
├─ Text (Value)
│  ├─ Style Classes: "font-size-4xl font-extra-bold text-neutral-9"
│  └─ Text: {TotalOrders}
├─ Text (Label)
│  ├─ Style Classes: "font-size-s text-neutral-6 margin-bottom-s"
│  └─ Text: "Órdenes Activas"
└─ Text (Trend)
   ├─ Style Classes: "font-size-xs font-bold text-success"
   └─ Text: "+12.5%"
```

**CSS Adicional (opcional):**

```css
.metric-card {
    text-align: center;
}
```

#### 💡 Tips - Trend Dinámico

Para mostrar tendencia con color condicional:

```
Text (Trend):
Style Classes: "font-size-xs font-bold " + If(Trend >= 0, "text-success", "text-error")
Text: If(Trend >= 0, "+", "") + Trend + "%"
```

---

## Status Badges

Ejemplo más detallado de badges de estado para órdenes:

### Mapeo de Estados

| Estado OutSystems | Badge Class       | Texto Display    |
| ----------------- | ----------------- | ---------------- |
| `Active`          | `badge-success`   | "ACTIVO"         |
| `Pending`         | `badge-warning`   | "PENDIENTE"      |
| `Completed`       | `badge-info`      | "COMPLETADO"     |
| `Cancelled`       | `badge-danger`    | "CANCELADO"      |

### Client Action Helper

Crea una **Client Action**: `GetOrderBadgeClass`

**Input Parameters:**
- `Status` (Text)

**Output Parameters:**
- `BadgeClass` (Text)
- `BadgeText` (Text)

**Logic:**

```
Switch Status
Case "Active":
    BadgeClass = "badge badge-success"
    BadgeText = "ACTIVO"
Case "Pending":
    BadgeClass = "badge badge-warning"
    BadgeText = "PENDIENTE"
Case "Completed":
    BadgeClass = "badge badge-info"
    BadgeText = "COMPLETADO"
Case "Cancelled":
    BadgeClass = "badge badge-danger"
    BadgeText = "CANCELADO"
Default:
    BadgeClass = "badge badge-light"
    BadgeText = "DESCONOCIDO"
```

**Uso en Screen:**

```
Text
├─ Style Classes: {GetOrderBadgeClass(Order.Status).BadgeClass}
└─ Text: {GetOrderBadgeClass(Order.Status).BadgeText}
```

---

## Loading States

### Spinner de Carga

#### 🎨 HTML Original

```html
<div class="loading-spinner"></div>
```

#### 🔧 OutSystems Widgets

OutSystems tiene widgets nativos:

**Opción 1: Usar Widget OutSystems UI**

1. Del **Toolbox**, busca **Spinner**
2. Drag & Drop
3. **Style Classes**: personaliza si es necesario

**Opción 2: Custom Spinner**

```
Container
└─ Image (spinning icon)
   └─ Style Classes: "loading-spinner"
```

**CSS:**

```css
.loading-spinner {
    width: 40px;
    height: 40px;
    border: 4px solid var(--color-neutral-3);
    border-top-color: var(--arca-red);
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    to { transform: rotate(360deg); }
}
```

---

## 📚 Próximos Pasos

Has completado la guía de componentes básicos. Continúa con:

1. **[templates/](templates/)** - Explora templates HTML complejos
2. **[STARTER_MODULE.md](STARTER_MODULE.md)** - Crea un módulo con bloques pre-construidos
3. **Arca Continental Playbook UX/UI** - Profundiza en la identidad visual

---

**© 2026 Digital Process Automation (DPA) - Arca Continental**
