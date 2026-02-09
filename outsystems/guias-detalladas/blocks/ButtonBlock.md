# ButtonBlock - Botón Reusable con Variantes

## 📸 Resultado Final

```
┌─────────────┐  ┌─────────────┐  ┌─────────────┐
│   Guardar   │  │   Guardar   │  │   Guardar   │
└─────────────┘  └─────────────┘  └─────────────┘
   (rojo)         (outline)         (gris claro)
   primary        secondary         light
```

**Características:**
- Botón con texto personalizable
- Múltiples variantes (primary, secondary, success, danger, etc.)
- Tamaños ajustables (small, normal, large)
- Icono opcional
- Reusable en cualquier screen

---

## 🎯 Objetivo

Crear un Web Block parametrizado que muestre botones con diferentes estilos. El botón cambiará de color y estilo automáticamente según los parámetros que le pasemos.

**Casos de uso:**
- Botones de formularios (Guardar, Cancelar, Eliminar)
- Botones de acciones (Nuevo, Editar, Ver detalle)
- Botones de navegación
- Cualquier acción clickeable

---

## 📋 Requisitos Previos

- ✅ Theme ARCA.OS instalado
- ✅ Conocimiento de Web Blocks ([Ver LogoBlock](LogoBlock.md))
- ✅ Conocimiento de Input Parameters ([Ver BadgeBlock](BadgeBlock.md))

---

## 🧱 Widgets Necesarios

- **Button** x1

---

## 📐 Estructura del Widget Tree

```
ButtonBlock (Web Block)
├─ Input Parameters
│  ├─ ButtonText (Text) - Texto del botón
│  ├─ ButtonType (Text) - Tipo: "primary", "secondary", "success", etc.
│  ├─ ButtonSize (Text) - Tamaño: "normal", "small", "large"
│  ├─ IsDisabled (Boolean) - Deshabilitado
│  └─ OnClickDestination (Screen) - Destino al hacer click
└─ ButtonMain
   └─ Style Classes: "btn btn-" + ButtonType + " btn-" + ButtonSize
   └─ Text: ButtonText
   └─ Enabled: NOT IsDisabled
```

---

## 🔨 Paso a Paso

### Paso 1: Crear el Web Block

1. Abre **Service Studio**
2. En **Interface** tab → **MainFlow**
3. Right-click → **Add Web Block**
4. Name: `ButtonBlock`
5. Presiona Enter

---

### Paso 2: Crear Input Parameters

Vamos a crear 5 Input Parameters para personalizar el botón.

**Crear ButtonText (obligatorio):**

1. En el árbol de ButtonBlock, expande "ButtonBlock"
2. Right-click en **"Input Parameters"** → **"Add Input Parameter"**
3. Name: `ButtonText`
4. Data Type: `Text`
5. Is Mandatory: `Yes`
6. Description: `Texto a mostrar en el botón`

**Crear ButtonType (opcional):**

1. Right-click en "Input Parameters" → "Add Input Parameter"
2. Name: `ButtonType`
3. Data Type: `Text`
4. Is Mandatory: `No`
5. Default Value: `"primary"` (con comillas)
6. Description: `Tipo: primary, secondary, success, danger, warning, info, light, dark`

**Crear ButtonSize (opcional):**

1. Right-click en "Input Parameters" → "Add Input Parameter"
2. Name: `ButtonSize`
3. Data Type: `Text`
4. Is Mandatory: `No`
5. Default Value: `"normal"` (con comillas)
6. Description: `Tamaño: small, normal, large`

**Crear IsDisabled (opcional):**

1. Right-click en "Input Parameters" → "Add Input Parameter"
2. Name: `IsDisabled`
3. Data Type: `Boolean`
4. Is Mandatory: `No`
5. Default Value: `False`
6. Description: `Si está deshabilitado`

**Crear OnClickDestination (opcional):**

1. Right-click en "Input Parameters" → "Add Input Parameter"
2. Name: `OnClickDestination`
3. Data Type: **Screen**
4. Is Mandatory: `No`
5. Description: `Pantalla a la que navega al hacer click`

