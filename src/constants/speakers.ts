export interface Speaker {
    name: string;
    role: string;
    image: string;
    alt: string;
    type: string;
    description: string;
    social: {
        linkedin: string;
    };
}

export const keynoteSpeakers: Speaker[] = [
    {
        name: 'Mr. Aymen El-Refaie',
        role: 'IEEE IAS President',
        image: '/images/speakers/ayman.jpeg',
        alt: 'Prof. Aymen El-Refaie - IEEE IAS President and Opening Keynote Speaker at IASTAM 5',
        type: 'Keynote Speaker',
        description:
            'Professor of Electrical Engineering & Expert in Electric Machines and Drives',
        social: {
            linkedin: 'https://www.linkedin.com/in/ayman-el-refaie-83a61816/',
        },
    },
    {
        name: 'Mr. Srikanth Pillai',
        role: 'IAS CMD Chair',
        image: '/images/speakers/Srikanth.jpeg',
        alt: 'Mr. Srikanth Pillai - IAS CMD Chair and Keynote Speaker at IASTAM 5',
        type: 'Keynote Speaker',
        description:
            'Technology Leader in Artificial Intelligence and Machine Learning',
        social: {
            linkedin: 'https://www.linkedin.com/in/srikanthvpillai/',
        },
    },
    {
        name: 'Mr. Nehad El-Sherif',
        role: 'IAS Global Representative',
        image: '/images/speakers/nihed.jpeg',
        alt: 'Mr. Nehad El-Sherif - IAS Global Representative at IASTAM 5',
        type: 'Keynote Speaker',
        description:
            'Entrepreneur & Innovator in Engineering Standards and Smart Technologies',
        social: {
            linkedin: 'https://www.linkedin.com/in/nehad-el-sherif-95293921/',
        },
    },
    {
        name: 'Mr.Wajih Letaief',
        role: 'Workshop Speaker',
        image: '/images/speakers/wajih.jpg',
        alt: 'Wajih Letaief - Workshop Speaker at IASTAM 5',
        type: 'Workshop Speaker',
        description:
            'Specialist in Cybersecurity and Generative AI Applications',
        social: {
            linkedin: 'https://www.linkedin.com/in/wajihletaief/',
        },
    },
    // {
    //     name: 'Ms. Yesmine',
    //     role: 'IASTAM Chair',
    //     image: '/images/board/yesmine.png',
    //     alt: 'Ms. Yesmine - IASTAM Chair at IASTAM 5',
    //     type: 'IASTAM Chair',
    //     description: 'Expert in AI and Data Science',
    //     social: {
    //         linkedin: 'https://www.linkedin.com/in/yesmine-mejri-bb96a3244/',
    //     },
    // },
    // {
    //     name: 'Mr. Adam Lassidi',
    //     role: 'IEEE ESPRIT SB Chairperson',
    //     image: '/images/board/adam.jpeg',
    //     alt: 'Mr. Adam Lassidi - IEEE ESPRIT SB Chairperson at IASTAM 5',
    //     type: 'IEEE ESPRIT SB Chairperson',
    //     description: 'Expert in AI and Data Science',
    //     social: {
    //         linkedin: 'https://www.linkedin.com/in/adam-lassidi-647793272/',
    //     },
    // },
];
