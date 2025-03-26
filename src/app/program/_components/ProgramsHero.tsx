'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, ChevronDown, Clock, MapPin } from 'lucide-react';

export const ProgramsHero = () => {
    const [heroRef, heroInView] = useInView({
        triggerOnce: false,
        threshold: 0.2,
    });

    return (
        <section
            ref={heroRef}
            className="relative min-h-[80vh] sm:min-h-screen flex items-center overflow-hidden border-b border-border/50 px-2 sm:px-0"
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

            <div className="container max-w-7xl mx-auto px-2 sm:px-4 py-16 sm:py-24">
                <div className="flex flex-col max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={
                            heroInView
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: 30 }
                        }
                        transition={{ duration: 0.7 }}
                        className="space-y-6 sm:space-y-8"
                    >
                        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 rounded-full">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            <span className="text-primary font-medium tracking-wider uppercase text-xs sm:text-sm">
                                IASTAM 5 - 2025
                            </span>
                        </div>

                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                            Discover Our{' '}
                            <span className="text-primary">Programs</span>
                        </h1>

                        <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
                            Join us for a series of insightful sessions,
                            workshops, and networking opportunities designed to
                            foster innovation and collaboration in the field of
                            industrial applications technology.
                        </p>

                        <div className="flex flex-col gap-4 pt-2 sm:pt-4">
                            <div className="flex items-center gap-3 text-xs sm:text-sm text-muted-foreground">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                                </div>
                                <span>October 4-6, 2025</span>
                            </div>

                            <div className="flex items-center gap-3 text-xs sm:text-sm text-muted-foreground">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                                </div>
                                <span>9:00 AM - 6:00 PM</span>
                            </div>

                            <div className="flex items-center gap-3 text-xs sm:text-sm text-muted-foreground">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                                </div>
                                <span>L&apos;Orient Palace, Sousse</span>
                            </div>
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
                        Scroll to explore
                    </span>
                    <ChevronDown className="h-4 w-4 text-muted-foreground animate-bounce" />
                </motion.div>
            </div>
        </section>
    );
};
