import { motion } from 'framer-motion';
import { Shield, CreditCard, TrendingUp, Users, Star, Award, Zap, Target, Phone, CheckCircle, ChevronRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useChat } from '../../../../contexts/ChatContext';
import MobileFooter from '../../../../components/MobileFooter';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem, hoverScale, hoverLift } from '../../../../utils/animations';

const MobileHomeView = () => {
    const [activeTestimonial, setActiveTestimonial] = useState(0);
    const { openChat } = useChat();

    const stats = [
        { number: '500+', label: 'Clientes', icon: Users, color: 'from-blue-500 to-blue-600' },
        { number: '95%', label: 'Éxito', icon: Target, color: 'from-green-500 to-green-600' },
        { number: '170+', label: 'Puntos', icon: TrendingUp, color: 'from-amber-500 to-amber-600' },
        { number: '5+', label: 'Años', icon: Award, color: 'from-purple-500 to-purple-600' }
    ];

    const services = [
        {
            icon: Shield,
            title: 'Asesorías Financieras',
            description: 'Estrategias personalizadas para salir de centrales de riesgo',
            color: 'from-blue-500 to-blue-600',
            features: ['Análisis crediticio', 'Estrategia personalizada', 'Seguimiento continuo']
        },
        {
            icon: CreditCard,
            title: 'Financiación de Seguros',
            description: 'Seguros de vida, deudores y SOAT con las mejores tasas',
            color: 'from-green-500 to-green-600',
            features: ['Tasas competitivas', 'Aprobación rápida', 'Sin papeleo']
        },
        {
            icon: TrendingUp,
            title: 'Compra de Cartera',
            description: 'Compramos carteras de entidades financieras',
            color: 'from-purple-500 to-purple-600',
            features: ['Sectores múltiples', 'Evaluación rápida', 'Mejores precios']
        },
        {
            icon: Users,
            title: 'Crédito Rotativo',
            description: 'Cupo rotativo para mejorar tu historial crediticio',
            color: 'from-orange-500 to-orange-600',
            features: ['Aprobación inmediata', 'Sin aval', 'Flexibilidad total']
        }
    ];

    const testimonials = [
        {
            name: 'María González',
            location: 'Bogotá',
            text: 'GMVP me ayudó a salir de centrales de riesgo en solo 3 meses. Ahora tengo un excelente historial crediticio.',
            rating: 5,
            avatar: 'MG'
        },
        {
            name: 'Carlos Rodríguez',
            location: 'Medellín',
            text: 'El proceso fue muy claro y transparente. Logré mejorar mi puntaje crediticio significativamente.',
            rating: 5,
            avatar: 'CR'
        },
        {
            name: 'Ana Martínez',
            location: 'Cali',
            text: 'Excelente servicio al cliente. Me guiaron paso a paso en todo el proceso financiero.',
            rating: 5,
            avatar: 'AM'
        }
    ];

    return (
        <motion.div
            className="min-h-screen bg-gray-50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >


            {/* Hero Section - Native Style */}
            <motion.section
                className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4 py-8 relative overflow-hidden"
                {...fadeInUp}
            >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 left-4 w-20 h-20 bg-amber-400 rounded-full blur-xl"></div>
                    <div className="absolute bottom-10 right-4 w-32 h-32 bg-orange-400 rounded-full blur-xl"></div>
                </div>

                <div className="relative z-10">
                    {/* Welcome Message */}
                    <motion.div
                        className="mb-6"
                        {...fadeInLeft}
                    >
                        <div className="inline-flex items-center px-3 py-1 bg-amber-500/20 backdrop-blur-sm text-amber-300 border border-amber-400/30 rounded-full text-xs font-medium mb-4">
                            <Star className="w-3 h-3 mr-1 fill-current" />
                            Bienvenido de vuelta
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-2">
                            Hola, ¿cómo está tu
                        </h2>
                        <h1 className="text-3xl font-bold text-white">
                            Situación Financiera?
                        </h1>
                    </motion.div>

                    {/* Quick Stats */}
                    <motion.div
                        className="grid grid-cols-2 gap-3 mb-6"
                        {...staggerContainer}
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        {stats.slice(0, 4).map((stat) => (
                            <motion.div
                                key={stat.label}
                                className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20"
                                variants={staggerItem}
                                {...hoverLift}
                            >
                                <div className={`w-10 h-10 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mb-2`}>
                                    <stat.icon className="w-5 h-5 text-white" />
                                </div>
                                <div className="text-white font-bold text-lg">{stat.number}</div>
                                <div className="text-white/80 text-xs">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        className="space-y-3"
                        {...fadeInRight}
                    >
                        <button
                            onClick={openChat}
                            className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold py-4 rounded-2xl shadow-lg flex items-center justify-center space-x-2"
                        >
                            <Phone className="w-5 h-5" />
                            <span>Consulta Gratuita</span>
                        </button>
                        <Link
                            to="/productos-servicios"
                            className="w-full bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold py-4 rounded-2xl flex items-center justify-center space-x-2 hover:bg-white/20 transition-colors"
                        >
                            <Shield className="w-5 h-5" />
                            <span>Ver Servicios</span>
                        </Link>
                    </motion.div>
                </div>
            </motion.section>

            {/* Services Section - Native Cards */}
            <motion.section
                className="px-4 py-6"
                {...fadeInUp}
            >
                <motion.div
                    className="flex items-center justify-between mb-4"
                    {...fadeInLeft}
                >
                    <h3 className="text-xl font-bold text-gray-900">Nuestros Servicios</h3>
                    <Link
                        to="/productos-servicios"
                        className="text-amber-600 text-sm font-medium flex items-center space-x-1"
                    >
                        <span>Ver todos</span>
                        <ChevronRight className="w-4 h-4" />
                    </Link>
                </motion.div>

                <motion.div
                    className="space-y-3"
                    {...staggerContainer}
                    whileInView="animate"
                    viewport={{ once: true }}
                >
                    {services.map((service) => (
                        <motion.div
                            key={service.title}
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                            variants={staggerItem}
                            {...hoverLift}
                        >
                            <div className="flex items-start space-x-4">
                                <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                                    <service.icon className="w-6 h-6 text-white" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-semibold text-gray-900 mb-1">{service.title}</h4>
                                    <p className="text-gray-600 text-sm mb-2">{service.description}</p>
                                    <div className="flex flex-wrap gap-1">
                                        {service.features.map((feature, idx) => (
                                            <span key={idx} className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                                                <CheckCircle className="w-3 h-3 mr-1 text-green-500" />
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.section>

            {/* Testimonials Section - Native Style */}
            <motion.section
                className="px-4 py-6"
                {...fadeInUp}
            >
                <motion.div
                    className="flex items-center justify-between mb-4"
                    {...fadeInLeft}
                >
                    <h3 className="text-xl font-bold text-gray-900">Testimonios</h3>
                    <div className="flex space-x-1">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTestimonial(index)}
                                className={`w-2 h-2 rounded-full transition-colors ${activeTestimonial === index ? 'bg-amber-500' : 'bg-gray-300'
                                    }`}
                            />
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                    key={activeTestimonial}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    {...hoverLift}
                >
                    <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                            {testimonials[activeTestimonial].avatar}
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                                <h4 className="font-semibold text-gray-900">{testimonials[activeTestimonial].name}</h4>
                                <div className="flex space-x-1">
                                    {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                                    ))}
                                </div>
                            </div>
                            <p className="text-gray-600 text-sm mb-2">{testimonials[activeTestimonial].location}</p>
                            <p className="text-gray-700 text-sm leading-relaxed">"{testimonials[activeTestimonial].text}"</p>
                        </div>
                    </div>
                </motion.div>
            </motion.section>

            {/* Benefits Section - Native Cards */}
            <motion.section
                className="px-4 py-6"
                {...fadeInUp}
            >
                <motion.h3
                    className="text-xl font-bold text-gray-900 mb-4"
                    {...fadeInLeft}
                >
                    ¿Por qué elegirnos?
                </motion.h3>

                <motion.div
                    className="space-y-3"
                    {...staggerContainer}
                    whileInView="animate"
                    viewport={{ once: true }}
                >
                    {[
                        { icon: Shield, title: 'Garantía de Resultados', description: 'Si no cumples con el proceso, te devolvemos tu dinero' },
                        { icon: Users, title: 'Atención Personalizada', description: 'Un asesor dedicado te acompañará en todo el proceso' },
                        { icon: Award, title: 'Experiencia Comprobada', description: 'Más de 500 clientes satisfechos nos respaldan' },
                        { icon: Zap, title: 'Proceso Rápido', description: 'Resultados visibles en 30-90 días' }
                    ].map((benefit) => (
                        <motion.div
                            key={benefit.title}
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                            variants={staggerItem}
                            {...hoverLift}
                        >
                            <div className="flex items-start space-x-4">
                                <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <benefit.icon className="w-5 h-5 text-white" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-semibold text-gray-900 mb-1">{benefit.title}</h4>
                                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.section>

            {/* CTA Section */}
            <motion.section
                className="px-4 py-8"
                {...fadeInUp}
            >
                <motion.div
                    className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl p-6 text-white text-center"
                    {...hoverScale}
                >
                    <h3 className="text-xl font-bold mb-2">¿Listo para transformar tu futuro financiero?</h3>
                    <p className="text-amber-100 text-sm mb-6">Agenda tu consulta gratuita ahora</p>
                    <div className="space-y-3">
                        <button
                            onClick={openChat}
                            className="w-full bg-white text-amber-600 font-semibold py-4 rounded-2xl flex items-center justify-center space-x-2 shadow-lg"
                        >
                            <Phone className="w-5 h-5" />
                            <span>Consulta Gratuita</span>
                        </button>
                        <Link
                            to="/servicio-cliente"
                            className="w-full bg-white/10 border border-white/30 text-white font-semibold py-4 rounded-2xl flex items-center justify-center space-x-2 hover:bg-white/20 transition-colors"
                        >
                            <Mail className="w-5 h-5" />
                            <span>Enviar Email</span>
                        </Link>
                    </div>
                </motion.div>
            </motion.section>

            {/* Mobile Footer */}
            <MobileFooter />
        </motion.div>
    );
};

export default MobileHomeView;