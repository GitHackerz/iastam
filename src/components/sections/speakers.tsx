'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { LinkedinIcon, TwitterIcon } from 'lucide-react';
import SectionHeader from '@/components/ui/section-header';

const speakers = [
    {
        name: 'Karim Akkari',
        role: 'Ai Engineer',
        image: '/images/speakers/karim.jpg',
        social: {
            linkedin: 'https://linkedin.com/in/johndoe',
            twitter: 'https://twitter.com/johndoe',
        },
    },
    {
        name: 'Mohamed El Hedi',
        role: 'Ai Engineer',
        image: '/images/speakers/hedi.png',
        social: {
            linkedin: 'https://linkedin.com/in/johndoe',
            twitter: 'https://twitter.com/johndoe',
        },
    },
    {
        name: 'Hichem Fantar',
        role: 'Ai Engineer',
        image: '/images/speakers/hichem.jpg',
        social: {
            linkedin: 'https://linkedin.com/in/johndoe',
            twitter: 'https://twitter.com/johndoe',
        },
    },
    {
        name: 'Mounir Frija',
        role: 'Ai Engineer',
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
        <section ref={sectionRef} className="py-20 bg-background">
            <div className="container max-w-6xl px-4 mx-auto">
                <SectionHeader
                    subtitle="Experts"
                    title="Keynote Speakers"
                    inView={inView}
                />

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {speakers.map((speaker, idx) => (
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
                                delay: inView ? 0.1 * idx : 0,
                            }}
                            className="group relative overflow-hidden rounded-xl"
                        >
                            <div className="relative aspect-[3/3.5]">
                                <Image
                                    src={speaker.image}
                                    alt={speaker.name}
                                    fill
                                    className="object-cover transition-transform group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            </div>
                            <div className="absolute bottom-0 w-full p-4 space-y-1">
                                <h3 className="text-lg font-semibold text-white">
                                    {speaker.name}
                                </h3>
                                <p className="text-sm text-white/80">
                                    {speaker.role}
                                </p>
                                <div className="flex gap-3 pt-1">
                                    <a
                                        href={speaker.social.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <LinkedinIcon className="w-4 h-4 text-white/80 hover:text-white" />
                                    </a>
                                    <a
                                        href={speaker.social.twitter}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <TwitterIcon className="w-4 h-4 text-white/80 hover:text-white" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
