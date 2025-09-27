import React from 'react';
import { motion } from 'framer-motion';
import {
    Shield,
    CreditCard,
    TrendingUp,
    Users,
    ArrowRight,
    CheckCircle,
    Star,
    Clock,
    Target,
    Phone,
    MessageCircle,
    Zap,
    FileText
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useChat } from '../../../../contexts/ChatContext';

const WebServiceView = () => {
    const [activeService, setActiveService] = useState(0);
    const { openChat } = useChat();

    const services = [
        {
            id: 0,
            icon: Shield,
            title: 'Asesorías Financieras',
            subtitle: 'Salimos de Centrales de Riesgo',
            description: 'Te ayudamos a salir de Datacrédito, CIFIN y otras centrales de riesgo con estrategias personalizadas y resultados garantizados.',
            color: 'from-blue-500 to-blue-600',
            gradient: 'bg-gradient-to-br from-blue-50 to-blue-100',
            backgroundImage: '/asesoria.jpg',
            features: [
                'Análisis completo de tu historial crediticio',
                'Estrategias personalizadas por caso',
                'Acompañamiento durante todo el proceso',
                'Resultados comprobables en 30-90 días',
                'Garantía de satisfacción'
            ],
            benefits: [
                '95% de tasa de éxito',
                'Mejora promedio de 170 puntos',
                'Proceso completamente transparente',
                'Sin costos ocultos'
            ],
            duration: '30-90 días',
            requirements: [
                'Documento de identidad',
                'Certificados de ingresos',
                'Historial crediticio actual'
            ]
        },
        {
            id: 1,
            icon: CreditCard,
            title: 'Seguros',
            subtitle: 'Financiamos tu Seguro',
            description: 'Financiamos seguros de vida, deudores y SOAT con las mejores tasas del mercado y condiciones flexibles.',
            color: 'from-green-500 to-green-600',
            gradient: 'bg-gradient-to-br from-green-50 to-green-100',
            backgroundImage: '/seguros.jpg',
            features: [
                'Seguros de vida con cobertura completa',
                'Seguros deudores para proteger tu familia',
                'SOAT con las mejores aseguradoras',
                'Financiación hasta 12 meses',
                'Asesoría especializada'
            ],
            benefits: [
                'Mejores tasas del mercado',
                'Financiación flexible',
                'Proceso rápido y sencillo',
                'Cobertura nacional'
            ],
            duration: '1-12 meses',
            requirements: [
                'Documento de identidad',
                'Certificado de ingresos',
                'Información del vehículo (SOAT)'
            ]
        },
        {
            id: 2,
            icon: TrendingUp,
            title: 'Compra de Cartera',
            subtitle: 'Compramos tu Deuda',
            description: 'Compramos carteras de entidades del sector financiero, cooperativo, real y telecomunicaciones con análisis experto.',
            color: 'from-purple-500 to-purple-600',
            gradient: 'bg-gradient-to-br from-purple-50 to-purple-100',
            backgroundImage: '/cartera.jpg',
            features: [
                'Análisis gratuito de tu cartera',
                'Compra de deudas bancarias',
                'Carteras de cooperativas',
                'Deudas inmobiliarias',
                'Telecomunicaciones y servicios'
            ],
            benefits: [
                'Análisis completamente gratuito',
                'Mejores condiciones de pago',
                'Reducción de intereses',
                'Plan de pagos flexible'
            ],
            duration: '15-45 días',
            requirements: [
                'Documento de identidad',
                'Certificados de deudas',
                'Historial de pagos'
            ]
        },
        {
            id: 3,
            icon: Users,
            title: 'Crédito Rotativo',
            subtitle: 'Reactive tu Historial',
            description: 'Cupo rotativo para iniciar o mejorar tu historial crediticio con aprobación rápida y condiciones favorables.',
            color: 'from-orange-500 to-orange-600',
            gradient: 'bg-gradient-to-br from-orange-50 to-orange-100',
            backgroundImage: '/rotativo.jpg',
            features: [
                'Aprobación en 24-48 horas',
                'Sin aval ni codeudor',
                'Uso libre del cupo',
                'Pagos flexibles',
                'Reporte a centrales de riesgo'
            ],
            benefits: [
                'Aprobación rápida',
                'Mejora tu historial crediticio',
                'Uso libre del dinero',
                'Condiciones competitivas'
            ],
            duration: '12-36 meses',
            requirements: [
                'Documento de identidad',
                'Certificado de ingresos',
                'Referencias comerciales'
            ]
        }
    ];


    const faqs = [
        {
            question: '¿Cuánto tiempo toma el proceso de asesoría financiera?',
            answer: 'El proceso completo toma entre 30 y 90 días dependiendo de la complejidad del caso. Trabajamos de manera eficiente para obtener resultados lo más rápido posible.'
        },
        {
            question: '¿Qué documentos necesito para solicitar un servicio?',
            answer: 'Los documentos básicos son: documento de identidad, certificados de ingresos, y dependiendo del servicio, información adicional específica. Te guiamos en todo el proceso.'
        },
        {
            question: '¿Hay garantía en los servicios?',
            answer: 'Sí, ofrecemos garantía de satisfacción. Si no cumples con los requisitos y seguimos nuestro proceso, garantizamos resultados o devolvemos tu dinero.'
        },
        {
            question: '¿Puedo combinar varios servicios?',
            answer: 'Absolutamente. Muchos de nuestros clientes combinan asesoría financiera con compra de cartera o crédito rotativo para obtener mejores resultados.'
        },
        {
            question: '¿Atienden en toda Colombia?',
            answer: 'Actualmente atendemos desde Armenia, Quindío, pero trabajamos con clientes de toda Colombia de manera virtual. Próximamente tendremos oficina en Bogotá.'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    const cardVariants = {
        hidden: { scale: 0.9, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1
        },
        hover: {
            scale: 1.05
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-amber-50">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-amber-50">
                <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-amber-200/30 to-orange-200/30 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div
                            className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-8"
                            variants={itemVariants}
                        >
                            <Shield className="w-5 h-5 mr-2" />
                            Soluciones Financieras
                        </motion.div>

                        <motion.h1
                            className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 leading-tight"
                            variants={itemVariants}
                        >
                            Productos y
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
                                Servicios
                            </span>
                        </motion.h1>

                        <motion.p
                            className="text-xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed"
                            variants={itemVariants}
                        >
                            En GMVP Financiera ofrecemos una gama completa de soluciones financieras diseñadas para mejorar
                            tu historial crediticio y acceder a mejores oportunidades financieras.
                        </motion.p>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-6 justify-center"
                            variants={itemVariants}
                        >
                            <button
                                onClick={openChat}
                                className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg"
                            >
                                <MessageCircle className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                                Consulta Gratuita
                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <Link
                                to="/nuestra-compania"
                                className="group inline-flex items-center justify-center px-8 py-4 border-2 border-slate-300 text-slate-700 font-semibold rounded-2xl hover:border-amber-500 hover:text-amber-600 transition-all duration-300 text-lg"
                            >
                                Conoce Nuestra Historia
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Services Navigation */}
            <section className="py-16 bg-white relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F59E0B' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                            Nuestros <span className="text-amber-500">Servicios</span>
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            Selecciona el servicio que mejor se adapte a tus necesidades financieras
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((service, index) => (
                            <motion.button
                                key={service.id}
                                onClick={() => setActiveService(service.id)}
                                className={`group relative p-8 rounded-3xl text-left transition-all duration-500 border-2 overflow-hidden ${activeService === service.id
                                        ? 'bg-gradient-to-br from-amber-500 to-orange-500 text-white border-amber-500 shadow-2xl transform scale-105'
                                        : 'hover:bg-gradient-to-br hover:from-slate-50 hover:to-amber-50 text-slate-700 border-slate-200 hover:border-amber-300 shadow-lg hover:shadow-xl'
                                    }`}
                                style={{
                                    backgroundImage: `url('${service.backgroundImage}')`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                }}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                whileHover={{ scale: activeService === service.id ? 1.05 : 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {/* Background Overlay for better text readability */}
                                {activeService !== service.id && (
                                    <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]"></div>
                                )}

                                {/* Background Decoration */}
                                <div className={`absolute top-0 right-0 w-20 h-20 rounded-bl-full transition-all duration-500 z-10 ${activeService === service.id
                                        ? 'bg-white/20'
                                        : 'bg-gradient-to-br from-amber-100/50 to-orange-100/50 group-hover:bg-gradient-to-br group-hover:from-amber-200/50 group-hover:to-orange-200/50'
                                    }`}></div>

                                {/* Icon */}
                                <motion.div
                                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 relative z-20 ${activeService === service.id
                                            ? 'bg-white/20 backdrop-blur-sm'
                                            : `bg-gradient-to-r ${service.color} group-hover:scale-110`
                                        }`}
                                    animate={activeService === service.id ? { rotate: [0, 5, -5, 0] } : {}}
                                    transition={{ duration: 0.5 }}
                                >
                                    {React.createElement(service.icon, {
                                        className: `w-8 h-8 transition-all duration-500 ${activeService === service.id
                                                ? 'text-white'
                                                : 'text-white group-hover:text-white'
                                            }`
                                    })}
                                </motion.div>

                                {/* Content */}
                                <div className="relative z-20">
                                    <h3 className={`font-bold text-xl mb-2 transition-all duration-500 ${activeService === service.id ? 'text-white' : 'text-white group-hover:text-white'
                                        }`}>
                                        {service.title}
                                    </h3>
                                    <p className={`text-sm mb-4 transition-all duration-500 ${activeService === service.id ? 'text-white/90' : 'text-white/90 group-hover:text-white'
                                        }`}>
                                        {service.subtitle}
                                    </p>
                                </div>

                                {/* Hover Effect */}
                                {activeService !== service.id && (
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-orange-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                        initial={false}
                                    />
                                )}
                            </motion.button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Active Service Details */}
            <section className="py-16 bg-gradient-to-br from-slate-50 via-white to-amber-50 relative overflow-hidden">
                {/* Subtle Background Elements */}
                <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-amber-200/20 to-orange-200/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-r from-slate-200/20 to-slate-300/20 rounded-full blur-3xl"></div>

                <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        key={activeService}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Service Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            {/* Clean Service Info Card */}
                            <motion.div
                                className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200"
                                whileHover={{ scale: 1.02, y: -5 }}
                                transition={{ duration: 0.3 }}
                            >
                                {/* Service Header */}
                                <div className="mb-8">
                                    <motion.div
                                        className="flex items-center space-x-6 mb-6"
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3, duration: 0.6 }}
                                    >
                                        <motion.div
                                            className={`w-16 h-16 bg-gradient-to-r ${services[activeService].color} rounded-2xl flex items-center justify-center shadow-lg`}
                                            animate={{ rotate: [0, 5, -5, 0] }}
                                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                            whileHover={{ scale: 1.1 }}
                                        >
                                            {React.createElement(services[activeService].icon, { className: "w-8 h-8 text-white" })}
                                        </motion.div>
                                        <div className="flex-1">
                                            <motion.h2
                                                className="text-3xl font-bold text-slate-900 mb-2 leading-tight"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.4, duration: 0.6 }}
                                            >
                                                {services[activeService].title}
                                            </motion.h2>
                                            <motion.div
                                                className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-amber-50 to-orange-50 text-amber-600 border border-amber-200 rounded-full text-sm font-medium"
                                                initial={{ opacity: 0, scale: 0 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                                            >
                                                <Star className="w-4 h-4 mr-1 fill-current" />
                                                {services[activeService].subtitle}
                                            </motion.div>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        className="relative"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.6, duration: 0.6 }}
                                    >
                                        <p className="text-lg text-slate-600 leading-relaxed">
                                            {services[activeService].description}
                                        </p>
                                        {/* Decorative line */}
                                        <motion.div
                                            className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mt-4 -mb-8"
                                            initial={{ width: 0 }}
                                            animate={{ width: 64 }}
                                            transition={{ delay: 0.8, duration: 0.8 }}
                                        />
                                    </motion.div>
                                </div>
                            </motion.div>

                            {/* Clean Service Stats */}
                            <motion.div
                                className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 mt-6"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7, duration: 0.6 }}
                            >
                                <motion.div
                                    className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 group"
                                    whileHover={{ scale: 1.05, y: -5 }}
                                >
                                    <div className="w-10 h-10 bg-gradient-to-r from-slate-500 to-slate-600 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                                        <Clock className="w-5 h-5 text-white" />
                                    </div>
                                    <h4 className="font-bold text-slate-900 mb-1 text-base">Duración</h4>
                                    <p className="text-slate-600 font-semibold text-sm">{services[activeService].duration}</p>
                                </motion.div>

                                <motion.div
                                    className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 group"
                                    whileHover={{ scale: 1.05, y: -5 }}
                                >
                                    <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                                        <Target className="w-5 h-5 text-white" />
                                    </div>
                                    <h4 className="font-bold text-slate-900 mb-1 text-base">Éxito</h4>
                                    <p className="text-slate-600 font-semibold text-sm">95% tasa</p>
                                </motion.div>
                            </motion.div>

                            {/* Clean CTA Button */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8, duration: 0.6 }}
                            >
                                <Link
                                    to="/servicio-cliente"
                                    className="group inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-base w-full md:w-auto"
                                >
                                    <Phone className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                                    Solicitar Ahora
                                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </motion.div>
                        </motion.div>

                        {/* Clean Service Details */}
                        <motion.div
                            className="space-y-8"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            {/* Clean Features */}
                            <motion.div
                                className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200"
                                whileHover={{ scale: 1.02, y: -5 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="flex items-center mb-6">
                                    <div className="w-10 h-10 bg-gradient-to-r from-slate-500 to-slate-600 rounded-lg flex items-center justify-center mr-3">
                                        <CheckCircle className="w-5 h-5 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900">¿Qué incluye?</h3>
                                </div>
                                <ul className="space-y-3">
                                    {services[activeService].features.map((feature, index) => (
                                        <motion.li
                                            key={index}
                                            className="flex items-start space-x-3 group"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.9 + index * 0.1 }}
                                        >
                                            <motion.div
                                                className="w-6 h-6 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300 flex-shrink-0"
                                                whileHover={{ rotate: 360 }}
                                                transition={{ duration: 0.5 }}
                                            >
                                                <CheckCircle className="w-4 h-4 text-white" />
                                            </motion.div>
                                            <span className="text-slate-700 text-base font-medium group-hover:text-slate-900 transition-colors duration-300">{feature}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>

                            {/* Clean Benefits */}
                            <motion.div
                                className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200"
                                whileHover={{ scale: 1.02, y: -5 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="flex items-center mb-6">
                                    <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg flex items-center justify-center mr-3">
                                        <Star className="w-5 h-5 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900">Beneficios</h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {services[activeService].benefits.map((benefit, index) => (
                                        <motion.div
                                            key={index}
                                            className="flex items-start space-x-3 group"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 1.1 + index * 0.1 }}
                                        >
                                            <motion.div
                                                className="w-6 h-6 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300 flex-shrink-0"
                                                whileHover={{ rotate: 360 }}
                                                transition={{ duration: 0.5 }}
                                            >
                                                <Star className="w-4 h-4 text-white" />
                                            </motion.div>
                                            <span className="text-slate-700 text-base font-medium group-hover:text-slate-900 transition-colors duration-300">{benefit}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Clean Requirements */}
                            <motion.div
                                className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200"
                                whileHover={{ scale: 1.02, y: -5 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="flex items-center mb-6">
                                    <div className="w-10 h-10 bg-gradient-to-r from-slate-500 to-slate-600 rounded-lg flex items-center justify-center mr-3">
                                        <FileText className="w-5 h-5 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900">Requisitos</h3>
                                </div>
                                <ul className="space-y-3">
                                    {services[activeService].requirements.map((requirement, index) => (
                                        <motion.li
                                            key={index}
                                            className="flex items-start space-x-3 group"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 1.3 + index * 0.1 }}
                                        >
                                            <motion.div
                                                className="w-6 h-6 bg-gradient-to-r from-slate-500 to-slate-600 rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300 flex-shrink-0"
                                                whileHover={{ rotate: 360 }}
                                                transition={{ duration: 0.5 }}
                                            >
                                                <FileText className="w-4 h-4 text-white" />
                                            </motion.div>
                                            <span className="text-slate-700 text-base font-medium group-hover:text-slate-900 transition-colors duration-300">{requirement}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>



            {/* FAQ Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                            Preguntas Frecuentes
                        </h2>
                        <p className="text-xl text-gray-600">
                            Respuestas a las dudas más comunes sobre nuestros servicios
                        </p>
                    </motion.div>

                    <motion.div
                        className="space-y-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                className="card p-8"
                                variants={cardVariants}
                            >
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{faq.question}</h3>
                                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F59E0B' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}></div>
                <motion.div
                    className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mix-blend-lighten filter blur-2xl opacity-20"
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mix-blend-lighten filter blur-2xl opacity-20"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        rotate: [360, 180, 0],
                    }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />

                <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-8 border border-white/20"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            <Zap className="w-5 h-5 mr-2" />
                            ¿Necesitas Ayuda?
                        </motion.div>

                        <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                            ¿Listo para
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                                Mejorar tu Situación?
                            </span>
                        </h2>

                        <p className="text-xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                            Agenda una consulta gratuita y descubre cómo podemos ayudarte a alcanzar tus metas financieras
                        </p>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-6 justify-center"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            <button
                                onClick={openChat}
                                className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg"
                            >
                                <Zap className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                                Consulta Gratuita
                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <Link
                                to="/nuestra-compania"
                                className="group inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-2xl hover:border-amber-500 hover:bg-white/10 transition-all duration-300 text-lg backdrop-blur-sm"
                            >
                                Conoce Nuestra Historia
                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>

                        {/* Trust Indicators */}
                        <motion.div
                            className="mt-16 pt-8 border-t border-slate-700"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                        >
                            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
                                <div className="flex items-center space-x-2">
                                    <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                                    <span className="text-white font-semibold">Asesoría Especializada</span>
                                </div>
                                <div className="hidden sm:block w-px h-6 bg-slate-600"></div>
                                <div className="flex items-center space-x-2">
                                    <Shield className="w-5 h-5 text-green-400" />
                                    <span className="text-white font-semibold">Procesos Seguros</span>
                                </div>
                                <div className="hidden sm:block w-px h-6 bg-slate-600"></div>
                                <div className="flex items-center space-x-2">
                                    <CheckCircle className="w-5 h-5 text-blue-400" />
                                    <span className="text-white font-semibold">Resultados Garantizados</span>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default WebServiceView;