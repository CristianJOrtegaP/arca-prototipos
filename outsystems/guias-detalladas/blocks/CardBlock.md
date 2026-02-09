# CardBlock - Card Reusable con Header, Body y Footer

## 📸 Resultado Final

```
┌────────────────────────────────────┐
│ Card Title              [Badge]    │ ← Header
├────────────────────────────────────┤
│                                    │
│  Este es el contenido del card.   │ ← Body
│  Puede contener cualquier cosa.   │
│                                    │
├────────────────────────────────────┤
│  [Cancelar]  [Ver más]             │ ← Footer (opcional)
└────────────────────────────────────┘
```

**Características:**
- Header con título y badge opcional
- Body con contenido flexible (Placeholder)
- Footer opcional con botones
- Sombra y borde redondeado
- Reusable en dashboards, listas, etc.

---

## 🎯 Objetivo

Crear un Web Block que funcione como contenedor (Card) con tres secciones: Header, Body y Footer. El card usa **Placeholders** para permitir que el contenido del Body sea completamente personalizable.

**Casos de uso:**
- Cards de métricas en dashboard
- Cards de información de usuario
- Cards de productos
- Cards de configuración
- Cualquier contenido que necesite estar agrupado visualmente

---

## 📋 Requisitos Previos

- ✅ Theme ARCA.OS instalado
- ✅ Conocimiento de Web Blocks ([Ver LogoBlock](LogoBlock.md))
- ✅ Conocimiento de Input Parameters ([Ver BadgeBlock](BadgeBlock.md))
- ✅ Conocimiento de Placeholders (lo aprenderás aquí)

---

## 🧱 Widgets Necesarios

- **Container** x4
- **Text** x1
- **Placeholder** x2

---

## 📐 Estructura del Widget Tree

```
CardBlock (Web Block)
├─ Input Parameters
│  ├─ CardTitle (Text) - Título del card
│  ├─ BadgeText (Text) - Texto del badge (opcional)
│  ├─ BadgeType (Text) - Tipo del badge
│  └─ ShowFooter (Boolean) - Mostrar footer
└─ ContainerCard (card)
   ├─ ContainerHeader (card-header)
   │  ├─ TextTitle (CardTitle)
   │  └─ If (BadgeText <> "")
   │     └─ Badge
   ├─ ContainerBody (card-body)
   │  └─ PlaceholderBody - Contenido personalizable
   └─ ContainerFooter (card-footer)
      └─ Visible: ShowFooter
      └─ PlaceholderFooter - Botones personalizables
```

---

## 🔨 Paso a Paso

### Paso 1: Crear el Web Block

1. Abre **Service Studio**
2. En **Interface** tab → **MainFlow**
3. Right-click → **Add Web Block**
4. Name: `CardBlock`
5. Presiona Enter

---

### Paso 2: Crear Input Parameters

**Crear CardTitle (opcional):**

1. Right-click en **"Input Parameters"** → **"Add Input Parameter"**
2. Name: `CardTitle`
3. Data Type: `Text`
4. Is Mandatory: `No`
5. Default Value: `""`
6. Description: `Título del card (header)`

**Crear BadgeText (opcional):**

1. Add Input Parameter
2. Name: `BadgeText`
3. Data Type: `Text`
4. Is Mandatory: `No`
5. Default Value: `""`
6. Description: `Texto del badge en el header`

**Crear BadgeType (opcional):**

1. Add Input Parameter
2. Name: `BadgeType`
3. Data Type: `Text`
4. Is Mandatory: `No`
5. Default Value: `"primary"`
6. Description: `Tipo del badge: primary, success, warning, danger, info, light`

**Crear ShowFooter (opcional):**

1. Add Input Parameter
2. Name: `ShowFooter`
3. Data Type: `Boolean`
4. Is Mandatory: `No`
5. Default Value: `False`
6. Description: `Si se muestra el footer del card`

**✅ Verificación:**
```
CardBlock
└─ Input Parameters
   ├─ CardTitle
   ├─ BadgeText
   ├─ BadgeType
   └─ ShowFooter
```

---

### Paso 3: Agregar Container Principal (Card)

1. Drag & Drop **Container** al canvas
2. Name: `ContainerCard`
3. Style Classes: `card`

---

### Paso 4: Agregar Container Header

