import { NextPage } from 'next';
import Container from '@/components/Container';
import ButtonLink from '@/components/UI/ButtonLink';
import { siteConfig } from '@/lib/site-content';

const ContactsPage: NextPage = () => {
  return (
    <main className="page-section">
      <Container>
        <h1 className="section-title section-title--sm">
          Контакты
          <span className="section-accent" />
        </h1>
        <p className="page-intro">
          Свяжитесь с нами для записи на диагностику или консультации по ремонту электронных блоков.
        </p>

        <div className="contacts-grid">
          <div className="card">
            <h2 className="card__title">Телефон</h2>
            <a href={siteConfig.phoneHref} className="phone-link">
              {siteConfig.phone}
            </a>
            <p className="text-muted mt-6">{siteConfig.workingHours}</p>
            <div className="mt-6">
              <ButtonLink href={siteConfig.phoneHref}>Позвонить</ButtonLink>
            </div>
          </div>

          <div className="card card--dashed">
            <h2 className="card__title">Адрес и часы работы</h2>
            <p className="text-muted">Скоро</p>
            <p className="text-muted mt-6">
              Информация об адресе и графике работы будет добавлена позже.
            </p>
          </div>
        </div>

        <div className="card card--dark mt-10">
          <h2 className="card__title">{siteConfig.companyName}</h2>
          <p className="text-muted">{siteConfig.description}</p>
        </div>
      </Container>
    </main>
  );
};

export default ContactsPage;
