import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Raean',
  description: "Let's work together on your next project.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
