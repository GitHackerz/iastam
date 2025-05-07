import { ReactNode } from 'react';
import {
    Battery,
    Cpu,
    Zap,
    Lightbulb,
    Shield,
    Car,
    HomeIcon,
    Factory,
} from 'lucide-react';

export interface Workshop {
    icon: ReactNode;
    title: string;
    description: string;
    topics: string[];
    locationType: 'Online' | 'On-site' | 'Hybrid';
    date: string;
    time: string;
    type: string;
}

export const workshopsData: Workshop[] = [
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
        date: 'October 5, 2025',
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
        date: 'October 4, 2025',
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
        date: 'October 4, 2025',
        time: '2:00 PM - 5:00 PM',
        type: 'Technical Workshop',
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
        date: 'October 5, 2025',
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
        date: 'October 5, 2025',
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
        date: 'October 6, 2025',
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
        date: 'October 6, 2025',
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
        date: 'October 6, 2025',
        time: '9:30 AM - 4:00 PM',
        type: 'Full-day Seminar',
    },
];
