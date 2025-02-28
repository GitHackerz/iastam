'use client';

import { motion } from 'framer-motion';
import { FC } from 'react';

interface SectionHeaderProps {
    subtitle: string;
    title: string;
    inView: boolean;
    className?: string;
    centered?: boolean;
    delay?: number;
}

const SectionHeader: FC<SectionHeaderProps> = ({
    subtitle,
    title,
    inView,
    className = '',
    centered = true,
    delay = 0,
}) => {
    return (
        <div
            className={`relative mb-16 ${centered ? 'text-center' : ''} ${className}`}
        >
            <motion.div
                className="mb-2 flex items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 + delay }}
                style={{ justifyContent: centered ? 'center' : 'flex-start' }}
            >
                <div className="h-px w-8 bg-primary mr-3"></div>
                <span className="text-primary text-sm tracking-wider uppercase font-medium">
                    {subtitle}
                </span>
                <div className="h-px w-8 bg-primary ml-3"></div>
            </motion.div>

            <motion.h2
                className="text-4xl md:text-5xl font-bold relative z-10"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.7, delay: 0.4 + delay }}
            >
                {title}
            </motion.h2>

            <motion.div
                className={`w-24 h-2 bg-gradient-to-r from-primary/40 to-primary rounded-full mt-4 ${
                    centered ? 'mx-auto' : ''
                }`}
                initial={{ scaleX: 0, opacity: 0 }}
                animate={
                    inView
                        ? { scaleX: 1, opacity: 1 }
                        : { scaleX: 0, opacity: 0 }
                }
                transition={{ duration: 0.6, delay: 0.6 + delay }}
            />

            <motion.div
                className="absolute -z-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                initial={{ scale: 0, opacity: 0 }}
                animate={
                    inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }
                }
                transition={{ duration: 1.2, delay: 0.2 + delay }}
            />
        </div>
    );
};

export default SectionHeader;
