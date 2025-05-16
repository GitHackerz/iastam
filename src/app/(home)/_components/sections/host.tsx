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

    const organizers = [
        {
            name: 'IEEE IAS Tunisia Section',
            logo: '/images/logos/ias-tun.png',
            description:
                'The IEEE Industry Applications Society (IAS) Tunisia Section focuses on advancing electrical and electronic engineering in industrial applications throughout Tunisia, promoting innovation and professional development.',
            website: 'https://ias.ieee.tn',
        },
        {
            name: 'IEEE ESPRIT Student Branch',
            logo: '/images/logos/ieee-esprit.png',
            description:
                'IEEE ESPRIT Student Branch serves as a vibrant hub for engineering students at ESPRIT Engineering School, fostering technological innovation and professional development through various activities and events.',
            website: 'https://esprit.ieee.tn/',
        },
        {
            name: 'IEEE IAS, IES & PES Joint Chapter',
            logo: '/images/logos/iip-esprit.png',
            description:
                'The Joint Chapter combines expertise in industrial applications, industrial electronics, and power systems engineering, creating a collaborative platform for students interested in these specialized fields.',
            website: 'https://ias-ies-pes-esprit.ieee.tn/',
        },
    ];

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
                            Host Organizations
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                        Organized <span className="text-primary">By</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {organizers.map((org, index) => (
                        <motion.div
                            key={org.name}
                            className="bg-card/30 backdrop-blur-sm rounded-xl p-7 border border-primary/10 shadow-lg hover:shadow-primary/10 hover:border-primary/20 transition-all h-full flex flex-col"
                            initial={{ opacity: 0, y: 20 }}
                            animate={
                                inView
                                    ? { opacity: 1, y: 0 }
                                    : { opacity: 0, y: 20 }
                            }
                            transition={{
                                duration: 0.7,
                                delay: 0.2 + index * 0.1,
                            }}
                            whileHover={{
                                y: -5,
                                transition: { duration: 0.3 },
                            }}
                        >
                            <div className="flex flex-col gap-6 h-full">
                                {/* Organization Logo */}
                                <div className="relative h-40 w-full mx-auto mb-2">
                                    <Image
                                        src={org.logo}
                                        alt={org.name}
                                        fill
                                        className="object-contain"
                                    />
                                </div>

                                {/* Organization Info */}
                                <div className="space-y-4 flex-grow">
                                    <h3 className="text-xl font-semibold text-primary text-center">
                                        {org.name}
                                    </h3>
                                    <p className="text-muted-foreground text-sm">
                                        {org.description}
                                    </p>
                                </div>

                                {/* Website Button */}
                                <div>
                                    <Button
                                        variant="outline"
                                        className="group border-primary/20 hover:border-primary w-full hover:bg-primary/5"
                                        asChild
                                    >
                                        <Link
                                            href={org.website}
                                            target="_blank"
                                            className="flex items-center justify-center gap-2"
                                        >
                                            Visit Website{' '}
                                            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
