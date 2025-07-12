// Smooth scrolling for navigation links
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.feature, .app-card, .timeline-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Newsletter form submission
const newsletterForm = document.getElementById('newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const interest = document.getElementById('interest').value;
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        // Show loading state
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
        submitBtn.disabled = true;
        
        // Prepare form data
        const formData = new FormData(this);
        
        // Submit to Formspree
        fetch(this.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                // Success
                submitBtn.innerHTML = '<i class="fas fa-check"></i> ¡Suscrito!';
                submitBtn.style.background = 'linear-gradient(45deg, #4ecdc4, #45b7d1)';
                
                showNotification('¡Gracias por suscribirte! Te mantendremos informado sobre los nanobots.', 'success');
                
                // Reset form after delay
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.background = '';
                    newsletterForm.reset();
                }, 3000);
            } else {
                throw new Error('Error en el envío');
            }
        })
        .catch(error => {
            // Error handling
            submitBtn.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Error';
            submitBtn.style.background = 'linear-gradient(45deg, #ff6b6b, #ee5a52)';
            
            showNotification('Hubo un error al enviar. Por favor, intenta de nuevo.', 'error');
            
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                submitBtn.style.background = '';
            }, 3000);
        });
    });
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    
    let icon = 'info-circle';
    let bgColor = '#6366f1';
    
    if (type === 'success') {
        icon = 'check-circle';
        bgColor = '#4ecdc4';
    } else if (type === 'error') {
        icon = 'exclamation-triangle';
        bgColor = '#ff6b6b';
    }
    
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${icon}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${bgColor};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const nanobot = document.querySelector('.nanobot');
    
    if (hero && nanobot) {
        const rate = scrolled * -0.5;
        nanobot.style.transform = `translate(-50%, -50%) translateY(${rate}px)`;
    }
});

// Particle animation enhancement
function createParticle() {
    const particles = document.querySelector('.particles');
    if (!particles) return;
    
    const particle = document.createElement('div');
    particle.style.cssText = `
        position: absolute;
        width: 3px;
        height: 3px;
        background: #4ecdc4;
        border-radius: 50%;
        animation: particle-float 3s linear infinite;
    `;
    
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 2 + 's';
    
    particles.appendChild(particle);
    
    setTimeout(() => {
        if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
        }
    }, 3000);
}

// Create particles periodically
setInterval(createParticle, 1000);

// Typing effect for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
document.addEventListener('DOMContentLoaded', function() {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 50);
        }, 500);
    }
});

// Counter animation for statistics
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    }
    
    updateCounter();
}

// Add some interactive features
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects to feature cards
    const features = document.querySelectorAll('.feature');
    features.forEach(feature => {
        feature.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        feature.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Add click effects to application cards
    const appCards = document.querySelectorAll('.app-card');
    appCards.forEach(card => {
        card.addEventListener('click', function() {
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'translateY(-5px)';
            }, 150);
        });
    });
});

// Smooth reveal animation for timeline
const timelineItems = document.querySelectorAll('.timeline-item');
const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateX(0)';
        }
    });
}, { threshold: 0.5 });

timelineItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = index % 2 === 0 ? 'translateX(-50px)' : 'translateX(50px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    timelineObserver.observe(item);
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        // Close mobile menu if open
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Add some fun interactive elements
document.addEventListener('DOMContentLoaded', function() {
    // Make nanobot clickable
    const nanobot = document.querySelector('.nanobot');
    if (nanobot) {
        nanobot.addEventListener('click', function() {
            this.style.transform = 'translate(-50%, -50%) scale(1.2)';
            setTimeout(() => {
                this.style.transform = 'translate(-50%, -50%) scale(1)';
            }, 200);
            
            showNotification('¡Nanobot activado! 🚀', 'success');
        });
        
        nanobot.style.cursor = 'pointer';
    }
});

