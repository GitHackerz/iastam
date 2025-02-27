'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function AboutSection() {
    const [sectionRef, inView] = useInView({
        triggerOnce: false,
        threshold: 0.2,
        rootMargin: '-100px 0px',
    });

    return (
        <section ref={sectionRef} className="py-24 bg-muted/50">
            <div className="container max-w-6xl px-4 mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Logo Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={
                            inView
                                ? { opacity: 1, x: 0 }
                                : { opacity: 0, x: -50 }
                        }
                        transition={{ duration: 0.6 }}
                        className="relative aspect-square w-full max-w-md mx-auto"
                    >
                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-primary/0 animate-pulse" />
                        <Image
                            src="/images/ias-tam-logo.png"
                            alt="IAS TAM Logo"
                            fill
                            className="object-contain p-8"
                            priority
                        />
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={
                            inView
                                ? { opacity: 1, x: 0 }
                                : { opacity: 0, x: 50 }
                        }
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl font-bold tracking-tight">
                            About IAS TAM 2025
                        </h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>
                                The IEEE IAS Tunisia Annual Meeting (IAS-TAM)
                                serves as a premier platform for industry
                                professionals, academics, and researchers in the
                                field of industrial applications.
                            </p>
                            <p>
                                Now in its 5th edition, IAS-TAM continues to
                                foster innovation and collaboration in various
                                domains including:
                            </p>
                            <ul className="grid grid-cols-2 gap-2 list-disc list-inside">
                                <li>Power Systems</li>
                                <li>Industrial Automation</li>
                                <li>Electric Machines</li>
                                <li>Robotics</li>
                                <li>Smart Grid</li>
                                <li>Renewable Energy</li>
                            </ul>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Button asChild>
                                <Link href="/about">Learn More</Link>
                            </Button>
                            <Button variant="outline" asChild>
                                <Link href="/papers">Submit Paper</Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
