// Datos de tutoriales completos y detallados
const tutoriales = [
    {
        id: 1,
        titulo: "Crear un Bot AFK en Aternos - Guía Completa",
        juego: "minecraft",
        dificultad: "Intermedio",
        descripcion: "Aprende a crear un bot que mantenga tu servidor Aternos activo 24/7 sin intervención manual",
        contenido: `
            <h4>¿Qué es un Bot AFK?</h4>
            <p>Un bot AFK (Away From Keyboard) es un programa que se conecta a tu servidor Minecraft como si fuera un jugador real. Aternos mantiene los servidores activos mientras hay jugadores conectados, así que un bot AFK asegura que tu servidor nunca se apague.</p>

            <h4>Opción 1: Usando Termux en Android (Recomendado)</h4>
            <ol>
                <li><strong>Descarga Termux:</strong> Abre Google Play y busca "Termux". Descárgalo (es gratis).</li>
                <li><strong>Instala Node.js:</strong> Abre Termux y ejecuta: <code>pkg install nodejs</code></li>
                <li><strong>Instala mineflayer:</strong> Ejecuta: <code>npm install mineflayer</code></li>
                <li><strong>Crea el bot:</strong> Crea un archivo llamado bot.js con el siguiente código:
                    <pre>const mineflayer = require('mineflayer');
const bot = mineflayer.createBot({
  host: 'tu_servidor.aternos.me',
  port: 19132,
  username: 'TuNombreBot',
  version: '1.20'
});

bot.on('login', () => {
  console.log('Bot conectado');
});

bot.on('end', () => {
  console.log('Reconectando...');
  setTimeout(() => process.exit(0), 5000);
});</pre>
                </li>
                <li><strong>Ejecuta el bot:</strong> Escribe: <code>node bot.js</code></li>
                <li><strong>Mantén Termux abierto:</strong> El bot funcionará mientras Termux esté activo.</li>
            </ol>

            <h4>Opción 2: Usando GitHub Actions (Más Fácil)</h4>
            <ol>
                <li>Crea un repositorio en GitHub</li>
                <li>Sube el código del bot</li>
                <li>Configura un workflow que ejecute el bot cada 5 minutos</li>
                <li>GitHub ejecutará automáticamente tu bot 24/7</li>
            </ol>

            <h4>Opción 3: Servidor Local</h4>
            <ol>
                <li>Instala Python en tu computadora</li>
                <li>Instala la librería: <code>pip install aternos</code></li>
                <li>Crea un script que inicie tu servidor</li>
                <li>Ejecuta el script en background</li>
            </ol>

            <h4>Consejos Importantes</h4>
            <ul>
                <li>Nunca compartas tu contraseña de Aternos con bots de terceros</li>
                <li>Usa nombres de bot descriptivos para identificarlos fácilmente</li>
                <li>Verifica que el bot esté conectado antes de desconectarte</li>
                <li>Algunos bots pueden causar lag si hay muchos conectados</li>
            </ul>
        `
    },
    {
        id: 2,
        titulo: "Configurar Oracle Cloud Free Tier - Servidor 24/7",
        juego: "minecraft",
        dificultad: "Avanzado",
        descripcion: "Guía paso a paso para crear un servidor Minecraft Bedrock potente y completamente gratis en Oracle Cloud",
        contenido: `
            <h4>¿Por Qué Oracle Cloud?</h4>
            <p>Oracle Cloud ofrece 24GB de RAM y 4 OCPUs completamente gratis, suficiente para un servidor Minecraft con 50-100 jugadores simultáneos. Es verdaderamente 24/7 sin necesidad de bots.</p>

            <h4>Paso 1: Crear Cuenta en Oracle Cloud</h4>
            <ol>
                <li>Ve a https://www.oracle.com/cloud/free/</li>
                <li>Haz clic en "Start for Free"</li>
                <li>Completa el formulario con tus datos</li>
                <li>Verifica tu email y número de teléfono</li>
                <li>Añade una tarjeta de crédito (para verificación, no se efectúan cargos)</li>
                <li>Selecciona tu región (elige la más cercana a tus jugadores)</li>
            </ol>

            <h4>Paso 2: Crear una Instancia de Computación</h4>
            <ol>
                <li>En la consola, ve a "Compute" → "Instances"</li>
                <li>Haz clic en "Create Instance"</li>
                <li>Configura:
                    <ul>
                        <li>Nombre: minecraft-server</li>
                        <li>Imagen: Ubuntu 22.04 Minimal</li>
                        <li>Shape: VM.Standard.A1.Flex (Ampere)</li>
                        <li>OCPUs: 4</li>
                        <li>Memoria: 24 GB</li>
                    </ul>
                </li>
                <li>Haz clic en "Create"</li>
            </ol>

            <h4>Paso 3: Conectarse por SSH</h4>
            <ol>
                <li>Descarga tu clave privada desde Oracle Cloud</li>
                <li>Abre una terminal en tu computadora</li>
                <li>Ejecuta: <code>ssh -i /ruta/a/clave.key ubuntu@IP_PUBLICA</code></li>
                <li>Reemplaza IP_PUBLICA con la IP de tu instancia</li>
            </ol>

            <h4>Paso 4: Instalar Minecraft Bedrock Server</h4>
            <ol>
                <li>Actualiza el sistema: <code>sudo apt update && sudo apt upgrade -y</code></li>
                <li>Instala dependencias: <code>sudo apt install -y wget unzip screen</code></li>
                <li>Crea directorio: <code>mkdir minecraft && cd minecraft</code></li>
                <li>Descarga el servidor: <code>wget https://minecraft.azureedge.net/bin-linux/bedrock-server-1.20.50.zip</code></li>
                <li>Descomprime: <code>unzip bedrock-server-1.20.50.zip</code></li>
                <li>Da permisos: <code>chmod +x bedrock_server</code></li>
            </ol>

            <h4>Paso 5: Abrir Puertos en Oracle Cloud</h4>
            <ol>
                <li>Ve a tu VCN en "Networking" → "Virtual Cloud Networks"</li>
                <li>Selecciona tu VCN y ve a "Security Lists"</li>
                <li>Añade reglas de entrada (Ingress Rules):
                    <ul>
                        <li>Protocolo: UDP</li>
                        <li>Puerto Destino: 19132 y 19133</li>
                        <li>CIDR de Origen: 0.0.0.0/0</li>
                    </ul>
                </li>
            </ol>

            <h4>Paso 6: Iniciar el Servidor</h4>
            <ol>
                <li>Crea un script start.sh: <code>echo "#!/bin/bash\nscreen -S minecraft -dm bash -c 'LD_LIBRARY_PATH=. ./bedrock_server'" > start.sh</code></li>
                <li>Da permisos: <code>chmod +x start.sh</code></li>
                <li>Ejecuta: <code>./start.sh</code></li>
                <li>Verifica: <code>screen -ls</code></li>
            </ol>

            <h4>Paso 7: Conectar desde Minecraft</h4>
            <ol>
                <li>Obtén la IP pública de tu instancia</li>
                <li>Abre Minecraft Bedrock</li>
                <li>Ve a "Play" → "Servers" → "Add Server"</li>
                <li>Ingresa tu IP pública y puerto 19132</li>
                <li>¡Comparte el código con tus amigos!</li>
            </ol>

            <h4>Mantenimiento y Backups</h4>
            <ul>
                <li>Crea backups automáticos con cron</li>
                <li>Monitorea el uso de CPU y memoria</li>
                <li>Mantén al menos 20% de uso de CPU para evitar que Oracle desactive tu instancia</li>
                <li>Actualiza el servidor regularmente</li>
            </ul>
        `
    },
    {
        id: 3,
        titulo: "Instalar y Configurar Mods en Minecraft Bedrock",
        juego: "minecraft",
        dificultad: "Intermedio",
        descripcion: "Tutorial completo para instalar mods, add-ons y paquetes de recursos en tu servidor Minecraft Bedrock",
        contenido: `
            <h4>Tipos de Modificaciones en Bedrock</h4>
            <p>Minecraft Bedrock soporta tres tipos de modificaciones:</p>
            <ul>
                <li><strong>Behavior Packs:</strong> Modifican la mecánica del juego</li>
                <li><strong>Resource Packs:</strong> Cambian texturas y sonidos</li>
                <li><strong>Add-ons:</strong> Combinan behavior y resource packs</li>
            </ul>

            <h4>Paso 1: Descargar Mods</h4>
            <ol>
                <li>Ve a sitios confiables como:
                    <ul>
                        <li>mcpedl.com (Minecraft PE Downloads)</li>
                        <li>mediafire.com (busca mods Bedrock)</li>
                        <li>GitHub (repositorios de mods)</li>
                    </ul>
                </li>
                <li>Descarga los mods en formato .mcpack o .zip</li>
                <li>Verifica que sean compatibles con tu versión de Minecraft</li>
            </ol>

            <h4>Paso 2: Instalar en Servidor Aternos</h4>
            <ol>
                <li>Ve a tu panel de Aternos</li>
                <li>Haz clic en "Mods"</li>
                <li>Busca el mod que quieres instalar</li>
                <li>Haz clic en "Install"</li>
                <li>Reinicia tu servidor</li>
            </ol>

            <h4>Paso 3: Instalar en Servidor Local/Oracle Cloud</h4>
            <ol>
                <li>Coloca los archivos .mcpack en la carpeta correcta</li>
                <li>En Windows: %appdata%\\.minecraft\\behavior_packs</li>
                <li>En Linux: ~/.minecraft/behavior_packs</li>
                <li>Reinicia el servidor</li>
                <li>Verifica que los mods estén activos en el menú de configuración</li>
            </ol>

            <h4>Mods Populares Recomendados</h4>
            <ul>
                <li><strong>Furniture Mod:</strong> Añade muebles decorativos</li>
                <li><strong>Guns Mod:</strong> Añade armas personalizadas</li>
                <li><strong>Dinosaurs Mod:</strong> Añade dinosaurios al juego</li>
                <li><strong>Vehicles Mod:</strong> Añade vehículos</li>
                <li><strong>Better Nether:</strong> Mejora el Nether</li>
            </ul>

            <h4>Solución de Problemas</h4>
            <ul>
                <li><strong>El mod no aparece:</strong> Verifica que sea compatible con tu versión</li>
                <li><strong>El servidor no inicia:</strong> Desactiva el mod y reinicia</li>
                <li><strong>Lag excesivo:</strong> Reduce la cantidad de mods o usa versiones más ligeras</li>
                <li><strong>Conflictos entre mods:</strong> Instala mods uno a uno para identificar el problema</li>
            </ul>

            <h4>Consejos Importantes</h4>
            <ul>
                <li>Siempre haz backup antes de instalar mods</li>
                <li>Instala mods de fuentes confiables</li>
                <li>No instales demasiados mods a la vez</li>
                <li>Lee las instrucciones de cada mod antes de instalar</li>
            </ul>
        `
    },
    {
        id: 4,
        titulo: "Optimizar FPS en Valorant - Guía Completa",
        juego: "valorant",
        dificultad: "Fácil",
        descripcion: "Mejora significativamente tu rendimiento en Valorant con estos ajustes de configuración y hardware",
        contenido: `
            <h4>¿Por Qué Optimizar FPS?</h4>
            <p>En Valorant, cada fotograma cuenta. Tener 60+ FPS estables es crucial para jugar competitivamente. Una mejor tasa de fotogramas significa:</p>
            <ul>
                <li>Menos lag de entrada</li>
                <li>Mejor precisión con el ratón</li>
                <li>Reacción más rápida a los enemigos</li>
                <li>Experiencia de juego más fluida</li>
            </ul>

            <h4>Ajustes de Gráficos Recomendados</h4>
            <ol>
                <li><strong>Resolución:</strong> 1280x960 (16:10) o 1024x768 (4:3)
                    <ul>
                        <li>Resoluciones más bajas = más FPS</li>
                        <li>Escala de resolución: 100%</li>
                    </ul>
                </li>
                <li><strong>Modo de pantalla:</strong> Pantalla completa (no ventana)</li>
                <li><strong>Sincronización vertical (V-Sync):</strong> DESACTIVADA</li>
                <li><strong>Antialiasing:</strong> Desactivado</li>
                <li><strong>Anisotropic Filtering:</strong> 1x</li>
                <li><strong>Texture Detail:</strong> Bajo</li>
                <li><strong>Distancia de visión:</strong> Bajo</li>
                <li><strong>Sombras:</strong> Desactivadas</li>
                <li><strong>Efectos especiales:</strong> Bajo</li>
            </ol>

            <h4>Configuración del Ratón</h4>
            <ol>
                <li><strong>Sensibilidad en el juego:</strong> 0.5-1.0 (depende de tu preferencia)</li>
                <li><strong>DPI del ratón:</strong> 400-800 (recomendado 800)</li>
                <li><strong>Aceleración del ratón:</strong> DESACTIVADA</li>
                <li><strong>Raw Input:</strong> ACTIVADO</li>
                <li><strong>Velocidad de escaneo del ratón:</strong> 1000 Hz (si tu ratón lo soporta)</li>
            </ol>

            <h4>Ajustes del Sistema Operativo</h4>
            <ol>
                <li><strong>Cierra programas innecesarios:</strong> Discord, Chrome, etc.</li>
                <li><strong>Desactiva actualizaciones automáticas</strong> mientras juegas</li>
                <li><strong>Prioridad de proceso:</strong> Abre el Administrador de tareas y establece Valorant como alta prioridad</li>
                <li><strong>Modo de rendimiento:</strong> Activa el modo de rendimiento en Windows</li>
            </ol>

            <h4>Requisitos Mínimos de Hardware</h4>
            <ul>
                <li><strong>CPU:</strong> Intel Core 2 Duo E8400 o equivalente</li>
                <li><strong>RAM:</strong> 4 GB mínimo (8 GB recomendado)</li>
                <li><strong>GPU:</strong> Intel HD 4000 o NVIDIA GeForce GT 730</li>
                <li><strong>SSD:</strong> Recomendado para cargas más rápidas</li>
            </ol>

            <h4>Monitoreo de FPS</h4>
            <ol>
                <li>En Valorant, ve a Settings → Video</li>
                <li>Activa "Show FPS Counter"</li>
                <li>Observa tus FPS durante el juego</li>
                <li>Ajusta los gráficos si caen por debajo de 60 FPS</li>
            </ol>

            <h4>Solución de Problemas</h4>
            <ul>
                <li><strong>FPS bajo:</strong> Baja más los gráficos, cierra programas en background</li>
                <li><strong>Stuttering:</strong> Actualiza drivers de GPU, desactiva V-Sync</li>
                <li><strong>Lag de entrada:</strong> Aumenta FPS, desactiva aceleración del ratón</li>
                <li><strong>Sobrecalentamiento:</strong> Limpia tu PC, mejora la ventilación</li>
            </ul>
        `
    },
    {
        id: 5,
        titulo: "Mejores Configuraciones de Sensibilidad en Valorant",
        juego: "valorant",
        dificultad: "Intermedio",
        descripcion: "Encuentra la sensibilidad perfecta para tu juego y mejora tu precisión y consistencia",
        contenido: `
            <h4>¿Qué es la Sensibilidad?</h4>
            <p>La sensibilidad determina cuánto se mueve tu vista cuando mueves el ratón. Una sensibilidad baja requiere más movimiento físico, mientras que una alta requiere menos.</p>

            <h4>Sensibilidades Recomendadas por Profesionales</h4>
            <ul>
                <li><strong>Sensibilidad baja (0.3-0.5):</strong> Mejor control y precisión, requiere más espacio</li>
                <li><strong>Sensibilidad media (0.5-0.8):</strong> Balance entre control y velocidad</li>
                <li><strong>Sensibilidad alta (0.8-1.2):</strong> Mejor para reacciones rápidas, menos precisión</li>
            </ul>

            <h4>Cálculo de eDPI (Effective DPI)</h4>
            <p>eDPI = DPI del ratón × Sensibilidad en el juego</p>
            <ul>
                <li>eDPI recomendado: 200-400</li>
                <li>Ejemplo: 800 DPI × 0.5 sensibilidad = 400 eDPI</li>
                <li>Ejemplo: 400 DPI × 1.0 sensibilidad = 400 eDPI</li>
            </ul>

            <h4>Configuración de Sensibilidad en Valorant</h4>
            <ol>
                <li>Ve a Settings → Crosshair → General</li>
                <li>Anota tu sensibilidad actual</li>
                <li>Ve a Settings → Mouse</li>
                <li>Ajusta "Sensitivity" según tus necesidades</li>
                <li>Desactiva "Sensitivity per scope" para consistencia</li>
            </ol>

            <h4>Proceso para Encontrar Tu Sensibilidad Ideal</h4>
            <ol>
                <li><strong>Establece tu DPI:</strong> Usa 400 o 800 (estándar en esports)</li>
                <li><strong>Comienza con 0.7:</strong> Es un buen punto de partida</li>
                <li><strong>Juega 10 partidas:</strong> Acostúmbrate a la sensibilidad</li>
                <li><strong>Evalúa:</strong> ¿Overshoots (pasas) o undershoots (no llegas)?</li>
                <li><strong>Ajusta en incrementos pequeños:</strong> 0.05 a la vez</li>
                <li><strong>Repite hasta encontrar tu punto óptimo</strong></li>
            </ol>

            <h4>Sensibilidades de Profesionales Famosos</h4>
            <ul>
                <li><strong>TenZ:</strong> 800 DPI × 0.65 = 520 eDPI</li>
                <li><strong>SicK:</strong> 400 DPI × 1.0 = 400 eDPI</li>
                <li><strong>Derke:</strong> 400 DPI × 0.75 = 300 eDPI</li>
                <li><strong>Jamppi:</strong> 400 DPI × 0.8 = 320 eDPI</li>
            </ul>

            <h4>Consejos para Mejorar la Precisión</h4>
            <ul>
                <li>Mantén tu sensibilidad consistente (no cambies constantemente)</li>
                <li>Practica en el rango de práctica 30 minutos diarios</li>
                <li>Usa una mousepad grande para movimientos amplios</li>
                <li>Mantén tu ratón limpio para mejor tracking</li>
                <li>Juega con consistencia: misma sensibilidad, mismo ratón, misma mousepad</li>
            </ul>

            <h4>Configuración de Scope (Zoom)</h4>
            <ol>
                <li>Desactiva "Sensitivity per scope" para consistencia</li>
                <li>O ajusta el zoom a la misma velocidad que tu sensibilidad normal</li>
                <li>Fórmula: Sensibilidad normal ÷ Zoom = Sensibilidad de scope</li>
            </ol>
        `
    },
    {
        id: 6,
        titulo: "Crear un Servidor Privado en Fortnite",
        juego: "fortnite",
        dificultad: "Avanzado",
        descripcion: "Guía completa para crear y configurar un servidor privado de Fortnite para ti y tus amigos",
        contenido: `
            <h4>¿Qué es un Servidor Privado de Fortnite?</h4>
            <p>Un servidor privado te permite jugar con amigos en un ambiente controlado, sin competencia de otros jugadores. Perfecto para practicar, entrenar o simplemente divertirse.</p>

            <h4>Requisitos</h4>
            <ul>
                <li>Cuenta de Epic Games verificada</li>
                <li>Suscripción a PlayStation Plus (PS4/PS5) o Xbox Game Pass (Xbox)</li>
                <li>Mínimo 2 jugadores</li>
                <li>Conexión a internet estable</li>
            </ul>

            <h4>Paso 1: Acceder a Epic Games</h4>
            <ol>
                <li>Ve a https://www.epicgames.com</li>
                <li>Inicia sesión con tu cuenta</li>
                <li>Ve a tu perfil</li>
                <li>Busca la opción de "Servidores Privados"</li>
            </ol>

            <h4>Paso 2: Crear un Servidor Privado</h4>
            <ol>
                <li>Haz clic en "Crear Servidor Privado"</li>
                <li>Selecciona el tipo de juego:
                    <ul>
                        <li>Battle Royale</li>
                        <li>Creative</li>
                        <li>Save the World</li>
                    </ul>
                </li>
                <li>Elige el modo de juego</li>
                <li>Configura los parámetros del servidor</li>
            </ol>

            <h4>Paso 3: Configurar Reglas del Juego</h4>
            <ol>
                <li><strong>Número de jugadores:</strong> 2-16</li>
                <li><strong>Duración del juego:</strong> Personalizable</li>
                <li><strong>Armas disponibles:</strong> Todas o seleccionadas</li>
                <li><strong>Materiales:</strong> Cantidad inicial</li>
                <li><strong>Daño amigo:</strong> Activado o desactivado</li>
                <li><strong>Respawns:</strong> Activados o desactivados</li>
            </ol>

            <h4>Paso 4: Invitar Amigos</h4>
            <ol>
                <li>Copia el código de acceso del servidor</li>
                <li>Comparte el código con tus amigos</li>
                <li>Ellos pueden unirse usando el código</li>
                <li>Máximo 16 jugadores simultáneamente</li>
            </ol>

            <h4>Paso 5: Iniciar el Servidor</h4>
            <ol>
                <li>Abre Fortnite</li>
                <li>Ve a "Jugar"</li>
                <li>Selecciona "Servidor Privado"</li>
                <li>Ingresa el código de acceso</li>
                <li>¡Comienza a jugar!</li>
            </ol>

            <h4>Modos de Juego Disponibles</h4>
            <ul>
                <li><strong>Battle Royale Privado:</strong> El clásico Battle Royale con tus amigos</li>
                <li><strong>Creative:</strong> Modo de construcción libre sin límites</li>
                <li><strong>Team Rumble Privado:</strong> Equipos contra equipos</li>
                <li><strong>Duelos:</strong> 1v1 contra tus amigos</li>
            </ul>

            <h4>Consejos para Entrenar</h4>
            <ul>
                <li>Practica construcción en Creative</li>
                <li>Realiza duelos 1v1 para mejorar tu aim</li>
                <li>Juega Battle Royale privado para estrategia de equipo</li>
                <li>Analiza tus errores y mejora</li>
            </ul>

            <h4>Solución de Problemas</h4>
            <ul>
                <li><strong>No puedo crear servidor:</strong> Verifica que tu cuenta esté verificada</li>
                <li><strong>Amigos no pueden conectar:</strong> Verifica el código, reinicia Fortnite</li>
                <li><strong>Lag excesivo:</strong> Mejora tu conexión, reduce jugadores</li>
                <li><strong>Servidor desconectado:</strong> Reinicia el juego y reconecta</li>
            </ul>
        `
    },
    {
        id: 7,
        titulo: "Ganar V-Bucks Gratis en Fortnite - Métodos Legítimos",
        juego: "fortnite",
        dificultad: "Fácil",
        descripcion: "Descubre todos los métodos legítimos para obtener V-Bucks sin gastar dinero real",
        contenido: `
            <h4>¿Qué son los V-Bucks?</h4>
            <p>Los V-Bucks son la moneda virtual de Fortnite. Se usan para comprar skins, emotes, pickaxes y otros cosméticos. Aunque generalmente se compran con dinero real, hay formas de obtenerlos gratis.</p>

            <h4>Método 1: Battle Pass Gratuito</h4>
            <ol>
                <li>Completa misiones del Battle Pass gratuito</li>
                <li>Gana 200 V-Bucks por temporada</li>
                <li>Requiere tiempo pero es 100% gratis</li>
                <li>Desbloquea skins y cosméticos exclusivos</li>
            </ol>

            <h4>Método 2: Desafíos Semanales</h4>
            <ol>
                <li>Cada semana hay nuevos desafíos</li>
                <li>Completa 7 desafíos para obtener recompensas</li>
                <li>Algunos desafíos dan V-Bucks directamente</li>
                <li>Requiere 30 minutos a 1 hora por semana</li>
            </ol>

            <h4>Método 3: Eventos Especiales</h4>
            <ul>
                <li><strong>Eventos de temporada:</strong> Completa misiones especiales</li>
                <li><strong>Eventos de vacaciones:</strong> Navidad, Halloween, etc.</li>
                <li><strong>Colaboraciones:</strong> Fortnite colabora con marcas y películas</li>
                <li><strong>Torneos:</strong> Compite y gana V-Bucks</li>
            </ul>

            <h4>Método 4: Cofres y Suministros en el Mapa</h4>
            <ol>
                <li>Abre cofres en el mapa (brillan en dorado)</li>
                <li>Algunos contienen V-Bucks</li>
                <li>Busca en ubicaciones populares</li>
                <li>No es garantizado pero es una oportunidad</li>
            </ol>

            <h4>Método 5: Fortnite Crew (Opcional)</h4>
            <ol>
                <li>Suscripción mensual de $11.99</li>
                <li>Incluye 1000 V-Bucks al mes</li>
                <li>Acceso a Battle Pass gratis</li>
                <li>Skin exclusiva de Crew cada mes</li>
            </ol>

            <h4>Método 6: Completar Logros</h4>
            <ul>
                <li>Algunos logros dan V-Bucks</li>
                <li>Requiere cumplir objetivos específicos</li>
                <li>Varía según la temporada</li>
                <li>Revisa la sección de logros regularmente</li>
            </ul>

            <h4>Método 7: Fortnite Save the World</h4>
            <ol>
                <li>Modo de campaña de Fortnite</li>
                <li>Completa misiones para ganar V-Bucks</li>
                <li>Requiere compra inicial (a veces en descuento)</li>
                <li>Puedes ganar 1000+ V-Bucks completando el juego</li>
            </ol>

            <h4>Cuántos V-Bucks Puedes Ganar Gratis</h4>
            <ul>
                <li><strong>Por temporada:</strong> 200-500 V-Bucks</li>
                <li><strong>Por año:</strong> 2400-6000 V-Bucks</li>
                <li><strong>Skin más barata:</strong> 800 V-Bucks</li>
                <li><strong>Battle Pass:</strong> 950 V-Bucks</li>
            </ul>

            <h4>Advertencia: Evita Estafas</h4>
            <ul>
                <li>NO compartas tu contraseña</li>
                <li>NO uses generadores de V-Bucks (son estafas)</li>
                <li>NO compres V-Bucks de terceros</li>
                <li>Solo compra de Epic Games oficial</li>
            </ul>

            <h4>Consejos para Maximizar V-Bucks Gratis</h4>
            <ul>
                <li>Completa TODOS los desafíos semanales</li>
                <li>Participa en eventos especiales</li>
                <li>Juega regularmente para no perder oportunidades</li>
                <li>Sigue las redes sociales de Fortnite para anuncios</li>
            </ul>
        `
    },
    {
        id: 8,
        titulo: "Crear tu Primer Juego en Roblox Studio - Guía Principiante",
        juego: "roblox",
        dificultad: "Intermedio",
        descripcion: "Aprende a crear tu propio juego en Roblox desde cero, sin necesidad de experiencia previa",
        contenido: `
            <h4>¿Qué es Roblox Studio?</h4>
            <p>Roblox Studio es el editor gratuito para crear juegos en Roblox. Permite diseñar mundos, crear mecánicas de juego y publicar tus creaciones para que millones de jugadores las disfruten.</p>

            <h4>Paso 1: Descargar Roblox Studio</h4>
            <ol>
                <li>Ve a https://www.roblox.com/create</li>
                <li>Haz clic en "Download Studio"</li>
                <li>Instala el programa</li>
                <li>Abre Roblox Studio</li>
                <li>Inicia sesión con tu cuenta de Roblox</li>
            </ol>

            <h4>Paso 2: Crear un Nuevo Proyecto</h4>
            <ol>
                <li>Abre Roblox Studio</li>
                <li>Haz clic en "New"</li>
                <li>Selecciona una plantilla:
                    <ul>
                        <li>Baseplate (Plataforma básica)</li>
                        <li>Flat Terrain (Terreno plano)</li>
                        <li>Suburban (Suburbano)</li>
                    </ul>
                </li>
                <li>Haz clic en "Create"</li>
            </ol>

            <h4>Paso 3: Conocer la Interfaz</h4>
            <ul>
                <li><strong>Viewport:</strong> El área central donde ves tu juego</li>
                <li><strong>Explorer:</strong> Panel izquierdo con todos los objetos</li>
                <li><strong>Properties:</strong> Panel derecho para editar propiedades</li>
                <li><strong>Toolbar:</strong> Herramientas de construcción en la parte superior</li>
            </ul>

            <h4>Paso 4: Construir tu Primer Mapa</h4>
            <ol>
                <li>Ve a Insert → Part (o presiona Ctrl+Shift+P)</li>
                <li>Selecciona el tipo de parte (Cube, Sphere, etc.)</li>
                <li>Haz clic en el viewport para colocar la parte</li>
                <li>Usa las herramientas de Move, Scale, Rotate para posicionar</li>
                <li>Cambia el color en Properties → Color</li>
                <li>Repite para crear tu mapa</li>
            </ol>

            <h4>Paso 5: Añadir Mecánicas Básicas</h4>
            <ol>
                <li><strong>Plataformas móviles:</strong>
                    <ul>
                        <li>Crea una parte</li>
                        <li>Añade un script que la mueva</li>
                    </ul>
                </li>
                <li><strong>Botones interactivos:</strong>
                    <ul>
                        <li>Crea una parte</li>
                        <li>Añade un ClickDetector</li>
                        <li>Escribe un script que responda al clic</li>
                    </ul>
                </li>
                <li><strong>Puntos de spawn:</strong>
                    <ul>
                        <li>Insert → SpawnLocation</li>
                        <li>Posiciona donde quieras que aparezcan los jugadores</li>
                    </ul>
                </li>
            </ol>

            <h4>Paso 6: Scripting Básico en Lua</h4>
            <p>Ejemplo de script simple que mueve una parte:</p>
            <pre>local part = script.Parent
while true do
    part.Position = part.Position + Vector3.new(0, 1, 0)
    wait(0.1)
    part.Position = part.Position + Vector3.new(0, -1, 0)
    wait(0.1)
end</pre>

            <h4>Paso 7: Probar tu Juego</h4>
            <ol>
                <li>Haz clic en el botón "Play" (arriba a la izquierda)</li>
                <li>Tu juego se ejecutará en modo de prueba</li>
                <li>Prueba todas las mecánicas</li>
                <li>Haz clic en "Stop" para detener</li>
            </ol>

            <h4>Paso 8: Publicar tu Juego</h4>
            <ol>
                <li>Ve a File → Publish to Roblox</li>
                <li>Ingresa un nombre para tu juego</li>
                <li>Escribe una descripción</li>
                <li>Selecciona una categoría</li>
                <li>Haz clic en "Create"</li>
                <li>¡Tu juego está en línea!</li>
            </ol>

            <h4>Tipos de Juegos Populares en Roblox</h4>
            <ul>
                <li><strong>Obby (Obstacle Course):</strong> Plataformas para saltar</li>
                <li><strong>Tycoon:</strong> Construye un imperio</li>
                <li><strong>Simulator:</strong> Simula una actividad</li>
                <li><strong>RPG:</strong> Juego de rol</li>
                <li><strong>Parkour:</strong> Saltos y acrobacias</li>
            </ul>

            <h4>Consejos para Principiantes</h4>
            <ul>
                <li>Comienza con proyectos simples</li>
                <li>Aprende Lua gradualmente</li>
                <li>Mira tutoriales en YouTube</li>
                <li>Únete a comunidades de Roblox</li>
                <li>Pide feedback a otros jugadores</li>
            </ul>

            <h4>Recursos Útiles</h4>
            <ul>
                <li>Documentación oficial de Roblox: developer.roblox.com</li>
                <li>YouTube: Busca "Roblox Studio Tutorial"</li>
                <li>Comunidad: DevForum de Roblox</li>
                <li>Discord: Servidores de desarrolladores de Roblox</li>
            </ul>
        `
    },
    {
        id: 9,
        titulo: "Scripting Básico en Lua para Roblox - Introducción",
        juego: "roblox",
        dificultad: "Avanzado",
        descripcion: "Aprende los fundamentos de Lua, el lenguaje de programación usado en Roblox",
        contenido: `
            <h4>¿Qué es Lua?</h4>
            <p>Lua es un lenguaje de programación simple pero poderoso usado en Roblox. Es fácil de aprender y perfecto para principiantes.</p>

            <h4>Conceptos Básicos</h4>
            <ol>
                <li><strong>Variables:</strong> Almacenan datos
                    <pre>local nombre = "Juan"
local edad = 25
local activo = true</pre>
                </li>
                <li><strong>Tipos de datos:</strong>
                    <ul>
                        <li>String: "texto"</li>
                        <li>Number: 42, 3.14</li>
                        <li>Boolean: true, false</li>
                        <li>Table: {1, 2, 3}</li>
                    </ul>
                </li>
                <li><strong>Operadores:</strong>
                    <pre>a + b  -- Suma
a - b  -- Resta
a * b  -- Multiplicación
a / b  -- División
a == b -- Igual
a ~= b -- No igual</pre>
                </li>
            </ol>

            <h4>Condicionales (If/Else)</h4>
            <pre>if edad >= 18 then
    print("Eres mayor de edad")
elseif edad >= 13 then
    print("Eres adolescente")
else
    print("Eres niño")
end</pre>

            <h4>Bucles (Loops)</h4>
            <ol>
                <li><strong>While:</strong> Repite mientras sea verdadero
                    <pre>local contador = 0
while contador < 10 do
    print(contador)
    contador = contador + 1
end</pre>
                </li>
                <li><strong>For:</strong> Repite un número específico de veces
                    <pre>for i = 1, 10 do
    print(i)
end</pre>
                </li>
            </ol>

            <h4>Funciones</h4>
            <pre>function saludar(nombre)
    print("Hola, " .. nombre)
end

saludar("Juan")  -- Imprime: Hola, Juan</pre>

            <h4>Tablas (Arrays)</h4>
            <pre>local frutas = {"manzana", "plátano", "naranja"}
print(frutas[1])  -- Imprime: manzana

for i, fruta in ipairs(frutas) do
    print(fruta)
end</pre>

            <h4>Objetos de Roblox</h4>
            <ol>
                <li><strong>Acceder a partes:</strong>
                    <pre>local parte = script.Parent
print(parte.Name)  -- Nombre de la parte
print(parte.Position)  -- Posición</pre>
                </li>
                <li><strong>Cambiar propiedades:</strong>
                    <pre>parte.Color = Color3.fromRGB(255, 0, 0)  -- Rojo
parte.Position = Vector3.new(0, 10, 0)  -- Mover arriba</pre>
                </li>
                <li><strong>Detectar eventos:</strong>
                    <pre>local clickDetector = script.Parent:WaitForChild("ClickDetector")
clickDetector.MouseClick:Connect(function(player)
    print(player.Name .. " hizo clic")
end)</pre>
                </li>
            </ol>

            <h4>Script Práctico: Puerta que se Abre</h4>
            <pre>local puerta = script.Parent
local abierta = false

local clickDetector = puerta:WaitForChild("ClickDetector")

clickDetector.MouseClick:Connect(function()
    if not abierta then
        -- Abrir puerta
        for i = 1, 100 do
            puerta.Position = puerta.Position + Vector3.new(0, 0.1, 0)
            wait(0.01)
        end
        abierta = true
    else
        -- Cerrar puerta
        for i = 1, 100 do
            puerta.Position = puerta.Position + Vector3.new(0, -0.1, 0)
            wait(0.01)
        end
        abierta = false
    end
end)</pre>

            <h4>Debugging (Encontrar Errores)</h4>
            <ul>
                <li>Usa print() para ver valores
                    <pre>print("Valor de x: " .. x)</pre>
                </li>
                <li>Abre la consola: View → Output</li>
                <li>Lee los mensajes de error</li>
                <li>Usa wait() para pausar la ejecución</li>
            </ul>

            <h4>Buenas Prácticas</h4>
            <ul>
                <li>Usa nombres descriptivos para variables</li>
                <li>Comenta tu código</li>
                <li>Evita variables globales</li>
                <li>Prueba frecuentemente</li>
                <li>Aprende de otros scripts</li>
            </ul>

            <h4>Recursos para Aprender Más</h4>
            <ul>
                <li>Documentación de Roblox: developer.roblox.com/docs</li>
                <li>Tutoriales en YouTube</li>
                <li>Comunidad DevForum</li>
                <li>Experimenta creando scripts pequeños</li>
            </ul>

            <h4>Próximos Pasos</h4>
            <ul>
                <li>Aprende sobre eventos y señales</li>
                <li>Entiende el sistema de carpetas (Workspace, ServerScriptService)</li>
                <li>Crea sistemas de puntuación</li>
                <li>Implementa guardado de datos</li>
            </ul>
        `
    }
];

