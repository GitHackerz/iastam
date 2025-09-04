'use client';

import { motion } from 'framer-motion';
import { Rocket, TrendingUp, Users, DollarSign } from 'lucide-react';
import Link from 'next/link';
import AnimatedSection from '@/components/ui/animated-section';
import FloatingCard from '@/components/ui/floating-card';
import MorphingButton from '@/components/ui/morphing-button';

const forumHighlights = [
    {
        icon: Users,
        title: 'Network with Investors',
        description: 'Connect directly with 20+ angel investors and VCs.',
    },
    {
        icon: TrendingUp,
        title: 'Media Exposure',
        description: 'Get featured in tech publications and social media.',
    },
    {
        icon: DollarSign,
        title: 'Funding Opportunities',
        description: 'Access to seed funding and growth capital.',
    },
];

export default function StartupsForumSection() {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_hsl(var(--primary)_/_0.1)_0%,_transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_hsl(var(--accent)_/_0.1)_0%,_transparent_50%)]" />
            </div>

            <div className="container max-w-7xl px-4 mx-auto relative z-10">
                <div className="text-center mb-12">
                    <AnimatedSection animation="fadeInUp" delay={0.2}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
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
                                Startups Forum (first edition)
                            </span>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection animation="fadeInUp" delay={0.4}>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                            Join our on-site forum to meet attendees,
                            incubators, and partner investors
                        </h2>
                    </AnimatedSection>

                    <AnimatedSection animation="fadeInUp" delay={0.6}>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            This is a small, focused opportunity for startups to
                            introduce themselves to conference attendees and
                            selected partners — no large promises, just real
                            introductions and networking.
                        </p>
                    </AnimatedSection>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Features */}
                    <div>
                        <AnimatedSection animation="fadeInLeft" delay={0.8}>
                            <div className="space-y-4">
                                {forumHighlights.map(highlight => (
                                    <div
                                        key={highlight.title}
                                        className="flex items-start gap-4 p-3 rounded-lg bg-background/50 border border-border/50"
                                    >
                                        <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                            <highlight.icon className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="text-md font-semibold mb-1">
                                                {highlight.title}
                                            </h3>
                                            <p className="text-muted-foreground text-sm">
                                                {highlight.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </AnimatedSection>

                        <AnimatedSection animation="fadeInLeft" delay={1.2}>
                            <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/20">
                                <div className="flex items-center gap-3 mb-4">
                                    <Rocket className="w-6 h-6 text-primary" />
                                    <h3 className="text-xl font-semibold">
                                        Why Join?
                                    </h3>
                                </div>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                                        Direct access to angel investors and VCs
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                                        Featured in tech media and publications
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                                        Connect with incubators and accelerators
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                                        Networking with industry leaders
                                    </li>
                                </ul>
                            </div>
                        </AnimatedSection>
                    </div>

                    {/* Visual/CTA */}
                    <div>
                        <AnimatedSection animation="fadeInRight" delay={1.0}>
                            <FloatingCard className="relative p-8 text-center bg-gradient-to-br from-primary/5 to-accent/5">
                                {/* Stats */}
                                <div className="mb-6">
                                    <h3 className="text-xl font-semibold mb-2">
                                        Interested?
                                    </h3>
                                    <p className="text-muted-foreground mb-4">
                                        If you&apos;re a startup and would like
                                        to join the forum, click through to the
                                        Startups Forum page for details and the
                                        short application form.
                                    </p>

                                    <div className="flex gap-4 justify-center">
                                        <Link href="/startups-forum">
                                            <MorphingButton
                                                variant="primary"
                                                size="md"
                                            >
                                                Learn more & apply
                                            </MorphingButton>
                                        </Link>
                                    </div>
                                </div>

                                {/* Decorative elements */}
                                <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-full blur-xl" />
                                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-accent/20 rounded-full blur-xl" />
                            </FloatingCard>
                        </AnimatedSection>
                    </div>
                </div>
            </div>
        </section>
    );
}
