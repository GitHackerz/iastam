'use client';

import * as React from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { LucideIcon } from 'lucide-react';

export interface TimelineItemData {
    id: string;
    title: string;
    date: string;
    duration: string;
    description: string;
    icon: LucideIcon;
    side: 'left' | 'right';
}

interface TimelineItemProps {
    item: TimelineItemData;
    index: number;
    isLast: boolean;
}

interface TimelineProps {
    items: TimelineItemData[];
    className?: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ item, index, isLast }) => {
    const isLeft = item.side === 'left';
    const itemRef = React.useRef<HTMLDivElement>(null);
    const isInView = useInView(itemRef, { once: false, amount: 0.3 });

    return (
        <div
            ref={itemRef}
            className={cn(
                'relative flex items-center',
                isLast ? 'mb-0' : 'mb-32',
            )}
        >
            {/* Mobile layout - ALL cards centered */}
            <div className="block md:hidden w-full">
                <div className="flex justify-center px-4">
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={
                            isInView
                                ? { y: 0, opacity: 1 }
                                : { y: 50, opacity: 0 }
                        }
                        transition={{
                            type: 'spring',
                            stiffness: 200,
                            damping: 30,
                            delay: index * 0.1 + 0.3,
                        }}
                        className="w-full max-w-sm"
                    >
                        <TimelineCard
                            item={item}
                            index={index}
                            isInView={isInView}
                        />
                    </motion.div>
                </div>
            </div>

            {/* Desktop layout - alternating sides */}
            <div className="hidden md:flex w-full">
                {isLeft ? (
                    <>
                        {/* Left side content */}
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            animate={
                                isInView
                                    ? { x: 0, opacity: 1 }
                                    : { x: -50, opacity: 0 }
                            }
                            transition={{
                                type: 'spring',
                                stiffness: 200,
                                damping: 30,
                                delay: index * 0.1 + 0.3,
                            }}
                            className="w-1/2 pr-8"
                        >
                            <TimelineCard
                                item={item}
                                index={index}
                                isInView={isInView}
                            />
                        </motion.div>
                        {/* Right side spacer */}
                        <div className="w-1/2 pl-8" />
                    </>
                ) : (
                    <>
                        {/* Left side spacer */}
                        <div className="w-1/2 pr-8" />
                        {/* Right side content */}
                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            animate={
                                isInView
                                    ? { x: 0, opacity: 1 }
                                    : { x: 50, opacity: 0 }
                            }
                            transition={{
                                type: 'spring',
                                stiffness: 200,
                                damping: 30,
                                delay: index * 0.1 + 0.3,
                            }}
                            className="w-1/2 pl-8"
                        >
                            <TimelineCard
                                item={item}
                                index={index}
                                isInView={isInView}
                            />
                        </motion.div>
                    </>
                )}
            </div>
        </div>
    );
};

const TimelineCard: React.FC<{
    item: TimelineItemData;
    index: number;
    isInView: boolean;
}> = ({ item, index, isInView }) => {
    return (
        <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
            <Card className="rounded-2xl border-2 border-muted hover:border-primary/30 transition-all duration-300 hover:shadow-xl bg-card/80 backdrop-blur-sm hover:bg-card/90 group">
                <CardHeader className="pb-4">
                    <div className="flex items-start gap-4">
                        <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={
                                isInView
                                    ? { scale: 1, rotate: 0 }
                                    : { scale: 0, rotate: -180 }
                            }
                            transition={{
                                type: 'spring',
                                stiffness: 300,
                                damping: 30,
                                delay: index * 0.1 + 0.4,
                            }}
                            whileHover={{
                                scale: 1.1,
                                rotate: 5,
                                transition: { duration: 0.2 },
                            }}
                            className="p-3 bg-primary/10 rounded-xl border border-primary/20 group-hover:bg-primary/15 group-hover:border-primary/30 transition-all duration-300"
                        >
                            <item.icon className="w-6 h-6 text-primary" />
                        </motion.div>
                        <div className="flex-1 min-w-0">
                            <CardTitle className="text-lg font-bold text-foreground mb-2 leading-tight group-hover:text-primary transition-colors duration-300">
                                {item.title}
                            </CardTitle>
                            <div className="flex flex-wrap gap-2">
                                <Badge
                                    variant="accent"
                                    className="text-xs font-medium bg-primary/10 text-primary border-primary/20 hover:bg-primary/15"
                                >
                                    {item.date}
                                </Badge>
                                <Badge
                                    variant="muted"
                                    className="text-xs font-medium"
                                >
                                    {item.duration}
                                </Badge>
                            </div>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="pt-0">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={
                            isInView
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: 10 }
                        }
                        transition={{
                            delay: index * 0.1 + 0.5,
                            duration: 0.3,
                        }}
                        className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300"
                    >
                        {item.description}
                    </motion.p>
                </CardContent>
            </Card>
        </motion.div>
    );
};

const Timeline: React.FC<TimelineProps> = ({ items, className }) => {
    const timelineRef = React.useRef<HTMLDivElement>(null);
    const lineRef = React.useRef<HTMLDivElement>(null);
    const isLineInView = useInView(lineRef, { once: false, amount: 0.1 });

    const [timelineHeight, setTimelineHeight] = React.useState(0);

    const timelineContainerRef = React.useCallback(
        (node: HTMLDivElement | null) => {
            if (node) {
                requestAnimationFrame(() => {
                    const timelineItems = node.querySelectorAll(
                        '[data-timeline-item]',
                    );
                    if (timelineItems.length > 0) {
                        const lastItem = timelineItems[
                            timelineItems.length - 1
                        ] as HTMLElement;
                        const containerRect = node.getBoundingClientRect();
                        const lastItemRect = lastItem.getBoundingClientRect();

                        // Stop the line at the top of the last card to prevent touching footer
                        const height =
                            lastItemRect.top - containerRect.top + 20;
                        setTimelineHeight(height);
                    }
                });
            }
        },
        [],
    );

    return (
        <div ref={timelineRef} className={cn('relative', className)}>
            {/* Timeline line */}
            <motion.div
                ref={lineRef}
                initial={{ scaleY: 0 }}
                animate={isLineInView ? { scaleY: 1 } : { scaleY: 0 }}
                transition={{
                    duration: 1.5,
                    ease: 'easeInOut',
                }}
                className="absolute left-1/2 md:left-1/2 left-6 transform md:-translate-x-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-primary via-primary/80 to-primary/40 origin-top hidden md:block"
                style={{
                    height:
                        timelineHeight > 0
                            ? `${timelineHeight}px`
                            : `${(items.length - 1) * 180 + 80}px`,
                }}
            />

            {/* Timeline items container */}
            <div ref={timelineContainerRef} className="relative">
                {items.map((item, index) => (
                    <div key={item.id} data-timeline-item>
                        <TimelineItem
                            item={item}
                            index={index}
                            isLast={index === items.length - 1}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export { Timeline, TimelineItem };
