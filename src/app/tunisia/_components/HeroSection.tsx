'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronsDown } from 'lucide-react';
import DecorativeLines from '@/components/ui/decorative-lines';

export const HeroSection = () => {
    const [sectionRef, inView] = useInView({
        triggerOnce: false,
        threshold: 0.2,
    });

    return (
        <section
            ref={sectionRef}
            className="relative h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Background Pattern with Decorative Lines */}
            <div className="absolute inset-0 z-0">
                <DecorativeLines
                    variant="diagonal"
                    inView={inView}
                    opacity={0.15}
                    color="var(--primary)"
                />
            </div>

            {/* Animated gradient blobs */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/4 right-12 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-pulse" />
                <div
                    className="absolute bottom-1/3 left-12 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl animate-pulse"
                    style={{ animationDelay: '1s' }}
                />
            </div>

            {/* Hero Content */}
            <div className="container max-w-6xl px-4 mx-auto relative z-10">
                <div className="flex flex-col items-center text-center space-y-6">
                    <motion.div
                        className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mx-auto"
                        initial={{ opacity: 0, y: -20 }}
                        animate={
                            inView
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: -20 }
                        }
                        transition={{ duration: 0.6 }}
                    >
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        <span className="text-primary font-medium tracking-wider uppercase text-sm">
                            Tourism Guide
                        </span>
                    </motion.div>

                    <motion.h1
                        className="text-5xl md:text-7xl font-bold tracking-tight"
                        initial={{ opacity: 0, y: 30 }}
                        animate={
                            inView
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: 30 }
                        }
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        Discover <span className="text-primary">Tunisia</span>
                    </motion.h1>

                    <motion.div
                        className="flex items-center justify-center gap-4 text-3xl font-semibold"
                        initial={{ opacity: 0, y: 30 }}
                        animate={
                            inView
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: 30 }
                        }
                        transition={{ duration: 0.7, delay: 0.3 }}
                    >
                        <span>Tunisia</span>
                        <span className="text-primary">-</span>
                        <span className="font-arabic">تونس</span>
                    </motion.div>

                    <motion.p
                        className="max-w-2xl text-lg text-muted-foreground"
                        initial={{ opacity: 0, y: 30 }}
                        animate={
                            inView
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: 30 }
                        }
                        transition={{ duration: 0.7, delay: 0.4 }}
                    >
                        A land of history, culture, and breathtaking landscapes
                        at the crossroads of Mediterranean civilizations.
                    </motion.p>
                </div>
            </div>

            {/* Scroll indicator - positioned at the bottom-right */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute bottom-6 flex flex-col items-center gap-2 z-20"
            >
                <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                    Explore Tunisia
                </span>
                <ChevronsDown className="h-5 w-5 text-primary animate-bounce" />
            </motion.div>
        </section>
    );
};
