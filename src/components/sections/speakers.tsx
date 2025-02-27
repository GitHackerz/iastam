'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { LinkedinIcon, TwitterIcon } from 'lucide-react';

const speakers = [
    {
        name: 'Dr. John Doe',
        role: 'Professor at MIT',
        image: '/images/speakers/speaker1.jpg',
        social: {
            linkedin: 'https://linkedin.com/in/johndoe',
            twitter: 'https://twitter.com/johndoe',
        },
    },
    // Add more speakers
];

export default function SpeakersSection() {
    const [sectionRef, inView] = useInView({
        triggerOnce: false,
        threshold: 0.2,
        rootMargin: '-100px 0px',
    });

    return (
        <section ref={sectionRef} className="py-24">
            <div className="container max-w-6xl px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={
                        inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
                    }
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-primary text-sm tracking-wider uppercase">
                        Experts
                    </span>
                    <h2 className="text-3xl font-bold mt-2">
                        Keynote Speakers
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                            className="group relative overflow-hidden rounded-2xl bg-muted/50"
                        >
                            <div className="relative aspect-[3/4]">
                                <Image
                                    src={speaker.image}
                                    alt={speaker.name}
                                    fill
                                    className="object-cover transition-transform group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            </div>
                            <div className="absolute bottom-0 w-full p-6 space-y-2">
                                <h3 className="text-xl font-semibold text-white">
                                    {speaker.name}
                                </h3>
                                <p className="text-white/80">{speaker.role}</p>
                                <div className="flex gap-4 pt-2">
                                    <a
                                        href={speaker.social.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <LinkedinIcon className="w-5 h-5 text-white/80 hover:text-white" />
                                    </a>
                                    <a
                                        href={speaker.social.twitter}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <TwitterIcon className="w-5 h-5 text-white/80 hover:text-white" />
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
