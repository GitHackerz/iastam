'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Clock, MapPin, Tag } from 'lucide-react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { workshopsData } from '@/constants/workshops';

export const WorkshopsSection = () => {
    const [sectionRef, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    return (
        <section
            id="workshops"
            ref={sectionRef}
            className="py-24 relative overflow-hidden"
        >
            {/* Full-width background */}
            <div className="absolute inset-0 bg-primary/5"></div>

            <div className="container max-w-6xl px-4 mx-auto relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                        inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mx-auto mb-4">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        <span className="text-primary font-medium tracking-wider uppercase text-sm">
                            Online & On-site Learning
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                        Workshops &{' '}
                        <span className="text-primary">Sessions</span>
                    </h2>
                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                        IASTAM 5 features specialized workshops and sessions in
                        various formats (online and on-site) with scheduled
                        dates and times
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6">
                    {workshopsData.map((workshop, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={
                                inView
                                    ? { opacity: 1, y: 0 }
                                    : { opacity: 0, y: 30 }
                            }
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full border-border hover:border-primary/50 hover:shadow-md transition-all flex flex-col">
                                <CardHeader className="pb-2 sm:pb-3 space-y-2">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                        <div className="text-primary">
                                            {workshop.icon}
                                        </div>
                                    </div>
                                    <CardTitle className="text-base sm:text-lg">
                                        {workshop.title}
                                    </CardTitle>
                                    <CardDescription className="text-sm">
                                        {workshop.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow pt-1">
                                    <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                                        {workshop.topics.map((topic, i) => (
                                            <span
                                                key={i}
                                                className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                                            >
                                                {topic}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="space-y-1 sm:space-y-2 mt-2 sm:mt-4 text-xs sm:text-sm">
                                        <div className="flex items-center text-muted-foreground">
                                            <MapPin className="h-4 w-4 mr-2" />
                                            <span
                                                className={
                                                    workshop.locationType ===
                                                    'Online'
                                                        ? 'text-blue-500'
                                                        : workshop.locationType ===
                                                            'Hybrid'
                                                          ? 'text-purple-500'
                                                          : 'text-green-500'
                                                }
                                            >
                                                {workshop.locationType}
                                            </span>
                                        </div>
                                        <div className="flex items-center text-muted-foreground">
                                            <Calendar className="h-4 w-4 mr-2" />
                                            <span>{workshop.date}</span>
                                        </div>
                                        <div className="flex items-center text-muted-foreground">
                                            <Clock className="h-4 w-4 mr-2" />
                                            <span>{workshop.time}</span>
                                        </div>
                                        <div className="flex items-center text-muted-foreground">
                                            <Tag className="h-4 w-4 mr-2" />
                                            <span>{workshop.type}</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
