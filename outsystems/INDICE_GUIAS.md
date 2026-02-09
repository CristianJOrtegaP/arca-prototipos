# ARCA.OS - Índice de Guías Detalladas

> Guías paso a paso para cada componente - 100% OutSystems nativo

---

## 📚 Cómo Usar Este Índice

Cada archivo es una guía completa para crear **UN componente específico**. Incluye:
- ✅ Objetivo del componente
- ✅ Captura de pantalla del resultado final
- ✅ Lista de widgets necesarios
- ✅ Paso a paso detallado (click por click)
- ✅ Propiedades de cada widget
- ✅ Style Classes exactas
- ✅ Validaciones y testing
- ✅ Errores comunes y soluciones

---

## 🎯 Recomendación de Aprendizaje

### Para Desarrolladores Nuevos en OutSystems

**Semana 1: Fundamentos**
1. [Setup Inicial](guias-detalladas/01-Setup-Inicial.md) - Instalar Service Studio y Theme
2. [Widgets Básicos](guias-detalladas/02-Widgets-Basicos.md) - Aprender Container, Text, Button, Input
3. [Primera Screen](guias-detalladas/03-Primera-Screen.md) - Crear tu primera pantalla

**Semana 2: Web Blocks Simples**
4. [LogoBlock](guias-detalladas/blocks/LogoBlock.md) - Logo ARCA.OS reusable
5. [BadgeBlock](guias-detalladas/blocks/BadgeBlock.md) - Badge con parámetros
6. [ButtonBlock](guias-detalladas/blocks/ButtonBlock.md) - Botón reusable

**Semana 3: Web Blocks Intermedios**
7. [ButtonGroupBlock](guias-detalladas/blocks/ButtonGroupBlock.md) - Grupo de botones
8. [InputGroupBlock](guias-detalladas/blocks/InputGroupBlock.md) - Input con label
9. [CardBlock](guias-detalladas/blocks/CardBlock.md) - Card reusable

**Semana 4: Layouts**
10. [MainLayout](guias-detalladas/layouts/MainLayout.md) - Layout principal
11. [HeaderBlock](guias-detalladas/blocks/HeaderBlock.md) - Header completo
12. [SidebarBlock](guias-detalladas/blocks/SidebarBlock.md) - Sidebar navegación

**Semana 5-6: Componentes Avanzados**
13. [MetricCardBlock](guias-detalladas/blocks/MetricCardBlock.md) - Card de métricas
14. [TableWithFiltersBlock](guias-detalladas/blocks/TableWithFiltersBlock.md) - Tabla con filtros
15. [FormWithValidation](guias-detalladas/screens/FormWithValidation.md) - Form completo

**Semana 7-8: Proyecto Final**
16. [DashboardScreen](guias-detalladas/screens/DashboardScreen.md) - Dashboard completo
17. [UserManagementScreen](guias-detalladas/screens/UserManagementScreen.md) - Gestión usuarios

---

## 📂 Estructura de Guías

### 🔧 Setup y Fundamentos

| Archivo | Descripción | Tiempo Est. | Nivel |
|---------|-------------|-------------|-------|
| [01-Setup-Inicial.md](guias-detalladas/01-Setup-Inicial.md) | Instalación Service Studio + Theme | 30 min | Principiante |
| [02-Widgets-Basicos.md](guias-detalladas/02-Widgets-Basicos.md) | Container, Text, Button, Input, Link | 45 min | Principiante |
| [03-Primera-Screen.md](guias-detalladas/03-Primera-Screen.md) | Crear screen con componentes básicos | 30 min | Principiante |

### 🧩 Web Blocks - Nivel Básico

| Archivo | Descripción | Tiempo Est. | Nivel |
|---------|-------------|-------------|-------|
| [LogoBlock.md](guias-detalladas/blocks/LogoBlock.md) | Logo ARCA.OS (ARCA • OS) | 15 min | Principiante |
| [BadgeBlock.md](guias-detalladas/blocks/BadgeBlock.md) | Badge de estado con Input Parameters | 20 min | Principiante |
| [ButtonBlock.md](guias-detalladas/blocks/ButtonBlock.md) | Botón con variantes (primary, secondary, etc.) | 20 min | Principiante |

### 🧩 Web Blocks - Nivel Intermedio

| Archivo | Descripción | Tiempo Est. | Nivel |
|---------|-------------|-------------|-------|
| [ButtonGroupBlock.md](guias-detalladas/blocks/ButtonGroupBlock.md) | Grupo Cancelar/Guardar con Events | 30 min | Intermedio |
| [InputGroupBlock.md](guias-detalladas/blocks/InputGroupBlock.md) | Input + Label + Validación | 30 min | Intermedio |
| [CardBlock.md](guias-detalladas/blocks/CardBlock.md) | Card reusable con header/body/footer | 30 min | Intermedio |

### 🧩 Web Blocks - Nivel Avanzado

