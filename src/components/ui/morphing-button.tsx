'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface MorphingButtonProps {
    children: ReactNode;
    className?: string;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    onClick?: () => void;
    disabled?: boolean;
    loading?: boolean;
}

export default function MorphingButton({
    children,
    className = '',
    variant = 'primary',
    size = 'md',
    onClick,
    disabled = false,
    loading = false,
}: MorphingButtonProps) {
    const variants = {
        primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
        secondary:
            'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        outline:
            'border border-primary text-primary hover:bg-primary hover:text-primary-foreground',
        ghost: 'text-primary hover:bg-primary/10',
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    };

    return (
        <motion.button
            className={`
                relative overflow-hidden rounded-lg font-medium transition-all duration-300 ease-out
                ${variants[variant]}
                ${sizes[size]}
                ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                ${className}
            `}
            onClick={onClick}
            disabled={disabled || loading}
            whileHover={!disabled ? { scale: 1.02 } : {}}
            whileTap={!disabled ? { scale: 0.98 } : {}}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
        >
            {/* Ripple effect background */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
            />

            {/* Loading spinner */}
            {loading && (
                <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                >
                    <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                </motion.div>
            )}

            {/* Button content */}
            <motion.span
                className="relative z-10 flex items-center justify-center gap-2"
                animate={{ opacity: loading ? 0 : 1 }}
                transition={{ duration: 0.2 }}
            >
                {children}
            </motion.span>
        </motion.button>
    );
}
