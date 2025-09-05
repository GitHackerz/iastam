'use client';

import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import AnimatedSection from '@/components/ui/animated-section';
import FloatingCard from '@/components/ui/floating-card';
import MorphingButton from '@/components/ui/morphing-button';
import { challengeStats, challengePhases } from '@/constants/tech-challenge';

// data imported from src/constants/tech-challenge

export default function TechChallengeSection() {
    return (
        <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
            <div className="container max-w-7xl px-4 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div>
                        <AnimatedSection animation="fadeInLeft" delay={0.2}>
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                                <motion.div
                                    className="w-2 h-2 rounded-full bg-primary"
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [0.5, 1, 0.5],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                    }}
                                />
                                <span className="text-primary font-medium tracking-wider uppercase text-sm">
                                    Tech Challenge 2025
                                </span>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection animation="fadeInLeft" delay={0.4}>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                                Compete in Our{' '}
                                <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                                    Innovation Challenge
                                </span>
                            </h2>
                        </AnimatedSection>

                        <AnimatedSection animation="fadeInLeft" delay={0.6}>
                            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                                Join the most exciting tech challenge in
                                Tunisia! Develop innovative solutions, compete
                                with brilliant minds, and win substantial prizes
                                while showcasing your skills to industry leaders
                                and potential employers.
                            </p>
                        </AnimatedSection>

                        <AnimatedSection animation="fadeInLeft" delay={0.8}>
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                {challengeStats.map(stat => (
                                    <motion.div
                                        key={stat.label}
                                        className="text-center p-4 bg-background/50 rounded-lg border border-border/50"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                                        <div className="text-2xl font-bold text-foreground mb-1">
                                            {stat.value}
                                        </div>
                                        <div className="text-sm text-muted-foreground">
                                            {stat.label}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </AnimatedSection>

                        <AnimatedSection animation="fadeInLeft" delay={1.0}>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/tech-challenge">
                                    <MorphingButton
                                        variant="primary"
                                        size="lg"
                                        className="group"
                                    >
                                        Join Challenge
                                        <ChevronRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                                    </MorphingButton>
                                </Link>
                                <Link href="/tech-challenge#timeline">
                                    <MorphingButton variant="outline" size="lg">
                                        View Timeline
                                    </MorphingButton>
                                </Link>
                            </div>
                        </AnimatedSection>
                    </div>

                    {/* Visual */}
                    <div className="relative">
                        <AnimatedSection animation="fadeInRight" delay={0.4}>
                            <FloatingCard className="relative overflow-hidden">
                                {/* Challenge Timeline Preview */}
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold mb-6">
                                        Challenge Phases
                                    </h3>
                                    <div className="space-y-4">
                                        {challengePhases.map(item => (
                                            <div
                                                key={item.phase}
                                                className="flex items-center gap-4 p-3 rounded-lg bg-background/50"
                                            >
                                                <div
                                                    className={`w-3 h-3 rounded-full ${
                                                        item.status ===
                                                        'completed'
                                                            ? 'bg-green-500'
                                                            : item.status ===
                                                                'active'
                                                              ? 'bg-primary animate-pulse'
                                                              : 'bg-muted-foreground/30'
                                                    }`}
                                                />
                                                <div className="flex-1">
                                                    <div className="font-medium">
                                                        {item.phase}
                                                    </div>
                                                    <div className="text-sm text-muted-foreground">
                                                        {item.date}
                                                    </div>
                                                </div>
                                                {item.status === 'active' && (
                                                    <div className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                                                        Active
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Decorative Elements */}
                                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl" />
                                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-xl" />
                            </FloatingCard>
                        </AnimatedSection>
                    </div>
                </div>
            </div>
        </section>
    );
}