1. Drag & Drop **Container** DENTRO de ContainerCard
2. Name: `ContainerHeader`
3. Style Classes: `card-header`
4. **Visible**: Click en "..." → Escribe: `CardTitle <> "" OR BadgeText <> ""`

**¿Por qué esta expresión?**
Solo mostramos el header si hay título O badge. Si ambos están vacíos, el header no se ve.

---

### Paso 5: Agregar Título en Header

1. Drag & Drop **Text** DENTRO de ContainerHeader
2. Name: `TextTitle`
3. **Text**: Click en "..." → Escribe: `CardTitle`
4. Style Classes: `card-title`

---

### Paso 6: Agregar Badge Condicional

**¿Qué es un If widget?**
El **If** widget permite mostrar contenido solo si una condición es verdadera. Es como un "if" en programación.

1. En el Toolbox, busca **"If"**
2. Drag & Drop **If** DENTRO de ContainerHeader (después del TextTitle)
3. Con el If seleccionado, ve a Properties:
   - **Name**: `IfBadge`
   - **Condition**: Click en "..." → Escribe: `BadgeText <> ""`

**Ahora vamos a agregar el badge DENTRO del If:**

4. Opción A - Si tienes BadgeBlock:
   - En Toolbox → Blocks
   - Drag & Drop **BadgeBlock** DENTRO del If (en la rama "True")
   - Properties:
     - BadgeText: `BadgeText`
     - BadgeType: `BadgeType`

5. Opción B - Sin BadgeBlock:
   - Drag & Drop **Text** DENTRO del If (rama "True")
   - Name: `TextBadge`
   - Text: Click en "..." → `BadgeText`
   - Style Classes: Click en "..." → `"badge badge-" + BadgeType`

---

### Paso 7: Agregar Container Body

1. Drag & Drop **Container** DENTRO de ContainerCard (después del Header)
2. Name: `ContainerBody`
3. Style Classes: `card-body`

---

### Paso 8: Agregar Placeholder al Body

**¿Qué es un Placeholder?**
Un **Placeholder** es un "hueco" en el block donde puedes insertar contenido cuando uses el block en una screen. Es como un "slot" que se llena dinámicamente.

1. En el Toolbox, busca **"Placeholder"**
2. Drag & Drop **Placeholder** DENTRO de ContainerBody
3. Con el Placeholder seleccionado:
   - **Name**: `PlaceholderBody`

**✅ Verificación:**
En el canvas deberías ver un área gris que dice "PlaceholderBody".

---

### Paso 9: Agregar Container Footer

1. Drag & Drop **Container** DENTRO de ContainerCard (al final)
2. Name: `ContainerFooter`
3. Style Classes: `card-footer`
4. **Visible**: Click en "..." → Escribe: `ShowFooter`

---

### Paso 10: Agregar Placeholder al Footer

1. Drag & Drop **Placeholder** DENTRO de ContainerFooter
2. Name: `PlaceholderFooter`

---

### Paso 11: Verificar Estructura Final

```
CardBlock
├─ Input Parameters (4 params)
└─ ContainerCard (card)
   ├─ ContainerHeader (card-header)
   │  ├─ Visible: CardTitle <> "" OR BadgeText <> ""
   │  ├─ TextTitle (CardTitle, card-title)
   │  └─ IfBadge (Condition: BadgeText <> "")
   │     └─ True: BadgeBlock o TextBadge
   ├─ ContainerBody (card-body)
   │  └─ PlaceholderBody
   └─ ContainerFooter (card-footer)
      └─ Visible: ShowFooter
      └─ PlaceholderFooter
```

---

### Paso 12: Guardar

Presiona **Ctrl + S**

---

### Paso 13: Agregar CSS al Theme

Verifica que estas clases existan en ArcaOSTheme. Si no, agrégalas:

```css
/* Card */
.card {
    background-color: var(--color-neutral-0);
    border-radius: var(--border-radius-rounded);
    box-shadow: var(--shadow-m);
    overflow: hidden;
    display: flex;
    flex-direction: column;
}

.card-header {
    padding: var(--space-base) var(--space-l);
    border-bottom: 1px solid var(--color-neutral-2);
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: var(--space-base);
}

.card-title {
    font-size: var(--font-size-l);
    font-weight: 700;
    color: var(--color-neutral-9);
    margin: 0;
}

.card-body {
    padding: var(--space-l);
    flex: 1;
}

.card-footer {
    padding: var(--space-base) var(--space-l);
    border-top: 1px solid var(--color-neutral-2);
    background-color: var(--color-neutral-0-5);
    display: flex;
    justify-content: flex-end;
    gap: var(--space-s);
}
```

