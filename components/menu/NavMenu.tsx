'use client';

import { createContext, Dispatch, SetStateAction, useCallback, useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import Navigation from '@/components/menu/Navigation';
import { siteConfig } from '@/lib/site-content';

interface MenuStateContextType {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const defaultContext: MenuStateContextType = {
  isOpen: false,
  setIsOpen: () => {},
};

export const MenuStateContext = createContext<MenuStateContextType>(defaultContext);

export const useMenuState = () => useContext(MenuStateContext);

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = useCallback(() => setIsOpen(false), []);
  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <MenuStateContext.Provider value={{ isOpen, setIsOpen }}>
      <button
        type="button"
        onClick={toggleMenu}
        className={`burger${isOpen ? ' burger--hidden' : ''}`}
        aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
        aria-expanded={isOpen}
      >
        <span className="burger__line" />
        <span className="burger__line" />
        <span className="burger__line" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="mobile-menu__head">
              <Link href="/" onClick={closeMenu} className="header__logo">
                <span className="header__logo-badge">{siteConfig.shortName}</span>
                <span>
                  <span className="mobile-menu__logo-name">{siteConfig.shortName}</span>
                  <span className="mobile-menu__logo-tagline">{siteConfig.tagline}</span>
                </span>
              </Link>
              <button
                type="button"
                onClick={closeMenu}
                className="mobile-menu__close"
                aria-label="Закрыть меню"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6 6L18 18M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <nav className="mobile-menu__nav">
              <Navigation variant="mobile" />
              <a href={siteConfig.phoneHref} className="mobile-menu__phone">
                {siteConfig.phone}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </MenuStateContext.Provider>
  );
};

export default NavMenu;
