# InputGroupBlock - Input con Label y Validación

## 📸 Resultado Final

```
┌─────────────────────────────────────┐
│ Nombre completo *                   │
│ ┌─────────────────────────────────┐ │
│ │ Juan Pérez                      │ │
│ └─────────────────────────────────┘ │
│ Mínimo 3 caracteres                 │
└─────────────────────────────────────┘
```

**Características:**
- Label arriba del input
- Asterisco (*) si es obligatorio
- Mensaje de ayuda debajo
- Validación visual (borde rojo si inválido)
- Mensaje de error dinámico
- Reusable en formularios

---

## 🎯 Objetivo

Crear un Web Block que encapsule un Input con su Label, validación visual y mensajes de ayuda. Este block estandariza la apariencia de todos los inputs en formularios y reduce código repetitivo.

**Casos de uso:**
- Formularios de usuario (nombre, email, teléfono)
- Formularios de búsqueda
- Cualquier input que necesite label y validación

---

## 📋 Requisitos Previos

- ✅ Theme ARCA.OS instalado
- ✅ Conocimiento de Web Blocks ([Ver LogoBlock](LogoBlock.md))
- ✅ Conocimiento de Input Parameters ([Ver BadgeBlock](BadgeBlock.md))
- ✅ Conocimiento de expresiones condicionales

---

## 🧱 Widgets Necesarios

- **Container** x3
- **Label** x1
- **Input** x1
- **Text** x2

---

## 📐 Estructura del Widget Tree

```
InputGroupBlock (Web Block)
├─ Input Parameters
│  ├─ LabelText (Text) - Texto del label
│  ├─ IsRequired (Boolean) - Si es obligatorio
│  ├─ PlaceholderText (Text) - Placeholder del input
│  ├─ InputValue (Text) - Valor actual
│  ├─ InputType (Text) - Tipo: "text", "email", "password"
│  ├─ HelpText (Text) - Texto de ayuda
│  ├─ ErrorMessage (Text) - Mensaje de error
│  └─ IsInvalid (Boolean) - Si tiene error
└─ ContainerMain (input-group)
   ├─ ContainerLabel
   │  ├─ LabelMain (Texto del label)
   │  └─ TextRequired (*) - Visible si IsRequired
   ├─ InputMain
   │  └─ Style Classes: dinámicas según IsInvalid
   └─ ContainerMessages
      ├─ TextHelp - Visible si NO hay error
      └─ TextError - Visible si IsInvalid
```

---

## 🔨 Paso a Paso

### Paso 1: Crear el Web Block

1. Abre **Service Studio**
2. En **Interface** tab → **MainFlow**
3. Right-click → **Add Web Block**
4. Name: `InputGroupBlock`
5. Presiona Enter

---

### Paso 2: Crear Input Parameters

Vamos a crear 8 Input Parameters.

**Crear LabelText (obligatorio):**

1. Right-click en **"Input Parameters"** → **"Add Input Parameter"**
2. Name: `LabelText`
3. Data Type: `Text`
4. Is Mandatory: `Yes`
5. Description: `Texto del label`

**Crear IsRequired (opcional):**

1. Add Input Parameter
2. Name: `IsRequired`
3. Data Type: `Boolean`
4. Is Mandatory: `No`
5. Default Value: `False`
6. Description: `Si el campo es obligatorio (muestra *)`

**Crear PlaceholderText (opcional):**

1. Add Input Parameter
2. Name: `PlaceholderText`
3. Data Type: `Text`
4. Is Mandatory: `No`
5. Default Value: `""`
6. Description: `Texto placeholder del input`

**Crear InputValue (obligatorio):**

1. Add Input Parameter
2. Name: `InputValue`
3. Data Type: `Text`
4. Is Mandatory: `Yes`
5. Description: `Valor actual del input (variable de la screen)`

**Crear InputType (opcional):**

