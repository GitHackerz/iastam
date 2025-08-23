'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import DecorativeLines from '@/components/ui/decorative-lines';
import { partners } from '@/constants/partners';

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
            {/* Enhanced Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden z-0">
                <DecorativeLines
                    variant="circuit"
                    inView={inView}
                    opacity={0.08}
                    color="var(--primary)"
                />
                <div className="absolute inset-0 bg-dots dark:bg-dots opacity-20" />
            </div>

            {/* Enhanced animated gradient blobs */}
            <div className="absolute inset-0 -z-10">
                <motion.div
                    className="absolute top-1/4 right-12 w-96 h-96 bg-gradient-to-br from-primary/15 to-accent/15 rounded-full filter blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
                <motion.div
                    className="absolute bottom-1/3 left-12 w-72 h-72 bg-gradient-to-br from-accent/15 to-secondary/15 rounded-full filter blur-3xl"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 2,
                    }}
                />
            </div>

            <div className="container max-w-6xl px-4 mx-auto relative z-10">
                {/* Enhanced Section header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={
                        inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }
                    }
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <motion.div
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 backdrop-blur-sm rounded-full mx-auto mb-6 border border-primary/20"
                        animate={{
                            scale: [1, 1.02, 1],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    >
                        <motion.span
                            className="w-2 h-2 rounded-full bg-primary"
                            animate={{
                                scale: [1, 1.3, 1],
                                opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                        />
                        <span className="text-primary font-medium tracking-wider uppercase text-sm">
                            Collaborations
                        </span>
                    </motion.div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                        Our{' '}
                        <span className="text-gradient-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                            Partners
                        </span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Working together with leading organizations to drive
                        innovation and excellence in industrial applications
                        technology.
                    </p>
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
                            whileHover={{
                                y: -12,
                                scale: 1.05,
                                transition: { duration: 0.2 },
                            }}
                            className="group"
                        >
                            <div className="relative w-full aspect-video bg-background/95 dark:bg-white/5 backdrop-blur-sm border border-border/30 rounded-xl flex items-center justify-center p-6 overflow-hidden transition-all duration-300 hover:bg-background dark:hover:bg-background/90 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10">
                                {/* Hover gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                {/* Image container */}
                                <div className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                                    <Image
                                        src={partner.logo}
                                        alt={partner.name}
                                        width={150}
                                        height={80}
                                        className="object-contain transition-all duration-300 filter group-hover:brightness-110"
                                    />
                                </div>

                                {/* Decorative corner elements */}
                                <div className="absolute top-2 right-2 w-2 h-2 bg-primary/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="absolute bottom-2 left-2 w-2 h-2 bg-accent/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
