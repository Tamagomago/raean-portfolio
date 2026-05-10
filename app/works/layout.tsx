import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Works | Raean',
  description: 'List of works.',
};

export default function WorksLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
