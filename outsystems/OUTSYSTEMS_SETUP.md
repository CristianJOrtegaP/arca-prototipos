# ARCA.OS - Guía de Instalación en OutSystems

> Guía completa para integrar el Design System ARCA.OS en tus aplicaciones OutSystems

---

## 📋 Tabla de Contenidos

1. [Requisitos Previos](#requisitos-previos)
2. [Instalación del Theme CSS](#instalación-del-theme-css)
3. [Configuración de Variables CSS](#configuración-de-variables-css)
4. [Uso de Clases en Widgets](#uso-de-clases-en-widgets)
5. [Verificación de Instalación](#verificación-de-instalación)
6. [Troubleshooting](#troubleshooting)

---

## Requisitos Previos

Antes de comenzar, asegúrate de tener:

- ✅ OutSystems 11 o superior
- ✅ Service Studio instalado
- ✅ Acceso al módulo donde deseas aplicar el theme
- ✅ **OutSystems UI Framework** agregado como dependencia del módulo

### Agregar OutSystems UI como Dependencia

Si aún no tienes OutSystems UI como dependencia:

1. Abre tu módulo en Service Studio
2. Ve a **Manage Dependencies** (Ctrl+Q)
3. Busca **OutSystemsUI** o **OutSystemsUIWeb**
4. Agrega los siguientes elementos:
   - `Layouts` (todos)
   - `Patterns` (todos)
   - `Scripts` y `Styles` base

---

## Instalación del Theme CSS

### Paso 1: Crear un Nuevo Theme

1. Abre tu módulo en **Service Studio**
2. En el panel izquierdo, ve a **Interface Tab**
3. Expande la carpeta **Themes**
4. Click derecho en **Themes** → **Add Theme**
5. Nombra el theme: `ArcaOSTheme`

![Crear Theme](https://via.placeholder.com/800x400?text=Service+Studio+-+Add+Theme)

### Paso 2: Subir el Archivo CSS

1. Selecciona el theme recién creado (**ArcaOSTheme**)
2. En el panel de propiedades (derecha), busca la sección **Style Sheet**
3. Click en **"Upload CSS"**
4. Navega a la carpeta `outsystems/` del proyecto
5. Selecciona el archivo **`arca-os-theme.css`**
6. Click en **Open**

Service Studio cargará el CSS automáticamente.

### Paso 3: Aplicar el Theme como Default

1. Ve a **Module Properties** (doble click en el nombre del módulo)
2. En la pestaña **Themes**, busca **Default Theme**
3. Selecciona **ArcaOSTheme** del dropdown
4. Click en **OK**

**¡Listo!** El theme ya está aplicado a tu módulo.

### Paso 4: Publicar el Módulo

1. Click en **1-Click Publish** (F5)
2. Espera a que termine la publicación
3. Abre tu aplicación en el navegador para ver los cambios

---

## Configuración de Variables CSS

El theme ARCA.OS utiliza **CSS Custom Properties (variables)** para centralizar el Design System.

### Variables Principales Disponibles

#### Colores Institucionales

```css
--arca-red: #C32B40;              /* Rojo Carmesí (Color principal) */
--arca-red-dark: #9A2233;         /* Hover states */
--arca-red-light: #FDE7EA;        /* Fondos claros */
--arca-turquoise: #0AA4B4;        /* Información */
--arca-lime: #7FBC03;             /* Éxito */
--arca-orange: #FF9016;           /* Advertencia */
--arca-red-intense: #FF1826;      /* Error */
```

#### Neutrales

```css
--color-neutral-0: #FFFFFF;       /* Blanco */
--color-neutral-1: #F8FAFC;       /* Fondo muy claro */
--color-neutral-2: #F1F5F9;       /* Fondo claro */
--color-neutral-3: #E2E8F0;       /* Bordes */
--color-neutral-7: #475569;       /* Texto body */
--color-neutral-9: #1E293B;       /* Texto principal */
```

#### Espaciado

```css
--space-xs: 4px;
--space-s: 8px;
--space-base: 16px;
--space-m: 16px;
--space-l: 24px;
--space-xl: 32px;
--space-2xl: 48px;
```

#### Border Radius

```css
--border-radius-soft: 6px;
--border-radius-base: 8px;
--border-radius-rounded: 12px;
--border-radius-xl: 20px;
--border-radius-pill: 9999px;
```

### Cómo Usar Variables en Extended Properties

Si necesitas usar variables CSS directamente en un widget:

1. Selecciona el widget en Service Studio
2. En **Properties** → **Extended Properties**
3. Agrega una nueva property:
   - **Name**: `style`
   - **Value**: `background-color: var(--arca-red); color: white;`

**Ejemplo:**

```
Name: style
Value: padding: var(--space-l); border-radius: var(--border-radius-rounded);
```

---

## Uso de Clases en Widgets

El theme incluye **utility classes** listas para usar en cualquier widget de OutSystems.

### Cómo Agregar Clases CSS a un Widget

1. Selecciona el widget (Button, Container, Text, etc.)
2. En **Properties**, busca el campo **Style Classes**
3. Agrega las clases separadas por espacio

**Ejemplo:**

```
Style Classes: btn btn-primary margin-bottom-m
```

### Clases de Componentes Principales

#### Botones

| Clase                | Descripción                          |
| -------------------- | ------------------------------------ |
| `btn btn-primary`    | Botón rojo Arca (acción principal)   |
| `btn btn-secondary`  | Botón con borde rojo (acción sec.)   |
| `btn btn-success`    | Botón verde (confirmación)           |
| `btn btn-warning`    | Botón naranja (advertencia)          |
| `btn btn-danger`     | Botón rojo intenso (error/eliminar)  |
| `btn-small`          | Botón pequeño                        |
| `btn-large`          | Botón grande                         |

**Ejemplo en Service Studio:**

1. Drag & Drop un **Button** widget
2. **Style Classes**: `btn btn-primary`
3. **Text**: "Guardar Cambios"

#### Badges

| Clase             | Descripción                |
| ----------------- | -------------------------- |
| `badge`           | Badge base                 |
| `badge-primary`   | Badge rojo Arca            |
| `badge-success`   | Badge verde                |
| `badge-warning`   | Badge naranja              |
| `badge-danger`    | Badge rojo                 |
| `badge-light`     | Badge gris claro           |

**Ejemplo en Service Studio:**

1. Drag & Drop un **Text** widget
2. **Style Classes**: `badge badge-success`
3. **Text**: "ACTIVO"

#### Cards

| Clase     | Descripción                |
| --------- | -------------------------- |
| `card`    | Contenedor con sombra      |

**Ejemplo en Service Studio:**

1. Drag & Drop un **Container** widget
2. **Style Classes**: `card`
3. Agrega contenido dentro (textos, botones, etc.)

### Clases Utility (Utilidades)

#### Colores de Fondo

```css
background-arca-red
background-arca-red-light
background-turquoise
background-lime
background-success-light
background-error-light
background-neutral-1
background-neutral-2
```

**Ejemplo:**

```
Style Classes: background-arca-red-light padding-l border-radius-rounded
```

#### Colores de Texto

```css
text-arca-red
text-turquoise
text-success
text-warning
text-error
text-neutral-7
text-neutral-9
text-muted
```

**Ejemplo:**

```
Style Classes: text-arca-red font-bold
```

#### Tipografía

```css
/* Font Sizes */
font-size-xs       /* 12px */
font-size-s        /* 14px */
font-size-base     /* 16px */
font-size-l        /* 18px */
font-size-xl       /* 20px */

/* Font Weights */
font-light
font-normal
font-medium
font-semi-bold
font-bold
font-extra-bold

/* Text Alignment */
text-left
text-center
text-right

/* Letter Spacing */
letter-spacing-tight
letter-spacing-wide
```

**Ejemplo:**

```
Style Classes: font-size-xl font-bold text-neutral-9
```

#### Espaciado

```css
/* Margins */
margin-xs
margin-s
margin-m
margin-l
margin-xl

margin-top-s
margin-top-m
margin-top-l

margin-bottom-s
margin-bottom-m
margin-bottom-l

/* Padding */
padding-xs
padding-s
padding-m
padding-l
padding-xl
```

**Ejemplo:**

```
Style Classes: padding-l margin-bottom-m
```

#### Layout (Flexbox)

```css
display-flex
align-items-center
align-items-start
align-items-end

justify-content-center
justify-content-between
justify-content-start
justify-content-end

flex-direction-column
flex-direction-row
```

**Ejemplo - Contenedor con elementos centrados:**

```
Style Classes: display-flex align-items-center justify-content-between
```

#### Border Radius

```css
border-radius-s         /* 6px */
border-radius-base      /* 8px */
border-radius-rounded   /* 12px */
border-radius-l         /* 16px */
border-radius-xl        /* 20px */
border-radius-pill      /* 9999px - completamente redondeado */
border-radius-circle    /* 50% - círculo */
```

**Ejemplo:**

```
Style Classes: border-radius-xl background-neutral-1 padding-l
```

#### Shadows

```css
shadow-s
shadow-m
shadow-l
shadow-xl
shadow-none
```

**Ejemplo:**

```
Style Classes: shadow-l padding-m border-radius-rounded
```

---

## Verificación de Instalación

### Test 1: Verificar Variables CSS

1. Crea una nueva **Screen** en tu módulo
2. Drag & Drop un **Container**
3. **Style Classes**: `background-arca-red padding-xl`
4. Agrega un **Text** widget dentro
5. **Style Classes**: `text-inverse font-bold font-size-xl`
6. **Text**: "ARCA.OS Theme Test"
7. Publica y abre la screen

**Resultado esperado:** Fondo rojo Arca, texto blanco bold grande.

### Test 2: Verificar Botones

1. Drag & Drop un **Button**
2. **Style Classes**: `btn btn-primary`
3. **Text**: "Botón Principal"
4. Publica y abre la screen

**Resultado esperado:** Botón rojo Arca con sombra, al hacer hover se oscurece y se eleva.

### Test 3: Verificar Cards

1. Drag & Drop un **Container**
2. **Style Classes**: `card`
3. Agrega contenido dentro (Heading, Text, Button)
4. Publica y abre la screen

**Resultado esperado:** Contenedor blanco con sombra y bordes redondeados.

---

## Troubleshooting

### ❌ Los colores no se aplican

**Posible causa:** El theme no está configurado como Default Theme.

**Solución:**

1. Ve a **Module Properties**
2. **Themes** → **Default Theme** → Selecciona **ArcaOSTheme**
3. Publica el módulo (F5)

---

### ❌ Los botones no tienen el estilo correcto

**Posible causa:** Conflicto con estilos de OutSystems UI base.

**Solución:**

1. Asegúrate de usar las clases exactas: `btn btn-primary`
2. Verifica que **OutSystems UI** esté como dependencia
3. Si persiste el problema, agrega `!important` en el CSS:

```css
.btn-primary {
    background-color: var(--arca-red) !important;
}
```

---

### ❌ Las variables CSS no funcionan

**Posible causa:** Navegador antiguo que no soporta CSS Custom Properties.

**Solución:**

- OutSystems Reactive soporta CSS variables en todos los navegadores modernos
- Si usas **OutSystems Traditional Web**, considera migrar a **Reactive**
- Alternativamente, puedes usar las clases utility directamente sin variables

---

### ❌ El CSS no se actualiza después de cambios

**Posible causa:** Caché del navegador.

**Solución:**

1. En Service Studio, haz **1-Click Publish** (F5)
2. En el navegador, haz **Hard Refresh**:
   - **Windows**: Ctrl + Shift + R
   - **Mac**: Cmd + Shift + R
3. Si persiste, limpia el caché del navegador completamente

---

## 🎯 Próximos Pasos

Una vez instalado el theme, continúa con:

1. **[COMPONENTS_GUIDE.md](COMPONENTS_GUIDE.md)** - Aprende a construir componentes específicos
2. **[STARTER_MODULE.md](STARTER_MODULE.md)** - Crea un módulo starter con bloques reusables
3. **[templates/](templates/)** - Explora templates HTML para componentes complejos

---

## 📚 Recursos Adicionales

- **OutSystems UI Documentation:** [https://success.outsystems.com/Documentation/11/Developing_an_Application/Design_UI/OutSystems_UI](https://success.outsystems.com/Documentation/11/Developing_an_Application/Design_UI/OutSystems_UI)
- **CSS Variables Guide:** [https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- **Arca Continental Playbook UX/UI:** (Documentación interna)

---

## 💬 Soporte

¿Tienes problemas o preguntas?

- **Tech Lead:** Cristian Ortega - Tech Lead OutSystems | DPA
- **Equipo:** Digital Process Automation (DPA)
- **Email:** [contacto interno]

---

**© 2026 Digital Process Automation (DPA) - Arca Continental**
