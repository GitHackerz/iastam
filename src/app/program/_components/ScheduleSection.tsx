'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Clock } from 'lucide-react';
import { schedule, scheduleDateLabels, dayLabels } from '@/constants/schedule';

export const ScheduleSection = () => {
    const [sectionRef, inView] = useInView({
        triggerOnce: false,
        threshold: 0.2,
    });

    const [selectedDay, setSelectedDay] = useState('day1');

    return (
        <section id="schedule" ref={sectionRef} className="py-24 relative">
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-1/4 right-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2" />
            </div>

            <div className="container max-w-6xl px-4 mx-auto z-20 relative">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={
                        inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }
                    }
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 relative z-10"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mx-auto mb-4">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span className="text-primary font-medium tracking-wider uppercase text-sm">
                            IASTAM 5 Schedule
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                        Event <span className="text-primary">Schedule</span>
                    </h2>
                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                        Explore the detailed schedule for each day of the
                        conference, including keynote speeches, technical
                        sessions, workshops, and networking events.
                    </p>
                </motion.div>

                {/* Improved Day Selection Tabs */}
                <div className="flex justify-center mb-8 md:mb-12 relative z-10 px-2">
                    <div className="inline-flex rounded-lg shadow-md overflow-hidden bg-card p-1 w-full max-w-sm">
                        {Object.keys(schedule).map((day, index) => (
                            <button
                                key={index}
                                type="button"
                                className={`flex-1 px-2 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium rounded-md transition-all duration-200 ${
                                    selectedDay === day
                                        ? 'bg-primary text-white shadow-md'
                                        : 'hover:bg-muted'
                                }`}
                                onClick={() => setSelectedDay(day)}
                            >
                                {dayLabels[day as keyof typeof dayLabels].label}
                                <span className="block text-[10px] font-normal mt-0.5">
                                    {
                                        dayLabels[day as keyof typeof dayLabels]
                                            .short
                                    }
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Timeline Display */}
                <div className="relative z-10 px-2 sm:px-0">
                    {Object.keys(schedule).map(day => (
                        <div
                            key={day}
                            className={`${selectedDay === day ? 'block' : 'hidden'} relative z-10`}
                        >
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{
                                    duration: 0.4,
                                    ease: 'easeInOut',
                                }}
                                className="relative z-10"
                            >
                                <h3 className="text-lg sm:text-xl font-bold mb-6 md:mb-8 text-center md:text-left">
                                    {
                                        scheduleDateLabels[
                                            day as keyof typeof scheduleDateLabels
                                        ]
                                    }
                                </h3>

                                <div className="relative">
                                    {/* Timeline connector line */}
                                    <div className="absolute left-4 md:left-1/4 top-0 bottom-0 w-px bg-border/60 hidden sm:block z-10"></div>

                                    <ul className="space-y-4 md:space-y-6 lg:space-y-8 relative z-10">
                                        {schedule[
                                            day as keyof typeof schedule
                                        ].map((event, index) => (
                                            <motion.li
                                                key={index}
                                                initial={{
                                                    opacity: 0,
                                                    x: -10,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    x: 0,
                                                }}
                                                transition={{
                                                    delay: index * 0.05,
                                                    duration: 0.3,
                                                }}
                                                className="relative z-10"
                                            >
                                                <div className="sm:grid sm:grid-cols-4 gap-3 sm:gap-4 items-start">
                                                    {/* Timeline dot */}
                                                    <div className="absolute left-4 md:left-1/4 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-primary/10 rounded-full flex items-center justify-center -ml-3 sm:-ml-4 md:-ml-5 mt-1 hidden sm:flex z-20">
                                                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-primary rounded-full"></div>
                                                    </div>

                                                    {/* Time */}
                                                    <div className="md:text-right pr-4 md:pr-8 flex sm:block items-center mb-2 md:mb-0 relative z-10">
                                                        <Clock className="w-4 h-4 text-primary mr-2 sm:hidden" />
                                                        <span className="text-xs sm:text-sm font-medium text-muted-foreground whitespace-nowrap">
                                                            {event.time}
                                                        </span>
                                                    </div>

                                                    {/* Event details */}
                                                    <div className="sm:col-span-3 bg-card rounded-xl shadow-md border border-border/40 hover:shadow-lg transition-shadow p-4 sm:p-5 sm:ml-6 relative z-10">
                                                        <h4 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">
                                                            {event.title}
                                                        </h4>
                                                        <p className="text-sm text-muted-foreground">
                                                            {event.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
