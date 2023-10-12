
import {createContext, Dispatch, SetStateAction, useEffect, useRef, useState} from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/menu/Navigation";
import useWindowSize from "@/hooks/useWindowSize";
import MenuToggle from "@/components/menu/MenuToggle";

interface MenuStateContextType{
    isOpen: boolean,
    setIsOpen: Dispatch<SetStateAction<boolean>>
}
const IMenuStateContext = {
    isOpen: true,
    setIsOpen:  () => {},
}

export const MenuStateContext = createContext<MenuStateContextType>(IMenuStateContext)
const NavMenu = () => {
    const [ width,height ] = useWindowSize();
    const [isOpen, setIsOpen] = useState(false)
    const variants = {
        open: { right:0},
        closed: { right: '-100%'},
    }
    return (
        <motion.nav
            initial={isOpen}
            animate={isOpen ? "open" : "closed"}
            className={``}
        >
            <MenuStateContext.Provider value={{isOpen, setIsOpen}}>
                <motion.div className={`absolute top-0 bottom-0 w-full h-full z-40 flex justify-center items-center 
                text-center bg-blue-600
                lg:static lg:justify-end lg:bg-transparent`}
                variants={variants}
                >
                    <Navigation/>
                </motion.div>
            </MenuStateContext.Provider>

            <MenuToggle isOpen={isOpen} setIsOpen={setIsOpen} />
        </motion.nav>
    );
};
export default NavMenu;