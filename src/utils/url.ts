export const baseUrl =
  process.env.NEXT_PUBLIC_VERCEL_URL || 'http://localhost:3000';

export const unprotectedRoutes = [
  '/',
  '/about',
  '/entry',
  '/contact',
  '/lessons',
  '/lessons/[lessonId]',
];
