'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';

const sponsorLevels = [
    {
        level: 'Diamond',
        sponsors: [
            { name: 'Sponsor 1', logo: '/images/sponsors/sponsor1.png' },
            // Add more sponsors
        ],
    },
    {
        level: 'Gold',
        sponsors: [
            { name: 'Sponsor 2', logo: '/images/sponsors/sponsor2.png' },
            // Add more sponsors
        ],
    },
    // Add more levels
];

export default function SponsorsSection() {
    const [sectionRef, inView] = useInView({
        triggerOnce: false,
        threshold: 0.2,
        rootMargin: '-100px 0px',
    });

    return (
        <section ref={sectionRef} className="py-24 bg-muted/50">
            <div className="container max-w-6xl px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={
                        inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
                    }
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-primary text-sm tracking-wider uppercase">
                        Support
                    </span>
                    <h2 className="text-3xl font-bold mt-2">Our Sponsors</h2>
                </motion.div>

                <div className="space-y-16">
                    {sponsorLevels.map((level, idx) => (
                        <motion.div
                            key={level.level}
                            initial={{
                                opacity: 0,
                                x: idx % 2 === 0 ? -50 : 50,
                            }}
                            animate={
                                inView
                                    ? { opacity: 1, x: 0 }
                                    : {
                                          opacity: 0,
                                          x: idx % 2 === 0 ? -50 : 50,
                                      }
                            }
                            transition={{
                                duration: 0.6,
                                delay: inView ? 0.2 * idx : 0,
                            }}
                            className="space-y-6"
                        >
                            <h3 className="text-xl font-semibold text-center">
                                {level.level}
                            </h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                                {level.sponsors.map(sponsor => (
                                    <motion.div
                                        key={sponsor.name}
                                        whileHover={{ scale: 1.03 }}
                                        className="bg-background rounded-xl p-6 flex items-center justify-center"
                                    >
                                        <Image
                                            src={sponsor.logo}
                                            alt={sponsor.name}
                                            width={180}
                                            height={100}
                                            className="object-contain"
                                        />
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={
                        inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                    }
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-16"
                >
                    <Button size="lg">Become a Sponsor</Button>
                </motion.div>
            </div>
        </section>
    );
}
