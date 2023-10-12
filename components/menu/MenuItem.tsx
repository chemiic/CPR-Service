'use client'

import React, {FC, useContext, useState} from 'react';
import Link from "next/link";
import {twMerge} from "tailwind-merge";
import { motion } from "framer-motion";
import {MenuStateContext} from "@/components/menu/NavMenu";
interface SidebarItemProps {
    label: string;
    active?: boolean;
    href: string;
}

const SidebarItem: FC<SidebarItemProps> = ({ label, active, href}) => {

    const {isOpen, setIsOpen} = useContext(MenuStateContext);

    return (
            <Link
                href={href}
                className={twMerge(`
                    flex
                    flex-row
                    h-auto
                    items-center
                    w-full
                    cursor-pointer
                    gap-x-4
                    font-medium
                    text-xl
                    text-neutral-100
                    lg:text-md
                    lg:text-neutral-700
                    lg:hover:text-blue-600
                    transition
                    py-1
                `,
                    active && "text-black lg:text-blue-700"
                )}
                onClick={(()=> setIsOpen(false))}
            >
                <p className="truncate w-full">{label}</p>
            </Link>
    );
};

export default SidebarItem;