'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionHeader from '@/components/ui/section-header';

export default function HostSection() {
    const [sectionRef, inView] = useInView({
        triggerOnce: false,
        threshold: 0.2,
        rootMargin: '-100px 0px',
    });

    return (
        <motion.section
            ref={sectionRef}
            className="py-24 relative"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="container max-w-6xl px-4 mx-auto">
                <SectionHeader
                    subtitle="Host Organization"
                    title="Organized By"
                    inView={inView}
                />

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Logo Side */}
                    <motion.div
                        className="flex flex-col items-center justify-center space-y-8"
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
                        >
                            <Image
                                src="/images/logos/sb.png"
                                alt="IEEE ESPRIT Student Branch"
                                fill
                                className="object-contain"
                            />
                        </motion.div>
                        <motion.div
                            className="relative w-full h-32 max-w-xs"
                            initial={{ opacity: 0, y: 30 }}
                            animate={
                                inView
                                    ? { opacity: 1, y: 0 }
                                    : { opacity: 0, y: 30 }
                            }
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            <Image
                                src="/images/logos/iip.png"
                                alt="IEEE IAS & IES & PES ESPRIT Student Branch Joint Chapters"
                                fill
                                className="object-contain"
                            />
                        </motion.div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        className="space-y-5"
                        initial={{ opacity: 0, x: 50 }}
                        animate={
                            inView
                                ? { opacity: 1, x: 0 }
                                : { opacity: 0, x: 50 }
                        }
                        transition={{ duration: 0.7, delay: 0.4 }}
                    >
                        <motion.h3
                            className="text-xl font-semibold"
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
                            className="space-y-4 text-muted-foreground"
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

                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 pt-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={
                                inView
                                    ? { opacity: 1, y: 0 }
                                    : { opacity: 0, y: 20 }
                            }
                            transition={{ duration: 0.5, delay: 0.8 }}
                        >
                            <Button variant="outline" asChild>
                                <Link
                                    href="https://www.linkedin.com/company/ieee-esprit-student-branch/"
                                    target="_blank"
                                    className="flex items-center gap-2"
                                >
                                    Visit IEEE ESPRIT SB{' '}
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            </Button>
                            <Button variant="outline" asChild>
                                <Link
                                    href="https://www.linkedin.com/company/ieee-ias-ies-pes-esprit-sb-jc/"
                                    target="_blank"
                                    className="flex items-center gap-2"
                                >
                                    Visit Joint Chapters{' '}
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
}
