import Link from 'next/link';
import Container from '@/components/Container';
import { navigation, siteConfig } from '@/lib/site-content';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container className="footer__inner">
        <div className="footer__grid">
          <div>
            <p className="footer__brand">{siteConfig.shortName}</p>
            <p className="footer__company">{siteConfig.companyName}</p>
            <a href={siteConfig.phoneHref} className="footer__phone">
              {siteConfig.phone}
            </a>
            <p className="footer__hours">{siteConfig.workingHours}</p>
          </div>

          <nav>
            <p className="footer__heading">Навигация</p>
            <ul className="footer__links">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="footer__heading">Специализация</p>
            <p className="footer__links">{siteConfig.brands.join(' · ')}</p>
          </div>
        </div>

        <p className="footer__copy">
          © {year} {siteConfig.companyName}. Все права защищены.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
