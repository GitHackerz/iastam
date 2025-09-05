export interface PanelDiscussion {
    id: string;
    title: string;
    description: string;
    date: string;
    time: string;
    participants: string[];
    moderator?: string;
    location?: string;
}

export const panelDiscussions: PanelDiscussion[] = [
    {
        id: 'tunisian-tech-entrepreneurship',
        title: 'From Idea to Impact: Challenges and Success Stories in Tunisian Tech Entrepreneurship',
        description:
            'An engaging panel discussion exploring the journey of tech entrepreneurs in Tunisia, sharing insights on overcoming challenges and achieving success in the local and regional markets.',
        date: 'October 4, 2025',
        time: '10:30 - 12:00',
        participants: [
            'Local Tech Entrepreneurs',
            'Industry Experts',
            'Startup Founders',
            'Venture Capitalists',
        ],
        moderator: 'TBD',
        location: 'Main Conference Hall',
    },
];
