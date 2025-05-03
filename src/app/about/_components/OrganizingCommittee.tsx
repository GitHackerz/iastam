'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone } from 'lucide-react';

// Team member data structure
interface TeamMember {
    name: string;
    position: string;
    email: string;
    phone?: string;
    image: string;
}

// Organizing committee data
const teamMembers: TeamMember[] = [
    {
        name: 'Yesmine Mejri',
        position: 'Chair',
        email: 'yesmine.mejri@ieee.org',
        phone: '20907957',
        image: '/images/board/yesmine.png',
    },
    {
        name: 'Ons Nagara',
        position: 'Vice Chair',
        email: 'ons.nagara@ieee.org',
        phone: '55616110',
        image: '/images/board/ons.png',
    },
    {
        name: 'Sabaa Melliti',
        position: 'Secretary',
        email: 'sabaamelliti@ieee.org',
        phone: '99651990',
        image: '/images/board/sabaa.png',
    },
    {
        name: 'Seif Ouarag',
        position: 'Treasurer',
        email: 'ouarag@ieee.org',
        phone: '23100782',
        image: '/images/board/seif.png',
    },
    {
        name: 'Aziz Hbaili',
        position: 'Media Department Chair',
        email: 'azizhbaili@ieee.org',
        image: '/images/board/hbaili.png',
    },
    {
        name: 'Mohamed Habib Allah Bibani',
        position: 'Webmaster',
        email: 'mohamedhabiballah.bibani@ieee.org',
        phone: '58906040',
        image: '/images/board/habib.png', // Using adam.png as a placeholder
    },
    {
        name: 'Adem Fennani',
        position: 'Ambassadors Coordinator',
        email: 'adem.fennani@ieee.org',
        phone: '29 218 948',
        image: '/images/board/adam.png',
    },
    {
        name: 'Nour Chargui',
        position: 'Speakers Coordinator',
        email: 'nour.chargui@ieee.org',
        phone: '58401240',
        image: '/images/board/nour.png',
    },
    {
        name: 'Aziz Chalghaf',
        position: 'Sponsoring Manager',
        email: 'azizchalghaf@ieee.org',
        phone: '27969216',
        image: '/images/board/AZIZ.png', // Using the same AZIZ.png as a placeholder
    },
    {
        name: 'Razi Sniha',
        position: 'Logistics Manager',
        email: 'razisniha@ieee.org',
        phone: '26995933',
        image: '/images/board/razi.png',
    },
    {
        name: 'Rouba Souidi',
        position: 'Program Manager',
        email: 'rouba.souidi@ieee.org',
        phone: '52888661',
        image: '/images/board/rouba.png',
    },
    {
        name: 'Youssef Kaabachi',
        position: 'Communication Manager',
        email: 'youssefkaabachi@ieee.org',
        phone: '24584137',
        image: '/images/board/youssef.png',
    },
    {
        name: 'Fedi Hmida',
        position: 'HR',
        email: 'fedi.hmida@ieee.org',
        phone: '93722130',
        image: '/images/board/fedi.png',
    },
];

