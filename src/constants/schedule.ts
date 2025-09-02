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
            time: '09:00 AM - 12:00 PM',
            title: 'Opening Ceremony',
            description:
                'Welcome address and keynote speech by distinguished guests.',
        },
        /*{
            time: '04:30 PM - 05:00 PM',
            title: 'Coffee Break',
            description:
                'Coffee break with refreshments and networking opportunities.',
        },*/
        {
            time: '05:00 PM - 07:00 PM',
            title: 'Poster Session & Job Fair Display',
            description: 'Poster presentations and job fair display.',
        },
        {
            time: '10:00 PM - 12:00 AM',
            title: 'Social Activities',
            description: 'Social activities and networking.',
        },
    ],
    day2: [
        {
            time: '08:00 AM - 10:00 AM',
            title: 'Breakfast',
            description: 'Breakfast at the venue restaurant.',
        },
        {
            time: '09:30 AM - 12:00 PM',
            title: 'Panel Discussion / Workshop A / Workshop B',
            description: 'Panel discussion and parallel workshops.',
        },
        {
            time: '02:00 PM - 04:00 PM',
            title: 'Pitch Tech / Round Tables / Workshop C / Workshop D',
            description: 'Pitch Tech, round tables, and parallel workshops.',
        },
        {
            time: '05:00 PM - 08:00 PM',
            title: 'Pitch Non-Technical Challenge',
            description: 'Presentations on non-technical challenges.',
        },
        {
            time: '08:00 PM - 12:00 AM',
            title: 'Evening Party',
            description: 'Party with music and entertainment.',
        },
    ],
    day3: [
        {
            time: '08:00 AM - 09:00 AM',
            title: 'Breakfast',
            description: 'Breakfast at the venue restaurant.',
        },
        {
            time: '09:30 AM - 12:00 PM',
            title: 'Award Ceremony, Hackathon Winners, Best Ambassador',
            description: 'Recognition of winners and closing ceremony.',
        },
        {
            time: '12:00 PM - 01:00 PM',
            title: 'Check-Out',
            description: 'Hotel check-out.',
        },
        {
            time: '01:00 PM - 02:30 PM',
            title: 'Networking Lunch',
            description: 'Networking lunch with participants and guests.',
        },
        {
            time: '02:30 PM - 04:00 PM',
            title: 'Tourist journey',
            description: 'Tourist trip and cultural visit.',
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
