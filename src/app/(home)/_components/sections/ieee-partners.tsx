'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import DecorativeLines from '@/components/ui/decorative-lines';
import { ieeePartners } from '@/constants/sponsors';

export default function IEEEPartnersSection() {
    const [sectionRef, inView] = useInView({
        triggerOnce: false,
        threshold: 0.2,
        rootMargin: '-100px 0px',
    });

    return (
        <section ref={sectionRef} className="py-32 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden z-0">
                <DecorativeLines
                    variant="grid"
                    inView={inView}
                    opacity={0.15}
                    color="rgb(37, 99, 235)"
                />
            </div>

            {/* Animated gradient blobs */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/4 right-12 w-96 h-96 bg-blue-600/10 rounded-full filter blur-3xl animate-pulse" />
                <div
                    className="absolute bottom-1/3 left-12 w-72 h-72 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse"
                    style={{ animationDelay: '1.5s' }}
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
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/10 rounded-full mx-auto mb-4">
                        <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                        <span className="text-blue-600 font-medium tracking-wider uppercase text-sm">
                            IEEE# Partners
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                        IEEE <span className="text-blue-600">Partners</span>
                    </h2>
                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                        In collaboration with IEEE organizations worldwide
                    </p>
                </motion.div>

                {/* IEEE Partners Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={
                        inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                    }
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6"
                >
                    {ieeePartners.map((partner, idx) => (
                        <motion.div
                            key={partner.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={
                                inView
                                    ? { opacity: 1, scale: 1 }
                                    : { opacity: 0, scale: 0.8 }
                            }
                            transition={{
                                duration: 0.5,
                                delay: inView ? 0.1 * idx : 0,
                            }}
                            whileHover={{
                                y: -12,
                                scale: 1.05,
                                transition: { duration: 0.3 },
                            }}
                            className="group"
                        >
                            <div className="relative w-full aspect-video bg-gradient-to-br from-blue-600/5 to-blue-600/10 rounded-xl flex items-center justify-center p-4 border border-blue-600/10 group-hover:border-blue-600/30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-600/20">
                                <Image
                                    src={partner.logo}
                                    alt={partner.name}
                                    width={120}
                                    height={80}
                                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                                />
                            </div>
                            <p className="text-center mt-2 text-xs text-muted-foreground group-hover:text-blue-600 transition-colors duration-300">
                                {partner.name}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
