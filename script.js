// Datos de tutoriales
const tutoriales = [
    {
        id: 1,
        titulo: "Crear un Bot AFK en Aternos",
        juego: "minecraft",
        dificultad: "Intermedio",
        descripcion: "Aprende a crear un bot que mantenga tu servidor activo 24/7",
        contenido: "Paso 1: Instala Termux desde Google Play\nPaso 2: Ejecuta los comandos necesarios\nPaso 3: Configura tu bot\nPaso 4: Mantén Termux abierto",
        comentarios: []
    },
    {
        id: 2,
        titulo: "Configurar Oracle Cloud Free Tier",
        juego: "minecraft",
        dificultad: "Avanzado",
        descripcion: "Guía completa para crear un servidor Minecraft en Oracle Cloud",
        contenido: "1. Crea una cuenta en Oracle Cloud\n2. Configura una instancia\n3. Instala Minecraft Bedrock Server\n4. Abre los puertos necesarios\n5. Inicia tu servidor",
        comentarios: []
    },
    {
        id: 3,
        titulo: "Instalar Mods en Minecraft Bedrock",
        juego: "minecraft",
        dificultad: "Fácil",
        descripcion: "Tutorial para instalar mods y add-ons en tu servidor",
        contenido: "1. Descarga los mods compatibles\n2. Coloca los archivos en la carpeta correcta\n3. Reinicia tu servidor\n4. Verifica que los mods estén activos",
        comentarios: []
    },
    {
        id: 4,
        titulo: "Optimizar FPS en Valorant",
        juego: "valorant",
        dificultad: "Fácil",
        descripcion: "Mejora tu rendimiento en Valorant con estos ajustes",
        contenido: "1. Baja la resolución a 1280x960\n2. Desactiva la sincronización vertical\n3. Sube el FOV a 103\n4. Ajusta la sensibilidad del ratón",
        comentarios: []
    },
    {
        id: 5,
        titulo: "Mejores Configuraciones de Sensibilidad",
        juego: "valorant",
        dificultad: "Intermedio",
        descripcion: "Encuentra la sensibilidad perfecta para tu juego",
        contenido: "Sensibilidad recomendada: 0.5-1.0\nDPI del ratón: 400-800\nPractica en el rango de práctica\nAjusta según tu comodidad",
        comentarios: []
    },
    {
        id: 6,
        titulo: "Crear un Servidor en Fortnite",
        juego: "fortnite",
        dificultad: "Avanzado",
        descripcion: "Guía para crear un servidor privado de Fortnite",
        contenido: "1. Accede a Epic Games\n2. Configura tu servidor\n3. Invita a tus amigos\n4. Personaliza las reglas del juego",
        comentarios: []
    },
    {
        id: 7,
        titulo: "Ganar V-Bucks Gratis en Fortnite",
        juego: "fortnite",
        dificultad: "Fácil",
        descripcion: "Métodos legítimos para obtener V-Bucks sin gastar dinero",
        contenido: "1. Completa misiones diarias\n2. Participa en eventos especiales\n3. Abre cofres en el mapa\n4. Completa desafíos semanales",
        comentarios: []
    },
    {
        id: 8,
        titulo: "Crear un Juego en Roblox Studio",
        juego: "roblox",
        dificultad: "Intermedio",
        descripcion: "Aprende a crear tu primer juego en Roblox",
        contenido: "1. Descarga Roblox Studio\n2. Crea un nuevo proyecto\n3. Diseña tu mapa\n4. Añade scripts básicos\n5. Publica tu juego",
        comentarios: []
    },
    {
        id: 9,
        titulo: "Scripting Básico en Lua para Roblox",
        juego: "roblox",
        dificultad: "Avanzado",
        descripcion: "Introducción a la programación en Lua para Roblox",
        contenido: "1. Aprende la sintaxis básica de Lua\n2. Crea tu primer script\n3. Entiende las funciones\n4. Trabaja con eventos",
        comentarios: []
    }
];

