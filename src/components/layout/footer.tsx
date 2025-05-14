'use client';

import Link from 'next/link';
import Image from 'next/image';
import { navLinks } from '@/constants/navigation';
import { eventName, chairEmail, chairPhone } from '@/constants/info';
import {
    Mail,
    Phone,
    Linkedin,
    Instagram,
    Facebook,
    ArrowUpRight,
} from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-50 text-slate-800 py-8 px-4 md:px-6 lg:px-8">
            <div className="container mx-auto">
                {/* Top Section with Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Event Logo and Information */}
                    <div className="space-y-4">
                        <div className="flex flex-col items-start gap-3">
                            <Image
                                src="/images/logos/iastam.png"
                                alt={eventName}
                                width={160}
                                height={60}
                                className="h-auto"
                            />

                            <p className="text-slate-600 text-sm max-w-xs">
                                The annual gathering bringing together industry
                                professionals, academics, and students to
                                advance industrial applications technology in
                                Tunisia.
                            </p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-slate-900">
                            Quick Links
                        </h3>
                        <nav className="flex flex-col space-y-2">
                            {navLinks.map(link => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-slate-600 hover:text-primary transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-slate-900">
                            Contact Us
                        </h3>
                        <div className="space-y-3">
                            <p className="flex items-center gap-2 text-slate-600">
                                <Mail className="w-4 h-4" />
                                <a
                                    href={`mailto:${chairEmail}`}
                                    className="hover:text-primary transition-colors"
                                >
                                    {chairEmail}
                                </a>
                            </p>
                            <p className="flex items-center gap-2 text-slate-600">
                                <Phone className="w-4 h-4" />
                                <a
                                    href={`tel:${chairPhone.replace(/\s/g, '')}`}
                                    className="hover:text-primary transition-colors"
                                >
                                    {chairPhone}
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Social Media & Organizations */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-slate-900">
                            Connect With Us
                        </h3>
                        <div className="flex gap-3 mb-6">
                            <a
                                href="https://www.facebook.com/IASTunisiaAM"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-slate-200 hover:bg-primary hover:text-white rounded-full transition-colors"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-5 h-5" />
                                <span className="sr-only">Facebook</span>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/ieee-ias-tunisia-annual-meeting-426112305/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-slate-200 hover:bg-primary hover:text-white rounded-full transition-colors"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-5 h-5" />
                                <span className="sr-only">LinkedIn</span>
                            </a>
                            <a
                                href="https://www.instagram.com/iastam4.0/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-slate-200 hover:bg-primary hover:text-white rounded-full transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-5 h-5" />
                                <span className="sr-only">Instagram</span>
                            </a>
                        </div>

                        <h3 className="text-lg font-semibold mb-3 text-slate-900">
                            Organized By
                        </h3>
                        <div className="text-slate-600 text-sm space-y-2">
                            <p>
                                <Link
                                    href="http://ieee.tn/"
                                    target="_blank"
                                    className="hover:text-primary transition-colors flex items-center gap-1"
                                >
                                    IEEE Tunisia Section
                                    <ArrowUpRight className="w-3 h-3" />
                                </Link>
                            </p>
                            <p>
                                <Link
                                    href="https://ias.ieee.tn"
                                    target="_blank"
                                    className="hover:text-primary transition-colors flex items-center gap-1"
                                >
                                    IEEE IAS Tunisia Section
                                    <ArrowUpRight className="w-3 h-3" />
                                </Link>
                            </p>
                            <p>
                                <Link
                                    href="https://esprit.ieee.tn/"
                                    target="_blank"
                                    className="hover:text-primary transition-colors flex items-center gap-1"
                                >
                                    IEEE ESPRIT Student Branch
                                    <ArrowUpRight className="w-3 h-3" />
                                </Link>
                            </p>
                            <p>
                                <Link
                                    href="https://ias-ies-pes-esprit.ieee.tn/"
                                    target="_blank"
                                    className="hover:text-primary transition-colors flex items-center gap-1"
                                >
                                    IEEE IAS, IES & PES Joint Chapter
                                    <ArrowUpRight className="w-3 h-3" />
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Copyright Section */}
                <div className="pt-6 border-t border-slate-200 text-center">
                    <p className="text-sm text-slate-600">
                        &copy; {currentYear} {eventName}. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
