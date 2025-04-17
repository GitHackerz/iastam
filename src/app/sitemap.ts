import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://ias-am.ieee.tn';

    const routes = [
        '',
        '/about',
        '/program',
        '/contact',
        '/tunisia',
        '/register',
    ].map(route => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    return routes;
}