// Datos de bots
const bots = [
    {
        id: 1,
        nombre: "Minecraft AFK Bot",
        juego: "minecraft",
        descripcion: "Bot que mantiene tu servidor Aternos activo 24/7",
        descarga: "#"
    },
    {
        id: 2,
        nombre: "Valorant Stats Bot",
        juego: "valorant",
        descripcion: "Bot para rastrear tus estadísticas en Valorant",
        descarga: "#"
    },
    {
        id: 3,
        nombre: "Fortnite Tracker",
        juego: "fortnite",
        descripcion: "Herramienta para seguir tu progreso en Fortnite",
        descarga: "#"
    },
    {
        id: 4,
        nombre: "Roblox Game Manager",
        juego: "roblox",
        descripcion: "Gestor de servidores para juegos en Roblox",
        descarga: "#"
    }
];

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
            <span class="tutorial-difficulty">${tutorial.dificultad}</span>
            <button onclick="openTutorialModal(${tutorial.id})" style="margin-top: 1rem; width: 100%; padding: 0.7rem; background: linear-gradient(135deg, #00D9FF, #0FF0FC); color: #050812; border: none; border-radius: 6px; cursor: pointer; font-weight: bold;">
                Ver Tutorial
            </button>
        `;
        grid.appendChild(card);
    });

    // Actualizar botones de filtro
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
}

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
            <button class="bot-download-btn" onclick="downloadBot('${bot.nombre}')">Descargar</button>
        `;
        grid.appendChild(card);
    });
}

// Abrir modal de tutorial
function openTutorialModal(id) {
    const tutorial = tutoriales.find(t => t.id === id);
    if (!tutorial) return;

    document.getElementById('modalTitle').textContent = tutorial.titulo;
    document.getElementById('modalDescription').textContent = tutorial.descripcion;
    document.getElementById('modalContent').innerHTML = `<p>${tutorial.contenido.replace(/\n/g, '<br>')}</p>`;
    
    renderComments(id);
    document.getElementById('tutorialModal').classList.remove('hidden');
}

// Cerrar modal
function closeTutorialModal() {
    document.getElementById('tutorialModal').classList.add('hidden');
}

// Renderizar comentarios
function renderComments(tutorialId) {
    const tutorial = tutoriales.find(t => t.id === tutorialId);
    const commentsList = document.getElementById('commentsList');
    commentsList.innerHTML = '';

    if (tutorial.comentarios.length === 0) {
        commentsList.innerHTML = '<p style="color: #a0a0a0; text-align: center;">Sin comentarios aún. ¡Sé el primero!</p>';
        return;
    }

    tutorial.comentarios.forEach(comment => {
        const commentEl = document.createElement('div');
        commentEl.className = 'comment';
        commentEl.innerHTML = `
            <div class="comment-author">${comment.author}</div>
            <div class="comment-text">${comment.text}</div>
        `;
        commentsList.appendChild(commentEl);
    });
}

// Añadir comentario
function addComment() {
    const name = document.getElementById('commentName').value;
    const text = document.getElementById('commentText').value;

    if (!name || !text) {
        alert('Por favor completa todos los campos');
        return;
    }

    // Encontrar el tutorial actual (simplificado)
    const tutorialId = tutoriales[0].id;
    const tutorial = tutoriales.find(t => t.id === tutorialId);

    tutorial.comentarios.push({ author: name, text: text });

    document.getElementById('commentName').value = '';
    document.getElementById('commentText').value = '';

    renderComments(tutorialId);
}

// Filtrar tutoriales
function filterTutorials(filter) {
    renderTutorials(filter);
}

// Descargar bot
function downloadBot(botName) {
    alert(`¡Descarga de ${botName} iniciada!\n\nPróximamente tendremos descargas directas disponibles.`);
}

// Buscar tutoriales
document.getElementById('searchInput').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const resultsContainer = document.getElementById('searchResults');

    if (searchTerm.length === 0) {
        resultsContainer.classList.add('hidden');
        return;
    }

    const results = tutoriales.filter(t => 
        t.titulo.toLowerCase().includes(searchTerm) ||
        t.descripcion.toLowerCase().includes(searchTerm) ||
        t.juego.toLowerCase().includes(searchTerm)
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
