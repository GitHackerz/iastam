'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export interface OrganizationProps {
    title: string;
    logo: string;
    description: React.ReactNode;
    index: number;
    website?: string;
}

export const Organization = ({
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
            className="py-16 border-b border-border/50 last:border-none group"
        >
            <div className="container max-w-6xl px-4 mx-auto">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    {/* Logo Side */}
                    <motion.div
                        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                        animate={
                            inView
                                ? { opacity: 1, x: 0 }
                                : { opacity: 0, x: isEven ? -50 : 50 }
                        }
                        transition={{ duration: 0.7 }}
                        className={cn(
                            'relative aspect-square max-w-sm mx-auto',
                            !isEven ? 'md:order-last' : '',
                        )}
                    >
                        <div className="relative h-full w-full flex items-center justify-center p-6">
                            <div className="absolute inset-0 bg-primary/5 rounded-2xl rotate-3 transform-gpu group-hover:rotate-6 transition-all duration-500"></div>
                            <div className="absolute inset-0 bg-primary/5 rounded-2xl -rotate-3 transform-gpu group-hover:-rotate-6 transition-all duration-500"></div>
                            <div className="relative transform group-hover:scale-105 transition-all duration-300">
                                <Image
                                    src={logo}
                                    alt={`${title} Logo`}
                                    width={300}
                                    height={300}
                                    className="object-contain max-h-64 drop-shadow-md"
                                />
                            </div>
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
                        <h2 className="text-3xl font-bold tracking-tight group-hover:text-primary transition-colors duration-300">
                            {title}
                        </h2>
                        <div className="space-y-4 text-muted-foreground leading-relaxed">
                            {description}
                        </div>
                        {website && (
                            <div className="pt-6">
                                <Button
                                    variant="outline"
                                    asChild
                                    className="group/button hover:border-primary hover:bg-primary/5"
                                >
                                    <Link
                                        href={website}
                                        target="_blank"
                                        className="flex items-center gap-2"
                                    >
                                        Visit Website{' '}
                                        <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1" />
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
