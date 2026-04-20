import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import styles from './Hero.module.css';

export default function Hero() {
    const [activeVideo, setActiveVideo] = useState(0);
    const videoRef0 = useRef<HTMLVideoElement>(null);
    const videoRef1 = useRef<HTMLVideoElement>(null);
    const videoRef2 = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef0.current) {
            videoRef0.current.play().catch(e => console.log("Autoplay prevented", e));
        }
    }, []);

    const handleVideoEnd = (index: number) => {
        const nextIndex = (index + 1) % 3;
        setActiveVideo(nextIndex);

        if (nextIndex === 0 && videoRef0.current) {
            videoRef0.current.currentTime = 0;
            videoRef0.current.play().catch(e => console.log(e));
        } else if (nextIndex === 1 && videoRef1.current) {
            videoRef1.current.currentTime = 0;
            videoRef1.current.play().catch(e => console.log(e));
        } else if (nextIndex === 2 && videoRef2.current) {
            videoRef2.current.currentTime = 0;
            videoRef2.current.play().catch(e => console.log(e));
        }
    };
    return (
        <section className={styles.hero}>
            {/* Cinematic Widescreen Video Background */}
            <div className={styles.videoBackground}>
                <video
                    ref={videoRef0}
                    className={`${styles.bgVideo} ${activeVideo === 0 ? styles.activeVideo : ''}`}
                    src="/z.mp4"
                    muted
                    playsInline
                    onEnded={() => handleVideoEnd(0)}
                />
                <video
                    ref={videoRef1}
                    className={`${styles.bgVideo} ${activeVideo === 1 ? styles.activeVideo : ''}`}
                    src="/p.mp4"
                    muted
                    playsInline
                    onEnded={() => handleVideoEnd(1)}
                />
                <video
                    ref={videoRef2}
                    className={`${styles.bgVideo} ${activeVideo === 2 ? styles.activeVideo : ''}`}
                    src="/q.mp4"
                    muted
                    playsInline
                    onEnded={() => handleVideoEnd(2)}
                />
                <div className={styles.videoOverlay}></div>
            </div>

            <div className={styles.heroLayout}>
                {/* Left Side: Dramatic Typography */}
                <div className={styles.heroContent}>
                    <div className="animate-fade-up">
                        <span className={styles.eyebrow}>Clínica estética y podología</span>
                    </div>

                    <h1 className={styles.title}>
                        <span className={`animate-fade-up delay-1 ${styles.titleLine}`}>Atención</span>
                        <span className={`animate-fade-up delay-2 ${styles.titleLine}`}>
                            <span className={styles.highlight}>profesional</span>
                        </span>
                        <span className={`animate-fade-up delay-3 ${styles.titleLine}`}>para tu bienestar.</span>
                    </h1>

                    <p className={`animate-fade-up delay-4 ${styles.subtitle}`}>
                        Evaluación personalizada, tecnología certificada y tratamientos indicados según tus necesidades.
                        Te orientamos con información clara y un enfoque clínico responsable.
                    </p>

                    <div className={`animate-fade-up delay-4 ${styles.ctaGroup}`}>
                        <Link href="/contacto" className="btn btn-primary">
                            Evaluación Gratuita
                        </Link>
                        <Link href="/servicios" className="link-anim">
                            Ver Tratamientos
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
