'use client';

import { Monitor, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function ThemeToggle() {
    const { setTheme, theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <Button variant="ghost" size="icon" className="w-9 h-9">
                <Sun className="h-4 w-4" />
                <span className="sr-only">Toggle theme</span>
            </Button>
        );
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon"
                    className="w-9 h-9 hover:bg-muted/80 transition-all duration-300 hover:scale-105"
                >
                    <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                align="end"
                className="w-48 p-2 bg-background/95 backdrop-blur-xl border border-border/50 shadow-2xl"
            >
                <DropdownMenuItem
                    onClick={() => setTheme('light')}
                    className={`flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer transition-all duration-200 ${
                        theme === 'light'
                            ? 'bg-primary/10 text-primary'
                            : 'hover:bg-muted/80'
                    }`}
                >
                    <Sun className="h-4 w-4" />
                    Light
                    {theme === 'light' && (
                        <div className="ml-auto w-2 h-2 rounded-full bg-primary" />
                    )}
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => setTheme('dark')}
                    className={`flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer transition-all duration-200 ${
                        theme === 'dark'
                            ? 'bg-primary/10 text-primary'
                            : 'hover:bg-muted/80'
                    }`}
                >
                    <Moon className="h-4 w-4" />
                    Dark
                    {theme === 'dark' && (
                        <div className="ml-auto w-2 h-2 rounded-full bg-primary" />
                    )}
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => setTheme('system')}
                    className={`flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer transition-all duration-200 ${
                        theme === 'system'
                            ? 'bg-primary/10 text-primary'
                            : 'hover:bg-muted/80'
                    }`}
                >
                    <Monitor className="h-4 w-4" />
                    System
                    {theme === 'system' && (
                        <div className="ml-auto w-2 h-2 rounded-full bg-primary" />
                    )}
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
