"use client";

import { useState, useEffect } from 'react';
import { clinicContact } from '@/lib/clinic';
import styles from './ChatbotWidget.module.css';

export default function ChatbotWidget() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Delay appearance for engagement
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 2500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`${styles.widgetContainer} ${isVisible ? styles.visible : ''}`}>
            <div className={styles.pulseRing}></div>
            <a
                href={`https://wa.me/${clinicContact.whatsappLeadNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.widgetBtn}
                aria-label="Conversar por WhatsApp con Dr. Feelgood"
            >
                <span className={styles.icon}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C6.48 2 2 6.48 2 12C2 13.84 2.5 15.58 3.39 17.1L2.25 21.25L6.4 20.11C7.92 21 9.66 21.5 11.5 21.5C17.02 21.5 21.5 17.02 21.5 11.5C21.5 5.98 17.02 2 11.5 2H12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8 12H16M8 16H12M8 8H16" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </span>
            </a>
        </div>
    );
}
