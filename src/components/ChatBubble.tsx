import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageCircle, 
  X, 
  Send, 
  Phone, 
  Mail, 
  MapPin,
  Minimize2,
  Maximize2,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface ChatBubbleProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatBubble = ({ isOpen, onClose }: ChatBubbleProps) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [showContactOptions, setShowContactOptions] = useState(false);
  const [message, setMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "¡Hola! 👋 Bienvenido a GMVP Financiera.\n\nSoy tu asistente virtual y estoy aquí para ayudarte con:\n\n💼 Información sobre nuestros servicios\n📋 Requisitos y documentos\n💰 Consultas sobre precios\n⏰ Tiempos de procesamiento\n📞 Agendar tu consulta gratuita\n\n¿En qué puedo ayudarte hoy?",
      isBot: true,
      timestamp: new Date()
    }
  ]);

  // Función para hacer scroll automático al final
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Efecto para hacer scroll cuando se agregan nuevos mensajes
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (message.trim()) {
      const userMessage = message.toLowerCase().trim();
      const newMessage = {
        id: messages.length + 1,
        text: message,
        isBot: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, newMessage]);
      setMessage('');
      
      // Respuestas inteligentes del bot
      setTimeout(() => {
        let botResponseText = "";
        
        // Detectar si quiere consulta gratuita
        if (userMessage.includes('consulta') || userMessage.includes('gratuita') || userMessage.includes('gratis') || 
            userMessage.includes('asesoría') || userMessage.includes('asesoria') || userMessage.includes('ayuda') ||
            userMessage.includes('información') || userMessage.includes('informacion') || userMessage.includes('sí') || 
            userMessage.includes('si') || userMessage.includes('yes')) {
          
          botResponseText = "¡Excelente! 😊 Estamos aquí para ayudarte con tu consulta gratuita.\n\n📋 Para agendar tu consulta, necesito algunos datos:\n\n• ¿Cuál es tu nombre completo?\n• ¿En qué ciudad te encuentras?\n• ¿Cuál es tu número de teléfono?\n• ¿Qué tipo de asesoría necesitas? (Salir de centrales de riesgo, seguros, crédito rotativo, etc.)\n\nUna vez que me proporciones esta información, nuestro equipo se pondrá en contacto contigo en menos de 24 horas.";
          
        } else if (userMessage.includes('precio') || userMessage.includes('costo') || userMessage.includes('valor') || 
                   userMessage.includes('cuánto') || userMessage.includes('cuanto')) {
          
          botResponseText = "¡La consulta inicial es completamente GRATUITA! 🎉\n\nNo hay ningún costo por nuestra primera asesoría. Te ayudamos a:\n\n✅ Evaluar tu situación crediticia\n✅ Identificar las mejores opciones\n✅ Crear un plan personalizado\n\nSolo si decides proceder con algún servicio específico, te informaremos sobre los costos asociados.\n\n¿Te gustaría agendar tu consulta gratuita ahora?";
          
        } else if (userMessage.includes('tiempo') || userMessage.includes('días') || userMessage.includes('dias') || 
                   userMessage.includes('duración') || userMessage.includes('duracion')) {
          
          botResponseText = "⏰ Los tiempos varían según el servicio:\n\n• Consulta inicial: Inmediata\n• Salir de centrales de riesgo: 30-90 días\n• Seguros: Aprobación en 24-48 horas\n• Crédito rotativo: Aprobación en 24-48 horas\n• Compra de cartera: Variable según el caso\n\n¿Te interesa algún servicio específico? Puedo darte más detalles.";
          
        } else if (userMessage.includes('documentos') || userMessage.includes('requisitos') || userMessage.includes('necesito')) {
          
          botResponseText = "📄 Los documentos básicos que necesitas son:\n\n• Cédula de ciudadanía\n• Certificados de ingresos (últimos 3 meses)\n• Historial crediticio actual\n• Comprobantes de residencia\n\nDependiendo del servicio específico, podrían requerirse documentos adicionales.\n\n¿Para qué servicio necesitas esta información?";
          
        } else if (userMessage.includes('gracias') || userMessage.includes('thank') || userMessage.includes('ok') || 
                   userMessage.includes('okay') || userMessage.includes('perfecto') || userMessage.includes('bien')) {
          
          botResponseText = "¡De nada! 😊\n\nEstamos aquí para ayudarte a mejorar tu situación financiera. Si tienes más preguntas o quieres agendar tu consulta gratuita, solo dímelo.\n\nTambién puedes contactarnos directamente:\n📞 Tel: (57) 318 640 1900\n📧 Email: info@gmvpcredifinanzas.com\n\n¡Que tengas un excelente día!";
          
        } else {
          // Respuesta general
          botResponseText = "Gracias por tu mensaje. Nuestro equipo se pondrá en contacto contigo pronto.\n\n💡 Mientras tanto, puedo ayudarte con:\n\n• Información sobre nuestros servicios\n• Requisitos y documentos necesarios\n• Tiempos de procesamiento\n• Agendar tu consulta gratuita\n\n¿En qué puedo ayudarte específicamente?";
        }
        
        const botResponse = {
          id: messages.length + 2,
          text: botResponseText,
          isBot: true,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botResponse]);
      }, 1500);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const contactOptions = [
    {
      icon: Phone,
      title: 'Llamar',
      value: '(57) 318 640 1900',
      action: () => window.open('tel:+573186401900')
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'info@gmvpcredifinanzas.com',
      action: () => window.open('mailto:info@gmvpcredifinanzas.com')
    },
    {
      icon: MapPin,
      title: 'Oficina',
      value: 'Armenia, Quindío',
      action: () => {}
    }
  ];

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed bottom-14 right-4 z-50"
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ 
          opacity: 1, 
          scale: 1, 
          y: 0,
          height: isMinimized ? 'auto' : '600px'
        }}
        exit={{ opacity: 0, scale: 0.8, y: 20 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden w-80">
          {/* Header */}
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">GMVP Financiera</h3>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-xs text-white/90">En línea</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-1 hover:bg-white/20 rounded-full transition-colors duration-200"
                >
                  {isMinimized ? (
                    <Maximize2 className="w-4 h-4" />
                  ) : (
                    <Minimize2 className="w-4 h-4" />
                  )}
                </button>
                <button
                  onClick={onClose}
                  className="p-1 hover:bg-white/20 rounded-full transition-colors duration-200"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {!isMinimized && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: 'auto' }}
              exit={{ height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Contact Options Toggle */}
              <div className="p-4 bg-slate-50 border-b border-slate-200">
                <motion.button
                  onClick={() => setShowContactOptions(!showContactOptions)}
                  className="w-full flex items-center justify-between p-3 bg-white rounded-xl border border-slate-200 hover:border-amber-300 hover:shadow-md transition-all duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg flex items-center justify-center">
                      <Phone className="w-4 h-4 text-white" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-semibold text-slate-900">Contáctanos</p>
                      <p className="text-xs text-slate-600">Llamar, email o ubicación</p>
                    </div>
                  </div>
                  {showContactOptions ? (
                    <ChevronUp className="w-4 h-4 text-slate-600" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-600" />
                  )}
                </motion.button>

                {/* Contact Options Dropdown */}
                <AnimatePresence>
                  {showContactOptions && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="mt-3 space-y-2">
                        {contactOptions.map((option, index) => (
                          <motion.button
                            key={index}
                            onClick={option.action}
                            className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-200 text-left border border-transparent hover:border-slate-200"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <option.icon className="w-4 h-4 text-amber-600" />
                            <div className="flex-1">
                              <p className="text-sm font-medium text-slate-900">{option.title}</p>
                              <p className="text-xs text-slate-600">{option.value}</p>
                            </div>
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Messages */}
              <div className="h-96 overflow-y-auto p-4 space-y-4">
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
                  >
                    <div className={`max-w-[80%] p-3 rounded-2xl ${
                      msg.isBot 
                        ? 'bg-slate-100 text-slate-900' 
                        : 'bg-gradient-to-r from-amber-500 to-orange-500 text-white'
                    }`}>
                      <div className="text-sm whitespace-pre-line">{msg.text}</div>
                      <p className={`text-xs mt-1 ${
                        msg.isBot ? 'text-slate-500' : 'text-white/80'
                      }`}>
                        {msg.timestamp.toLocaleTimeString('es-CO', { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                      </p>
                    </div>
                  </motion.div>
                ))}
                {/* Elemento invisible para hacer scroll */}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-4 border-t border-slate-200">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Escribe tu mensaje..."
                    className="flex-1 px-3 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm"
                  />
                  <motion.button
                    onClick={handleSendMessage}
                    disabled={!message.trim()}
                    className="bg-gradient-to-r from-amber-500 to-orange-500 text-white p-2 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Send className="w-4 h-4" />
                  </motion.button>
                </div>
                <p className="text-xs text-slate-500 mt-2 text-center">
                  Presiona Enter para enviar
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ChatBubble;