| Archivo | Descripción | Tiempo Est. | Nivel |
|---------|-------------|-------------|-------|
| [HeaderBlock.md](guias-detalladas/blocks/HeaderBlock.md) | Header con logo, search, notificaciones, user | 60 min | Avanzado |
| [SidebarBlock.md](guias-detalladas/blocks/SidebarBlock.md) | Sidebar con navegación y active state | 60 min | Avanzado |
| [MetricCardBlock.md](guias-detalladas/blocks/MetricCardBlock.md) | Card métricas con ícono, valor, trend | 45 min | Avanzado |
| [TableWithFiltersBlock.md](guias-detalladas/blocks/TableWithFiltersBlock.md) | Tabla con filtros y paginación | 90 min | Avanzado |

### 🏗️ Layouts

| Archivo | Descripción | Tiempo Est. | Nivel |
|---------|-------------|-------------|-------|
| [MainLayout.md](guias-detalladas/layouts/MainLayout.md) | Layout principal (Header + Sidebar + Content) | 45 min | Intermedio |
| [AuthLayout.md](guias-detalladas/layouts/AuthLayout.md) | Layout para login/registro | 30 min | Intermedio |

### 📄 Screens Completas

| Archivo | Descripción | Tiempo Est. | Nivel |
|---------|-------------|-------------|-------|
| [DashboardScreen.md](guias-detalladas/screens/DashboardScreen.md) | Dashboard con métricas + tabla | 90 min | Avanzado |
| [UserManagementScreen.md](guias-detalladas/screens/UserManagementScreen.md) | CRUD usuarios con tabla y form | 120 min | Avanzado |
| [FormWithValidation.md](guias-detalladas/screens/FormWithValidation.md) | Form completo con validaciones | 60 min | Avanzado |

---

## 🎨 Formato de Cada Guía

Todas las guías siguen este formato estándar:

```markdown
# [Nombre del Componente]

## 📸 Resultado Final
[Screenshot o descripción visual]

## 🎯 Objetivo
Qué vamos a crear y para qué sirve

## 📋 Requisitos Previos
- Tema ARCA.OS instalado ✅
- Conocimiento de widgets básicos ✅
- Etc.

## 🧱 Widgets Necesarios
Lista de todos los widgets que usaremos

## 📐 Estructura del Widget Tree
Vista en árbol de cómo se organizan los widgets

## 🔨 Paso a Paso

### Paso 1: [Nombre del paso]
Instrucciones detalladas...

### Paso 2: [Nombre del paso]
Instrucciones detalladas...

## ✅ Verificación
Cómo comprobar que funciona correctamente

## 🐛 Errores Comunes
Problemas típicos y sus soluciones

## 🚀 Mejoras Opcionales
Ideas para extender el componente

## 📚 Recursos Relacionados
Links a guías relacionadas
```

---

## 🆘 Soporte y Ayuda

### Si Encuentras Errores

1. **Revisa la sección "Errores Comunes"** de la guía
2. **Verifica los requisitos previos** - ¿Tienes todo instalado?
3. **Compara tu Widget Tree** con el de la guía
4. **Revisa las Style Classes** - ¿están escritas exactamente igual?
5. **Publica el módulo (F5)** - Los cambios se ven después de publicar

### Contacto

- **Tech Lead:** Cristian Ortega - Tech Lead OutSystems | DPA
- **Equipo:** Digital Process Automation (DPA)

---

## 🗺️ Roadmap de Guías

### ✅ Completadas
- [ ] Setup Inicial
- [ ] Widgets Básicos
- [ ] LogoBlock
- [ ] BadgeBlock
- [ ] ButtonGroupBlock
- [ ] MainLayout
- [ ] HeaderBlock
- [ ] SidebarBlock
- [ ] MetricCardBlock
- [ ] DashboardScreen

### 🚧 En Progreso
- [ ] TableWithFiltersBlock
- [ ] FormWithValidation
- [ ] UserManagementScreen

### 📝 Planeadas
- [ ] SearchBlock
- [ ] PaginationBlock
- [ ] ModalBlock
- [ ] ToastNotificationBlock
- [ ] FileUploadBlock

---

## 💡 Tips Generales

### Para Desarrolladores Junior

1. **Ve paso a paso** - No saltes guías
2. **Practica cada componente** - Hazlo 2-3 veces
3. **Experimenta** - Cambia colores, tamaños, textos
4. **Haz capturas** - Documenta tu progreso
5. **Pregunta** - Si no entiendes algo, pregunta

### Para Desarrolladores Intermedios

1. **Personaliza** - Adapta los componentes a tu caso de uso
2. **Optimiza** - Encuentra formas de mejorar el código
3. **Enseña** - Ayuda a otros juniors
4. **Contribuye** - Sugiere mejoras a las guías

---

**¿Listo para empezar?**

👉 Empieza con: [01-Setup-Inicial.md](guias-detalladas/01-Setup-Inicial.md)

---

**© 2026 Digital Process Automation (DPA) - Arca Continental**
