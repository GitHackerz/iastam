'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin } from 'lucide-react';
import { eventInfo } from '@/constants/event';
import { venueInfo, venueFeatures } from '@/constants/venue';

export const VenueSection = () => {
    const [sectionRef, inView] = useInView({
        triggerOnce: false,
        threshold: 0.2,
    });

    return (
        <section
            id="venue"
            ref={sectionRef}
            className="py-24 relative overflow-hidden"
        >
            <div className="container max-w-6xl px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={
                        inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }
                    }
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mx-auto mb-4">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium">Venue</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                        {eventInfo.venue.name}
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        {venueInfo.description}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {venueFeatures.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={
                                inView
                                    ? { opacity: 1, y: 0 }
                                    : { opacity: 0, y: 20 }
                            }
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-6 rounded-xl border bg-card hover:bg-accent transition-colors"
                        >
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                {feature.icon}
                            </div>
                            <h3 className="font-semibold mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};