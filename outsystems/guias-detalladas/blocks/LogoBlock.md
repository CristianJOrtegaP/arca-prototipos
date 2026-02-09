# LogoBlock - Logo ARCA.OS Reusable

## 📸 Resultado Final

```
┌─────────────────┐
│  ARCA • OS      │  ← Logo compuesto por 3 elementos
└─────────────────┘
   ↑    ↑   ↑
 "ARCA" • "OS"
 (negro) (rojo) (negro)
```

**Características:**
- Texto "ARCA" (negro, bold)
- Punto rojo (•)
- Texto "OS" (negro, bold)
- Reutilizable en cualquier screen
- Tamaño ajustable

---

## 🎯 Objetivo

Crear un Web Block reusable que muestre el logo ARCA.OS. Este logo se podrá usar en headers, footers, sidebars, etc., sin tener que recrearlo cada vez.

---

## 📋 Requisitos Previos

- ✅ Service Studio instalado
- ✅ Tema ARCA.OS instalado ([Ver guía](../01-Setup-Inicial.md))
- ✅ Conocimiento básico de widgets ([Ver guía](../02-Widgets-Basicos.md))

---

## 🧱 Widgets Necesarios

- **Container** x2
- **Text** x2

---

## 📐 Estructura del Widget Tree

```
LogoBlock (Web Block)
└─ Container (logo)
   ├─ Text ("ARCA")
   ├─ Container (logo-dot)
   └─ Text ("OS")
```

---

## 🔨 Paso a Paso

### Paso 1: Crear el Web Block

**¿Qué es un Web Block?**
Un Web Block es como un "componente reutilizable". Lo creas una vez y lo puedes usar en muchas screens.

**Instrucciones:**

1. Abre **Service Studio**
2. Abre tu módulo (ejemplo: `MiPrimeraApp_ARCA`)
3. En la pestaña **"Interface"**, busca en el panel izquierdo (árbol)
4. Expande **"UI Flows"** → **"MainFlow"**
5. Right-click en **"MainFlow"**
6. Selecciona **"Add Web Block"**
7. Se creará un nuevo block llamado "WebBlock1"
8. Con "WebBlock1" seleccionado, ve al panel derecho (**Properties**)
9. En el campo **"Name"**, borra "WebBlock1" y escribe: `LogoBlock`
10. Presiona **Enter**

**✅ Verificación:**
- En el árbol (izquierda) deberías ver: "MainFlow" → "LogoBlock"
- En el canvas (centro) deberías ver una pantalla en blanco con el título "LogoBlock"

---

### Paso 2: Agregar el Container Principal

**¿Para qué sirve este Container?**
Agrupa los 3 elementos del logo (ARCA, •, OS) y los alinea horizontalmente.

**Instrucciones:**

1. En el **Toolbox** (panel izquierdo), busca **"Container"**
   - Tip: Usa Ctrl+F (Windows) o Cmd+F (Mac) para buscar widgets
2. **Drag & Drop** el Container al canvas (área blanca central)
3. Suelta el Container dentro de "LogoBlock"
4. Con el Container seleccionado, ve al panel derecho (**Properties**)
5. En **"Name"**, escribe: `ContainerLogo`
6. En **"Style Classes"**, escribe exactamente: `logo`
7. Presiona **Enter**

**✅ Verificación:**
- En el árbol deberías ver: "LogoBlock" → "ContainerLogo"
- El Container debe tener un borde azul indicando que está seleccionado

---

### Paso 3: Agregar el Texto "ARCA"

**Instrucciones:**

1. En el **Toolbox**, busca **"Text"**
2. **Drag & Drop** el Text **DENTRO** del Container "ContainerLogo"
   - **Importante:** Asegúrate de soltarlo DENTRO del Container, no fuera
3. Con el Text seleccionado, ve a **Properties**
4. En **"Name"**, escribe: `TextArca`
5. En **"Text"**, borra el contenido y escribe: `ARCA`
6. En **"Style Classes"**, escribe: `logo-text`
7. Presiona **Enter**

**✅ Verificación:**
- En el árbol: "ContainerLogo" → "TextArca"
- En el canvas deberías ver la palabra "ARCA"

---

### Paso 4: Agregar el Punto Rojo (Dot)

**¿Cómo hacemos un punto?**
Usaremos un Container vacío con la clase CSS `logo-dot` que ya tiene el estilo de un punto rojo.

**Instrucciones:**

1. En el **Toolbox**, busca **"Container"**
2. **Drag & Drop** el Container **DENTRO** de "ContainerLogo"
   - **Ubicación:** Debe quedar **DESPUÉS** de "TextArca"
   - Verás en el árbol: ContainerLogo → TextArca → **Container** (nuevo)
3. Con el nuevo Container seleccionado, ve a **Properties**
4. En **"Name"**, escribe: `ContainerDot`
5. En **"Style Classes"**, escribe: `logo-dot`
6. Presiona **Enter**

