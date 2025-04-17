'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const speakers = [
    {
        name: 'Karim Akkari',
        role: 'AI Engineer',
        image: '/images/speakers/karim.jpg',
        alt: 'Karim Akkari - AI Engineer and Keynote Speaker at IASTAM 5',
        social: {
            linkedin: 'https://linkedin.com/in/johndoe',
            twitter: 'https://twitter.com/johndoe',
        },
    },
    {
        name: 'Mohamed El Hedi',
        role: 'AI Engineer',
        image: '/images/speakers/hedi.png',
        alt: 'Mohamed El Hedi - AI Engineer and Keynote Speaker at IASTAM 5',
        social: {
            linkedin: 'https://linkedin.com/in/johndoe',
            twitter: 'https://twitter.com/johndoe',
        },
    },
    {
        name: 'Hichem Fantar',
        role: 'AI Engineer',
        image: '/images/speakers/hichem.jpg',
        alt: 'Hichem Fantar - AI Engineer and Keynote Speaker at IASTAM 5',
        social: {
            linkedin: 'https://linkedin.com/in/johndoe',
            twitter: 'https://twitter.com/johndoe',
        },
    },
    {
        name: 'Mounir Frija',
        role: 'AI Engineer',
        image: '/images/speakers/mounir.png',
        alt: 'Mounir Frija - AI Engineer and Keynote Speaker at IASTAM 5',
        social: {
            linkedin: 'https://linkedin.com/in/johndoe',
            twitter: 'https://twitter.com/johndoe',
        },
    },
];

export const KeynoteSpeakers = () => {
    const [sectionRef, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    return (
        <section
            id="speakers"
            ref={sectionRef}
            className="py-24 relative overflow-hidden"
        >
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/3 left-10 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl animate-pulse" />
                <div
                    className="absolute bottom-1/3 right-10 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl animate-pulse"
                    style={{ animationDelay: '1.5s' }}
                />
            </div>

            <div className="container max-w-6xl px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                        inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mx-auto mb-4">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        <span className="text-primary font-medium tracking-wider uppercase text-sm">
                            Expert Insights
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                        Keynote <span className="text-primary">Speakers</span>
                    </h2>
                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                        Learn from industry leaders and academic pioneers at the
                        forefront of industrial applications technology
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
                    {speakers.map((speaker, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={
                                inView
                                    ? { opacity: 1, y: 0 }
                                    : { opacity: 0, y: 30 }
                            }
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-border hover:border-primary/30"
                        >
                            <div className="relative h-44 sm:h-48 md:h-56 lg:h-64 overflow-hidden">
                                <Image
                                    src={speaker.image}
                                    alt={speaker.alt}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
                                <div className="absolute bottom-0 w-full p-3 sm:p-4 text-white">
                                    <h3 className="font-bold text-sm sm:text-base">
                                        {speaker.name}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-white/80">
                                        {speaker.role}
                                    </p>
                                </div>
                            </div>
                            <div className="p-3 sm:p-5 space-y-3 sm:space-y-4">
                                <div className="flex gap-2 pt-1 sm:pt-2">
                                    {speaker.social.linkedin && (
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            asChild
                                            className="rounded-full w-7 h-7 sm:w-8 sm:h-8 p-0"
                                        >
                                            <Link
                                                href={speaker.social.linkedin}
                                                target="_blank"
                                            >
                                                <Linkedin className="w-3 h-3 sm:w-4 sm:h-4" />
                                            </Link>
                                        </Button>
                                    )}
                                    {speaker.social.twitter && (
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            asChild
                                            className="rounded-full w-7 h-7 sm:w-8 sm:h-8 p-0"
                                        >
                                            <Link
                                                href={speaker.social.twitter}
                                                target="_blank"
                                            >
                                                <Twitter className="w-3 h-3 sm:w-4 sm:h-4" />
                                            </Link>
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
