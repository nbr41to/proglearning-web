export const baseUrl =
  process.env.NEXT_PUBLIC_VERCEL_URL || 'http://localhost:3000';

export const paths = {
  loggedIn: ['/dashboard', '/profile', '/settings'],
  loggedOut: ['/', '/about', '/entry'],
  noLayout: ['/login'],
} as const;
