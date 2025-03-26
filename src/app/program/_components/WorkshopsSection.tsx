'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
    Battery,
    Cpu,
    Zap,
    Lightbulb,
    Shield,
    Car,
    HomeIcon,
    Factory,
    Calendar,
    Clock,
    MapPin,
    Tag,
} from 'lucide-react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

const workshopsData = [
    {
        icon: <Zap className="h-5 w-5" />,
        title: 'Advanced Power Systems Workshop',
        description:
            'Hands-on training for modern power generation, transmission, and smart grid technologies.',
        topics: [
            'Lab Demonstrations',
            'System Modeling',
            'Case Studies',
            'Design Challenges',
        ],
        locationType: 'On-site',
        date: 'October 15, 2023',
        time: '9:00 AM - 12:00 PM',
        type: 'Interactive Workshop',
    },
    {
        icon: <Factory className="h-5 w-5" />,
        title: 'Industrial Automation Masterclass',
        description:
            'Practical sessions on automation technologies, control systems, and industrial IoT implementation.',
        topics: [
            'Live Programming',
            'Hardware Integration',
            'Equipment Tours',
            'Troubleshooting',
        ],
        locationType: 'Online',
        date: 'October 16, 2023',
        time: '10:00 AM - 1:00 PM',
        type: 'Virtual Masterclass',
    },
    {
        icon: <Battery className="h-5 w-5" />,
        title: 'Energy Storage Technologies',
        description:
            'Interactive workshop on battery technologies, testing methods, and energy management systems.',
        topics: [
            'Testing Methods',
            'System Design',
            'Performance Analysis',
            'Field Applications',
        ],
        locationType: 'On-site',
        date: 'October 15, 2023',
        time: '2:00 PM - 5:00 PM',
        type: 'Hands-on Laboratory',
    },
    {
        icon: <Car className="h-5 w-5" />,
        title: 'EV Infrastructure Planning',
        description:
            'Designing and implementing effective EV charging networks and transportation systems.',
        topics: [
            'Network Design',
            'Capacity Planning',
            'Integration Strategies',
            'Case Examples',
        ],
        locationType: 'Online',
        date: 'October 17, 2023',
        time: '11:00 AM - 2:00 PM',
        type: 'Planning Session',
    },
    {
        icon: <Cpu className="h-5 w-5" />,
        title: 'Industrial AI Implementation',
        description:
            'Practical workshop on deploying AI solutions in manufacturing and industrial environments.',
        topics: [
            'Dataset Preparation',
            'Model Training',
            'Deployment Strategies',
            'ROI Assessment',
        ],
        locationType: 'Hybrid',
        date: 'October 18, 2023',
        time: '9:00 AM - 1:00 PM',
        type: 'Technical Workshop',
    },
    {
        icon: <Lightbulb className="h-5 w-5" />,
        title: 'Renewable Energy Systems Design',
        description:
            'Hands-on design and simulation of solar, wind, and hybrid renewable energy systems.',
        topics: [
            'System Sizing',
            'Simulation Tools',
            'Optimization Techniques',
            'Project Planning',
        ],
        locationType: 'On-site',
        date: 'October 16, 2023',
        time: '1:00 PM - 5:00 PM',
        type: 'Design Studio',
    },
    {
        icon: <Shield className="h-5 w-5" />,
        title: 'Cybersecurity for Industry',
        description:
            'Interactive training on security protocols, risk assessment, and protection for industrial systems.',
        topics: [
            'Threat Simulation',
            'Security Auditing',
            'Response Planning',
            'Tool Demonstration',
        ],
        locationType: 'Online',
        date: 'October 19, 2023',
        time: '10:00 AM - 12:30 PM',
        type: 'Security Training',
    },
    {
        icon: <HomeIcon className="h-5 w-5" />,
        title: 'Smart Building Implementation',
        description:
            'Practical applications of building automation, energy management, and sustainable design.',
        topics: [
            'System Integration',
            'Control Configuration',
            'Efficiency Analysis',
            'Retrofit Strategies',
        ],
        locationType: 'On-site',
        date: 'October 20, 2023',
        time: '9:30 AM - 4:00 PM',
        type: 'Full-day Seminar',
    },
];

export const WorkshopsSection = () => {
    const [sectionRef, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    return (
        <section
            id="workshops"
            ref={sectionRef}
            className="py-24 bg-primary/5 relative overflow-hidden"
        >
            <div className="container max-w-6xl px-4 mx-auto">
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
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
                                <CardHeader className="pb-3">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                                        <div className="text-primary">
                                            {workshop.icon}
                                        </div>
                                    </div>
                                    <CardTitle className="text-lg">
                                        {workshop.title}
                                    </CardTitle>
                                    <CardDescription>
                                        {workshop.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {workshop.topics.map((topic, i) => (
                                            <span
                                                key={i}
                                                className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                                            >
                                                {topic}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="space-y-2 mt-4 text-sm">
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
