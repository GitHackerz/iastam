'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface BlurFadeProps {
    children: React.ReactNode;
    delay?: number;
    inView?: boolean;
}

export default function BlurFade({
    children,
    delay = 0,
    inView = true,
}: BlurFadeProps) {
    const { ref, inView: isInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{
                opacity: isInView || !inView ? 1 : 0,
                filter: isInView || !inView ? 'blur(0px)' : 'blur(10px)',
            }}
            transition={{ duration: 0.5, delay }}
        >
            {children}
        </motion.div>
    );
}
