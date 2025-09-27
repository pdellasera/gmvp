import { motion } from 'framer-motion';
import {
    Users,
    Award,
    Target,
    Shield,
    TrendingUp,
    Star,
    CheckCircle,
    ArrowRight,
    Building2,
    Heart,
    Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';

const MobileCompaniaView = () => {
    const values = [
        {
            icon: Shield,
            title: 'Transparencia',
            description: 'Trabajamos con total transparencia en todos nuestros procesos.',
            color: 'from-blue-500 to-blue-600'
        },
        {
            icon: Target,
            title: 'Resultados',
            description: 'Nos enfocamos en lograr resultados reales y medibles.',
            color: 'from-green-500 to-green-600'
        },
        {
            icon: Heart,
            title: 'Compromiso',
            description: 'Estamos comprometidos con el éxito de nuestros clientes.',
            color: 'from-red-500 to-red-600'
        },
        {
            icon: Award,
            title: 'Excelencia',
            description: 'Buscamos la excelencia en cada servicio que brindamos.',
            color: 'from-purple-500 to-purple-600'
        }
    ];

    const team = [
        {
            name: 'María González',
            role: 'CEO & Fundadora',
            experience: '15+ años en finanzas',
            specialty: 'Estrategias crediticias',
            avatar: 'MG'
        },
        {
            name: 'Carlos Rodríguez',
            role: 'Director Financiero',
            experience: '12+ años experiencia',
            specialty: 'Análisis de cartera',
            avatar: 'CR'
        },
        {
            name: 'Ana Martínez',
            role: 'Asesora Senior',
            experience: '10+ años experiencia',
            specialty: 'Reactivación crediticia',
            avatar: 'AM'
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
            year: '2019',
            title: 'Fundación de GMVP Credifinanzas',
            description: 'Iniciamos con la visión de ayudar a los colombianos a mejorar su historial crediticio.',
            icon: Building2
        },
        {
            year: '2020',
            title: 'Primeros 100 Clientes',
            description: 'Alcanzamos nuestros primeros 100 clientes exitosos con mejoras significativas.',
            icon: Users
        },
        {
            year: '2022',
            title: 'Expansión de Servicios',
            description: 'Ampliamos nuestros servicios incluyendo seguros y compra de cartera.',
            icon: Shield
        },
        {
            year: '2024',
            title: '500+ Clientes Atendidos',
            description: 'Superamos los 500 clientes atendidos con una tasa de éxito del 95%.',
            icon: Award
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
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    const cardVariants = {
        hidden: { scale: 0.95, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1
        },
        hover: {
            scale: 1.02
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-amber-50">
            {/* Hero Section - Mobile */}
            <section className="relative py-16 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
                <div className="absolute top-20 left-4 w-32 h-32 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
                <div className="absolute bottom-20 right-4 w-40 h-40 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>

                <div className="relative z-10 max-w-sm mx-auto text-center">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div
                            className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-xs font-medium mb-6 border border-white/20"
                            variants={itemVariants}
                        >
                            <Building2 className="w-3 h-3 mr-1" />
                            Nuestra Historia
                        </motion.div>

                        <motion.h1
                            className="text-3xl font-bold text-white mb-6 leading-tight"
                            variants={itemVariants}
                        >
                            Transformando
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                                Vidas Financieras
                            </span>
                            desde 2019
                        </motion.h1>

                        <motion.p
                            className="text-base text-white/90 mb-8 leading-relaxed"
                            variants={itemVariants}
                        >
                            Somos GMVP Credifinanzas, una empresa colombiana especializada en soluciones financieras
                            que ha ayudado a más de 500 personas a mejorar su historial crediticio.
                        </motion.p>

                        <motion.div
                            className="space-y-3"
                            variants={itemVariants}
                        >
                            <Link to="/servicio-cliente" className="btn btn-primary w-full text-lg py-4">
                                Conoce Nuestro Equipo
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link to="/productos-servicios" className="btn btn-secondary w-full text-lg py-4 bg-white/10 border-white/30 text-white hover:bg-white hover:text-gray-900">
                                Ver Servicios
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Mission & Vision - Mobile */}
            <section className="py-12 px-4 bg-white">
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

            {/* Values Section - Mobile */}
            <section className="py-12 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
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

                    <motion.div
                        className="space-y-4"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                className="card p-5"
                                variants={cardVariants}
                                whileHover="hover"
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
                    </motion.div>
                </div>
            </section>

            {/* Achievements Section - Mobile */}
            <section className="py-12 px-4 bg-white">
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

                    <motion.div
                        className="grid grid-cols-2 gap-4"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {achievements.map((achievement, index) => (
                            <motion.div
                                key={index}
                                className="card p-4 text-center"
                                variants={cardVariants}
                                whileHover="hover"
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
                    </motion.div>
                </div>
            </section>

            {/* Team Section - Mobile */}
            <section className="py-12 px-4 bg-gradient-to-br from-slate-50 to-amber-50">
                <div className="max-w-sm mx-auto">
                    <motion.div
                        className="text-center mb-8"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Nuestro Equipo</h2>
                        <p className="text-base text-gray-600">
                            Profesionales expertos en finanzas
                        </p>
                    </motion.div>

                    <motion.div
                        className="space-y-4"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {team.map((member, index) => (
                            <motion.div
                                key={index}
                                className="card p-5"
                                variants={cardVariants}
                                whileHover="hover"
                            >
                                <div className="flex items-center space-x-4">
                                    <motion.div
                                        className="w-14 h-14 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {member.avatar}
                                    </motion.div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                                        <p className="text-amber-600 font-semibold text-sm">{member.role}</p>
                                        <p className="text-gray-600 text-xs">{member.experience}</p>
                                        <p className="text-gray-500 text-xs">{member.specialty}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Timeline Section - Mobile */}
            <section className="py-12 px-4 bg-white">
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
                                    <div className="card p-5">
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

            {/* CTA Section - Mobile */}
            <section className="py-12 px-4 bg-gradient-to-r from-amber-500 to-orange-500 relative overflow-hidden">
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
                            <Link to="/servicio-cliente" className="btn bg-white text-amber-600 hover:bg-gray-50 w-full text-lg py-4">
                                <Zap className="w-5 h-5" />
                                Comienza Ahora
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link to="/productos-servicios" className="btn border-2 border-white text-white hover:bg-white hover:text-amber-600 w-full text-lg py-4">
                                Ver Servicios
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default MobileCompaniaView;