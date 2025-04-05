import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const navItems = [
  { label: 'ABOUT', href: '/about' },
  { label: 'IMPACT', href: '/impact' },
  { label: 'EVENTS', href: '/events' },
  { label: 'CONTACT US', href: '/contact' },
];

export function Header() {
  return (
    <header className="bg-white py-4 px-6 flex flex-col md:flex-row justify-between items-center">
      <div className="flex items-center mb-4 md:mb-0">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Road to the Classic Inc. Logo"
            width={180}
            height={60}
            className="h-12 w-auto"
          />
        </Link>
      </div>
      <nav className="flex gap-6 text-sm font-medium">
        <Link href="/about" className="hover:text-[#1a237e]">ABOUT</Link>
        <Link href="/impact" className="hover:text-[#1a237e]">IMPACT</Link>
        <Link href="/events" className="hover:text-[#1a237e]">EVENTS</Link>
        <Link href="/contact" className="hover:text-[#1a237e]">CONTACT US</Link>
      </nav>
    </header>
  );
} 