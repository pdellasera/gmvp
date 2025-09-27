import { motion } from 'framer-motion';
import {
    Shield,
    FileText,
    Phone,
    MessageCircle,
    ArrowRight,
    CheckCircle,
    Clock,
    Scale,
    Database,
    Lock,
    ChevronDown
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import MobileFooter from '../../../../components/MobileFooter';

const MobilePoliticaView = () => {
    const [expandedPolicy, setExpandedPolicy] = useState<number | null>(null);

    const policies = [
        {
            id: 1,
            icon: Clock,
            title: 'Política de Cobranza',
            description: 'Nuestra política se basa en los requerimientos, después de treinta días de calendario, cobro persuasivo, sesenta días calendario prejurídico, noventa días calendario envío a cobro judicial.',
            color: 'from-amber-500 to-orange-500',
            gradient: 'bg-gradient-to-br from-amber-50 to-orange-50',
            phases: [
                { days: '30 días', stage: 'Cobro persuasivo', description: 'Contacto inicial para recordar el pago' },
                { days: '60 días', stage: 'Prejurídico', description: 'Notificación formal de incumplimiento' },
                { days: '90 días', stage: 'Cobro judicial', description: 'Proceso legal de recuperación' }
            ]
        },
        {
            id: 2,
            icon: Database,
            title: 'Política de Manejo de Datos Personales',
            description: 'Nuestra política de manejo de datos personales es de acuerdo a lo establecido en la ley 1581 2012.',
            color: 'from-blue-500 to-indigo-500',
            gradient: 'bg-gradient-to-br from-blue-50 to-indigo-50',
            compliance: [
                'Cumplimiento total con la Ley 1581 de 2012',
                'Protección de datos personales',
                'Transparencia en el tratamiento de información',
                'Derechos del titular de los datos'
            ]
        },
        {
            id: 3,
            icon: Shield,
            title: 'Política de Gestión de Riesgo',
            description: 'Manejamos gestión de riesgo, minimizando los riesgos de la colocación del crédito, facilitando tanto a la persona que requiere la financiación, nuestros niveles de política en colocación.',
            color: 'from-green-500 to-emerald-500',
            gradient: 'bg-gradient-to-br from-green-50 to-emerald-50',
            measures: [
                'Análisis exhaustivo de capacidad de pago',
                'Evaluación de historial crediticio',
                'Estructuración de productos financieros seguros',
                'Monitoreo continuo de cartera'
            ]
        }
    ];

    const togglePolicy = (policyId: number) => {
        setExpandedPolicy(expandedPolicy === policyId ? null : policyId);
    };

    return (
        <div className="min-h-screen bg-white text-slate-900">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-slate-50 via-white to-amber-50 py-16 text-slate-900 overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F59E0B' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}></div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                    <motion.h1
                        className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight"
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-amber-500">Políticas</span> Corporativas
                    </motion.h1>
                    <motion.p
                        className="text-lg text-slate-600 mb-6"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        Marco legal para brindar información clara y completa
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6, duration: 0.8, type: "spring", stiffness: 100 }}
                        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-50 to-orange-50 text-amber-600 border border-amber-200 rounded-full text-sm font-medium"
                    >
                        <Shield className="w-4 h-4 mr-2" />
                        Confiabilidad Garantizada
                    </motion.div>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-12 bg-gradient-to-br from-slate-50 via-white to-amber-50">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                            ¿En qué consisten las políticas de nuestra compañía?
                        </h2>
                        <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-6">
                            Las políticas corporativas establecen el marco legal para brindar una información clara y completa a nuestros clientes, de esta forma aseguramos, la confiabilidad y el respaldo de nuestro equipo de trabajo de cara al cliente.
                        </p>
                        <motion.div
                            className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mx-auto"
                            initial={{ width: 0 }}
                            whileInView={{ width: 64 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        />
                    </motion.div>
                </div>
            </section>

            {/* Policies Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl font-bold text-slate-900 mb-3">
                            Nuestras <span className="text-amber-500">Políticas</span>
                        </h2>
                        <p className="text-lg text-slate-600">
                            Comprometidos con la transparencia y el cumplimiento legal
                        </p>
                    </motion.div>

                    <div className="space-y-6">
                        {policies.map((policy, index) => (
                            <motion.div
                                key={policy.id}
                                className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                            >
                                {/* Policy Header - Always Visible */}
                                <motion.button
                                    className="w-full p-6 text-left flex items-center justify-between"
                                    onClick={() => togglePolicy(policy.id)}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <div className="flex items-center space-x-4">
                                        <motion.div
                                            className={`w-12 h-12 bg-gradient-to-r ${policy.color} rounded-xl flex items-center justify-center shadow-lg`}
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <policy.icon className="w-6 h-6 text-white" />
                                        </motion.div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900 mb-1">
                                                {policy.title}
                                            </h3>
                                            <p className="text-sm text-slate-600 line-clamp-2">
                                                {policy.description}
                                            </p>
                                        </div>
                                    </div>
                                    <motion.div
                                        animate={{ rotate: expandedPolicy === policy.id ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <ChevronDown className="w-6 h-6 text-slate-400" />
                                    </motion.div>
                                </motion.button>

                                {/* Policy Content - Expandable */}
                                <motion.div
                                    initial={false}
                                    animate={{
                                        height: expandedPolicy === policy.id ? "auto" : 0,
                                        opacity: expandedPolicy === policy.id ? 1 : 0
                                    }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="overflow-hidden"
                                >
                                    <div className="px-6 pb-6 border-t border-slate-100">
                                        <div className="pt-4 space-y-4">
                                            {/* Content based on policy type */}
                                            {policy.id === 1 && policy.phases && (
                                                <div className="space-y-3">
                                                    <h4 className="font-semibold text-slate-900 mb-3">Fases del Proceso:</h4>
                                                    {policy.phases.map((phase, phaseIndex) => (
                                                        <motion.div
                                                            key={phaseIndex}
                                                            className={`${policy.gradient} p-4 rounded-xl border border-amber-200`}
                                                            initial={{ opacity: 0, x: -20 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: phaseIndex * 0.1 }}
                                                        >
                                                            <div className="flex items-center justify-between mb-2">
                                                                <span className="font-bold text-amber-700">{phase.days}</span>
                                                                <span className="text-sm font-medium text-amber-600">{phase.stage}</span>
                                                            </div>
                                                            <p className="text-sm text-slate-700">{phase.description}</p>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            )}

                                            {policy.id === 2 && policy.compliance && (
                                                <div className="space-y-3">
                                                    <h4 className="font-semibold text-slate-900 mb-3">Cumplimiento Legal:</h4>
                                                    {policy.compliance.map((item, itemIndex) => (
                                                        <motion.div
                                                            key={itemIndex}
                                                            className="flex items-start space-x-3"
                                                            initial={{ opacity: 0, x: -20 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: itemIndex * 0.1 }}
                                                        >
                                                            <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                                            <span className="text-slate-700">{item}</span>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            )}

                                            {policy.id === 3 && policy.measures && (
                                                <div className="space-y-3">
                                                    <h4 className="font-semibold text-slate-900 mb-3">Medidas de Control:</h4>
                                                    {policy.measures.map((measure, measureIndex) => (
                                                        <motion.div
                                                            key={measureIndex}
                                                            className="flex items-start space-x-3"
                                                            initial={{ opacity: 0, x: -20 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: measureIndex * 0.1 }}
                                                        >
                                                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                                            <span className="text-slate-700">{measure}</span>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Legal Compliance Section */}
            <section className="py-16 bg-gradient-to-br from-slate-50 via-white to-amber-50">
                <div className="max-w-6xl mx-auto px-4">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">
                            Cumplimiento <span className="text-amber-500">Legal</span>
                        </h2>
                        <p className="text-lg text-slate-600">
                            Nuestro compromiso con la transparencia y el cumplimiento de todas las normativas vigentes
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { icon: Scale, title: 'Ley 1581 de 2012', description: 'Protección de datos personales' },
                            { icon: FileText, title: 'Superintendencia Financiera', description: 'Regulación del sector financiero' },
                            { icon: Shield, title: 'Normas de Riesgo', description: 'Gestión integral de riesgos' },
                            { icon: Lock, title: 'Seguridad de la Información', description: 'Protección de datos sensibles' }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="text-center group h-full"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <div className="bg-white p-4 rounded-xl shadow-lg border border-slate-200 group-hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                                    <motion.div
                                        className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-3 shadow-lg"
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <item.icon className="w-5 h-5 text-white" />
                                    </motion.div>
                                    <h3 className="font-bold text-slate-900 mb-1 text-sm leading-tight">{item.title}</h3>
                                    <p className="text-xs text-slate-600 flex-grow">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                            ¿Tienes más preguntas?
                        </h2>
                        <p className="text-lg text-slate-600 mb-8">
                            Nuestro equipo está disponible para resolver cualquier consulta sobre nuestras políticas
                        </p>

                        <div className="space-y-4">
                            <motion.a
                                href="tel:+573186401900"
                                className="group inline-flex items-center justify-center w-full px-6 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Phone className="w-5 h-5 mr-3 group-hover:animate-pulse" />
                                (+57) 318 640 1900
                            </motion.a>

                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Link
                                    to="/servicio-cliente"
                                    className="group inline-flex items-center justify-center w-full px-6 py-4 border-2 border-amber-500 text-amber-600 font-bold rounded-2xl hover:bg-amber-500 hover:text-white transition-all duration-300"
                                >
                                    <MessageCircle className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                                    Contáctanos
                                    <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Additional Policies Footer */}
            <section className="py-12 bg-slate-900 text-white">
                <div className="max-w-6xl mx-auto px-4">
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-slate-300 mb-4">Políticas Adicionales</p>
                        <div className="space-y-2 text-sm">
                            <a href="#" className="block text-amber-400 hover:text-amber-300 transition-colors duration-300">Política de privacidad</a>
                            <a href="#" className="block text-amber-400 hover:text-amber-300 transition-colors duration-300">Política de Cookies</a>
                            <a href="#" className="block text-amber-400 hover:text-amber-300 transition-colors duration-300">Aviso Legal</a>
                        </div>
                        <div className="mt-8 pt-6 border-t border-slate-700">
                            <p className="text-slate-400 text-sm">
                                Copyright © 2025 GMVP Credifinanzas S.A.S
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Mobile Footer */}
            <MobileFooter />
        </div>
    );
};

export default MobilePoliticaView;
