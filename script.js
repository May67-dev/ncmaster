// Datos de bots AFK para Aternos (Conectados al servidor)
const bots = [
    {
        id: 1,
        nombre: "Bot AFK Mineflayer (Node.js)",
        juego: "minecraft",
        descripcion: "Bot que se conecta a tu servidor Aternos y aparece como jugador. Está dentro del servidor 24/7, lo que impide que Aternos lo apague.",
        codigo: `// Instalar:
// npm install mineflayer

const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'tu-servidor.aternos.me',  // Cambia esto
  port: 19132,                       // Puerto de Bedrock
  username: 'NombreBot',             // Nombre del bot
  version: '1.20'                    // Version de Minecraft
});

bot.on('login', () => {
  console.log('Bot conectado al servidor!');
});

bot.on('end', () => {
  console.log('Bot desconectado, reconectando...');
  setTimeout(() => {
    process.exit(0);
  }, 5000);
});

bot.on('error', (err) => {
  console.log('Error:', err);
});`,
        ventajas: "Bot real dentro del servidor, Aternos lo detecta, gratis",
        desventajas: "Requiere Node.js, necesita estar ejecutándose siempre"
    },
    {
        id: 2,
        nombre: "Bot AFK Termux (Android)",
        juego: "minecraft",
        descripcion: "Ejecuta el bot directamente en tu Android usando Termux. El bot se conectará a tu servidor y estará dentro 24/7.",
        codigo: `// En Termux (Android):
// 1. Instalar Termux desde Google Play
// 2. Ejecutar:

pkg update
pkg install nodejs
npm install mineflayer

// 3. Crear archivo bot.js con el código anterior
// 4. Ejecutar:
node bot.js

// El bot estará conectado a tu servidor
// Mantén Termux abierto o usa una app para mantener procesos en background

// Apps recomendadas:
// - Termux:Boot
// - Tasker
// - MacroDroid`,
        ventajas: "Funciona en Android, bot real dentro del servidor",
        desventajas: "Tu teléfono debe estar encendido, consume batería"
    },
    {
        id: 3,
        nombre: "Bot AFK en Glitch (Nube 24/7)",
        juego: "minecraft",
        descripcion: "Aloja el bot en Glitch.com. Se ejecuta 24/7 en la nube sin necesidad de tu teléfono. El bot estará siempre dentro del servidor.",
        codigo: `// En Glitch.com:
// 1. Crear nuevo proyecto
// 2. Instalar: npm install mineflayer
// 3. Crear server.js:

const mineflayer = require('mineflayer');
const http = require('http');

const bot = mineflayer.createBot({
  host: 'tu-servidor.aternos.me',
  port: 19132,
  username: 'GlitchBot',
  version: '1.20'
});

bot.on('login', () => {
  console.log('Bot en Glitch conectado!');
});

// Servidor HTTP para mantener Glitch activo
http.createServer((req, res) => {
  res.writeHead(200);
  res.end('Bot activo');
}).listen(3000);`,
        ventajas: "24/7 automático, no consume tu PC, bot real en servidor",
        desventajas: "Requiere cuenta en Glitch"
    },
    {
        id: 4,
        nombre: "Bot AFK Python (Alternativa)",
        juego: "minecraft",
        descripcion: "Bot escrito en Python. Se conecta a tu servidor y permanece dentro. Alternativa si prefieres Python sobre Node.js.",
        codigo: `# Instalar:
pip install mcpi

# Crear bot.py:
from mcpi.minecraft import Minecraft
import time

# Conectar al servidor
mc = Minecraft.create(
    host='tu-servidor.aternos.me',
    port=19132,
    username='BotPython'
)

print('Bot conectado al servidor')

# Mantener el bot conectado
while True:
    try:
        time.sleep(60)
    except:
        print('Error, reconectando...')
        time.sleep(5)

# Ejecutar: python bot.py`,
        ventajas: "Fácil de entender, bot real en servidor",
        desventajas: "Python puede ser más lento que Node.js"
    }
];

