import { useId } from 'react';
import styles from './ClinicalResults.module.css';

// These viewports exclude the collages' decorative frames, not clinical content.
// Keep the source photographs unchanged: no retouching, stretching or hover zoom.
const results = [
    {
        treatment: 'Ácido hialurónico',
        title: 'Definición y proyección',
        source: '/images/sourced/before_after_nose_1.png',
        width: 601,
        height: 544,
        before: '74 35 216 455',
        after: '314 35 216 455',
        stacked: false,
    },
    {
        treatment: 'Ácido hialurónico',
        title: 'Suavizado de caballete',
        source: '/images/sourced/before_after_nose_2.png',
        width: 589,
        height: 631,
        before: '50 48 237 495',
        after: '311 48 237 495',
        stacked: false,
    },
    {
        treatment: 'Botox · Dysport',
        title: 'Líneas de expresión',
        source: '/images/sourced/before_after_wrinkles.png',
        width: 607,
        height: 502,
        before: '0 0 607 234',
        after: '0 245 607 257',
        stacked: true,
    },
];

export default function ClinicalResults() {
    const instanceId = useId();
    return (
        <section className={styles.section} id="resultados" aria-labelledby="results-title">
            <div className="container">
                <div className={styles.heading}>
                    <span className={styles.eyebrow}>Antes y después</span>
                    <h2 id="results-title">Resultados reales</h2>
                    <p>Una mirada a los tratamientos realizados en nuestra clínica.</p>
                </div>

                <div className={styles.grid}>
                    {results.map((result, index) => (
                        <article className={styles.card} key={result.title}>
                            <div className={styles.cardHeading}>
                                <span className={styles.treatment}>{result.treatment}</span>
                                <h3>{result.title}</h3>
                            </div>
                            <div className={`${styles.comparison} ${result.stacked ? styles.stacked : ''}`}>
                                {[
                                    { label: 'Antes', viewport: result.before },
                                    { label: 'Después', viewport: result.after },
                                ].map(({ label, viewport }) => {
                                    const [x, y, width, height] = viewport.split(' ').map(Number);
                                    const clipId = `${instanceId}-${index}-${label}`;
                                    return (
                                        <figure className={styles.frame} key={label}>
                                            <figcaption>{label}</figcaption>
                                            <svg
                                                className={styles.photo}
                                                viewBox={viewport}
                                                preserveAspectRatio="xMidYMid meet"
                                                role="img"
                                                aria-label={`${result.title}: ${label.toLowerCase()} del tratamiento`}
                                            >
                                                <defs>
                                                    <clipPath id={clipId}>
                                                        <rect x={x} y={y} width={width} height={height} />
                                                    </clipPath>
                                                </defs>
                                                <image href={result.source} width={result.width} height={result.height} clipPath={`url(#${clipId})`} />
                                            </svg>
                                        </figure>
                                    );
                                })}
                            </div>
                        </article>
                    ))}
                </div>
                <p className={styles.note}>Los resultados son individuales y pueden variar de una persona a otra.</p>
            </div>
        </section>
    );
}
