'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
        <section ref={sectionRef} className="py-24">
            <div className="container max-w-6xl px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={
                        inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
                    }
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-primary text-sm tracking-wider uppercase">
                        Collaborations
                    </span>
                    <h2 className="text-3xl font-bold mt-2">Our Partners</h2>
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
                                delay: inView ? 0.1 * idx : 0,
                            }}
                            className="relative aspect-video bg-muted/50 rounded-xl p-4 flex items-center justify-center"
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
        </section>
    );
}
