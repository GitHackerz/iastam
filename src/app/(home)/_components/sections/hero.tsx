'use client';

import { Button } from '@/components/ui/button';
import {
    Calendar,
    MapPin,
    CircuitBoard,
    Cpu,
    Waves,
    ChevronDown,
} from 'lucide-react';
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
                    opacity={0.15}
                    color="var(--primary)"
                />
            </div>

            {/* Additional decorative circuit lines for tech feeling */}
            <div className="absolute top-1/4 right-0 w-1/3 h-1/3 z-0">
                <DecorativeLines
                    variant="circuit"
                    inView={inView}
                    opacity={0.25}
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

            {/* Decorative Elements */}
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

            {/* Content Container */}
            <div className="container max-w-6xl px-4 py-32 mx-auto relative z-20">
                <div className="text-center space-y-8 max-w-4xl mx-auto">
                    {/* Pre-title badge */}
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
                            Welcome to
                        </span>
                    </motion.div>

                    {/* Main Title */}
                    <motion.h1
                        className="text-4xl md:text-6xl font-bold tracking-tight leading-tight"
                        initial={{ opacity: 0, y: 30 }}
                        animate={
                            inView
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: 30 }
                        }
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        IEEE Industry Applications Society{' '}
                        <span className="text-primary block md:inline">
                            Tunisia Annual Meeting
                        </span>
                    </motion.h1>

                    {/* Edition Number */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={
                            inView
                                ? { opacity: 1, scale: 1 }
                                : { opacity: 0, scale: 0.9 }
                        }
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="inline-flex px-6 py-3 bg-primary/5 border border-primary/20 rounded-full"
                    >
                        <p className="text-2xl md:text-3xl font-semibold">
                            5<sup>th</sup> Edition
                        </p>
                    </motion.div>

                    {/* Event Details */}
                    <motion.div
                        className="flex flex-col md:flex-row items-center justify-center gap-4 text-muted-foreground"
                        initial={{ opacity: 0, y: 20 }}
                        animate={
                            inView
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: 20 }
                        }
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <div className="flex items-center gap-2">
                            <Calendar className="h-5 w-5 text-primary" />
                            <span>October 4-6, 2025</span>
                        </div>
                        <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-primary" />
                        <div className="flex items-center gap-2">
                            <MapPin className="h-5 w-5 text-primary" />
                            <span>Hotel Royal, Hammamet, Tunisia</span>
                        </div>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={
                            inView
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: 20 }
                        }
                        transition={{ duration: 0.6, delay: 0.8 }}
                    >
                        <Button size="lg" className="group" asChild>
                            <Link
                                href="/register"
                                className="flex items-center justify-center gap-2"
                            >
                                Register Now
                                <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
                            </Link>
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-primary/20 hover:border-primary"
                            asChild
                        >
                            <Link href="/schedule">View Schedule</Link>
                        </Button>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20"
            >
                <span className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                    Scroll to discover
                </span>
                <ChevronDown className="h-4 w-4 text-primary animate-bounce" />
            </motion.div>
        </section>
    );
}
