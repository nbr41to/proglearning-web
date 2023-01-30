export const baseUrl =
  process.env.NEXT_PUBLIC_VERCEL_URL || 'http://localhost:3000';

export const paths = {
  loggedIn: ['/dashboard', '/profile', '/setting', '/admin'],
  loggedOut: ['/', '/about', '/entry', '/contact', '/lessons'],
  noLayout: ['/login'],
} as const;
