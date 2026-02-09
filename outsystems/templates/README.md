# ARCA.OS - HTML Templates para OutSystems

> Templates HTML listos para usar en OutSystems con el widget **Expression** (Escape Content: No)

---

## 📂 Templates Disponibles

| Template                     | Archivo                          | Descripción                              |
| ---------------------------- | -------------------------------- | ---------------------------------------- |
| Sidebar Navigation           | `sidebar-navigation.html`        | Menú lateral con navegación              |
| Header Component             | `header-component.html`          | Header con logo, notificaciones y usuario|
| Metric Cards                 | `metric-card.html`               | Cards de métricas para dashboard         |

---

## 🚀 Cómo Usar los Templates

### Método 1: Copy-Paste Directo (Más Rápido)

**Para prototipos rápidos y componentes estáticos:**

1. Abre el archivo `.html` del template que necesitas
2. **Copia todo el contenido** (HTML + CSS dentro de `<style>`)
3. En **Service Studio**, drag & drop un widget **Expression**
4. En **Properties** del Expression:
   - Set **Escape Content** = `No`
5. **Pega el HTML completo** en el campo **Value** del Expression
6. Publica y prueba

**✅ Ventajas:**
- Implementación inmediata
- No requiere crear Blocks
- Ideal para prototipos

**❌ Desventajas:**
- No es reutilizable
- Difícil de mantener
- No puede recibir parámetros dinámicos

---

### Método 2: Block Reutilizable (Recomendado)

**Para componentes reusables y producción:**

1. En **Service Studio**, crea un nuevo **Block**
   - Ejemplo: `SidebarBlock`, `HeaderBlock`, `MetricCardBlock`
2. Dentro del Block, drag & drop un widget **Expression**
3. Set **Escape Content** = `No`
4. Copia y pega el HTML del template
5. **Convierte valores estáticos en Input Parameters** del Block

**Ejemplo - Metric Card Block:**

**Input Parameters:**
- `IconSVG` (Text)
- `MetricLabel` (Text)
- `MetricValue` (Text)
- `TrendText` (Text)
- `TrendIsPositive` (Boolean)
- `IconBackgroundColor` (Text)
- `IconColor` (Text)

**Expression Value:**
```html
"<div class='metric-card'>
    <div class='metric-icon' style='background: " + IconBackgroundColor + "; color: " + IconColor + ";'>
        " + IconSVG + "
    </div>
    <div class='metric-content'>
        <div class='metric-label'>" + MetricLabel + "</div>
        <div class='metric-value'>" + MetricValue + "</div>
        <div class='metric-trend " + If(TrendIsPositive, "positive", "negative") + "'>
            <span>" + TrendText + "</span>
        </div>
    </div>
</div>"
```

**✅ Ventajas:**
- Totalmente reutilizable
- Fácil de mantener
- Acepta datos dinámicos
- Encapsulado en un componente

**✅ Cómo Usar el Block:**

1. Drag & Drop `MetricCardBlock` a tu Screen
2. En **Properties**, asigna los Input Parameters:
   - **IconSVG**: `"<svg>...</svg>"`
   - **MetricLabel**: `"Órdenes Totales"`
   - **MetricValue**: `{GetMetrics.TotalOrders}`
   - **TrendText**: `"+12.5%"`
   - **TrendIsPositive**: `True`
   - **IconBackgroundColor**: `"var(--arca-red-light)"`
   - **IconColor**: `"var(--arca-red)"`

---

## 📝 Templates Detallados

### 1. Sidebar Navigation

**Archivo:** `sidebar-navigation.html`

**Características:**
- Menú vertical con íconos
- Logo ARCA.OS integrado
- Footer con info de usuario
- Hover effects y active state
- Responsive (colapsable en mobile)

**Casos de Uso:**
- Aplicaciones con múltiples secciones
- Dashboards administrativos
- Portales internos

