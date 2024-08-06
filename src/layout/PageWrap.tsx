import { PawPrint } from '@/components/icon'; // Adjust the import path as necessary
import Link from 'next/link';
import { ReactNode } from 'react';

interface PageWrapProps {
    children: ReactNode;
}

const PageWrap = ({ children }: PageWrapProps) => {
    return (
        <>
            <header className="px-4 lg:px-6 h-14 flex items-center">
                <Link href="/" className="flex items-center justify-center" prefetch={false}>
                    <PawPrint className="h-6 w-6" />
                    <span className="sr-only">Paw-fect Pals</span>
                </Link>
                <nav className="ml-auto flex gap-4 sm:gap-6">
                    <Link href="/" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                        About
                    </Link>
                    <Link href="/#services" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                        Services
                    </Link>
                    <Link href="/#testimonials" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                        Testimonials
                    </Link>
                    <Link href="/#contact" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                        Contact
                    </Link>
                </nav>
            </header>
            <main>{children}</main>
        </>
    );
};

export default PageWrap;