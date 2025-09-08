'use client';

import { MapPin, Mail, Phone, Calendar, ExternalLink } from 'lucide-react';
import { eventInfo } from '@/constants/event';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export const ContactInfo = () => {
    const contactItems = [
        {
            icon: MapPin,
            title: 'Event Location',
            content: eventInfo.venue.address,
            subtitle: eventInfo.venue.city,
            color: 'text-blue-500',
            bgColor: 'bg-blue-500/10',
        },
        {
            icon: Calendar,
            title: 'Event Date',
            content: eventInfo.date,
            subtitle: eventInfo.venue.timezone,
            color: 'text-green-500',
            bgColor: 'bg-green-500/10',
        },
        {
            icon: Mail,
            title: 'General Inquiries',
            content: eventInfo.contact.chair.email,
            subtitle: 'Primary contact email',
            color: 'text-purple-500',
            bgColor: 'bg-purple-500/10',
            isLink: true,
            href: `mailto:${eventInfo.contact.chair.email}`,
        },
        {
            icon: Phone,
            title: 'Phone Support',
            content: `+216 ${eventInfo.contact.chair.phone}`,
            subtitle: 'Available during business hours',
            color: 'text-orange-500',
            bgColor: 'bg-orange-500/10',
            isLink: true,
            href: `tel:+216${eventInfo.contact.chair.phone.replace(/\s/g, '')}`,
        },
    ];

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="text-center space-y-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20"
                >
                    <Badge
                        variant="secondary"
                        className="bg-primary/20 text-primary"
                    >
                        {eventInfo.shortName}
                    </Badge>
                    <span className="text-sm font-medium">
                        {eventInfo.name}
                    </span>
                </motion.div>
                <h3 className="text-2xl font-bold">Get in Touch</h3>
                <p className="text-muted-foreground">
                    Connect with us for any questions or collaborations
                    regarding IASTAM {eventInfo.edition}
                </p>
            </div>

            {/* Contact Information Grid */}
            <div className="grid md:grid-cols-2 gap-6">
                {contactItems.map((item, index) => (
                    <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group"
                    >
                        {item.isLink ? (
                            <Link
                                href={item.href!}
                                className="flex items-start gap-4 p-4 rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] bg-background/50 backdrop-blur-sm"
                            >
                                <div
                                    className={`p-3 rounded-xl ${item.bgColor} ${item.color} group-hover:scale-110 transition-transform duration-300`}
                                >
                                    <item.icon className="w-5 h-5" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                                        {item.title}
                                    </h4>
                                    <p className="text-sm font-medium text-foreground mt-1 break-all">
                                        {item.content}
                                    </p>
                                    <p className="text-xs text-muted-foreground mt-1">
                                        {item.subtitle}
                                    </p>
                                </div>
                                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100" />
                            </Link>
                        ) : (
                            <div className="flex items-start gap-4 p-4 rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg bg-background/50 backdrop-blur-sm">
                                <div
                                    className={`p-3 rounded-xl ${item.bgColor} ${item.color} group-hover:scale-110 transition-transform duration-300`}
                                >
                                    <item.icon className="w-5 h-5" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="font-semibold text-foreground">
                                        {item.title}
                                    </h4>
                                    <p className="text-sm font-medium text-foreground mt-1">
                                        {item.content}
                                    </p>
                                    <p className="text-xs text-muted-foreground mt-1">
                                        {item.subtitle}
                                    </p>
                                </div>
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>

            {/* Call to Action */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="text-center p-6 bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 rounded-xl"
            >
                <h4 className="text-lg font-semibold mb-2">
                    Ready to Join Us?
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                    Don&apos;t miss out on this premier industrial applications
                    technology conference
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                    <Badge variant="outline" className="bg-background/50">
                        Technical Sessions
                    </Badge>
                    <Badge variant="outline" className="bg-background/50">
                        Keynote Speakers
                    </Badge>
                    <Badge variant="outline" className="bg-background/50">
                        Workshops
                    </Badge>
                    <Badge variant="outline" className="bg-background/50">
                        Networking
                    </Badge>
                </div>
            </motion.div>
        </div>
    );
};
