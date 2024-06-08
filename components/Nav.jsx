"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name: 'home',
        path: '/',
    },
    {
        name: 'trabalhos',
        path: '/trabalhos',
    },
    {
        name: 'sobre',
        path: '/sobre',
    },
    {
        name: 'contato',
        path: '/contato',
    },
]

const Nav = () => {
  const pathname = usePathname();
  return (
        <nav className="flex gap-8">
            {links.map((link, index)=> {
                return (
                    <Link href={link.path} key={index} className={`${link.path === pathname && "text-accent border rounded-full pl-1 pr-1 border-accent"}`}>
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    );
}

export default Nav;
