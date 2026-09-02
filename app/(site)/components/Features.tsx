'use client';

import { motion } from 'framer-motion';
import FeatureIcon from '@/components/FeatureIcon';
import Container from '@/components/Container';
import { features } from '@/lib/site-content';

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.5, ease: 'easeOut' },
};

const Features = () => {
  return (
    <section className="section section--soft">
      <Container>
        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              className="feature"
              {...fadeIn}
              transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
            >
              <FeatureIcon icon={feature.icon} />
              <h5 className="feature__title">{feature.title}</h5>
              <p className="feature__text">{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Features;
