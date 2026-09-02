import { NextPage } from 'next';
import MainScreen from '@/app/(site)/components/MainScreen';
import ServiceCta from '@/app/(site)/components/ServiceCta';
import Contacts from '@/app/(site)/components/Contacts';
import AboutUs from '@/app/(site)/components/AboutUs';
import Services from '@/app/(site)/components/Services';
import Features from '@/app/(site)/components/Features';

const HomePage: NextPage = () => {
  return (
    <main>
      <MainScreen />
      <ServiceCta />
      <AboutUs />
      <Services />
      <Features />
      <Contacts />
    </main>
  );
};

export default HomePage;