// Datos de bots
const bots = [
    {
        id: 1,
        nombre: "Minecraft AFK Bot",
        juego: "minecraft",
        descripcion: "Bot que mantiene tu servidor Aternos activo 24/7 sin intervención manual. Compatible con Termux en Android.",
        descarga: "#"
    },
    {
        id: 2,
        nombre: "Valorant Stats Tracker",
        juego: "valorant",
        descripcion: "Herramienta para rastrear tus estadísticas en Valorant, mejorar tu aim y analizar tu rendimiento.",
        descarga: "#"
    },
    {
        id: 3,
        nombre: "Fortnite V-Bucks Manager",
        juego: "fortnite",
        descripcion: "Gestor de V-Bucks que te ayuda a rastrear tus compras y optimizar tu presupuesto de cosméticos.",
        descarga: "#"
    },
    {
        id: 4,
        nombre: "Roblox Game Manager",
        juego: "roblox",
        descripcion: "Herramienta para gestionar tus juegos en Roblox, analizar estadísticas y mejorar tu experiencia.",
        descarga: "#"
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
            <span class="tutorial-difficulty">${tutorial.dificultad}</span>
            <button onclick="openTutorialModal(${tutorial.id})">Ver Tutorial Completo</button>
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
    currentTutorialId = id;
    const tutorial = tutoriales.find(t => t.id === id);
    if (!tutorial) return;

    document.getElementById('modalTitle').textContent = tutorial.titulo;
    document.getElementById('modalDescription').textContent = tutorial.descripcion;
    document.getElementById('modalContent').innerHTML = tutorial.contenido;
    
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
    const name = document.getElementById('commentName').value.trim();
    const text = document.getElementById('commentText').value.trim();

    if (!name || !text) {
        alert('Por favor completa todos los campos');
        return;
    }

    if (!currentTutorialId) return;

    const tutorial = tutoriales.find(t => t.id === currentTutorialId);
    tutorial.comentarios.push({ author: name, text: text });

    document.getElementById('commentName').value = '';
    document.getElementById('commentText').value = '';

    renderComments(currentTutorialId);
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

// Toggle del menú móvil
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

function closeMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.remove('active');
}
