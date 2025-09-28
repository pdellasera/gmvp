import { motion, useScroll, useTransform } from 'framer-motion';
import { Shield, CreditCard, TrendingUp, Users, Star, Award, Zap, Target, Phone, ChevronRight, ArrowRight, Play, Globe, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import { useChat } from '../../../../contexts/ChatContext';
// Animations will be applied inline for better mobile performance

const MobileHomeView = () => {
    const [activeTestimonial, setActiveTestimonial] = useState(0);
    const { openChat } = useChat();
    const heroRef = useRef<HTMLElement>(null);
    
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });


    const services = [
        {
            icon: Shield,
            title: 'Asesorías Financieras',
            description: 'Estrategias personalizadas para salir de centrales de riesgo',
            color: 'from-blue-500 to-blue-600',
            bgColor: 'bg-blue-50',
            iconColor: 'text-blue-500'
        },
        {
            icon: CreditCard,
            title: 'Seguros',
            description: 'Financiamos seguros con las mejores tasas del mercado',
            color: 'from-green-500 to-green-600',
            bgColor: 'bg-green-50',
            iconColor: 'text-green-500'
        },
        {
            icon: TrendingUp,
            title: 'Compra de Cartera',
            description: 'Compramos carteras con análisis experto gratuito',
            color: 'from-purple-500 to-purple-600',
            bgColor: 'bg-purple-50',
            iconColor: 'text-purple-500'
        },
        {
            icon: Users,
            title: 'Crédito Rotativo',
            description: 'Cupo rotativo para reactivar tu historial crediticio',
            color: 'from-orange-500 to-orange-600',
            bgColor: 'bg-orange-50',
            iconColor: 'text-orange-500'
        }
    ];

    const testimonials = [
        {
            name: 'María González',
            role: 'Empresaria',
            location: 'Bogotá',
            content: 'Mejoré mi puntaje de 580 a 750 en 6 meses. Ahora tengo acceso a créditos que antes no podía obtener.',
            improvement: '+170 puntos',
            avatar: 'MG'
        },
        {
            name: 'Carlos Rodríguez',
            role: 'Profesional',
            location: 'Medellín',
            content: 'Excelente servicio. Me guiaron para salir de Datacrédito y CIFIN en solo 4 meses.',
            improvement: 'Historial limpio',
            avatar: 'CR'
        },
        {
            name: 'Ana Martínez',
            role: 'Emprendedora',
            location: 'Cali',
            content: 'Obtuve el crédito para mi negocio gracias a su asesoría. Muy profesionales y efectivos.',
            improvement: '$50M aprobado',
            avatar: 'AM'
        }
    ];

    const benefits = [
        {
            icon: Zap,
            title: 'Resultados Rápidos',
            description: 'Ve mejoras en tu historial crediticio en 30 días'
        },
        {
            icon: Target,
            title: 'Estrategias Personalizadas',
            description: 'Cada caso recibe un plan específico y detallado'
        },
        {
            icon: DollarSign,
            title: 'Sin Costos Ocultos',
            description: 'Transparencia total en todos nuestros procesos'
        },
        {
            icon: Award,
            title: 'Garantía de Resultados',
            description: 'Si no cumples con el proceso, te devolvemos tu dinero'
        }
    ];

    return (
        <motion.div
            className="min-h-screen bg-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            {/* Hero Section - Native Parallax */}
            <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Background Elements - Optimized for Mobile */}
                {/* Static Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url('/background2.jpg')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center',
                        backgroundAttachment: 'fixed'
                    }}
                />

                {/* Subtle Parallax Layer */}
                <motion.div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
                    style={{
                        backgroundImage: `url('/background2.jpg')`,
                        backgroundSize: '105% 105%',
                        backgroundPosition: 'center center',
                        y: useTransform(scrollYProgress, [0, 1], ["0%", "5%"]),
                    }}
                />

                {/* Dark Overlay with Gradient - Optimized for Chart Visibility */}
                <div
                    className="absolute inset-0 bg-gradient-to-br from-black/60 via-gray-900/40 to-black/60"
                    style={{
                        backdropFilter: 'blur(1px)',
                        WebkitBackdropFilter: 'blur(1px)',
                    }}
                ></div>

                {/* Decorative Elements - Same as Web */}
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-amber-200/20 to-orange-200/20 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
                </div>

              

                    <motion.div
                    className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Content - Same as Web */}
                    <motion.div
                            className="text-center lg:text-left mt-8"
                            initial={{ opacity: 0, x: -60 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <motion.div
                                className="inline-flex items-center px-4 py-2 bg-amber-500/20 backdrop-blur-sm text-amber-300 border border-amber-400/30 rounded-full text-sm font-medium mb-8"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                            >
                                <Star className="w-4 h-4 mr-2 fill-current" />
                                Líderes en Soluciones Crediticias
                            </motion.div>

                            <motion.h1
                                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                            >
                                Transforma tu
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                                    Futuro Financiero
                                </span>
                            </motion.h1>

                            <motion.p
                                className="text-lg lg:text-xl text-slate-200 mb-12 max-w-2xl lg:max-w-none mx-auto lg:mx-0 leading-relaxed"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                            >
                                Te ayudamos a salir de centrales de riesgo y acceder a mejores oportunidades financieras
                                con estrategias probadas y resultados garantizados.
                            </motion.p>

                    <motion.div
                                className="flex flex-col sm:flex-row gap-6 mb-12"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                    >
                        <button
                            onClick={openChat}
                                    className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                        >
                            <span>Consulta Gratuita</span>
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <Link
                            to="/productos-servicios"
                                    className="group inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-2xl hover:border-amber-500 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                                >
                                    <Play className="mr-2 w-5 h-5" />
                                    Ver Servicios
                                </Link>
                            </motion.div>

                            <motion.div
                                className="flex flex-col sm:flex-row items-center gap-8 text-slate-300"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.8 }}
                            >
                                <div className="flex items-center">
                                    <div className="flex -space-x-1 mr-3">
                                        {[...Array(5)].map((_, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ scale: 0, rotate: -180 }}
                                                animate={{ scale: 1, rotate: 0 }}
                                                transition={{ delay: 0.8 + i * 0.1, type: "spring", stiffness: 200 }}
                                            >
                                                <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                                            </motion.div>
                                        ))}
                                    </div>
                                    <span className="text-lg font-semibold text-white">4.9/5 (500+ reseñas)</span>
                                </div>
                                <div className="flex items-center">
                                    <Globe className="w-5 h-5 mr-2 text-slate-300" />
                                    <span className="text-lg text-white">Atendemos en toda Colombia</span>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Visual Element - Animated Credit Score Chart - Same as Web */}
                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, x: 60 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                        >
                            <div className="relative">
                                {/* Main Chart Card - Enhanced Visibility */}
                                <motion.div
                                    className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-xl rounded-3xl p-8 mb-8 shadow-2xl border border-white/30 relative overflow-hidden"
                                    style={{
                                        background: 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.15) 100%)',
                                        backdropFilter: 'blur(15px)',
                                        WebkitBackdropFilter: 'blur(15px)',
                                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1)'
                                    }}
                                >
                                    {/* Background Pattern */}
                                    <div className="absolute inset-0 opacity-10" style={{
                                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F59E0B' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                                    }}></div>

                                    <div className="relative z-10">
                                        {/* Header */}
                                        <div className="flex items-center justify-between mb-8">
                                            <div>
                                                <h3 className="text-2xl font-bold text-white mb-2">Evolución Crediticia</h3>
                                                <p className="text-white/80 text-sm">Progreso en tiempo real</p>
                                            </div>
                                            <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                                                <TrendingUp className="w-8 h-8 text-white" />
                                            </div>
                                        </div>

                                        {/* Live Trading-Style Chart */}
                                        <div
                                            className="relative h-64 rounded-2xl p-6 border border-white/30 overflow-hidden"
                                            style={{
                                                background: 'rgba(0,0,0,0.3)',
                                                backdropFilter: 'blur(8px)',
                                                WebkitBackdropFilter: 'blur(8px)',
                                            }}
                                        >
                                            {/* Chart Grid Lines */}
                                            <div className="absolute inset-6">
                                                {/* Horizontal Grid Lines */}
                                                <div className="absolute inset-0 flex flex-col justify-between">
                                                    {[0, 25, 50, 75, 100].map((_, index) => (
                                                        <div key={index} className="flex items-center">
                                                            <div className="w-full border-t border-white/40"></div>
                                                            <span className="text-white/90 text-xs ml-2 w-8 font-medium">{850 - (index * 100)}</span>
                                                        </div>
                                                    ))}
                                                </div>

                                                {/* Live Animated Chart */}
                                                <svg className="absolute inset-6 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                                                    {/* Gradient definition */}
                                                    <defs>
                                                        <linearGradient id="tradingGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                            <stop offset="0%" stopColor="#ef4444" />
                                                            <stop offset="50%" stopColor="#f59e0b" />
                                                            <stop offset="100%" stopColor="#10b981" />
                                                        </linearGradient>
                                                        <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                                            <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                                                            <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                                                        </linearGradient>
                                                    </defs>

                                                    {/* Background reference line */}
                                                    <motion.path
                                                        d="M 0,75 L 100,75"
                                                        stroke="#ef4444"
                                                        strokeWidth="1"
                                                        fill="none"
                                                        strokeDasharray="2,4"
                                                        opacity="0.6"
                                                    />

                                                    {/* Main trading line - constantly moving */}
                                                    <motion.path
                                                        d="M 0,75 Q 10,75 20,70 Q 30,65 40,60 Q 50,45 60,40 Q 70,30 80,20 Q 90,15 100,15"
                                                        stroke="url(#tradingGradient)"
                                                        strokeWidth="3"
                                                        fill="none"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        initial={{ pathLength: 0 }}
                                                        animate={{ pathLength: 1 }}
                                                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                                    />

                                                    {/* Area under curve */}
                                                    <motion.path
                                                        d="M 0,75 Q 10,75 20,70 Q 30,65 40,60 Q 50,45 60,40 Q 70,30 80,20 Q 90,15 100,15 L 100,100 L 0,100 Z"
                                                        fill="url(#areaGradient)"
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: [0, 0.3, 0.1, 0.3] }}
                                                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                                    />

                                                    {/* Live moving dot */}
                                                    <motion.circle
                                                        cx="100"
                                                        cy="15"
                                                        r="3"
                                                        fill="#10b981"
                                                        animate={{ scale: [1, 1.5, 1], opacity: [1, 0.7, 1] }}
                                                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                                    />

                                                    {/* Pulse effect */}
                                                    <motion.circle
                                                        cx="100"
                                                        cy="15"
                                                        r="6"
                                                        fill="#10b981"
                                                        opacity="0.3"
                                                        animate={{ scale: [0, 2, 0], opacity: [0.5, 0, 0] }}
                                                        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                                                    />
                                                </svg>

                                                {/* Live Score Display */}
                                                <motion.div
                                                    className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl px-4 py-2 shadow-lg"
                                                    animate={{ scale: [1, 1.05, 1], boxShadow: ["0 4px 6px -1px rgb(0 0 0 / 0.1)", "0 10px 15px -3px rgb(0 0 0 / 0.2)", "0 4px 6px -1px rgb(0 0 0 / 0.1)"] }}
                                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                                >
                                                    <div className="flex items-center space-x-2">
                                                        <motion.div
                                                            animate={{ rotate: [0, 360] }}
                                                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                                        >
                                                            <TrendingUp className="w-4 h-4 text-white" />
                                                        </motion.div>
                                                        <motion.span
                                                            className="text-white font-bold text-lg"
                                                            animate={{ color: ["#ffffff", "#10b981", "#ffffff"] }}
                                                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                                        >
                                                            750
                                                        </motion.span>
                                                    </div>
                                                </motion.div>

                                                {/* Live indicator */}
                                                <motion.div
                                                    className="absolute top-4 left-4 flex items-center space-x-2"
                                                    animate={{ opacity: [1, 0.5, 1] }}
                                                    transition={{ duration: 1.5, repeat: Infinity }}
                                                >
                                                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                                    <span className="text-green-400 text-xs font-medium">LIVE</span>
                                                </motion.div>
                                            </div>

                                            {/* Timeline Labels */}
                                            <div className="absolute bottom-0 left-6 right-6 flex justify-between text-white/80 text-xs font-medium">
                                                <span>6m ago</span>
                                                <span>4m ago</span>
                                                <span>2m ago</span>
                                                <span>Now</span>
                                            </div>
                                        </div>

                                        {/* Dynamic Stats */}
                                        <div className="flex justify-between mt-8">
                                            <div className="text-center">
                                                <div className="text-3xl font-bold text-red-400">580</div>
                                                <div className="text-white/70 text-xs">Inicial</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-3xl font-bold text-amber-400">665</div>
                                                <div className="text-white/70 text-xs">Mejora</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-3xl font-bold text-green-400">750</div>
                                                <div className="text-white/70 text-xs">Final</div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                    </motion.div>
                </div>
                </motion.div>

                {/* Native Bottom Indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                        <motion.div
                            className="w-1 h-3 bg-white/70 rounded-full mt-2"
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                    </div>
                </motion.div>
            </section>


            {/* Services Section - Native Cards */}
            <section className="px-6 py-8 bg-gray-50">
                <motion.div
                    className="flex items-center justify-between mb-6"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-2xl font-bold text-gray-900">Nuestros Servicios</h3>
                    <Link
                        to="/productos-servicios"
                        className="text-amber-600 text-sm font-medium flex items-center space-x-1"
                    >
                        <span>Ver todos</span>
                        <ChevronRight className="w-4 h-4" />
                    </Link>
                </motion.div>

                <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="flex items-start space-x-4">
                                <div className={`w-14 h-14 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                                    <service.icon className="w-7 h-7 text-white" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* Benefits Section - Native Style */}
            <section className="px-6 py-8 bg-white">
                <motion.h3
                    className="text-2xl font-bold text-gray-900 mb-6 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    ¿Por qué elegir <span className="text-amber-500">GMVP Financiera</span>?
                </motion.h3>

                <motion.div
                    className="grid grid-cols-2 gap-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={benefit.title}
                            className="bg-gradient-to-br from-slate-50 to-amber-50 rounded-2xl p-4 text-center border border-amber-100"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                                <benefit.icon className="w-6 h-6 text-white" />
                            </div>
                            <h4 className="text-sm font-bold text-gray-900 mb-1">{benefit.title}</h4>
                            <p className="text-xs text-gray-600 leading-relaxed">{benefit.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* Testimonials Section - Native Carousel */}
            <section className="px-6 py-8 bg-gray-50">
                <motion.h3
                    className="text-2xl font-bold text-gray-900 mb-6 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Historias de <span className="text-amber-500">Éxito</span>
                </motion.h3>

                <div className="relative">
                <motion.div
                        className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100"
                    key={activeTestimonial}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                >
                    <div className="flex items-start space-x-4">
                            <div className="w-14 h-14 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                            {testimonials[activeTestimonial].avatar}
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                                    <h4 className="font-bold text-gray-900">{testimonials[activeTestimonial].name}</h4>
                                <div className="flex space-x-1">
                                        {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                                    ))}
                                    </div>
                                </div>
                                <p className="text-gray-600 text-sm mb-3">{testimonials[activeTestimonial].role} • {testimonials[activeTestimonial].location}</p>
                                <p className="text-gray-700 text-sm leading-relaxed mb-4">"{testimonials[activeTestimonial].content}"</p>
                                <div className="text-lg font-bold text-green-500">
                                    {testimonials[activeTestimonial].improvement}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Carousel Indicators */}
                    <div className="flex justify-center mt-6 space-x-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTestimonial(index)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                    activeTestimonial === index ? 'bg-amber-500 w-6' : 'bg-gray-300'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section - Native Style */}
            <section className="px-6 pt-8 pb-0 bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F59E0B' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}></div>

                <motion.div
                    className="relative z-10 text-center pb-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                        ¿Listo para transformar tu
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                            Futuro Financiero?
                        </span>
                    </h3>

                    <p className="text-slate-300 mb-8 text-sm leading-relaxed">
                        Únete a cientos de clientes que ya han logrado sus objetivos financieros.
                    </p>

                    <div className="space-y-4">
                        <button
                            onClick={openChat}
                            className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold py-4 px-8 rounded-2xl shadow-lg flex items-center justify-center space-x-2"
                        >
                            <Phone className="w-5 h-5" />
                            <span>Consulta Gratuita Ahora</span>
                            <ArrowRight className="w-5 h-5" />
                        </button>
                        <Link
                            to="/productos-servicios"
                            className="w-full bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold py-4 px-8 rounded-2xl flex items-center justify-center space-x-2 hover:bg-white/20 transition-colors"
                        >
                            <Play className="w-5 h-5" />
                            <span>Ver Servicios</span>
                        </Link>
                    </div>
                </motion.div>
            </section>
        </motion.div>
    );
};

export default MobileHomeView;