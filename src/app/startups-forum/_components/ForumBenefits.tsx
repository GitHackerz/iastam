'use client';

import { motion } from 'framer-motion';
import {
    Users,
    DollarSign,
    TrendingUp,
    Award,
    Handshake,
    Globe,
} from 'lucide-react';
import AnimatedSection from '@/components/ui/animated-section';
import FloatingCard from '@/components/ui/floating-card';

const benefits = [
    {
        icon: Users,
        title: 'Introductory Meetings',
        description:
            'Short, focused conversations with interested investors and partners during the forum.',
    },
    {
        icon: DollarSign,
        title: 'Discovery Opportunities',
        description:
            'A chance to introduce your startup to potential supporters and receive feedback.',
    },
    {
        icon: TrendingUp,
        title: 'Visibility',
        description:
            'Showcase your project to conference attendees and participating partners.',
    },
    {
        icon: Award,
        title: 'Recognition',
        description:
            'Opportunities for mentions and small recognitions during the event program.',
    },
    {
        icon: Handshake,
        title: 'Partnership Introductions',
        description:
            'Connect with incubators and organizations offering mentorship or support.',
    },
    {
        icon: Globe,
        title: 'Media Opportunities',
        description:
            'Potential exposure through conference channels and partner media.',
    },
];

export default function ForumBenefits() {
    return (
        <section id="benefits" className="py-24 bg-background">
            <div className="container max-w-7xl px-4 mx-auto">
                <AnimatedSection animation="fadeInUp" delay={0.2}>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Why Join Our{' '}
                            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                                Startups Forum?
                            </span>
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Our forum offers unparalleled opportunities for
                            startups to grow, connect, and thrive in the
                            competitive tech landscape.
                        </p>
                    </div>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <AnimatedSection
                            key={benefit.title}
                            animation="fadeInUp"
                            delay={0.1 * index}
                        >
                            <FloatingCard className="p-6 h-full">
                                <div className="flex items-start space-x-4">
                                    <motion.div
                                        className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center"
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <benefit.icon className="w-6 h-6 text-primary" />
                                    </motion.div>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-2">
                                            {benefit.title}
                                        </h3>
                                        <p className="text-muted-foreground">
                                            {benefit.description}
                                        </p>
                                    </div>
                                </div>
                            </FloatingCard>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}
