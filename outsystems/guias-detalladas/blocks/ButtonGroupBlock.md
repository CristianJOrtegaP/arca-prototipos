# ButtonGroupBlock - Grupo de Botones con Eventos

## 📸 Resultado Final

```
┌───────────────────────────────────────┐
│  [ Cancelar ]       [ Guardar ]       │
└───────────────────────────────────────┘
   (secondary)         (primary)
```

**Características:**
- Dos botones: Cancelar (izquierda) y Guardar (derecha)
- Alineación horizontal con espacio entre ellos
- Eventos personalizables (qué hacer al hacer click)
- Reusable en formularios
- Botones parametrizables

---

## 🎯 Objetivo

Crear un Web Block que agrupe dos botones comunes en formularios: **Cancelar** y **Guardar**. Este block usará **Events** para comunicarse con la screen que lo contiene, permitiendo ejecutar acciones personalizadas cuando se hace click en cada botón.

**Casos de uso:**
- Footer de formularios (crear usuario, editar orden, etc.)
- Modals de confirmación
- Cualquier flujo que requiera Cancelar/Guardar

---

## 📋 Requisitos Previos

- ✅ Theme ARCA.OS instalado
- ✅ Conocimiento de Web Blocks ([Ver LogoBlock](LogoBlock.md))
- ✅ Conocimiento de Input Parameters ([Ver BadgeBlock](BadgeBlock.md))
- ✅ Conocimiento de botones ([Ver ButtonBlock](ButtonBlock.md))

---

## 🧱 Widgets Necesarios

- **Container** x1
- **Button** x2 (o ButtonBlock x2 si ya lo creaste)

---

## 📐 Estructura del Widget Tree

```
ButtonGroupBlock (Web Block)
├─ Events
│  ├─ OnCancel (Event)
│  └─ OnSave (Event)
├─ Input Parameters
│  ├─ CancelText (Text) - Texto botón cancelar
│  ├─ SaveText (Text) - Texto botón guardar
│  ├─ IsSaveDisabled (Boolean) - Deshabilitar guardar
│  └─ ShowCancelButton (Boolean) - Mostrar/ocultar cancelar
└─ ContainerButtons
   ├─ ButtonCancel (Button o ButtonBlock)
   │  └─ On Click: Trigger Event "OnCancel"
   └─ ButtonSave (Button o ButtonBlock)
      └─ On Click: Trigger Event "OnSave"
```

---

## 🔨 Paso a Paso

### Paso 1: Crear el Web Block

1. Abre **Service Studio**
2. En **Interface** tab → **MainFlow**
3. Right-click → **Add Web Block**
4. Name: `ButtonGroupBlock`
5. Presiona Enter

---

### Paso 2: Crear Events

**¿Qué son los Events?**
Los Events son como "señales" que el block envía a la screen que lo contiene. Permiten que la screen ejecute acciones personalizadas cuando algo sucede en el block (ej: click en botón).

**Crear OnCancel Event:**

1. En el árbol de ButtonGroupBlock, expande "ButtonGroupBlock"
2. Verás una carpeta **"Events"**
3. Right-click en "Events" → **"Add Event"**
4. Se creará "Event1"
5. Con Event1 seleccionado, ve a Properties:
   - **Name**: `OnCancel`
   - **Description**: `Evento disparado al hacer click en Cancelar`
6. Presiona Enter

**Crear OnSave Event:**

1. Right-click en "Events" → **"Add Event"**
2. Con el nuevo event seleccionado, ve a Properties:
   - **Name**: `OnSave`
   - **Description**: `Evento disparado al hacer click en Guardar`
3. Presiona Enter

**✅ Verificación:**
En el árbol deberías ver:
```
ButtonGroupBlock
└─ Events
   ├─ OnCancel
   └─ OnSave
```

---

### Paso 3: Crear Input Parameters

**Crear CancelText:**

1. Right-click en **"Input Parameters"** → **"Add Input Parameter"**
2. Name: `CancelText`
3. Data Type: `Text`
4. Is Mandatory: `No`
5. Default Value: `"Cancelar"` (con comillas)
6. Description: `Texto del botón cancelar`

**Crear SaveText:**

1. Right-click en "Input Parameters" → "Add Input Parameter"
2. Name: `SaveText`
3. Data Type: `Text`
4. Is Mandatory: `No`
5. Default Value: `"Guardar"` (con comillas)
6. Description: `Texto del botón guardar`

**Crear IsSaveDisabled:**

