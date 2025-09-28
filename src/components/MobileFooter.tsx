import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter, Star, Award } from 'lucide-react';
import logo from '../assets/logo.png';

const MobileFooter = () => {
  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F59E0B' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>
      
      <div className="relative z-10 px-4 py-8">
        {/* Company Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img src={logo} alt="GMVP Credifinanzas Logo" className="h-14 w-42 filter brightness-0 invert" />
       
          </div>
          <p className="text-gray-300 text-sm leading-relaxed max-w-sm mx-auto">
            Transformamos tu historial crediticio con estrategias personalizadas y resultados garantizados.
          </p>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className="grid grid-cols-2 gap-3 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span className="text-lg font-bold text-white">4.9/5</span>
            </div>
            <p className="text-gray-400 text-xs">500+ reseñas</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Award className="w-4 h-4 text-amber-400" />
              <span className="text-lg font-bold text-white">95%</span>
            </div>
            <p className="text-gray-400 text-xs">Tasa de éxito</p>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h3 className="text-lg font-bold text-white mb-4 text-center">Enlaces Rápidos</h3>
          <div className="grid grid-cols-2 gap-3">
            <Link to="/nuestra-compania" className="text-gray-300 hover:text-amber-400 transition-colors text-sm py-2 text-center bg-white/5 rounded-lg">
              Nuestra Compañía
            </Link>
            <Link to="/productos-servicios" className="text-gray-300 hover:text-amber-400 transition-colors text-sm py-2 text-center bg-white/5 rounded-lg">
              Servicios
            </Link>
            <Link to="/servicio-cliente" className="text-gray-300 hover:text-amber-400 transition-colors text-sm py-2 text-center bg-white/5 rounded-lg">
              Contacto
            </Link>
            <Link to="/noticias" className="text-gray-300 hover:text-amber-400 transition-colors text-sm py-2 text-center bg-white/5 rounded-lg">
              Noticias
            </Link>
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h3 className="text-lg font-bold text-white mb-4 text-center">Contacto</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 text-gray-300 bg-white/5 rounded-lg p-3">
              <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="font-medium text-sm">+57 300 123 4567</p>
                <p className="text-xs text-gray-400">Llámanos</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 text-gray-300 bg-white/5 rounded-lg p-3">
              <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="font-medium text-sm">info@gmvpcredifinanzas.com</p>
                <p className="text-xs text-gray-400">Envíanos un correo</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 text-gray-300 bg-white/5 rounded-lg p-3">
              <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="font-medium text-sm">Armenia, Quindío</p>
                <p className="text-xs text-gray-400">Próximamente Bogotá</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Social Media */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h3 className="text-lg font-bold text-white mb-4 text-center">Síguenos</h3>
          <div className="flex justify-center space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-amber-400 transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-amber-400 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-amber-400 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-amber-400 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

     

        {/* Legal Links */}
        <motion.div
          className="border-t border-slate-700 pt-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <div className="text-center space-y-3">
            <div className="text-xs text-gray-500 mb-3">
              <p>© 2025 GMVP Credifinanzas S.A.S. Todos los derechos reservados.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-xs">
              <Link to="/politicas" className="text-gray-500 hover:text-amber-400 transition-colors">
                Política de Privacidad
              </Link>
              <Link to="/politicas" className="text-gray-500 hover:text-amber-400 transition-colors">
                Términos y Condiciones
              </Link>
              <Link to="/politicas" className="text-gray-500 hover:text-amber-400 transition-colors">
                Aviso Legal
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default MobileFooter;
