'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Clock, MapPin } from 'lucide-react';

export const ProgramsHero = () => {
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.2,
    });

    return (
        <section
            ref={ref}
            className="min-h-[50vh] flex items-center justify-center relative overflow-hidden border-b border-border/50"
        >
            {/* Background patterns */}
            <div className="absolute inset-0 bg-grid-small-black/[0.2] -z-10 dark:bg-grid-small-white/[0.2]" />

            {/* Abstract shapes */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-20 right-12 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-pulse" />
                <div
                    className="absolute bottom-20 left-12 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-pulse"
                    style={{ animationDelay: '1s' }}
                />
            </div>

            <div className="container max-w-4xl px-4 py-24 mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                        inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.6 }}
                    className="space-y-6"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        <span className="text-primary font-medium tracking-wider uppercase text-sm">
                            Event Program
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                        Conference{' '}
                        <span className="text-primary">Schedule</span>
                    </h1>

                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Join us for three days of inspiring keynotes, technical
                        sessions, workshops, and networking opportunities at
                        Hotel Royal, Hammamet.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-4">
                        <div className="flex items-center gap-2">
                            <Calendar className="h-5 w-5 text-primary" />
                            <span>October 4-6, 2025</span>
                        </div>
                        <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-primary" />
                        <div className="flex items-center gap-2">
                            <MapPin className="h-5 w-5 text-primary" />
                            <span>Hotel Royal, Hammamet</span>
                        </div>
                        <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-primary" />
                        <div className="flex items-center gap-2">
                            <Clock className="h-5 w-5 text-primary" />
                            <span>9:00 AM - 5:30 PM</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
