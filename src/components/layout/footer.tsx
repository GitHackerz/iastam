'use client';

import Link from 'next/link';
import Image from 'next/image';
import { navLinks } from '@/constants/navigation';
import { eventInfo } from '@/constants/event';
import {
    Mail,
    Phone,
    Linkedin,
    Instagram,
    Facebook,
    ArrowUpRight,
} from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Get the appropriate logo based on theme
    const getLogoSrc = () => {
        if (!mounted) return '/images/logos/iastam.png'; // Default fallback
        const isDark = resolvedTheme === 'dark';
        return isDark
            ? '/images/logos/iastam-w.png'
            : '/images/logos/iastam.png';
    };

    return (
        <footer className="bg-secondary/90 dark:bg-background/95 backdrop-blur-xl border-t border-border/10 text-foreground py-12 px-4 md:px-6 lg:px-8 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-accent/3 dark:from-primary/5 dark:to-accent/5" />
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 dark:bg-primary/10" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-y-1/2 dark:bg-accent/10" />

            <div className="container mx-auto relative z-10">
                {/* Top Section with Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Event Logo and Information */}
                    <div className="space-y-4">
                        <div className="flex flex-col items-start gap-3">
                            <div className="relative group">
                                <Image
                                    src={getLogoSrc()}
                                    alt={eventInfo.name}
                                    width={160}
                                    height={60}
                                    className="h-auto transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                            </div>

                            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
                                The annual gathering bringing together industry
                                professionals, academics, and students to
                                advance industrial applications technology in
                                Tunisia.
                            </p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-foreground flex items-center gap-2">
                            <div className="w-1 h-6 bg-gradient-to-b from-primary to-primary/60 rounded-full" />
                            Quick Links
                        </h3>
                        <nav className="flex flex-col space-y-3">
                            {navLinks.map(link => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-2 group flex items-center gap-2"
                                >
                                    <span className="w-0 group-hover:w-4 h-0.5 bg-primary/60 transition-all duration-300" />
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-foreground flex items-center gap-2">
                            <div className="w-1 h-6 bg-gradient-to-b from-primary to-primary/60 rounded-full" />
                            Contact Us
                        </h3>
                        <div className="space-y-4">
                            <div className="group">
                                <p className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-all duration-300">
                                    <div className="p-2 bg-muted/50 dark:bg-muted/20 rounded-lg group-hover:bg-primary/10 transition-colors duration-300">
                                        <Mail className="w-4 h-4" />
                                    </div>
                                    <a
                                        href={`mailto:${eventInfo.contact.chair.email}`}
                                        className="hover:text-primary transition-colors font-medium"
                                    >
                                        {eventInfo.contact.chair.email}
                                    </a>
                                </p>
                            </div>
                            <div className="group">
                                <p className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-all duration-300">
                                    <div className="p-2 bg-muted/50 dark:bg-muted/20 rounded-lg group-hover:bg-primary/10 transition-colors duration-300">
                                        <Phone className="w-4 h-4" />
                                    </div>
                                    <a
                                        href={`tel:${eventInfo.contact.chair.phone.replace(/\s/g, '')}`}
                                        className="hover:text-primary transition-colors font-medium"
                                    >
                                        {eventInfo.contact.chair.phone}
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Social Media & Organizations */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-foreground flex items-center gap-2">
                            <div className="w-1 h-6 bg-gradient-to-b from-primary to-primary/60 rounded-full" />
                            Connect With Us
                        </h3>
                        <div className="flex gap-3 mb-8">
                            <a
                                href="https://www.facebook.com/IASTunisiaAM"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group p-3 bg-muted/50 dark:bg-muted/20 hover:bg-primary hover:text-primary-foreground rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/25"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                                <span className="sr-only">Facebook</span>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/ieee-ias-tunisia-annual-meeting-426112305/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group p-3 bg-muted/50 dark:bg-muted/20 hover:bg-primary hover:text-primary-foreground rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/25"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                                <span className="sr-only">LinkedIn</span>
                            </a>
                            <a
                                href="https://www.instagram.com/iastam4.0/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group p-3 bg-muted/50 dark:bg-muted/20 hover:bg-primary hover:text-primary-foreground rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/25"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                                <span className="sr-only">Instagram</span>
                            </a>
                        </div>

                        <h3 className="text-lg font-semibold mb-4 text-foreground flex items-center gap-2">
                            <div className="w-1 h-6 bg-gradient-to-b from-accent to-accent/60 rounded-full" />
                            Organized By
                        </h3>
                        <div className="text-muted-foreground text-sm space-y-3">
                            <p>
                                <Link
                                    href="http://ieee.tn/"
                                    target="_blank"
                                    className="hover:text-primary transition-all duration-300 flex items-center gap-2 group hover:translate-x-1"
                                >
                                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary/60 transition-all duration-300" />
                                    IEEE Tunisia Section
                                    <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                                </Link>
                            </p>
                            <p>
                                <Link
                                    href="https://ias.ieee.tn"
                                    target="_blank"
                                    className="hover:text-primary transition-all duration-300 flex items-center gap-2 group hover:translate-x-1"
                                >
                                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary/60 transition-all duration-300" />
                                    IEEE IAS Tunisia Section
                                    <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                                </Link>
                            </p>
                            <p>
                                <Link
                                    href="https://esprit.ieee.tn/"
                                    target="_blank"
                                    className="hover:text-primary transition-all duration-300 flex items-center gap-2 group hover:translate-x-1"
                                >
                                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary/60 transition-all duration-300" />
                                    IEEE ESPRIT Student Branch
                                    <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                                </Link>
                            </p>
                            <p>
                                <Link
                                    href="https://ias-ies-pes-esprit.ieee.tn/"
                                    target="_blank"
                                    className="hover:text-primary transition-all duration-300 flex items-center gap-2 group hover:translate-x-1"
                                >
                                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary/60 transition-all duration-300" />
                                    IEEE IAS, IES & PES Joint Chapter
                                    <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Copyright Section */}
                <div className="pt-8 border-t border-border/30 text-center relative">
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                    <p className="text-sm text-muted-foreground">
                        &copy; {currentYear} {eventInfo.name}. All rights
                        reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
