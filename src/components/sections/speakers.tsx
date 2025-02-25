'use client';

import Image from 'next/image';
import BlurFade from '@/components/ui/blur-fade';
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
    return (
        <section className="py-24">
            <div className="container px-4 mx-auto">
                <BlurFade>
                    <div className="text-center mb-16">
                        <span className="text-primary text-sm tracking-wider uppercase">
                            Experts
                        </span>
                        <h2 className="text-3xl font-bold mt-2">
                            Keynote Speakers
                        </h2>
                    </div>
                </BlurFade>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {speakers.map((speaker, idx) => (
                        <BlurFade key={speaker.name} delay={0.1 * idx}>
                            <div className="group relative overflow-hidden rounded-2xl bg-muted/50">
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
                                    <p className="text-white/80">
                                        {speaker.role}
                                    </p>
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
                            </div>
                        </BlurFade>
                    ))}
                </div>
            </div>
        </section>
    );
}
