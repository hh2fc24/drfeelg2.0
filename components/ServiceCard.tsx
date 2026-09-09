import Link from 'next/link';
import type { CheckoutItem } from '@/lib/commerce';
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
    priceSuffix?: string;
    purchaseOptions?: CheckoutItem[];
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
    basePrice,
    priceSuffix,
    purchaseOptions,
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
                        {priceSuffix && <span className={styles.priceSuffix}>({priceSuffix})</span>}
                    </div>
                )}
                
                <p className={styles.description}>{previewDesc}</p>
                <div className={styles.linkWrapper}>
                    <span className={styles.link}>
                        {purchaseOptions?.length ? "Ver opciones y comprar" : "Descubrir detalles"} <span className={styles.arrow}>→</span>
                    </span>
                </div>
            </div>
        </>
    );

    if (onClick) {
        return (
            <button type="button" className={styles.card} onClick={onClick}>
                {renderCardContent()}
            </button>
        );
    }

    return (
        <Link href={href || "#"} className={styles.card}>
            {renderCardContent()}
        </Link>
    );
}
