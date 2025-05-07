'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { MapPin } from 'lucide-react';
import { venueFeatures } from '@/constants/venue';
import { hotelName, hotelAddress } from '@/constants/info';

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
                        <span className="text-primary font-medium tracking-wider uppercase text-sm">
                            Venue Information
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                        Conference <span className="text-primary">Venue</span>
                    </h2>
                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                        IASTAM 5 will be held at the prestigious {hotelName} in{' '}
                        {hotelAddress.city}, {hotelAddress.country}, offering
                        world-class facilities for all conference activities.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={
                            inView
                                ? { opacity: 1, x: 0 }
                                : { opacity: 0, x: -50 }
                        }
                        transition={{ duration: 0.7 }}
                        className="mx-auto md:mx-0 max-w-md w-full"
                    >
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
                            <Image
                                src="/images/hotel.jpg"
                                alt={hotelName}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={
                            inView
                                ? { opacity: 1, x: 0 }
                                : { opacity: 0, x: 50 }
                        }
                        transition={{ duration: 0.7 }}
                        className="space-y-4 md:space-y-6"
                    >
                        <h3 className="text-2xl font-bold">{hotelName}</h3>

                        <p className="text-muted-foreground">
                            Located on the stunning Mediterranean coast of
                            Hammamet, {hotelName} combines luxury amenities with
                            sophisticated conference facilities. The venue
                            provides an inspiring and comfortable setting for
                            IASTAM&apos;s sessions, networking, and social
                            events.
                        </p>

                        <div className="pt-2 md:pt-4 space-y-3 md:space-y-4">
                            <h4 className="font-semibold">Venue Features:</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                                {venueFeatures.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-3"
                                    >
                                        <div className="p-2 rounded-full bg-primary/10 text-primary">
                                            {feature.icon}
                                        </div>
                                        <div>
                                            <h5 className="font-medium">
                                                {feature.title}
                                            </h5>
                                            <p className="text-muted-foreground text-sm">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="pt-4">
                            <h4 className="font-semibold mb-2">Address:</h4>
                            <p className="text-muted-foreground">
                                {hotelName}
                                <br />
                                {hotelAddress.line1}
                                <br />
                                {hotelAddress.postalCode}, {hotelAddress.city}
                                <br />
                                {hotelAddress.country}
                            </p>
                        </div>
                    </motion.div>
                </div>

                <div className="mt-6 sm:mt-10 md:mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={
                            inView
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: 50 }
                        }
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-card rounded-xl overflow-hidden shadow-lg"
                    >
                        <div className="relative h-40 sm:h-48">
                            <Image
                                src="/images/venue/conference-hall.jpg"
                                alt="Main Conference Hall"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">
                                Conference Hall
                            </h3>
                            <p className="text-muted-foreground text-sm">
                                Our primary venue for keynote speeches and
                                plenary sessions, featuring elegant design and
                                professional audiovisual facilities.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={
                            inView
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: 50 }
                        }
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-card rounded-xl overflow-hidden shadow-lg"
                    >
                        <div className="relative h-40 sm:h-48">
                            <Image
                                src="/images/venue/breakout-rooms.jpg"
                                alt="Breakout Rooms"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">
                                Breakout Rooms
                            </h3>
                            <p className="text-muted-foreground text-sm">
                                Luxurious meeting spaces configured for
                                interactive workshops and technical sessions
                                with all necessary presentation equipment.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={
                            inView
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: 50 }
                        }
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="bg-card rounded-xl overflow-hidden shadow-lg"
                    >
                        <div className="relative h-40 sm:h-48">
                            <Image
                                src="/images/venue/beachfront.jpg"
                                alt="Mediterranean Beachfront"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">
                                Reception Areas
                            </h3>
                            <p className="text-muted-foreground text-sm">
                                Beautiful indoor and outdoor spaces for
                                networking events, coffee breaks, and the gala
                                dinner with stunning Mediterranean views.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