1. Add Input Parameter
2. Name: `InputType`
3. Data Type: `Text`
4. Is Mandatory: `No`
5. Default Value: `"text"`
6. Description: `Tipo de input: text, email, password, number`

**Crear HelpText (opcional):**

1. Add Input Parameter
2. Name: `HelpText`
3. Data Type: `Text`
4. Is Mandatory: `No`
5. Default Value: `""`
6. Description: `Texto de ayuda debajo del input`

**Crear ErrorMessage (opcional):**

1. Add Input Parameter
2. Name: `ErrorMessage`
3. Data Type: `Text`
4. Is Mandatory: `No`
5. Default Value: `""`
6. Description: `Mensaje de error a mostrar`

**Crear IsInvalid (opcional):**

1. Add Input Parameter
2. Name: `IsInvalid`
3. Data Type: `Boolean`
4. Is Mandatory: `No`
5. Default Value: `False`
6. Description: `Si el input tiene un error de validación`

**✅ Verificación:**
```
InputGroupBlock
└─ Input Parameters
   ├─ LabelText
   ├─ IsRequired
   ├─ PlaceholderText
   ├─ InputValue
   ├─ InputType
   ├─ HelpText
   ├─ ErrorMessage
   └─ IsInvalid
```

---

### Paso 3: Agregar Container Principal

1. Drag & Drop **Container** al canvas
2. Name: `ContainerMain`
3. Style Classes: `input-group`

---

### Paso 4: Agregar Container del Label

1. Drag & Drop **Container** DENTRO de ContainerMain
2. Name: `ContainerLabel`
3. Style Classes: `display-flex gap-4 margin-bottom-xs`

---

### Paso 5: Agregar el Label

1. En el Toolbox, busca **"Label"**
2. Drag & Drop **Label** DENTRO de ContainerLabel
3. Con el Label seleccionado:
   - **Name**: `LabelMain`
   - **Text**: Click en "..." → Escribe: `LabelText`
   - **Style Classes**: `font-weight-semibold color-neutral-9`

---

### Paso 6: Agregar el Asterisco (Required)

1. Drag & Drop **Text** DENTRO de ContainerLabel (después del Label)
2. Con el Text seleccionado:
   - **Name**: `TextRequired`
   - **Text**: `*`
   - **Style Classes**: `color-error font-weight-bold`
   - **Visible**: Click en "..." → Escribe: `IsRequired`

**¿Qué hicimos?**
El asterisco (*) solo se muestra si IsRequired = True.

---

### Paso 7: Agregar el Input

1. Drag & Drop **Input** DENTRO de ContainerMain (después de ContainerLabel)
2. Con el Input seleccionado:
   - **Name**: `InputMain`
   - **Variable**: Click en "..." → Selecciona `InputValue` (de Input Parameters)
   - **Prompt**: Click en "..." → Escribe: `PlaceholderText`
   - **Text Type**: Click en "..." → Escribe: `InputType`
   - **Style Classes**: Click en "..." → Escribe:
     ```
     "input " + If(IsInvalid, "input-error", "")
     ```

**¿Qué hace la expresión de Style Classes?**
- Si IsInvalid = False → Clase: "input"
- Si IsInvalid = True → Clase: "input input-error" (borde rojo)

---

### Paso 8: Agregar Container de Mensajes

1. Drag & Drop **Container** DENTRO de ContainerMain (al final)
2. Name: `ContainerMessages`
3. Style Classes: `margin-top-xs`

---

### Paso 9: Agregar Texto de Ayuda

1. Drag & Drop **Text** DENTRO de ContainerMessages
2. Con el Text seleccionado:
   - **Name**: `TextHelp`
   - **Text**: Click en "..." → Escribe: `HelpText`
   - **Style Classes**: `font-size-s color-neutral-6`
   - **Visible**: Click en "..." → Escribe: `HelpText <> "" AND NOT IsInvalid`