---

### Paso 14: Crear Screen de Prueba

1. Right-click en MainFlow → **Add Screen** → **Empty**
2. Name: `TestCardsScreen`
3. Click "Create Screen"

---

### Paso 15: Configurar Screen

1. Selecciona TestCardsScreen (raíz)
2. Style Classes: `padding-xl bg-neutral-1`

3. Drag & Drop **Text**
4. Text: `Ejemplos de Cards`
5. Style Classes: `font-size-2xl font-bold margin-bottom-l`

6. Drag & Drop **Container**
7. Style Classes: `display-flex gap-16 flex-wrap`

---

### Paso 16: Usar CardBlock - Card Simple

**Cómo usar un block con Placeholder:**

1. En Toolbox → Blocks
2. Drag & Drop **CardBlock** DENTRO del Container
3. En Properties:
   - **CardTitle**: `"Usuario Activo"`
   - **BadgeText**: `"ONLINE"`
   - **BadgeType**: `"success"`
   - **ShowFooter**: `False`

**Ahora vamos a llenar el Placeholder:**

4. En el árbol, expande el CardBlock que agregaste
5. Verás **"PlaceholderBody"** en el árbol
6. Drag & Drop **Text** **DENTRO** de PlaceholderBody
7. Text: `"Juan Pérez"`
8. Style Classes: `font-size-xl font-bold margin-bottom-xs`

9. Drag & Drop otro **Text** DENTRO de PlaceholderBody
10. Text: `"juan.perez@arca.com"`
11. Style Classes: `color-neutral-6`

12. Drag & Drop otro **Text** DENTRO de PlaceholderBody
13. Text: `"Último acceso: Hoy 10:30 AM"`
14. Style Classes: `font-size-s color-neutral-5 margin-top-s`

**✅ Verificación:**
En el canvas deberías ver un card con:
- Header: "Usuario Activo" + Badge verde "ONLINE"
- Body: Información del usuario
- Sin footer

---

### Paso 17: Card con Footer

1. Drag & Drop otro **CardBlock** al Container principal
2. En Properties:
   - **CardTitle**: `"Confirmación"`
   - **BadgeText**: `""`
   - **ShowFooter**: `True`

3. En PlaceholderBody del nuevo card:
   - Drag & Drop **Text**
   - Text: `"¿Estás seguro de que deseas eliminar este usuario?"`
   - Style Classes: `color-neutral-7`

4. En **PlaceholderFooter** del card:
   - Drag & Drop **Button**
   - Text: `"Cancelar"`
   - Style Classes: `btn btn-secondary btn-normal`

   - Drag & Drop otro **Button**
   - Text: `"Eliminar"`
   - Style Classes: `btn btn-danger btn-normal`

---

### Paso 18: Card Sin Header (Solo Body)

1. Drag & Drop otro **CardBlock**
2. En Properties:
   - **CardTitle**: `""` (vacío)
   - **BadgeText**: `""`
   - **ShowFooter**: `False`

3. En PlaceholderBody:
   - Drag & Drop **Container**
   - Style Classes: `text-center`

   - Drag & Drop **Text** DENTRO del Container
   - Text: `"📊"`
   - Style Classes: `font-size-3xl margin-bottom-s`

   - Drag & Drop **Text**
   - Text: `"1,234"`
   - Style Classes: `font-size-2xl font-bold color-primary`

   - Drag & Drop **Text**
   - Text: `"Total Órdenes"`
   - Style Classes: `font-size-s color-neutral-6`

---

### Paso 19: Card con Lista

1. Drag & Drop otro **CardBlock**
2. CardTitle: `"Actividades Recientes"`
3. ShowFooter: `False`

4. En PlaceholderBody:
   - Drag & Drop **Container**
   - Style Classes: `display-flex flex-column gap-8`

   - Drag & Drop **Text** DENTRO del Container
   - Text: `"• Juan creó una orden"`
   - Style Classes: `color-neutral-7`

   - Drag & Drop **Text**
   - Text: `"• María actualizó un cliente"`

   - Drag & Drop **Text**
   - Text: `"• Pedro eliminó un producto"`

---

### Paso 20: Publicar y Ver Resultado

1. Presiona **F5**
2. Click en **"Open in Browser"**

