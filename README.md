# SIRO Integration Builder 🚀

Constructor de soluciones de pago a medida - Plataforma integral de recaudación y pagos digitales.

## 📋 Descripción

SIRO Integration Builder es una aplicación interactiva que permite a los equipos técnicos explorar, seleccionar y documentar soluciones de integración de pagos de manera visual. El proyecto combina un árbol conceptual interactivo con un sistema de gestión de roadmap técnico.

## ✨ Características

- **Exploración Visual**: Navega por las soluciones SIRO usando un árbol conceptual interactivo
- **Gestión de Estado**: Marca soluciones como "Pendiente" o "Implementado"
- **Documentación Just-in-Time**: Accede a detalles técnicos y snippets de código según avanzas
- **Generación de Reportes**: Exporta un resumen completo de tu integración
- **Interfaz Moderna**: Diseño limpio con Tailwind CSS v4 y animaciones suaves

## 🛠️ Tecnologías

- **React 19** - Framework principal
- **Tailwind CSS v4** - Estilos y diseño
- **Vite** - Build tool y dev server
- **Lucide React** - Iconos
- **ESLint** - Linting y calidad de código

## 📁 Estructura del Proyecto

\`\`\`
src/
├── components/          # Componentes React modulares
│   ├── Breadcrumbs.jsx
│   ├── ChildrenList.jsx
│   ├── ConceptTree.jsx
│   ├── Header.jsx
│   ├── NodeActions.jsx
│   ├── ReportModal.jsx
│   ├── StatusIcon.jsx
│   └── TechnicalDetails.jsx
├── data/               # Datos y constantes
│   └── siroData.js
├── hooks/              # Hooks personalizados
│   └── useIntegrationBuilder.js
├── App.jsx             # Componente principal
├── main.jsx            # Entry point
└── index.css           # Estilos globales
\`\`\`

## 🚀 Instalación y Uso

### Prerrequisitos

- Node.js 18+ 
- npm o yarn

### Scripts Disponibles

\`\`\`bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run preview  # Preview del build
npm run lint     # Ejecutar ESLint
\`\`\`

## 🎨 Guía de Estilo

### Paleta de Colores

- **Verde Principal**: \`#005C35\` - Color corporativo SIRO
- **Naranja/Dorado**: \`#F2A900\` - Color de acento
- **Fondo Gris**: \`#F3F4F6\` - Background neutral

## 📚 Arquitectura

### Hooks Personalizados

**\`useIntegrationBuilder\`**: Maneja toda la lógica del estado de la aplicación
- Gestión de rutas (breadcrumbs)
- Selección de nodos
- Estados (pendiente/implementado)
- Generación de reportes

### Optimizaciones

- **useMemo**: Cálculos costosos (findNode, selectedNodes)
- **useCallback**: Funciones pasadas como props
- **React.memo**: ConceptTree para evitar re-renders innecesarios

## 🌐 Accesibilidad

El proyecto implementa:
- Etiquetas ARIA apropiadas
- Navegación por teclado
- Roles semánticos HTML5
- Contraste de colores WCAG 2.1 AA

---

Desarrollado con ❤️ para SIRO
