'use client';

import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionHeader from '@/components/ui/section-header';
import DecorativeLines from '@/components/ui/decorative-lines';

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
        const targetDate = new Date('2025-10-04T00:00:00');

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
        <motion.section
            ref={sectionRef}
            className="py-24 relative bg-background"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
        >
            {/* Add wave decoration in the background with stronger visibility */}
            <div className="absolute inset-0 overflow-hidden z-0">
                <DecorativeLines
                    variant="waves"
                    inView={inView}
                    opacity={0.18} // Increased opacity
                    color="var(--primary)"
                />
            </div>

            <div className="container max-w-6xl px-4 mx-auto relative z-10">
                <SectionHeader
                    subtitle="Mark Your Calendar"
                    title="Time Until The Event"
                    inView={inView}
                />

                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
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
                            whileHover={{
                                y: -5,
                                boxShadow:
                                    '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                            }}
                        >
                            <Card className="relative overflow-hidden border-primary/10">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
                                <motion.div
                                    className="relative p-6 text-center space-y-2"
                                    animate={{ opacity: [0.5, 1] }}
                                    transition={{
                                        repeat: Infinity,
                                        repeatType: 'reverse',
                                        duration: 2,
                                        delay: index * 0.2,
                                    }}
                                >
                                    <span className="text-4xl md:text-5xl font-bold text-primary block">
                                        {value}
                                    </span>
                                    <span className="text-sm text-muted-foreground uppercase tracking-wider">
                                        {key}
                                    </span>
                                </motion.div>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
}
