import {
    Search,
    CheckCircle,
    Lightbulb,
    Briefcase,
    Target,
    Brain,
    Cog,
    Mic,
} from 'lucide-react';
import { TimelineItemData } from '@/components/ui/vertical-timeline';

export const phases: TimelineItemData[] = [
    {
        id: 'phase-1-screening',
        title: 'Phase 1: Eligibility & Idea Screening',
        date: 'Aug 11 – Aug 17',
        duration: '7 days',
        description:
            'Comprehensive screening of applicants and evaluation of innovative ideas. We assess the feasibility, originality, and potential impact of each submission.',
        icon: Search,
        side: 'left',
    },
    {
        id: 'phase-1-selection',
        title: 'Phase 1 Selection',
        date: 'Aug 18 – Aug 19',
        duration: '2 days',
        description:
            'Final selection process where qualified candidates and promising ideas are chosen to advance to the next phase of the challenge.',
        icon: CheckCircle,
        side: 'right',
    },
    {
        id: 'phase-2-1-ideation',
        title: 'Phase 2.1: Ideation / BM / BMC',
        date: 'Aug 20 – Sep 10',
        duration: '22 days',
        description:
            'Deep dive into ideation process, business modeling, and business model canvas development. Teams refine their concepts and establish solid foundations.',
        icon: Lightbulb,
        side: 'left',
    },
    {
        id: 'phase-2-2-strategy',
        title: 'Phase 2.2: Business Strategy',
        date: 'Sep 11 – Sep 23',
        duration: '13 days',
        description:
            'Strategic planning phase where teams develop comprehensive business strategies, market analysis, and competitive positioning.',
        icon: Briefcase,
        side: 'right',
    },
    {
        id: 'phase-2-3-pitch-deck',
        title: 'Phase 2.3: Pitch Deck',
        date: 'Sep 24 – Sep 30',
        duration: '7 days',
        description:
            'Creation of compelling pitch presentations that effectively communicate the value proposition, market opportunity, and business potential.',
        icon: Target,
        side: 'left',
    },
    {
        id: 'phase-3-1-system-design',
        title: 'Phase 3.1: System Design',
        date: 'Sep 11 – Sep 15',
        duration: '5 days',
        description:
            'Technical architecture and system design phase where teams plan and design the technical infrastructure for their solutions.',
        icon: Brain,
        side: 'right',
    },
    {
        id: 'phase-3-2-mvp',
        title: 'Phase 3.2: MVP Delivery',
        date: 'Sep 16 – Sep 30',
        duration: '15 days',
        description:
            'Development and delivery of minimum viable product (MVP) demonstrating core functionality and proof of concept.',
        icon: Cog,
        side: 'left',
    },
    {
        id: 'phase-4-final',
        title: 'Phase 4: Final Pitch',
        date: 'Oct 4',
        duration: '1 day',
        description:
            'The culminating event where teams present their complete solutions to judges and stakeholders in a professional pitch competition.',
        icon: Mic,
        side: 'right',
    },
];