1. Right-click en "Input Parameters" → "Add Input Parameter"
2. Name: `IsSaveDisabled`
3. Data Type: `Boolean`
4. Is Mandatory: `No`
5. Default Value: `False`
6. Description: `Si el botón guardar está deshabilitado`

**Crear ShowCancelButton:**

1. Right-click en "Input Parameters" → "Add Input Parameter"
2. Name: `ShowCancelButton`
3. Data Type: `Boolean`
4. Is Mandatory: `No`
5. Default Value: `True`
6. Description: `Si se muestra el botón cancelar`

**✅ Verificación:**
```
ButtonGroupBlock
├─ Events
│  ├─ OnCancel
│  └─ OnSave
└─ Input Parameters
   ├─ CancelText
   ├─ SaveText
   ├─ IsSaveDisabled
   └─ ShowCancelButton
```

---

### Paso 4: Agregar Container Principal

1. En el Toolbox, busca **"Container"**
2. Drag & Drop Container al canvas
3. Con el Container seleccionado:
   - **Name**: `ContainerButtons`
   - **Style Classes**: `display-flex justify-end gap-8`

**¿Qué hacen estas clases?**
- `display-flex`: Alinea los botones horizontalmente
- `justify-end`: Alinea a la derecha
- `gap-8`: Espacio de 8px entre botones

---

### Paso 5: Opción A - Usar Button Nativo

Si NO has creado ButtonBlock, usa botones nativos:

**Agregar Botón Cancelar:**

1. Drag & Drop **Button** DENTRO de ContainerButtons
2. Con el Button seleccionado:
   - **Name**: `ButtonCancel`
   - **Text**: Click en "..." → Escribe: `CancelText`
   - **Style Classes**: `btn btn-secondary btn-normal`
   - **Visible**: Click en "..." → Escribe: `ShowCancelButton`

**Agregar Botón Guardar:**

1. Drag & Drop **Button** DENTRO de ContainerButtons (después de ButtonCancel)
2. Con el Button seleccionado:
   - **Name**: `ButtonSave`
   - **Text**: Click en "..." → Escribe: `SaveText`
   - **Style Classes**: `btn btn-primary btn-normal`
   - **Enabled**: Click en "..." → Escribe: `NOT IsSaveDisabled`

---

### Paso 5: Opción B - Usar ButtonBlock

Si YA creaste ButtonBlock ([ver guía](ButtonBlock.md)), úsalo:

**Agregar ButtonBlock Cancelar:**

1. En Toolbox, cambia a **"Blocks"**
2. Drag & Drop **ButtonBlock** DENTRO de ContainerButtons
3. En Properties:
   - **ButtonText**: `CancelText`
   - **ButtonType**: `"secondary"`
   - **ButtonSize**: `"normal"`
4. En el árbol, selecciona el ButtonBlock
5. En Properties, busca **"Visible"**: Click en "..." → `ShowCancelButton`

**Agregar ButtonBlock Guardar:**

1. Drag & Drop **ButtonBlock** DENTRO de ContainerButtons
2. En Properties:
   - **ButtonText**: `SaveText`
   - **ButtonType**: `"primary"`
   - **ButtonSize**: `"normal"`
   - **IsDisabled**: Click en "..." → `IsSaveDisabled`

---

### Paso 6: Configurar el On Click del Botón Cancelar

Ahora vamos a conectar el botón con el Event.

**Si usaste Button nativo (Opción A):**

1. Selecciona **ButtonCancel**
2. En Properties, busca **"On Click"**
3. Click en el dropdown → **"New Client Action"**
4. Se creará "ButtonCancelOnClick" (o similar) y se abrirá el editor de flujo
5. En el **Toolbox** (pestaña Logic), busca **"Trigger Event"**
6. Drag & Drop **Trigger Event** al flujo (entre Start y End)
7. Con Trigger Event seleccionado, en Properties:
   - **Event**: Selecciona `OnCancel`
8. Guarda (Ctrl+S)
9. Cierra el flujo (click en "ButtonGroupBlock" en el breadcrumb superior)

**Si usaste ButtonBlock (Opción B):**

Como ButtonBlock tiene su propio On Click interno, necesitamos un approach diferente:

1. Elimina el ButtonBlock de Cancelar
2. Usa Button nativo con Style Classes: `btn btn-secondary btn-normal`
3. Sigue las instrucciones de la Opción A arriba

**Nota:** Para eventos personalizados, es mejor usar Buttons nativos en lugar de ButtonBlocks anidados.

---

### Paso 7: Configurar el On Click del Botón Guardar

**Si usaste Button nativo:**

