# 🌟 OAND7 Nanotechnology - El Futuro de la Medicina

Un sitio web moderno y educativo sobre nanobots y nanotecnología, con un chatbot inteligente integrado que utiliza **Llama 3** localmente con **Ollama** - completamente gratuito y sin necesidad de API key.

## 🚀 Características

### ✨ **Diseño Moderno**
- Diseño responsivo que se adapta a todos los dispositivos
- Gradientes y efectos visuales atractivos
- Animaciones suaves y fluidas
- Tipografía moderna con Inter Font

### 🎯 **Secciones Principales**
1. **Hero Section** - Introducción impactante con animación de nanobot
2. **¿Qué son los Nanobots?** - Explicación detallada con comparaciones visuales
3. **Aplicaciones** - Casos de uso en medicina, neurociencia, medio ambiente e industria
4. **Futuro** - Timeline de desarrollo y predicciones
5. **Contacto** - Formulario de suscripción y enlaces sociales

### 🎨 **Elementos Interactivos**
- Navegación suave entre secciones
- Animaciones de entrada al hacer scroll
- Efectos hover en tarjetas y botones
- Nanobot animado y clickeable
- Sistema de notificaciones
- **Formulario funcional con envío de emails**

### 📱 **Responsive Design**
- Optimizado para móviles, tablets y desktop
- Menú hamburguesa para dispositivos móviles
- Timeline adaptativo
- Grid layouts flexibles

### Chatbot IA con Llama 3 (Ollama)
- **🦙 Asistente Inteligente**: Chatbot especializado en nanobots
- **🧠 Llama 3 Local**: Respuestas dinámicas usando Meta Llama 3 con Ollama
- **🔧 Sin API Key**: Funciona completamente local, sin configuración externa
- **📚 Base de Conocimiento Local**: Fallback con respuestas predefinidas
- **💬 Interfaz Moderna**: Diseño atractivo con animaciones
- **📱 Funcionalidad Completa**: 
  - Abrir/cerrar chat
  - Indicador de escritura
  - Historial de mensajes
  - Respuestas automáticas
  - Responsive design

## 🤖 Funcionalidades del Chatbot

### Con Llama 3 + Ollama (Por Defecto)
- **Respuestas Dinámicas**: Cada respuesta es única y contextual
- **Contexto Especializado**: Entrenado específicamente en nanobots
- **Idioma Español**: Todas las respuestas en español
- **Emojis y Formato**: Respuestas atractivas y fáciles de leer
- **Preguntas Complejas**: Puede responder preguntas detalladas y específicas
- **Completamente Gratuito**: Sin costos de API
- **Privacidad Total**: Todo se ejecuta localmente
- **Funciona Offline**: Una vez descargado el modelo

### Sin Llama 3 (Fallback)
- **Respuestas Predefinidas**: Base de conocimiento local
- **Funciona Sin Configuración**: No requiere API key
- **Respuestas Rápidas**: Sin latencia de red
- **Información Educativa**: Contenido verificado sobre nanobots

### Temas que puede responder:
- **¿Qué son los nanobots?** - Definición y características
- **Aplicaciones médicas** - Usos en medicina y salud
- **Futuro de la nanotecnología** - Línea de tiempo y desarrollo
- **Investigación actual** - Áreas de estudio y desarrollo
- **Tamaño y escala** - Dimensiones y comparaciones
- **Riesgos y seguridad** - Consideraciones de seguridad
- **Aplicaciones generales** - Usos en diferentes campos

### Comandos del Chatbot
- `hola` - Saludo inicial
- `ayuda` - Mostrar temas disponibles
- `usar ollama` - Cambiar a Ollama (local)
- `usar hugging face` - Cambiar a Hugging Face (requiere API key)
- Preguntas específicas sobre nanobots

## 🛠️ Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos modernos con Flexbox y Grid
- **JavaScript ES6+** - Interactividad y animaciones
- **Meta Llama 3** - IA de código abierto para respuestas dinámicas
- **Ollama** - Ejecución local de modelos (por defecto)
- **Hugging Face API** - Acceso gratuito a modelos de IA (opcional)
- **Font Awesome** - Iconografía
- **Google Fonts** - Tipografía Inter
- **Formspree** - Envío de formularios por email

## 📁 Estructura del Proyecto

```
nanobots/
├── assets/
│   └── logo.png        # Logo de la empresa
├── index.html          # Página principal
├── instrucciones.html  # Página de instrucciones de uso
├── styles.css          # Estilos CSS
├── script.js           # Funcionalidad JavaScript
├── naty-chatbot.js     # Configuración del chatbot Naty
├── gracias.html        # Página de agradecimiento
└── README.md           # Documentación
```

## 🚀 Cómo Usar

### Opción 1: Abrir Directamente
1. Descarga todos los archivos
2. Abre `index.html` en tu navegador web

### Opción 2: Servidor Local
```bash
# Con Python 3
python -m http.server 8000

# Con Node.js (si tienes http-server instalado)
npx http-server

# Con PHP
php -S localhost:8000
```

Luego visita `http://localhost:8000` en tu navegador.

## 📚 Documentación Adicional

- [Instrucciones Detalladas de Ollama](INSTRUCCIONES_OLLAMA.md)
- [Configuración de API](config.js)
- [Base de Conocimiento Local](chatbot-config.js)

## 📋 Página de Instrucciones

