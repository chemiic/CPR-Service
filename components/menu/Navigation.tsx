import {useMemo} from "react";
import {usePathname} from "next/navigation";
import MenuItem from "@/components/menu/MenuItem";
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

    return (
        <ul className={`flex gap-1 flex-col items-center relative lg:flex-row lg:gap-4`}>
            {routes.map((item)=> (
                <MenuItem key={item.label} {...item} />
            ))}
        </ul>
    )
}
export default Navigation;