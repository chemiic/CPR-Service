'use client'
import {useMemo} from "react";
import {usePathname} from "next/navigation";
import MenuItem from "@/components/MenuItem";

import { motion } from "framer-motion";
import * as React from "react";
const Navigation = () => {
    const pathname = usePathname();
    const routes = useMemo(() => [
        {
            label: 'Главная',
            active: pathname === '/',
            href: '/',
        },
        {
            label: 'Услуги',
            active: pathname === '/services',
            href: '/services',
        },
        {
            label: 'БУ-Детали',
            active: pathname === '/store',
            href: '/store',
        },
        {
            label: 'Контакты',
            active: pathname === '/contacts',
            href: '/contacts',
        },
    ], [pathname]);
    const variants = {
        open: {
            transition: { staggerChildren: 0.07, delayChildren: 0.2 }
        },
        closed: {
            transition: { staggerChildren: 0.05, staggerDirection: -1 }
        }
    };

    return (
        <motion.ul variants={variants} className={`flex gap-1 flex-col items-center relative z-5 lg:flex-row lg:gap-4`}>
            {routes.map((item)=> (
                <MenuItem key={item.label} {...item} />
            ))}
        </motion.ul>
    )
}
export default Navigation;