import React, {FC} from 'react';
import Link from "next/link";
import {twMerge} from "tailwind-merge";

interface SidebarItemProps {
    label: string;
    active?: boolean;
    href: string;
}

const SidebarItem: FC<SidebarItemProps> = ({ label, active, href}) => {
    return (
        <Link
            href={href}
            className={twMerge(`
                flex
                flex-row
                h-auto
                items-center
                w-full
                gap-x-4
                text-md
                font-medium
                cursor-pointer
                hover:text-blue-600
                transition
                py-1
            `,
                active && "text-blue-700"
            )}
        >
            <p className="truncate w-full">{label}</p>
        </Link>
    );
};

export default SidebarItem;