// Datos de tutoriales
const tutoriales = [
    {
        id: 1,
        titulo: "Crear servidor Minecraft Bedrock en Oracle Cloud",
        juego: "minecraft",
        descripcion: "Guía completa para crear un servidor Bedrock gratis en Oracle Cloud con 24GB RAM.",
        contenido: `
            <h4>Paso 1: Crear cuenta en Oracle Cloud</h4>
            <p>Ve a oracle.com/cloud/free y crea una cuenta. Oracle ofrece $300 crédito gratis y siempre-gratis para ciertos servicios.</p>
            
            <h4>Paso 2: Crear instancia de compute</h4>
            <p>En el dashboard, ve a Compute > Instances y crea una nueva instancia. Elige Ubuntu 22.04 como sistema operativo.</p>
            
            <h4>Paso 3: Conectar por SSH</h4>
            <p>Descarga la clave privada y conecta: ssh -i clave.key ubuntu@tu-ip-publica</p>
            
            <h4>Paso 4: Instalar Minecraft Server</h4>
            <p>Ejecuta los comandos para descargar e instalar el servidor Bedrock.</p>
            
            <h4>Paso 5: Configurar firewall</h4>
            <p>Abre el puerto 19132 (UDP) en las reglas de seguridad de Oracle Cloud.</p>
            
            <h4>Paso 6: Iniciar servidor</h4>
            <p>Ejecuta el servidor y comparte la IP con tus amigos para que se conecten.</p>
        `
    },
    {
        id: 2,
        titulo: "Usar Aternos para servidor Bedrock",
        juego: "minecraft",
        descripcion: "Forma más fácil de crear un servidor sin configuración técnica.",
        contenido: `
            <h4>Paso 1: Ir a Aternos</h4>
            <p>Ve a aternos.org y crea una cuenta gratis.</p>
            
            <h4>Paso 2: Crear servidor</h4>
            <p>Haz clic en "Create" y selecciona Minecraft Bedrock.</p>
            
            <h4>Paso 3: Configurar</h4>
            <p>Elige el nombre, versión y gamemode de tu servidor.</p>
            
            <h4>Paso 4: Compartir IP</h4>
            <p>Aternos te dará una IP. Comparte con tus amigos para que se conecten.</p>
            
            <h4>Paso 5: Mantener activo</h4>
            <p>Usa un bot AFK para que el servidor no se apague después de 5 minutos sin jugadores.</p>
        `
    },
    {
        id: 3,
        titulo: "Instalar mods en Minecraft Bedrock",
        juego: "minecraft",
        descripcion: "Cómo agregar mods y extensiones a tu servidor.",
        contenido: `
            <h4>Opción 1: Usar Behavior Packs</h4>
            <p>Los behavior packs son la forma oficial de agregar contenido a Bedrock.</p>
            
            <h4>Opción 2: Usar Resource Packs</h4>
            <p>Cambia la apariencia del juego con resource packs personalizados.</p>
            
            <h4>Opción 3: Usar AddOns</h4>
            <p>Los addons combinan behavior y resource packs para funcionalidad completa.</p>
            
            <h4>Dónde descargar</h4>
            <p>Busca en mcpedl.com o planetminecraft.com para descargas seguras.</p>
        `
    },
    {
        id: 4,
        titulo: "Configurar Valorant correctamente",
        juego: "valorant",
        descripcion: "Guía para optimizar tu setup en Valorant.",
        contenido: `
            <h4>Configuración de Video</h4>
            <p>Baja la resolución a 1280x960 para más FPS. Desactiva sombras y efectos.</p>
            
            <h4>Configuración de Sonido</h4>
            <p>Usa headphones. Activa el sonido 3D para escuchar pasos enemigos.</p>
            
            <h4>Sensibilidad del Mouse</h4>
            <p>Usa 0.5-0.8 de sensibilidad. Practica en el rango de disparo.</p>
            
            <h4>Configuración de Red</h4>
            <p>Asegúrate de tener baja latencia (ping bajo). Usa conexión por cable.</p>
        `
    },
    {
        id: 5,
        titulo: "Mejorar tu aim en Fortnite",
        juego: "fortnite",
        descripcion: "Técnicas para mejorar tu precisión en Fortnite.",
        contenido: `
            <h4>Práctica en Creative</h4>
            <p>Usa mapas de Creative para practicar tu aim sin presión.</p>
            
            <h4>Sensibilidad Correcta</h4>
            <p>Encuentra la sensibilidad que te haga cómodo. Practica consistentemente.</p>
            
            <h4>Crosshair Placement</h4>
            <p>Mantén tu crosshair a la altura de la cabeza de los enemigos.</p>
            
            <h4>Entrenamiento</h4>
            <p>Juega 30 minutos diarios en Creative antes de jugar Battle Royale.</p>
        `
    },
    {
        id: 6,
        titulo: "Ganar Robux en Roblox",
        juego: "roblox",
        descripcion: "Formas legales de obtener Robux gratis.",
        contenido: `
            <h4>Opción 1: Roblox Premium</h4>
            <p>Suscríbete a Roblox Premium para recibir Robux mensualmente.</p>
            
            <h4>Opción 2: Crear Juegos</h4>
            <p>Crea un juego popular y monetízalo. Gana Robux de otros jugadores.</p>
            
            <h4>Opción 3: Vender Items</h4>
            <p>Crea items personalizados y vénde los en el marketplace.</p>
            
            <h4>Advertencia</h4>
            <p>Evita sitios que prometen Robux gratis. Son estafas.</p>
        `
    },
    {
        id: 7,
        titulo: "Configurar servidor privado en Minecraft Java",
        juego: "minecraft",
        descripcion: "Cómo crear un servidor privado para ti y tus amigos.",
        contenido: `
            <h4>Opción 1: Usar Aternos</h4>
            <p>La forma más fácil. Ve a aternos.org y sigue los pasos.</p>
            
            <h4>Opción 2: Servidor Local</h4>
            <p>Descarga server.jar de minecraft.net y ejecuta en tu PC.</p>
            
            <h4>Opción 3: VPS</h4>
            <p>Alquila un VPS en DigitalOcean o Linode para servidor 24/7.</p>
            
            <h4>Paso Final</h4>
            <p>Comparte la IP con tus amigos para que se conecten.</p>
        `
    },
    {
        id: 8,
        titulo: "Hacer streaming en Twitch",
        juego: "valorant",
        descripcion: "Guía para comenzar a hacer streaming de tus juegos.",
        contenido: `
            <h4>Paso 1: Crear cuenta en Twitch</h4>
            <p>Ve a twitch.tv y crea una cuenta gratis.</p>
            
            <h4>Paso 2: Descargar OBS Studio</h4>
            <p>OBS es gratis y es el mejor software para streaming.</p>
            
            <h4>Paso 3: Configurar OBS</h4>
            <p>Conecta tu micrófono, cámara y captura de pantalla.</p>
            
            <h4>Paso 4: Comenzar a transmitir</h4>
            <p>Haz clic en "Start Streaming" y ¡comienza a jugar!</p>
        `
    },
    {
        id: 9,
        titulo: "Optimizar tu PC para juegos",
        juego: "minecraft",
        descripcion: "Consejos para mejorar el rendimiento de tu computadora.",
        contenido: `
            <h4>Limpiar archivos temporales</h4>
            <p>Usa CCleaner para eliminar archivos innecesarios.</p>
            
            <h4>Desactivar programas en background</h4>
            <p>Cierra aplicaciones que no necesites mientras juegas.</p>
            
            <h4>Actualizar drivers</h4>
            <p>Actualiza los drivers de tu tarjeta gráfica regularmente.</p>
            
            <h4>Aumentar RAM virtual</h4>
            <p>Si tienes poca RAM, aumenta la memoria virtual en Windows.</p>
        `
    }
];

