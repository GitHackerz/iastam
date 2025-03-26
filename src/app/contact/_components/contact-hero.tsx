'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDown } from 'lucide-react';

export const ContactHero = () => {
    const [heroRef, heroInView] = useInView({
        triggerOnce: false,
        threshold: 0.2,
    });

    return (
        <section
            ref={heroRef}
            className="relative h-[70vh] flex items-center overflow-hidden border-b border-border/50"
        >
            {/* Background patterns */}
            <div className="absolute inset-0 bg-grid-small-black/[0.2] -z-10 dark:bg-grid-small-white/[0.2]" />

            {/* Abstract shapes */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-20 left-12 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-pulse" />
                <div
                    className="absolute bottom-20 right-12 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-pulse"
                    style={{ animationDelay: '1s' }}
                />
            </div>

            <div className="container max-w-7xl mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={
                        heroInView
                            ? { opacity: 1, y: 0 }
                            : { opacity: 0, y: 30 }
                    }
                    transition={{ duration: 0.7 }}
                    className="space-y-8 max-w-3xl mx-auto"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        <span className="text-primary font-medium tracking-wider uppercase text-sm">
                            Contact Us
                        </span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                        We&apos;d Love to Hear{' '}
                        <span className="text-primary">From You</span>
                    </h1>

                    <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                        Whether you have questions about IASTAM, are interested
                        in participating, or want to explore collaboration
                        opportunities, our team is here to help.
                    </p>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
                >
                    <span className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                        Scroll to contact
                    </span>
                    <ChevronDown className="h-4 w-4 text-muted-foreground animate-bounce" />
                </motion.div>
            </div>
        </section>
    );
};
