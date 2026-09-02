'use client';

import { motion } from 'framer-motion';
import ButtonLink from '@/components/UI/ButtonLink';
import Container from '@/components/Container';
import { services } from '@/lib/site-content';

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
};

const Services = () => {
  return (
    <section className="section">
      <Container>
        <motion.h2 className="section-title" {...fadeIn} transition={{ duration: 0.5, ease: 'easeOut' }}>
          Услуги
          <span className="section-accent" />
        </motion.h2>
        <div className="cards-grid cards-grid--2 cards-grid--3">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              {...fadeIn}
              transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.08 }}
              className="card"
            >
              <h3 className="card__title">{service.title}</h3>
              <p className="card__text">{service.description}</p>
              {service.price && <p className="card__price">{service.price}</p>}
            </motion.div>
          ))}
        </div>
        <div className="section-actions">
          <ButtonLink href="/services">Все услуги</ButtonLink>
        </div>
      </Container>
    </section>
  );
};

export default Services;
