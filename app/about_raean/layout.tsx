import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Raean',
  description: 'Learn more about Raean.',
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
