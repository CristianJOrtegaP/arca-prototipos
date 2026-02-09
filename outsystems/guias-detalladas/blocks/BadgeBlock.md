# BadgeBlock - Badge de Estado con Parámetros

## 📸 Resultado Final

```
┌───────────┐  ┌──────────────┐  ┌────────────┐
│  ACTIVO   │  │  PENDIENTE   │  │  INACTIVO  │
└───────────┘  └──────────────┘  └────────────┘
  (verde)         (naranja)         (rojo)
```

**Características:**
- Badge con texto personalizable
- Color según tipo (success, warning, danger, etc.)
- Tamaño compacto
- Reusable en tablas, cards, listas

---

## 🎯 Objetivo

Crear un Web Block parametrizado que muestre badges de estado. El badge cambiará de color automáticamente según el tipo que le pasemos.

**Casos de uso:**
- Estados de órdenes (Activo, Pendiente, Completado)
- Estados de usuarios (Online, Offline, Away)
- Prioridades (Alta, Media, Baja)
- Cualquier estado categórico

---

## 📋 Requisitos Previos

- ✅ Theme ARCA.OS instalado
- ✅ Conocimiento de Web Blocks ([Ver LogoBlock](LogoBlock.md))
- ✅ Conocimiento de Input Parameters

---

## 🧱 Widgets Necesarios

- **Text** x1

---

## 📐 Estructura del Widget Tree

```
BadgeBlock (Web Block)
├─ Input Parameters
│  ├─ BadgeText (Text) - El texto a mostrar
│  └─ BadgeType (Text) - Tipo: "primary", "success", "warning", "danger"
└─ TextBadge
   └─ Style Classes: "badge badge-" + BadgeType
   └─ Text: BadgeText
```

---

## 🔨 Paso a Paso

### Paso 1: Crear el Web Block

1. Abre Service Studio
2. En **Interface** tab → **MainFlow**
3. Right-click → **Add Web Block**
4. Name: `BadgeBlock`
5. Presiona Enter

---

### Paso 2: Crear Input Parameters

**¿Qué son los Input Parameters?**
Son como "variables de entrada" que le pasas al block cuando lo usas. Permiten personalizar el block sin tener que crear múltiples copias.

**Crear BadgeText:**

1. En el árbol de BadgeBlock, expande "BadgeBlock"
2. Verás una carpeta **"Input Parameters"**
3. Right-click en "Input Parameters" → **"Add Input Parameter"**
4. Se creará "InputParameter1"
5. Con InputParameter1 seleccionado, ve a Properties:
   - **Name**: `BadgeText`
   - **Data Type**: `Text`
   - **Is Mandatory**: `Yes`
   - **Description**: `Texto a mostrar en el badge`
6. Presiona Enter

**Crear BadgeType:**

1. Right-click en "Input Parameters" → **"Add Input Parameter"**
2. Con el nuevo parameter seleccionado, ve a Properties:
   - **Name**: `BadgeType`
   - **Data Type**: `Text`
   - **Is Mandatory**: `No`
   - **Default Value**: `"primary"` (con comillas)
   - **Description**: `Tipo de badge: primary, success, warning, danger, info, light`
3. Presiona Enter

**✅ Verificación:**
En el árbol deberías ver:
```
BadgeBlock
└─ Input Parameters
   ├─ BadgeText
   └─ BadgeType
```

---

### Paso 3: Agregar el Text Widget

1. En el Toolbox, busca **"Text"**
2. Drag & Drop Text al canvas de BadgeBlock
3. Con el Text seleccionado, ve a Properties:
   - **Name**: `TextBadge`
   - **Text**: Click en **"..."** (botón de expresión)

4. Se abrirá el **Expression Editor**
5. Borra cualquier contenido
6. Escribe: `BadgeText`
7. Click **"Done"**

**¿Qué hicimos?**
Le dijimos al Text que muestre el valor del Input Parameter `BadgeText`.

---

### Paso 4: Configurar las Style Classes Dinámicas

Ahora viene la parte importante: las clases CSS deben cambiar según `BadgeType`.

1. Con TextBadge seleccionado, ve a Properties
2. En **"Style Classes"**, click en **"..."** (botón de expresión)
3. Se abrirá el Expression Editor
4. Escribe exactamente:

```
"badge badge-" + BadgeType
```

5. Click **"Done"**

**¿Qué hace esto?**
Construye la clase CSS dinámicamente:
- Si BadgeType = "success" → Clase final: "badge badge-success"
- Si BadgeType = "warning" → Clase final: "badge badge-warning"
- Si BadgeType = "danger" → Clase final: "badge badge-danger"

**✅ Verificación:**
En Properties → Style Classes deberías ver:
```
"badge badge-" + BadgeType
```

---

### Paso 5: Guardar

Presiona **Ctrl + S** (Windows) o **Cmd + S** (Mac)

---

### Paso 6: Crear Screen de Prueba

1. Right-click en MainFlow → **Add Screen** → **Empty**
2. Name: `TestBadgesScreen`
3. Click "Create Screen"

