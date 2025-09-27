import { Shield, CreditCard, TrendingUp, Users, CheckCircle, ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const MobileServiceView = () => {
    const services = [
        {
            icon: Shield,
            title: 'Asesorías Financieras',
            description: 'Realizamos asesoramiento para personas mal reportadas en CIFIN-TRANSUNION, DATACREDITO-EXPERIAN, evaluamos toda la información y le ofrecemos las mejores alternativas, poder volver a tener historial y mejoramiento de su puntaje, para acceder al sistema financiero.',
            features: [
                'Evaluación completa de tu historial crediticio',
                'Estrategias personalizadas para mejorar tu puntaje',
                'Asesoría para salir de centrales de riesgo',
                'Seguimiento continuo de tu progreso'
            ],
            action: 'Pide una cotización',
            link: '/servicio-cliente'
        },
        {
            icon: CreditCard,
            title: 'Seguros',
            description: 'Financiamos seguros de personas naturales, vida, deudores, SOAT.',
            features: [
                'Seguros de vida',
                'Seguros de deudores',
                'SOAT',
                'Seguros para personas naturales'
            ],
            action: 'Chatea con nosotros',
            link: '/servicio-cliente'
        },
        {
            icon: TrendingUp,
            title: 'Compra de Cartera',
            description: 'Compramos carteras de entidades del sector financiero, cooperativo, real, telecomunicaciones, analizadas por nuestro departamento de riesgos crediticios, para su viabilidad y posterior saneamiento.',
            features: [
                'Análisis de viabilidad crediticia',
                'Evaluación por departamento de riesgos',
                'Saneamiento posterior',
                'Entidades del sector financiero, cooperativo, real, telecomunicaciones'
            ],
            action: 'Chatea con nosotros',
            link: '/servicio-cliente'
        },
        {
            icon: Users,
            title: 'Crédito Rotativo',
            description: 'Es un cupo rotativo para personas que estén iniciando vida crediticia en el sistema financiero, o volver a tener buen historial cuando haya perdido vigencia por malos reportes.',
            features: [
                'Cupo rotativo disponible',
                'Para personas iniciando vida crediticia',
                'Reactivación de historial crediticio',
                'Flexibilidad en pagos'
            ],
            action: 'Chatea con nosotros',
            link: '/servicio-cliente'
        }
    ];

    const benefits = [
        'Servicios garantizados según tu reporte',
        'Atención personalizada 24/7',
        'Resultados comprobables',
        'Asesoría especializada',
        'Seguimiento continuo',
        'Transparencia total'
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative py-12 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold mb-4">
                            Productos y Servicios
                        </h1>
                        <p className="text-base text-blue-100">
                            Soluciones financieras integrales diseñadas para ayudarte a mejorar tu historial crediticio
                            y acceder a mejores oportunidades en el sistema financiero.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            Nuestros Servicios
                        </h2>
                        <p className="text-base text-gray-600">
                            Cada servicio está diseñado para brindarte soluciones reales y efectivas
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        {services.map((service, index) => (
                            <div key={index} className="service-card glass rounded-2xl p-6 hover:shadow-xl">
                                <div className="flex items-start space-x-3 mb-4">
                                    <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <service.icon className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                                            {service.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <h4 className="text-base font-semibold text-gray-900 mb-2">Características:</h4>
                                    <ul className="space-y-1">
                                        {service.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-center text-gray-600">
                                                <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                                                <span className="text-xs">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <Link
                                    to={service.link}
                                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-sm"
                                >
                                    {service.action}
                                    <ArrowRight className="ml-1 w-3 h-3" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-12 bg-gradient-to-br from-blue-50 to-indigo-100">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            ¿Por qué elegirnos?
                        </h2>
                        <p className="text-base text-gray-600">
                            Trabajamos con transparencia y compromiso para brindarte los mejores resultados
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="glass rounded-2xl p-4 text-center">
                                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <CheckCircle className="w-5 h-5 text-white" />
                                </div>
                                <h3 className="text-base font-semibold text-gray-900">
                                    {benefit}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            Nuestro Proceso
                        </h2>
                        <p className="text-base text-gray-600">
                            Te acompañamos en cada paso para garantizar tu éxito
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="text-center">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                                <span className="text-white font-bold text-lg">1</span>
                            </div>
                            <h3 className="text-base font-semibold text-gray-900 mb-1">Consulta</h3>
                            <p className="text-sm text-gray-600">Evaluamos tu situación actual y necesidades</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                                <span className="text-white font-bold text-lg">2</span>
                            </div>
                            <h3 className="text-base font-semibold text-gray-900 mb-1">Análisis</h3>
                            <p className="text-sm text-gray-600">Estudiamos tu historial y diseñamos una estrategia</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                                <span className="text-white font-bold text-lg">3</span>
                            </div>
                            <h3 className="text-base font-semibold text-gray-900 mb-1">Implementación</h3>
                            <p className="text-sm text-gray-600">Ejecutamos el plan diseñado para ti</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                                <span className="text-white font-bold text-lg">4</span>
                            </div>
                            <h3 className="text-base font-semibold text-gray-900 mb-1">Seguimiento</h3>
                            <p className="text-sm text-gray-600">Monitoreamos tu progreso y ajustamos si es necesario</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 bg-gradient-to-r from-blue-600 to-purple-600">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-2xl font-bold text-white mb-4">
                        ¿Listo para mejorar tu situación financiera?
                    </h2>
                    <p className="text-base text-blue-100 mb-6">
                        Contáctanos hoy mismo y descubre cómo podemos ayudarte
                    </p>
                    <div className="flex flex-col gap-3">
                        <Link
                            to="/servicio-cliente"
                            className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
                        >
                            <MessageCircle className="mr-2 w-4 h-4" />
                            Chatea con nosotros
                        </Link>
                        <Link
                            to="/nuestra-compania"
                            className="inline-flex items-center justify-center px-6 py-3 glass text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
                        >
                            Conoce más sobre nosotros
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MobileServiceView;
