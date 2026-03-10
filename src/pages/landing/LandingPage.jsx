import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";
import KarannLogo from "../../assets/karanncircle.webp";


const proyectos = [
    {
        id: 1,
        nombre: "Torre Residencial Norte",
        descripcion: "Edificio de 18 pisos con 120 departamentos de alta calidad, terminado en tiempo récord.",
        estado: "Completado",
        año: "2024",
        emoji: "🏢",
    },
    {
        id: 2,
        nombre: "Centro Comercial Vistazul",
        descripcion: "Construcción de mall con 85 locales, área de food court y estacionamientos subterráneos.",
        estado: "En Ejecución",
        año: "2025",
        emoji: "🏬",
    },
    {
        id: 3,
        nombre: "Puente Los Aromos",
        descripcion: "Obra vial de 340 metros de longitud con estructura mixta acero-hormigón.",
        estado: "Completado",
        año: "2023",
        emoji: "🌉",
    },
    {
        id: 4,
        nombre: "Conjunto Habitacional El Bosque",
        descripcion: "167 viviendas sociales con áreas verdes, pavimentación y redes de agua y luz.",
        estado: "Completado",
        año: "2022",
        emoji: "🏘️",
    },
    {
        id: 5,
        nombre: "Planta Industrial Atacama",
        descripcion: "Nave industrial de 12.000 m² para procesamiento de minerales, sector Copiapó.",
        estado: "En Ejecución",
        año: "2025",
        emoji: "🏭",
    },
    {
        id: 6,
        nombre: "Hotel Boutique Lastarria",
        descripcion: "Rehabilitación y construcción de hotel patrimonial de 40 habitaciones.",
        estado: "Completado",
        año: "2023",
        emoji: "🏨",
    },
];

const equipo = [
    { nombre: "Carlos Mendoza", cargo: "Gerente General", emoji: "👷", descripcion: "30 años de experiencia en gestión de obras civiles y liderazgo de grandes proyectos." },
    { nombre: "Ana Ruiz", cargo: "Jefa de Proyectos", emoji: "👩‍💼", descripcion: "Ingeniera Civil con especialización en BIM y gestión ágil de obras." },
    { nombre: "Roberto Soto", cargo: "Capataz Principal", emoji: "🧰", descripcion: "Experto en coordinación de cuadrillas y control de avance en terreno." },
    { nombre: "Valeria Torres", cargo: "Administradora de Contratos", emoji: "📋", descripcion: "Especialista en licitaciones públicas y privadas, gestión de proveedores." },
];

