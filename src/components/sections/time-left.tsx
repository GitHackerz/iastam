'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { MouseCursor } from '@/components/mouse-cursor';
import { useInView } from 'react-intersection-observer';

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export default function TimeLeftSection() {
    const containerRef = useRef<HTMLElement>(null);
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

    const variants = {
        hidden: { y: 50, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };

    return (
        <>
            <section
                ref={node => {
                    // Assign the ref to both containerRef and sectionRef
                    if (containerRef)
                        containerRef.current = node as HTMLElement;
                    if (sectionRef) sectionRef(node);
                }}
                className="py-24 relative overflow-hidden cursor-none"
            >
                <MouseCursor containerRef={containerRef} />
                {/* Background decorations */}
                <div className="absolute inset-0 pointer-events-none">
                    {/* Circuit-like patterns */}
                    <svg
                        className="absolute left-0 top-0 w-32 h-32 text-primary/10"
                        viewBox="0 0 100 100"
                    >
                        <circle
                            cx="50"
                            cy="50"
                            r="40"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                        />
                        <path
                            d="M50 10 L50 30 M50 70 L50 90 M10 50 L30 50 M70 50 L90 50"
                            stroke="currentColor"
                            strokeWidth="2"
                        />
                    </svg>

                    <svg
                        className="absolute right-0 bottom-0 w-40 h-40 text-primary/10"
                        viewBox="0 0 100 100"
                    >
                        <rect
                            x="20"
                            y="20"
                            width="60"
                            height="60"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                        />
                        <path
                            d="M20 50 L80 50 M50 20 L50 80"
                            stroke="currentColor"
                            strokeWidth="2"
                        />
                    </svg>

                    {/* Dots pattern */}
                    <div className="absolute right-10 top-10 grid grid-cols-3 gap-2">
                        {[...Array(9)].map((_, i) => (
                            <div
                                key={i}
                                className="w-1 h-1 rounded-full bg-primary/20"
                            />
                        ))}
                    </div>

                    {/* Wavy lines */}
                    <svg
                        className="absolute left-1/4 bottom-10 w-48 h-24 text-primary/10"
                        viewBox="0 0 200 100"
                    >
                        <path
                            d="M0 50 C 40 30, 60 70, 100 50 C 140 30, 160 70, 200 50"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                        />
                    </svg>
                </div>

                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/50" />

                <div className="container max-w-6xl px-4 mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={
                            inView
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: 20 }
                        }
                        transition={{ duration: 0.5 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold tracking-tight mb-4">
                            Time Until The Event
                        </h2>
                        <p className="text-muted-foreground">
                            Mark your calendars and set your reminders
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                        {Object.entries(timeLeft).map(([key, value], index) => (
                            <motion.div
                                key={key}
                                variants={variants}
                                initial="hidden"
                                animate={inView ? 'visible' : 'hidden'}
                                transition={{
                                    delay: inView ? index * 0.1 : 0,
                                    duration: 0.5,
                                }}
                            >
                                <Card className="relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-500" />
                                    <div className="relative p-6 text-center space-y-2">
                                        <motion.span
                                            key={value}
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            className="text-4xl md:text-5xl font-bold text-primary block"
                                        >
                                            {value}
                                        </motion.span>
                                        <span className="text-sm text-muted-foreground uppercase tracking-wider">
                                            {key}
                                        </span>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl" />
                        <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl" />
                    </div>
                </div>
            </section>
        </>
    );
}
