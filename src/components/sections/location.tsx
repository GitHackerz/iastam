'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function LocationSection() {
    const [sectionRef, inView] = useInView({
        triggerOnce: false,
        threshold: 0.2,
        rootMargin: '-100px 0px',
    });

    return (
        <section ref={sectionRef} className="py-24 bg-muted/50">
            <div className="container max-w-6xl px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={
                        inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
                    }
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-primary text-sm tracking-wider uppercase">
                        Venue
                    </span>
                    <h2 className="text-3xl font-bold mt-2">Event Location</h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={
                            inView
                                ? { opacity: 1, x: 0 }
                                : { opacity: 0, x: -50 }
                        }
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-semibold">
                            Hotel XXX, Sousse
                        </h3>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <MapPin className="w-5 h-5 text-primary" />
                                <span>
                                    123 Avenue de la Plage, Sousse, Tunisia
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-primary" />
                                <span>+216 XX XXX XXX</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-primary" />
                                <span>contact@iastam.org</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={
                            inView
                                ? { opacity: 1, x: 0 }
                                : { opacity: 0, x: 50 }
                        }
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="aspect-video rounded-2xl overflow-hidden"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=YOUR_MAP_EMBED_URL"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
