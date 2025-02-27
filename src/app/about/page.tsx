'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface OrganizationProps {
    title: string;
    logo: string;
    description: React.ReactNode;
    index: number;
    website?: string;
}

const Organization = ({
    title,
    logo,
    description,
    index,
    website,
}: OrganizationProps) => {
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.2,
        rootMargin: '-100px 0px',
    });

    const isEven = index % 2 === 0;

    return (
        <section
            ref={ref}
            className="py-20 border-b border-border/50 last:border-none"
        >
            <div className="container max-w-6xl px-4 mx-auto">
                <div
                    className={`grid md:grid-cols-2 gap-12 items-center ${isEven ? '' : 'md:grid-flow-dense'}`}
                >
                    {/* Logo Side */}
                    <motion.div
                        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                        animate={
                            inView
                                ? { opacity: 1, x: 0 }
                                : { opacity: 0, x: isEven ? -50 : 50 }
                        }
                        transition={{ duration: 0.7 }}
                        className="relative aspect-square max-w-sm mx-auto"
                    >
                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/10 to-primary/0 animate-pulse" />
                        <div className="relative h-full w-full flex items-center justify-center p-4">
                            <Image
                                src={logo}
                                alt={`${title} Logo`}
                                width={300}
                                height={300}
                                className="object-contain max-h-64"
                            />
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                        animate={
                            inView
                                ? { opacity: 1, x: 0 }
                                : { opacity: 0, x: isEven ? 50 : -50 }
                        }
                        transition={{ duration: 0.7 }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl font-bold tracking-tight">
                            {title}
                        </h2>
                        <div className="space-y-4 text-muted-foreground">
                            {description}
                        </div>
                        {website && (
                            <div className="pt-4">
                                <Button variant="outline" asChild>
                                    <Link
                                        href={website}
                                        target="_blank"
                                        className="flex items-center gap-2"
                                    >
                                        Visit Website{' '}
                                        <ArrowRight className="h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default function AboutPage() {
    const [headerRef, headerInView] = useInView({
        triggerOnce: false,
        threshold: 0.2,
    });

    const organizations = [
        {
            title: 'IEEE Global',
            logo: '/images/ieee-logo.png',
            description: (
                <>
                    <p>
                        IEEE (Institute of Electrical and Electronics Engineers)
                        is the world&apos;s largest technical professional
                        organization dedicated to advancing technology for the
                        benefit of humanity. Founded in 1884, IEEE and its
                        members inspire a global community through its highly
                        cited publications, conferences, technology standards,
                        and professional and educational activities.
                    </p>
                    <p>
                        With more than 400,000 members in over 160 countries,
                        IEEE is a trusted voice for engineering, computing, and
                        technology information around the globe.
                    </p>
                </>
            ),
            website: 'https://www.ieee.org/',
        },
        {
            title: 'IEEE Tunisia Section',
            logo: '/images/ieee-tunisia-section-logo.png',
            description: (
                <>
                    <p>
                        The IEEE Tunisia Section was established in 2000 and has
                        grown to become one of the most active sections in
                        Region 8. The section brings together engineering
                        professionals, academics, and students across Tunisia to
                        advance technological innovation and excellence.
                    </p>
                    <p>
                        Through its various chapters and affinity groups, IEEE
                        Tunisia Section provides a vibrant platform for the
                        exchange of ideas, professional growth, and community
                        engagement in fields ranging from power engineering to
                        artificial intelligence.
                    </p>
                </>
            ),
            website: 'https://ieee.tn/',
        },
        {
            title: 'IEEE Industry Applications Society (IAS)',
            logo: '/images/ieee-ias-logo.png',
            description: (
                <>
                    <p>
                        The IEEE Industry Applications Society (IAS) is one of
                        IEEE&apos;s largest societies, focusing on the
                        advancement of theory and practice in electrical and
                        electronic engineering in industrial and commercial
                        applications.
                    </p>
                    <p>
                        IAS sponsors international conferences, workshops, and
                        symposia designed to advance the theory and practice of
                        electrical and electronic engineering in the
                        development, design, manufacture, and application of
                        electrical systems, apparatus, devices, and controls for
                        industrial and commercial use.
                    </p>
                </>
            ),
            website: 'https://ias.ieee.org/',
        },
        {
            title: 'IAS Tunisia Section',
            logo: '/images/ias-tunisia-logo.png',
            description: (
                <>
                    <p>
                        The Industry Applications Society (IAS) Tunisia Section
                        Chapter connects professionals dedicated to the
                        advancement of theory and practice of electrical and
                        electronic engineering in Tunisia. Since its
                        establishment, the chapter has been instrumental in
                        promoting technological excellence in industrial
                        applications.
                    </p>
                    <p>
                        The chapter organizes technical meetings, seminars, and
                        conferences that provide valuable networking and
                        learning opportunities for members working in areas such
                        as electrical installations, power systems, automation,
                        and industrial drives.
                    </p>
                </>
            ),
            website: 'https://ias.ieee.tn/',
        },
        {
            title: 'IEEE ESPRIT Student Branch',
            logo: '/images/ieee-esprit-sb-logo.png',
            description: (
                <>
                    <p>
                        The IEEE ESPRIT Student Branch, established at ESPRIT
                        School of Engineering, is a dynamic community of
                        engineering students passionate about technological
                        innovation and professional development. The branch
                        serves as a bridge between classroom education and
                        real-world engineering challenges.
                    </p>
                    <p>
                        Through workshops, technical projects, competitions, and
                        social activities, the Student Branch fosters
                        leadership, teamwork, and technical skills among its
                        members while promoting the ideals and mission of IEEE
                        within the academic community.
                    </p>
                </>
            ),
            website:
                'https://www.linkedin.com/company/ieee-esprit-student-branch/',
        },
        {
            title: 'IEEE IAS & IES & PES ESPRIT Student Branch Joint Chapters',
            logo: '/images/ieee-esprit-joint-chapters-logo.png',
            description: (
                <>
                    <p>
                        The IEEE IAS (Industry Applications Society), IES
                        (Industrial Electronics Society), and PES (Power &
                        Energy Society) Joint Chapters at ESPRIT Student Branch
                        represent a collaborative effort to address
                        interdisciplinary challenges in industrial applications,
                        electronics, and power systems.
                    </p>
                    <p>
                        These joint chapters organize specialized technical
                        activities, workshops, and industry visits that allow
                        members to gain in-depth knowledge and practical
                        experience in fields like power engineering, industrial
                        automation, renewable energy, and smart grid
                        technologies.
                    </p>
                </>
            ),
            website:
                'https://www.linkedin.com/company/ieee-ias-ies-pes-esprit-sb-jc/',
        },
        {
            title: 'IEEE IAS Tunisia Annual Meeting (IASTAM)',
            logo: '/images/ias-tam-logo.png',
            description: (
                <>
                    <p>
                        The IEEE IAS Tunisia Annual Meeting (IASTAM) is the
                        flagship event organized by the IEEE IAS & IES & PES
                        ESPRIT Student Branch Joint Chapters in collaboration
                        with the IAS Tunisia Section and IEEE ESPRIT Student
                        Branch. This prestigious gathering brings together
                        industry professionals, academics, researchers, and
                        students from across Tunisia and beyond.
                    </p>
                    <p>
                        Now in its 5th edition, IASTAM has established itself as
                        a premier platform for knowledge exchange and networking
                        in the fields of power systems, industrial automation,
                        electric machines, robotics, smart grid technologies,
                        and renewable energy. The event features keynote
                        speeches, technical sessions, workshops, and exhibitions
                        that showcase the latest advancements and innovations in
                        industrial applications of electrical and electronic
                        engineering.
                    </p>
                </>
            ),
        },
    ];

    return (
        <div className="bg-background">
            {/* Hero Section */}
            <section
                ref={headerRef}
                className="relative py-28 overflow-hidden border-b border-border/50"
            >
                <div className="absolute inset-0 bg-grid-small-black/[0.2] -z-10 dark:bg-grid-small-white/[0.2]" />

                {/* Gradient Background */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl -z-10" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl -z-10" />
                </div>

                <div className="container max-w-6xl px-4 mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={
                            headerInView
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: 20 }
                        }
                        transition={{ duration: 0.7 }}
                        className="text-center space-y-6 max-w-3xl mx-auto"
                    >
                        <span className="text-primary font-medium tracking-wider uppercase">
                            About us
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                            Powering Innovation Through Collaboration
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            Learn about the organizations behind IASTAM and
                            their commitment to advancing technology for the
                            benefit of humanity
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Organization Sections */}
            {organizations.map((org, index) => (
                <Organization
                    key={org.title}
                    title={org.title}
                    logo={org.logo}
                    description={org.description}
                    index={index}
                    website={org.website}
                />
            ))}
        </div>
    );
}