**¿Qué hace esto?**
El texto de ayuda solo se muestra si:
- Hay texto en HelpText (no está vacío)
- Y NO hay error (IsInvalid = False)

---

### Paso 10: Agregar Mensaje de Error

1. Drag & Drop **Text** DENTRO de ContainerMessages (después de TextHelp)
2. Con el Text seleccionado:
   - **Name**: `TextError`
   - **Text**: Click en "..." → Escribe: `ErrorMessage`
   - **Style Classes**: `font-size-s color-error font-weight-semibold`
   - **Visible**: Click en "..." → Escribe: `IsInvalid AND ErrorMessage <> ""`

**¿Qué hace esto?**
El mensaje de error solo se muestra si:
- IsInvalid = True
- Y hay un mensaje en ErrorMessage

---

### Paso 11: Verificar Estructura Final

```
InputGroupBlock
├─ Input Parameters (8 params)
└─ ContainerMain (input-group)
   ├─ ContainerLabel (display-flex gap-4)
   │  ├─ LabelMain (LabelText)
   │  └─ TextRequired (*) - Visible: IsRequired
   ├─ InputMain (Variable: InputValue)
   │  └─ Style Classes: "input " + If(IsInvalid, "input-error", "")
   └─ ContainerMessages (margin-top-xs)
      ├─ TextHelp - Visible: HelpText <> "" AND NOT IsInvalid
      └─ TextError - Visible: IsInvalid AND ErrorMessage <> ""
```

---

### Paso 12: Guardar

Presiona **Ctrl + S**

---

### Paso 13: Agregar CSS al Theme (Si No Existe)

Verifica que estas clases existan en ArcaOSTheme:

```css
/* Input Group */
.input-group {
    display: flex;
    flex-direction: column;
    margin-bottom: var(--space-base);
}

.input {
    width: 100%;
    padding: 12px 16px;
    font-size: var(--font-size-base);
    font-family: var(--font-primary);
    color: var(--color-neutral-9);
    background-color: var(--color-neutral-0);
    border: 2px solid var(--color-neutral-3);
    border-radius: var(--border-radius-rounded);
    transition: all var(--duration-base) var(--easing-ease);
}

.input:focus {
    outline: none;
    border-color: var(--arca-red);
    box-shadow: 0 0 0 3px var(--arca-red-light);
}

.input-error {
    border-color: var(--color-error);
}

.input-error:focus {
    border-color: var(--color-error);
    box-shadow: 0 0 0 3px rgba(255, 24, 38, 0.1);
}

.input::placeholder {
    color: var(--color-neutral-5);
}
```

---

### Paso 14: Crear Screen de Prueba

1. Right-click en MainFlow → **Add Screen** → **Empty**
2. Name: `TestInputGroupScreen`
3. Click "Create Screen"

---

### Paso 15: Agregar Local Variables

Necesitamos variables para almacenar los valores de los inputs.

1. En TestInputGroupScreen, right-click en **"Local Variables"** → **"Add Local Variable"**
2. Name: `UserName`
3. Data Type: `Text`
4. Default Value: `""`

Repite para crear:
- `UserEmail` (Text, "")
- `UserPassword` (Text, "")
- `UserAge` (Text, "")

---

### Paso 16: Agregar Título y Container

1. Selecciona TestInputGroupScreen (raíz)
2. Style Classes: `padding-xl`

3. Drag & Drop **Text**
4. Text: `Ejemplo de Inputs`
5. Style Classes: `font-size-2xl font-bold margin-bottom-l`

6. Drag & Drop **Container**
7. Style Classes: `max-width-600 margin-auto`

---

### Paso 17: Usar InputGroupBlock - Input de Nombre

