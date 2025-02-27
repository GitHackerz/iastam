'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function HostSection() {
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
                        Host Organization
                    </span>
                    <h2 className="text-3xl font-bold mt-2">Organized By</h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Logo Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={
                            inView
                                ? { opacity: 1, x: 0 }
                                : { opacity: 0, x: -50 }
                        }
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col items-center justify-center space-y-6"
                    >
                        <div className="relative w-full h-52 max-w-xs">
                            <Image
                                src="/images/ieee-esprit-sb-logo.png"
                                alt="IEEE ESPRIT Student Branch"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="relative w-full h-32 max-w-xs">
                            <Image
                                src="/images/ieee-esprit-joint-chapters-logo.png"
                                alt="IEEE IAS & IES & PES ESPRIT Student Branch Joint Chapters"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={
                            inView
                                ? { opacity: 1, x: 0 }
                                : { opacity: 0, x: 50 }
                        }
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-5"
                    >
                        <h3 className="text-xl font-semibold">
                            IEEE ESPRIT Student Branch & Joint Chapters
                        </h3>
                        <div className="space-y-4 text-muted-foreground">
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
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
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
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
