import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Shield, CreditCard, TrendingUp, Users, Star, Award, Zap, Target, DollarSign, Play, Globe, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import { useChat } from '../../../../contexts/ChatContext';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem, hoverScale, hoverLift } from '../../../../utils/animations';

const WebHomeView = () => {
    const [activeTestimonial, setActiveTestimonial] = useState(0);
    const heroRef = useRef<HTMLElement>(null);
    const { openChat } = useChat();
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);


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
            {/* Hero Section - Minimalist Design */}
            <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Background Elements */}
                {/* Parallax Background Image */}
                <motion.div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url('/background2.jpg')`,
                        y: y,
                        scale: 1.2
                    }}
                />

                {/* Additional Parallax Layer */}
                <motion.div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
                    style={{
                        backgroundImage: `url('/background2.jpg')`,
                        backgroundSize: '130% 130%',
                        backgroundPosition: 'center center',
                        y: useTransform(scrollYProgress, [0, 1], ["0%", "30%"]),
                    }}
                />

                {/* Floating Parallax Elements */}
                <motion.div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `url('/background2.jpg')`,
                        backgroundSize: '80% 80%',
                        backgroundPosition: 'top right',
                        y: useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]),
                    }}
                />

                {/* Dark Overlay with Gradient and Blur */}
                <div
                    className="absolute inset-0 bg-gradient-to-br from-black/70 via-gray-900/50 to-black/70"
                    style={{
                        backdropFilter: 'blur(3px)',
                        WebkitBackdropFilter: 'blur(3px)',
                    }}
                ></div>

                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-amber-200/20 to-orange-200/20 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
                </div>

                <motion.div
                    className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                    style={{ opacity }}
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Content */}
                        <motion.div
                            className="text-center lg:text-left"
                            {...fadeInLeft}
                        >
                            <motion.div
                                className="inline-flex items-center px-4 py-2 bg-amber-500/20 backdrop-blur-sm text-amber-300 border border-amber-400/30 rounded-full text-sm font-medium mb-8"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                                {...hoverScale}
                            >
                                <Star className="w-4 h-4 mr-2 fill-current" />
                                Líderes en Soluciones Crediticias
                            </motion.div>

                            <motion.h1
                                className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight"
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
                                className="text-xl text-slate-200 mb-12 max-w-2xl lg:max-w-none mx-auto lg:mx-0 leading-relaxed"
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

                        {/* Visual Element - Animated Credit Score Chart */}
                        <motion.div
                            className="relative"
                            {...fadeInRight}
                            transition={{ delay: 0.3 }}
                        >
                            <div className="relative">
                                {/* Main Chart Card */}
                                <motion.div
                                    className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 relative overflow-hidden"
                                    style={{
                                        background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                                        backdropFilter: 'blur(20px)',
                                        WebkitBackdropFilter: 'blur(20px)',
                                    }}
                                    {...hoverLift}
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
                                            className="relative h-64 rounded-2xl p-6 border border-white/20 overflow-hidden"
                                            style={{
                                                background: 'rgba(255,255,255,0.05)',
                                                backdropFilter: 'blur(10px)',
                                                WebkitBackdropFilter: 'blur(10px)',
                                            }}
                                        >
                                            {/* Chart Grid Lines */}
                                            <div className="absolute inset-6">
                                                {/* Horizontal Grid Lines */}
                                                <div className="absolute inset-0 flex flex-col justify-between">
                                                    {[0, 25, 50, 75, 100].map((_, index) => (
                                                        <div key={index} className="flex items-center">
                                                            <div className="w-full border-t border-white/20"></div>
                                                            <span className="text-white/70 text-xs ml-2 w-8">{850 - (index * 100)}</span>
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
                                                        strokeWidth="0.5"
                                                        fill="none"
                                                        strokeDasharray="1,2"
                                                        opacity="0.3"
                                                    />

                                                    {/* Main trading line - constantly moving */}
                                                    <motion.path
                                                        d="M 0,75 Q 10,75 20,70 Q 30,65 40,60 Q 50,45 60,40 Q 70,30 80,20 Q 90,15 100,15"
                                                        stroke="url(#tradingGradient)"
                                                        strokeWidth="2.5"
                                                        fill="none"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        initial={{ pathLength: 0 }}
                                                        animate={{
                                                            pathLength: 1,
                                                            d: [
                                                                "M 0,75 Q 10,75 20,70 Q 30,65 40,60 Q 50,45 60,40 Q 70,30 80,20 Q 90,15 100,15",
                                                                "M 0,75 Q 10,73 20,68 Q 30,63 40,58 Q 50,43 60,38 Q 70,28 80,18 Q 90,13 100,13",
                                                                "M 0,75 Q 10,77 20,72 Q 30,67 40,62 Q 50,47 60,42 Q 70,32 80,22 Q 90,17 100,17",
                                                                "M 0,75 Q 10,75 20,70 Q 30,65 40,60 Q 50,45 60,40 Q 70,30 80,20 Q 90,15 100,15"
                                                            ]
                                                        }}
                                                        transition={{
                                                            duration: 4,
                                                            repeat: Infinity,
                                                            ease: "easeInOut"
                                                        }}
                                                    />

                                                    {/* Area under curve */}
                                                    <motion.path
                                                        d="M 0,75 Q 10,75 20,70 Q 30,65 40,60 Q 50,45 60,40 Q 70,30 80,20 Q 90,15 100,15 L 100,100 L 0,100 Z"
                                                        fill="url(#areaGradient)"
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: [0, 0.3, 0.1, 0.3] }}
                                                        transition={{
                                                            duration: 4,
                                                            repeat: Infinity,
                                                            ease: "easeInOut"
                                                        }}
                                                    />

                                                    {/* Live moving dot */}
                                                    <motion.circle
                                                        cx="100"
                                                        cy="15"
                                                        r="3"
                                                        fill="#10b981"
                                                        animate={{
                                                            scale: [1, 1.5, 1],
                                                            opacity: [1, 0.7, 1]
                                                        }}
                                                        transition={{
                                                            duration: 1.5,
                                                            repeat: Infinity,
                                                            ease: "easeInOut"
                                                        }}
                                                    />

                                                    {/* Pulse effect */}
                                                    <motion.circle
                                                        cx="100"
                                                        cy="15"
                                                        r="6"
                                                        fill="#10b981"
                                                        opacity="0.3"
                                                        animate={{
                                                            scale: [0, 2, 0],
                                                            opacity: [0.5, 0, 0]
                                                        }}
                                                        transition={{
                                                            duration: 2,
                                                            repeat: Infinity,
                                                            ease: "easeOut"
                                                        }}
                                                    />
                                                </svg>

                                                {/* Live Score Display */}
                                                <motion.div
                                                    className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl px-4 py-2 shadow-lg"
                                                    animate={{
                                                        scale: [1, 1.05, 1],
                                                        boxShadow: [
                                                            "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                                                            "0 10px 15px -3px rgb(0 0 0 / 0.2)",
                                                            "0 4px 6px -1px rgb(0 0 0 / 0.1)"
                                                        ]
                                                    }}
                                                    transition={{
                                                        duration: 2,
                                                        repeat: Infinity,
                                                        ease: "easeInOut"
                                                    }}
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
                                                            animate={{
                                                                color: ["#ffffff", "#10b981", "#ffffff"]
                                                            }}
                                                            transition={{
                                                                duration: 2,
                                                                repeat: Infinity,
                                                                ease: "easeInOut"
                                                            }}
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
                                            <div className="absolute bottom-0 left-6 right-6 flex justify-between text-white/60 text-xs">
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
            </section>

            {/* Stats Section */}


            {/* Services Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        {...fadeInUp}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                            Nuestros <span className="text-amber-500">Servicios</span>
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            Soluciones financieras diseñadas para transformar tu historial crediticio
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                        {...staggerContainer}
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-amber-300"
                                variants={staggerItem}
                                {...hoverLift}
                            >
                                {/* Background Gradient */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>

                                <div className="relative z-10">
                                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        <service.icon className="w-8 h-8 text-white" />
                                    </div>

                                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors duration-300">
                                        {service.title}
                                    </h3>

                                    <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                                        {service.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-gradient-to-br from-slate-50 to-amber-50 relative overflow-hidden">
                <div className="absolute inset-0 opacity-15" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F59E0B' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}></div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        {...fadeInUp}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                            ¿Por qué elegir <span className="text-amber-500">GMVP Financiera</span>?
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            Nos comprometemos a brindarte la mejor experiencia financiera con resultados garantizados
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                        {...staggerContainer}
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                className="text-center group"
                                variants={staggerItem}
                            >
                                <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <benefit.icon className="w-10 h-10 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors duration-300">
                                    {benefit.title}
                                </h3>
                                <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                                    {benefit.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F59E0B' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}></div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        {...fadeInUp}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                            Historias de <span className="text-amber-500">Éxito</span>
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            Conoce las experiencias reales de nuestros clientes
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                className={`group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-amber-300 cursor-pointer ${activeTestimonial === index ? 'ring-2 ring-amber-500 scale-105' : ''
                                    }`}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                whileHover={{ scale: activeTestimonial === index ? 1.05 : 1.02, y: -5 }}
                                onClick={() => setActiveTestimonial(index)}
                            >
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                                        {testimonial.avatar}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 group-hover:text-amber-600 transition-colors duration-300">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-slate-600 text-sm">{testimonial.role} • {testimonial.location}</p>
                                    </div>
                                </div>

                                <p className="text-slate-700 leading-relaxed mb-6 group-hover:text-slate-800 transition-colors duration-300">
                                    "{testimonial.content}"
                                </p>

                                <div className="flex items-center justify-between">
                                    <div className="text-2xl font-bold text-green-500">
                                        {testimonial.improvement}
                                    </div>
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F59E0B' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

                <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                            ¿Listo para transformar tu
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                                Futuro Financiero?
                            </span>
                        </h2>

                        <p className="text-xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                            Únete a cientos de clientes que ya han logrado sus objetivos financieros.
                            Tu consulta inicial es completamente gratuita.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <button
                                onClick={openChat}
                                className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg"
                            >
                                <Phone className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                                Consulta Gratuita Ahora
                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <Link
                                to="/productos-servicios"
                                className="group inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-2xl hover:border-amber-500 hover:bg-white/10 transition-all duration-300 text-lg backdrop-blur-sm"
                            >
                                Ver Servicios
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </motion.div>
    );
};

export default WebHomeView;
