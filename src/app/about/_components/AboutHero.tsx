'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export const AboutHero = () => {
    const [headerRef, headerInView] = useInView({
        triggerOnce: false,
        threshold: 0.2,
    });

    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Get the appropriate logo based on theme
    const getLogoSrc = () => {
        if (!mounted) return '/images/logos/iastam.png'; // Default fallback
        const isDark = resolvedTheme === 'dark';
        return isDark
            ? '/images/logos/iastam-w.png'
            : '/images/logos/iastam.png';
    };

    return (
        <section
            ref={headerRef}
            className="relative min-h-screen flex items-center overflow-hidden border-b border-border/20 bg-gradient-to-br from-background via-background to-primary/5"
        >
            {/* Enhanced Background patterns */}
            <div className="absolute inset-0 bg-dots dark:bg-dots opacity-20 -z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -z-10" />

            {/* Enhanced abstract shapes with animation */}
            <div className="absolute inset-0 -z-10">
                <motion.div
                    className="absolute top-20 right-12 w-96 h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full filter blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
                <motion.div
                    className="absolute bottom-20 left-12 w-96 h-96 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-full filter blur-3xl"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 1,
                    }}
                />
                {/* Additional floating orbs */}
                <motion.div
                    className="absolute top-1/2 right-1/4 w-48 h-48 bg-primary/10 rounded-full filter blur-2xl"
                    animate={{
                        y: [0, -30, 0],
                        x: [0, 20, 0],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 2,
                    }}
                />
            </div>

            <div className="container max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left side content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={
                            headerInView
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: 30 }
                        }
                        transition={{ duration: 0.7 }}
                        className="order-2 lg:order-1"
                    >
                        <div className="space-y-8">
                            <motion.div
                                className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20"
                                animate={{
                                    scale: [1, 1.02, 1],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                            >
                                <motion.span
                                    className="w-2 h-2 rounded-full bg-primary"
                                    animate={{
                                        scale: [1, 1.3, 1],
                                        opacity: [0.5, 1, 0.5],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: 'easeInOut',
                                    }}
                                />
                                <span className="text-primary font-medium tracking-wider uppercase text-sm">
                                    About us
                                </span>
                            </motion.div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                                <span className="text-foreground">About</span>{' '}
                                <span className="bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent">
                                    IAS Technical Annual Meeting 2025
                                </span>
                            </h1>

                            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                                <span className="font-semibold text-primary">
                                    IASTAM 5
                                </span>{' '}
                                is the premier annual event for industrial
                                applications technology in Tunisia, set to take
                                place in 2025. Focusing on power systems,
                                automation, and renewable energy, we bring
                                together industry leaders, researchers, and
                                students to shape the future of engineering
                                innovation.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 pt-4">
                                <motion.div
                                    className="flex items-center gap-3 text-sm text-muted-foreground"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center border border-primary/20">
                                        <span className="text-primary font-bold text-lg">
                                            7+
                                        </span>
                                    </div>
                                    <span className="font-medium">
                                        Organizations
                                        <br />
                                        <span className="text-xs opacity-70">
                                            Working Together
                                        </span>
                                    </span>
                                </motion.div>

                                <motion.div
                                    className="flex items-center gap-3 text-sm text-muted-foreground"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center border border-accent/20">
                                        <span className="text-accent font-bold text-lg">
                                            5th
                                        </span>
                                    </div>
                                    <span className="font-medium">
                                        Edition of
                                        <br />
                                        <span className="text-xs opacity-70">
                                            IASTAM
                                        </span>
                                    </span>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right side image - removed card styling */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={
                            headerInView
                                ? { opacity: 1, scale: 1 }
                                : { opacity: 0, scale: 0.9 }
                        }
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="order-1 lg:order-2"
                    >
                        <div className="relative h-60 sm:h-80 md:h-96 lg:h-[450px] w-full md:mt-0 mt-20">
                            <Image
                                src={getLogoSrc()}
                                alt="IASTAM"
                                fill
                                className="object-contain p-2 sm:p-4 transition-transform duration-300 hover:scale-105"
                                priority
                            />
                            {/* Decorative elements around the image */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 via-transparent to-accent/10 rounded-full blur-2xl opacity-50" />
                        </div>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
                >
                    <span className="text-xs uppercase tracking-wider text-muted-foreground mb-2 hidden sm:block">
                        Scroll to discover
                    </span>
                    <ChevronDown className="h-4 w-4 text-muted-foreground animate-bounce" />
                </motion.div>
            </div>
        </section>
    );
};
