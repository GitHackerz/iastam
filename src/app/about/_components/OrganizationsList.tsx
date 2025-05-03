'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import Image from 'next/image';
import { useCallback, useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

export const organizationsData = [
    {
        title: 'IEEE IAS Tunisia Annual Meeting (IASTAM 5)',
        logo: '/images/logos/iastam.png',
        description: (
            <>
                <p>
                    The IEEE IAS Tunisia Annual Meeting (IASTAM) is the flagship
                    event organized by the IEEE IAS & IES & PES ESPRIT Student
                    Branch Joint Chapters in collaboration with the IAS Tunisia
                    Section and IEEE ESPRIT Student Branch. This prestigious
                    gathering brings together industry professionals, academics,
                    researchers, and students from across Tunisia and beyond.
                </p>
                <p>
                    IASTAM 5, scheduled for 2025, represents the 5th edition of
                    this premier platform for knowledge exchange and networking
                    in the fields of power systems, industrial automation,
                    electric machines, robotics, smart grid technologies, and
                    renewable energy. The event features keynote speeches,
                    technical sessions, workshops, and exhibitions that showcase
                    the latest advancements and innovations in industrial
                    applications of electrical and electronic engineering.
                </p>
            </>
        ),
    },
    {
        title: 'IEEE Global',
        logo: '/images/logos/ieee.png',
        description: (
            <>
                <p>
                    IEEE (Institute of Electrical and Electronics Engineers) is
                    the world&apos;s largest technical professional organization
                    dedicated to advancing technology for the benefit of
                    humanity. Founded in 1884, IEEE and its members inspire a
                    global community through its highly cited publications,
                    conferences, technology standards, and professional and
                    educational activities.
                </p>
                <p>
                    With more than 400,000 members in over 160 countries, IEEE
                    is a trusted voice for engineering, computing, and
                    technology information around the globe.
                </p>
            </>
        ),
        website: 'https://www.ieee.org/',
    },
    {
        title: 'IEEE Tunisia Section',
        logo: '/images/logos/ieee-tun.png',
        description: (
            <>
                <p>
                    The IEEE Tunisia Section was established in 2000 and has
                    grown to become one of the most active sections in Region 8.
                    The section brings together engineering professionals,
                    academics, and students across Tunisia to advance
                    technological innovation and excellence.
                </p>
                <p>
                    Through its various chapters and affinity groups, IEEE
                    Tunisia Section provides a vibrant platform for the exchange
                    of ideas, professional growth, and community engagement in
                    fields ranging from power engineering to artificial
                    intelligence.
                </p>
            </>
        ),
        website: 'https://ieee.tn/',
    },
    {
        title: 'IEEE Industry Applications Society (IAS)',
        logo: '/images/logos/ias.png',
        description: (
            <>
                <p>
                    The IEEE Industry Applications Society (IAS) is one of
                    IEEE&apos;s largest societies, focusing on the advancement
                    of theory and practice in electrical and electronic
                    engineering in industrial and commercial applications.
                </p>
                <p>
                    IAS sponsors international conferences, workshops, and
                    symposia designed to advance the theory and practice of
                    electrical and electronic engineering in the development,
                    design, manufacture, and application of electrical systems,
                    apparatus, devices, and controls for industrial and
                    commercial use.
                </p>
            </>
        ),
        website: 'https://ias.ieee.org/',
    },
    {
        title: 'IAS Tunisia Section',
        logo: '/images/logos/ias-tun.png',
        description: (
            <>
                <p>
                    The Industry Applications Society (IAS) Tunisia Section
                    Chapter connects professionals dedicated to the advancement
                    of theory and practice of electrical and electronic
                    engineering in Tunisia. Since its establishment, the chapter
                    has been instrumental in promoting technological excellence
                    in industrial applications.
                </p>
                <p>
                    The chapter organizes technical meetings, seminars, and
                    conferences that provide valuable networking and learning
                    opportunities for members working in areas such as
                    electrical installations, power systems, automation, and
                    industrial drives.
                </p>
            </>
        ),
        website: 'https://ias.ieee.tn/',
    },
    {
        title: 'IEEE ESPRIT Student Branch',
        logo: '/images/logos/ieee-esprit.png',
        description: (
            <>
                <p>
                    The IEEE ESPRIT Student Branch, established at ESPRIT School
                    of Engineering, is a dynamic community of engineering
                    students passionate about technological innovation and
                    professional development. The branch serves as a bridge
                    between classroom education and real-world engineering
                    challenges.
                </p>
                <p>
                    Through workshops, technical projects, competitions, and
                    social activities, the Student Branch fosters leadership,
                    teamwork, and technical skills among its members while
                    promoting the ideals and mission of IEEE within the academic
                    community.
                </p>
            </>
        ),
        website: 'http://esprit.ieee.tn/',
    },
    {
        title: 'IEEE IAS & IES & PES ESPRIT Student Branch Joint Chapters',
        logo: '/images/logos/iip-esprit.png',
        description: (
            <>
                <p>
                    The IEEE IAS (Industry Applications Society), IES
                    (Industrial Electronics Society), and PES (Power & Energy
                    Society) Joint Chapters at ESPRIT Student Branch represent a
                    collaborative effort to address interdisciplinary challenges
                    in industrial applications, electronics, and power systems.
                </p>
                <p>
                    These joint chapters organize specialized technical
                    activities, workshops, and industry visits that allow
                    members to gain in-depth knowledge and practical experience
                    in fields like power engineering, industrial automation,
                    renewable energy, and smart grid technologies.
                </p>
            </>
        ),
        website: 'https://ias-ies-pes-esprit.ieee.tn/',
    },
];

export const OrganizationsList = () => {
    const [headerRef, headerInView] = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    const [activeTab, setActiveTab] = useState<string>('all');
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    // Function to handle smooth scrolling to top
    const scrollToTop = useCallback(
        (e: React.MouseEvent<HTMLAnchorElement>) => {
            e.preventDefault();

            // Using Window.scrollTo with smooth behavior
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        },
        [],
    );

    const handleExpand = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    const organizationCategories = [
        { value: 'all', label: 'All Organizations' },
        { value: 'global', label: 'Global Organizations' },
        { value: 'local', label: 'Local Organizations' },
        { value: 'student', label: 'Student Chapters' },
    ];

    const getCategoryForOrg = (orgIndex: number): string => {
        if (orgIndex === 0) return 'all';
        if (orgIndex === 1 || orgIndex === 3) return 'global';
        if (orgIndex === 2 || orgIndex === 4) return 'local';
        return 'student';
    };

    const filteredOrganizations = organizationsData.filter(
        (_, index) =>
            activeTab === 'all' || getCategoryForOrg(index) === activeTab,
    );

    return (
        <div className="bg-background/50 relative">
            {/* Background decorative elements */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-[15%] -left-64 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute top-[60%] -right-64 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
            </div>

            {/* Section header */}
            <div
                ref={headerRef}
                className="container max-w-6xl mx-auto pt-20 pb-8 px-4"
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                        headerInView
                            ? { opacity: 1, y: 0 }
                            : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.6 }}
                    className="text-center space-y-4 mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        <span className="text-primary font-medium tracking-wider uppercase text-sm">
                            Our Ecosystem
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                        Our Collaborative Network
                    </h2>
                    <p className="text-muted-foreground max-w-xl mx-auto">
                        IASTAM is made possible through the collaboration of
                        these organizations working together toward
                        technological advancement.
                    </p>
                </motion.div>

                {/* Organization bubbles with Shadcn Tooltip */}
                <TooltipProvider>
                    <div className="hidden lg:flex justify-center items-center gap-4 mb-20 flex-wrap">
                        {organizationsData.map((org, index) => (
                            <motion.div
                                key={`bubble-${org.title}`}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.3,
                                    delay: index * 0.1,
                                }}
                            >
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <a
                                            href={`#org-${index}`}
                                            className="block w-20 h-20 rounded-full border border-border hover:border-primary transition-colors duration-200 flex items-center justify-center overflow-hidden bg-background p-2 hover:shadow-md hover:shadow-primary/10"
                                        >
                                            <div className="relative w-full h-full">
                                                <Image
                                                    src={org.logo}
                                                    alt={org.title}
                                                    fill
                                                    className="object-contain"
                                                />
                                            </div>
                                        </a>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>{org.title}</p>
                                    </TooltipContent>
                                </Tooltip>
                            </motion.div>
                        ))}
                    </div>
                </TooltipProvider>
            </div>

            {/* Organizations filter tabs */}
            <div className="container max-w-6xl mx-auto mb-8 px-4">
                <Tabs
                    defaultValue="all"
                    className="w-full"
                    onValueChange={setActiveTab}
                >
                    <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full">
                        {organizationCategories.map(category => (
                            <TabsTrigger
                                key={category.value}
                                value={category.value}
                            >
                                {category.label}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                </Tabs>
            </div>

            {/* Organizations list with smooth scrolling IDs */}
            <div className="container max-w-6xl mx-auto px-4 pb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredOrganizations.map((org, index) => (
                        <motion.div
                            key={org.title}
                            id={`org-${index}`}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                                type: 'spring',
                                stiffness: 100,
                            }}
                            whileHover={{
                                y: -10,
                                transition: { duration: 0.2 },
                            }}
                            className="group"
                        >
                            <div className="relative overflow-hidden rounded-xl border border-border bg-background/50 backdrop-blur-sm shadow-md hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 h-full flex flex-col">
                                {/* Decorative elements */}
                                <div className="absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16 bg-primary/5 rounded-full blur-xl opacity-70 transition-opacity group-hover:opacity-100"></div>
                                <div className="absolute bottom-0 left-0 w-24 h-24 -ml-12 -mb-12 bg-primary/5 rounded-full blur-xl opacity-70 transition-opacity group-hover:opacity-100"></div>

                                <div className="p-6 space-y-5 relative z-10 flex-grow flex flex-col">
                                    <div className="flex items-start gap-4 border-b border-border/50 pb-4">
                                        <motion.div
                                            className="w-16 h-16 flex-shrink-0 flex items-center justify-center bg-primary/5 rounded-full p-3"
                                            whileHover={{
                                                rotate: 5,
                                                scale: 1.05,
                                            }}
                                            transition={{
                                                type: 'spring',
                                                stiffness: 300,
                                            }}
                                        >
                                            <Image
                                                src={org.logo}
                                                alt={org.title}
                                                width={50}
                                                height={50}
                                                className="object-contain"
                                            />
                                        </motion.div>
                                        <h3 className="text-xl font-semibold tracking-tight flex-1 group-hover:text-primary transition-colors duration-300">
                                            {org.title}
                                        </h3>
                                    </div>

                                    <div className="text-sm text-muted-foreground space-y-3 flex-grow">
                                        <motion.div
                                            animate={{
                                                height:
                                                    expandedIndex === index
                                                        ? 'auto'
                                                        : '4.5rem',
                                                opacity: 1,
                                            }}
                                            initial={{ opacity: 0 }}
                                            transition={{ duration: 0.4 }}
                                            className="overflow-hidden"
                                        >
                                            {org.description}
                                        </motion.div>
                                    </div>

                                    <div className="pt-4 flex justify-between items-center border-t border-border/50 mt-auto">
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            onClick={() => handleExpand(index)}
                                            className="text-primary hover:text-primary hover:bg-primary/5 transition-all duration-300"
                                        >
                                            <motion.span
                                                initial={{ opacity: 1 }}
                                                animate={{ opacity: 1 }}
                                            >
                                                {expandedIndex === index
                                                    ? 'Read less'
                                                    : 'Read more'}
                                            </motion.span>
                                        </Button>

                                        {org.website && (
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                className="text-primary hover:text-primary hover:bg-primary/5 transition-all duration-300"
                                                asChild
                                            >
                                                <a
                                                    href={org.website}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 group/link"
                                                >
                                                    Visit
                                                    <motion.div
                                                        whileHover={{ x: 3 }}
                                                        transition={{
                                                            type: 'spring',
                                                            stiffness: 400,
                                                        }}
                                                    >
                                                        <ChevronRight className="w-3 h-3 transition-transform group-hover/link:translate-x-1" />
                                                    </motion.div>
                                                </a>
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Back to top button with improved animation */}
            <div className="container max-w-6xl mx-auto px-4 py-12 flex justify-center">
                <motion.a
                    href="#"
                    onClick={scrollToTop}
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-all duration-300 group px-5 py-2.5 rounded-full border border-border hover:border-primary hover:shadow-md hover:shadow-primary/5 bg-background/50 backdrop-blur-sm"
                    whileHover={{
                        y: -3,
                        boxShadow: '0 10px 25px -5px rgba(0, 128, 0, 0.1)',
                    }}
                    initial={{ opacity: 1 }}
                    whileTap={{ scale: 0.97 }}
                >
                    <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{
                            repeat: Infinity,
                            duration: 2,
                            ease: 'easeInOut',
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="transition-transform group-hover:-translate-y-1 duration-300"
                        >
                            <path d="m18 15-6-6-6 6" />
                        </svg>
                    </motion.div>
                    Back to top
                </motion.a>
            </div>
        </div>
    );
};
