# ARCA.OS - Guía Completa para Desarrollador Junior

> Aprende a implementar el Design System ARCA.OS en OutSystems usando 100% widgets nativos

---

## 🎯 Para Quién es Esta Guía

Esta guía está diseñada para:
- ✅ Desarrolladores **junior** que están aprendiendo OutSystems
- ✅ Personas que **nunca han usado OutSystems** antes
- ✅ Desarrolladores que quieren aprender **mejores prácticas**
- ✅ Equipos que buscan **consistencia** en el diseño

**NO usaremos:**
- ❌ HTML custom en Expression widgets
- ❌ JavaScript inline
- ❌ Escape Content: No
- ❌ Código "hackeable"

**SÍ usaremos:**
- ✅ Widgets nativos de OutSystems (Container, Text, Button, etc.)
- ✅ Web Blocks reusables
- ✅ Client Actions
- ✅ Aggregate data binding
- ✅ Mejores prácticas OutSystems

---

## 📚 Tabla de Contenidos

### Nivel 1: Fundamentos (Empieza aquí)
1. [Instalación de Service Studio](#1-instalación-de-service-studio)
2. [Crear Tu Primera Aplicación](#2-crear-tu-primera-aplicación)
3. [Instalar el Theme ARCA.OS](#3-instalar-el-theme-arcaos)
4. [Entender los Widgets Básicos](#4-entender-los-widgets-básicos)

### Nivel 2: Componentes Básicos
5. [Crear un Botón Primario](#5-crear-un-botón-primario)
6. [Crear un Badge de Estado](#6-crear-un-badge-de-estado)
7. [Crear un Input con Label](#7-crear-un-input-con-label)
8. [Crear una Card Simple](#8-crear-una-card-simple)

### Nivel 3: Web Blocks
9. [Crear Tu Primer Web Block](#9-crear-tu-primer-web-block)
10. [LogoBlock - Logo Reusable](#10-logoblock---logo-reusable)
11. [BadgeBlock - Badge con Parámetros](#11-badgeblock---badge-con-parámetros)
12. [ButtonGroupBlock - Botones Agrupados](#12-buttongroupblock---botones-agrupados)

### Nivel 4: Layouts
13. [Crear Layout Principal](#13-crear-layout-principal)
14. [HeaderBlock - Header Completo](#14-headerblock---header-completo)
15. [SidebarBlock - Navegación Lateral](#15-sidebarblock---navegación-lateral)

### Nivel 5: Componentes Avanzados
16. [MetricCardBlock - Card de Métricas](#16-metriccardblock---card-de-métricas)
17. [Tabla con Data Binding](#17-tabla-con-data-binding)
18. [Form con Validación](#18-form-con-validación)

### Nivel 6: Proyecto Final
19. [Crear Dashboard Completo](#19-crear-dashboard-completo)
20. [Publicar y Testear](#20-publicar-y-testear)

---

## 🚀 Nivel 1: Fundamentos

### 1. Instalación de Service Studio

**¿Qué es Service Studio?**
Service Studio es el IDE (editor de código) de OutSystems. Es como VS Code pero específico para OutSystems.

**Pasos de Instalación:**

1. **Descargar Service Studio**
   - Ve a: [https://www.outsystems.com/downloads/](https://www.outsystems.com/downloads/)
   - Click en "Download Service Studio"
   - Guarda el instalador (ej: `ServiceStudio-11.X.X.exe`)

2. **Instalar**
   - Doble click en el instalador
   - Click "Next" → "Next" → "Install"
   - Espera 5-10 minutos

3. **Primer Inicio**
   - Abre Service Studio
   - Te pedirá conectar a un environment
   - Ingresa la URL de tu OutSystems environment (ejemplo: `https://tuempresa.outsystemscloud.com`)
   - Ingresa tu usuario y contraseña
   - Click "Connect"

**✅ Verificación:**
Si ves la pantalla principal de Service Studio con "New Application", ¡estás listo!

---

### 2. Crear Tu Primera Aplicación

**¿Qué es una Application en OutSystems?**
Una Application es un contenedor que agrupa módulos relacionados. Piensa en ella como una carpeta de proyecto.

**Pasos:**

1. **Crear Application**
   - En Service Studio, click en **"New Application"** (botón naranja grande)
   - Selecciona **"Reactive Web App"** (para aplicaciones web modernas)
   - Click **"Next"**

2. **Configurar Application**
   - **Name**: `MiPrimeraApp_ARCA`
   - **Description**: `Aprendiendo ARCA.OS Design System`
   - **Upload Icon**: (opcional) Puedes dejarlo por defecto
   - Click **"Create App"**

3. **Service Studio creará un módulo automáticamente**
   - Se llamará igual que tu app: `MiPrimeraApp_ARCA`
   - Verás la pantalla principal de Service Studio

**🎨 Interfaz de Service Studio:**

```
┌─────────────────────────────────────────────────────────────┐
│  File  Edit  Module  Debug  ...              [Publish] [F5] │ ← Barra superior
├─────────────────────────────────────────────────────────────┤
│ Interface │ Logic │ Data │ Processes │                       │ ← Tabs principales
├───────────┴───────────────────────────────┬─────────────────┤
│                                           │                 │
│  [Widget Toolbox]        [Canvas]         │  [Properties]   │
│                                           │                 │
│  📦 Container                             │  Name: Screen1  │
│  📝 Text                 🖼️ Tu pantalla   │  Title: Screen1 │
│  🔘 Button               va aquí          │  Style Classes: │
│  📥 Input                                 │                 │
│  ...                                      │                 │
│                                           │                 │
└───────────────────────────────────────────┴─────────────────┘
   Toolbox (widgets)        Canvas          Properties panel
```

**✅ Verificación:**
Si ves la interfaz de Service Studio con tu módulo abierto, ¡perfecto!

---

### 3. Instalar el Theme ARCA.OS

**¿Qué es un Theme?**
Un Theme es como el "estilo global" de tu aplicación. Contiene colores, fuentes, tamaños, sombras, etc.

**Pasos Detallados:**

1. **Ir a la pestaña Interface**
   - En la parte superior de Service Studio, click en **"Interface"**
   - Verás una estructura tipo árbol en el panel izquierdo

2. **Encontrar Themes**
   - En el panel izquierdo (árbol), busca la carpeta **"Themes"**
   - Haz click para expandirla
   - Verás el theme por defecto (probablemente "OutSystemsUIBaseTheme")

3. **Crear Nuevo Theme**
   - Right-click en la carpeta **"Themes"**
   - Selecciona **"Add Theme"**
   - Aparecerá un nuevo theme llamado "Theme1"

4. **Renombrar el Theme**
   - Con "Theme1" seleccionado, ve al panel derecho (Properties)
   - En **"Name"**, cambia "Theme1" a: `ArcaOSTheme`
   - Presiona Enter

5. **Subir el CSS**
   - Con `ArcaOSTheme` seleccionado, ve al panel derecho (Properties)
   - Busca la sección **"Style Sheet"**
   - Verás un campo vacío y un botón "Upload CSS"
   - Click en **"Upload CSS"**

6. **Seleccionar el archivo CSS**
   - Navega a tu carpeta del proyecto: `prototipos/outsystems/`
   - Selecciona el archivo: `arca-os-theme.css`
   - Click **"Abrir"** o **"Open"**

7. **Verificar**
   - Deberías ver el contenido del CSS en el panel
   - ¡No te asustes por la cantidad de código! No necesitas entenderlo todo ahora

8. **Aplicar el Theme como Default**
   - En el panel izquierdo (árbol), busca el **nombre de tu módulo** (MiPrimeraApp_ARCA)
   - Doble click en el nombre del módulo
   - Se abrirá **"Module Properties"**
   - Busca la sección **"Themes"**
   - En **"Default Theme"**, selecciona del dropdown: `ArcaOSTheme`
   - Click **"OK"**

9. **Guardar**
   - Presiona **Ctrl + S** (Windows) o **Cmd + S** (Mac)
   - O click en el ícono de disquette 💾

**✅ Verificación:**
Para verificar que el theme está instalado correctamente, vamos a hacer una prueba:

1. En la pestaña **"Interface"**, expande **"UI Flows"** → **"MainFlow"**
2. Right-click en **"MainFlow"** → **"Add Screen"**
3. Selecciona **"Empty"** → Name: `TestScreen` → Click **"Create Screen"**
4. En el Toolbox (izquierda), busca **"Button"**
5. Drag & Drop el Button al canvas
6. Selecciona el Button, ve a Properties (derecha)
7. En **"Style Classes"**, escribe: `btn btn-primary`
8. Presiona Enter
9. Click en **"1-Click Publish"** (F5) en la barra superior
10. Espera a que termine (verás una barra de progreso)
11. Click en **"Open in Browser"**
12. ¿El botón es **rojo Arca**? ✅ ¡Theme instalado correctamente!

---

### 4. Entender los Widgets Básicos

**¿Qué son los Widgets?**
Los widgets son los "bloques de construcción" de tu aplicación. Son como piezas de LEGO que juntas forman tu interfaz.

**Widgets más importantes:**

#### 📦 Container
**¿Para qué sirve?**
- Agrupar otros widgets
- Crear secciones o áreas
- Aplicar estilos a un grupo

**Ejemplo:**
```
Container (es como una caja)
├─ Text ("Título")
├─ Text ("Descripción")
└─ Button ("Ver más")
```

**Cómo usarlo:**
1. Drag & Drop "Container" desde Toolbox
2. Drag & Drop otros widgets DENTRO del Container
3. Aplica Style Classes al Container para estilizar todo el grupo

---

#### 📝 Text
**¿Para qué sirve?**
- Mostrar texto estático o dinámico
- Títulos, descripciones, labels

**Ejemplo:**
```
Text
├─ Text: "Bienvenido a ARCA.OS"
└─ Style Classes: "font-size-3xl font-bold text-neutral-9"
```

**Cómo usarlo:**
1. Drag & Drop "Text" desde Toolbox
2. En Properties → **Text**, escribe el texto que quieres mostrar
3. En Properties → **Style Classes**, agrega clases CSS

---

#### 🔘 Button
**¿Para qué sirve?**
- Crear botones clickeables
- Ejecutar acciones cuando el usuario hace click

**Ejemplo:**
```
Button
├─ Text: "Guardar"
├─ Style Classes: "btn btn-primary"
└─ OnClick: (Client Action) → GuardarDatos
```

**Cómo usarlo:**
1. Drag & Drop "Button" desde Toolbox
2. En Properties → **Text**, escribe el texto del botón
3. En Properties → **Style Classes**, agrega clases (ejemplo: `btn btn-primary`)
4. En **Events** → **OnClick**, agrega una Client Action (lo veremos más adelante)

---

#### 📥 Input
**¿Para qué sirve?**
- Capturar texto del usuario
- Formularios (nombre, email, contraseña, etc.)

**Ejemplo:**
```
Input
├─ Variable: NombreCompleto (Local Variable)
├─ Style Classes: "form-control"
└─ Prompt: "Ingresa tu nombre completo"
```

**Cómo usarlo:**
1. Drag & Drop "Input" desde Toolbox
2. En Properties → **Variable**, selecciona o crea una Local Variable
3. En Properties → **Style Classes**, agrega `form-control`
4. En Properties → **Prompt**, escribe el placeholder

---

#### 🔗 Link
**¿Para qué sirve?**
- Navegar a otra screen
- Crear enlaces clickeables

**Ejemplo:**
```
Link
├─ Text: "Ir al Dashboard"
├─ Destination: DashboardScreen
└─ Style Classes: "btn btn-secondary"
```

**Cómo usarlo:**
1. Drag & Drop "Link" desde Toolbox
2. En Properties → **Text**, escribe el texto del link
3. En Properties → **Destination**, selecciona la screen destino
4. (Opcional) En **Style Classes**, agrega clases para estilizar como botón

---

#### 🖼️ Image
**¿Para qué sirve?**
- Mostrar imágenes (logos, fotos, íconos)

**Ejemplo:**
```
Image
├─ Type: "Local Image"
├─ Image: Arca_continental_logo.png
└─ Style Classes: "width-100"
```

**Cómo usarlo:**
1. Primero, sube la imagen: Right-click en "Data" tab → "Images" → "Import Image"
2. Drag & Drop "Image" desde Toolbox
3. En Properties → **Type**, selecciona "Local Image"
4. En Properties → **Image**, selecciona tu imagen subida

---

#### 📊 Expression
**¿Para qué sirve?**
- Mostrar valores dinámicos (variables, cálculos, etc.)
- Combinar texto con datos

**Ejemplo:**
```
Expression
├─ Value: "Bienvenido, " + GetUserId().Name
└─ Style Classes: "font-bold"
```

**Cómo usarlo:**
1. Drag & Drop "Expression" desde Toolbox
2. En Properties → **Value**, escribe la expresión (puede ser una variable o cálculo)
3. (Opcional) En **Style Classes**, agrega clases

**⚠️ Importante:**
- Expression se usa para **datos dinámicos**
- Text se usa para **texto estático**

---

## 🎨 Nivel 2: Componentes Básicos

### 5. Crear un Botón Primario

**Objetivo:** Crear un botón rojo Arca con el texto "Guardar Cambios"

**Paso a Paso:**

1. **Crear una Screen de prueba** (si no la tienes ya)
   - Right-click en MainFlow → Add Screen → Empty
   - Name: `ComponentesScreen`
   - Click "Create Screen"

2. **Agregar un Container**
   - Drag & Drop **Container** desde Toolbox al canvas
   - En Properties → **Style Classes**, escribe: `padding-xl`
   - Presiona Enter

3. **Agregar un Text (título)**
   - Drag & Drop **Text** DENTRO del Container
   - En Properties → **Text**, escribe: `Botones`
   - En Properties → **Style Classes**, escribe: `font-size-2xl font-bold margin-bottom-l`
   - Presiona Enter

4. **Agregar el Button**
   - Drag & Drop **Button** DENTRO del Container (debajo del Text)
   - En Properties → **Text**, escribe: `Guardar Cambios`
   - En Properties → **Style Classes**, escribe: `btn btn-primary`
   - Presiona Enter

5. **Publicar y ver**
   - Presiona **F5** para publicar
   - Espera a que termine
   - Click en "Open in Browser"
   - ¿Ves un botón rojo con texto blanco? ✅

**🎯 Tu widget tree debería verse así:**

```
ComponentesScreen
└─ Container (padding-xl)
   ├─ Text ("Botones", font-size-2xl font-bold margin-bottom-l)
   └─ Button ("Guardar Cambios", btn btn-primary)
```

**📝 Variantes:**

Prueba cambiar las Style Classes del botón a:
- `btn btn-secondary` → Botón con borde rojo
- `btn btn-success` → Botón verde
- `btn btn-warning` → Botón naranja
- `btn btn-danger` → Botón rojo intenso

**🚀 Ejercicio:**
Crea 5 botones, uno de cada tipo (primary, secondary, success, warning, danger) en la misma screen.

---

### 6. Crear un Badge de Estado

**Objetivo:** Crear un badge verde que diga "ACTIVO"

**Paso a Paso:**

1. **En la misma screen** (ComponentesScreen)

2. **Agregar un Text (subtítulo)**
   - Drag & Drop **Text** en el Container (debajo del último botón)
   - En Properties → **Text**, escribe: `Badges`
   - En Properties → **Style Classes**, escribe: `font-size-2xl font-bold margin-bottom-l margin-top-2xl`
   - Presiona Enter

3. **Agregar el Badge**
   - Drag & Drop **Text** en el Container (debajo del subtítulo)
   - En Properties → **Text**, escribe: `ACTIVO`
   - En Properties → **Style Classes**, escribe: `badge badge-success`
   - Presiona Enter

4. **Publicar y ver**
   - Presiona **F5**
   - Espera y abre en browser
   - ¿Ves un badge verde con "ACTIVO"? ✅

**📝 Variantes:**

- `badge badge-primary` → Badge rojo Arca
- `badge badge-warning` → Badge naranja
- `badge badge-danger` → Badge rojo
- `badge badge-info` → Badge turquesa
- `badge badge-light` → Badge gris

**🚀 Ejercicio:**
Crea badges para diferentes estados:
- ACTIVO (badge-success)
- PENDIENTE (badge-warning)
- INACTIVO (badge-danger)
- COMPLETADO (badge-info)

---

### 7. Crear un Input con Label

**Objetivo:** Crear un input de texto con su label "Nombre Completo"

**Paso a Paso:**

1. **Agregar un Text (subtítulo)**
   - Drag & Drop **Text** en el Container
   - Text: `Formularios`
   - Style Classes: `font-size-2xl font-bold margin-bottom-l margin-top-2xl`

2. **Agregar un Container para el form group**
   - Drag & Drop **Container** en el Container principal
   - Style Classes: `margin-bottom-m`

3. **Agregar el Label**
   - Drag & Drop **Text** DENTRO del Container del form group
   - Text: `Nombre Completo`
   - Style Classes: `form-label`

4. **Crear una Local Variable**
   - En el panel izquierdo, busca tu screen "ComponentesScreen"
   - Expande la screen
   - Right-click en **"Local Variables"** → **"Add Local Variable"**
   - Name: `NombreCompleto`
   - Data Type: `Text`
   - Click OK

5. **Agregar el Input**
   - Drag & Drop **Input** DENTRO del Container del form group (debajo del label)
   - En Properties → **Variable**, selecciona `NombreCompleto`
   - En Properties → **Style Classes**, escribe: `form-control`
   - En Properties → **Prompt**, escribe: `Ingresa tu nombre completo`

6. **Publicar y ver**
   - Presiona **F5**
   - Abre en browser
   - ¿Ves un input con label y placeholder? ✅
   - Escribe algo → ¿se guarda en la variable? ✅

**🎯 Tu widget tree:**

```
Container (principal, padding-xl)
├─ ...botones y badges anteriores...
├─ Text ("Formularios", subtítulo)
└─ Container (margin-bottom-m)
   ├─ Text ("Nombre Completo", form-label)
   └─ Input (NombreCompleto, form-control, prompt: "Ingresa...")
```

**🚀 Ejercicio:**
Crea 3 inputs más:
- Email (con variable `Email`)
- Teléfono (con variable `Telefono`)
- Dirección (con variable `Direccion`)

---

### 8. Crear una Card Simple

**Objetivo:** Crear una card con título, descripción y botón

**Paso a Paso:**

1. **Agregar un Text (subtítulo)**
   - Drag & Drop **Text** en el Container principal
   - Text: `Cards`
   - Style Classes: `font-size-2xl font-bold margin-bottom-l margin-top-2xl`

2. **Agregar un Container para la Card**
   - Drag & Drop **Container** en el Container principal
   - Style Classes: `card`

3. **Agregar contenido a la Card**
   - Drag & Drop **Text** DENTRO del Container card (título)
     - Text: `Título de la Card`
     - Style Classes: `font-size-l font-bold margin-bottom-s`

   - Drag & Drop **Text** DENTRO del Container card (descripción)
     - Text: `Esta es una card de ejemplo con contenido de descripción.`
     - Style Classes: `text-neutral-7 margin-bottom-m`

   - Drag & Drop **Button** DENTRO del Container card
     - Text: `Ver Más`
     - Style Classes: `btn btn-primary`

4. **Publicar y ver**
   - Presiona **F5**
   - Abre en browser
   - ¿Ves una card con fondo blanco, sombra y bordes redondeados? ✅
   - ¿Al pasar el mouse la card se eleva? ✅

**🎯 Tu widget tree:**

```
Container (card)
├─ Text ("Título de la Card", font-size-l font-bold margin-bottom-s)
├─ Text ("Esta es una card...", text-neutral-7 margin-bottom-m)
└─ Button ("Ver Más", btn btn-primary)
```

**🚀 Ejercicio:**
Crea 3 cards con diferentes contenidos (proyectos, productos, servicios)

---

## ✅ Checkpoint Nivel 2

Si llegaste hasta aquí, ya sabes:
- ✅ Crear botones con diferentes estilos
- ✅ Crear badges de estado
- ✅ Crear inputs con labels
- ✅ Crear cards simples
- ✅ Usar Local Variables
- ✅ Aplicar Style Classes

**Próximo Nivel:** Aprenderás a crear **Web Blocks reusables** para no repetir código.

---

_Continúa en el archivo: [NIVEL_3_WEB_BLOCKS.md](NIVEL_3_WEB_BLOCKS.md)_

---

**© 2026 Digital Process Automation (DPA) - Arca Continental**