**Personalización:**
- **Agregar/Quitar Items del Menú:** Duplica/elimina bloques `<a class="menu-item">`
- **Cambiar Íconos:** Reemplaza el SVG dentro de cada `menu-item`
- **Active State Dinámico:** Usa JavaScript o Client Actions para agregar clase `active`

**Uso con OutSystems Screens:**

Para hacer los links navegables:
1. Reemplaza `href="#dashboard"` con onClick events
2. Usa **RunClientAction** que ejecute **Navigate**
3. O usa Expression con JavaScript inline:

```html
<a href="javascript:void(0)" onclick="NavigateToDashboard()" class="menu-item">
```

**Responsive Behavior:**
- En mobile (< 768px), el sidebar se puede ocultar/mostrar con un toggle
- Usa un **If** widget basado en `IsPhone()` para mostrar/ocultar

---

### 2. Header Component

**Archivo:** `header-component.html`

**Características:**
- Logo ARCA.OS
- Título de aplicación con badge de versión
- Botón de notificaciones con contador
- Botón de ayuda
- Menú de usuario con avatar
- Responsive

**Casos de Uso:**
- Header global de aplicación
- Usar en Layout Web Block
- Aplicar a todas las screens

**Personalización:**
- **Nombre de Usuario:** Reemplaza `"Juan Pérez"` con `{GetUserId().Name}`
- **Rol de Usuario:** Reemplaza `"Administrador"` con `{GetUserId().Role}`
- **Badge de Notificaciones:** Reemplaza `"3"` con `{NotificationCount}`
- **Título de App:** Reemplaza `"Órdenes de Recuperación"` con variable

**Interactividad:**

Para hacer los botones funcionales:
1. **Botón de Notificaciones:**
   - Reemplaza `<button class="icon-button">` con un Link OutSystems
   - **Destination**: Screen de Notificaciones
   - O usa **OnClick** Client Action

2. **User Menu Dropdown:**
   - Agrega un **Popup** widget de OutSystems UI
   - Configura el trigger en el `user-menu` div
   - Dentro del Popup, agrega opciones: Perfil, Configuración, Cerrar Sesión

**Uso en Layout:**

1. Crea un **Web Block**: `LayoutHeader`
2. Agrega este template dentro
3. En tu **Layout** principal, inserta `LayoutHeader`
4. Todas las screens que usen el Layout tendrán el header

---

### 3. Metric Cards

**Archivo:** `metric-card.html`

**Características:**
- Grid responsive de 4 cards
- Íconos con colores temáticos
- Valores grandes y legibles
- Indicadores de tendencia (positivo/negativo)
- Hover effect con elevación

**Casos de Uso:**
- Dashboards
- Resúmenes de KPIs
- Vistas de métricas operativas

**Personalización:**
- **Cambiar Íconos:** Reemplaza el SVG dentro de `metric-icon`
- **Cambiar Colores:** Modifica inline styles `background` y `color`
- **Valores Dinámicos:** Usa Expressions con datos de Aggregates

**Datos Dinámicos:**

**Escenario:** Mostrar métricas desde una Aggregate.

1. Crea un **Aggregate**: `GetDashboardMetrics`
2. Crea un **Block**: `MetricCardGrid` con Input Parameters:
   - `TotalOrders` (Integer)
   - `ActiveOrders` (Integer)
   - `PendingOrders` (Integer)
   - `AvgResponseTime` (Text)
   - `TotalOrdersTrend` (Decimal)
   - `ActiveOrdersTrend` (Decimal)
   - etc.
3. Dentro del Block, usa Expression para construir el HTML dinámicamente
4. Drag & Drop el Block a tu Screen
5. Asigna los Input Parameters con datos del Aggregate

**Ejemplo Expression:**

```javascript
"<div class='metric-card'>
    <div class='metric-icon' style='background: var(--arca-red-light); color: var(--arca-red);'>
        <svg>...</svg>
    </div>
    <div class='metric-content'>
        <div class='metric-label'>Órdenes Totales</div>
        <div class='metric-value'>" + TotalOrders + "</div>
        <div class='metric-trend " + If(TotalOrdersTrend >= 0, "positive", "negative") + "'>
            <span>" + If(TotalOrdersTrend >= 0, "+", "") + TotalOrdersTrend + "%</span>
        </div>
    </div>
</div>"
```

