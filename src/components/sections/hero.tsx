'use client';

import { Button } from '@/components/ui/button';
import { Calendar, MapPin, CircuitBoard, Cpu, Waves } from 'lucide-react';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import DecorativeLines from '@/components/ui/decorative-lines';
import { motion } from 'framer-motion';

export default function HeroSection() {
    const [sectionRef, inView] = useInView({
        triggerOnce: false,
        threshold: 0.2,
    });

    return (
        <section
            ref={sectionRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
        >
            {/* Background Pattern with Decorative Lines */}
            <div className="absolute inset-0 z-0">
                <DecorativeLines
                    variant="diagonal"
                    inView={inView}
                    opacity={0.15} // Increased opacity
                    color="var(--primary)"
                />
            </div>

            {/* Additional decorative circuit lines for tech feeling */}
            <div className="absolute top-1/4 right-0 w-1/3 h-1/3 z-0">
                <DecorativeLines
                    variant="circuit"
                    inView={inView}
                    opacity={0.25} // Increased opacity
                    color="var(--primary)"
                />
            </div>

            {/* Decorative Elements (now z-10 to make sure they're in front of the lines) */}
            <div className="absolute inset-0 overflow-hidden z-10">
                {/* Top Right Circuit */}
                <div className="absolute -right-20 -top-20 w-[400px] h-[400px] opacity-10">
                    <CircuitBoard className="w-full h-full animate-pulse text-primary" />
                </div>

                {/* Bottom Left CPU */}
                <div className="absolute -left-16 -bottom-16 w-[300px] h-[300px] opacity-10">
                    <Cpu className="w-full h-full animate-pulse text-primary" />
                </div>

                {/* Floating Elements */}
                <div className="absolute top-1/4 left-1/4 animate-float-slow opacity-20">
                    <Waves className="w-24 h-24 text-primary" />
                </div>
                <div className="absolute bottom-1/4 right-1/3 animate-float opacity-20">
                    <CircuitBoard className="w-16 h-16 text-primary" />
                </div>
            </div>

            {/* Content Container (now z-20 to make sure it's on top) */}
            <div className="container max-w-6xl px-4 py-32 mx-auto relative z-20">
                <div className="text-center space-y-8 max-w-4xl mx-auto">
                    {/* Pre-title */}
                    <motion.p
                        className="text-primary font-medium tracking-wider uppercase"
                        initial={{ opacity: 0, y: -20 }}
                        animate={
                            inView
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: -20 }
                        }
                        transition={{ duration: 0.6 }}
                    >
                        Welcome to
                    </motion.p>

                    {/* Main Title */}
                    <motion.h1
                        className="text-4xl md:text-6xl font-bold tracking-tight"
                        initial={{ opacity: 0, y: 30 }}
                        animate={
                            inView
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: 30 }
                        }
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        IEEE Industry Applications Society{' '}
                        <span className="text-primary">
                            Tunisia Annual Meeting
                        </span>
                    </motion.h1>

                    {/* Edition Number */}
                    <p className="text-2xl md:text-3xl font-semibold">
                        5<sup>th</sup> Edition
                    </p>

                    {/* Event Details */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-muted-foreground">
                        <div className="flex items-center gap-2">
                            <Calendar className="h-5 w-5" />
                            <span>A - B October 2025</span>
                        </div>
                        <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-primary" />
                        <div className="flex items-center gap-2">
                            <MapPin className="h-5 w-5" />
                            <span>Hotel xxx, Sousse, Tunisia</span>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                        <Button size="lg" asChild>
                            <Link href="/register">Register Now</Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild>
                            <Link href="/schedule">View Schedule</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