**✅ Verificación:**
- En el árbol: "ContainerLogo" → "TextArca" → "ContainerDot"
- En el canvas verás "ARCA" pero todavía NO verás el punto (es normal, se verá después de publicar)

---

### Paso 5: Agregar el Texto "OS"

**Instrucciones:**

1. En el **Toolbox**, busca **"Text"**
2. **Drag & Drop** el Text **DENTRO** de "ContainerLogo"
   - **Ubicación:** Debe quedar **DESPUÉS** de "ContainerDot"
   - Verás en el árbol: ContainerLogo → TextArca → ContainerDot → **Text** (nuevo)
3. Con el Text seleccionado, ve a **Properties**
4. En **"Name"**, escribe: `TextOS`
5. En **"Text"**, escribe: `OS`
6. En **"Style Classes"**, escribe: `logo-text`
7. Presiona **Enter**

**✅ Verificación Final del Widget Tree:**

```
LogoBlock
└─ ContainerLogo (logo)
   ├─ TextArca ("ARCA", logo-text)
   ├─ ContainerDot (logo-dot)
   └─ TextOS ("OS", logo-text)
```

Si tu árbol se ve así, ¡perfecto! ✅

---

### Paso 6: Guardar

**Instrucciones:**

1. Presiona **Ctrl + S** (Windows) o **Cmd + S** (Mac)
2. O click en el ícono de disquette 💾 en la barra superior

**✅ Verificación:**
- No deberías ver un asterisco (*) en el nombre del módulo en la barra superior
- Si hay asterisco, significa que hay cambios sin guardar

---

### Paso 7: Agregar CSS al Theme (Solo si no existe)

**¿Por qué este paso?**
El CSS de `logo`, `logo-text` y `logo-dot` debería estar en tu theme ARCA.OS. Si no lo está, agrégalo.

**Cómo verificar si ya existe:**

1. En el panel izquierdo, ve a **"Interface"** tab
2. Expande **"Themes"**
3. Selecciona **"ArcaOSTheme"**
4. En el panel derecho (Properties), busca **"Style Sheet"**
5. Haz scroll y busca las clases `.logo`, `.logo-text`, `.logo-dot`
6. Si las encuentras, **SALTA este paso** ✅
7. Si NO las encuentras, continúa:

**Agregar CSS:**

1. Con "ArcaOSTheme" seleccionado, en el campo Style Sheet
2. Al **FINAL** del CSS (después de todo), agrega este código:

