'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import DecorativeLines from '@/components/ui/decorative-lines';

export const IntroSection = () => {
    const [sectionRef, inView] = useInView({
        triggerOnce: false,
        threshold: 0.2,
    });

    // Add state for image slider
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
        '/images/tunisia/1.jpg',
        '/images/tunisia/2.png',
        '/images/tunisia/3.jpg',
        '/images/tunisia/4.jpeg',
        '/images/tunisia/5.jpg',
        '/images/tunisia/6.avif',
    ];

    // Set up automatic image rotation
    useEffect(() => {
        if (!inView) return;

        const interval = setInterval(() => {
            setCurrentImageIndex(prevIndex =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1,
            );
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, [inView, images.length]);

    return (
        <section ref={sectionRef} className="py-24 relative">
            <div className="absolute inset-0 overflow-hidden z-0">
                <DecorativeLines
                    variant="waves"
                    inView={inView}
                    opacity={0.12}
                    color="var(--primary)"
                />
            </div>

            <div className="container max-w-6xl px-4 mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0, x: -50 }}
                        animate={
                            inView
                                ? { opacity: 1, x: 0 }
                                : { opacity: 0, x: -50 }
                        }
                        transition={{ duration: 0.7 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            <span className="text-primary font-medium tracking-wider uppercase text-sm">
                                Welcome to Tunisia
                            </span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                            Experience the Magic of{' '}
                            <span className="text-primary">North Africa</span>
                        </h2>

                        <div className="space-y-4 text-muted-foreground">
                            <p className="text-lg leading-relaxed">
                                There&apos;s so much to see and do in each
                                region of Tunisia: a wide variety of landscapes,
                                a coastline spanning 1,250km, studded with
                                islands and archipelagos, a fantastic array of
                                traditions and customs and a rich historical
                                heritage.
                            </p>
                            <p className="leading-relaxed">
                                From the Mediterranean beaches and ancient ruins
                                to the vast Sahara desert, Tunisia offers a
                                diverse and enriching experience for every type
                                of traveler.
                            </p>
                        </div>

                        <div className="pt-4 flex gap-4">
                            <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                    <span className="text-primary font-bold">
                                        1250
                                    </span>
                                </div>
                                <span>
                                    km of
                                    <br />
                                    Coastline
                                </span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                    <span className="text-primary font-bold">
                                        3000+
                                    </span>
                                </div>
                                <span>
                                    Years of
                                    <br />
                                    History
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={
                            inView
                                ? { opacity: 1, scale: 1 }
                                : { opacity: 0, scale: 0.9 }
                        }
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentImageIndex}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="relative w-full h-full"
                                >
                                    <Image
                                        src={images[currentImageIndex]}
                                        alt={`Tunisia scenery ${currentImageIndex + 1}`}
                                        fill
                                        className="object-cover"
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
