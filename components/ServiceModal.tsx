import { useEffect, useState } from 'react';
import styles from './ServiceModal.module.css';

interface ServiceModalProps {
    isOpen: boolean;
    onClose: () => void;
    service: {
        title: string;
        description: string;
        category: string;
        imageUrl?: string;
        modalImageUrl?: string;
        videoUrl?: string;
    } | null;
}

export default function ServiceModal({ isOpen, onClose, service }: ServiceModalProps) {
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        let t: NodeJS.Timeout;
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            // Use timeout to bypass synchronous setState in effect warning and allow CSS transition
            t = setTimeout(() => setIsAnimating(true), 10);
        } else {
            document.body.style.overflow = 'auto';
            t = setTimeout(() => setIsAnimating(false), 10);
        }
        return () => {
            document.body.style.overflow = 'auto';
            if (t) clearTimeout(t);
        };
    }, [isOpen]);

    if (!isOpen || !service) return null;

    return (
        <div className={`${styles.overlay} ${isAnimating ? styles.fadeIn : ''}`} onClick={onClose}>
            <div
                className={`${styles.modal} ${isAnimating ? styles.slideUp : ''}`}
                onClick={(e) => e.stopPropagation()}
            >
                <button className={styles.closeBtn} onClick={onClose}>
                    — Cerrar
                </button>

                <div className={styles.modalContent}>
                    <div className={styles.imageColumn}>
                        {service.videoUrl ? (
                            <div className={styles.modalImage} style={{ backgroundColor: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                                <video 
                                    src={service.videoUrl} 
                                    autoPlay 
                                    muted 
                                    loop 
                                    playsInline 
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>
                        ) : (
                            <div
                                className={styles.modalImage}
                                style={{ backgroundImage: `url(${service.modalImageUrl || service.imageUrl || 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800'})` }}
                            >
                            </div>
                        )}
                    </div>

                    <div className={styles.textColumn}>
                        <span className={styles.category}>{service.category}</span>
                        <h2 className={styles.title}>{service.title}</h2>
                        <p className={styles.description}>{service.description}</p>

                        <div className={styles.benefits}>
                            <h4 className={styles.benefitsTitle}>Experiencia Sensorial</h4>
                            <ul>
                                <li>Sensación de bienestar y relajación profunda.</li>
                                <li>Tecnología clínica no invasiva de confort absoluto.</li>
                                <li>Reestructuración visible desde la primera sesión.</li>
                            </ul>
                        </div>

                        <a href="https://wa.me/56900000000" target="_blank" rel="noopener noreferrer" className={`btn btn-primary ${styles.ctaBtn}`}>
                            Coordinar Cita Vía WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
