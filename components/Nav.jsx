"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name: 'Home',
        path: '/',
    },
    {
        name: 'Trabalhos',
        path: '/trabalhos',
    },
    {
        name: 'Sobre',
        path: '/sobre',
    },
    {
        name: 'Contato',
        path: '/contato',
    },
]

const Nav = () => {
  const pathname = usePathname();
  return (
        <nav className="flex gap-8">
            {links.map((link, index)=> {
                return (
                    <Link href={link.path} key={index} className={`${link.path === pathname && "text-accent font-semibold border rounded-full pl-3 pr-3 border-accent hover:bg-black hover:text-white"}  font-medium hover:text-slate-900 transition-all`}>
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    );
}

export default Nav;
