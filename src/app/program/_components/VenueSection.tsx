'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, ExternalLink, Star, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { eventInfo } from '@/constants/event';
import { venueInfo } from '@/constants/venue';
import AnimatedSection from '@/components/ui/animated-section';
import SectionHeader from '@/components/ui/section-header';
import Image from 'next/image';
import Link from 'next/link';

export const VenueSection = () => {
    const [sectionRef, inView] = useInView({
        triggerOnce: false,  // Changed to false for repeating animations
        threshold: 0.1,
    });

    return (
        <section
            id="venue"
            ref={sectionRef}
            className="py-24 relative overflow-hidden bg-gradient-to-br from-background via-accent/5 to-background"
        >
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-16" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/8 to-accent/8 rounded-full blur-3xl" />
            <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-to-r from-accent/8 to-primary/8 rounded-full blur-3xl" />
            
            <div className="container max-w-7xl px-4 mx-auto relative">
                {/* Header */}
                <SectionHeader
                    subtitle="Venue"
                    title={venueInfo.name}
                    inView={inView}
                    centered={true}
                />

                <AnimatedSection animation="fadeInUp" delay={0.3} threshold={0.1}>
                    <div className="text-lg text-muted-foreground max-w-3xl mx-auto text-center mb-16">
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <Calendar className="h-5 w-5 text-primary" />
                            <span className="text-primary font-medium">{venueInfo.date}</span>
                        </div>
                    </div>
                </AnimatedSection>

                {/* Main Content: Image and Description */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
                    {/* Hotel Image */}
                    <AnimatedSection animation="fadeInLeft" delay={0.4} threshold={0.1}>
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <Card className="relative border-border/50 bg-card/80 backdrop-blur-sm hover:border-primary/20 hover:shadow-2xl transition-all duration-500 overflow-hidden">
                                <CardContent className="p-0">
                                    <div className="relative h-80 md:h-96">
                                        <Image
                                            src="/images/hotel.jpeg"
                                            alt="Hammamet Garden Resort & Spa"
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                                        <div className="absolute bottom-6 left-6 text-white">
                                            {/* Removed Mediterranean Excellence and 4 Stars */}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </AnimatedSection>

                    {/* Description */}
                    <AnimatedSection animation="fadeInRight" delay={0.5} threshold={0.1}>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                    Where Excellence Meets Elegance
                                </h3>
                                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                    {venueInfo.description}
                                </p>
                            </div>
                            
                            <div className="pt-4">
                                <Button size="lg" className="group" asChild>
                                    <Link
                                        href={venueInfo.mapUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2"
                                    >
                                        <MapPin className="w-5 h-5" />
                                        View Location
                                        <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
};
