'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { schedule } from '@/constants/schedule';
import AnimatedSection from '@/components/ui/animated-section';

// Extract workshops and panel discussions from schedule
interface WorkshopPanelItem {
    title: string;
    description: string;
    time: string;
    speaker: string;
    date: string;
    type: string;
    locationType: string;
}

const getWorkshopsAndPanels = (): WorkshopPanelItem[] => {
    const items: WorkshopPanelItem[] = [];
    
    // Get workshops from day 2
    const day2Workshops = schedule.day2.filter(event => event.type === 'workshop');
    day2Workshops.forEach(workshop => {
        items.push({
            title: workshop.title,
            description: workshop.description,
            time: workshop.time,
            speaker: workshop.speaker || 'TBD',
            date: 'October 4, 2025',
            type: 'Workshop',
            locationType: 'On-site'
        });
    });
    
    // Get panel discussions from day 2
    const day2Panels = schedule.day2.filter(event => event.type === 'panel');
    day2Panels.forEach(panel => {
        items.push({
            title: panel.title,
            description: panel.description,
            time: panel.time,
            speaker: 'Panel Discussion',
            date: 'October 4, 2025',
            type: 'Panel Discussion',
            locationType: 'On-site'
        });
    });
    
    return items;
};

export const WorkshopsSection = () => {
    const [sectionRef, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    const workshopsPanelsData = getWorkshopsAndPanels();

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
                            Panels & Workshops
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                        Panels &{' '}
                        <span className="text-primary">Workshops</span>
                    </h2>
                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                        Join us for interactive workshops and panel discussions featuring industry experts and thought leaders
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6">
                    {workshopsPanelsData.map((item, index) => (
                        <AnimatedSection
                            key={index}
                            animation="fadeInUp"
                            delay={index * 0.1}
                            duration={0.6}
                            threshold={0.1}
                        >
                            <Card className="h-full border-border hover:border-primary/50 hover:shadow-md transition-all flex flex-col">
                                <CardHeader className="pb-2 sm:pb-3 space-y-2">
                                    <div className="flex justify-between items-start">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                            item.type === 'Workshop' 
                                                ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' 
                                                : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                                        }`}>
                                            {item.type}
                                        </span>
                                    </div>
                                    <CardTitle className="text-base sm:text-lg">
                                        {item.title}
                                    </CardTitle>
                                    <CardDescription className="text-sm">
                                        {item.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow pt-1">
                                    <div className="space-y-1 sm:space-y-2 mt-2 sm:mt-4 text-xs sm:text-sm">
                                        <div className="flex items-center text-muted-foreground">
                                            <Users className="h-4 w-4 mr-2" />
                                            <span>{item.speaker}</span>
                                        </div>
                                        <div className="flex items-center text-muted-foreground">
                                            <Calendar className="h-4 w-4 mr-2" />
                                            <span>{item.date}</span>
                                        </div>
                                        <div className="flex items-center text-muted-foreground">
                                            <Clock className="h-4 w-4 mr-2" />
                                            <span>{item.time}</span>
                                        </div>
                                        <div className="flex items-center text-muted-foreground">
                                            <MapPin className="h-4 w-4 mr-2" />
                                            <span className="text-green-500">
                                                {item.locationType}
                                            </span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
};
