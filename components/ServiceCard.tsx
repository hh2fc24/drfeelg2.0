import Link from 'next/link';
import styles from './ServiceCard.module.css';

interface ServiceCardProps {
    title: string;
    description: string | string[];
    category: string;
    imageUrl?: string;
    href?: string;
    onClick?: () => void;
}

export default function ServiceCard({ title, description, category, imageUrl, href, onClick }: ServiceCardProps) {
    const bgImage = imageUrl || 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
    const previewDesc = Array.isArray(description) ? description[0] : description;

    if (onClick) {
        return (
            <div className={styles.card} onClick={onClick}>
                <div className={styles.imageWrapper}>
                    <div className={styles.imageContainer} style={{ backgroundImage: `url(${bgImage})` }}></div>
                    <div className={styles.categoryBadge}>{category}</div>
                </div>
                <div className={styles.content}>
                    <h3 className={styles.title}>{title}</h3>
                    <p className={styles.description}>{previewDesc}</p>
                    <div className={styles.linkWrapper}>
                        <span className={styles.link}>
                            Descubrir Detalles <span className={styles.arrow}>→</span>
                        </span>
                    </div>
                </div>
            </div>
        );
    }

    // Fallback to Link if no onClick provided
    return (
        <Link href={href || "#"} className={styles.card}>
            <div className={styles.imageWrapper}>
                <div className={styles.imageContainer} style={{ backgroundImage: `url(${bgImage})` }}></div>
                <div className={styles.categoryBadge}>{category}</div>
            </div>
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{previewDesc}</p>
                <div className={styles.linkWrapper}>
                    <span className={styles.link}>
                        Descubrir <span className={styles.arrow}>→</span>
                    </span>
                </div>
            </div>
        </Link>
    );
}
