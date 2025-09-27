import { motion } from 'framer-motion';
import {
    Phone,
    Mail,
    MapPin,
    MessageCircle,
    Send,
    CheckCircle,
    FileText,
    ArrowRight,
    Facebook,
    Twitter,
    Linkedin
} from 'lucide-react';
import { useState } from 'react';
import MobileFooter from '../../../../components/MobileFooter';

const MobileCustomerServiceView = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        apellidos: '',
        email: '',
        telefono: '',
        celular: '',
        ciudad: '',
        departamento: '',
        comentario: '',
        aceptaPoliticas: false
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simular envío del formulario
        await new Promise(resolve => setTimeout(resolve, 2000));

        setIsSubmitting(false);
        setIsSubmitted(true);

        // Reset form after 3 seconds
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
                nombre: '',
                apellidos: '',
                email: '',
                telefono: '',
                celular: '',
                ciudad: '',
                departamento: '',
                comentario: '',
                aceptaPoliticas: false
            });
        }, 3000);
    };

    const contactInfo = [
        {
            icon: Phone,
            title: 'Teléfono',
            value: '(57) 318 640 1900',
            description: 'Lunes a Viernes 8:00 AM - 6:00 PM'
        },
        {
            icon: Mail,
            title: 'Correo Electrónico',
            value: 'info@gmvpcredifinanzas.com',
            description: 'Respuesta en 24 horas'
        },
        {
            icon: MessageCircle,
            title: 'Servicio al Cliente',
            value: 'servicioalcliente@gmvpcredifinanzas.com',
            description: 'Atención especializada'
        },
        {
            icon: FileText,
            title: 'Notificaciones Judiciales',
            value: 'notificacionesjudiciales@gmvpcredifinanzas.com',
            description: 'Asuntos legales'
        }
    ];

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
                        <span className="text-amber-500">Contáctanos</span>
                    </motion.h1>
                    <motion.p
                        className="text-lg text-slate-600 mb-6"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        Estamos aquí para ayudarte con todas tus necesidades financieras
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6, duration: 0.8, type: "spring", stiffness: 100 }}
                        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-50 to-orange-50 text-amber-600 border border-amber-200 rounded-full text-sm font-medium"
                    >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Servicio al Cliente 24/7
                    </motion.div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-12 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200 mb-8">
                            <div className="mb-6">
                                <h2 className="text-2xl font-bold text-slate-900 mb-3">Envíanos un Mensaje</h2>
                                <p className="text-slate-600 text-sm">
                                    Completa el formulario y nos pondremos en contacto contigo lo antes posible.
                                </p>
                            </div>

                            {isSubmitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-8"
                                >
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                                        className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4"
                                    >
                                        <CheckCircle className="w-6 h-6 text-white" />
                                    </motion.div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">¡Mensaje Enviado!</h3>
                                    <p className="text-slate-600 text-sm">
                                        Hemos recibido tu mensaje. Nos pondremos en contacto contigo pronto.
                                    </p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    {/* Nombre */}
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-900 mb-2">
                                            Nombre *
                                        </label>
                                        <input
                                            type="text"
                                            name="nombre"
                                            value={formData.nombre}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                                            placeholder="Tu nombre"
                                        />
                                    </div>

                                    {/* Apellidos */}
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-900 mb-2">
                                            Apellidos
                                        </label>
                                        <input
                                            type="text"
                                            name="apellidos"
                                            value={formData.apellidos}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                                            placeholder="Tus apellidos"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-900 mb-2">
                                            Correo Electrónico *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                                            placeholder="tu@email.com"
                                        />
                                    </div>

                                    {/* Teléfono */}
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-900 mb-2">
                                            Teléfono
                                        </label>
                                        <input
                                            type="tel"
                                            name="telefono"
                                            value={formData.telefono}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                                            placeholder="Tu teléfono fijo"
                                        />
                                    </div>

                                    {/* Celular */}
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-900 mb-2">
                                            Celular
                                        </label>
                                        <input
                                            type="tel"
                                            name="celular"
                                            value={formData.celular}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                                            placeholder="Tu número celular"
                                        />
                                    </div>

                                    {/* Ciudad */}
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-900 mb-2">
                                            Ciudad
                                        </label>
                                        <input
                                            type="text"
                                            name="ciudad"
                                            value={formData.ciudad}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                                            placeholder="Tu ciudad"
                                        />
                                    </div>

                                    {/* Departamento */}
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-900 mb-2">
                                            Departamento
                                        </label>
                                        <select
                                            name="departamento"
                                            value={formData.departamento}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                                        >
                                            <option value="">Selecciona tu departamento</option>
                                            <option value="Antioquia">Antioquia</option>
                                            <option value="Atlántico">Atlántico</option>
                                            <option value="Bogotá">Bogotá D.C.</option>
                                            <option value="Bolívar">Bolívar</option>
                                            <option value="Boyacá">Boyacá</option>
                                            <option value="Caldas">Caldas</option>
                                            <option value="Caquetá">Caquetá</option>
                                            <option value="Cauca">Cauca</option>
                                            <option value="Cesar">Cesar</option>
                                            <option value="Córdoba">Córdoba</option>
                                            <option value="Cundinamarca">Cundinamarca</option>
                                            <option value="Huila">Huila</option>
                                            <option value="La Guajira">La Guajira</option>
                                            <option value="Magdalena">Magdalena</option>
                                            <option value="Meta">Meta</option>
                                            <option value="Nariño">Nariño</option>
                                            <option value="Norte de Santander">Norte de Santander</option>
                                            <option value="Quindío">Quindío</option>
                                            <option value="Risaralda">Risaralda</option>
                                            <option value="Santander">Santander</option>
                                            <option value="Sucre">Sucre</option>
                                            <option value="Tolima">Tolima</option>
                                            <option value="Valle del Cauca">Valle del Cauca</option>
                                            <option value="Arauca">Arauca</option>
                                            <option value="Casanare">Casanare</option>
                                            <option value="Putumayo">Putumayo</option>
                                            <option value="San Andrés">San Andrés y Providencia</option>
                                            <option value="Amazonas">Amazonas</option>
                                            <option value="Guainía">Guainía</option>
                                            <option value="Guaviare">Guaviare</option>
                                            <option value="Vaupés">Vaupés</option>
                                            <option value="Vichada">Vichada</option>
                                        </select>
                                    </div>

                                    {/* Comentario */}
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-900 mb-2">
                                            Comentario o Mensaje *
                                        </label>
                                        <textarea
                                            name="comentario"
                                            value={formData.comentario}
                                            onChange={handleInputChange}
                                            required
                                            rows={4}
                                            className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 resize-none"
                                            placeholder="Cuéntanos cómo podemos ayudarte..."
                                        />
                                    </div>

                                    {/* Checkbox de Políticas */}
                                    <div className="flex items-start space-x-3">
                                        <input
                                            type="checkbox"
                                            name="aceptaPoliticas"
                                            checked={formData.aceptaPoliticas}
                                            onChange={handleInputChange}
                                            required
                                            className="mt-1 w-4 h-4 text-amber-600 border-slate-300 rounded focus:ring-amber-500"
                                        />
                                        <label className="text-xs text-slate-600">
                                            Acepto las <a href="/politicas" className="text-amber-600 hover:text-amber-700 font-medium">Políticas de Privacidad</a>
                                        </label>
                                    </div>

                                    {/* Submit Button */}
                                    <motion.button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <motion.div
                                                    animate={{ rotate: 360 }}
                                                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                    className="w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"
                                                />
                                                Enviando...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-4 h-4 mr-2" />
                                                Enviar Mensaje
                                            </>
                                        )}
                                    </motion.button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Contact Information Section */}
            <section className="py-12 bg-gradient-to-br from-slate-50 via-white to-amber-50">
                <div className="max-w-6xl mx-auto px-4">
                    {/* Office Location */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200 mb-6"
                    >
                        <div className="flex items-center mb-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg flex items-center justify-center mr-3">
                                <MapPin className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">Oficina</h3>
                        </div>
                        <p className="text-slate-600">
                            Armenia, Quindío, Colombia
                        </p>
                    </motion.div>

                    {/* Contact Methods */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Contáctanos</h3>
                        {contactInfo.map((contact, index) => (
                            <motion.div
                                key={index}
                                className="bg-white p-4 rounded-xl shadow-lg border border-slate-200"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <div className="flex items-start space-x-3">
                                    <motion.div
                                        className="w-8 h-8 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0"
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <contact.icon className="w-4 h-4 text-white" />
                                    </motion.div>
                                    <div className="flex-1">
                                        <h4 className="font-bold text-slate-900 text-sm mb-1">{contact.title}</h4>
                                        <p className="text-slate-900 font-semibold text-sm mb-1">{contact.value}</p>
                                        <p className="text-xs text-slate-600">{contact.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Social Media */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200 mt-6"
                    >
                        <h3 className="text-xl font-bold text-slate-900 mb-4">Síguenos</h3>
                        <div className="flex space-x-4">
                            {[
                                { icon: Facebook, href: "#", label: "Facebook" },
                                { icon: Twitter, href: "#", label: "Twitter" },
                                { icon: Linkedin, href: "#", label: "LinkedIn" }
                            ].map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    className="w-10 h-10 bg-gradient-to-r from-slate-500 to-slate-600 rounded-lg flex items-center justify-center text-white hover:from-amber-500 hover:to-orange-500 transition-all duration-300"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    whileTap={{ scale: 0.95 }}
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-4 h-4" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Special Section */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                            ¿Reportado y quieres saber cómo volver a tener una vida crediticia?
                        </h2>
                        <p className="text-lg text-slate-600 mb-8">
                            Nuestro equipo especializado te ayudará a recuperar tu historial crediticio y acceder a mejores oportunidades financieras.
                        </p>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <a
                                href="tel:+573186401900"
                                className="inline-flex items-center justify-center w-full px-6 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <MessageCircle className="w-5 h-5 mr-3" />
                                Chatea con Nosotros
                                <ArrowRight className="w-4 h-4 ml-3" />
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <section className="py-12 bg-slate-900 text-white">
                <div className="max-w-6xl mx-auto px-4">
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="space-y-2 text-sm mb-8">
                            <a href="/politicas" className="block text-amber-400 hover:text-amber-300 transition-colors duration-300">Política de privacidad</a>
                            <a href="/politicas" className="block text-amber-400 hover:text-amber-300 transition-colors duration-300">Política de Cookies</a>
                            <a href="/politicas" className="block text-amber-400 hover:text-amber-300 transition-colors duration-300">Aviso Legal</a>
                        </div>
                        <div className="pt-6 border-t border-slate-700">
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

export default MobileCustomerServiceView;