1. Selecciona **ButtonSave**
2. En Properties → **"On Click"** → **"New Client Action"**
3. Se abrirá el editor de flujo
4. En Toolbox (Logic), drag & drop **"Trigger Event"**
5. Con Trigger Event seleccionado:
   - **Event**: Selecciona `OnSave`
6. Guarda (Ctrl+S)
7. Cierra el flujo

---

### Paso 8: Verificar la Estructura Final

Tu árbol debería verse así:

```
ButtonGroupBlock
├─ Events
│  ├─ OnCancel
│  └─ OnSave
├─ Input Parameters
│  ├─ CancelText
│  ├─ SaveText
│  ├─ IsSaveDisabled
│  └─ ShowCancelButton
├─ Logic
│  ├─ Client Actions
│  │  ├─ ButtonCancelOnClick
│  │  │  └─ Trigger Event: OnCancel
│  │  └─ ButtonSaveOnClick
│  │     └─ Trigger Event: OnSave
└─ ContainerButtons (display-flex justify-end gap-8)
   ├─ ButtonCancel (btn btn-secondary)
   │  └─ On Click: ButtonCancelOnClick
   │  └─ Visible: ShowCancelButton
   └─ ButtonSave (btn btn-primary)
      └─ On Click: ButtonSaveOnClick
      └─ Enabled: NOT IsSaveDisabled
```

---

### Paso 9: Guardar

Presiona **Ctrl + S**

---

### Paso 10: Crear Screen de Prueba con Formulario

Vamos a crear un formulario simple para probar el ButtonGroupBlock.

1. Right-click en MainFlow → **Add Screen** → **Empty**
2. Name: `TestFormScreen`
3. Click "Create Screen"

---

### Paso 11: Agregar Estructura del Formulario

1. Selecciona TestFormScreen (raíz)
2. Style Classes: `padding-xl`

**Agregar Título:**
3. Drag & Drop **Text**
4. Text: `Crear Usuario`
5. Style Classes: `font-size-2xl font-bold margin-bottom-l`

**Agregar Form:**
6. Drag & Drop **Form**
7. Name: `FormUser`

**Agregar Input de Nombre:**
8. Drag & Drop **Input** DENTRO del Form
9. Name: `InputName`
10. Variable: Click en "..." → **"New Local Variable"**
    - Name: `UserName`
    - Data Type: `Text`
    - Default Value: `""`
11. Style Classes: `margin-bottom-base`
12. Prompt: `Nombre completo`

**Agregar Input de Email:**
13. Drag & Drop **Input** DENTRO del Form
14. Name: `InputEmail`
15. Variable: Click en "..." → **"New Local Variable"**
    - Name: `UserEmail`
    - Data Type: `Text`
16. Style Classes: `margin-bottom-l`
17. Prompt: `Email`

---

### Paso 12: Usar ButtonGroupBlock en el Form

1. En Toolbox, cambia a **"Blocks"**
2. Drag & Drop **ButtonGroupBlock** DENTRO del Form (al final)
3. En Properties:
   - **CancelText**: `"Cancelar"`
   - **SaveText**: `"Crear Usuario"`
   - **IsSaveDisabled**: Click en "..." → `UserName = "" Or UserEmail = ""`
   - **ShowCancelButton**: `True`

---

### Paso 13: Configurar el Evento OnCancel

Cuando el block dispara el evento OnCancel, la screen debe manejarlo.

1. Selecciona **ButtonGroupBlock** en el árbol
2. En Properties, busca la sección **"Events"** (abajo)
3. Verás **"OnCancel"** con un dropdown
4. Click en el dropdown → **"New Client Action"**
5. Se creará "ButtonGroupBlockOnCancel" y se abrirá el editor
6. En el Toolbox (Logic), busca **"Message"**
7. Drag & Drop **Message** al flujo
8. Con Message seleccionado:
   - **Type**: `Info`
   - **Message**: `"Formulario cancelado"`
9. Guarda (Ctrl+S)
10. Cierra el flujo

---

### Paso 14: Configurar el Evento OnSave

1. Selecciona **ButtonGroupBlock** en el árbol
2. En Properties → Events → **"OnSave"** → **"New Client Action"**
3. Se abrirá el editor de flujo
4. Drag & Drop **Message** al flujo
5. Con Message seleccionado:
   - **Type**: `Success`
   - **Message**: Click en "..." → Escribe:
     ```
     "Usuario creado: " + UserName + " (" + UserEmail + ")"
     ```
6. Drag & Drop **Assign** después del Message
7. En el Assign, agrega 2 assignments:
   - `UserName` = `""`
   - `UserEmail` = `""`