let currentTutorialId = null;

// Cargar tutoriales al iniciar
document.addEventListener('DOMContentLoaded', () => {
    renderTutorials('todos');
    renderBots();
});

// Renderizar tutoriales
function renderTutorials(filter) {
    const grid = document.getElementById('tutorialesGrid');
    grid.innerHTML = '';

    const filtered = filter === 'todos' 
        ? tutoriales 
        : tutoriales.filter(t => t.juego === filter);

    filtered.forEach(tutorial => {
        const card = document.createElement('div');
        card.className = 'tutorial-card';
        card.innerHTML = `
            <span class="tutorial-game">${tutorial.juego.toUpperCase()}</span>
            <h3>${tutorial.titulo}</h3>
            <p>${tutorial.descripcion}</p>
            <button class="tutorial-btn" onclick="openTutorialModal(${tutorial.id})">Leer Más</button>
        `;
        grid.appendChild(card);
    });
}

// Filtrar tutoriales
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (event) => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        renderTutorials(event.target.dataset.filter);
        event.target.classList.add('active');
    });
});

// Renderizar bots
function renderBots() {
    const grid = document.getElementById('botsGrid');
    grid.innerHTML = '';

    bots.forEach(bot => {
        const card = document.createElement('div');
        card.className = 'bot-card';
        card.innerHTML = `
            <div class="bot-icon">🤖</div>
            <h3>${bot.nombre}</h3>
            <p>${bot.descripcion}</p>
            <div style="margin: 1rem 0; padding: 0.8rem; background-color: rgba(0, 217, 255, 0.05); border-left: 3px solid #00D9FF; border-radius: 4px;">
                <p style="font-size: 0.85rem; color: #00D9FF; font-weight: bold; margin: 0.3rem 0;">✅ ${bot.ventajas}</p>
                <p style="font-size: 0.85rem; color: #ff6b6b; font-weight: bold; margin: 0.3rem 0;">⚠️ ${bot.desventajas}</p>
            </div>
            <button class="bot-download-btn" onclick="viewBotCode(${bot.id})">Ver Código</button>
        `;
        grid.appendChild(card);
    });
}

