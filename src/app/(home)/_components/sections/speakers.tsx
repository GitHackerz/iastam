'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { LinkedinIcon, TwitterIcon } from 'lucide-react';
import DecorativeLines from '@/components/ui/decorative-lines';

const speakers = [
    {
        name: 'Karim Akkari',
        role: 'AI Engineer',
        image: '/images/speakers/karim.jpg',
        social: {
            linkedin: 'https://linkedin.com/in/johndoe',
            twitter: 'https://twitter.com/johndoe',
        },
    },
    {
        name: 'Mohamed El Hedi',
        role: 'AI Engineer',
        image: '/images/speakers/hedi.png',
        social: {
            linkedin: 'https://linkedin.com/in/johndoe',
            twitter: 'https://twitter.com/johndoe',
        },
    },
    {
        name: 'Hichem Fantar',
        role: 'AI Engineer',
        image: '/images/speakers/hichem.jpg',
        social: {
            linkedin: 'https://linkedin.com/in/johndoe',
            twitter: 'https://twitter.com/johndoe',
        },
    },
    {
        name: 'Mounir Frija',
        role: 'AI Engineer',
        image: '/images/speakers/mounir.png',
        social: {
            linkedin: 'https://linkedin.com/in/johndoe',
            twitter: 'https://twitter.com/johndoe',
        },
    },
];

export default function SpeakersSection() {
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
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden z-0">
                <DecorativeLines
                    variant="grid"
                    inView={inView}
                    opacity={0.12}
                    color="var(--primary)"
                />
            </div>

            {/* Animated gradient blobs */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/4 right-12 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-pulse" />
                <div
                    className="absolute bottom-1/3 left-12 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl animate-pulse"
                    style={{ animationDelay: '1s' }}
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
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mx-auto mb-4">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        <span className="text-primary font-medium tracking-wider uppercase text-sm">
                            Experts
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                        Keynote <span className="text-primary">Speakers</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {speakers.map(speaker => (
                        <motion.div
                            key={speaker.name}
                            initial={{ opacity: 0, y: 30 }}
                            animate={
                                inView
                                    ? { opacity: 1, y: 0 }
                                    : { opacity: 0, y: 30 }
                            }
                            transition={{
                                duration: 0.5,
                            }}
                            whileHover={{ y: -8 }}
                            className="group"
                        >
                            <div className="relative overflow-hidden rounded-2xl">
                                <div className="relative aspect-[3/4]">
                                    {/* Gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />

                                    {/* Image */}
                                    <Image
                                        src={speaker.image}
                                        alt={speaker.name}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />

                                    {/* Content */}
                                    <div className="absolute bottom-0 w-full p-6 z-20 transition-all duration-300 transform group-hover:translate-y-0 space-y-2">
                                        <h3 className="text-xl font-semibold text-white group-hover:text-primary transition-colors">
                                            {speaker.name}
                                        </h3>
                                        <p className="text-sm text-white/80 transform opacity-80 group-hover:opacity-100">
                                            {speaker.role}
                                        </p>

                                        {/* Social links */}
                                        <div className="flex gap-3 pt-2 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                            <a
                                                href={speaker.social.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors"
                                            >
                                                <LinkedinIcon className="w-4 h-4 text-white" />
                                            </a>
                                            <a
                                                href={speaker.social.twitter}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors"
                                            >
                                                <TwitterIcon className="w-4 h-4 text-white" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
