// Naty - Asistente IA Femenina
// Configuración del chatbot personalizado

const NATY_CONFIG = {
    name: "Naty",
    avatar: "👩‍💼",
    greeting: "¡Hola! Soy Naty, tu asistente personal especializada en nanotecnología. ¿Sobre qué tema te gustaría saber?",
    personality: "amigable, profesional, experta en nanobots",
    topics: [
        "Nanotecnología Médica",
        "Nanotecnología Ambiental", 
        "Nanotecnología Plástica",
        "Purificación de Agua"
    ],
    responses: {
        greeting: [
            "¡Hola! Soy Naty 👩‍💼, tu asistente personal. ¿Sobre qué tema te gustaría saber?",
            "¡Bienvenido! Soy Naty, especialista en nanotecnología. ¿Qué área te interesa más?",
            "¡Hola! Me llamo Naty y estoy aquí para ayudarte. ¿Qué te gustaría conocer sobre nanotecnología?"
        ],
        nanobots: [
            "Los nanobots son robots microscópicos que operan a escala nanométrica (1-100 nanómetros). Son más pequeños que una célula humana y pueden realizar tareas específicas como navegación, detección y manipulación molecular.",
            "Los nanobots son como pequeños médicos microscópicos que pueden navegar por tu cuerpo para detectar y tratar enfermedades de manera precisa y no invasiva.",
            "Imagina robots tan pequeños que pueden viajar por tu torrente sanguíneo. ¡Eso son los nanobots! Son la próxima revolución en medicina."
        ],
        medicina: [
            "La nanotecnología médica revoluciona la medicina con nanobots que pueden detectar cáncer en etapas tempranas, entregar medicamentos directamente a células enfermas, y realizar cirugías no invasivas. Los nanobots médicos pueden navegar por el torrente sanguíneo para diagnosticar y tratar enfermedades con precisión molecular.",
            "En medicina, los nanobots actúan como médicos microscópicos. Pueden identificar células cancerígenas, reparar tejidos dañados, y administrar tratamientos personalizados sin efectos secundarios. Es la medicina del futuro.",
            "Los nanobots médicos transforman la atención sanitaria. Detectan enfermedades antes de que aparezcan síntomas, reparan órganos a nivel celular, y eliminan tumores sin cirugía tradicional."
        ],
        ambiental: [
            "La nanotecnología ambiental utiliza nanobots para limpiar contaminantes del aire, agua y suelo. Estos robots microscópicos pueden absorber metales pesados, descomponer plásticos, y purificar ecosistemas completos con una eficiencia del 99.9%.",
            "Los nanobots ambientales son guardianes del planeta. Limpian océanos de microplásticos, purifican aire contaminado, y restauran suelos degradados. Es la solución más efectiva para la crisis ambiental.",
            "La nanotecnología ambiental revoluciona la conservación. Los nanobots pueden detectar y neutralizar contaminantes en tiempo real, proteger especies en peligro, y crear ecosistemas más saludables."
        ],
        plastica: [
            "La nanotecnología plástica desarrolla materiales inteligentes con propiedades extraordinarias. Nanobots integrados en plásticos crean materiales que se reparan solos, cambian de color, o conducen electricidad. Es la evolución de los materiales.",
            "Los plásticos con nanotecnología son materiales del futuro. Pueden ser ultra-resistentes, biodegradables, o conductores de electricidad. Los nanobots en el plástico le dan propiedades inteligentes.",
            "La nanotecnología plástica crea materiales revolucionarios. Plásticos que se auto-reparan, cambian de forma, o detectan daños. Los nanobots hacen que el plástico sea inteligente y funcional."
        ],
        agua: [
            "La purificación de agua con nanotecnología utiliza nanobots especializados que eliminan contaminantes a nivel molecular. Estos robots pueden filtrar metales pesados, bacterias, virus, y productos químicos, dejando el agua completamente pura y segura.",
            "Los nanobots para purificación de agua son filtros microscópicos inteligentes. Detectan y eliminan cualquier contaminante, desde bacterias hasta productos químicos industriales, garantizando agua 100% potable.",
            "La nanotecnología revoluciona la purificación de agua. Los nanobots pueden limpiar cualquier fuente de agua, desde ríos contaminados hasta agua de mar, transformándola en agua potable de alta calidad."
        ],
        aplicaciones: [
            "Los nanobots tienen aplicaciones increíbles: medicina personalizada, limpieza ambiental, purificación de agua, y hasta reparación celular. ¡Es tecnología del futuro!",
            "En medicina, los nanobots pueden entregar medicamentos directamente a las células enfermas, detectar cáncer temprano, y realizar cirugías no invasivas.",
            "Los nanobots también ayudan al medio ambiente limpiando contaminantes del agua y del aire con una eficiencia del 99.9%."
        ],
        futuro: [
            "El futuro de los nanobots es brillante. Para 2030 tendremos nanobots médicos aprobados, y para 2050 estarán integrados en nuestros cuerpos para monitoreo continuo.",
            "¡Imagina un mundo donde los nanobots mantengan tu salud perfecta! Ese es el futuro que estamos construyendo.",
            "Los nanobots revolucionarán la medicina, el medio ambiente y la industria. Es la tecnología más prometedora del siglo XXI."
        ],
        company: [
            "OAND7 Nanotechnology es una startup innovadora que está democratizando la nanotecnología. Nuestro objetivo es hacer los nanobots accesibles para todos.",
            "En OAND7, creemos que la nanotecnología debe estar al servicio de la humanidad. Estamos fabricando nanobots para mejorar la vida de las personas.",
            "Somos pioneros en la fabricación masiva de nanorobots. OAND7 está llevando la nanotecnología del laboratorio a la vida real."
        ],
        safety: [
            "La seguridad es nuestra prioridad. Todos nuestros nanobots pasan por rigurosas pruebas y están aprobados por autoridades sanitarias.",
            "Los nanobots de OAND7 están diseñados para ser completamente seguros. Se eliminan naturalmente del cuerpo en 48-72 horas.",
            "Siempre consulta con un profesional médico antes de usar cualquier producto de nanotecnología. Tu salud es lo más importante."
        ],
        contact: [
            "¡Me encantaría ayudarte más! Puedes contactar a nuestro equipo en info@oand7.com o suscribirte a nuestro newsletter para las últimas novedades.",
            "Para más información sobre nuestros productos, visita nuestra página de instrucciones o contáctanos directamente.",
            "¿Te gustaría recibir actualizaciones sobre nanobots? ¡Suscríbete a nuestro newsletter en la sección de contacto!"
        ],
        default: [
            "Los nanobots son robots microscópicos que revolucionan la tecnología. Pueden realizar tareas específicas a escala molecular, desde medicina hasta limpieza ambiental.",
            "La nanotecnología es el futuro de la ciencia. Los nanobots pueden hacer cosas increíbles que antes parecían imposibles.",
            "Los nanobots son la próxima revolución tecnológica. Transformarán la medicina, el medio ambiente y la industria."
        ]
    },
    keywords: {
        "nanobots": "nanobots",
        "nanorobots": "nanobots",
        "nanotecnologia": "nanobots",
        "nanotecnología": "nanobots",
        "medicina": "medicina",
        "médico": "medicina",
        "médica": "medicina",
        "salud": "medicina",
        "cáncer": "medicina",
        "tratamiento": "medicina",
        "ambiental": "ambiental",
        "medio ambiente": "ambiental",
        "contaminación": "ambiental",
        "contaminantes": "ambiental",
        "ecología": "ambiental",
        "plástico": "plastica",
        "plástica": "plastica",
        "materiales": "plastica",
        "polímeros": "plastica",
        "agua": "agua",
        "purificación": "agua",
        "filtro": "agua",
        "potable": "agua",
        "contaminada": "agua",
        "aplicaciones": "aplicaciones",
        "usos": "aplicaciones",
        "futuro": "future",
        "tecnologia": "future",
        "tecnología": "future",
        "empresa": "company",
        "oand7": "company",
        "startup": "company",
        "seguridad": "safety",
        "seguro": "safety",
        "peligro": "safety",
        "contacto": "contact",
        "contactar": "contact",
        "email": "contact",
        "correo": "contact",
        "hola": "greeting",
        "buenos dias": "greeting",
        "buenos días": "greeting",
        "buenas tardes": "greeting",
        "buenas noches": "greeting"
    }
};