---

### Paso 7: Agregar Padding a la Screen

1. Selecciona "TestBadgesScreen" (nodo raíz del árbol)
2. En Properties → Style Classes: `padding-xl`

---

### Paso 8: Agregar Título

1. Drag & Drop **Text** al canvas
2. Text: `Ejemplos de Badges`
3. Style Classes: `font-size-2xl font-bold margin-bottom-l`

---

### Paso 9: Usar el BadgeBlock - Badge Success (Verde)

1. En el Toolbox, cambia a **"Blocks"** (en el selector superior)
2. Busca **"BadgeBlock"** en la lista
3. Drag & Drop BadgeBlock al canvas (debajo del título)
4. Con el BadgeBlock seleccionado, ve a Properties
5. Verás los Input Parameters:
   - **BadgeText**: Escribe `ACTIVO` (con comillas)
   - **BadgeType**: Escribe `success` (con comillas)

**✅ Verificación:**
En el árbol deberías ver:
```
TestBadgesScreen
├─ Text ("Ejemplos de Badges")
└─ BadgeBlock1
   ├─ BadgeText: "ACTIVO"
   └─ BadgeType: "success"
```

---

### Paso 10: Agregar Más Badges de Ejemplo

Repite el Paso 9 para agregar más badges:

**Badge Warning (Naranja):**
- Drag & Drop BadgeBlock
- BadgeText: `PENDIENTE`
- BadgeType: `warning`

**Badge Danger (Rojo):**
- Drag & Drop BadgeBlock
- BadgeText: `INACTIVO`
- BadgeType: `danger`

**Badge Info (Turquesa):**
- Drag & Drop BadgeBlock
- BadgeText: `COMPLETADO`
- BadgeType: `info`

**Badge Primary (Rojo Arca):**
- Drag & Drop BadgeBlock
- BadgeText: `NUEVO`
- BadgeType: `primary`

**Badge Light (Gris):**
- Drag & Drop BadgeBlock
- BadgeText: `BORRADOR`
- BadgeType: `light`

---

### Paso 11: Agregar Espaciado (Opcional)

Para que los badges no estén pegados:

1. Selecciona cada BadgeBlock
2. En Properties → Style Classes, agrega al final: ` margin-right-s`
   - Ejemplo: `badge badge-success margin-right-s`

O mejor aún, envuélvelos en un Container:

1. Drag & Drop **Container** al canvas
2. Style Classes: `display-flex gap-8`
3. Mueve todos los BadgeBlocks **DENTRO** del Container
   - Selecciona cada badge, Ctrl+X (cortar)
   - Selecciona el Container
   - Ctrl+V (pegar)

---

### Paso 12: Publicar y Ver Resultado

1. Presiona **F5**
2. Espera a que termine la publicación
3. Click en **"Open in Browser"**

**✅ Verificación del Resultado:**

Deberías ver 6 badges:
- [ ] **ACTIVO** (verde)
- [ ] **PENDIENTE** (naranja)
- [ ] **INACTIVO** (rojo)
- [ ] **COMPLETADO** (turquesa)
- [ ] **NUEVO** (rojo Arca)
- [ ] **BORRADOR** (gris claro)

---

## ✅ Testing Completo

### Test 1: Badge con Texto Dinámico

Vamos a probar con datos de una variable:

1. En TestBadgesScreen, crea una Local Variable:
   - Right-click en "Local Variables" → Add Local Variable
   - Name: `EstadoOrden`
   - Data Type: `Text`
   - Default Value: `"EN PROCESO"`

2. Drag & Drop otro BadgeBlock
3. BadgeText: Click en "..." → Escribe: `EstadoOrden`
4. BadgeType: `"info"`

5. Publica (F5)
6. ¿El badge muestra "EN PROCESO"? ✅

---

### Test 2: Badge en una Tabla

Vamos a crear un ejemplo real con datos:

1. Crea una nueva Screen: `TestBadgeTableScreen`
2. Crea una Local Variable tipo List:
   - Name: `OrdersList`
   - Data Type: `Order` (o crea una Structure simple)
   - Con campos: `Id`, `Status`

3. Drag & Drop **Table Records** al canvas
4. En la columna Status, en lugar de un Text, usa BadgeBlock:
   - Drag & Drop BadgeBlock en la celda
   - BadgeText: `OrdersList.Current.Status`
   - BadgeType: `If(OrdersList.Current.Status = "Activo", "success", "warning")`

¿Funciona el badge en la tabla? ✅

---

## 🐛 Errores Comunes

### Error 1: Badge No Tiene Color

**Síntoma:** El badge se ve pero es gris/sin estilo.

**Causa:** La expresión de Style Classes está mal escrita.

**Solución:**
1. Selecciona TextBadge en BadgeBlock
2. Properties → Style Classes
3. Verifica que dice EXACTAMENTE: `"badge badge-" + BadgeType`
4. No debe tener espacios extra ni comillas mal puestas

---

