'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin } from 'lucide-react';
import { hotelName, hotelAddress } from '@/constants/info';
import { venueInfo } from '@/constants/venue';

export const ContactMap = () => {
    const [mapRef, mapInView] = useInView({
        triggerOnce: false,
        threshold: 0.2,
    });

    return (
        <section
            ref={mapRef}
            className="py-24 bg-primary/5 relative overflow-hidden"
        >
            <div className="container max-w-6xl px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                        mapInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mx-auto mb-4">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span className="text-primary font-medium tracking-wider uppercase text-sm">
                            Our Location
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                        Find Us
                    </h2>
                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                        IASTAM 5 will be held at the {hotelName}, a luxury
                        resort located in the beautiful coastal city of{' '}
                        {hotelAddress.city}, {hotelAddress.country}.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={
                        mapInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                    }
                    transition={{ duration: 0.7 }}
                    className="aspect-video rounded-2xl overflow-hidden shadow-xl shadow-primary/10 bg-card"
                >
                    <iframe
                        src={venueInfo.googleMapsEmbed}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </motion.div>
            </div>
        </section>
    );
};
