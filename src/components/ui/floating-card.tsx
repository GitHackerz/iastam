'use client';

import { motion } from 'framer-motion';
import { ReactNode, useState } from 'react';
import { cn } from '@/lib/utils';

interface FloatingCardProps {
    children: ReactNode;
    className?: string;
    hoverScale?: number;
    glowEffect?: boolean;
    rotateOnHover?: boolean;
    shadowIntensity?: 'light' | 'medium' | 'heavy';
}

export default function FloatingCard({
    children,
    className = '',
    hoverScale = 1.02,
    glowEffect = false,
    rotateOnHover = false,
    shadowIntensity = 'medium',
}: FloatingCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    const shadowClasses = {
        light: 'shadow-soft hover:shadow-medium',
        medium: 'shadow-medium hover:shadow-hard',
        heavy: 'shadow-hard hover:shadow-colored',
    };

    return (
        <motion.div
            className={cn(
                'relative rounded-xl overflow-hidden transition-all duration-300 ease-out',
                'bg-card/80 backdrop-blur-sm border border-border/50',
                shadowClasses[shadowIntensity],
                glowEffect && 'hover:shadow-colored',
                className,
            )}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{
                scale: hoverScale,
                rotate: rotateOnHover ? [0, 1, 0, -1, 0] : 0,
                transition: { duration: 0.3, ease: 'easeOut' },
            }}
            animate={{
                y: isHovered ? -5 : 0,
                transition: { duration: 0.3, ease: 'easeOut' },
            }}
        >
            {/* Glow effect */}
            {glowEffect && (
                <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 transition-opacity duration-300"
                    animate={{
                        opacity: isHovered ? 1 : 0,
                    }}
                />
            )}

            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700 ease-out" />

            {/* Content */}
            <div className="relative z-10">{children}</div>
        </motion.div>
    );
}
