"use client";

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci'

const links = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'Trabalhos',
        path: '/trabalhos'
    },
    {
        name: 'Sobre',
        path: '/sobre'
    },
    {
        name: 'Contato',
        path: '/contato'
    },
]

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-40 text-center text-2xl">
            <Link href="/">
                <h1 className="text-4xl font-semibold">/devBerg</h1>
            </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
            {links.map((link, index) => {
                return <Link href={link.path} key={index} className={`${link.path === pathname && "text-accent font-semibold border rounded-full pl-3 pr-3 border-accent hover:bg-black hover:text-white"} text-xl capitalize  transition-all`}>{link.name}</Link>
            })} 
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav;
