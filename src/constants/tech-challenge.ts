import { Calendar, Users, Target, Trophy } from 'lucide-react';

export const challengeStats = [
    {
        icon: Users,
        value: '100+',
        label: 'Participants',
    },
    {
        icon: Target,
        value: '4',
        label: 'Phases',
    },
    {
        icon: Calendar,
        value: '10 Weeks',
        label: 'Duration',
    },
    {
        icon: Trophy,
        value: '6',
        label: 'Technical Partners',
    },
];

export const challengePhases = [
    {
        phase: 'Phase 1: Eligibility & Idea Screening',
        date: 'Aug 11 – Aug 17, 2025',
        durationDays: 7,
        status: 'completed',
        description: 'Eligibility check and idea screening',
    },

    {
        phase: 'Phase 2: Ideation & Development',
        date: 'Aug 25 – Sep 30, 2025',
        durationDays: 37,
        status: 'active',
        description: 'Ideation, validation and initial development',
    },
    {
        phase: 'Phase 3: Technical Development & MVP Delivery',
        date: 'Sep 11 – Sep 30, 2025',
        durationDays: 20,
        status: 'upcoming',
        description: 'Technical build and MVP delivery',
    },
    {
        phase: 'Phase 4: Final Pitch',
        date: 'Oct 4, 2025',
        durationDays: 1,
        status: 'upcoming',
        description: 'Final presentations in front of the jury',
    },
];
