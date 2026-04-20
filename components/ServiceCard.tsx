import Link from 'next/link';
import styles from './ServiceCard.module.css';

interface ServiceCardProps {
    title: string;
    description: string | string[];
    category: string;
    imageUrl?: string;
    imageFit?: "cover" | "contain";
    imagePosition?: string;
    imageBackground?: string;
    href?: string;
    onClick?: () => void;
    discountBadge?: string;
    basePrice?: string;
}

export default function ServiceCard({
    title,
    description,
    category,
    imageUrl,
    imageFit = "cover",
    imagePosition = "center",
    imageBackground = "var(--color-bg-white)",
    href,
    onClick,
    discountBadge,
    basePrice
}: ServiceCardProps) {
    const bgImage = imageUrl || '/images/instalaciones/clinica5.jpg';
    const previewDesc = Array.isArray(description) ? description[0] : description;

    const renderCardContent = () => (
        <>
            <div className={styles.imageWrapper}>
                <div
                    className={styles.imageContainer}
                    style={{
                        backgroundImage: `url(${bgImage})`,
                        backgroundSize: imageFit,
                        backgroundPosition: imagePosition,
                        backgroundColor: imageBackground,
                    }}
                ></div>
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
