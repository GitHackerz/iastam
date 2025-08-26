'use client';

import { motion } from 'framer-motion';
import { Timeline } from '@/components/ui/vertical-timeline';
import { phases } from '@/constants/phases';
import SectionHeader from '@/components/ui/section-header';
import { useInView } from 'react-intersection-observer';

export default function TechChallengeTimeline() {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: false,
    });

    return (
        <section 
            ref={ref}
            className="py-24 bg-gradient-to-br from-background via-background to-muted/20 relative overflow-hidden"
        >
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-16" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
            
            <div className="container mx-auto px-4 relative">
                <SectionHeader
                    subtitle="Complete Innovation Journey"
                    title="Tech Challenge Timeline"
                    inView={inView}
                    centered={true}
                />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="max-w-6xl mx-auto"
                >
                    <Timeline items={phases} />
                </motion.div>
            </div>
        </section>
    );
}