8. Guarda (Ctrl+S)
9. Cierra el flujo

**¿Qué hicimos?**
- Al hacer click en Guardar, mostramos mensaje con los datos
- Limpiamos los inputs para permitir crear otro usuario

---

### Paso 15: Publicar y Probar

1. Presiona **F5**
2. Espera la publicación
3. Click en **"Open in Browser"**

**✅ Verificación del Resultado:**

- [ ] Se ven dos botones: "Cancelar" (outline) y "Crear Usuario" (rojo)
- [ ] Los botones están alineados a la derecha
- [ ] "Crear Usuario" está deshabilitado si los inputs están vacíos
- [ ] Al escribir en ambos inputs, "Crear Usuario" se habilita
- [ ] Al hacer click en "Cancelar", aparece mensaje "Formulario cancelado"
- [ ] Al hacer click en "Crear Usuario", aparece mensaje con los datos
- [ ] Después de crear, los inputs se limpian

---

## ✅ Testing Completo

### Test 1: Validación Dinámica

1. Inputs vacíos → ¿"Crear Usuario" deshabilitado? ✅
2. Escribe solo nombre → ¿Sigue deshabilitado? ✅
3. Escribe email también → ¿Se habilita? ✅
4. Borra nombre → ¿Se deshabilita de nuevo? ✅

---

### Test 2: Eventos Funcionan

1. Click en "Cancelar" → ¿Aparece mensaje "Formulario cancelado"? ✅
2. Llena inputs y click en "Crear Usuario" → ¿Mensaje con datos? ✅
3. ¿Los inputs se limpiaron? ✅

---

### Test 3: Ocultar Botón Cancelar

1. En TestFormScreen, selecciona ButtonGroupBlock
2. Properties → ShowCancelButton: `False`
3. Publica (F5)
4. ¿Solo se ve el botón "Crear Usuario"? ✅

---

### Test 4: Personalizar Textos

1. En TestFormScreen, selecciona ButtonGroupBlock
2. Properties:
   - CancelText: `"Descartar"`
   - SaveText: `"Registrar"`
3. Publica (F5)
4. ¿Los botones muestran los nuevos textos? ✅

---

## 🐛 Errores Comunes

### Error 1: Evento No Se Dispara

**Síntoma:** Al hacer click en el botón no pasa nada.

**Causa:** El Trigger Event no está configurado en el On Click del botón.

**Solución:**
1. En ButtonGroupBlock, selecciona ButtonCancel
2. Properties → On Click → Debería tener un Client Action asignado
3. Abre el Client Action (double-click)
4. Verifica que hay un Trigger Event con Event = OnCancel
5. Guarda y publica

---

### Error 2: No Veo la Sección "Events" en Properties

**Síntoma:** Al seleccionar el ButtonGroupBlock en la screen, no veo dónde configurar OnCancel/OnSave.

**Causa:** Estás viendo las Properties del block definition, no del block instance.

**Solución:**
1. Ve a la **Screen** (TestFormScreen)
2. Selecciona el **ButtonGroupBlock que agregaste a la screen**
3. Scroll down en Properties hasta ver sección "Events"
4. Ahí verás OnCancel y OnSave

---

### Error 3: IsSaveDisabled No Funciona

**Síntoma:** El botón Guardar no se deshabilita cuando los inputs están vacíos.

**Causa:** La expresión está mal escrita.

**Solución:**
1. En TestFormScreen, selecciona ButtonGroupBlock
2. Properties → IsSaveDisabled → Click en "..."
3. Verifica que dice: `UserName = "" Or UserEmail = ""`
4. Guarda y publica

---

### Error 4: Botones No Están Alineados a la Derecha

**Causa:** Falta la clase `justify-end` en el Container.

**Solución:**
1. En ButtonGroupBlock, selecciona ContainerButtons
2. Properties → Style Classes
3. Verifica que dice: `display-flex justify-end gap-8`
4. Guarda y publica

---

## 🚀 Mejoras Opcionales

### Mejora 1: Botón de Eliminar (3 Botones)

Agrega un tercer botón para eliminar:

1. En ButtonGroupBlock, agrega Event: `OnDelete`
2. Agrega Input Parameter: `ShowDeleteButton` (Boolean, default False)
3. Agrega Input Parameter: `DeleteText` (Text, default "Eliminar")
4. Agrega un tercer Button con:
   - Style Classes: `btn btn-danger btn-normal`
   - Visible: ShowDeleteButton
   - On Click: Trigger Event OnDelete

