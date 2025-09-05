'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import DecorativeLines from '@/components/ui/decorative-lines';
import { Calendar, MapPin, Timer, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export default function TimeLeftSection() {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const [sectionRef, inView] = useInView({
        triggerOnce: false,
        threshold: 0.2,
        rootMargin: '-100px 0px',
    });

    useEffect(() => {
        const targetDate = new Date('2025-10-03T08:00:00');

        const calculateTimeLeft = () => {
            const difference = +targetDate - +new Date();

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                });
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section
            ref={sectionRef}
            className="py-32 relative bg-background text-center overflow-hidden"
        >
            {/* Add wave decoration in the background */}
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

            <div className="container max-w-6xl font-semibold px-4 mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={
                        inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }
                    }
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mx-auto mb-6"
                >
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                    <span className="text-primary font-medium tracking-wider uppercase text-sm">
                        Mark Your Calendar
                    </span>
                </motion.div>

                <motion.h2
                    className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 leading-tight tracking-tight"
                    initial={{ opacity: 0, y: -20 }}
                    animate={
                        inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }
                    }
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Join Us For Our{' '}
                    <span className="text-primary">Upcoming Event</span>
                </motion.h2>

                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    animate={
                        inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                    }
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    {Object.entries(timeLeft).map(([key, value], index) => (
                        <motion.div
                            key={key}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={
                                inView
                                    ? { opacity: 1, scale: 1 }
                                    : { opacity: 0, scale: 0.8 }
                            }
                            transition={{
                                duration: 0.5,
                                delay: 0.6 + index * 0.1,
                            }}
                            whileHover={{ y: -5 }}
                            className="relative"
                        >
                            <div className="text-center space-y-3">
                                <span className="text-5xl md:text-6xl font-bold text-primary block">
                                    {value}
                                </span>
                                <span className="text-sm text-muted-foreground uppercase tracking-wider font-medium">
                                    {key}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="text-lg mb-10 flex flex-col md:flex-row items-center justify-center gap-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                        inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    <span className="flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-primary" />
                        <span>October 4-6, 2025</span>
                    </span>
                    <span className="flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-primary" />
                        <span>Hotel Royal, Hammamet, Tunisia</span>
                    </span>
                </motion.div>

                <motion.div
                    className="flex flex-col sm:flex-row justify-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                        inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.6, delay: 1 }}
                >
                    <Button size="lg" className="group" asChild>
                        <Link
                            href="/details"
                            className="flex items-center gap-2"
                        >
                            VIEW DETAILS
                            <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        className="border-primary/20 hover:border-primary"
                        asChild
                    >
                        <Link href="/ticket">BUY TICKET</Link>
                    </Button>
                </motion.div>

                {/* Add floating decorative timer icon */}
                <motion.div
                    className="absolute -bottom-6 left-1/4 opacity-10"
                    initial={{ y: -10 }}
                    animate={{ y: 10 }}
                    transition={{
                        repeat: Infinity,
                        repeatType: 'reverse',
                        duration: 2,
                    }}
                >
                    <Timer className="w-24 h-24 text-primary" />
                </motion.div>
            </div>
        </section>
    );
}
