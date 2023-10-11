
import {createContext, Dispatch, SetStateAction, useEffect, useRef, useState} from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import useWindowSize from "@/hooks/useWindowSize";
import MenuToggle from "@/components/MenuToggle";

const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 100vw 25px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2,
            opacity: 1
        }
    }),
    closed: {
        clipPath: `circle(0.001px at 100vw 25px)`,
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40,
            opacity: 0
        }
    }
};
interface MenuStateContextType{
    isOpen: boolean,
    setIsOpen: Dispatch<SetStateAction<boolean>>
    isSmallScreen: boolean,
}
const IMenuStateContext = {
    isOpen: true,
    setIsOpen:  () => {},
    isSmallScreen: true,
}

export const MenuStateContext = createContext<MenuStateContextType>(IMenuStateContext)
const NavMenu = () => {
    const [ width,height ] = useWindowSize();
    const containerRef = useRef(null);
    const [isOpen, setIsOpen] = useState(true)
    useEffect(() => {
        setIsOpen(width>1024)
    }, [width]);
    const isSmallScreen = width<1024
    return (
        <motion.nav
            initial={isOpen}
            animate={isOpen ? "open" : "closed"}
            custom={height}
            ref={containerRef}
            className={`absolute top-0 right-0 bottom-0 w-full h-full flex justify-center items-center lg:static lg:justify-end`}
        >
            <motion.div className={`bg-blue-500 absolute top-0 right-0 bottom-0 w-full lg:hidden lg:static `} variants={sidebar} />
            <MenuStateContext.Provider value={{isOpen, setIsOpen,isSmallScreen}}>
                <Navigation/>
            </MenuStateContext.Provider>

            <MenuToggle isOpen={isOpen} setIsOpen={setIsOpen} />
        </motion.nav>
    );
};
export default NavMenu;