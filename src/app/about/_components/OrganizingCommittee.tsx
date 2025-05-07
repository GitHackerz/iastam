'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone } from 'lucide-react';
import { teamMembers } from '@/constants/team';

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

                {/* Team Members Grid - Updated with lighter design */}
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
                            <div className="relative rounded-xl overflow-hidden border border-border shadow-md hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 h-full bg-card/80">
                                {/* Decorative elements */}
                                <div className="absolute top-0 right-0 w-24 h-24 -mr-12 -mt-12 bg-primary/5 rounded-full blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>

                                {/* Member Card - Lightened design */}
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

                                    {/* Lighter overlay with subtle gradient for better visibility */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent group-hover:opacity-70 transition-opacity duration-300" />

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

                                    {/* Colorful Content Area with enhanced design */}
                                    <div className="absolute bottom-0 left-0 right-0 p-4 pb-5 text-white space-y-2">
                                        {/* Colorful background with gradient and glass effect */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/70 to-primary/20 backdrop-blur-md -z-10" />

                                        <motion.h3
                                            className="text-base md:text-lg font-bold text-white group-hover:text-white/90 transition-colors duration-300 drop-shadow-sm"
                                            initial={{ y: 0 }}
                                            whileHover={{ y: -2 }}
                                        >
                                            {member.name}
                                        </motion.h3>

                                        {/* Contact Information with improved visibility and colorful accents */}
                                        <div className="space-y-1.5">
                                            <motion.div
                                                className="flex items-center gap-2 group/email"
                                                whileHover={{ x: 5 }}
                                                transition={{
                                                    type: 'spring',
                                                    stiffness: 300,
                                                }}
                                            >
                                                <div className="p-1 rounded-full bg-white/30 text-white flex-shrink-0 group-hover/email:bg-white/50 transition-colors duration-300 shadow-sm">
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
                                                    <div className="p-1 rounded-full bg-white/30 text-white flex-shrink-0 group-hover/phone:bg-white/50 transition-colors duration-300 shadow-sm">
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
