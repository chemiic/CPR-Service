'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Container from '@/components/Container';
import ButtonLink from '@/components/UI/ButtonLink';
import { siteConfig } from '@/lib/site-content';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.5, ease: 'easeOut' },
};

const Contacts = () => {
  return (
    <section className="section">
      <Container>
        <motion.div {...fadeIn}>
          <h2 className="section-title">
            Контакты
            <span className="section-accent" />
          </h2>

          <div className="contacts-grid">
            <div className="card card--soft">
              <h3 className="card__title">Телефон</h3>
              <a href={siteConfig.phoneHref} className="phone-link">
                {siteConfig.phone}
              </a>
              <p className="text-muted mt-6">{siteConfig.workingHours}</p>
              <div className="mt-6">
                <ButtonLink href={siteConfig.phoneHref}>Позвонить</ButtonLink>
              </div>
            </div>

            <div className="card card--dashed">
              <div>
                <h3 className="card__title">Адрес</h3>
                <p className="text-muted">Скоро</p>
                <p className="text-muted mt-6">
                  Информация об адресе будет добавлена позже.
                </p>
              </div>
              <Link href="/contacts" className="link-underline mt-6">
                Все контакты →
              </Link>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Contacts;
