'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import DecorativeLines from '@/components/ui/decorative-lines';

export default function HostSection() {
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
                    variant="diagonal"
                    inView={inView}
                    opacity={0.12}
                    color="var(--primary)"
                />
            </div>

            {/* Animated gradient blobs */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/4 left-12 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-pulse" />
                <div
                    className="absolute bottom-1/3 right-12 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl animate-pulse"
                    style={{ animationDelay: '1.5s' }}
                />
            </div>

            <div className="container max-w-6xl px-4 mx-auto relative z-10">
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
                            Host Organization
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                        Organized <span className="text-primary">By</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-16 items-center">
                    {/* Logo Side */}
                    <motion.div
                        className="flex flex-col items-center justify-center space-y-10"
                        initial={{ opacity: 0, x: -50 }}
                        animate={
                            inView
                                ? { opacity: 1, x: 0 }
                                : { opacity: 0, x: -50 }
                        }
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <motion.div
                            className="relative w-full h-52 max-w-xs"
                            initial={{ opacity: 0, y: 30 }}
                            animate={
                                inView
                                    ? { opacity: 1, y: 0 }
                                    : { opacity: 0, y: 30 }
                            }
                            transition={{ duration: 0.5, delay: 0.3 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="relative h-full w-full flex items-center justify-center">
                                <Image
                                    src="/images/logos/sb.png"
                                    alt="IEEE ESPRIT Student Branch"
                                    fill
                                    className="object-contain p-4"
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            className="relative w-full h-40 max-w-xs"
                            initial={{ opacity: 0, y: 30 }}
                            animate={
                                inView
                                    ? { opacity: 1, y: 0 }
                                    : { opacity: 0, y: 30 }
                            }
                            transition={{ duration: 0.5, delay: 0.5 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="relative h-full w-full flex items-center justify-center">
                                <Image
                                    src="/images/logos/iip.png"
                                    alt="IEEE IAS & IES & PES ESPRIT Student Branch Joint Chapters"
                                    fill
                                    className="object-contain p-4"
                                />
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0, x: 50 }}
                        animate={
                            inView
                                ? { opacity: 1, x: 0 }
                                : { opacity: 0, x: 50 }
                        }
                        transition={{ duration: 0.7, delay: 0.4 }}
                    >
                        <motion.h3
                            className="text-2xl font-semibold text-primary"
                            initial={{ opacity: 0, y: 20 }}
                            animate={
                                inView
                                    ? { opacity: 1, y: 0 }
                                    : { opacity: 0, y: 20 }
                            }
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            IEEE ESPRIT Student Branch & Joint Chapters
                        </motion.h3>

                        <motion.div
                            className="space-y-4 text-muted-foreground leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={
                                inView
                                    ? { opacity: 1, y: 0 }
                                    : { opacity: 0, y: 20 }
                            }
                            transition={{ duration: 0.5, delay: 0.7 }}
                        >
                            <p>
                                IEEE ESPRIT Student Branch, along with its IAS,
                                IES, and PES Joint Chapters, proudly hosts the
                                5th edition of the IEEE IAS Tunisia Annual
                                Meeting (IASTAM).
                            </p>
                            <p>
                                Established at ESPRIT Engineering School, the
                                Student Branch and its Joint Chapters represent
                                a dynamic community of engineering students
                                passionate about technological innovation and
                                professional development in fields such as power
                                systems, industrial automation, and renewable
                                energy.
                            </p>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            className="flex flex-wrap gap-8 pt-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={
                                inView
                                    ? { opacity: 1, y: 0 }
                                    : { opacity: 0, y: 20 }
                            }
                            transition={{ duration: 0.5, delay: 0.8 }}
                        >
                            <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                    <span className="text-primary font-bold">
                                        50+
                                    </span>
                                </div>
                                <span>
                                    Active
                                    <br />
                                    Members
                                </span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                    <span className="text-primary font-bold">
                                        4+
                                    </span>
                                </div>
                                <span>
                                    Previous
                                    <br />
                                    Editions
                                </span>
                            </div>
                        </motion.div>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 pt-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={
                                inView
                                    ? { opacity: 1, y: 0 }
                                    : { opacity: 0, y: 20 }
                            }
                            transition={{ duration: 0.5, delay: 0.9 }}
                        >
                            <Button
                                variant="outline"
                                className="group border-primary/20 hover:border-primary"
                                asChild
                            >
                                <Link
                                    href="https://www.linkedin.com/company/ieee-esprit-student-branch/"
                                    target="_blank"
                                    className="flex items-center gap-2"
                                >
                                    Visit IEEE ESPRIT SB{' '}
                                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                </Link>
                            </Button>
                            <Button
                                variant="outline"
                                className="group border-primary/20 hover:border-primary"
                                asChild
                            >
                                <Link
                                    href="https://www.linkedin.com/company/ieee-ias-ies-pes-esprit-sb-jc/"
                                    target="_blank"
                                    className="flex items-center gap-2"
                                >
                                    Visit Joint Chapters{' '}
                                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                </Link>
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