**✅ Verificación:**
En el árbol deberías ver:
```
ButtonBlock
└─ Input Parameters
   ├─ ButtonText
   ├─ ButtonType
   ├─ ButtonSize
   ├─ IsDisabled
   └─ OnClickDestination
```

---

### Paso 3: Agregar el Button Widget

1. En el Toolbox, busca **"Button"**
2. Drag & Drop Button al canvas de ButtonBlock
3. Con el Button seleccionado, ve a Properties:
   - **Name**: `ButtonMain`
   - **Text**: Click en **"..."** (botón de expresión)

4. Se abrirá el **Expression Editor**
5. Escribe: `ButtonText`
6. Click **"Done"**

**¿Qué hicimos?**
Le dijimos al Button que muestre el valor del Input Parameter `ButtonText`.

---

### Paso 4: Configurar las Style Classes Dinámicas

Las clases CSS deben cambiar según `ButtonType` y `ButtonSize`.

1. Con ButtonMain seleccionado, ve a Properties
2. En **"Style Classes"**, click en **"..."** (botón de expresión)
3. Escribe exactamente:

```
"btn btn-" + ButtonType + " btn-" + ButtonSize
```

4. Click **"Done"**

**¿Qué hace esto?**
Construye la clase CSS dinámicamente:
- Si ButtonType = "primary" y ButtonSize = "normal" → "btn btn-primary btn-normal"
- Si ButtonType = "secondary" y ButtonSize = "small" → "btn btn-secondary btn-small"

---

### Paso 5: Configurar el Estado Enabled

Queremos que el botón se deshabilite según `IsDisabled`.

1. Con ButtonMain seleccionado, ve a Properties
2. En **"Enabled"**, click en **"..."** (botón de expresión)
3. Escribe: `NOT IsDisabled`
4. Click **"Done"**

**¿Qué hace esto?**
- Si IsDisabled = False → Enabled = True (botón habilitado)
- Si IsDisabled = True → Enabled = False (botón deshabilitado)

---

### Paso 6: Configurar el Destination (Navegación)

Si queremos que el botón navegue a otra pantalla:

1. Con ButtonMain seleccionado, ve a Properties
2. En **"On Click"**, verás un dropdown que dice "(none)"
3. **NO LO TOQUES TODAVÍA** - Lo configuraremos cuando lo usemos

**Nota:** El Destination se configura cuando uses el ButtonBlock en tu screen, pasándole el parámetro `OnClickDestination`.

---

### Paso 7: Guardar

Presiona **Ctrl + S** (Windows) o **Cmd + S** (Mac)

---

### Paso 8: Verificar CSS del Theme

El CSS de los botones ya debería estar en tu theme ARCA.OS. Verifica:

1. Interface → Themes → ArcaOSTheme
2. Busca en Style Sheet las clases `.btn`, `.btn-primary`, `.btn-secondary`, etc.
3. Si NO están, agrega al final:

```css
/* Buttons */
.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-family: var(--font-primary);
    font-weight: 600;
    border-radius: var(--border-radius-rounded);
    border: 2px solid transparent;
    cursor: pointer;
    transition: all var(--duration-base) var(--easing-ease);
    text-decoration: none;
}

.btn-normal {
    padding: 12px 24px;
    font-size: var(--font-size-base);
}

.btn-small {
    padding: 8px 16px;
    font-size: var(--font-size-s);
}

.btn-large {
    padding: 16px 32px;
    font-size: var(--font-size-l);
}

.btn-primary {
    background-color: var(--arca-red);
    border-color: var(--arca-red);
    color: var(--color-neutral-0);
}

.btn-primary:hover {
    background-color: var(--arca-red-dark);
    border-color: var(--arca-red-dark);
    box-shadow: var(--shadow-button-primary-hover);
}

.btn-secondary {
    background-color: transparent;
    border-color: var(--arca-red);
    color: var(--arca-red);
}

.btn-secondary:hover {
    background-color: var(--arca-red-light);
}

.btn-success {
    background-color: var(--color-success);
    border-color: var(--color-success);
    color: var(--color-neutral-0);
}

.btn-danger {
    background-color: var(--color-error);
    border-color: var(--color-error);
    color: var(--color-neutral-0);
}

.btn-warning {
    background-color: var(--color-warning);
    border-color: var(--color-warning);
    color: var(--color-neutral-9);
}

.btn-light {
    background-color: var(--color-neutral-1);
    border-color: var(--color-neutral-3);
    color: var(--color-neutral-9);
}

.btn-light:hover {
    background-color: var(--color-neutral-2);
}

.btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}
```

