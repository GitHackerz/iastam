'use client';

import { useState } from 'react';
import Link from 'next/link';
import { navLinks, ctaButton } from '@/constants/navigation';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import { ThemeToggle } from '@/components/theme-toggle';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="font-bold text-xl">
                        IAS-TAM
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                            {navLinks.map(link => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="hover:text-primary text-sm font-medium px-3"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                        <Separator orientation="vertical" className="h-6" />
                        <ThemeToggle />
                        <Button
                            asChild
                            className="bg-primary text-primary-foreground hover:bg-primary/90"
                        >
                            <Link href={ctaButton.href}>{ctaButton.label}</Link>
                        </Button>
                    </div>

                    {/* Mobile Menu */}
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild className="md:hidden">
                            <Button variant="ghost" size="icon">
                                <Menu className="h-5 w-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px]">
                            <SheetHeader>
                                <SheetTitle>Navigation</SheetTitle>
                            </SheetHeader>
                            <div className="flex flex-col space-y-3 mt-4">
                                {navLinks.map(link => (
                                    <Link
                                        href={link.href}
                                        key={link.href}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                                <div className="flex items-center justify-between px-2">
                                    <span className="text-sm">Theme</span>
                                    <ThemeToggle />
                                </div>
                                <Separator className="my-2 mx-14" />
                                <Button
                                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 mt-4"
                                    asChild
                                    onClick={() => setIsOpen(false)}
                                >
                                    <Link href={ctaButton.href}>
                                        {ctaButton.label}
                                    </Link>
                                </Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    );
}