---

## 🎨 Estilos CSS

Todos los templates incluyen sus estilos CSS dentro de etiquetas `<style>`.

**¿Dónde se aplican los estilos?**

Cuando usas **Expression** con `Escape Content: No`, el CSS se inyecta directamente en la página.

**⚠️ Importante:**

- Los estilos de los templates **NO interfieren** con el theme global
- Usan selectores específicos (`.sidebar`, `.metric-card`, etc.)
- Compatible con ARCA.OS Theme CSS

**Si prefieres centralizar el CSS:**

1. Copia los estilos `<style>...</style>` de cada template
2. Pégalos en el archivo **`arca-os-theme.css`**
3. Elimina las etiquetas `<style>` de los templates HTML
4. Sube el theme actualizado a Service Studio

---

## 🔧 Buenas Prácticas

### ✅ DO (Hacer)

- **Crea Blocks reutilizables** para componentes que usarás múltiples veces
- **Usa Input Parameters** para hacer los Blocks dinámicos
- **Testea en diferentes dispositivos** (Desktop, Tablet, Mobile)
- **Usa variables CSS** (`var(--arca-red)`) para mantener consistencia
- **Documenta los Input Parameters** de tus Blocks

### ❌ DON'T (No Hacer)

- **No copies el mismo HTML** en múltiples Screens (crea un Block)
- **No modifiques CSS inline** sin actualizar el theme
- **No uses `Escape Content: Yes`** con estos templates (no funcionarán)
- **No mezcles demasiados estilos inline** (usa clases del theme)

---

## 🧪 Testing

### Checklist de Verificación

Antes de poner en producción, verifica:

- [ ] El componente se ve correctamente en Desktop
- [ ] El componente se ve correctamente en Tablet
- [ ] El componente se ve correctamente en Mobile (< 768px)
- [ ] Los colores coinciden con el Design System Arca
- [ ] Los botones/links funcionan correctamente
- [ ] Los hover effects funcionan
- [ ] Los datos dinámicos se muestran correctamente
- [ ] No hay errores de JavaScript en la consola

---

## 📚 Recursos Adicionales

- **[OUTSYSTEMS_SETUP.md](../OUTSYSTEMS_SETUP.md)** - Guía de instalación del theme
- **[COMPONENTS_GUIDE.md](../COMPONENTS_GUIDE.md)** - Mapeo HTML → OutSystems
- **[STARTER_MODULE.md](../STARTER_MODULE.md)** - Crear módulo starter
- **OutSystems Expression Widget:** [Docs](https://success.outsystems.com/Documentation/11/Reference/OutSystems_Language/Traditional_Web/Web_Interfaces/Expression)
- **HTML Widget Security:** [Best Practices](https://success.outsystems.com/Documentation/Best_Practices/Security/Sanitize_end_user_input_to_prevent_code_injection)

---

## 💡 Tips Avanzados

### Animaciones con CSS

Puedes agregar animaciones personalizadas:

```css
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}

.metric-card {
    animation: fadeIn 0.3s ease-out;
}
```

### Íconos Dinámicos

Si necesitas muchos íconos diferentes, considera:

1. Crear un **Client Action**: `GetIconSVG(iconName: Text) → iconSVG: Text`
2. Usar un **Switch** para retornar el SVG correspondiente
3. Llamar la función en tus Expressions

```javascript
"<div class='metric-icon'>" + GetIconSVG("dashboard") + "</div>"
```

---

## 🆘 Soporte

¿Problemas con los templates?

- **Tech Lead:** Cristian Ortega - Tech Lead OutSystems | DPA
- **Equipo:** Digital Process Automation (DPA)
- **Revisa:** [OUTSYSTEMS_SETUP.md](../OUTSYSTEMS_SETUP.md) → Troubleshooting

---

**© 2026 Digital Process Automation (DPA) - Arca Continental**
