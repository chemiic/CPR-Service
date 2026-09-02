'use client';

import { motion } from 'framer-motion';
import Container from '@/components/Container';
import ButtonLink from '@/components/UI/ButtonLink';
import DiagnosticsIllustration from '@/components/DiagnosticsIllustration';
import { ctaContent, siteConfig } from '@/lib/site-content';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.5, ease: 'easeOut' },
};

const ServiceCta = () => {
  return (
    <section className="cta-block">
      <Container>
        <motion.div className="cta-card" {...fadeIn}>
          <div className="cta-card__content">
            <h2 className="cta-card__title">
              {ctaContent.title}{' '}
              <span className="text-accent-light">{ctaContent.titleAccent}</span>
            </h2>
            <p className="cta-card__text">{ctaContent.subtitle}</p>
            <p className="cta-card__meta">
              {ctaContent.price} · {ctaContent.area}
            </p>
            <div className="cta-card__btn">
              <ButtonLink href={siteConfig.phoneHref}>{ctaContent.button}</ButtonLink>
            </div>
          </div>

          <div className="cta-card__visual">
            <DiagnosticsIllustration className="cta-card__svg" />
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default ServiceCta;