---

### Paso 9: Crear Screen de Prueba

1. Right-click en MainFlow → **Add Screen** → **Empty**
2. Name: `TestButtonsScreen`
3. Click "Create Screen"

---

### Paso 10: Agregar Padding y Título

1. Selecciona "TestButtonsScreen" (nodo raíz)
2. Properties → Style Classes: `padding-xl`
3. Drag & Drop **Text** al canvas
4. Text: `Ejemplos de Botones`
5. Style Classes: `font-size-2xl font-bold margin-bottom-l`

---

### Paso 11: Usar el ButtonBlock - Botón Primary

1. En el Toolbox, cambia a **"Blocks"**
2. Busca **"ButtonBlock"**
3. Drag & Drop ButtonBlock al canvas
4. Con el ButtonBlock seleccionado, ve a Properties
5. Configura Input Parameters:
   - **ButtonText**: `"Guardar"` (con comillas)
   - **ButtonType**: `"primary"` (con comillas)
   - **ButtonSize**: `"normal"` (con comillas)
   - **IsDisabled**: `False`
   - **OnClickDestination**: (déjalo vacío por ahora)

---

### Paso 12: Agregar Más Botones de Ejemplo

**Botón Secondary:**
- Drag & Drop ButtonBlock
- ButtonText: `"Cancelar"`
- ButtonType: `"secondary"`
- ButtonSize: `"normal"`

**Botón Success:**
- Drag & Drop ButtonBlock
- ButtonText: `"Completar"`
- ButtonType: `"success"`
- ButtonSize: `"normal"`

**Botón Danger:**
- Drag & Drop ButtonBlock
- ButtonText: `"Eliminar"`
- ButtonType: `"danger"`
- ButtonSize: `"normal"`

**Botón Warning:**
- Drag & Drop ButtonBlock
- ButtonText: `"Advertencia"`
- ButtonType: `"warning"`
- ButtonSize: `"normal"`

**Botón Light:**
- Drag & Drop ButtonBlock
- ButtonText: `"Ver Más"`
- ButtonType: `"light"`
- ButtonSize: `"normal"`

---

### Paso 13: Agregar Botones de Diferentes Tamaños

**Botón Small:**
- Drag & Drop ButtonBlock
- ButtonText: `"Pequeño"`
- ButtonType: `"primary"`
- ButtonSize: `"small"`

**Botón Large:**
- Drag & Drop ButtonBlock
- ButtonText: `"Grande"`
- ButtonType: `"primary"`
- ButtonSize: `"large"`

---

### Paso 14: Agregar Botón Deshabilitado

- Drag & Drop ButtonBlock
- ButtonText: `"Deshabilitado"`
- ButtonType: `"primary"`
- ButtonSize: `"normal"`
- **IsDisabled**: `True`

---

### Paso 15: Envolver en Container con Gap (Opcional)

Para que los botones no estén pegados:

1. Drag & Drop **Container** al canvas
2. Style Classes: `display-flex gap-8 flex-wrap`
3. Mueve todos los ButtonBlocks **DENTRO** del Container
   - Selecciona cada button, Ctrl+X (cortar)
   - Selecciona el Container
   - Ctrl+V (pegar)

---

### Paso 16: Publicar y Ver Resultado

1. Presiona **F5**
2. Espera a que termine la publicación
3. Click en **"Open in Browser"**

**✅ Verificación del Resultado:**

