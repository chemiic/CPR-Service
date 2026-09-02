'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Container from '@/components/Container';
import ButtonLink from '@/components/UI/ButtonLink';
import { heroContent, siteConfig } from '@/lib/site-content';

const MainScreen = () => {
  return (
    <div className="hero">
      <Image
        src="/computer-diagnostics1.webp"
        alt="Диагностика французских автомобилей"
        width={1400}
        height={700}
        className="hero__bg"
        priority
      />
      <div className="hero__overlay" />

      <Container className="hero__content">
        <motion.div
          className="hero__inner"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h1 className="hero__title">{heroContent.title}</h1>
          <p className="hero__subtitle">{heroContent.subtitle}</p>
          <div className="hero__actions">
            <ButtonLink href={siteConfig.phoneHref}>{heroContent.cta}</ButtonLink>
            <div className="hero__brands">
              <span className="hero__brands-icon">🚗</span>
              <span>{siteConfig.brands.join(' · ')}</span>
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

export default MainScreen;