La página `instrucciones.html` contiene información detallada sobre el uso de los productos:

### Características:
- **Navegación Rápida**: Enlaces directos a cada sección
- **Instrucciones Detalladas**: Pasos paso a paso para nanobots y microcontroladores
- **Pautas de Seguridad**: Información esencial para uso seguro
- **Información de Emergencia**: Contactos y síntomas de alerta
- **FAQ**: Preguntas frecuentes y respuestas
- **Diseño Responsivo**: Optimizado para todos los dispositivos

### Acceso:
- Desde la página principal: Click en "📋 Cómo Usar" en el menú
- URL directa: `http://localhost:8000/instrucciones.html`

## 📧 Configuración del Formulario de Email

### Paso 1: Configurar Formspree
1. Ve a [Formspree.io](https://formspree.io) y crea una cuenta gratuita
2. Crea un nuevo formulario
3. Copia el endpoint que te proporcionan (algo como `https://formspree.io/f/xabc123`)

### Paso 2: Actualizar el Formulario
En el archivo `index.html`, actualiza la línea del formulario:

```html
<form id="newsletter-form" action="TU_ENDPOINT_DE_FORMSPREE" method="POST">
```

### Paso 3: Personalizar el Email
Puedes personalizar el asunto del email modificando esta línea:

```html
<input type="hidden" name="_subject" value="Nueva suscripción a Nanobots Newsletter">
```

### Funcionalidades del Formulario:
- ✅ Envío automático a tu email
- ✅ Validación de campos
- ✅ Página de agradecimiento personalizada
- ✅ Notificaciones de éxito/error
- ✅ Protección anti-spam incluida

## 🎨 Personalización

### Colores
Los colores principales se pueden modificar en `styles.css`:
- **Primario**: `#6366f1` (Índigo)
- **Secundario**: `#4ecdc4` (Turquesa)
- **Acento**: `#ff6b6b` (Coral)

### Contenido
- Edita el texto en `index.html`
- Modifica las animaciones en `script.js`
- Ajusta los estilos en `styles.css`

### Modificar el Chatbot
Edita `chatbot-config.js` para:
- Agregar nuevas respuestas locales
- Modificar palabras clave
- Cambiar mensajes de saludo
- Personalizar respuestas por defecto

### Configurar Llama 3
Edita `config.js` para:
- Cambiar el modelo de IA (3B, 8B, 70B)
- Ajustar parámetros de respuesta
- Modificar el prompt del sistema
- Configurar límites de tokens

### Personalizar Estilos
Modifica `styles.css` para:
- Cambiar colores del chatbot
- Ajustar tamaños y posiciones
- Modificar animaciones
- Personalizar tipografía

## 📱 Compatibilidad

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Móviles iOS/Android

## 🔧 Funcionalidades JavaScript

### Navegación
- Scroll suave entre secciones
- Efecto parallax en el hero
- Menú móvil responsive

### Animaciones
- Intersection Observer para animaciones de entrada
- Efecto de escritura en el título
- Partículas animadas
- Timeline con revelación progresiva

### Interactividad
- **Formulario de newsletter con envío real de emails**
- Sistema de notificaciones
- Efectos hover y click
- Navegación por teclado

## 🌟 Características Destacadas

### Nanobot Animado
- Animación flotante continua
- Efecto parallax al hacer scroll
- Interactivo al hacer click
- Partículas dinámicas

### Timeline Interactivo
- Diseño alternado izquierda/derecha
- Animaciones de entrada
- Responsive en móviles

### Formulario Inteligente
- **Envío real de emails a tu dirección**
- Validación en tiempo real
- Animaciones de carga
- Notificaciones de éxito/error
- Página de agradecimiento con efectos
- Reset automático

## 📈 Optimizaciones

- **Performance**: CSS y JS optimizados
- **SEO**: Meta tags y estructura semántica
- **Accesibilidad**: Navegación por teclado y ARIA labels
- **Loading**: Animaciones de carga suaves
- **Email**: Integración con Formspree para envío confiable

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

- **Email**: info@oand7.com
- **Twitter**: [@oand7_nano](https://twitter.com/oand7_nano)
- **LinkedIn**: [OAND7 Nanotechnology](https://linkedin.com/company/oand7-nanotechnology)

---

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub! 

**Desarrollado con ❤️ para educar sobre el futuro de la nanotecnología**

**Powered by Meta Llama 3 + Ollama 🦙✨** 

## 👩‍💼 Naty - Asistente IA

Naty es tu asistente personal especializada en nanotecnología y nanobots.

### Características de Naty:
- **Personalidad Femenina**: Diseño elegante con temática de mujer profesional
- **Especialización**: Experta en nanobots y nanotecnología
- **Respuestas Inteligentes**: Sistema de palabras clave para respuestas precisas
- **Diseño Responsivo**: Adaptado para móviles y desktop
- **Animaciones Suaves**: Efectos visuales elegantes

### Temas que Naty puede abordar:
- ¿Qué son los nanobots?
- Aplicaciones médicas y ambientales
- Futuro de la nanotecnología
- Información sobre OAND7
- Seguridad y uso de nanobots
- Contacto y suscripciones

### Acceso:
- **Botón flotante**: Esquina inferior derecha de la página
- **Icono**: 👩‍💼 Naty
- **Colores**: Rosa y púrpura (tema femenino)

## 📧 Configuración del Formulario de Email 