'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

export const AboutHero = () => {
    const [headerRef, headerInView] = useInView({
        triggerOnce: false,
        threshold: 0.2,
    });

    return (
        <section
            ref={headerRef}
            className="relative h-screen flex items-center overflow-hidden border-b border-border/50"
        >
            {/* Background patterns */}
            <div className="absolute inset-0 bg-grid-small-black/[0.2] -z-10 dark:bg-grid-small-white/[0.2]" />

            {/* Abstract shapes */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-20 right-12 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-pulse" />
                <div
                    className="absolute bottom-20 left-12 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-pulse"
                    style={{ animationDelay: '1s' }}
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
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                                <span className="text-primary font-medium tracking-wider uppercase text-sm">
                                    About us
                                </span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                                Powering{' '}
                                <span className="text-primary">Innovation</span>{' '}
                                Through Collaboration
                            </h1>

                            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                                <span className="font-semibold">IASTAM 5</span>{' '}
                                is the premier annual event for industrial
                                applications technology in Tunisia, set to take
                                place in 2025. Focusing on power systems,
                                automation, and renewable energy, we bring
                                together industry leaders, researchers, and
                                students to shape the future of engineering
                                innovation.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                        <span className="text-primary font-bold">
                                            7+
                                        </span>
                                    </div>
                                    <span>
                                        Organizations
                                        <br />
                                        Working Together
                                    </span>
                                </div>

                                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                        <span className="text-primary font-bold">
                                            5th
                                        </span>
                                    </div>
                                    <span>
                                        Edition of
                                        <br />
                                        IASTAM
                                    </span>
                                </div>
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
                        <div className="relative h-80 sm:h-96 lg:h-[450px] w-full">
                            <Image
                                src="/images/logos/iastam.png"
                                alt="IASTAM"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
                >
                    <span className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                        Scroll to discover
                    </span>
                    <ChevronDown className="h-4 w-4 text-muted-foreground animate-bounce" />
                </motion.div>
            </div>
        </section>
    );
};
