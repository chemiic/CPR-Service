'use client'

import React, {FC, useContext, useState} from 'react';
import Link from "next/link";
import {twMerge} from "tailwind-merge";
import { motion } from "framer-motion";
import {MenuStateContext} from "@/components/NavMenu";
interface SidebarItemProps {
    label: string;
    active?: boolean;
    href: string;
}
const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        }
    }
};


const SidebarItem: FC<SidebarItemProps> = ({ label, active, href}) => {

    const {isOpen, setIsOpen, isSmallScreen} = useContext(MenuStateContext);

    return (
        <motion.li
            variants={variants}
            whileTap={{ scale: 0.95 }}
        >
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
                onClick={(()=>isSmallScreen && setIsOpen(!isOpen))}
            >
                <p className="truncate w-full">{label}</p>
            </Link>
        </motion.li>
    );
};

export default SidebarItem;