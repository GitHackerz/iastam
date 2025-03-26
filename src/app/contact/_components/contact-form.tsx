'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send } from 'lucide-react';

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsSubmitting(true);
        // Add your form submission logic here
        await new Promise(resolve => setTimeout(resolve, 1000));
        setIsSubmitting(false);
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                            Name
                        </label>
                        <Input id="name" placeholder="Your name" required />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                            Email
                        </label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="your@email.com"
                            required
                        />
                    </div>
                </div>
                <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                    </label>
                    <Input
                        id="subject"
                        placeholder="How can we help?"
                        required
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                        Message
                    </label>
                    <Textarea
                        id="message"
                        placeholder="Your message..."
                        rows={6}
                        required
                    />
                </div>
            </div>
            <Button type="submit" disabled={isSubmitting} className="w-full">
                Send Message
                <Send className="ml-2 h-4 w-4" />
            </Button>
        </form>
    );
}
