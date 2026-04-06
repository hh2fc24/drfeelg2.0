import Link from 'next/link';
import styles from './ServiceCard.module.css';

interface ServiceCardProps {
    title: string;
    description: string | string[];
    category: string;
    imageUrl?: string;
    href?: string;
    onClick?: () => void;
    discountBadge?: string;
    basePrice?: string;
}

export default function ServiceCard({ title, description, category, imageUrl, href, onClick, discountBadge, basePrice }: ServiceCardProps) {
    const bgImage = imageUrl || 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
    const previewDesc = Array.isArray(description) ? description[0] : description;

    const renderCardContent = () => (
        <>
            <div className={styles.imageWrapper}>
                <div className={styles.imageContainer} style={{ backgroundImage: `url(${bgImage})` }}></div>
                <div className={styles.categoryBadge}>{category}</div>
                {discountBadge && <div className={styles.discountBadge}>{discountBadge}</div>}
            </div>
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                
                {basePrice && (
                    <div className={styles.priceWrapper}>
                        <span className={styles.basePriceLabel}>Desde</span>
                        <span className={styles.priceValue}>{basePrice}</span>
                    </div>
                )}
                
                <p className={styles.description}>{previewDesc}</p>
                <div className={styles.linkWrapper}>
                    <span className={styles.link}>
                        {basePrice ? "Reservar Evaluación" : "Descubrir Detalles"} <span className={styles.arrow}>→</span>
                    </span>
                </div>
            </div>
        </>
    );

    if (onClick) {
        return (
            <div className={styles.card} onClick={onClick}>
                {renderCardContent()}
            </div>
        );
    }

    return (
        <Link href={href || "#"} className={styles.card}>
            {renderCardContent()}
        </Link>
    );
}
