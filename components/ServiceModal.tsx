import { useEffect, useState } from 'react';
import { useCart } from '@/components/CartProvider';
import { clinicContact } from '@/lib/clinic';
import { formatCLP, type CheckoutItem, type CheckoutItemId } from '@/lib/commerce';
import styles from './ServiceModal.module.css';

interface ServiceModalProps {
    isOpen: boolean;
    onClose: () => void;
    service: {
        title: string;
        description: string | string[];
        category: string;
        benefitsTitle?: string;
        benefits?: string[];
        prices?: string[];
        imageUrl?: string;
        modalImageUrl?: string;
        imageFit?: 'cover' | 'contain';
        imagePosition?: string;
        imageBackground?: string;
        videoUrl?: string;
        galleryUrls?: string[];
        purchaseOptions?: CheckoutItem[];
    } | null;
}

export default function ServiceModal({ isOpen, onClose, service }: ServiceModalProps) {
    const { addItem } = useCart();
    const [isAnimating, setIsAnimating] = useState(false);
    const [activeMedia, setActiveMedia] = useState<{type: 'video' | 'image', url: string} | null>(null);
    const [selectedOptionId, setSelectedOptionId] = useState<CheckoutItemId | null>(null);

    useEffect(() => {
        let t: NodeJS.Timeout;
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            const nextMedia = service?.videoUrl
                ? { type: 'video' as const, url: service.videoUrl }
                : service?.modalImageUrl || service?.imageUrl
                    ? { type: 'image' as const, url: service.modalImageUrl || service.imageUrl || '' }
                    : null;

            // Delay state updates slightly so the modal can transition in without a synchronous effect update.
            t = setTimeout(() => {
                setIsAnimating(true);
                setActiveMedia(nextMedia);
                setSelectedOptionId((service?.purchaseOptions?.[0]?.id as CheckoutItemId | undefined) || null);
            }, 10);
        } else {
            document.body.style.overflow = 'auto';
            t = setTimeout(() => {
                setIsAnimating(false);
                setActiveMedia(null);
                setSelectedOptionId(null);
            }, 10);
        }
        return () => {
            document.body.style.overflow = 'auto';
            if (t) clearTimeout(t);
        };
    }, [isOpen, service]);

    if (!isOpen || !service) return null;

    const whatsappMessage = [
        "Hola, quiero solicitar una evaluacion en Dr. Feelgood.",
        `Tratamiento de interes: ${service.title}`,
        "Me gustaria recibir orientacion para agendar."
    ].join("\n");
    const whatsappHref = `https://wa.me/${clinicContact.whatsappLeadNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    const handleAddToCart = () => {
        if (!selectedOptionId) return;
        onClose();
        addItem(selectedOptionId);
    };

    return (
        <div className={`${styles.overlay} ${isAnimating ? styles.fadeIn : ''}`} onClick={onClose}>
            <div
                className={`${styles.modal} ${isAnimating ? styles.slideUp : ''}`}
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-labelledby="service-modal-title"
            >
                <button type="button" className={styles.closeBtn} onClick={onClose} aria-label={`Cerrar detalles de ${service.title}`}>
                    — Cerrar
                </button>

                <div className={styles.modalContent}>
                    <div className={styles.imageColumn}>
                        <div className={styles.mainMedia}>
                            {activeMedia?.type === 'video' ? (
                                <div className={styles.modalImage} style={{ backgroundColor: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                                    <video 
                                        src={activeMedia.url} 
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
                                    style={{
                                        backgroundImage: `url(${activeMedia?.url || '/images/instalaciones/clinica5.jpg'})`,
                                        backgroundSize: service.imageFit || 'cover',
                                        backgroundPosition: service.imagePosition || 'center',
                                        backgroundColor: service.imageBackground || 'var(--color-bg-white)',
                                    }}
                                >
                                </div>
                            )}
                        </div>
                        {service.galleryUrls && service.galleryUrls.length > 0 && (
                            <div className={styles.gallery}>
                                {service.videoUrl && (
                                    <div 
                                        className={styles.galleryItem} 
                                        style={{ 
                                            backgroundColor: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', 
                                            cursor: 'pointer', 
                                            border: activeMedia?.url === service.videoUrl ? '2px solid var(--color-primary-gold-dark)' : '2px solid rgba(255, 255, 255, 0.8)' 
                                        }}
                                        onClick={() => setActiveMedia({ type: 'video', url: service.videoUrl! })}
                                    >
                                        <span style={{color: '#fff', fontSize: '10px', letterSpacing: '0.1em'}}>VIDEO</span>
                                    </div>
                                )}
                                {service.galleryUrls.map((url, i) => (
                                    <div 
                                        key={i} 
                                        className={styles.galleryItem} 
                                        style={{ 
                                            backgroundImage: `url(${url})`,
                                            cursor: 'pointer',
                                            border: activeMedia?.url === url ? '2px solid var(--color-primary-gold-dark)' : '2px solid rgba(255, 255, 255, 0.8)'
                                        }}
                                        onClick={() => setActiveMedia({ type: 'image', url })}
                                    ></div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className={styles.textColumn}>
                        <span className={styles.category}>{service.category}</span>
                        <h2 id="service-modal-title" className={styles.title}>{service.title}</h2>
                        
                        {Array.isArray(service.description) ? (
                            service.description.map((desc, idx) => (
                                <p key={idx} className={styles.description} style={{ marginBottom: '1rem' }}>{desc}</p>
                            ))
                        ) : (
                            <p className={styles.description}>{service.description}</p>
                        )}

                        <div className={styles.benefits}>
                            {service.benefitsTitle && <h4 className={styles.benefitsTitle}>{service.benefitsTitle}</h4>}
                            {service.benefits && service.benefits.length > 0 ? (
                                <ul>
                                    {service.benefits.map((benefit, idx) => (
                                        <li key={idx}>{benefit}</li>
                                    ))}
                                </ul>
                            ) : null}
                        </div>

                        {service.prices && service.prices.length > 0 && (
                            <div className={styles.benefits} style={{ marginTop: '1.5rem' }}>
                                <h4 className={styles.benefitsTitle}>Valores de Inversión</h4>
                                <ul>
                                    {service.prices.map((price, idx) => (
                                        <li key={idx} style={{ fontWeight: 500 }}>{price}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {service.purchaseOptions?.length ? (
                            <fieldset className={styles.purchaseBox}>
                                <legend>Elige una opción</legend>
                                <div className={styles.optionList}>
                                    {service.purchaseOptions.map((option) => (
                                        <label
                                            key={option.id}
                                            className={`${styles.option} ${selectedOptionId === option.id ? styles.optionSelected : ''}`}
                                        >
                                            <input
                                                type="radio"
                                                name="purchase-option"
                                                value={option.id}
                                                checked={selectedOptionId === option.id}
                                                onChange={() => setSelectedOptionId(option.id as CheckoutItemId)}
                                            />
                                            <span>
                                                <strong>{option.optionLabel}</strong>
                                                <small>{formatCLP(option.unitPrice)}</small>
                                            </span>
                                        </label>
                                    ))}
                                </div>
                                <button
                                    type="button"
                                    className={`btn btn-primary ${styles.ctaBtn}`}
                                    disabled={!selectedOptionId}
                                    onClick={handleAddToCart}
                                >
                                    Agregar al carrito
                                </button>
                                <p className={styles.secureNote}>El pago se completa de forma segura en Mercado Pago.</p>
                            </fieldset>
                        ) : null}

                        <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className={`btn btn-secondary ${styles.whatsappBtn}`}>
                            {service.purchaseOptions?.length ? "Consultar antes de comprar" : "Solicitar Evaluación por WhatsApp"}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