1. En Toolbox, cambia a **"Blocks"**
2. Drag & Drop **InputGroupBlock** DENTRO del Container
3. En Properties:
   - **LabelText**: `"Nombre completo"`
   - **IsRequired**: `True`
   - **PlaceholderText**: `"Ingresa tu nombre"`
   - **InputValue**: `UserName` (sin comillas, selecciona de la lista)
   - **InputType**: `"text"`
   - **HelpText**: `"Mínimo 3 caracteres"`
   - **ErrorMessage**: `"El nombre es obligatorio"`
   - **IsInvalid**: Click en "..." → `UserName = ""`

---

### Paso 18: Agregar Input de Email

1. Drag & Drop **InputGroupBlock** DENTRO del Container
2. En Properties:
   - **LabelText**: `"Email"`
   - **IsRequired**: `True`
   - **PlaceholderText**: `"ejemplo@arca.com"`
   - **InputValue**: `UserEmail`
   - **InputType**: `"email"`
   - **HelpText**: `"Usaremos este email para contactarte"`
   - **ErrorMessage**: `"Email inválido"`
   - **IsInvalid**: Click en "..." →
     ```
     UserEmail <> "" AND NOT Index(UserEmail, "@") > 0
     ```

**¿Qué hace esta validación?**
- Si el email NO está vacío Y NO contiene "@", muestra error

---

### Paso 19: Agregar Input de Password

1. Drag & Drop **InputGroupBlock**
2. En Properties:
   - **LabelText**: `"Contraseña"`
   - **IsRequired**: `True`
   - **PlaceholderText**: `"Mínimo 8 caracteres"`
   - **InputValue**: `UserPassword`
   - **InputType**: `"password"`
   - **HelpText**: `"Debe contener letras y números"`
   - **ErrorMessage**: `"La contraseña debe tener al menos 8 caracteres"`
   - **IsInvalid**: Click en "..." →
     ```
     UserPassword <> "" AND Length(UserPassword) < 8
     ```

---

### Paso 20: Agregar Input de Edad (Opcional)

1. Drag & Drop **InputGroupBlock**
2. En Properties:
   - **LabelText**: `"Edad"`
   - **IsRequired**: `False` (sin asterisco)
   - **PlaceholderText**: `"Opcional"`
   - **InputValue**: `UserAge`
   - **InputType**: `"number"`
   - **HelpText**: `"Solo si deseas compartirlo"`
   - **ErrorMessage**: `""`
   - **IsInvalid**: `False`

---

### Paso 21: Agregar Botón de Enviar

1. En Toolbox, cambia a "Widgets"
2. Drag & Drop **Button** al Container
3. Text: `Enviar`
4. Style Classes: `btn btn-primary btn-normal`

---

### Paso 22: Publicar y Probar

1. Presiona **F5**
2. Click en **"Open in Browser"**

**✅ Verificación del Resultado:**

- [ ] Se ven 4 inputs con sus labels
- [ ] "Nombre", "Email" y "Contraseña" tienen asterisco (*)
- [ ] "Edad" NO tiene asterisco
- [ ] Cada input tiene su mensaje de ayuda debajo (gris)
- [ ] Al escribir en "Nombre" y borrarlo, aparece mensaje de error rojo
- [ ] Al escribir email sin "@", aparece error
- [ ] Al escribir password con menos de 8 caracteres, aparece error
- [ ] Los inputs con error tienen borde rojo

---

## ✅ Testing Completo

### Test 1: Validación en Tiempo Real

1. Input de Nombre:
   - Escribe "Juan" → ¿NO hay error? ✅
   - Borra todo → ¿Aparece "El nombre es obligatorio"? ✅

2. Input de Email:
   - Escribe "juan" → ¿Aparece "Email inválido"? ✅
   - Escribe "juan@arca.com" → ¿El error desaparece? ✅

3. Input de Password:
   - Escribe "123" → ¿Aparece error de 8 caracteres? ✅
   - Escribe "12345678" → ¿El error desaparece? ✅

---

### Test 2: Asterisco de Requerido

