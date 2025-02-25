'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect } from 'react';

interface Props {
    containerRef: React.RefObject<HTMLElement>;
}

export function MouseCursor({ containerRef }: Props) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const isVisible = useMotionValue(0);

    const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);
    const opacity = useSpring(isVisible, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const container = containerRef.current;
            if (!container) return;

            const rect = container.getBoundingClientRect();
            const isInBounds =
                e.clientX >= rect.left &&
                e.clientX <= rect.right &&
                e.clientY >= rect.top &&
                e.clientY <= rect.bottom;

            isVisible.set(isInBounds ? 1 : 0);
            if (isInBounds) {
                mouseX.set(e.clientX - rect.left);
                mouseY.set(e.clientY - rect.top);
            }
        };

        document.addEventListener('mousemove', handleMouseMove);
        return () => document.removeEventListener('mousemove', handleMouseMove);
    }, [containerRef]);

    return (
        <motion.div
            className="absolute inset-0 pointer-events-none cursor-none"
            style={{ opacity, zIndex: 999 }}
        >
            <motion.div className="absolute cursor-none" style={{ x, y }}>
                <div className="relative">
                    <div className="absolute -translate-x-1/2 -translate-y-1/2 w-8 h-8 border-4 border-primary rounded-full opacity-75" />
                    {/* <div className="absolute -translate-x-1/2 -translate-y-1/2 w-8 h-8 border-2 border-white rounded-full animate-ping" /> */}
                    <div className="absolute -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full" />
                </div>
            </motion.div>
        </motion.div>
    );
}
