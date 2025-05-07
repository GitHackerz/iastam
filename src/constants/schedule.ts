export interface ScheduleEvent {
    time: string;
    title: string;
    description: string;
}

export interface DailySchedule {
    day1: ScheduleEvent[];
    day2: ScheduleEvent[];
    day3: ScheduleEvent[];
}

export const schedule: DailySchedule = {
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

export const scheduleDateLabels = {
    day1: 'Day 1 - October 4, 2025',
    day2: 'Day 2 - October 5, 2025',
    day3: 'Day 3 - October 6, 2025',
};

export const dayLabels = {
    day1: {
        short: 'Oct 4',
        label: 'Day 1',
    },
    day2: {
        short: 'Oct 5',
        label: 'Day 2',
    },
    day3: {
        short: 'Oct 6',
        label: 'Day 3',
    },
};