1. ¿"Nombre" tiene asterisco? ✅
2. ¿"Email" tiene asterisco? ✅
3. ¿"Contraseña" tiene asterisco? ✅
4. ¿"Edad" NO tiene asterisco? ✅

---

### Test 3: Mensajes de Ayuda

1. Con inputs vacíos, ¿se ven los mensajes de ayuda grises? ✅
2. Al escribir y generar error, ¿el mensaje de ayuda desaparece? ✅
3. ¿El mensaje de error rojo aparece? ✅

---

### Test 4: Tipos de Input

1. Input de Email:
   - En mobile, ¿el teclado muestra "@"? ✅ (si InputType = "email")

2. Input de Password:
   - ¿El texto está oculto (•••)? ✅ (si InputType = "password")

3. Input de Edad:
   - ¿Solo acepta números? ✅ (si InputType = "number")

---

## 🐛 Errores Comunes

### Error 1: Input No Se Llena al Escribir

**Síntoma:** Escribo en el input pero no aparece el texto.

**Causa:** El InputValue no está correctamente vinculado a la variable.

**Solución:**
1. En la screen, selecciona InputGroupBlock
2. Properties → InputValue
3. Debe estar vinculado a una Local Variable (ej: UserName)
4. NO debe tener comillas (no es un texto literal)

---

### Error 2: Mensaje de Error Siempre Visible

**Síntoma:** El mensaje de error se muestra aunque el input esté correcto.

**Causa:** La expresión de IsInvalid está mal.

**Solución:**
1. Selecciona InputGroupBlock en la screen
2. Properties → IsInvalid → Click en "..."
3. Revisa la expresión de validación
4. Ejemplo correcto para nombre: `UserName = ""`
5. Guarda y publica

---

### Error 3: Borde Rojo No Aparece

**Causa:** Falta la clase `input-error` en el CSS o la expresión de Style Classes está mal.

**Solución:**
1. Ve a Themes → ArcaOSTheme
2. Verifica que existe `.input-error { border-color: var(--color-error); }`
3. En InputGroupBlock, selecciona InputMain
4. Properties → Style Classes → Verifica:
   ```
   "input " + If(IsInvalid, "input-error", "")
   ```

---

### Error 4: Asterisco No Se Ve

**Causa:** Visible está mal configurado.

**Solución:**
1. En InputGroupBlock, selecciona TextRequired
2. Properties → Visible → Click en "..."
3. Debe decir: `IsRequired`
4. Guarda y publica

---

## 🚀 Mejoras Opcionales

### Mejora 1: Input con Ícono

Agrega un Input Parameter `IconClass`:

1. Add Input Parameter: `IconClass` (Text, optional, default "")
2. En InputGroupBlock, agrega un **If** antes del Input:
   - Condition: `IconClass <> ""`
   - True: Muestra ícono con clase IconClass
3. Envuelve ícono + input en un Container relativo
4. Posiciona el ícono absolute left

CSS:
```css
.input-with-icon {
    position: relative;
}
.input-icon {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
}
.input-with-icon .input {
    padding-left: 40px;
}
```

---

### Mejora 2: Textarea Variant

Agrega Input Parameter `IsMultiline` (Boolean):

1. En InputGroupBlock, reemplaza el Input con un **If**:
   - Condition: `IsMultiline`
   - True: **Text Area** widget
   - False: **Input** widget
2. Ambos deben tener la misma configuración (Variable, Style Classes, etc.)

---

### Mejora 3: Contador de Caracteres

Agrega Input Parameters:
- `ShowCharCount` (Boolean)
- `MaxLength` (Integer)

En ContainerMessages, agrega:
```
Text: Length(InputValue) + " / " + MaxLength
Visible: ShowCharCount
Style Classes: font-size-s color-neutral-6 text-right
```

En InputMain:
- Max Length: MaxLength

---

### Mejora 4: Validación Asíncrona

