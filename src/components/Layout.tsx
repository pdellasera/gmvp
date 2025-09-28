import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter, ArrowRight, Star, Award } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';
import { ChatProvider, useChat } from '../contexts/ChatContext';
import ChatBubble from './ChatBubble';
import ScrollToTop from './ScrollToTop';
import RedirectToMobile from './RedirectToMobile';

const LayoutContent = () => {
  const { isChatOpen, closeChat, openChat } = useChat();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Inicio', path: '/' },
    { name: 'Nuestra Compañía', path: '/nuestra-compania' },
    { name: 'Productos y Servicios', path: '/productos-servicios' },
    { name: 'Políticas', path: '/politicas' },
    { name: 'Servicio al Cliente', path: '/servicio-cliente' },
    // { name: 'Noticias', path: '/noticias' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === path || location.pathname === '/web' || location.pathname === '/mobile';
    }
    return location.pathname.includes(path);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-amber-50">
      <ScrollToTop />
      <RedirectToMobile />
      {/* Modern Header with Glassmorphism */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-amber-200/50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo Section */}
            <Link to="/" className="flex items-center space-x-4 group">
              <div className="relative">
                <motion.img 
                  src={logo} 
                  alt="GMVP Credifinanzas Logo" 
                  className="h-20 w-42 transition-all duration-300 group-hover:scale-110" 
                  whileHover={{ rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300"></div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-300 ${
                    isActive(item.path)
                      ? 'text-white bg-gradient-to-r from-amber-500 to-orange-500 shadow-lg shadow-amber-500/25'
                      : 'text-slate-700 hover:text-amber-600 hover:bg-amber-50'
                  }`}
                >
                  {item.name}
                  {isActive(item.path) && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl -z-10"
                      layoutId="activeTab"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <Link 
                to="/servicio-cliente" 
                className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-slate-700 rounded-xl hover:bg-white/20 hover:border-white/30 transition-all duration-300 text-sm font-medium"
              >
                <Phone className="w-4 h-4 mr-2" />
                Llamar
              </Link>
              <button
                onClick={openChat}
                className="btn-primary inline-flex items-center px-6 py-2 text-sm font-semibold"
              >
                Consulta Gratis
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>

            {/* Mobile menu button */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-amber-200/50 shadow-xl"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-6 py-6 space-y-3">
                {navigationItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                        isActive(item.path)
                          ? 'text-white bg-gradient-to-r from-amber-500 to-orange-500 shadow-lg'
                          : 'text-slate-700 hover:text-amber-600 hover:bg-amber-50'
                      }`}
                    >
                      {item.name}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navigationItems.length * 0.1 }}
                  className="pt-4 space-y-3"
                >
                  <Link
                    to="/servicio-cliente"
                    className="btn btn-secondary w-full justify-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Phone className="w-4 h-4" />
                    Llamar
                  </Link>
                  <button
                    onClick={() => {
                      openChat();
                      setIsMenuOpen(false);
                    }}
                    className="btn btn-primary w-full justify-center"
                  >
                    Consulta Gratis
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        <Outlet />
      </main>

      {/* Premium Footer */}
      <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F59E0B' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="relative">
                  <img src={logo} alt="GMVP Credifinanzas Logo" className="h-12 w-auto filter brightness-0 invert" />
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full opacity-20 blur-lg"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">GMVP Credifinanzas</h3>
                  <p className="text-amber-400 text-sm font-medium">Soluciones Financieras</p>
                </div>
              </div>
              <p className="text-gray-300 mb-8 max-w-lg leading-relaxed">
                Transformamos tu historial crediticio con estrategias personalizadas y resultados garantizados. 
                Más de 5 años ayudando a colombianos a acceder a mejores oportunidades financieras.
              </p>
              
              {/* Trust Indicators */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="flex items-center space-x-2 mb-2">
                    <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                    <span className="text-lg font-bold text-white">4.9/5</span>
                  </div>
                  <p className="text-gray-400 text-sm">500+ reseñas</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="flex items-center space-x-2 mb-2">
                    <Award className="w-5 h-5 text-amber-400" />
                    <span className="text-lg font-bold text-white">95%</span>
                  </div>
                  <p className="text-gray-400 text-sm">Tasa de éxito</p>
                </div>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-300">
                  <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">Armenia, Quindío</p>
                    <p className="text-sm text-gray-400">Próximamente Bogotá</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">+57 300 123 4567</p>
                    <p className="text-sm text-gray-400">Lunes a Viernes 8AM - 6PM</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">info@gmvpcredifinanzas.com</p>
                    <p className="text-sm text-gray-400">Respuesta en 24 horas</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-white">Enlaces Rápidos</h4>
              <ul className="space-y-3">
                {navigationItems.map((item) => (
                  <li key={item.path}>
                    <Link 
                      to={item.path} 
                      className="flex items-center space-x-2 text-gray-300 hover:text-amber-400 transition-colors group"
                    >
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-white">Nuestros Servicios</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span>Asesorías Financieras</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span>Seguros</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span>Compra de Cartera</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span>Crédito Rotativo</span>
                </li>
              </ul>

              {/* Social Media */}
              <div className="mt-8">
                <h5 className="text-lg font-semibold mb-4 text-white">Síguenos</h5>
                <div className="flex space-x-4">
                  {[
                    { icon: Facebook, href: "https://facebook.com", color: "hover:from-blue-600 hover:to-blue-700" },
                    { icon: Twitter, href: "https://twitter.com", color: "hover:from-sky-500 hover:to-sky-600" },
                    { icon: Instagram, href: "https://instagram.com", color: "hover:from-pink-500 hover:to-pink-600" },
                    { icon: Linkedin, href: "https://linkedin.com", color: "hover:from-blue-700 hover:to-blue-800" }
                  ].map(({ icon: Icon, href, color }, index) => (
                    <motion.a
                      key={index}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all border border-white/10 ${color}`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                <p>© 2025 GMVP Credifinanzas S.A.S. Todos los derechos reservados.</p>
              </div>
              <div className="flex space-x-6 text-sm">
                <Link to="/politicas" className="text-gray-400 hover:text-amber-400 transition-colors">
                  Política de Privacidad
                </Link>
                <Link to="/politicas" className="text-gray-400 hover:text-amber-400 transition-colors">
                  Términos y Condiciones
                </Link>
                <Link to="/politicas" className="text-gray-400 hover:text-amber-400 transition-colors">
                  Aviso Legal
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Chat Bubble */}
      <ChatBubble isOpen={isChatOpen} onClose={closeChat} />
    </div>
  );
};

const Layout = () => {
  return (
    <ChatProvider>
      <LayoutContent />
    </ChatProvider>
  );
};

export default Layout;