// Función para mostrar sugerencias de temas
function showTopicSuggestions() {
    const messagesContainer = document.getElementById('naty-messages');
    const suggestionsDiv = document.createElement('div');
    suggestionsDiv.className = 'naty-suggestions-container';
    
    let suggestionsHTML = '<div class="naty-suggestions">';
    NATY_CONFIG.topics.forEach(topic => {
        suggestionsHTML += `<button class="naty-suggestion" onclick="handleTopicClick('${topic}')">${topic}</button>`;
    });
    suggestionsHTML += '</div>';
    
    suggestionsDiv.innerHTML = suggestionsHTML;
    messagesContainer.appendChild(suggestionsDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Función para manejar clicks en sugerencias
function handleTopicClick(topic) {
    showUserMessage(topic);
    
    // Simular escritura
    const typingIndicator = document.getElementById('naty-typing');
    typingIndicator.style.display = 'flex';
    
    setTimeout(() => {
        typingIndicator.style.display = 'none';
        
        let response = "";
        switch(topic.toLowerCase()) {
            case "nanotecnología médica":
                response = NATY_CONFIG.responses.medicina[Math.floor(Math.random() * NATY_CONFIG.responses.medicina.length)];
                break;
            case "nanotecnología ambiental":
                response = NATY_CONFIG.responses.ambiental[Math.floor(Math.random() * NATY_CONFIG.responses.ambiental.length)];
                break;
            case "nanotecnología plástica":
                response = NATY_CONFIG.responses.plastica[Math.floor(Math.random() * NATY_CONFIG.responses.plastica.length)];
                break;
            case "purificación de agua":
                response = NATY_CONFIG.responses.agua[Math.floor(Math.random() * NATY_CONFIG.responses.agua.length)];
                break;
            default:
                response = NATY_CONFIG.responses.default[Math.floor(Math.random() * NATY_CONFIG.responses.default.length)];
        }
        
        showNatyMessage(response);
    }, 1000 + Math.random() * 1000);
}

// Función para obtener respuesta de Naty
function getNatyResponse(userMessage) {
    const message = userMessage.toLowerCase();
    
    // Buscar palabras clave
    for (const [keyword, category] of Object.entries(NATY_CONFIG.keywords)) {
        if (message.includes(keyword)) {
            const responses = NATY_CONFIG.responses[category];
            return responses[Math.floor(Math.random() * responses.length)];
        }
    }
    
    // Respuesta por defecto
    const defaultResponses = NATY_CONFIG.responses.default;
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

// Función para mostrar mensaje de Naty
function showNatyMessage(message) {
    const messagesContainer = document.getElementById('naty-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message naty-message';
    messageDiv.innerHTML = `
        <div class="message-avatar">
            ${NATY_CONFIG.avatar}
        </div>
        <div class="message-content">
            <p>${message}</p>
        </div>
    `;
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Función para mostrar mensaje del usuario
function showUserMessage(message) {
    const messagesContainer = document.getElementById('naty-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message user-message';
    messageDiv.innerHTML = `
        <div class="message-content">
            <p>${message}</p>
        </div>
        <div class="message-avatar">
            👤
        </div>
    `;
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Función para manejar el envío de mensajes
function handleNatyMessage() {
    const input = document.getElementById('naty-input');
    const message = input.value.trim();
    
    if (message) {
        showUserMessage(message);
        input.value = '';
        
        // Simular escritura de Naty
        const typingIndicator = document.getElementById('naty-typing');
        typingIndicator.style.display = 'flex';
        
        setTimeout(() => {
            typingIndicator.style.display = 'none';
            const response = getNatyResponse(message);
            showNatyMessage(response);
        }, 1000 + Math.random() * 2000); // Tiempo variable para simular pensamiento
    }
}

// Inicializar Naty cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    // Mostrar mensaje de bienvenida
    setTimeout(() => {
        showNatyMessage(NATY_CONFIG.greeting);
        // Mostrar sugerencias de temas después del saludo
        setTimeout(() => {
            showTopicSuggestions();
        }, 500);
    }, 500);
    
    // Configurar eventos
    const sendButton = document.getElementById('naty-send');
    const input = document.getElementById('naty-input');
    
    if (sendButton) {
        sendButton.addEventListener('click', handleNatyMessage);
    }
    
    if (input) {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                handleNatyMessage();
            }
        });
    }
    
    // Configurar toggle del chatbot
    const toggle = document.getElementById('naty-toggle');
    const window = document.getElementById('naty-window');
    const close = document.getElementById('naty-close');
    
    if (toggle) {
        toggle.addEventListener('click', function() {
            window.classList.toggle('active');
        });
    }
    
    if (close) {
        close.addEventListener('click', function() {
            window.classList.remove('active');
        });
    }
}); 