Deberías ver botones con:
- [ ] **Guardar** (rojo sólido)
- [ ] **Cancelar** (outline rojo)
- [ ] **Completar** (verde)
- [ ] **Eliminar** (rojo intenso)
- [ ] **Advertencia** (naranja)
- [ ] **Ver Más** (gris claro)
- [ ] **Pequeño** (tamaño reducido)
- [ ] **Grande** (tamaño aumentado)
- [ ] **Deshabilitado** (opaco, no clickeable)

---

## ✅ Testing Completo

### Test 1: Hover Effects

1. Pasa el mouse sobre cada botón
2. ¿Cambian de color? ✅
3. ¿Aparece sombra en primary? ✅

---

### Test 2: Estado Deshabilitado

1. Intenta hacer click en el botón "Deshabilitado"
2. ¿No responde? ✅
3. ¿Se ve opaco? ✅

---

### Test 3: Navegación con Destination

Vamos a crear una segunda screen para probar navegación:

1. Crea nueva Screen: `TestDestinationScreen`
2. Agrega un Text: `"¡Navegación exitosa!"`
3. Vuelve a TestButtonsScreen
4. Agrega un ButtonBlock nuevo:
   - ButtonText: `"Ir a Otra Pantalla"`
   - ButtonType: `"primary"`
   - OnClickDestination: Click en "..." → Selecciona `TestDestinationScreen`
5. Publica (F5)
6. Click en el botón "Ir a Otra Pantalla"
7. ¿Te lleva a la otra screen? ✅

---

### Test 4: Botón con Variable Dinámica

1. En TestButtonsScreen, crea Local Variable:
   - Name: `TextoDinamico`
   - Data Type: `Text`
   - Default Value: `"Texto Dinámico"`
2. Drag & Drop ButtonBlock
3. ButtonText: Click en "..." → Escribe: `TextoDinamico`
4. ButtonType: `"info"`
5. Publica (F5)
6. ¿El botón muestra "Texto Dinámico"? ✅

---

## 🐛 Errores Comunes

### Error 1: Botón Sin Estilo

**Síntoma:** El botón se ve como botón por defecto de OutSystems (sin colores ARCA.OS).

**Causa:** La expresión de Style Classes está mal o falta CSS.

**Solución:**
1. Selecciona ButtonMain en ButtonBlock
2. Properties → Style Classes
3. Verifica que dice: `"btn btn-" + ButtonType + " btn-" + ButtonSize`
4. Verifica que el CSS esté en ArcaOSTheme (Paso 8)

---

### Error 2: Botón No Navega

**Síntoma:** Al hacer click no pasa nada.

**Causa:** No configuraste OnClickDestination.

**Solución:**
1. Selecciona el ButtonBlock en tu screen
2. Properties → Input Parameters → OnClickDestination
3. Click en "..." → Selecciona la screen de destino
4. Publica (F5)

---

### Error 3: Botón Se Ve Habilitado Pero No Hace Click

**Síntoma:** El botón se ve normal pero no responde.

**Causa:** La expresión de Enabled está mal.

**Solución:**
1. En ButtonBlock, selecciona ButtonMain
2. Properties → Enabled → Click en "..."
3. Verifica que dice: `NOT IsDisabled`
4. Guarda y publica

---

### Error 4: Tamaño No Cambia

**Síntoma:** Todos los botones se ven del mismo tamaño.

**Causa:** Falta la clase btn-small o btn-large en el CSS.

**Solución:**
1. Ve a Themes → ArcaOSTheme
2. Agrega el CSS del Paso 8 (sección de tamaños)
3. Guarda y publica

---

## 🚀 Mejoras Opcionales

### Mejora 1: Botón con Ícono

Agrega un Input Parameter para ícono:

1. Add Input Parameter: `IconClass`
2. Data Type: `Text`
3. Is Mandatory: `No`
4. Default Value: `""`

En ButtonBlock:
1. Drag & Drop **If** widget antes del Button Text
2. Condition: `IconClass <> ""`
3. True branch:
   - Agrega un **Icon** widget (o Container con clase de ícono)
   - Style Classes: usar `IconClass`