Para validaciones que requieren server (ej: email ya existe):

1. Add Input Parameter: `IsValidating` (Boolean)
2. Add Input Parameter: `ValidationMessage` (Text)
3. Muestra spinner si IsValidating = True
4. Muestra ValidationMessage cuando termine

En la screen:
```
OnChange del Input:
1. Assign: IsValidating = True
2. Server Action: CheckEmailExists
3. Assign: IsValidating = False
4. Assign: ValidationMessage = "Email ya registrado"
```

---

## 💡 Casos de Uso Reales

### Ejemplo 1: Login Form

```
InputGroupBlock(
    LabelText: "Usuario",
    IsRequired: True,
    InputValue: Username,
    InputType: "text",
    HelpText: "Tu nombre de usuario",
    ErrorMessage: "Usuario inválido",
    IsInvalid: Username = "" OR Length(Username) < 3
)

InputGroupBlock(
    LabelText: "Contraseña",
    IsRequired: True,
    InputValue: Password,
    InputType: "password",
    ErrorMessage: "Contraseña incorrecta",
    IsInvalid: Password = ""
)
```

### Ejemplo 2: Búsqueda con Validación

```
InputGroupBlock(
    LabelText: "Buscar orden",
    IsRequired: False,
    PlaceholderText: "Número de orden",
    InputValue: SearchQuery,
    InputType: "text",
    HelpText: "Ingresa el número de orden (ej: ORD-12345)",
    ErrorMessage: "Formato inválido",
    IsInvalid: SearchQuery <> "" AND NOT StartsWith(SearchQuery, "ORD-")
)
```

### Ejemplo 3: Formulario de Contacto

```
InputGroupBlock(
    LabelText: "Teléfono",
    IsRequired: False,
    PlaceholderText: "+52 123 456 7890",
    InputValue: Phone,
    InputType: "tel",
    HelpText: "Formato internacional (opcional)",
    ErrorMessage: "Teléfono inválido",
    IsInvalid: Phone <> "" AND Length(Phone) < 10
)
```

---

## 📚 Recursos Relacionados

**Componentes Previos:**
- [LogoBlock.md](LogoBlock.md) - Logo ARCA.OS
- [BadgeBlock.md](BadgeBlock.md) - Badge de estado
- [ButtonBlock.md](ButtonBlock.md) - Botón reusable
- [ButtonGroupBlock.md](ButtonGroupBlock.md) - Grupo de botones

**Próximos Componentes:**
- [CardBlock.md](CardBlock.md) - Card reusable
- [FormWithValidation.md](../screens/FormWithValidation.md) - Formulario completo

**Componentes que Usan InputGroupBlock:**
- [UserManagementScreen.md](../screens/UserManagementScreen.md) - CRUD usuarios
- Cualquier formulario

**Documentación OutSystems:**
- [Input Widget](https://success.outsystems.com/Documentation/11/Reference/OutSystems_Language/Web_Interfaces/Designing_Screens/Input_Widget)
- [Validation](https://success.outsystems.com/Documentation/11/Developing_an_Application/Design_UI/Forms/Validate_Form_Inputs)

---

## 🎓 Lo Que Aprendiste

- ✅ Encapsular inputs con label en un block
- ✅ Validación visual con borde rojo
- ✅ Mensajes de error dinámicos
- ✅ Mostrar/ocultar elementos con expresiones
- ✅ Usar expresiones complejas (Index, Length, StartsWith)
- ✅ Validación en tiempo real
- ✅ Input types (text, email, password, number, tel)
- ✅ Asterisco para campos obligatorios
- ✅ Mensajes de ayuda contextuales

**Tiempo invertido:** ~30 minutos
**Nivel de dificultad:** ⭐⭐ Intermedio

---

👉 Continúa con: [CardBlock.md](CardBlock.md)

---

**© 2026 Digital Process Automation (DPA) - Arca Continental**
