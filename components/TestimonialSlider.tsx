'use client';

import { useState, useEffect } from 'react';
import styles from './TestimonialSlider.module.css';

const testimonials = [
    {
        name: 'Claudia',
        service: 'Cliente Lipoláser',
        text: 'Es una experiencia muy buena, efectiva y además entretenida. La atención es de excelencia, muy motivadora. Gracias por su ayuda, voy logrando objetivos. El avance fue real!',
    },
    {
        name: 'Javier',
        service: 'Cliente Lipoláser',
        text: 'Muy contento con el tratamiento, la calidad de las instalaciones y equipos, pero lejos lo más sobresaliente es la calidad y conocimiento del staff!',
    },
    {
        name: 'Carolina B.',
        service: 'Cliente Anticelulitis Xcell',
        text: 'Es la primera vez que un tratamiento anticelulitis me da resultados. Durante los últimos 8 años busqué infructuosamente todas las técnicas, hasta que llegué a Dr. Feelgood. Estoy muy feliz.',
    },
    {
        name: 'Isabel',
        service: 'Cliente Lipolaser Postparto',
        text: 'Gracias! Excelente tratamiento y atención, un 7! Ayudan mucho con la autoestima y a tener ganas de bajar de peso. A 5 meses de haber tenido a mi hijita los cambios son notorios!',
    }
];

export default function TestimonialSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const goTo = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <div className={styles.sliderContainer}>
            <h2 className={styles.title}>Lo que dicen nuestros <span className={styles.highlight}>Clientes</span></h2>
            <p className={styles.subtitle}>La satisfacción de nuestros clientes nos avala.</p>

            <div className={styles.slider}>
                {testimonials.map((t, index) => (
                    <div
                        key={index}
                        className={`${styles.slide} ${index === currentIndex ? styles.active : ''}`}
                        style={{ transform: `translateX(${100 * (index - currentIndex)}%)` }}
                    >
                        <div className={styles.quoteMark}>&quot;</div>
                        <p className={styles.text}>{t.text}</p>
                        <div className={styles.author}>
                            <div className={styles.name}>{t.name}</div>
                            <div className={styles.service}>{t.service}</div>
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.dots}>
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
                        onClick={() => goTo(index)}
                        aria-label={`Ir al testimonio ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
