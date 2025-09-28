import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ArrowRight, Star } from 'lucide-react';
import { useChat } from '../../contexts/ChatContext';
import logo from '../../assets/logo.png';

const MobileHeader: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { openChat } = useChat();
    const location = useLocation();

    const navigationItems = [
        { name: 'Inicio', path: '/mobile/' },
        { name: 'Nuestra Compañía', path: '/mobile/nuestra-compania' },
        { name: 'Productos y Servicios', path: '/mobile/productos-servicios' },
        { name: 'Políticas', path: '/mobile/politicas' },
        { name: 'Servicio al Cliente', path: '/mobile/servicio-cliente' },
    ];

    const isActive = (path: string) => {
        if (path === '/mobile/') {
            return location.pathname === path || location.pathname === '/mobile';
        }
        return location.pathname === path;
    };

    return (
        <>
            {/* Mobile Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-lg">
                <div className="px-4 py-3">
                    <div className="flex justify-between items-center">
                        {/* Logo */}
                        <Link to="/mobile/" className="flex items-center space-x-2">
                            <img 
                                src={logo} 
                                alt="GMVP Financiera" 
                                className="h-16 w-42 w-auto"
                            />
                            <div className="hidden sm:block">
                                <h1 className="text-lg font-bold text-gray-900">GMVP Financiera</h1>
                                <p className="text-xs text-gray-600">Soluciones Crediticias</p>
                            </div>
                        </Link>

                        {/* Menu Button */}
                        <motion.button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg"
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
                                        <X className="w-5 h-5" />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="menu"
                                        initial={{ rotate: 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Menu className="w-5 h-5" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    </div>
                </div>

                {/* Mobile Navigation Sidebar */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <>
                            {/* Backdrop */}
                            <motion.div
                                className="fixed inset-0 bg-black/50 z-40"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setIsMenuOpen(false)}
                            />
                            
                            {/* Sidebar */}
                            <motion.div
                                className="fixed top-0 right-0 w-80 max-w-[90vw] bg-white shadow-2xl z-50"
                                initial={{ x: "100%" }}
                                animate={{ x: 0 }}
                                exit={{ x: "100%" }}
                                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                                style={{ height: '100vh' }}
                            >
                                {/* Sidebar Header */}
                                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                                    <div className="flex items-center space-x-3">
                                        <img 
                                            src={logo} 
                                            alt="GMVP Financiera" 
                                            className="h-14 w-42 w-auto"
                                        />
                                    </div>
                                    <motion.button
                                        onClick={() => setIsMenuOpen(false)}
                                        className="p-2 rounded-xl hover:bg-gray-100 transition-colors"
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <X className="w-5 h-5 text-gray-600" />
                                    </motion.button>
                                </div>

                                {/* Sidebar Content */}
                                <div className="flex flex-col h-[calc(100vh-120px)]">
                                    <div className="flex-1 px-6 py-6 space-y-2">
                                        {/* Navigation Items */}
                                        {navigationItems.map((item, index) => (
                                            <motion.div
                                                key={item.path}
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                            >
                                                <Link
                                                    to={item.path}
                                                    onClick={() => setIsMenuOpen(false)}
                                                    className={`flex items-center justify-between px-4 py-4 rounded-xl text-base font-semibold transition-all ${
                                                        isActive(item.path)
                                                            ? 'text-white bg-gradient-to-r from-amber-500 to-orange-500 shadow-lg'
                                                            : 'text-gray-700 hover:text-amber-600 hover:bg-amber-50'
                                                    }`}
                                                >
                                                    {item.name}
                                                    <ArrowRight className="w-4 h-4" />
                                                </Link>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Sidebar Footer */}
                                    <div className="p-6 border-t border-gray-200 space-y-4">
                                        {/* CTA Buttons */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: navigationItems.length * 0.1 }}
                                            className="space-y-3"
                                        >
                                            <Link
                                                to="/mobile/servicio-cliente"
                                                className="flex items-center justify-center w-full px-4 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <Phone className="w-4 h-4 mr-2" />
                                                Llamar
                                            </Link>
                                            <button
                                                onClick={() => {
                                                    openChat();
                                                    setIsMenuOpen(false);
                                                }}
                                                className="flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
                                            >
                                                <Star className="w-4 h-4 mr-2" />
                                                Consulta Gratis
                                                <ArrowRight className="w-4 h-4 ml-2" />
                                            </button>
                                        </motion.div>

                                        {/* Trust Indicators */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: (navigationItems.length + 1) * 0.1 }}
                                            className="text-center"
                                        >
                                            <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
                                                <div className="flex items-center">
                                                    <div className="flex -space-x-1 mr-2">
                                                        {[...Array(5)].map((_, i) => (
                                                            <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                                                        ))}
                                                    </div>
                                                    <span className="font-semibold">4.9/5</span>
                                                </div>
                                                <div className="w-px h-4 bg-gray-300"></div>
                                                <span>500+ reseñas</span>
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </header>

            {/* Status Bar Spacer */}
            <div className="h-16"></div>
        </>
    );
};

export default MobileHeader;