const LandingPage = () => {
    const navigate = useNavigate();
    const sobreRef = useRef(null);
    const proyectosRef = useRef(null);
    const equipoRef = useRef(null);
    const contactoRef = useRef(null);

    const scrollTo = (ref) => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="lp-root">
            <nav className="lp-nav">
                <div className="lp-nav-brand">
                    <img src={KarannLogo} alt="Karann Logo" width={38} height={38} />
                    <span className="lp-nav-name" style={{ color: "#3572ccff" }}>KARANN</span>
                </div>
                <ul className="lp-nav-links">
                    <li onClick={() => scrollTo(sobreRef)}>Sobre Nosotros</li>
                    <li onClick={() => scrollTo(proyectosRef)}>Proyectos</li>
                    <li onClick={() => scrollTo(equipoRef)}>Equipo</li>
                    <li onClick={() => scrollTo(contactoRef)}>Contáctanos</li>
                </ul>
                <button className="lp-login-btn" onClick={() => navigate("/login")}>
                    Iniciar Sesión
                </button>
            </nav>

            <section className="lp-hero">
                <div className="lp-hero-particles">
                    {[...Array(18)].map((_, i) => (
                        <div key={i} className="lp-particle" style={{ "--i": i }} />
                    ))}
                </div>
                <div className="lp-hero-content">
                    <div className="lp-hero-badge">Empresa Constructora</div>
                    <h1 className="lp-hero-title">
                        Construimos el <span className="lp-highlight">futuro</span><br />
                        con excelencia
                    </h1>
                    <p className="lp-hero-desc">
                        Más de 15 años transformando proyectos en realidades. Desde viviendas sociales hasta
                        grandes obras de infraestructura, Karann SPA entrega calidad, seguridad y compromiso.
                    </p>
                    <div className="lp-hero-actions">
                        <button className="lp-btn-primary" onClick={() => scrollTo(proyectosRef)}>
                            Ver Proyectos
                        </button>
                        <button className="lp-btn-secondary" onClick={() => scrollTo(contactoRef)}>
                            Contáctanos
                        </button>
                    </div>
                    <div className="lp-hero-stats">
                        <div className="lp-stat"><span className="lp-stat-num">100+</span><span className="lp-stat-label">Proyectos</span></div>
                        <div className="lp-stat-divider" />
                        <div className="lp-stat"><span className="lp-stat-num">15+</span><span className="lp-stat-label">Años</span></div>
                    </div>
                </div>
                <div className="lp-hero-scroll" onClick={() => scrollTo(sobreRef)}>
                    <div className="lp-scroll-indicator" />
                    <span>Conoce más</span>
                </div>
            </section>

            <section className="lp-section lp-sobre" ref={sobreRef}>
                <div className="lp-section-inner">
                    <div className="lp-section-label">Quiénes somos</div>
                    <h2 className="lp-section-title">Sobre Nosotros</h2>
                    <p className="lp-section-subtitle">
                        Somos una empresa constructora chilena fundada en 2009, con sede en Santiago y presencia
                        en todo el país. Nos especializamos en obras civiles, construcción habitacional,
                        infraestructura industrial y proyectos de edificación pública y privada.
                    </p>
                    <div className="lp-sobre-grid">
                        <div className="lp-sobre-card">
                            <div className="lp-sobre-icon">🎯</div>
                            <h3>Misión</h3>
                            <p>Construir con excelencia técnica, cumpliendo plazos y estándares de seguridad, generando valor para nuestros clientes y comunidades.</p>
                        </div>
                        <div className="lp-sobre-card">
                            <div className="lp-sobre-icon">🔭</div>
                            <h3>Visión</h3>
                            <p>Ser la constructora de referencia en Chile, reconocida por innovación, sustentabilidad y el bienestar de nuestros trabajadores.</p>
                        </div>
                        <div className="lp-sobre-card">
                            <div className="lp-sobre-icon">⚡</div>
                            <h3>Valores</h3>
                            <p>Integridad, seguridad, trabajo en equipo, compromiso con la calidad y responsabilidad social empresarial.</p>
                        </div>
                        <div className="lp-sobre-card">
                            <div className="lp-sobre-icon">🏆</div>
                            <h3>Certificaciones</h3>
                            <p>ISO 9001, ISO 45001 (Seguridad y Salud), y empresa adherida a la Cámara Chilena de la Construcción.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="lp-section lp-proyectos" ref={proyectosRef}>
                <div className="lp-section-inner">
                    <div className="lp-section-label">Nuestro portafolio</div>
                    <h2 className="lp-section-title">Proyectos Destacados</h2>
                    <p className="lp-section-subtitle">
                        Cada proyecto es un testimonio de nuestra capacidad técnica y compromiso con la excelencia.
                    </p>
                    <div className="lp-proyectos-grid">
                        {proyectos.map((p) => (
                            <div className="lp-proyecto-card" key={p.id}>
                                <div className="lp-proyecto-emoji">{p.emoji}</div>
                                <div className={`lp-proyecto-badge ${p.estado === "Completado" ? "badge-done" : "badge-active"}`}>
                                    {p.estado}
                                </div>
                                <h3 className="lp-proyecto-nombre">{p.nombre}</h3>
                                <p className="lp-proyecto-desc">{p.descripcion}</p>
                                <div className="lp-proyecto-año">📅 {p.año}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="lp-section lp-equipo" ref={equipoRef}>
                <div className="lp-section-inner">
                    <div className="lp-section-label">Las personas detrás</div>
                    <h2 className="lp-section-title">Nuestro Equipo</h2>
                    <p className="lp-section-subtitle">
                        Profesionales comprometidos con la calidad y el trabajo bien hecho.
                    </p>
                    <div className="lp-equipo-grid">
                        {equipo.map((m) => (
                            <div className="lp-miembro-card" key={m.nombre}>
                                <div className="lp-miembro-avatar">{m.emoji}</div>
                                <h3 className="lp-miembro-nombre">{m.nombre}</h3>
                                <div className="lp-miembro-cargo">{m.cargo}</div>
                                <p className="lp-miembro-desc">{m.descripcion}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="lp-section lp-contacto" ref={contactoRef}>
                <div className="lp-section-inner">
                    <div className="lp-section-label">Hablemos</div>
                    <h2 className="lp-section-title">Contáctanos</h2>
                    <p className="lp-section-subtitle">
                        ¿Tienes un proyecto en mente? Escríbenos y te responderemos a la brevedad.
                    </p>
                    <div className="lp-contacto-wrapper">
                        <div className="lp-contacto-info">
                            <div className="lp-info-item">
                                <span className="lp-info-icon">📍</span>
                                <div>
                                    <strong>Dirección</strong>
                                    <p>Av. Apoquindo 4800, Las Condes, Santiago</p>
                                </div>
                            </div>
                            <div className="lp-info-item">
                                <span className="lp-info-icon">📞</span>
                                <div>
                                    <strong>Teléfono</strong>
                                    <p>+56 2 2345 6789</p>
                                </div>
                            </div>
                            <div className="lp-info-item">
                                <span className="lp-info-icon">✉️</span>
                                <div>
                                    <strong>Email</strong>
                                    <p>contacto@karann.cl</p>
                                </div>
                            </div>
                            <div className="lp-info-item">
                                <span className="lp-info-icon">🕐</span>
                                <div>
                                    <strong>Horario</strong>
                                    <p>Lunes a Viernes, 8:00 – 18:00</p>
                                </div>
                            </div>
                        </div>
                        <form className="lp-form" onSubmit={(e) => { e.preventDefault(); alert("¡Mensaje enviado! Nos contactaremos pronto."); e.target.reset(); }}>
                            <div className="lp-form-row">
                                <div className="lp-form-group">
                                    <label>Nombre</label>
                                    <input type="text" placeholder="Tu nombre completo" required />
                                </div>
                                <div className="lp-form-group">
                                    <label>Email</label>
                                    <input type="email" placeholder="tu@email.com" required />
                                </div>
                            </div>
                            <div className="lp-form-group">
                                <label>Asunto</label>
                                <input type="text" placeholder="¿En qué podemos ayudarte?" required />
                            </div>
                            <div className="lp-form-group">
                                <label>Mensaje</label>
                                <textarea rows="5" placeholder="Cuéntanos sobre tu proyecto..." required />
                            </div>
                            <button type="submit" className="lp-form-submit">
                                Enviar Mensaje 🚀
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <footer className="lp-footer">
                <div className="lp-footer-inner">
                    <div className="lp-footer-brand">
                        <img src={KarannLogo} alt="Karann Logo" width={38} height={38} />
                        <span className="lp-nav-name" style={{ color: "#3572ccff" }}>KARANN</span>
                    </div>
                    <p className="lp-footer-copy">© {new Date().getFullYear()} Karann SPA — Todos los derechos reservados.</p>
                    <button className="lp-footer-login" onClick={() => navigate("/login")}>
                        Acceso al Sistema →
                    </button>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
