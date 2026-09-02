import { NextPage } from 'next';
import Container from '@/components/Container';
import { pricing, services } from '@/lib/site-content';

const ServicesPage: NextPage = () => {
  return (
    <main className="page-section">
      <Container>
        <h1 className="section-title section-title--sm">
          Услуги
          <span className="section-accent" />
        </h1>
        <p className="page-intro">
          Полный спектр услуг по диагностике и ремонту электроники французских автомобилей
          Citroën, Peugeot и Renault.
        </p>

        <div className="cards-grid cards-grid--2 cards-grid--3 mb-16">
          {services.map((service) => (
            <article key={service.id} className="card">
              <h2 className="card__title">{service.title}</h2>
              <p className="card__text">{service.description}</p>
              {service.price && <p className="card__price">{service.price}</p>}
            </article>
          ))}
        </div>

        <section>
          <h2 className="subsection-title">Цены</h2>
          <div className="pricing-table-wrap">
            <table className="pricing-table">
              <thead>
                <tr>
                  <th>Услуга</th>
                  <th>Стоимость</th>
                </tr>
              </thead>
              <tbody>
                {pricing.map((item) => (
                  <tr key={item.id}>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="pricing-note">
            * Точная стоимость зависит от модели автомобиля и сложности работ. Уточняйте по телефону.
          </p>
        </section>
      </Container>
    </main>
  );
};

export default ServicesPage;
