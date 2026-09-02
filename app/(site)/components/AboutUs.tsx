'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import ButtonLink from '@/components/UI/ButtonLink';
import Container from '@/components/Container';
import { aboutText } from '@/lib/site-content';

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.5, ease: 'easeOut' },
};

const AboutUs = () => {
  return (
    <section className="section section--soft">
      <Container className="about">
        <motion.div className="about__text" {...fadeIn}>
          <h2 className="section-title">
            О нас
            <span className="section-accent" />
          </h2>
          <p className="text-lead">{aboutText.lead}</p>
          <p className="text-muted">{aboutText.body}</p>
          <div className="mt-6">
            <ButtonLink href="/contacts" variant="outline">
              Подробнее
            </ButtonLink>
          </div>
        </motion.div>

        <motion.div
          className="about__image-wrap"
          {...fadeIn}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
        >
          <Image
            src="/computer-diagnostics-car-auto-service_266732-15392.avif"
            alt="Компьютерная диагностика автомобиля"
            width={640}
            height={480}
            className="about__image"
          />
        </motion.div>
      </Container>
    </section>
  );
};

export default AboutUs;
