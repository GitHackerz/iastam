'use client';

import { motion } from 'framer-motion';
import { Building2, Target, Users2, Briefcase } from 'lucide-react';
import AnimatedSection from '@/components/ui/animated-section';
import FloatingCard from '@/components/ui/floating-card';

const investors = [
    {
        type: 'Angel Investors',
        icon: Users2,
        description:
            'Individual investors and mentors available for introductory conversations during the forum.',
    },
    {
        type: 'Venture Capital Firms',
        icon: Building2,
        description:
            'VC firms open to learning about early-stage innovation and meeting founders.',
    },
    {
        type: 'Corporate VCs',
        icon: Briefcase,
        description:
            'Corporate partners interested in potential strategic collaborations.',
    },
    {
        type: 'Incubators & Accelerators',
        icon: Target,
        description:
            'Incubators and accelerators looking to connect with promising founders for mentorship and support.',
    },
];

export default function InvestorsSection() {
    return (
        <section className="py-24 bg-primary/5">
            <div className="container max-w-7xl px-4 mx-auto">
                <AnimatedSection animation="fadeInUp" delay={0.2}>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Meet Our{' '}
                            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                                Investors & Partners
                            </span>
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Connect with a diverse ecosystem of investors,
                            incubators, and industry leaders who are actively
                            seeking innovative startups to support and fund.
                        </p>
                    </div>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {investors.map((investor, index) => (
                        <AnimatedSection
                            key={investor.type}
                            animation="fadeInUp"
                            delay={0.1 * index}
                        >
                            <FloatingCard className="p-6 text-center h-full">
                                <motion.div
                                    className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"
                                    whileHover={{ scale: 1.1, rotate: 10 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <investor.icon className="w-8 h-8 text-primary" />
                                </motion.div>
                                <h3 className="text-lg font-semibold mb-3">
                                    {investor.type}
                                </h3>
                                <p className="text-muted-foreground text-sm">
                                    {investor.description}
                                </p>
                            </FloatingCard>
                        </AnimatedSection>
                    ))}
                </div>

                <AnimatedSection animation="fadeInUp" delay={0.8}>
                    <div className="mt-16 text-center">
                        <FloatingCard className="inline-block p-8 bg-gradient-to-r from-primary/10 to-accent/10">
                            <h3 className="text-2xl font-bold mb-4">
                                Ready to pitch your startup?
                            </h3>
                            <p className="text-muted-foreground mb-6 max-w-2xl">
                                Join our exclusive forum and get the opportunity
                                to present your startup to investors who can
                                accelerate your growth and success.
                            </p>
                            <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                                    <span>Direct Access</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                                    <span>Expert Mentorship</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                                    <span>Funding Opportunities</span>
                                </div>
                            </div>
                        </FloatingCard>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
