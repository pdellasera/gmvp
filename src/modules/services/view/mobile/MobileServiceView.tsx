import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    FileText,
    ChevronRight,
    X
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useChat } from '../../../../contexts/ChatContext';

const MobileServiceView = () => {
    const [activeService, setActiveService] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
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
                'Análisis experto de viabilidad',
                'Condiciones favorables',
                'Proceso transparente',
                'Seguimiento continuo'
            ],
            duration: '15-30 días',
            requirements: [
                'Documentación de la deuda',
                'Historial de pagos',
                'Información de la entidad'
            ]
        },
        {
            id: 3,
            icon: Users,
            title: 'Crédito Rotativo',
            subtitle: 'Cupo Rotativo Disponible',
            description: 'Cupo rotativo para personas que estén iniciando vida crediticia o reactivando su historial crediticio.',
            color: 'from-orange-500 to-orange-600',
            gradient: 'bg-gradient-to-br from-orange-50 to-orange-100',
            backgroundImage: '/credito.jpg',
            features: [
                'Cupo rotativo disponible',
                'Para iniciar vida crediticia',
                'Reactivación de historial',
                'Flexibilidad en pagos',
                'Sin penalizaciones por prepago'
            ],
            benefits: [
                'Acceso inmediato al crédito',
                'Mejora tu historial crediticio',
                'Flexibilidad total',
                'Sin costos ocultos'
            ],
            duration: 'Inmediato',
            requirements: [
                'Documento de identidad',
                'Certificado de ingresos',
                'Referencias comerciales'
            ]
        }
    ];

    const processSteps = [
        {
            step: 1,
            title: 'Consulta Gratuita',
            description: 'Evaluamos tu situación actual y necesidades específicas',
            icon: MessageCircle,
            color: 'from-blue-500 to-blue-600'
        },
        {
            step: 2,
            title: 'Análisis Personalizado',
            description: 'Estudiamos tu historial y diseñamos una estrategia única',
            icon: FileText,
            color: 'from-green-500 to-green-600'
        },
        {
            step: 3,
            title: 'Implementación',
            description: 'Ejecutamos el plan diseñado específicamente para ti',
            icon: Zap,
            color: 'from-purple-500 to-purple-600'
        },
        {
            step: 4,
            title: 'Seguimiento Continuo',
            description: 'Monitoreamos tu progreso y ajustamos si es necesario',
            icon: Target,
            color: 'from-orange-500 to-orange-600'
        }
    ];

    const benefits = [
        {
            icon: Star,
            title: 'Resultados Garantizados',
            description: '95% de tasa de éxito comprobable',
            color: 'from-yellow-500 to-yellow-600'
        },
        {
            icon: Clock,
            title: 'Proceso Rápido',
            description: 'Resultados en 30-90 días',
            color: 'from-blue-500 to-blue-600'
        },
        {
            icon: Shield,
            title: 'Transparencia Total',
            description: 'Sin costos ocultos ni sorpresas',
            color: 'from-green-500 to-green-600'
        },
        {
            icon: Users,
            title: 'Acompañamiento',
            description: 'Te guiamos en cada paso del proceso',
            color: 'from-purple-500 to-purple-600'
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section - Mobile Native */}
            <section className="relative py-16 px-6 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F59E0B' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}></div>

                <div className="relative z-10 max-w-sm mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            className="inline-flex items-center px-4 py-2 bg-amber-500/20 backdrop-blur-sm text-amber-300 border border-amber-400/30 rounded-full text-sm font-medium mb-6"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        >
                            <Shield className="w-4 h-4 mr-2" />
                            Soluciones Financieras
                        </motion.div>

                        <motion.h1
                            className="text-4xl font-bold text-white mb-6 leading-tight"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                        >
                            Productos y
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                                Servicios
                            </span>
                        </motion.h1>

                        <motion.p
                            className="text-lg text-white/90 mb-8 leading-relaxed"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            Soluciones financieras integrales diseñadas para ayudarte a mejorar tu historial crediticio
                            y acceder a mejores oportunidades en el sistema financiero.
                        </motion.p>

                        <motion.div
                            className="space-y-4"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            <button
                                onClick={openChat}
                                className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold py-4 px-8 rounded-2xl shadow-lg flex items-center justify-center space-x-2"
                            >
                                <span>Consulta Gratuita</span>
                                <ArrowRight className="w-5 h-5" />
                            </button>
                            <Link
                                to="/mobile/nuestra-compania"
                                className="w-full bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold py-4 px-8 rounded-2xl flex items-center justify-center space-x-2 hover:bg-white/20 transition-colors"
                            >
                                <span>Conoce Más</span>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Services Section - Mobile Native */}
            <section className="py-12 px-6 bg-white">
                <div className="max-w-sm mx-auto">
                    <motion.div
                        className="text-center mb-8"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
                        <p className="text-base text-gray-600">
                            Cada servicio está diseñado para brindarte soluciones reales y efectivas
                        </p>
                    </motion.div>

                    <div className="space-y-4">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.id}
                                className={`relative rounded-2xl overflow-hidden shadow-lg border-2 transition-all duration-300 ${
                                    activeService === service.id
                                        ? 'border-amber-500 shadow-2xl'
                                        : 'border-gray-200 hover:border-amber-300'
                                }`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                whileHover={{ scale: 1.02 }}
                                onClick={() => {
                                    setActiveService(service.id);
                                    setIsModalOpen(true);
                                }}
                            >
                                {/* Background Image */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                                    style={{ backgroundImage: `url('${service.backgroundImage}')` }}
                                ></div>
                                
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/60"></div>
                                
                                {/* Content */}
                                <div className="relative z-10 p-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex items-center space-x-3">
                                            <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center`}>
                                                <service.icon className="w-6 h-6 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-white">{service.title}</h3>
                                                <p className="text-sm text-white/80">{service.subtitle}</p>
                                            </div>
                                        </div>
                                        <ChevronRight className={`w-5 h-5 text-white transition-transform ${
                                            activeService === service.id ? 'rotate-90' : ''
                                        }`} />
                                    </div>
                                    
                                    <p className="text-sm text-white/90 mb-4 leading-relaxed">
                                        {service.description}
                                    </p>
                                    
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-2">
                                            <Clock className="w-4 h-4 text-white/70" />
                                            <span className="text-xs text-white/70">{service.duration}</span>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                                            <span className="text-xs text-white/70">Garantizado</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service Details Modal - Mobile Native */}
            <AnimatePresence>
                {isModalOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            className="fixed inset-0 bg-black/50 z-50"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsModalOpen(false)}
                        />
                        
                        {/* Modal */}
                        <motion.div
                            className="fixed inset-x-4 top-1/2 -translate-y-1/2 bg-white rounded-3xl shadow-2xl z-50 max-h-[90vh] overflow-hidden"
                            initial={{ opacity: 0, scale: 0.9, y: 50 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 50 }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        >
                            {/* Modal Header */}
                            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <div className={`w-10 h-10 bg-gradient-to-r ${services[activeService].color} rounded-xl flex items-center justify-center`}>
                                        {React.createElement(services[activeService].icon, { className: "w-5 h-5 text-white" })}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900">{services[activeService].title}</h3>
                                        <p className="text-sm text-gray-600">{services[activeService].subtitle}</p>
                                    </div>
                                </div>
                                <motion.button
                                    onClick={() => setIsModalOpen(false)}
                                    className="p-2 rounded-xl hover:bg-gray-100 transition-colors"
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <X className="w-5 h-5 text-gray-600" />
                                </motion.button>
                            </div>

                            {/* Modal Content */}
                            <div className="px-6 py-6 max-h-[calc(90vh-80px)] overflow-y-auto">
                                <div className="space-y-6">
                                    {/* Description */}
                                    <div>
                                        <p className="text-sm text-gray-700 leading-relaxed">
                                            {services[activeService].description}
                                        </p>
                                    </div>

                                    {/* Features */}
                                    <div>
                                        <h4 className="text-base font-bold text-gray-900 mb-3">Características:</h4>
                                        <ul className="space-y-2">
                                            {services[activeService].features.map((feature, index) => (
                                                <motion.li
                                                    key={index}
                                                    className="flex items-start space-x-3"
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: index * 0.1, duration: 0.6 }}
                                                >
                                                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                                    <span className="text-sm text-gray-700">{feature}</span>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Benefits */}
                                    <div>
                                        <h4 className="text-base font-bold text-gray-900 mb-3">Beneficios:</h4>
                                        <div className="grid grid-cols-1 gap-3">
                                            {services[activeService].benefits.map((benefit, index) => (
                                                <motion.div
                                                    key={index}
                                                    className="bg-gradient-to-r from-amber-50 to-orange-50 p-3 rounded-xl border border-amber-200"
                                                    initial={{ opacity: 0, scale: 0.9 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: index * 0.1, duration: 0.6 }}
                                                >
                                                    <p className="text-sm font-semibold text-gray-900">{benefit}</p>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Requirements */}
                                    <div>
                                        <h4 className="text-base font-bold text-gray-900 mb-3">Requisitos:</h4>
                                        <ul className="space-y-2">
                                            {services[activeService].requirements.map((requirement, index) => (
                                                <motion.li
                                                    key={index}
                                                    className="flex items-center space-x-3"
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: index * 0.1, duration: 0.6 }}
                                                >
                                                    <FileText className="w-4 h-4 text-blue-500 flex-shrink-0" />
                                                    <span className="text-sm text-gray-700">{requirement}</span>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Duration */}
                                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-xl">
                                        <div className="flex items-center space-x-2">
                                            <Clock className="w-4 h-4 text-gray-600" />
                                            <span className="text-sm font-semibold text-gray-900">Duración:</span>
                                            <span className="text-sm text-gray-700">{services[activeService].duration}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Modal Footer */}
                            <div className="sticky bottom-0 bg-white border-t border-gray-200 px-6 py-4 space-y-3">
                                <button
                                    onClick={() => {
                                        openChat();
                                        setIsModalOpen(false);
                                    }}
                                    className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold py-4 px-6 rounded-2xl shadow-lg flex items-center justify-center space-x-2"
                                >
                                    <MessageCircle className="w-5 h-5" />
                                    <span>Consulta Gratuita</span>
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                                <Link
                                    to="/mobile/servicio-cliente"
                                    onClick={() => setIsModalOpen(false)}
                                    className="w-full border-2 border-amber-500 text-amber-600 font-semibold py-4 px-6 rounded-2xl flex items-center justify-center space-x-2 hover:bg-amber-50 transition-colors"
                                >
                                    <Phone className="w-5 h-5" />
                                    <span>Llamar Ahora</span>
                                </Link>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Process Section - Mobile Native */}
            <section className="py-12 px-6 bg-white">
                <div className="max-w-sm mx-auto">
                    <motion.div
                        className="text-center mb-8"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Nuestro Proceso</h2>
                        <p className="text-base text-gray-600">
                            Te acompañamos en cada paso para garantizar tu éxito
                        </p>
                    </motion.div>

                    <div className="space-y-6">
                        {processSteps.map((step, index) => (
                            <motion.div
                                key={step.step}
                                className="relative"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                            >
                                {/* Step Number */}
                                <div className="absolute left-4 top-6 w-8 h-8 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center z-10">
                                    <span className="text-white font-bold text-sm">{step.step}</span>
                                </div>

                                {/* Connection Line */}
                                {index < processSteps.length - 1 && (
                                    <div className="absolute left-7 top-14 w-1 h-16 bg-gradient-to-b from-amber-500 to-orange-500"></div>
                                )}

                                {/* Content */}
                                <div className="ml-16">
                                    <div className="bg-white rounded-2xl p-5 shadow-lg border border-gray-100">
                                        <div className="flex items-center space-x-3 mb-3">
                                            <div className={`w-10 h-10 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center`}>
                                                <step.icon className="w-5 h-5 text-white" />
                                            </div>
                                            <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                                        </div>
                                        <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section - Mobile Native */}
            <section className="py-12 px-6 bg-gradient-to-br from-slate-50 to-amber-50">
                <div className="max-w-sm mx-auto">
                    <motion.div
                        className="text-center mb-8"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Por qué elegirnos?</h2>
                        <p className="text-base text-gray-600">
                            Trabajamos con transparencia y compromiso para brindarte los mejores resultados
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 gap-4">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                className="bg-white rounded-2xl p-4 text-center shadow-lg border border-gray-100"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className={`w-12 h-12 bg-gradient-to-r ${benefit.color} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                                    <benefit.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-sm font-bold text-gray-900 mb-1">{benefit.title}</h3>
                                <p className="text-xs text-gray-600">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section - Mobile Native */}
            <section className="py-12 px-6 bg-gradient-to-r from-amber-500 to-orange-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

                <div className="max-w-sm mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-2xl font-bold text-white mb-4">
                            ¿Listo para mejorar tu situación financiera?
                        </h2>
                        <p className="text-base text-white/90 mb-6">
                            Contáctanos hoy mismo y descubre cómo podemos ayudarte
                        </p>
                        <div className="space-y-3">
                            <button
                                onClick={openChat}
                                className="w-full bg-white text-amber-600 font-semibold py-4 px-8 rounded-2xl shadow-lg flex items-center justify-center space-x-2 hover:bg-gray-50 transition-colors"
                            >
                                <MessageCircle className="w-5 h-5" />
                                <span>Consulta Gratuita</span>
                                <ArrowRight className="w-5 h-5" />
                            </button>
                            <Link
                                to="/mobile/nuestra-compania"
                                className="w-full border-2 border-white text-white font-semibold py-4 px-8 rounded-2xl flex items-center justify-center space-x-2 hover:bg-white hover:text-amber-600 transition-colors"
                            >
                                <span>Conoce Más</span>
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default MobileServiceView;