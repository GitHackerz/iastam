'use client';

import { motion } from 'framer-motion';
import { Rocket, TrendingUp, Users, Lightbulb } from 'lucide-react';
import AnimatedSection from '@/components/ui/animated-section';
import FloatingCard from '@/components/ui/floating-card';
import MorphingButton from '@/components/ui/morphing-button';
import Link from 'next/link';

const GOOGLE_FORM_URL = 'https://forms.gle/nAWaachAAWgybfPn8'; // replace with real form

export default function StartupsForumHero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />

            {/* Floating Icons */}
            <div className="absolute inset-0 overflow-hidden">
                {[Rocket, TrendingUp, Users, Lightbulb].map((Icon, index) => (
                    <motion.div
                        key={index}
                        className="absolute opacity-10"
                        style={{
                            left: `${20 + index * 20}%`,
                            top: `${15 + index * 15}%`,
                        }}
                        animate={{
                            y: [0, -20, 0],
                            rotate: [0, 10, -10, 0],
                            scale: [1, 1.1, 1],
                        }}
                        transition={{
                            duration: 6 + index,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            delay: index * 0.5,
                        }}
                    >
                        <Icon className="w-16 h-16 text-primary" />
                    </motion.div>
                ))}
            </div>

            <div className="container max-w-6xl px-4 py-32 mx-auto relative z-10">
                <div className="text-center space-y-8 max-w-4xl mx-auto">
                    {/* Badge */}
                    <AnimatedSection animation="fadeInDown" delay={0.2}>
                        <FloatingCard className="inline-flex items-center gap-2 px-5 py-2 bg-primary/8 rounded-full mx-auto shadow-sm">
                            <div className="inline-flex space-x-2">
                                <motion.div
                                    className="w-2.5 h-2.5 rounded-full bg-primary flex-shrink-0 self-center"
                                    animate={{
                                        scale: [1, 1.1, 1],
                                        opacity: [0.6, 1, 0.6],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                    }}
                                />
                                <span className="text-primary font-semibold tracking-wider uppercase text-xs leading-none">
                                    IASTAM 5 EXCLUSIVE
                                </span>
                            </div>
                        </FloatingCard>
                    </AnimatedSection>

                    {/* Main Title */}
                    <AnimatedSection animation="fadeInUp" delay={0.4}>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight">
                            <span className="block bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent">
                                Startups Forum
                            </span>
                            <span className="block text-foreground mt-2">
                                Connect. Innovate. Scale.
                            </span>
                        </h1>
                    </AnimatedSection>

                    {/* Description (realistic for first edition) */}
                    <AnimatedSection animation="fadeInUp" delay={0.6}>
                        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            This first-edition Startups Forum is a focused space
                            for startups to meet IASTAM participants, partner
                            incubators, and a small selection of investors. If
                            you want to introduce your startup and connect with
                            attendees, please apply via the short Form — we will
                            contact selected applicants.
                        </p>
                    </AnimatedSection>

                    {/* Key Features */}
                    <AnimatedSection animation="fadeInUp" delay={0.8}>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                            <FloatingCard className="p-6 text-center">
                                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                                <h3 className="text-lg font-semibold mb-2">
                                    Network with Investors
                                </h3>
                                <p className="text-muted-foreground">
                                    Connect directly with angel investors and
                                    VCs
                                </p>
                            </FloatingCard>
                            <FloatingCard className="p-6 text-center">
                                <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                                <h3 className="text-lg font-semibold mb-2">
                                    Gain Media Exposure
                                </h3>
                                <p className="text-muted-foreground">
                                    Get featured in tech media and publications
                                </p>
                            </FloatingCard>
                            <FloatingCard className="p-6 text-center">
                                <Rocket className="w-12 h-12 text-primary mx-auto mb-4" />
                                <h3 className="text-lg font-semibold mb-2">
                                    Scale Your Business
                                </h3>
                                <p className="text-muted-foreground">
                                    Access mentorship and growth opportunities
                                </p>
                            </FloatingCard>
                        </div>
                    </AnimatedSection>

                    {/* CTA Buttons */}
                    <AnimatedSection animation="fadeInUp" delay={1.0}>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                            <a
                                href={GOOGLE_FORM_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <MorphingButton variant="primary" size="lg">
                                    Apply Now
                                </MorphingButton>
                            </a>
                            <Link href="#benefits">
                                <MorphingButton variant="outline" size="lg">
                                    Learn More
                                </MorphingButton>
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}
