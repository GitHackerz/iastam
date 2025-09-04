'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SectionHeader from '@/components/ui/section-header';
import { panelDiscussions } from '@/constants/panel-discussions';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

export const PanelDiscussionsSection = () => {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: false,
    });

    return (
        <section
            ref={ref}
            className="py-24 bg-gradient-to-br from-background via-background to-muted/20 relative overflow-hidden"
        >
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-16" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />

            <div className="container mx-auto px-4 relative">
                <SectionHeader
                    subtitle="Interactive Discussions"
                    title="Panel Discussions"
                    inView={inView}
                    centered={true}
                />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                        inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="max-w-6xl mx-auto"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {panelDiscussions.map((panel, index) => (
                            <motion.div
                                key={panel.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={
                                    inView
                                        ? { opacity: 1, y: 0 }
                                        : { opacity: 0, y: 20 }
                                }
                                transition={{
                                    duration: 0.6,
                                    delay: 0.7 + index * 0.1,
                                }}
                            >
                                <Card className="h-full hover:shadow-lg transition-all duration-300 group border-border/50 hover:border-primary/20">
                                    <CardHeader className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <Badge
                                                variant="secondary"
                                                className="bg-primary/10 text-primary hover:bg-primary/20"
                                            >
                                                Panel Discussion
                                            </Badge>
                                        </div>
                                        <CardTitle className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                                            {panel.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <p className="text-muted-foreground leading-relaxed">
                                            {panel.description}
                                        </p>

                                        <div className="space-y-3">
                                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                <Calendar className="h-4 w-4" />
                                                <span>{panel.date}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                <Clock className="h-4 w-4" />
                                                <span>{panel.time}</span>
                                            </div>
                                            {panel.location && (
                                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                    <MapPin className="h-4 w-4" />
                                                    <span>
                                                        {panel.location}
                                                    </span>
                                                </div>
                                            )}
                                            <div className="flex items-start gap-2 text-sm text-muted-foreground">
                                                <Users className="h-4 w-4 mt-0.5" />
                                                <div className="flex flex-wrap gap-1">
                                                    {panel.participants.map(
                                                        (participant, i) => (
                                                            <Badge
                                                                key={i}
                                                                variant="outline"
                                                                className="text-xs"
                                                            >
                                                                {participant}
                                                            </Badge>
                                                        ),
                                                    )}
                                                </div>
                                            </div>
                                            {panel.moderator && (
                                                <div className="text-sm">
                                                    <span className="font-medium text-foreground">
                                                        Moderator:{' '}
                                                    </span>
                                                    <span className="text-muted-foreground">
                                                        {panel.moderator}
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
