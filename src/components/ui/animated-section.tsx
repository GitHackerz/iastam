'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ReactNode } from 'react';

interface AnimatedSectionProps {
    children: ReactNode;
    className?: string;
    animation?:
        | 'fadeInUp'
        | 'fadeInDown'
        | 'fadeInLeft'
        | 'fadeInRight'
        | 'scaleIn'
        | 'rotateIn';
    delay?: number;
    duration?: number;
    threshold?: number;
}

const animationVariants = {
    fadeInUp: {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
    },
    fadeInDown: {
        initial: { opacity: 0, y: -50 },
        animate: { opacity: 1, y: 0 },
    },
    fadeInLeft: {
        initial: { opacity: 0, x: -50 },
        animate: { opacity: 1, x: 0 },
    },
    fadeInRight: {
        initial: { opacity: 0, x: 50 },
        animate: { opacity: 1, x: 0 },
    },
    scaleIn: {
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1 },
    },
    rotateIn: {
        initial: { opacity: 0, rotate: -180, scale: 0.8 },
        animate: { opacity: 1, rotate: 0, scale: 1 },
    },
};

export default function AnimatedSection({
    children,
    className = '',
    animation = 'fadeInUp',
    delay = 0,
    duration = 0.6,
    threshold = 0.1,
}: AnimatedSectionProps) {
    const [ref, inView] = useInView({
        triggerOnce: false, // Changed to false for repeating animations
        threshold,
        rootMargin: '-50px 0px',
    });

    const variant = animationVariants[animation];

    return (
        <motion.div
            ref={ref}
            initial={variant.initial}
            animate={inView ? variant.animate : variant.initial}
            transition={{
                duration,
                delay,
                ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
