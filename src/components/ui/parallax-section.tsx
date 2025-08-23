'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ReactNode } from 'react';

interface ParallaxSectionProps {
    children: ReactNode;
    className?: string;
    offset?: number;
    speed?: number;
}

export default function ParallaxSection({
    children,
    className = '',
    offset = 50,
    speed = 0.5,
}: ParallaxSectionProps) {
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0,
    });

    return (
        <motion.div
            ref={ref}
            className={className}
            style={{
                transform: inView
                    ? `translateY(${offset * speed}px)`
                    : 'translateY(0)',
                transition: 'transform 0.6s ease-out',
            }}
        >
            {children}
        </motion.div>
    );
}
