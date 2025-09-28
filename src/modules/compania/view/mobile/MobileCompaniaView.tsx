import { motion } from 'framer-motion';
import {
    Award,
    Target,
    Shield,
    Star,
    CheckCircle,
    ArrowRight,
    Building2,
    Heart,
    Zap,
    Users,
    TrendingUp
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useChat } from '../../../../contexts/ChatContext';

const MobileCompaniaView = () => {
    const { openChat } = useChat();

    const values = [
        {
            icon: Heart,
            title: 'Pasión por el Cliente',
            description: 'Nuestro compromiso total, respeto por los clientes, con una gran calidez humana, vocación de servicio para todos y público en general.',
            color: 'from-red-500 to-red-600'
        },
        {
            icon: Shield,
            title: 'Compromiso',
            description: 'Comprometidos desde el inicio hasta el final de nuestro servicio, para nuestros clientes, nuestra mayor prioridad en el ejercicio de nuestras labores.',
            color: 'from-blue-500 to-blue-600'
        },
        {
            icon: Zap,
            title: 'Innovación',
            description: 'Innovamos todos los días para estar a la vanguardia, así mismo acercar a nuestros clientes con la innovación diaria.',
            color: 'from-purple-500 to-purple-600'
        },
        {
            icon: Award,
            title: 'Confianza',
            description: 'Tenemos confianza en lo que realizamos, es nuestra mayor fortaleza, donde nuestros clientes confían, demostramos seriedad, claridad, prontitud, en lo que ofrecemos.',
            color: 'from-green-500 to-green-600'
        },
        {
            icon: Target,
            title: 'Agilidad',
            description: 'Nuestros procesos de agilidad, son encaminados a solucionar los inconvenientes de nuestros clientes, los procesos son ágiles, a la mayor brevedad posible, con alta calidad en el servicio.',
            color: 'from-orange-500 to-orange-600'
        }
    ];

    const achievements = [
        {
            number: '500+',
            label: 'Clientes Atendidos',
            icon: Users,
            color: 'from-blue-500 to-blue-600'
        },
        {
            number: '95%',
            label: 'Tasa de Éxito',
            icon: Target,
            color: 'from-green-500 to-green-600'
        },
        {
            number: '5+',
            label: 'Años de Experiencia',
            icon: Star,
            color: 'from-purple-500 to-purple-600'
        },
        {
            number: '170+',
            label: 'Puntos Promedio',
            icon: TrendingUp,
            color: 'from-orange-500 to-orange-600'
        }
    ];

    const milestones = [
        {
            year: '2015',
            title: 'Fundación de GMVP Financiera',
            description: 'Iniciamos con la visión de ayudar a los colombianos a mejorar su historial crediticio mediante estrategias personalizadas y transparentes.',
            icon: Building2
        },
        {
            year: '2017',
            title: 'Primeros 100 Clientes',
            description: 'Alcanzamos nuestros primeros 100 clientes exitosos con mejoras significativas en sus puntajes crediticios.',
            icon: Users
        },
        {
            year: '2019',
            title: 'Expansión de Servicios',
            description: 'Ampliamos nuestros servicios incluyendo seguros, compra de cartera y crédito rotativo.',
            icon: Shield
        },
        {
            year: '2021',
            title: 'Reconocimiento Nacional',
            description: 'Recibimos reconocimiento como una de las empresas más innovadoras en soluciones financieras.',
            icon: Award
        },
        {
            year: '2023',
            title: '500+ Clientes Atendidos',
            description: 'Superamos los 500 clientes atendidos con una tasa de éxito del 95% y más de 170 puntos de mejora promedio.',
            icon: Star
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
                            <Building2 className="w-4 h-4 mr-2" />
                            Nuestra Historia
                        </motion.div>

                        <motion.h1
                            className="text-4xl font-bold text-white mb-6 leading-tight"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                        >
                            Transformando
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                                Vidas Financieras
                            </span>
                            desde 2015
                        </motion.h1>

                        <motion.p
                            className="text-lg text-white/90 mb-8 leading-relaxed"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            Somos GMVP Financiera, una empresa colombiana especializada en soluciones financieras
                            que ha ayudado a más de 500 personas a mejorar su historial crediticio.
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
                                to="/mobile/productos-servicios"
                                className="w-full bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold py-4 px-8 rounded-2xl flex items-center justify-center space-x-2 hover:bg-white/20 transition-colors"
                            >
                                <span>Ver Servicios</span>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Mission & Vision - Mobile Native */}
            <section className="py-12 px-6 bg-white">
                <div className="max-w-sm mx-auto space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Nuestra Misión</h2>
                        <p className="text-base text-gray-600 mb-4 leading-relaxed">
                            Ayudar a los colombianos a mejorar su historial crediticio mediante estrategias
                            personalizadas, transparentes y efectivas.
                        </p>
                        <div className="space-y-3">
                            {[
                                'Estrategias personalizadas para cada caso',
                                'Transparencia total en nuestros procesos',
                                'Resultados comprobables y medibles',
                                'Compromiso con el éxito de nuestros clientes'
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-center space-x-3"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.6 }}
                                >
                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                    <span className="text-sm text-gray-700">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Nuestra Visión</h2>
                        <p className="text-base text-gray-600 mb-4 leading-relaxed">
                            Ser la empresa líder en soluciones financieras de Colombia, reconocida por
                            nuestra innovación, transparencia y resultados excepcionales.
                        </p>
                        <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-4 rounded-xl border border-amber-200">
                            <h3 className="text-lg font-bold text-gray-900 mb-3">¿Por qué elegirnos?</h3>
                            <ul className="space-y-2">
                                {[
                                    'Más de 5 años de experiencia',
                                    '500+ clientes satisfechos',
                                    '95% de tasa de éxito',
                                    'Equipo de expertos certificados'
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center space-x-3">
                                        <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                                        <span className="text-sm text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Values Section - Mobile Native */}
            <section className="py-12 px-6 bg-gradient-to-br from-gray-50 to-gray-100">
                <div className="max-w-sm mx-auto">
                    <motion.div
                        className="text-center mb-8"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Nuestros Valores</h2>
                        <p className="text-base text-gray-600">
                            Los principios que guían cada decisión y acción
                        </p>
                    </motion.div>

                    <div className="space-y-4">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="flex items-start space-x-4">
                                    <motion.div
                                        className={`w-12 h-12 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center flex-shrink-0`}
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <value.icon className="w-6 h-6 text-white" />
                                    </motion.div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                                        <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Achievements Section - Mobile Native */}
            <section className="py-12 px-6 bg-white">
                <div className="max-w-sm mx-auto">
                    <motion.div
                        className="text-center mb-8"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Nuestros Logros</h2>
                        <p className="text-base text-gray-600">
                            Cifras que respaldan nuestra experiencia
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 gap-4">
                        {achievements.map((achievement, index) => (
                            <motion.div
                                key={index}
                                className="bg-white rounded-2xl p-4 text-center shadow-lg border border-gray-100"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <motion.div
                                    className={`w-12 h-12 bg-gradient-to-r ${achievement.color} rounded-xl flex items-center justify-center mx-auto mb-3`}
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <achievement.icon className="w-6 h-6 text-white" />
                                </motion.div>
                                <div className="text-2xl font-bold text-gray-900 mb-1">{achievement.number}</div>
                                <div className="text-xs text-gray-600">{achievement.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline Section - Mobile Native */}
            <section className="py-12 px-6 bg-gradient-to-br from-slate-50 to-amber-50">
                <div className="max-w-sm mx-auto">
                    <motion.div
                        className="text-center mb-8"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Nuestra Historia</h2>
                        <p className="text-base text-gray-600">
                            Los hitos que han marcado nuestro crecimiento
                        </p>
                    </motion.div>

                    <div className="space-y-6">
                        {milestones.map((milestone, index) => (
                            <motion.div
                                key={index}
                                className="relative"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-4 top-6 w-8 h-8 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center z-10">
                                    <milestone.icon className="w-4 h-4 text-white" />
                                </div>

                                {/* Timeline Line */}
                                {index < milestones.length - 1 && (
                                    <div className="absolute left-7 top-14 w-1 h-16 bg-gradient-to-b from-amber-500 to-orange-500"></div>
                                )}

                                {/* Content */}
                                <div className="ml-16">
                                    <div className="bg-white rounded-2xl p-5 shadow-lg border border-gray-100">
                                        <div className="text-amber-600 font-bold text-sm mb-2">{milestone.year}</div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">{milestone.title}</h3>
                                        <p className="text-sm text-gray-600 leading-relaxed">{milestone.description}</p>
                                    </div>
                                </div>
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
                            ¿Listo para ser parte de nuestra historia?
                        </h2>
                        <p className="text-base text-white/90 mb-6">
                            Únete a los más de 500 colombianos que han transformado su vida financiera
                        </p>
                        <div className="space-y-3">
                            <button
                                onClick={openChat}
                                className="w-full bg-white text-amber-600 font-semibold py-4 px-8 rounded-2xl shadow-lg flex items-center justify-center space-x-2 hover:bg-gray-50 transition-colors"
                            >
                                <Zap className="w-5 h-5" />
                                <span>Comienza Ahora</span>
                                <ArrowRight className="w-5 h-5" />
                            </button>
                            <Link
                                to="/mobile/productos-servicios"
                                className="w-full border-2 border-white text-white font-semibold py-4 px-8 rounded-2xl flex items-center justify-center space-x-2 hover:bg-white hover:text-amber-600 transition-colors"
                            >
                                <span>Ver Servicios</span>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default MobileCompaniaView;