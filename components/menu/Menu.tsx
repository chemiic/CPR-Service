import Link from 'next/link';
import NavMenu from '@/components/menu/NavMenu';
import Navigation from '@/components/menu/Navigation';
import Container from '@/components/Container';
import { siteConfig } from '@/lib/site-content';

const Menu = () => {
  return (
    <header className="header">
      <div className="header__top">
        <Container className="header__top-inner">
          <Link href="/" className="header__logo">
            <span className="header__logo-badge">{siteConfig.shortName}</span>
            <span className="header__logo-text">
              <span className="header__logo-name">{siteConfig.shortName}</span>
              <span className="header__logo-tagline">{siteConfig.tagline}</span>
            </span>
          </Link>

          <p className="header__desc">{siteConfig.description}</p>

          <div className="header__actions">
            <div className="header__phone">
              <a href={siteConfig.phoneHref} className="header__phone-link">
                {siteConfig.phone}
              </a>
              <span className="header__phone-hours">{siteConfig.workingHours}</span>
            </div>
            <NavMenu />
          </div>
        </Container>
      </div>

      <div className="header__nav-bar">
        <Container>
          <Navigation variant="desktop" />
        </Container>
      </div>
    </header>
  );
};

export default Menu;