**✅ Verificación del Resultado:**

Deberías ver 4 cards:

1. **Card de Usuario:**
   - [ ] Header con título "Usuario Activo"
   - [ ] Badge verde "ONLINE"
   - [ ] Información del usuario en el body
   - [ ] Sin footer

2. **Card de Confirmación:**
   - [ ] Header con título "Confirmación"
   - [ ] Texto de confirmación
   - [ ] Footer con botones "Cancelar" y "Eliminar"

3. **Card de Métrica:**
   - [ ] Sin header
   - [ ] Emoji, número grande, y texto descriptivo centrados

4. **Card de Lista:**
   - [ ] Header con título "Actividades Recientes"
   - [ ] Lista de actividades con bullets

---

## ✅ Testing Completo

### Test 1: Header Condicional

1. Crea un CardBlock con:
   - CardTitle: `""`
   - BadgeText: `""`
2. Publica (F5)
3. ¿El header NO se muestra? ✅

4. Cambia CardTitle a `"Título"`
5. ¿Ahora SÍ se muestra el header? ✅

---

### Test 2: Footer Condicional

1. Crea un CardBlock con ShowFooter: `False`
2. ¿No se ve el footer? ✅

3. Cambia a ShowFooter: `True`
4. ¿Ahora se ve el footer? ✅

---

### Test 3: Badge Condicional

1. CardBlock con BadgeText: `""`
2. ¿No se ve badge? ✅

3. Cambia a BadgeText: `"NUEVO"`
4. ¿Aparece el badge? ✅

---

### Test 4: Contenido Flexible en Placeholder

1. En un CardBlock, agrega en PlaceholderBody:
   - Tabla (Table Records)
   - Formulario (Form con inputs)
   - Imagen
   - Cualquier combinación de widgets
2. ¿Todo funciona correctamente? ✅

---

## 🐛 Errores Comunes

### Error 1: No Puedo Agregar Contenido al Placeholder

**Síntoma:** Intento drag & drop algo al PlaceholderBody pero no me deja.

**Causa:** Estás intentando agregar contenido en la definición del block, no en su uso.

**Solución:**
1. Ve a una **Screen** (no al CardBlock)
2. Agrega un CardBlock a la screen
3. En el árbol de la screen, expande el CardBlock
4. Ahora SÍ puedes drag & drop dentro de PlaceholderBody

---

### Error 2: Header Siempre Se Ve Aunque Esté Vacío

**Causa:** La expresión de Visible está mal.

**Solución:**
1. En CardBlock, selecciona ContainerHeader
2. Properties → Visible → Click en "..."
3. Verifica: `CardTitle <> "" OR BadgeText <> ""`
4. Guarda y publica

---

### Error 3: Badge Muestra "BadgeText" Literal

**Causa:** Olvidaste vincular el Text del badge al Input Parameter.

**Solución:**
1. En CardBlock, selecciona el Text del badge (dentro del If)
2. Properties → Text → Click en "..."
3. Escribe: `BadgeText` (sin comillas)
4. Guarda

---

### Error 4: Card No Tiene Sombra ni Bordes Redondeados

**Causa:** Falta el CSS de `.card` o la clase no está aplicada.

**Solución:**
1. Verifica que ContainerCard tiene Style Classes: `card`
2. Verifica que el CSS del Paso 13 está en ArcaOSTheme
3. Guarda y publica

---

## 🚀 Mejoras Opcionales

### Mejora 1: Card Clickeable

Haz que todo el card sea un link:

1. Agrega Input Parameter: `OnClickDestination` (Screen, optional)
2. Envuelve ContainerCard en un **If**:
   - Condition: `OnClickDestination <> NullIdentifier()`
   - True: **Link** con Destination = OnClickDestination
     - Dentro: Todo el contenido del card
   - False: Container normal

Agrega CSS:
```css
.card-link {
    text-decoration: none;
    transition: transform var(--duration-base) var(--easing-ease);
}
.card-link:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-xl);
}
```

---

### Mejora 2: Card con Ícono en Header

Agrega Input Parameter `IconClass`:

1. En ContainerHeader, antes del TextTitle:
   - **If** con Condition: `IconClass <> ""`
   - True: Container con clase del ícono

CSS:
```css
.card-icon {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--arca-red-light);
    color: var(--arca-red);
    border-radius: 50%;
    font-size: 20px;
}
```

---