// Chatbot functionality
class Chatbot {
    constructor() {
        this.messages = [];
        this.isOpen = false;
        this.isTyping = false;
        
        // DOM elements
        this.container = document.getElementById('chatbot-container');
        this.toggle = document.getElementById('chatbot-toggle');
        this.window = document.getElementById('chatbot-window');
        this.close = document.getElementById('chatbot-close');
        this.messagesContainer = document.getElementById('chatbot-messages');
        this.input = document.getElementById('chatbot-input');
        this.sendBtn = document.getElementById('chatbot-send');
        this.typingIndicator = document.getElementById('chatbot-typing');
        
        this.init();
    }
    
    init() {
        // Event listeners
        this.toggle.addEventListener('click', () => this.toggleChat());
        this.close.addEventListener('click', () => this.closeChat());
        this.sendBtn.addEventListener('click', () => this.sendMessage());
        this.input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.sendMessage();
            }
        });
        
        // Close chat when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.container.contains(e.target) && this.isOpen) {
                this.closeChat();
            }
        });
        
        // Check API key configuration on init
        this.checkApiKeyConfiguration();
    }
    
    checkApiKeyConfiguration() {
        if (!Config.isApiKeyConfigured()) {
            this.addMessage('🤖 ¡Hola! Soy tu asistente de nanobots. Para darte respuestas más inteligentes, necesito configurar Hugging Face (es gratuito). Escribe "configurar api" para empezar, o hazme cualquier pregunta sobre nanobots.', 'bot');
        } else {
            this.addMessage('🤖 ¡Hola! Soy tu asistente de nanobots con IA avanzada. ¿En qué puedo ayudarte? Puedes preguntarme sobre aplicaciones médicas, el futuro de la nanotecnología, investigación actual, y mucho más.', 'bot');
        }
    }
    
    toggleChat() {
        if (this.isOpen) {
            this.closeChat();
        } else {
            this.openChat();
        }
    }
    
    openChat() {
        this.isOpen = true;
        this.window.classList.add('active');
        this.input.focus();
        
        // Add entrance animation
        this.window.style.transform = 'translateY(20px) scale(0.9)';
        this.window.style.opacity = '0';
        
        setTimeout(() => {
            this.window.style.transition = 'all 0.3s ease';
            this.window.style.transform = 'translateY(0) scale(1)';
            this.window.style.opacity = '1';
        }, 10);
    }
    
    closeChat() {
        this.isOpen = false;
        this.window.style.transform = 'translateY(20px) scale(0.9)';
        this.window.style.opacity = '0';
        
        setTimeout(() => {
            this.window.classList.remove('active');
            this.window.style.transition = '';
            this.window.style.transform = '';
            this.window.style.opacity = '';
        }, 300);
    }
    
    async sendMessage() {
        const message = this.input.value.trim();
        if (!message || this.isTyping) return;
        
        // Add user message
        this.addMessage(message, 'user');
        this.input.value = '';
        
        // Check for configuandsration com|||||||||||||||||||||||||||||||||||||||||||||||||||||||
        if (message.toLowerCase().includes('configurar api')) {
            this.handleApiConfiguration();
            return;
        }
        
        if (message.toLowerCase().includes('usar ollama')) {
            this.switchToOllama();
            return;
        }
        
        if (message.toLowerCase().includes('usar hugging face')) {
            this.switchToHuggingFace();
            return;
        }
        
        if (message.toLowerCase().includes('diagnostico') || message.toLowerCase().includes('diagnóstico')) {
            this.diagnoseConfiguration();
            return;
        }
        
        if (message.toLowerCase().includes('usar respuestas locales') || message.toLowerCase().includes('respuestas locales')) {
            Config.switchToHuggingFace(); // Esto desactiva Ollama
            this.addMessage('✅ Cambiado a respuestas locales específicas. El chatbot usará las respuestas que has definido.', 'bot');
            return;
        }
        
        if (message.toLowerCase().includes('usar ai') || message.toLowerCase().includes('inteligencia artificial')) {
            Config.switchToOllama();
            this.addMessage('✅ Cambiado a IA (Ollama). El chatbot usará Llama 3.2 para respuestas dinámicas.', 'bot');
            return;
        }
        
        // Show typing indicator
        this.showTyping();
        
        try {
            // Get AI response
            const response = await this.getAIResponse(message);
            this.hideTyping();
            this.addMessage(response, 'bot');
        } catch (error) {
            this.hideTyping();
            this.addMessage('Lo siento, hubo un error al procesar tu mensaje. Por favor, intenta de nuevo.', 'bot');
            console.error('Chatbot error:', error);
        }
    }
    
    handleApiConfiguration() {
        const apiKey = prompt(`🔑 Configuración de Hugging Face (Gratuito)

Para obtener tu API key gratuita:

1️⃣ Ve a: https://huggingface.co/settings/tokens
2️⃣ Haz clic en "New token"
3️⃣ Dale un nombre como "Nanobots Chatbot"
4️⃣ Selecciona "Read" como rol
5️⃣ Haz clic en "Generate token"
6️⃣ Copia la API key y pégala aquí

⚠️ Tu API key se guardará localmente en tu navegador.
💡 Es completamente gratuito y seguro.

Ingresa tu API key de Hugging Face:`);
        
        if (apiKey && apiKey.trim()) {
            Config.setApiKey(apiKey.trim());
            this.addMessage('✅ ¡Perfecto! API key de Hugging Face configurada correctamente. Ahora tu chatbot usará Llama 2 para darte respuestas mucho más inteligentes sobre nanobots. ¡Pruébalo!', 'bot');
        } else if (apiKey !== null) {
            this.addMessage('❌ API key inválida. Por favor, intenta de nuevo. Recuerda que es completamente gratuito.', 'bot');
        }
    }
    
    switchToOllama() {
        Config.switchToOllama();
        this.addMessage('✅ Cambiado a Ollama (local). Asegúrate de tener Ollama instalado y el modelo descargado: "ollama pull llama3.2:3b"', 'bot');
    }
    
    switchToHuggingFace() {
        Config.switchToHuggingFace();
        this.addMessage('🔧 Cambiado a Hugging Face. Escribe "configurar api" para configurar tu API key.', 'bot');
    }
    
    addMessage(content, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        
        const avatar = document.createElement('div');
        avatar.className = 'message-avatar';
        avatar.innerHTML = sender === 'user' ? '<i class="fas fa-user"></i>' : '<i class="fas fa-robot"></i>';
        
        const messageContent = document.createElement('div');
        messageContent.className = 'message-content';
        
        // Handle different content types
        if (typeof content === 'string') {
            messageContent.innerHTML = this.formatMessage(content);
        } else {
            messageContent.appendChild(content);
        }
        
        messageDiv.appendChild(avatar);
        messageDiv.appendChild(messageContent);
        
        this.messagesContainer.appendChild(messageDiv);
        this.scrollToBottom();
        
        // Store message
        this.messages.push({ content, sender, timestamp: new Date() });
    }
    
    formatMessage(text) {
        // Convert URLs to links
        text = text.replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank" style="color: inherit; text-decoration: underline;">$1</a>');
        
        // Convert line breaks to <br>
        text = text.replace(/\n/g, '<br>');
        
        return text;
    }
    
    showTyping() {
        this.isTyping = true;
        this.typingIndicator.style.display = 'flex';
        this.sendBtn.disabled = true;
        this.scrollToBottom();
    }
    
    hideTyping() {
        this.isTyping = false;
        this.typingIndicator.style.display = 'none';
        this.sendBtn.disabled = false;
    }
    
    scrollToBottom() {
        setTimeout(() => {
            this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
        }, 100);
    }
    
    async getAIResponse(message) {
        // Use local responses by default (specific user responses)
        const localResponse = ChatbotConfig.getResponse(message);
        
        // Only use AI if explicitly configured
        if (Config.isUsingOllama()) {
            return this.getOllamaResponse(message);
        }
        
        // Fallback to Hugging Face if configured
        if (Config.isApiKeyConfigured()) {
            return this.getHuggingFaceResponse(message);
        }
        
        // Default to local responses
        return localResponse;
    }
    
    async getHuggingFaceResponse(message) {
        const API_URL = `https://api-inference.huggingface.co/models/${Config.API_SETTINGS.model}`;
        
        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${Config.getApiKey()}`
                },
                body: JSON.stringify({
                    inputs: `${Config.SYSTEM_PROMPT}<|start_header_id|>user<|end_header_id|>\n\n${message}<|eot_id|><|start_header_id|>assistant<|end_header_id|>\n\n`,
                    parameters: {
                        max_new_tokens: Config.API_SETTINGS.max_tokens,
                        temperature: Config.API_SETTINGS.temperature,
                        top_p: Config.API_SETTINGS.top_p,
                        do_sample: true,
                        return_full_text: false
                    }
                })
            });

            if (!response.ok) {
                throw new Error(`API request failed: ${response.status}`);
            }

            const data = await response.json();
            
            if (data && data[0] && data[0].generated_text) {
                // Extract the assistant's response from the generated text
                const fullText = data[0].generated_text;
                const assistantResponse = fullText.split('<|start_header_id|>assistant<|end_header_id|>\n\n')[1];
                return assistantResponse ? assistantResponse.trim() : fullText.trim();
            } else {
                throw new Error('Invalid response format');
            }

        } catch (error) {
            console.error('Hugging Face API Error:', error);
            
            // Fallback to local responses if API fails
            const fallbackResponse = ChatbotConfig.getResponse(message);
            return fallbackResponse;
        }
    }
    
    async getOllamaResponse(message) {
        const API_URL = `${Config.OLLAMA_URL}/api/generate`;
        
        try {
            console.log('🤖 Enviando mensaje a Ollama:', message);
            
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    model: 'llama3.2:3b', // o el modelo que tengas instalado
                    prompt: `${Config.SYSTEM_PROMPT}\n\nUsuario: ${message}\n\nAsistente:`,
                    stream: false,
                    options: {
                        temperature: Config.API_SETTINGS.temperature,
                        top_p: Config.API_SETTINGS.top_p,
                        num_predict: Config.API_SETTINGS.max_tokens
                    }
                })
            });

            if (!response.ok) {
                const errorText = await response.text();
                console.error('❌ Error de Ollama:', response.status, errorText);
                throw new Error(`Error de conexión con Ollama: ${response.status} - ${errorText}`);
            }

            const data = await response.json();
            console.log('✅ Respuesta de Ollama recibida:', data);
            
            if (data && data.response) {
                return data.response.trim();
            } else {
                console.error('❌ Formato de respuesta inválido:', data);
                throw new Error('Formato de respuesta inválido de Ollama');
            }

        } catch (error) {
            console.error('❌ Error en getOllamaResponse:', error);
            
            // Mensaje de error más específico
            if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
                return '❌ **Error de conexión:** No se pudo conectar con Ollama. Verifica que:\n\n' +
                       '1. Ollama esté instalado y ejecutándose\n' +
                       '2. El modelo esté descargado: `ollama pull llama3.2:3b`\n' +
                       '3. Ollama esté en el puerto 11434\n\n' +
                       '💡 **Solución rápida:** Ejecuta `ollama serve` en tu terminal';
            }
            
            if (error.message.includes('Error de conexión con Ollama')) {
                return '❌ **Error de Ollama:** ' + error.message + '\n\n' +
                       '💡 **Solución:** Verifica que Ollama esté ejecutándose con `ollama serve`';
            }
            
            // Fallback a respuestas locales si todo falla
            const fallbackResponse = ChatbotConfig.getResponse(message);
            return fallbackResponse || 'Lo siento, estoy teniendo problemas técnicos. Inténtalo más tarde.';
        }
    }

    // Método de diagnóstico para verificar la configuración
    diagnoseConfiguration() {
        console.log('🔍 DIAGNÓSTICO DE CONFIGURACIÓN DEL CHATBOT');
        console.log('==========================================');
        console.log('📋 Estado actual:');
        console.log('- Usando Ollama:', Config.isUsingOllama());
        console.log('- API Key configurada:', Config.isApiKeyConfigured());
        console.log('- API Key (primeros 10 caracteres):', Config.getApiKey().substring(0, 10) + '...');
        console.log('- Modelo configurado:', Config.API_SETTINGS.model);
        console.log('- URL de Ollama:', Config.OLLAMA_URL);
        console.log('');
        console.log('🔧 Para solucionar problemas:');
        
        if (Config.isUsingOllama()) {
            console.log('1. Verifica que Ollama esté instalado: ollama --version');
            console.log('2. Verifica que el modelo esté descargado: ollama list');
            console.log('3. Si no tienes el modelo, descárgalo: ollama pull llama3.2:3b');
            console.log('4. Verifica que Ollama esté ejecutándose: curl http://localhost:11434/api/tags');
        } else {
            console.log('1. Verifica tu API key de Hugging Face');
            console.log('2. Escribe "configurar api" en el chat para reconfigurar');
            console.log('3. O cambia a Ollama escribiendo "usar ollama"');
        }
        console.log('==========================================');
        
        // Mostrar información en el chat también
        let statusMessage = '🔍 **Estado de la configuración:**\n\n';
        statusMessage += `🤖 **Backend actual:** ${Config.isUsingOllama() ? 'Ollama (local)' : 'Hugging Face'}\n`;
        statusMessage += `🔑 **API Key:** ${Config.isApiKeyConfigured() ? '✅ Configurada' : '❌ No configurada'}\n`;
        statusMessage += `📋 **Modelo:** ${Config.API_SETTINGS.model}\n\n`;
        
        if (Config.isUsingOllama()) {
            statusMessage += '💡 **Para usar Ollama:**\n';
            statusMessage += '1. Instala Ollama: https://ollama.ai\n';
            statusMessage += '2. Descarga el modelo: `ollama pull llama3.2:3b`\n';
            statusMessage += '3. Ejecuta Ollama: `ollama serve`\n';
        } else {
            statusMessage += '💡 **Para usar Hugging Face:**\n';
            statusMessage += '1. Escribe "configurar api" para configurar tu API key\n';
            statusMessage += '2. O escribe "usar ollama" para cambiar a Ollama\n';
        }
        
        this.addMessage(statusMessage, 'bot');
    }
}

// Initialize chatbot when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    new Chatbot();
}); 

document.addEventListener('DOMContentLoaded', function() {
    const natyContainer = document.getElementById('naty-container');
    const natyToggle = document.getElementById('naty-toggle');
    const natyWindow = document.getElementById('naty-window');
    const natyClose = document.getElementById('naty-close');
    // Estado: abierto o cerrado
    let isOpen = false;

    function openChatbot() {
        natyContainer.classList.add('open');
        natyWindow.classList.add('fullscreen');
        natyToggle.style.display = 'none';
        natyClose.querySelector('i').className = 'fas fa-book-open';
        isOpen = true;
    }

    function closeChatbot() {
        natyContainer.classList.remove('open');
        natyWindow.classList.remove('fullscreen');
        natyToggle.style.display = 'flex';
        natyToggle.querySelector('i').className = 'fas fa-book';
        isOpen = false;
    }

    natyToggle.addEventListener('click', openChatbot);
    natyClose.addEventListener('click', closeChatbot);

    // Opcional: cerrar con ESC
    document.addEventListener('keydown', function(e) {
        if (isOpen && e.key === 'Escape') {
            closeChatbot();
        }
    });
}); 