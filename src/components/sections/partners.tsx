'use client';

import Image from 'next/image';
import BlurFade from '@/components/ui/blur-fade';
import { motion } from 'framer-motion';

const partners = [
    { name: 'Partner 1', logo: '/images/partners/partner1.png' },
    { name: 'Partner 2', logo: '/images/partners/partner2.png' },
    // Add more partners
];

export default function PartnersSection() {
    return (
        <section className="py-24">
            <div className="container px-4 mx-auto">
                <BlurFade>
                    <div className="text-center mb-16">
                        <span className="text-primary text-sm tracking-wider uppercase">
                            Collaborations
                        </span>
                        <h2 className="text-3xl font-bold mt-2">
                            Our Partners
                        </h2>
                    </div>
                </BlurFade>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {partners.map((partner, idx) => (
                        <BlurFade key={partner.name} delay={0.1 * idx}>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="relative aspect-video bg-muted/50 rounded-xl p-4 flex items-center justify-center"
                            >
                                <Image
                                    src={partner.logo}
                                    alt={partner.name}
                                    width={150}
                                    height={80}
                                    className="object-contain"
                                />
                            </motion.div>
                        </BlurFade>
                    ))}
                </div>
            </div>
        </section>
    );
}
