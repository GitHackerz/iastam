'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import DecorativeLines from '@/components/ui/decorative-lines';

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
        <section
            ref={sectionRef}
            className="py-32 relative bg-background overflow-hidden"
        >
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden z-0">
                <DecorativeLines
                    variant="circuit"
                    inView={inView}
                    opacity={0.12}
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

            <div className="container max-w-6xl px-4 mx-auto relative z-10">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={
                        inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }
                    }
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mx-auto mb-4">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        <span className="text-primary font-medium tracking-wider uppercase text-sm">
                            Collaborations
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                        Our <span className="text-primary">Partners</span>
                    </h2>
                </motion.div>

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
                                delay: 0.3 + idx * 0.1,
                            }}
                            whileHover={{ y: -8, scale: 1.02 }}
                        >
                            <div className="relative w-full aspect-video bg-white/5 rounded-xl flex items-center justify-center p-6">
                                <Image
                                    src={partner.logo}
                                    alt={partner.name}
                                    width={150}
                                    height={80}
                                    className="object-contain"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