export const OrganizingCommittee = () => {
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    return (
        <section
            ref={ref}
            className="py-24 relative bg-background overflow-hidden border-t border-border/50"
            id="organizing-committee"
        >
            {/* Background pattern */}
            <div className="absolute inset-0 bg-grid-small-black/[0.2] -z-10 dark:bg-grid-small-white/[0.2]" />

            {/* Abstract shapes */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-20 right-12 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-pulse" />
                <div
                    className="absolute bottom-20 left-12 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-pulse"
                    style={{ animationDelay: '1s' }}
                />
            </div>

            <div className="container max-w-6xl mx-auto px-4">
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
                            Meet the Team
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                        Our{' '}
                        <span className="text-primary">
                            Organizing Committee
                        </span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Meet the dedicated team of professionals who are working
                        tirelessly to make IASTAM 5 a successful and memorable
                        event.
                    </p>
                </motion.div>

                {/* Team Members Grid - Updated with integrated design */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 30 }}
                            animate={
                                inView
                                    ? { opacity: 1, y: 0 }
                                    : { opacity: 0, y: 30 }
                            }
                            transition={{
                                duration: 0.5,
                                delay: 0.1 * index,
                                type: 'spring',
                                stiffness: 100,
                            }}
                            whileHover={{
                                y: -10,
                                transition: { duration: 0.2 },
                            }}
                            className="group"
                        >
                            <div className="relative rounded-xl overflow-hidden border border-border shadow-md hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 h-full">
                                {/* Decorative elements */}
                                <div className="absolute top-0 right-0 w-24 h-24 -mr-12 -mt-12 bg-primary/5 rounded-full blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>

                                {/* Member Card - Integrated design */}
                                <div className="relative aspect-[3/4] w-full overflow-hidden">
                                    <motion.div
                                        whileHover={{ scale: 1.08 }}
                                        transition={{
                                            type: 'spring',
                                            stiffness: 300,
                                        }}
                                        className="w-full h-full"
                                    >
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </motion.div>

                                    {/* Overlay with stronger gradient for text readability */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent group-hover:opacity-90 transition-opacity duration-300" />

                                    {/* Position Badge with gleaming animation */}
                                    <motion.div
                                        className="absolute top-3 right-3 bg-primary/90 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm shadow-sm"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        initial={{ opacity: 0.9 }}
                                        animate={{ opacity: [0.9, 1, 0.9] }}
                                        transition={{
                                            opacity: {
                                                repeat: Infinity,
                                                duration: 2,
                                            },
                                        }}
                                    >
                                        {member.position}
                                    </motion.div>

                                    {/* Integrated Content - Name and Contact Info - Reduced spacing */}
                                    <div className="absolute bottom-0 left-0 right-0 p-4 pb-5 text-white space-y-2 backdrop-blur-sm bg-gradient-to-t from-black/80 to-transparent">
                                        <motion.h3
                                            className="text-base md:text-lg font-bold group-hover:text-primary-foreground transition-colors duration-300"
                                            initial={{ y: 0 }}
                                            whileHover={{ y: -2 }}
                                        >
                                            {member.name}
                                        </motion.h3>

                                        {/* Contact Information with interactive elements - Reduced spacing */}
                                        <div className="space-y-1.5">
                                            <motion.div
                                                className="flex items-center gap-2 group/email"
                                                whileHover={{ x: 5 }}
                                                transition={{
                                                    type: 'spring',
                                                    stiffness: 300,
                                                }}
                                            >
                                                <div className="p-1 rounded-full bg-primary/20 text-white flex-shrink-0 group-hover/email:bg-primary/40 transition-colors duration-300">
                                                    <Mail className="w-3 h-3" />
                                                </div>
                                                <a
                                                    href={`mailto:${member.email}`}
                                                    className="text-white/90 text-xs hover:text-white transition-colors duration-300 break-all line-clamp-1"
                                                >
                                                    {member.email}
                                                </a>
                                            </motion.div>

                                            {member.phone && (
                                                <motion.div
                                                    className="flex items-center gap-2 group/phone"
                                                    whileHover={{ x: 5 }}
                                                    transition={{
                                                        type: 'spring',
                                                        stiffness: 300,
                                                    }}
                                                >
                                                    <div className="p-1 rounded-full bg-primary/20 text-white flex-shrink-0 group-hover/phone:bg-primary/40 transition-colors duration-300">
                                                        <Phone className="w-3 h-3" />
                                                    </div>
                                                    <a
                                                        href={`tel:${member.phone}`}
                                                        className="text-white/90 text-xs hover:text-white transition-colors duration-300"
                                                    >
                                                        {member.phone}
                                                    </a>
                                                </motion.div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