### Mejora 3: Card Expandible/Colapsable

Agrega funcionalidad de colapsar:

1. Agrega Input Parameter: `IsCollapsible` (Boolean)
2. En la screen, crea Local Variable: `IsExpanded` (Boolean, default True)
3. En ContainerHeader, agrega botón de toggle (▼/▲)
4. En ContainerBody:
   - Visible: `IsExpanded OR NOT IsCollapsible`

On Click del botón:
```
Assign: IsExpanded = NOT IsExpanded
```

---

### Mejora 4: Card con Loading State

Agrega Input Parameter `IsLoading`:

1. En ContainerBody, agrega **If**:
   - Condition: `IsLoading`
   - True: Muestra spinner o skeleton loader
   - False: Muestra PlaceholderBody normal

---

## 💡 Casos de Uso Reales

### Ejemplo 1: Dashboard de Métricas

```
Container (display-flex gap-16)
├─ CardBlock
│  ├─ CardTitle: "Ventas Hoy"
│  ├─ BadgeText: "+12%"
│  ├─ BadgeType: "success"
│  └─ PlaceholderBody:
│     ├─ Text: "$124,500" (font-size-2xl font-bold)
│     └─ Text: "vs $111,200 ayer" (font-size-s color-neutral-6)
├─ CardBlock (Órdenes Pendientes)
└─ CardBlock (Usuarios Activos)
```

### Ejemplo 2: Lista de Productos

```
CardBlock
├─ CardTitle: Product.Name
├─ BadgeText: Product.Stock < 10 ? "BAJO STOCK" : ""
├─ BadgeType: "warning"
├─ ShowFooter: True
├─ PlaceholderBody:
│  ├─ Image: Product.ImageURL
│  ├─ Text: Product.Description
│  └─ Text: "$" + Product.Price
└─ PlaceholderFooter:
   ├─ Button: "Editar"
   └─ Button: "Eliminar"
```

### Ejemplo 3: Modal de Confirmación

```
CardBlock
├─ CardTitle: "Confirmar Acción"
├─ BadgeText: ""
├─ ShowFooter: True
├─ PlaceholderBody:
│  └─ Text: "Esta acción no se puede deshacer..."
└─ PlaceholderFooter:
   ├─ Button: "Cancelar" (OnClick: CloseModal)
   └─ Button: "Confirmar" (OnClick: ExecuteAction)
```

---

## 📚 Recursos Relacionados

**Componentes Previos:**
- [LogoBlock.md](LogoBlock.md) - Logo ARCA.OS
- [BadgeBlock.md](BadgeBlock.md) - Badge de estado
- [ButtonBlock.md](ButtonBlock.md) - Botón reusable
- [ButtonGroupBlock.md](ButtonGroupBlock.md) - Grupo de botones
- [InputGroupBlock.md](InputGroupBlock.md) - Input con label

**Próximos Componentes:**
- [MetricCardBlock.md](MetricCardBlock.md) - Card especializado en métricas
- [HeaderBlock.md](HeaderBlock.md) - Header completo

**Componentes que Usan CardBlock:**
- [DashboardScreen.md](../screens/DashboardScreen.md) - Dashboard con cards
- [UserManagementScreen.md](../screens/UserManagementScreen.md) - Gestión usuarios

**Documentación OutSystems:**
- [Placeholders](https://success.outsystems.com/Documentation/11/Developing_an_Application/Design_UI/Reuse_UI/Create_and_Reuse_Screen_Blocks#placeholders)
- [If Widget](https://success.outsystems.com/Documentation/11/Reference/OutSystems_Language/Web_Interfaces/Designing_Screens/If_Widget)

---

## 🎓 Lo Que Aprendiste

- ✅ Crear blocks con Placeholders
- ✅ Usar Placeholders para contenido flexible
- ✅ Crear layouts con header, body, footer
- ✅ Ocultar/mostrar secciones condicionalmente
- ✅ Usar If widget para contenido condicional
- ✅ Crear componentes de layout reutilizables
- ✅ Combinar múltiples blocks (CardBlock + BadgeBlock)
- ✅ Estructurar contenido semánticamente

**Tiempo invertido:** ~30 minutos
**Nivel de dificultad:** ⭐⭐ Intermedio

---

👉 Continúa con: [MainLayout.md](../layouts/MainLayout.md)

---

**© 2026 Digital Process Automation (DPA) - Arca Continental**