Uso:
```
ButtonGroupBlock(
    ShowDeleteButton: True,
    OnDelete: ConfirmDeleteAction
)
```

---

### Mejora 2: Alineación Configurable

Agrega Input Parameter para controlar la alineación:

1. Add Input Parameter: `Alignment`
2. Data Type: `Text`
3. Default Value: `"right"`
4. Valores: "left", "center", "right"

Modifica Style Classes de ContainerButtons:
```
"display-flex gap-8 " +
If(Alignment = "left", "justify-start",
   If(Alignment = "center", "justify-center", "justify-end"))
```

---

### Mejora 3: Loading State para Guardar

Agrega Input Parameter `IsSaving`:

1. Add Input Parameter: `IsSaving`
2. Data Type: `Boolean`
3. Default Value: `False`

En ButtonSave:
- Text: `If(IsSaving, "Guardando...", SaveText)`
- Enabled: `NOT IsSaveDisabled AND NOT IsSaving`

Modifica el OnSave handler en la screen:
```
1. Assign: IsSaving = True
2. Server Action: SaveData
3. Assign: IsSaving = False
4. Message: "Guardado exitosamente"
```

---

### Mejora 4: Confirmación Antes de Cancelar

Si el formulario tiene cambios, pedir confirmación antes de cancelar:

1. En la screen, crea Local Variable: `HasChanges` (Boolean)
2. En los inputs, agrega On Change: Assign HasChanges = True
3. En el OnCancel handler:

```
If (HasChanges)
    → Confirmation Popup: "¿Descartar cambios?"
      → Yes: Navigate away o clear form
      → No: Do nothing
Else
    → Navigate away
```

---

## 💡 Casos de Uso Reales

### Ejemplo 1: Formulario de Edición

```
ButtonGroupBlock(
    CancelText: "Volver",
    SaveText: "Actualizar",
    IsSaveDisabled: NOT FormValid,
    OnCancel: NavigateToListScreen,
    OnSave: UpdateUserAction
)
```

### Ejemplo 2: Modal de Confirmación

```
ButtonGroupBlock(
    CancelText: "No",
    SaveText: "Sí, eliminar",
    ShowCancelButton: True,
    OnCancel: CloseModal,
    OnSave: DeleteRecordAndCloseModal
)
```

### Ejemplo 3: Wizard de Múltiples Pasos

```
ButtonGroupBlock(
    CancelText: "Anterior",
    SaveText: If(CurrentStep = TotalSteps, "Finalizar", "Siguiente"),
    ShowCancelButton: CurrentStep > 1,
    OnCancel: GoToPreviousStep,
    OnSave: GoToNextStepOrSubmit
)
```

---

## 📚 Recursos Relacionados

**Componentes Previos:**
- [LogoBlock.md](LogoBlock.md) - Logo ARCA.OS
- [BadgeBlock.md](BadgeBlock.md) - Badge de estado
- [ButtonBlock.md](ButtonBlock.md) - Botón reusable

**Próximos Componentes:**
- [InputGroupBlock.md](InputGroupBlock.md) - Input con label
- [CardBlock.md](CardBlock.md) - Card reusable

**Componentes que Usan ButtonGroupBlock:**
- [FormWithValidation.md](../screens/FormWithValidation.md) - Formularios completos
- [UserManagementScreen.md](../screens/UserManagementScreen.md) - CRUD usuarios

**Documentación OutSystems:**
- [Events in Web Blocks](https://success.outsystems.com/Documentation/11/Developing_an_Application/Design_UI/Reuse_UI/Handle_Events_in_a_Block)
- [Trigger Event](https://success.outsystems.com/Documentation/11/Reference/OutSystems_Language/Logic/Client_Actions/Trigger_Event)

---

## 🎓 Lo Que Aprendiste

- ✅ Crear Events en Web Blocks
- ✅ Usar Trigger Event para comunicarse con la screen
- ✅ Manejar eventos en la screen (Event Handlers)
- ✅ Crear grupos de botones con alineación
- ✅ Validación dinámica con expresiones
- ✅ Ocultar/mostrar elementos condicionalmente
- ✅ Deshabilitar botones dinámicamente
- ✅ Limpiar formularios después de guardar
- ✅ Pasar datos de inputs a eventos

**Tiempo invertido:** ~30 minutos
**Nivel de dificultad:** ⭐⭐ Intermedio

---

👉 Continúa con: [InputGroupBlock.md](InputGroupBlock.md)

---

**© 2026 Digital Process Automation (DPA) - Arca Continental**
