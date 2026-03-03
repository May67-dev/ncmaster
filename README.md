# NcMaster - Tutoriales y Bots para Gamers

Una página web moderna y profesional con tutoriales y bots para juegos populares.

## 🎮 Características

- **Diseño Moderno**: Interfaz oscura con neón cyan, estilo gamer futurista
- **Buscador de Tutoriales**: Busca rápidamente entre todos los tutoriales disponibles
- **Filtros por Juego**: Minecraft, Valorant, Fortnite, Roblox y más
- **Sistema de Comentarios**: Los usuarios pueden dejar comentarios en cada tutorial
- **Descarga de Bots**: Acceso a bots listos para descargar
- **Formulario de Contacto**: Para sugerencias y consultas
- **Responsive**: Funciona perfectamente en móviles, tablets y desktop

## 📁 Estructura de Archivos

```
ncmaster/
├── index.html      # Archivo principal HTML
├── styles.css      # Estilos CSS (diseño oscuro neón)
├── script.js       # Funcionalidades JavaScript
├── logo.png        # Logo de NcMaster
└── README.md       # Este archivo
```

## 🚀 Cómo Usar en Netlify

### Opción 1: Drag & Drop (La Más Fácil)

1. Ve a https://netlify.com
2. Inicia sesión o crea una cuenta
3. Arrastra la carpeta `ncmaster` a la zona de drop
4. ¡Tu página estará en línea en segundos!

### Opción 2: Conectar con GitHub

1. Sube la carpeta a un repositorio en GitHub
2. Ve a Netlify y conecta tu repositorio
3. Netlify desplegará automáticamente tu página

### Opción 3: Desde Android

1. Ve a https://netlify.com desde tu navegador
2. Crea una cuenta
3. Usa el método drag & drop o conecta GitHub
4. ¡Listo!

## 🎨 Personalización

### Cambiar Colores

Abre `styles.css` y modifica las variables en `:root`:

```css
:root {
    --primary-cyan: #00D9FF;      /* Color principal */
    --secondary-cyan: #0FF0FC;    /* Color secundario */
    --dark-bg: #0a0e27;           /* Fondo oscuro */
    /* ... más variables */
}
```

### Añadir Tutoriales

Abre `script.js` y añade nuevos tutoriales al array `tutoriales`:

```javascript
{
    id: 10,
    titulo: "Tu Tutorial",
    juego: "minecraft",
    dificultad: "Fácil",
    descripcion: "Descripción corta",
    contenido: "Contenido del tutorial",
    comentarios: []
}
```

### Añadir Bots

Abre `script.js` y añade nuevos bots al array `bots`:

```javascript
{
    id: 5,
    nombre: "Tu Bot",
    juego: "minecraft",
    descripcion: "Descripción del bot",
    descarga: "#"
}
```

## 🔧 Funcionalidades

- ✅ Buscador en tiempo real
- ✅ Filtros por juego
- ✅ Sistema de comentarios
- ✅ Modal para ver tutoriales completos
- ✅ Formulario de contacto
- ✅ Diseño responsive
- ✅ Animaciones suaves
- ✅ Efectos de glow neón

## 📱 Compatibilidad

- ✅ Chrome
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Navegadores móviles

## 💡 Consejos

1. **Backup**: Guarda una copia de tus archivos
2. **Actualizaciones**: Puedes actualizar tu página directamente desde Netlify
3. **Dominio Personalizado**: Conecta tu dominio de Freenom en Netlify
4. **SSL Gratis**: Netlify proporciona SSL gratis automáticamente

## 📞 Soporte

Si tienes dudas sobre cómo usar la página o quieres añadir más funcionalidades, puedes:

1. Usar el formulario de contacto en la página
2. Editar los archivos directamente
3. Consultar la documentación de Netlify

## 📄 Licencia

Esta página es completamente tuya. Úsala como desees.

---

**¡Disfruta tu página NcMaster!** 🚀
