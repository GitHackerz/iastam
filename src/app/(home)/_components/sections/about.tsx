'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import DecorativeLines from '@/components/ui/decorative-lines';

export default function AboutSection() {
    const [sectionRef, inView] = useInView({
        triggerOnce: false,
        threshold: 0.2,
        rootMargin: '-100px 0px',
    });

    return (
        <section ref={sectionRef} className="py-32 relative">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden z-0">
                <DecorativeLines
                    variant="waves"
                    inView={inView}
                    opacity={0.12}
                    color="var(--primary)"
                />
            </div>

            {/* Abstract shapes */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/4 right-12 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-pulse" />
                <div
                    className="absolute bottom-1/3 left-12 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl animate-pulse"
                    style={{ animationDelay: '1s' }}
                />
            </div>

            <div className="container max-w-6xl px-4 mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: -50 }}
                        animate={
                            inView
                                ? { opacity: 1, x: 0 }
                                : { opacity: 0, x: -50 }
                        }
                        transition={{ duration: 0.7 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            <span className="text-primary font-medium tracking-wider uppercase text-sm">
                                About the Event
                            </span>
                        </div>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                            <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/90 bg-clip-text text-transparent">
                                About IAS Technical
                            </span>{' '}
                            <span className="bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent">
                                Annual Meeting
                            </span>{' '}
                            <span className="text-foreground">2025</span>
                        </h2>

                        <div className="space-y-4">
                            <p className="text-lg text-foreground/80 leading-relaxed">
                                The IEEE IAS Technical Annual Meeting (TAM) is a
                                prestigious conference bringing together
                                industry professionals, academics, and
                                researchers in the field of industrial
                                applications of electrical and electronic
                                engineering.
                            </p>

                            <p className="text-muted-foreground leading-relaxed">
                                Join us for an exciting event featuring keynote
                                speeches, panel discussions, technical sessions,
                                and networking opportunities with leaders in the
                                field.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Button size="lg" className="group" asChild>
                                <Link
                                    href="/about"
                                    className="flex items-center gap-2"
                                >
                                    Learn More
                                    <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                </Link>
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="border-primary/20 hover:border-primary"
                                asChild
                            >
                                <Link href="/register">Register Now</Link>
                            </Button>
                        </div>

                        {/* Added stats for visual interest */}
                        <div className="flex flex-wrap gap-8 pt-4">
                            <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                    <span className="text-primary font-bold">
                                        200+
                                    </span>
                                </div>
                                <span>
                                    Attendees
                                    <br />
                                    Expected
                                </span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                    <span className="text-primary font-bold">
                                        50+
                                    </span>
                                </div>
                                <span>
                                    Technical
                                    <br />
                                    Presentations
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={
                            inView
                                ? { opacity: 1, scale: 1 }
                                : { opacity: 0, scale: 0.9 }
                        }
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative h-[450px] w-full rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 bg-background/98 dark:bg-background/85 backdrop-blur-sm border border-border/20">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/8 via-transparent to-transparent z-10" />
                            <Image
                                src="/images/logos/iastam.png"
                                alt="IAS Technical Annual Meeting"
                                fill
                                className="object-contain p-6"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />

                            {/* Decorative elements */}
                            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-xl" />
                            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-xl" />
                        </div>

                        {/* Floating badge */}
                        <div className="absolute -bottom-6 right-8 bg-background/95 dark:bg-background/90 backdrop-blur-sm px-5 py-3 rounded-lg shadow-lg border border-primary/20">
                            <span className="text-sm font-semibold text-foreground">
                                5<sup>th</sup> Edition
                            </span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
