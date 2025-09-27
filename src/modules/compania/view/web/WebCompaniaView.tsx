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
    Globe,
    Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';

const WebCompaniaView = () => {
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



    const milestones = [
        {
            year: '2015',
            title: 'El Inicio de una Visión',
            description: 'Fundamos GMVP Financiera con la convicción de que todos merecen una segunda oportunidad financiera. Nacimos para ser el puente entre las dificultades crediticias y un futuro financiero próspero.',
            icon: Building2
        },
        {
            year: '2016',
            title: 'Desarrollo de Metodologías Especializadas',
            description: 'Desarrollamos estrategias innovadoras y efectivas para ayudar a nuestros clientes a salir de las principales centrales de riesgo: CIFIN-TRANSUNION, DATACREDITO y EXPERIAN.',
            icon: Shield
        },
        {
            year: '2018',
            title: 'Expansión y Diversificación',
            description: 'Ampliamos nuestro portafolio de servicios para atender tanto a personas naturales como jurídicas, ofreciendo soluciones integrales de asesoramiento financiero y facilitación de créditos.',
            icon: Globe
        },
        {
            year: '2020',
            title: 'Innovación en Colocaciones',
            description: 'Implementamos nuestro programa de colocaciones de crédito, ayudando a nuestros clientes a obtener su primer crédito o reactivar su historial crediticio con el respaldo de instituciones financieras confiables.',
            icon: Award
        },
        {
            year: '2025',
            title: 'Liderazgo Consolidado',
            description: 'Hoy somos reconocidos como líderes en asesoramiento financiero en Colombia, con una trayectoria sólida y cientos de casos exitosos que respaldan nuestra experiencia y compromiso.',
            icon: Globe
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
        <div className="min-h-screen">
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
                            <Building2 className="w-5 h-5 mr-2" />
                            Nuestra Historia
                        </motion.div>

                        <motion.h1
                            className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 leading-tight"
                            variants={itemVariants}
                        >
                            Transformando
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
                                Vidas Financieras
                            </span>
                            desde 2015
                        </motion.h1>

                        <motion.p
                            className="text-xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed"
                            variants={itemVariants}
                        >
                            Somos GMVP Financiera, una compañía de asesoramiento financiero para personas naturales y jurídicas,
                            que necesiten asesoramiento o financiamiento en la adquisición de productos financieros,
                            asesorías en reportes de las centrales de riesgos, mejora de score y puntaje,
                            y perfilamiento del historial crediticio.
                        </motion.p>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-6 justify-center"
                            variants={itemVariants}
                        >
                            <Link
                                to="/servicio-cliente"
                                className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg"
                            >
                                Conoce Nuestro Equipo
                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                to="/productos-servicios"
                                className="group inline-flex items-center justify-center px-8 py-4 border-2 border-slate-300 text-slate-700 font-semibold rounded-2xl hover:border-amber-500 hover:text-amber-600 transition-all duration-300 text-lg"
                            >
                                Ver Servicios
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div>
                            <motion.h2
                                className="text-4xl md:text-5xl font-bold text-slate-900 mb-8"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                Nuestra <span className="text-amber-500">Misión</span>
                            </motion.h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Ser GMVP Financiera, una compañía de asesoramiento financiero para personas que estén iniciando vida crediticia,
                                o deseen reiniciar o mejorar su historial crediticio a través de soluciones de fácil acceso.
                            </p>
                            <div className="space-y-4">
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
                                        <CheckCircle className="w-6 h-6 text-green-500" />
                                        <span className="text-gray-700">{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <motion.h2
                                className="text-4xl md:text-5xl font-bold text-slate-900 mb-8"
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                Nuestra <span className="text-amber-500">Visión</span>
                            </motion.h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Lograr el objetivo de crecimiento con clientes leales, productos de calidad y personal satisfecho.
                            </p>
                            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl border border-amber-200">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Actitud de Equipo</h3>
                                <ul className="space-y-3">
                                    {[
                                        'Altamente calificados con gran calidad en el servicio',
                                        'Gran experiencia en el sector financiero',
                                        'Los mejores Asesores Financieros y Abogados',
                                        'Amplio conocimiento en Ley Habeas Data 1266 de 2008'
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-center space-x-3">
                                            <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                            Nuestros <span className="text-amber-500">Valores</span>
                        </h2>
                        <p className="text-xl text-slate-600 max-w-4xl mx-auto">
                            Los principios que guían cada decisión y acción en GMVP Credifinanzas
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                className="text-center group"
                                variants={cardVariants}
                                whileHover="hover"
                            >
                                <motion.div
                                    className={`w-20 h-20 bg-gradient-to-r ${value.color} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <value.icon className="w-10 h-10 text-white" />
                                </motion.div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{value.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>



            {/* Timeline Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                            Nuestra <span className="text-amber-500">Historia</span>
                        </h2>
                        <p className="text-xl text-slate-600">
                            La historia de GMVP Financiera comenzó en 2015 cuando identificamos una necesidad real en el mercado colombiano:
                            la falta de orientación especializada para las personas que enfrentaban dificultades con las centrales de riesgo.
                            Desde entonces, hemos desarrollado estrategias efectivas para ayudar a nuestros clientes a recuperar su
                            salud financiera y acceder a nuevas oportunidades crediticias.
                        </p>
                    </motion.div>

                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-amber-500 to-orange-500"></div>

                        <div className="space-y-12">
                            {milestones.map((milestone, index) => (
                                <motion.div
                                    key={index}
                                    className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: index * 0.2 }}
                                >
                                    {/* Timeline Dot */}
                                    <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center z-10">
                                        <milestone.icon className="w-4 h-4 text-white" />
                                    </div>

                                    {/* Content */}
                                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                                        <div className="card p-8">
                                            <div className="text-amber-600 font-bold text-lg mb-2">{milestone.year}</div>
                                            <h3 className="text-xl font-bold text-slate-900 mb-4">{milestone.title}</h3>
                                            <p className="text-slate-600 leading-relaxed">{milestone.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
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
                            ¿Tienes
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                                Preguntas?
                            </span>
                        </h2>

                        <p className="text-xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                            En GMVP Financiera contamos con los mejores Asesores Financieros y Abogados, con un amplio portafolio de servicios,
                            para cada persona que necesite productos financieros y asesoramiento especializado.
                        </p>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-6 justify-center"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            <Link
                                to="/servicio-cliente"
                                className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg"
                            >
                                <Zap className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                                Contáctanos Ahora
                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                to="/productos-servicios"
                                className="group inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-2xl hover:border-amber-500 hover:bg-white/10 transition-all duration-300 text-lg backdrop-blur-sm"
                            >
                                Nuestros Servicios
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

export default WebCompaniaView;