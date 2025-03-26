'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Phone, Mail, MapIcon } from 'lucide-react';
import DecorativeLines from '@/components/ui/decorative-lines';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function LocationSection() {
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
                    variant="waves"
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
                            Venue
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                        Event <span className="text-primary">Location</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={
                            inView
                                ? { opacity: 1, x: 0 }
                                : { opacity: 0, x: -50 }
                        }
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <h3 className="text-2xl font-semibold text-primary">
                            Hotel XXX, Sousse
                        </h3>

                        <div className="space-y-5">
                            <motion.div
                                className="flex items-start gap-4 group"
                                whileHover={{ x: 5 }}
                            >
                                <div className="p-3 rounded-full bg-primary/10 text-primary mt-0.5">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-medium mb-1">
                                        Address
                                    </h4>
                                    <p className="text-muted-foreground">
                                        123 Avenue de la Plage, Sousse, Tunisia
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                className="flex items-start gap-4 group"
                                whileHover={{ x: 5 }}
                            >
                                <div className="p-3 rounded-full bg-primary/10 text-primary mt-0.5">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-medium mb-1">Phone</h4>
                                    <p className="text-muted-foreground">
                                        +216 XX XXX XXX
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                className="flex items-start gap-4 group"
                                whileHover={{ x: 5 }}
                            >
                                <div className="p-3 rounded-full bg-primary/10 text-primary mt-0.5">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-medium mb-1">Email</h4>
                                    <p className="text-muted-foreground">
                                        contact@iastam.org
                                    </p>
                                </div>
                            </motion.div>
                        </div>

                        <Button className="group mt-6" asChild>
                            <Link
                                href="https://maps.google.com"
                                target="_blank"
                                className="flex items-center gap-2"
                            >
                                Get Directions
                                <MapIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={
                            inView
                                ? { opacity: 1, x: 0 }
                                : { opacity: 0, x: 50 }
                        }
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 border border-primary/10">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=YOUR_MAP_EMBED_URL"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="absolute inset-0"
                            />

                            {/* Add decorative gradient overlay */}
                            <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-primary/20 via-transparent to-transparent"></div>

                            {/* Decorative elements */}
                            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-xl" />
                            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-xl" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
