'use client';

import {
    Calendar,
    MapPin,
    CircuitBoard,
    Cpu,
    Waves,
    ChevronDown,
    Sparkles,
    Zap,
} from 'lucide-react';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import DecorativeLines from '@/components/ui/decorative-lines';
import { motion, useScroll, useTransform } from 'framer-motion';
import AnimatedSection from '@/components/ui/animated-section';
import FloatingCard from '@/components/ui/floating-card';
import MorphingButton from '@/components/ui/morphing-button';
import { useEffect, useState } from 'react';

export default function HeroSection() {
    const [sectionRef, inView] = useInView({
        triggerOnce: false,
        threshold: 0.2,
    });

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 300], [0, -50]);
    const y2 = useTransform(scrollY, [0, 300], [0, -100]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 100,
                y: (e.clientY / window.innerHeight) * 100,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
        >
            {/* Dynamic Background with Mouse Interaction */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    className="absolute inset-0 bg-mesh opacity-30"
                    style={{
                        background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, hsl(var(--primary) / 0.2) 0%, transparent 50%)`,
                    }}
                />
                <DecorativeLines
                    variant="diagonal"
                    inView={inView}
                    opacity={0.15}
                    color="var(--primary)"
                />
            </div>

            {/* Floating particles */}
            <div className="absolute inset-0 z-10">
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-primary/30 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -20, 0],
                            opacity: [0.3, 0.8, 0.3],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            {/* Enhanced animated gradient blobs */}
            <motion.div className="absolute inset-0 -z-10" style={{ opacity }}>
                <motion.div
                    className="absolute top-1/4 right-12 w-96 h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full filter blur-3xl"
                    style={{ y: y1 }}
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
                <motion.div
                    className="absolute bottom-1/3 left-12 w-72 h-72 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-full filter blur-3xl"
                    style={{ y: y2 }}
                    animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, -90, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 1,
                    }}
                />
            </motion.div>

            {/* Enhanced Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden z-10">
                {/* Animated Circuit Elements */}
                <motion.div
                    className="absolute -right-20 -top-20 w-[400px] h-[400px] opacity-10"
                    animate={{
                        rotate: [0, 360],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                >
                    <CircuitBoard className="w-full h-full text-primary" />
                </motion.div>

                <motion.div
                    className="absolute -left-16 -bottom-16 w-[300px] h-[300px] opacity-10"
                    animate={{
                        rotate: [360, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                >
                    <Cpu className="w-full h-full text-primary" />
                </motion.div>

                {/* Enhanced Floating Elements */}
                <motion.div
                    className="absolute top-1/4 left-1/4"
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 5, -5, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                >
                    <Waves className="w-24 h-24 text-primary opacity-20" />
                </motion.div>

                <motion.div
                    className="absolute bottom-1/4 right-1/3"
                    animate={{
                        y: [0, -15, 0],
                        rotate: [0, -10, 10, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 2,
                    }}
                >
                    <Sparkles className="w-16 h-16 text-primary opacity-20" />
                </motion.div>

                <motion.div
                    className="absolute top-1/2 right-1/4"
                    animate={{
                        y: [0, -25, 0],
                        rotate: [0, 15, -15, 0],
                        scale: [1, 1.3, 1],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 4,
                    }}
                >
                    <Zap className="w-20 h-20 text-primary opacity-20" />
                </motion.div>
            </div>

            {/* Content Container */}
            <div className="container max-w-6xl px-4 py-32 mx-auto relative z-20">
                <div className="text-center space-y-8 max-w-4xl mx-auto">
                    {/* Pre-title badge with enhanced animation */}
                    <AnimatedSection animation="fadeInDown" delay={0.2}>
                        <FloatingCard className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mx-auto backdrop-blur-sm">
                            <motion.span
                                className="w-2 h-2 rounded-full bg-primary"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.5, 1, 0.5],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                            />
                            <span className="text-primary font-medium tracking-wider uppercase text-sm">
                                Welcome to
                            </span>
                        </FloatingCard>
                    </AnimatedSection>

                    {/* Main Title with enhanced typography */}
                    <AnimatedSection animation="fadeInUp" delay={0.4}>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                            <span className="block bg-gradient-to-r from-foreground via-foreground to-foreground/90 bg-clip-text text-transparent">
                                IEEE Industry Applications Society
                            </span>
                            <motion.span
                                className="block bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent mt-2"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                            >
                                Tunisia Annual Meeting
                            </motion.span>
                        </h1>
                    </AnimatedSection>

                    {/* Edition Number with floating effect */}
                    <AnimatedSection animation="scaleIn" delay={0.6}>
                        <FloatingCard
                            className="inline-flex px-6 py-3 bg-primary/5 border border-primary/20 rounded-full"
                            glowEffect
                        >
                            <p className="text-2xl md:text-3xl font-semibold text-foreground">
                                5<sup>th</sup> Edition
                            </p>
                        </FloatingCard>
                    </AnimatedSection>

                    {/* Event Details with staggered animation */}
                    <AnimatedSection animation="fadeInUp" delay={0.8}>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-muted-foreground">
                            <motion.div
                                className="flex items-center gap-2"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Calendar className="h-5 w-5 text-primary" />
                                <span>October 3-5, 2025</span>
                            </motion.div>
                            <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                            <motion.div
                                className="flex items-center gap-2"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.2 }}
                            >
                                <MapPin className="h-5 w-5 text-primary" />
                                <span>Hammamet Garden Resort & Spa</span>
                            </motion.div>
                        </div>
                    </AnimatedSection>

                    {/* Enhanced CTA Buttons */}
                    <AnimatedSection animation="fadeInUp" delay={1.0}>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                            <Link href="https://forms.gle/H6NNPaL1b8MtDXiG9">
                                <MorphingButton
                                    variant="primary"
                                    size="lg"
                                    className="group flex items-center justify-center gap-2"
                                >
                                    Register Now
                                    <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
                                </MorphingButton>
                            </Link>
                            <Link href="/startups-forum">
                                <MorphingButton
                                    variant="outline"
                                    size="lg"
                                    className="border-primary/20 hover:border-primary"
                                >
                                    Join Startups Forum
                                </MorphingButton>
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </div>

            {/* Enhanced scroll indicator */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20"
            >
                <span className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                    Scroll to discover
                </span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                >
                    <ChevronDown className="h-4 w-4 text-primary" />
                </motion.div>
            </motion.div>
        </section>
    );
}