4. Envuelve el Button text y el If en un Container
5. Style Classes del container: `display-flex gap-8 align-center`

Uso:
```
ButtonBlock(
    ButtonText: "Guardar",
    ButtonType: "primary",
    IconClass: "fa fa-save"
)
```

---

### Mejora 2: Botón Full Width

Agrega Input Parameter `IsFullWidth`:

1. Add Input Parameter: `IsFullWidth`
2. Data Type: `Boolean`
3. Default Value: `False`

Modifica Style Classes del Button:
```
"btn btn-" + ButtonType + " btn-" + ButtonSize +
If(IsFullWidth, " width-full", "")
```

Agrega CSS:
```css
.width-full {
    width: 100%;
}
```

---

### Mejora 3: Botón con Loading State

Agrega Input Parameter `IsLoading`:

1. Add Input Parameter: `IsLoading`
2. Data Type: `Boolean`
3. Default Value: `False`

En ButtonBlock, agrega un **If**:
- Condition: `IsLoading`
- True: Muestra spinner (Animated GIF o CSS animation)
- False: Muestra ButtonText normal

Deshabilita el botón si está loading:
```
Enabled: NOT IsDisabled AND NOT IsLoading
```

---

## 💡 Casos de Uso Reales

### Ejemplo 1: Formulario con Guardar y Cancelar

```
Container (display-flex gap-8)
├─ ButtonBlock
│  ├─ ButtonText: "Cancelar"
│  ├─ ButtonType: "secondary"
│  └─ OnClickDestination: ListScreen
└─ ButtonBlock
   ├─ ButtonText: "Guardar"
   ├─ ButtonType: "primary"
   └─ On Click: (Server Action - SaveForm)
```

### Ejemplo 2: Confirmación de Eliminación

```
ButtonBlock(
    ButtonText: "Eliminar Usuario",
    ButtonType: "danger",
    OnClickDestination: ConfirmDeletePopup
)
```

### Ejemplo 3: Botón Condicional

```
ButtonBlock(
    ButtonText: If(Order.IsPaid, "Ver Detalles", "Pagar Ahora"),
    ButtonType: If(Order.IsPaid, "light", "primary"),
    IsDisabled: Order.IsCancelled
)
```

---

## 📚 Recursos Relacionados

**Componentes Previos:**
- [LogoBlock.md](LogoBlock.md) - Logo ARCA.OS
- [BadgeBlock.md](BadgeBlock.md) - Badge de estado

**Próximos Componentes:**
- [ButtonGroupBlock.md](ButtonGroupBlock.md) - Grupo Cancelar/Guardar
- [InputGroupBlock.md](InputGroupBlock.md) - Input con botón

**Componentes que Usan ButtonBlock:**
- [HeaderBlock.md](HeaderBlock.md) - Botón "Nuevo"
- [FormWithValidation.md](../screens/FormWithValidation.md) - Botones de form
- [DashboardScreen.md](../screens/DashboardScreen.md) - Botones de acción

**Documentación OutSystems:**
- [Button Widget](https://success.outsystems.com/Documentation/11/Reference/OutSystems_Language/Web_Interfaces/Designing_Screens/Button_Widget)
- [Navigation](https://success.outsystems.com/Documentation/11/Developing_an_Application/Design_UI/Navigate_Between_Screens)

---

## 🎓 Lo Que Aprendiste

- ✅ Crear botones parametrizados con variantes
- ✅ Usar múltiples Input Parameters (5 parámetros)
- ✅ Expresiones con concatenación múltiple
- ✅ Configurar Enabled con expresión NOT
- ✅ Configurar navegación con OnClickDestination
- ✅ Crear botones con diferentes tamaños
- ✅ Deshabilitar botones condicionalmente
- ✅ Aplicar estilos hover y estados

**Tiempo invertido:** ~25 minutos
**Nivel de dificultad:** ⭐⭐ Principiante-Intermedio

---

👉 Continúa con: [ButtonGroupBlock.md](ButtonGroupBlock.md)

---

**© 2026 Digital Process Automation (DPA) - Arca Continental**
