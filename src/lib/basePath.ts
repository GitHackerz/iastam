// This file provides a consistent way to handle base paths for assets in the application
// Especially helpful for static exports deployed to FTP servers

/**
 * Get the base path for static assets
 * When using static export with Next.js and deploying to FTP, this ensures assets are found
 */
export function getBasePath(): string {
  // For local development, use a leading slash
  if (process.env.NODE_ENV === 'development') {
    return '';
  }
  
  // For production builds, use relative path
  return '.';
}

/**
 * Helper function to prefix asset URLs with the correct base path
 */
export function getAssetPath(path: string): string {
  const base = getBasePath();
  
  // If the path already starts with the base path, don't add it again
  if (path.startsWith(base)) {
    return path;
  }
  
  // If path starts with / remove it to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  return `${base}/${cleanPath}`;
}