### Error 2: Badge Muestra "BadgeText" Literalmente

**Síntoma:** El badge muestra el texto "BadgeText" en lugar del valor.

**Causa:** El campo Text del widget tiene "BadgeText" como texto literal, no como expresión.

**Solución:**
1. Selecciona TextBadge
2. Properties → Text → Click en "..."
3. Borra el contenido
4. Escribe: `BadgeText` (sin comillas)
5. Click Done

---

### Error 3: Error "BadgeText is Mandatory"

**Síntoma:** Al compilar, error diciendo que BadgeText es obligatorio.

**Causa:** Usaste el BadgeBlock pero no le pasaste valor a BadgeText.

**Solución:**
1. Selecciona el BadgeBlock en tu screen
2. Properties → Input Parameters → BadgeText
3. Escribe un valor (con comillas): `"MI TEXTO"`

---

### Error 4: Badge Muy Grande o Muy Pequeño

**Síntoma:** El tamaño del badge no se ve bien.

**Causa:** Falta la clase `badge` o el CSS del theme.

**Solución:**
1. Verifica que Style Classes empiece con "badge": `"badge badge-" + ...`
2. Verifica que el theme ARCA.OS tiene el CSS de `.badge`
3. Publica de nuevo (F5)

---

## 🚀 Mejoras Opcionales

### Mejora 1: Badge con Tamaños

Agrega un Input Parameter `Size`:

1. Add Input Parameter: `Size`
2. Data Type: `Text`
3. Default Value: `"normal"`
4. Valores posibles: "small", "normal", "large"

5. Modifica Style Classes:
```
"badge badge-" + BadgeType +
If(Size = "small", " badge-small",
   If(Size = "large", " badge-large", ""))
```

6. Agrega CSS al theme:
```css
.badge-small {
    font-size: 9px;
    padding: 2px 8px;
}
.badge-large {
    font-size: 13px;
    padding: 6px 16px;
}
```

---

### Mejora 2: Badge con Ícono

Agrega un Input Parameter `ShowIcon`:

1. Add Input Parameter: `ShowIcon`
2. Data Type: `Boolean`
3. Default Value: `False`

4. En BadgeBlock, agrega un **If** widget antes del Text:
   - Condition: `ShowIcon`
   - True branch: Agrega un **Icon** (de Font Awesome)
   - False branch: Vacío

---

### Mejora 3: Badge Clickeable

Envuelve el Text en un Link:

1. Agrega Input Parameter: `OnClickDestination` (Screen Identifier, optional)
2. Envuelve TextBadge en un **If**:
   - Condition: `OnClickDestination <> NullIdentifier()`
   - True: Link con Destination = OnClickDestination
   - False: Text solo

---

## 💡 Casos de Uso Reales

### Ejemplo 1: Estados de Orden

```
BadgeBlock(
    BadgeText: Order.Status,
    BadgeType: If(Order.Status = "Completado", "success",
                 If(Order.Status = "En Proceso", "info",
                 If(Order.Status = "Cancelado", "danger", "warning")))
)
```

### Ejemplo 2: Prioridad

```
BadgeBlock(
    BadgeText: Task.Priority,
    BadgeType: If(Task.Priority = "Alta", "danger",
                 If(Task.Priority = "Media", "warning", "success"))
)
```

### Ejemplo 3: Usuario Online/Offline

```
BadgeBlock(
    BadgeText: If(User.IsOnline, "ONLINE", "OFFLINE"),
    BadgeType: If(User.IsOnline, "success", "light")
)
```

---

## 📚 Recursos Relacionados

**Próximos Componentes:**
- [ButtonGroupBlock.md](ButtonGroupBlock.md) - Botones con eventos
- [MetricCardBlock.md](MetricCardBlock.md) - Card con badges

**Componentes que Usan BadgeBlock:**
- [TableWithFiltersBlock.md](TableWithFiltersBlock.md)
- [DashboardScreen.md](../screens/DashboardScreen.md)
- [UserManagementScreen.md](../screens/UserManagementScreen.md)

**Documentación OutSystems:**
- [Input Parameters](https://success.outsystems.com/Documentation/11/Reference/OutSystems_Language/Web_Interfaces/Designing_Screens/Input_Parameters)
- [Expressions](https://success.outsystems.com/Documentation/11/Reference/OutSystems_Language/Logic/Expressions)

---

## 🎓 Lo Que Aprendiste

- ✅ Crear Input Parameters en Web Blocks
- ✅ Usar Input Parameters obligatorios y opcionales
- ✅ Expresiones dinámicas en Style Classes
- ✅ Concatenación de strings en expresiones
- ✅ Expresiones condicionales (If)
- ✅ Usar blocks parametrizados en screens
- ✅ Pasar valores literales vs variables a blocks

**Tiempo invertido:** ~20 minutos
**Nivel de dificultad:** ⭐ Principiante

---

👉 Continúa con: [ButtonGroupBlock.md](ButtonGroupBlock.md)

---

**© 2026 Digital Process Automation (DPA) - Arca Continental**