// Ver código del bot
function viewBotCode(botId) {
    const bot = bots.find(b => b.id === botId);
    if (!bot) return;

    const codeContent = `
        <h4>Bot AFK para Aternos</h4>
        <p>${bot.descripcion}</p>
        <h4>Código:</h4>
        <pre style="background-color: #050812; padding: 1rem; border-radius: 6px; overflow-x: auto; font-size: 0.85rem; line-height: 1.4;">${bot.codigo}</pre>
        <h4>Ventajas:</h4>
        <p>${bot.ventajas}</p>
        <h4>Desventajas:</h4>
        <p>${bot.desventajas}</p>
    `;

    document.getElementById('modalTitle').textContent = bot.nombre;
    document.getElementById('modalDescription').textContent = 'Bot AFK para mantener tu servidor Aternos activo 24/7';
    document.getElementById('modalContent').innerHTML = codeContent;
    document.getElementById('tutorialModal').classList.remove('hidden');
}

// Abrir modal de tutorial
function openTutorialModal(id) {
    const tutorial = tutoriales.find(t => t.id === id);
    if (!tutorial) return;

    document.getElementById('modalTitle').textContent = tutorial.titulo;
    document.getElementById('modalDescription').textContent = tutorial.juego.toUpperCase();
    document.getElementById('modalContent').innerHTML = `<p>${tutorial.contenido}</p>`;
    document.getElementById('tutorialModal').classList.remove('hidden');
    currentTutorialId = id;
}

// Cerrar modal de tutorial
function closeTutorialModal() {
    document.getElementById('tutorialModal').classList.add('hidden');
    currentTutorialId = null;
}

// Buscador de tutoriales
document.getElementById('searchInput')?.addEventListener('input', (event) => {
    const query = event.target.value.toLowerCase();
    const resultsContainer = document.getElementById('searchResults');

    if (query.length === 0) {
        resultsContainer.classList.add('hidden');
        return;
    }

    const results = tutoriales.filter(t => 
        t.titulo.toLowerCase().includes(query) || 
        t.descripcion.toLowerCase().includes(query)
    );

    resultsContainer.innerHTML = '';

    results.forEach(result => {
        const item = document.createElement('div');
        item.className = 'search-result-item';
        item.textContent = result.titulo;
        item.onclick = () => {
            openTutorialModal(result.id);
            resultsContainer.classList.add('hidden');
            document.getElementById('searchInput').value = '';
        };
        resultsContainer.appendChild(item);
    });

    if (results.length > 0) {
        resultsContainer.classList.remove('hidden');
    } else {
        resultsContainer.innerHTML = '<div class="search-result-item" style="text-align: center; color: #a0a0a0;">No se encontraron resultados</div>';
        resultsContainer.classList.remove('hidden');
    }
});

// Cerrar modal al hacer clic fuera
window.onclick = (event) => {
    const modal = document.getElementById('tutorialModal');
    if (event.target === modal) {
        closeTutorialModal();
    }
};

// Manejar envío de formulario de contacto
function handleContactSubmit(event) {
    event.preventDefault();
    alert('¡Gracias por tu mensaje! Nos pondremos en contacto pronto.');
    event.target.reset();
}

// Toggle del menú móvil
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

function closeMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.remove('active');
}
