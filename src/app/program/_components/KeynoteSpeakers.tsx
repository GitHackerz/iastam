'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Linkedin, Twitter } from 'lucide-react';
import { keynoteSpeakers } from '@/constants/speakers';
import AnimatedSection from '@/components/ui/animated-section';
import SectionHeader from '@/components/ui/section-header';
import Image from 'next/image';
import Link from 'next/link';

export const KeynoteSpeakers = () => {
    const [sectionRef, inView] = useInView({
        triggerOnce: false,
        threshold: 0.2,
    });

    return (
        <section
            id="keynote-speakers"
            ref={sectionRef}
            className="py-24 relative overflow-hidden bg-gradient-to-br from-background via-muted/10 to-background"
        >
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-16" />

            <div className="container max-w-6xl px-4 mx-auto relative">
                <SectionHeader
                    subtitle="Featured Speakers"
                    title="Keynote Speakers"
                    inView={inView}
                    centered={true}
                />

                <AnimatedSection animation="fadeInUp" delay={0.3}>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-center mb-16">
                        Join us for inspiring presentations from leading experts
                        in automation, systems, and applied mathematics.
                    </p>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center place-items-center">
                    {keynoteSpeakers.map((speaker, index) => (
                        <AnimatedSection
                            key={speaker.name}
                            animation="fadeInUp"
                            delay={index * 0.1 + 0.5}
                            className="w-full max-w-sm mx-auto flex justify-center"
                        >
                            <motion.div
                                whileHover={{ y: -8 }}
                                transition={{ duration: 0.3, ease: 'easeOut' }}
                                className="group relative h-full"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative p-6 rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm hover:bg-card hover:border-primary/20 hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                                    {/* Speaker Image */}
                                    <div className="relative w-20 h-20 mx-auto mb-4">
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full" />
                                        <Image
                                            src={speaker.image}
                                            alt={speaker.name}
                                            fill
                                            className="object-cover rounded-full border-2 border-background"
                                        />
                                    </div>

                                    {/* Speaker Info */}
                                    <div className="text-center space-y-3 flex-grow flex flex-col">
                                        <div>
                                            <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                                                {speaker.name}
                                            </h3>
                                            <p className="text-sm text-muted-foreground font-medium">
                                                {speaker.role}
                                            </p>
                                        </div>

                                        {/* Keynote Badge */}
                                        <Badge
                                            variant="secondary"
                                            className="bg-gradient-to-r from-primary/20 to-accent/20 text-primary border-primary/20 mx-auto"
                                        >
                                            Keynote Speaker
                                        </Badge>

                                        {/* Description */}
                                        <p className="text-xs text-muted-foreground leading-relaxed flex-grow">
                                            Expert in AI Engineering and Applied
                                            Mathematics
                                        </p>

                                        {/* Social Links */}
                                        <div className="flex justify-center gap-2 pt-2">
                                            <Link
                                                href={speaker.social.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    className="w-8 h-8 p-0 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300"
                                                >
                                                    <Linkedin className="w-3.5 h-3.5" />
                                                </Button>
                                            </Link>
                                            <Link
                                                href={speaker.social.twitter}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    className="w-8 h-8 p-0 hover:bg-sky-500 hover:text-white hover:border-sky-500 transition-all duration-300"
                                                >
                                                    <Twitter className="w-3.5 h-3.5" />
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatedSection>
                    ))}
                </div>

                {/* Call to Action */}
                <AnimatedSection animation="fadeInUp" delay={1.0}>
                    <div className="text-center mt-16">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full border border-primary/20 text-primary font-medium hover:border-primary/40 transition-all duration-300"
                        >
                            <span>More speakers to be announced</span>
                            <motion.span
                                className="w-2 h-2 rounded-full bg-primary"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.5, 1, 0.5],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                            />
                        </motion.div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};
