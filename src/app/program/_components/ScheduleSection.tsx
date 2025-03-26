'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Clock } from 'lucide-react';

const schedule = {
    day1: [
        {
            time: '09:00 AM - 10:00 AM',
            title: 'Opening Ceremony',
            description:
                'Welcome address and keynote speech by distinguished guests.',
        },
        {
            time: '10:15 AM - 11:15 AM',
            title: 'Technical Session 1',
            description:
                'Presentations on power systems and industrial automation.',
        },
        {
            time: '11:30 AM - 12:30 PM',
            title: 'Workshop 1',
            description: 'Interactive workshop on smart grid technologies.',
        },
        {
            time: '12:30 PM - 01:30 PM',
            title: 'Lunch Break',
            description: 'Buffet lunch at the venue restaurant.',
        },
        {
            time: '01:30 PM - 03:00 PM',
            title: 'Panel Discussion',
            description: 'Discussion on the future of renewable energy.',
        },
        {
            time: '03:15 PM - 04:15 PM',
            title: 'Technical Session 2',
            description: 'Presentations on electric machines and robotics.',
        },
        {
            time: '04:30 PM - 05:30 PM',
            title: 'Networking Event',
            description:
                'Opportunity to network with industry professionals and peers.',
        },
    ],
    day2: [
        {
            time: '09:00 AM - 10:00 AM',
            title: 'Keynote Speech',
            description: 'Keynote speech by an industry leader.',
        },
        {
            time: '10:15 AM - 11:15 AM',
            title: 'Technical Session 3',
            description:
                'Presentations on industrial electronics and control systems.',
        },
        {
            time: '11:30 AM - 12:30 PM',
            title: 'Workshop 2',
            description: 'Interactive workshop on automation technologies.',
        },
        {
            time: '12:30 PM - 01:30 PM',
            title: 'Lunch Break',
            description: 'Buffet lunch at the venue restaurant.',
        },
        {
            time: '01:30 PM - 03:00 PM',
            title: 'Technical Session 4',
            description: 'Presentations on smart manufacturing and IoT.',
        },
        {
            time: '03:15 PM - 04:15 PM',
            title: 'Panel Discussion',
            description:
                'Discussion on the impact of AI in industrial applications.',
        },
        {
            time: '04:30 PM - 05:30 PM',
            title: 'Networking Event',
            description:
                'Opportunity to network with industry professionals and peers.',
        },
    ],
    day3: [
        {
            time: '09:00 AM - 10:00 AM',
            title: 'Keynote Speech',
            description: 'Keynote speech by a renowned researcher.',
        },
        {
            time: '10:15 AM - 11:15 AM',
            title: 'Technical Session 5',
            description: 'Presentations on renewable energy technologies.',
        },
        {
            time: '11:30 AM - 12:30 PM',
            title: 'Workshop 3',
            description: 'Interactive workshop on energy storage systems.',
        },
        {
            time: '12:30 PM - 01:30 PM',
            title: 'Lunch Break',
            description: 'Buffet lunch at the venue restaurant.',
        },
        {
            time: '01:30 PM - 03:00 PM',
            title: 'Technical Session 6',
            description: 'Presentations on power electronics and drives.',
        },
        {
            time: '03:15 PM - 04:15 PM',
            title: 'Panel Discussion',
            description: 'Discussion on the future of industrial automation.',
        },
        {
            time: '04:30 PM - 05:30 PM',
            title: 'Closing Ceremony',
            description: 'Closing remarks and awards presentation.',
        },
    ],
};

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
                <div className="flex justify-center mb-12 relative z-10">
                    <div className="inline-flex rounded-lg shadow-md overflow-hidden bg-card p-1">
                        {['day1', 'day2', 'day3'].map((day, index) => (
                            <button
                                key={day}
                                type="button"
                                className={`px-6 py-3 text-sm font-medium rounded-md transition-all duration-200 ${
                                    selectedDay === day
                                        ? 'bg-primary text-white shadow-md'
                                        : 'hover:bg-muted'
                                }`}
                                onClick={() => setSelectedDay(day)}
                            >
                                Day {index + 1}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Timeline Display */}
                <div className="relative z-10">
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
                                <h3 className="text-xl font-bold mb-8 text-center md:text-left">
                                    {day === 'day1' &&
                                        'Day 1 - October 4, 2025'}
                                    {day === 'day2' &&
                                        'Day 2 - October 5, 2025'}
                                    {day === 'day3' &&
                                        'Day 3 - October 6, 2025'}
                                </h3>

                                <div className="relative">
                                    {/* Timeline connector line */}
                                    <div className="absolute left-0 md:left-1/4 top-0 bottom-0 w-px bg-border/60 ml-5 md:ml-0 hidden md:block z-10"></div>

                                    <ul className="space-y-8 relative z-10">
                                        {(schedule as any)[day].map(
                                            (event: any, index: number) => (
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
                                                    <div className="md:grid md:grid-cols-4 gap-4 items-start">
                                                        {/* Timeline dot */}
                                                        <div className="absolute left-0 md:left-1/4 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center -ml-5 md:-ml-5 mt-1 hidden md:flex z-20">
                                                            <div className="w-3 h-3 bg-primary rounded-full"></div>
                                                        </div>

                                                        {/* Time */}
                                                        <div className="md:text-right pr-8 flex md:block items-center mb-2 md:mb-0 relative z-10">
                                                            <Clock className="w-4 h-4 text-primary mr-2 md:hidden" />
                                                            <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                                                                {event.time}
                                                            </span>
                                                        </div>

                                                        {/* Event details */}
                                                        <div className="md:col-span-3 bg-card rounded-xl shadow-md border border-border/40 hover:shadow-lg transition-shadow p-5 md:ml-6 relative z-10">
                                                            <h4 className="text-lg font-semibold mb-2">
                                                                {event.title}
                                                            </h4>
                                                            <p className="text-muted-foreground">
                                                                {
                                                                    event.description
                                                                }
                                                            </p>
                                                        </div>
                                                    </div>
                                                </motion.li>
                                            ),
                                        )}
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
