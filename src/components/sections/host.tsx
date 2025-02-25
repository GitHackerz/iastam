'use client';

import Image from 'next/image';
import BlurFade from '@/components/ui/blur-fade';

export default function HostSection() {
    return (
        <section className="py-24 bg-muted/50">
            <div className="container px-4 mx-auto">
                <BlurFade>
                    <div className="text-center mb-16">
                        <span className="text-primary text-sm tracking-wider uppercase">
                            Host Institution
                        </span>
                        <h2 className="text-3xl font-bold mt-2">Hosted By</h2>
                    </div>
                </BlurFade>

                <BlurFade delay={0.2}>
                    <div className="flex flex-col items-center justify-center space-y-6">
                        <div className="relative w-64 h-32">
                            <Image
                                src="/images/host-logo.png"
                                alt="Host Institution"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="text-center max-w-2xl">
                            <h3 className="text-xl font-semibold mb-2">
                                ENIS - École Nationale d'Ingénieurs de Sfax
                            </h3>
                            <p className="text-muted-foreground">
                                Leading engineering school in Tunisia, committed
                                to excellence in education and research in the
                                field of engineering and technology.
                            </p>
                        </div>
                    </div>
                </BlurFade>
            </div>
        </section>
    );
}