```css
/* Logo ARCA.OS */
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

3. Presiona **Ctrl + S** para guardar

---

### Paso 8: Crear una Screen de Prueba

**¿Por qué?**
Los Web Blocks no se pueden ver directamente. Necesitas una Screen para visualizarlos.

**Instrucciones:**

1. En el árbol, right-click en **"MainFlow"**
2. Selecciona **"Add Screen"**
3. Selecciona **"Empty"**
4. En **"Screen name"**, escribe: `TestLogoScreen`
5. Click **"Create Screen"**
6. Se abrirá la nueva screen en el canvas

---

### Paso 9: Usar el LogoBlock en la Screen

**Instrucciones:**

1. En el **Toolbox**, en la parte superior, cambia de "Widgets" a **"Blocks"**
   - Verás una lista de tus Web Blocks disponibles
2. Busca **"LogoBlock"** en la lista
3. **Drag & Drop** LogoBlock al canvas de "TestLogoScreen"
4. Suéltalo en el área blanca

**✅ Verificación:**
- En el árbol de TestLogoScreen deberías ver: "TestLogoScreen" → "LogoBlock"
- En el canvas verás el texto "ARCA" "OS" (el punto aún no se ve)

---

### Paso 10: Agregar Padding (Opcional pero Recomendado)

Para ver mejor el logo, vamos a agregar padding a la screen:

1. En el árbol de TestLogoScreen, selecciona "TestLogoScreen" (el nodo raíz)
2. En Properties → **"Style Classes"**, escribe: `padding-xl`
3. Presiona Enter

---

### Paso 11: Publicar y Ver el Resultado

**Instrucciones:**

1. Presiona **F5** (o click en "1-Click Publish" en la barra superior)
2. Verás una ventana con el progreso de la publicación
3. Espera a que termine (1-2 minutos)
4. Cuando termine, verás el mensaje "Published successfully"
5. Click en **"Open in Browser"** (o el botón verde)
6. Tu navegador abrirá la screen

**✅ Verificación del Resultado:**

Deberías ver:
- ✅ Texto "ARCA" en negro, negrita
- ✅ Un punto rojo (•) entre ARCA y OS
- ✅ Texto "OS" en negro, negrita
- ✅ Los 3 elementos alineados horizontalmente
- ✅ Espaciado uniforme entre ellos

**Si NO ves el punto rojo:**
- Ve a Step 7 y verifica que agregaste el CSS
- Asegúrate de haber guardado el theme (Ctrl+S)
- Vuelve a publicar (F5)

---

## ✅ Testing Completo

### Test 1: El Logo se Ve Correctamente
- [ ] Texto "ARCA" visible
- [ ] Punto rojo visible
- [ ] Texto "OS" visible
- [ ] Alineación horizontal
- [ ] Espaciado uniforme

### Test 2: El Logo es Reusable
1. Crea otra screen nueva (ejemplo: `TestScreen2`)
2. Drag & Drop LogoBlock a la nueva screen
3. Publica (F5)
4. ¿El logo se ve igual en ambas screens? ✅

### Test 3: Responsive
1. Abre la screen en el navegador
2. Presiona F12 para abrir DevTools
3. Click en el ícono de dispositivo móvil (📱)
4. Cambia el tamaño de la pantalla
5. ¿El logo se mantiene visible? ✅

---

## 🐛 Errores Comunes

### Error 1: No Veo el Punto Rojo

**Causa:** El CSS de `.logo-dot` no está en el theme.

**Solución:**
1. Ve a Themes → ArcaOSTheme
2. Agrega el CSS del Step 7
3. Guarda (Ctrl+S)
4. Vuelve a publicar (F5)

---

### Error 2: Los Elementos Están en Vertical (uno debajo del otro)

**Causa:** Falta la clase `logo` en el Container principal.

**Solución:**
1. Selecciona ContainerLogo
2. Verifica en Properties → Style Classes que dice: `logo`
3. Si no está, agrégala
4. Guarda y publica

---

### Error 3: El Texto está Muy Pequeño

**Causa:** Falta la clase `logo-text` en los Text widgets.

**Solución:**
1. Selecciona TextArca → Properties → Style Classes → `logo-text`
2. Selecciona TextOS → Properties → Style Classes → `logo-text`
3. Guarda y publica

---

### Error 4: No Encuentro el LogoBlock en el Toolbox

**Causa:** Estás en la pestaña "Widgets" en lugar de "Blocks".

**Solución:**
1. En el Toolbox (panel izquierdo/superior)
2. Cambia de "Widgets" a **"Blocks"**
3. Ahora deberías ver LogoBlock en la lista

---

## 🚀 Mejoras Opcionales

### Mejora 1: Logo con Tamaño Variable

Agrega un Input Parameter para controlar el tamaño:

1. En LogoBlock, expande el árbol
2. Right-click en **"Input Parameters"** → **"Add Input Parameter"**
3. Name: `Size`
4. Data Type: `Text`
5. Default Value: `"24"`
6. Is Mandatory: No

Luego, en TextArca y TextOS, cambia Style Classes a:
```
"logo-text font-size-" + Size
```

Ahora puedes usar:
```
LogoBlock(Size: "xl") → Logo grande
LogoBlock(Size: "s") → Logo pequeño
```

---

### Mejora 2: Logo Clickeable

Haz que el logo sea un link a la home:

1. En el Toolbox, busca **"Link"**
2. Drag & Drop Link **ALREDEDOR** de ContainerLogo
   - Selecciona ContainerLogo
   - Drag & Drop Link encima
   - Elige "Wrap" cuando aparezca el menú
3. Con el Link seleccionado:
   - Destination: (selecciona tu screen de inicio)
   - Style Classes: `logo-link`

---

### Mejora 3: Logo con Tooltip

Agrega un tooltip al pasar el mouse:

1. Selecciona ContainerLogo
2. En Properties → **"Attributes"** → Click en "+"
3. Name: `title`
4. Value: `"ARCA.OS - Design System"`

Ahora al pasar el mouse sobre el logo verás el tooltip.

---

## 📚 Recursos Relacionados

**Próximos Pasos:**
- [BadgeBlock.md](BadgeBlock.md) - Crear badge reusable
- [ButtonGroupBlock.md](ButtonGroupBlock.md) - Grupo de botones

**Componentes que Usan LogoBlock:**
- [HeaderBlock.md](HeaderBlock.md) - Header usa el logo
- [SidebarBlock.md](SidebarBlock.md) - Sidebar usa el logo
- [MainLayout.md](../layouts/MainLayout.md) - Layout usa el logo

**Documentación OutSystems:**
- [Web Blocks](https://success.outsystems.com/Documentation/11/Developing_an_Application/Design_UI/Reuse_UI/Create_and_Reuse_Screen_Blocks)
- [Input Parameters](https://success.outsystems.com/Documentation/11/Reference/OutSystems_Language/Web_Interfaces/Designing_Screens/Input_Parameters)

---

## 🎓 Lo Que Aprendiste

Al completar esta guía, ahora sabes:
- ✅ Crear un Web Block desde cero
- ✅ Usar Container para agrupar elementos
- ✅ Aplicar Style Classes de un theme
- ✅ Hacer componentes reutilizables
- ✅ Publicar y testear un componente
- ✅ Agregar CSS personalizado al theme
- ✅ Troubleshoot errores comunes

**Tiempo invertido:** ~15 minutos
**Nivel de dificultad:** ⭐ Principiante

---

**¿Listo para el siguiente?**

👉 Continúa con: [BadgeBlock.md](BadgeBlock.md)

---

**© 2026 Digital Process Automation (DPA) - Arca Continental**
