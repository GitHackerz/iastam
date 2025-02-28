'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionHeader from '@/components/ui/section-header';

const partners = [
    { name: 'Partner 1', logo: '/images/partners/partner1.png' },
    { name: 'Partner 2', logo: '/images/partners/partner2.png' },
    // Add more partners
];

export default function PartnersSection() {
    const [sectionRef, inView] = useInView({
        triggerOnce: false,
        threshold: 0.2,
        rootMargin: '-100px 0px',
    });

    return (
        <motion.section
            ref={sectionRef}
            className="py-24 bg-background relative"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="container max-w-6xl px-4 mx-auto">
                <SectionHeader
                    subtitle="Collaborations"
                    title="Our Partners"
                    inView={inView}
                />

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {partners.map((partner, idx) => (
                        <motion.div
                            key={partner.name}
                            initial={{ opacity: 0, y: 30 }}
                            animate={
                                inView
                                    ? { opacity: 1, y: 0 }
                                    : { opacity: 0, y: 30 }
                            }
                            transition={{
                                duration: 0.5,
                                delay: inView ? 0.1 * idx : 0,
                            }}
                            className="relative aspect-video rounded-xl p-4 flex items-center justify-center"
                            whileHover={{ scale: 1.05 }}
                        >
                            <Image
                                src={partner.logo}
                                alt={partner.name}
                                width={150}
                                height={80}
                                className="object-contain"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}
