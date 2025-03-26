'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { Linkedin, Twitter, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const speakersData = [
    {
        name: 'Prof. Sarah Johnson',
        title: 'MIT, USA',
        topic: 'The Future of Smart Grids',
        bio: 'Prof. Sarah Johnson is a leading researcher in power systems and smart grid technologies at MIT. She has published over 100 papers and holds multiple patents in energy management systems.',
        image: '/images/speakers/speaker1.jpg',
        social: {
            linkedin: 'https://linkedin.com/in/example',
            twitter: 'https://twitter.com/example',
            website: 'https://example.com',
        },
    },
    {
        name: 'Dr. James Chen',
        title: 'Cybersecurity Institute, Singapore',
        topic: 'Industrial IoT Security',
        bio: 'Dr. James Chen heads the Industrial Cybersecurity Lab at the Cybersecurity Institute. His work focuses on securing critical infrastructure and industrial control systems against emerging threats.',
        image: '/images/speakers/speaker2.jpg',
        social: {
            linkedin: 'https://linkedin.com/in/example',
            twitter: 'https://twitter.com/example',
        },
    },
    {
        name: 'Prof. Amina Zaki',
        title: 'Energy Research Center, Morocco',
        topic: 'Energy Transition in North Africa',
        bio: 'Prof. Amina Zaki specializes in renewable energy policy and sustainable development. She advises several North African governments on energy transition strategies and regional cooperation.',
        image: '/images/speakers/speaker3.jpg',
        social: {
            linkedin: 'https://linkedin.com/in/example',
            website: 'https://example.com',
        },
    },
    {
        name: 'Dr. Mohammed Farid',
        title: 'Industrial Automation Systems, Tunisia',
        topic: 'Industry 4.0 Implementation in Developing Economies',
        bio: 'Dr. Farid has led numerous industrial automation projects across North Africa and has pioneered affordable Industry 4.0 solutions for small and medium enterprises.',
        image: '/images/speakers/speaker4.jpg',
        social: {
            linkedin: 'https://linkedin.com/in/example',
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {speakersData.map((speaker, index) => (
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
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={speaker.image}
                                    alt={speaker.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
                                <div className="absolute bottom-0 w-full p-4 text-white">
                                    <h3 className="font-bold">
                                        {speaker.name}
                                    </h3>
                                    <p className="text-sm text-white/80">
                                        {speaker.title}
                                    </p>
                                </div>
                            </div>
                            <div className="p-5 space-y-4">
                                <div>
                                    <h4 className="font-semibold text-primary">
                                        Topic:
                                    </h4>
                                    <p className="text-sm">{speaker.topic}</p>
                                </div>
                                <p className="text-sm text-muted-foreground line-clamp-3">
                                    {speaker.bio}
                                </p>
                                <div className="flex gap-2 pt-2">
                                    {speaker.social.linkedin && (
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            asChild
                                            className="rounded-full w-8 h-8 p-0"
                                        >
                                            <Link
                                                href={speaker.social.linkedin}
                                                target="_blank"
                                            >
                                                <Linkedin className="w-4 h-4" />
                                            </Link>
                                        </Button>
                                    )}
                                    {speaker.social.twitter && (
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            asChild
                                            className="rounded-full w-8 h-8 p-0"
                                        >
                                            <Link
                                                href={speaker.social.twitter}
                                                target="_blank"
                                            >
                                                <Twitter className="w-4 h-4" />
                                            </Link>
                                        </Button>
                                    )}
                                    {speaker.social.website && (
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            asChild
                                            className="rounded-full w-8 h-8 p-0"
                                        >
                                            <Link
                                                href={speaker.social.website}
                                                target="_blank"
                                            >
                                                <ExternalLink className="w-4 h-4" />
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
