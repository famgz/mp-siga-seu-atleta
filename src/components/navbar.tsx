import About from '@/components/about';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='flex items-center justify-between p-4 mb-10 w-full'>
      <Link href={'/'} className='text-lg font-semibold'>
        <Image src='/logo.svg' alt='logo' width={200} height={200} />
      </Link>
      <div className='flex items-center gap-4'>
        <About />
      </div>
    </nav>
  );
}
