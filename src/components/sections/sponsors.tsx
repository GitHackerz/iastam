'use client';

import Image from 'next/image';
import BlurFade from '@/components/ui/blur-fade';
import { Button } from '@/components/ui/button';

const sponsorLevels = [
    {
        level: 'Diamond',
        sponsors: [
            { name: 'Sponsor 1', logo: '/images/sponsors/sponsor1.png' },
            // Add more sponsors
        ],
    },
    {
        level: 'Gold',
        sponsors: [
            { name: 'Sponsor 2', logo: '/images/sponsors/sponsor2.png' },
            // Add more sponsors
        ],
    },
    // Add more levels
];

export default function SponsorsSection() {
    return (
        <section className="py-24 bg-muted/50">
            <div className="container px-4 mx-auto">
                <BlurFade>
                    <div className="text-center mb-16">
                        <span className="text-primary text-sm tracking-wider uppercase">
                            Support
                        </span>
                        <h2 className="text-3xl font-bold mt-2">
                            Our Sponsors
                        </h2>
                    </div>
                </BlurFade>

                <div className="space-y-16">
                    {sponsorLevels.map((level, idx) => (
                        <BlurFade key={level.level} delay={0.2 * idx}>
                            <div className="space-y-6">
                                <h3 className="text-xl font-semibold text-center">
                                    {level.level}
                                </h3>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                                    {level.sponsors.map(sponsor => (
                                        <div
                                            key={sponsor.name}
                                            className="bg-background rounded-xl p-6 flex items-center justify-center"
                                        >
                                            <Image
                                                src={sponsor.logo}
                                                alt={sponsor.name}
                                                width={180}
                                                height={100}
                                                className="object-contain"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </BlurFade>
                    ))}
                </div>

                <BlurFade delay={0.4}>
                    <div className="text-center mt-16">
                        <Button size="lg">Become a Sponsor</Button>
                    </div>
                </BlurFade>
            </div>
        </section>
    );
}
